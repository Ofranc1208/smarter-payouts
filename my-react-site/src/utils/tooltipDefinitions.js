// src/utils/tooltipDefinitions.js
const tooltipDefinitions = {
  paymentType: `
    🔒 What does "Payment Type" mean?
    It refers to whether your payments are guaranteed for a set time or depend on someone's life.

    Important:
    Check your settlement paperwork to confirm your payment type. Incorrect information will affect your quote.

    <strong>Guaranteed:</strong> Payments are for a set time, regardless of life.<br/>
    <strong>Life Contingent:</strong> Payments depend on someone living.<br/>
    <strong>I Don't Know:</strong> Choose this if unsure.
  `,
  paymentMode: `
    🗓️ What does "Payment Mode" mean?
    It describes how often you receive payments throughout the year.

    Important:
    Check your paperwork to confirm your payment mode. Selecting the incorrect mode will result in an inaccurate quote.

    <strong>Monthly:</strong> Paid each month.<br/>
    <strong>Quarterly:</strong> Paid every 3 months.<br/>
    <strong>Semiannually:</strong> Paid every 6 months.<br/>
    <strong>Annually:</strong> Paid once per year.<br/>
    <strong>Lump Sum:</strong> Paid as a single one-time payment.
  `,
  paymentAmount: `
    This is the total amount of future payments you want to exchange for a lump sum today.

    Example:
    Let's say today is May 20, 2025, and John wants to sell payments that begin in the future, starting in November 2025 (which is about 6 months from now). John would enter the amount of those November 2025 and later payments in this field.

    🟢 Only include the payments you want to exchange — starting from the first future payment you'd like to sell.
  `,
  increaseRate: `
    Does your payment increase each year?

    Example:
    If your $1,000 monthly payment increases by 2% each year, it will be $1,020/month in a year, $1,040.40 in two years, and so on.

    Important:
    Check your paperwork to confirm if your payments increase yearly and by how much. If they don't, select 0%.

    🟢 Only enter the annual increase for the payments you want to exchange for a lump sum.
  `,
  startDate: `
    🗓️ What does "Payment Start Date" mean?
    This is the month and year of the very first future payment you want to exchange for a lump sum today.

    Example:
    Let's say today is May 20, 2025. John has payments scheduled monthly through 2040. He wants to sell the payments starting in November 2025. So, he would enter November 2025 as his Payment Start Date.

    Important:
    We can only purchase future payments. The Payment Start Date cannot be in the past.

    🟢 Only include the payments you want to sell — starting with your first future payment and ending with your last.
  `,
  endDate: `
    📅 What does "Payment End Date" mean?
    This is the last month of the future payments you want to exchange for a lump sum.

    Important:
    If you're selling monthly payments, your Payment End Date must be at least 6 months from today.

    Example:
    Today is May 20, 2025. John wants to sell monthly payments starting in November 2025 (6 months from now) and ending in June 2030. He should enter June 2030 as the Payment End Date.

    🟢 Only include the payments you want to sell — starting with your first future payment and ending with your last.
  `
};

export default tooltipDefinitions;
