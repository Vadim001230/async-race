import { checkSelector } from '../../../utils/checkSelector';

export const showWinMsg = (text: string) => {
  const winMsg = checkSelector(document, '.win-message') as HTMLDivElement;
  winMsg.textContent = text;
  winMsg.style.display = 'block';
  setTimeout(() => {
    winMsg.style.display = 'none';
  }, 5000);
};