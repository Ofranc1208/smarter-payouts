// src/utils/validationHelpers.js

export function validateStartDate(dateStr) {
  if (!dateStr) return false;

  const minStartDate = new Date('2024-05-14'); // Adjust if needed
  const inputDate = new Date(dateStr);
  return inputDate >= minStartDate;
}

export function validateEndDateRange(start, end) {
  if (!start || !end) return false;

  const startDate = new Date(start);
  const endDate = new Date(end);

  const sixMonthsLater = new Date(startDate);
  sixMonthsLater.setMonth(startDate.getMonth() + 6);

  return endDate >= sixMonthsLater;
}
