import {Link} from 'react-router-dom';

import styles from '../styles/Footer.module.scss';

function Footer(props) {
  return (
    <div className={styles.footer}>
      <h1>
        <a href='/'>Bitdefender</a>
      </h1>

      {/*the links are linked to Home component*/}
      <nav>
        <Link to='/legal-terms'>Legal Terms</Link>
        <Link to='/privacy-policy'>Privacy Policy</Link>
        <Link to='/support'>Support</Link>
        <Link to='/contact-us'>Contact Us</Link>
      </nav>
    </div>
  );
}

export default Footer;