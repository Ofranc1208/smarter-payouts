// src/utils/tooltipDefinitions.js
const tooltipDefinitions = {
  paymentType: `
    <strong>Payment Type</strong><br/>
    Refers to the structure of your settlement payments:<br/><br/>
    <strong>Guaranteed:</strong> You’ll receive payments for a set period, even if you pass away before it ends.<br/><br/>
    <strong>Life Contingent:</strong> Payments stop if the recipient passes away.<br/><br/>
    <strong>I Don’t Know:</strong> Choose this if you're unsure which type applies to you.
  `,
  paymentMode: `
    <strong>Payment Mode</strong><br/>
    <strong>Monthly:</strong> Paid each month.<br/>
    <strong>Quarterly:</strong> Paid every 3 months.<br/>
    <strong>Semiannually:</strong> Twice a year.<br/>
    <strong>Annually:</strong> Once per year.<br/>
    <strong>Lump Sum:</strong> Entire amount at once.
  `,
  paymentAmount: `
    Enter the exact amount per payment.<br/>
    Range: $100 to $1,000,000.
  `,
  increaseRate: `
    Does your payment increase yearly?<br/>
    Select rate or choose 0% if unsure.
  `,
  startDate: `
    When do your future payments begin?
  `,
  endDate: `
    When do these payments stop?<br/>
    Must be 6+ months after start.
  `
};

export default tooltipDefinitions;
