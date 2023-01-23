export const renderWinsMessage = (name: string, time: number) => `
  <div class="win-message">${name} wins! [${time.toString()}s]</div>
`;