import AOS from 'aos';
import 'aos/dist/aos.css';

export default ({ app }) => {
  app.AOS = AOS.init({
    disable: 'phone',
    once: true,
    offset: 0,
    mirror: true,
  });
};
