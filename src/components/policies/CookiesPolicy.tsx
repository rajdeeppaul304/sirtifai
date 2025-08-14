function CookiesPolicy() {
  return (
    <div className=" bg-[#FEF7F1]">
      <div className="list-none space-y-4 max-w-screen-xl mx-auto">
        <h3 className="text-[#FE7743] text-xl font-bold">Sirtifai Cookies Policy</h3>

        <div className="space-y-4">
          <p>Effective Date: [Insert Date]</p>
          <p>
            This Cookies Policy explains how Sirtifai EdTech Pvt. Ltd. (India)
            and Sirtifai Inc. (USA) (“Sirtifai”,“we”“our”,,“us”) use cookies and
            similar technologies to recognize you when you visit our websites,
            platforms, and learning management systems (LMS).
          </p>
        </div>

        <div>
          <li className="font-semibold">1. What Are Cookies?</li>
          <p>
            Cookies are small text files placed on your device when you visit a
            website. They help us remember your preferences, improve site
            performance, and provide a personalized user experience.
          </p>
        </div>
        <div>
          <li className="font-semibold">2. Types of Cookies We Use</li>
          <div>
            <p>2.1 Necessary Cookies (Always Active)</p>
            <ul className="list-disc list-inside">
              <li>Essential for website and platform functionality.</li>
              <li>Examples:</li>
            </ul>
            <ul className="list-decimal list-inside">
              <li>
                sirtifai session – Maintains logged-in session across pages.
              </li>
              <li>
                XSRF-TOKEN – Protects against Cross-Site Request Forgery (CSRF)
                attacks.
              </li>
              <li>cky-consent – Stores your cookie consent preferences.</li>
            </ul>
          </div>

          <div>
            <p>2.2 Performance & Analytics Cookies</p>
            <ul className="list-disc list-inside">
              <li>Help us understand how visitors interact with our site.</li>
              <li>Examples:</li>
            </ul>
            <ul className="list-decimal list-inside">
              <li>
                Google Analytics (_ga, _gid) – Tracks usage patterns to improve
                content.
              </li>
            </ul>
          </div>

          <div>
            <p>2.3 Functionality Cookies</p>
            <ul className="list-disc list-inside">
              <li>
                Remember preferences such as language, region, or display
                settings.
              </li>
            </ul>
          </div>
          <div>
            <p>2.4 Targeting & Advertising Cookies</p>
            <ul className="list-disc list-inside">
              <li>
                Used for delivering relevant ads and measuring campaign
                performance.
              </li>
              <li>Example: Facebook Pixel, Google Ads remarketing tags.</li>
            </ul>
          </div>
        </div>
        <div>
          <li className="font-semibold">3. How We Use Cookies</li>
          <p>We use cookies to:</p>
          <ul className="list-disc list-inside">
            <li>Enable secure login and account management.</li>
            <li>Track learning progress on the LMS.</li>
            <li>Analyze website traffic and improve user experience.</li>
            <li>Display personalized content and offers.</li>
          </ul>
        </div>
        <div>
          <li className="font-semibold">4. Third-Party Cookies</li>
          <p>
            Some cookies are placed by third-party services we use for
            analytics, marketing, or payment processing. These parties have
            their own privacy and cookies policies.
          </p>
        </div>
        <div>
          <li className="font-semibold">5. Managing Your Cookie Preferences</li>
          <ul className="list-disc list-inside">
            <li>
              You can accept or reject non-essential cookies through our Cookie
              Consent Banner.
            </li>
            <li>You can also manage cookies via your browser settings:</li>
          </ul>
          <ul className="list-decimal list-inside">
            <li>
              {
                "Chrome: Settings > Privacy and Security > Cookies and other site data"
              }
            </li>
            <li>
              {"Firefox: Options > Privacy & Security > Cookies and Site Data"}
            </li>
            <li>{"Safari: Preferences > Privacy"}</li>
          </ul>
        </div>
        <div>
          <li className="font-semibold">6. Consent</li>
          <p>
            By using our website, you consent to the use of cookies in
            accordance with this policy unless you disable them in your browser.
          </p>
        </div>
        <div>
          <li className="font-semibold">7. Changes to This Cookies Policy</li>
          <p>
            We may update this Cookies Policy periodically. Any changes will be
            posted on this page with an updated “Effective Date”.
          </p>
        </div>
        <div>
          <li className="font-semibold">8. Contact Us</li>
          <p>
            India Office <br />
            Email: billing@sirtifai.com <br />
            USA Office <br />
            Email: billing.usa@sirtifai.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default CookiesPolicy;
