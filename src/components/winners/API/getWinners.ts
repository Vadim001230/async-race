export const getWinners = async (url: string, page = '', limit = '', sort = '', order = '') => {
  const response = await fetch(`${url}winners?_limit=${limit}&_page=${page}&_sort=${sort}&_order=${order}`);
  return response;
};