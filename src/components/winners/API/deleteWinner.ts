export const deleteWinner = async (url: string, id: number) => {
  const response = await fetch(`${url}winners/${id}`, {
    method: 'DELETE',
  });
  return response;
};