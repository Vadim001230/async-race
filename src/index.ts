import './assets/style/layout.css';
import './style.css';
import './assets/img/favicon.jpg';
import { appGarage } from './components/garage/appGarage';

appGarage().catch((err: string) => {
  throw new Error(err);
});