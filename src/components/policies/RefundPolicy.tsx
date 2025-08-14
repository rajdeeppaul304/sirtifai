function RefundPolicy() {
  return (
    <div className=" bg-[#FEF7F1]">
      {" "}
      <div className="list-none space-y-4 max-w-screen-xl mx-auto">
        <h3 className="text-[#FE7743] text-xl font-bold">Sirtifai Refund Policy</h3>

        <div className="space-y-4">
          <p>Effective Date: [Insert Date]</p>
          <p>
            This Refund Policy explains the conditions under which Sirtifai
            EdTech Pvt. Ltd. (India) and Sirtifai Inc. (USA) issue refunds for
            program enrollments, subscription fees, and other payments. By
            enrolling in any Sirtifai program, you agree to the terms outlined
            below.
          </p>
        </div>

        <div>
          <li className="font-semibold">1. Eligibility for Refunds</li>
          <p>Refunds will be granted only under the following circumstances:</p>
          <ul className="list-disc list-inside">
            <li>
              Duplicate Payment – You are charged more than once for the same
              transaction due to a technical or banking error.
            </li>
            <li>
              Transaction Failure – Your payment is debited but enrollment is
              not activated, and no services are provided.
            </li>
            <li>
              Program Cancellation by Sirtifai – If Sirtifai cancels the program
              before the official start date without providing an equivalent
              alternative.
            </li>
            <li>
              Legal Requirement – If applicable law in India, USA, or your
              jurisdiction mandates a refund in a specific case.
            </li>
          </ul>
        </div>

        <div>
          <li className="font-semibold">2. Non-Refundable Cases</li>
          <p>Refunds will not be granted if:</p>
          <ul className="list-disc list-inside">
            <li>
              You withdraw from the program after gaining access to course
              content or projects.
            </li>
            <li>
              You fail to attend classes, complete assignments, or engage with
              the program.
            </li>
            <li>
              You are removed from the program for misconduct, academic
              dishonesty, or breach of Sirtifai policies.
            </li>
            <li>
              You provided false or misleading information during registration.
            </li>
          </ul>
        </div>
        <div>
          <li className="font-semibold">3. Refund Request Procedure</li>
          <p>To request a refund:</p>
          <ul className="list-decimal list-inside">
            <li>
              Submit a written request to billing@sirtifai.com within 7 working
              days of the qualifying event.
            </li>
            <li>
              Include: <br />
              <ul className="list-disc list-inside">
                <li>Full name and enrollment ID.</li>
                <li>Proof of payment (receipt, bank statement).</li>
                <li>Reason for refund request and supporting evidence.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <li className="font-semibold">4. Processing Timelines</li>
          <ul className="list-disc list-inside">
            <li>
              India Payments – Processed within 14 working days from approval.
            </li>
            <li>
              USA Payments – Processed within 14 business days from approval.
            </li>
            <li>
              International Payments – May take 14–21 business days depending on
              banking and currency conversion timelines.
            </li>
          </ul>
        </div>
        <div>
          <li className="font-semibold">5. Deductions</li>
          <ul className="list-disc list-inside">
            <li>
              Bank charges, payment gateway fees, and currency conversion costs
              (for USD or other currencies) will be deducted from the refund
              amount unless prohibited by law.
            </li>
          </ul>
        </div>
        <div>
          <li className="font-semibold">6. Special Cases</li>
          <p>For duplicate payments or technical errors:</p>
          <ul className="list-disc list-inside">
            <li>
              Refunds will be processed within 7 working/business days of
              approval.
            </li>
            <li>
              Such cases will be prioritized over standard refund requests.
            </li>
          </ul>
        </div>
        <div>
          <li className="font-semibold">7. Contact for Refund Queries</li>
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

export default RefundPolicy;
