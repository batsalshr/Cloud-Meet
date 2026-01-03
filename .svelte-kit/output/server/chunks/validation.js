import validator from "validator";
const MAX_LENGTHS = {
  name: 100,
  email: 254,
  // RFC 5321 maximum
  description: 5e3,
  notes: 1e3,
  slug: 50
};
function isValidEmail(email) {
  if (!email || typeof email !== "string") {
    return false;
  }
  if (email.length > MAX_LENGTHS.email) {
    return false;
  }
  return validator.isEmail(email, {
    allow_display_name: false,
    require_tld: true,
    allow_ip_domain: false
  });
}
function validateLength(value, fieldName, maxLength, required = false) {
  if (!value || value.trim().length === 0) {
    if (required) {
      return `${fieldName} is required`;
    }
    return null;
  }
  if (value.length > maxLength) {
    return `${fieldName} must be ${maxLength} characters or less`;
  }
  return null;
}
function validateFields(validations) {
  for (const error of validations) {
    if (error) {
      return error;
    }
  }
  return null;
}
export {
  MAX_LENGTHS as M,
  validateLength as a,
  isValidEmail as i,
  validateFields as v
};
