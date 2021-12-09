// for React-DatePicker
export const isWorkWeek = (date) => {
    if (date.getDay() === 0 || date.getDay() === 1) {
      return false;
    } else {
      return true;
    }
  };