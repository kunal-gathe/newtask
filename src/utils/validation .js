

export function validation(email, password, number) {
  const validateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validatePassword =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const numberValidation =/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(number);

  if (!validateEmail) return "Email Is Not Valid";
  if (!validatePassword) return "Password Is Not Valid";
  if (!numberValidation) return "Phone Number Is Not Valid";

  return null;
}

