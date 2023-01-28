export const slugify = text => {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z]+|[']/g, '-')
    .toLowerCase();
};
