export const getDate = (n: number) => {
  const data = new Date();
  data.setDate(data.getDate() - n);
  const dd = String(data.getDate()).padStart(2, '0');
  const mm = String(data.getMonth() + 1).padStart(2, '0');
  const yyyy = data.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
};
