export const capitalize = (str: string) =>
  str
    .charAt(0)
    .toUpperCase() + String(str).slice(1);

export default capitalize