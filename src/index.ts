import './assets/style/layout.css';
import './style.css';
import './assets/img/favicon.jpg';
import { appGarage } from './components/garage/appGarage';
import { appWinners } from './components/winners/appWinners';

appGarage().catch((err: string) => {
  throw new Error(err);
});
appWinners().catch((err: string) => {
  throw new Error(err);
});