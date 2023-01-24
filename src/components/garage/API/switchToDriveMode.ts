export async function switchToDriveMode(url: string, id: number, status: 'drive') {
  const response = await fetch(`${url}engine?id=${id}&status=${status}`, {
    method: 'PATCH',
  });

  return response;
}