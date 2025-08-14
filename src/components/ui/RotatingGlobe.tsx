import { useEffect, useRef } from 'react';

export const RotatingGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const size = 500;
    canvas.width = size;
    canvas.height = size;

    let rotation = 0;

    // Viewing angle to match the image - tilted view from above-right
    const tiltX = -0.3; // Tilt down slightly
    const tiltY = 0.4;  // Tilt to show the right side

    const project3D = (x, y, z) => {
      // Apply rotation around Y axis
      const cosRot = Math.cos(rotation);
      const sinRot = Math.sin(rotation);
      const rotatedX = x * cosRot - z * sinRot;
      const rotatedZ = x * sinRot + z * cosRot;

      // Apply viewing angle transformations
      const cosTiltX = Math.cos(tiltX);
      const sinTiltX = Math.sin(tiltX);
      const cosTiltY = Math.cos(tiltY);
      const sinTiltY = Math.sin(tiltY);

      // Rotate around X axis (tilt down)
      const tiltedY = y * cosTiltX - rotatedZ * sinTiltX;
      const tiltedZ = y * sinTiltX + rotatedZ * cosTiltX;

      // Rotate around Y axis (viewing angle)
      const finalX = rotatedX * cosTiltY + tiltedZ * sinTiltY;
      const finalZ = -rotatedX * sinTiltY + tiltedZ * cosTiltY;

      // Project to 2D with perspective
      const perspective = 800;
      const scale = perspective / (perspective + finalZ);
      
      return {
        x: size / 2 + finalX * scale,
        y: size / 2 + tiltedY * scale,
        visible: finalZ > -200 // Only draw if in front
      };
    };

    const drawGlobe = () => {
      // Clear canvas with transparent background
      ctx.clearRect(0, 0, size, size);

      const radius = 180;

      // Draw latitude lines
      for (let lat = -75; lat <= 75; lat += 15) {
        const latRad = (lat * Math.PI) / 180;
        const circleRadius = radius * Math.cos(latRad);
        const y = radius * Math.sin(latRad);

        ctx.beginPath();
        ctx.strokeStyle = '#333';
        ctx.lineWidth = lat === 0 ? 1.5 : 1; // Slightly thicker equator

        let firstPoint = true;
        for (let lon = 0; lon <= 360; lon += 3) {
          const lonRad = (lon * Math.PI) / 180;
          const x = circleRadius * Math.cos(lonRad);
          const z = circleRadius * Math.sin(lonRad);
          
          const projected = project3D(x, y, z);
          
          if (projected.visible) {
            if (firstPoint) {
              ctx.moveTo(projected.x, projected.y);
              firstPoint = false;
            } else {
              ctx.lineTo(projected.x, projected.y);
            }
          } else {
            firstPoint = true;
          }
        }
        ctx.stroke();
      }

      // Draw longitude lines
      for (let lon = 0; lon < 180; lon += 15) {
        ctx.beginPath();
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;

        let firstPoint = true;
        for (let lat = -90; lat <= 90; lat += 2) {
          const latRad = (lat * Math.PI) / 180;
          const lonRad = (lon * Math.PI) / 180;
          
          const x = radius * Math.cos(latRad) * Math.cos(lonRad);
          const y = radius * Math.sin(latRad);
          const z = radius * Math.cos(latRad) * Math.sin(lonRad);
          
          const projected = project3D(x, y, z);
          
          if (projected.visible) {
            if (firstPoint) {
              ctx.moveTo(projected.x, projected.y);
              firstPoint = false;
            } else {
              ctx.lineTo(projected.x, projected.y);
            }
          } else {
            firstPoint = true;
          }
        }
        ctx.stroke();
      }

      // Draw polar convergence lines (the radiating lines from the poles)
      const drawPolarLines = (poleY) => {
        for (let lon = 0; lon < 360; lon += 15) {
          const lonRad = (lon * Math.PI) / 180;
          
          ctx.beginPath();
          ctx.strokeStyle = '#333';
          ctx.lineWidth = 0.8;

          let firstPoint = true;
          for (let lat = 75; lat <= 90; lat += 1) {
            const latRad = (lat * Math.PI) / 180;
            const circleRadius = radius * Math.cos(latRad);
            
            const x = circleRadius * Math.cos(lonRad);
            const y = poleY > 0 ? radius * Math.sin(latRad) : -radius * Math.sin(latRad);
            const z = circleRadius * Math.sin(lonRad);
            
            const projected = project3D(x, y, z);
            
            if (projected.visible) {
              if (firstPoint) {
                ctx.moveTo(projected.x, projected.y);
                firstPoint = false;
              } else {
                ctx.lineTo(projected.x, projected.y);
              }
            }
          }
          ctx.stroke();
        }
      };

      // Draw polar convergence for both poles
      drawPolarLines(1);  // North pole
      drawPolarLines(-1); // South pole

      rotation += 0.008;
      requestAnimationFrame(drawGlobe);
    };

    drawGlobe();

    return () => {
      // Cleanup animation
    };
  }, []);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="w-[500px] h-[500px] object-contain"
      />
    </div>
  );
};