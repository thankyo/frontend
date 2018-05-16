export const required = value => value ? undefined : 'Required';
export const maxSize = (max) => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const urlFormat = value => value.indexOf(".") !== -1 ? undefined: "Check url format";
export const emailFormat = value => value.indexOf("@") !== -1 ? undefined: "Email missing @ sign, check again";

export const max27 = maxSize(27);
export const max64 = maxSize(64);
export const max54 = maxSize(54);
