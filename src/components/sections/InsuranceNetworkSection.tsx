"use client"
import { motion } from "framer-motion"

export const InsuranceNetworkSection = () => {
  return (
    <motion.section
      className="w-full bg-white py-8 sm:py-12 px-4 sm:px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-[1400px] xl:max-w-[1550px] 2xl:max-w-[1700px] mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <motion.h2
            className="text-[2.2rem] xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Insurance Network
          </motion.h2>
          <motion.p
            className="text-gray-600 text-base xs:text-lg lg:text-xl mb-8 max-w-3xl xl:max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We&apos;ve partnered with leading insurance providers to ensure comprehensive and reliable coverage.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-gray-600 font-medium text-sm xs:text-xl sm:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {["Pazcare", "Star Health", "HDFC ERGO", "ICICI Lombard"].map((provider, index) => (
              <motion.span
                key={provider}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, color: "#FE7642" }}
              >
                {provider}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="bg-[#FFE5D6] rounded-xl sm:rounded-2xl overflow-hidden max-w-full mx-auto shadow-2xl shadow-black/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.div
            className="text-center py-5 sm:py-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Available Insurance Add-ons</h3>
          </motion.div>

          {/* Table Header */}
          <motion.div
            className="hidden sm:grid grid-cols-12 border-t border-b border-white/40 px-4 sm:px-6 py-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <span className="text-[#FE7642] font-semibold col-span-2">Add-on</span>
            <span className="text-[#FE7642] font-semibold col-span-6">Description</span>
            <span className="text-[#FE7642] font-semibold col-span-2">Availability</span>
            <span className="text-[#FE7642] font-semibold col-span-2">Cost</span>
          </motion.div>

          {/* Mobile Table Header */}
          <motion.div
            className="grid sm:hidden grid-cols-4 border-t border-b border-white/40 px-2 py-2 text-xs font-semibold text-[#FE7642]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <span className="col-span-1">Add-on</span>
            <span className="col-span-1">Description</span>
            <span className="col-span-1">Availability</span>
            <span className="col-span-1">Cost</span>
          </motion.div>

          <div className="hidden sm:block divide-y divide-white/40">
            {[
              {
                addon: "Legal Support",
                desc: "Contract review, dispute resolution, legal consultation",
                avail: "All Programs",
                cost: "₹4,999/year",
              },
              {
                addon: "CA/Tax Services",
                desc: "Tax filing, GST registration, financial advice",
                avail: "Domestic & International",
                cost: "₹7,499/year",
              },
              {
                addon: "Resume Verification",
                desc: "Background check, credential verification, reference validation",
                avail: "International Only",
                cost: "₹5,999/year",
              },
            ].map((row, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-12 px-6 py-4 text-sm lg:text-base"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                whileHover={{ backgroundColor: "rgba(254, 118, 66, 0.05)" }}
              >
                <span className="font-semibold text-gray-900 col-span-2">{row.addon}</span>
                <span className="text-gray-800 col-span-6">{row.desc}</span>
                <span className="text-gray-800 col-span-2">{row.avail}</span>
                <span className="font-semibold text-gray-900 col-span-2">{row.cost}</span>
              </motion.div>
            ))}
          </div>

          <div className="sm:hidden divide-y divide-white/40 text-xs">
            {[
              {
                addon: "Legal Support",
                desc: "Contract review, dispute resolution, legal consultation",
                avail: "All Programs",
                cost: "₹4,999/year",
              },
              {
                addon: "CA/Tax Services",
                desc: "Tax filing, GST registration, financial advice",
                avail: "Domestic & International",
                cost: "₹7,499/year",
              },
              {
                addon: "Resume Verification",
                desc: "Background check, credential verification, reference validation",
                avail: "International Only",
                cost: "₹5,999/year",
              },
            ].map((row, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-4 px-2 py-3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
              >
                <span className="font-semibold text-gray-900 col-span-1">{row.addon}</span>
                <span className="text-gray-800 col-span-1">{row.desc}</span>
                <span className="text-gray-800 col-span-1">{row.avail}</span>
                <span className="font-semibold text-gray-900 col-span-1">{row.cost}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
