export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validatePassword = (password) => {
    return password.length >= 6;
  };
  
  export const validateRequiredFields = (fields) => {
    for (const key in fields) {
      if (!fields[key].trim()) {
        return false;
      }
    }
    return true;
  };
  
  export const validatePasswordMatch = (password, confirmPassword) => {
    return password === confirmPassword;
  };
  