export const getWinner = async (url: string, id: number) => {
  const response = await fetch(`${url}winners/${id}`);
  return response;
};