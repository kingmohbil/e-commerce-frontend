export const calculateAge = (dob: Date) => {
  // Calculate the difference in milliseconds between the current date and the provided date of birth
  const msDiff = Date.now() - dob.getTime();
  // Create a new Date object representing the difference in milliseconds and store it in the variable age_dt (age Date object)
  const ageDate = new Date(msDiff);

  // Calculate the absolute value of the difference in years between the age Date object and the year 1970 (UNIX epoch)
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
