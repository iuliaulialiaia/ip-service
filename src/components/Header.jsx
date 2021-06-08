import {Link} from 'react-router-dom';

import styles from '../styles/Header.module.scss';

function Header(props) {
  return (
    <div className={styles.header}>
      <h1>
        <a href='/'>Bitdefender</a>
      </h1>

      <nav>
        <Link to='/add'>ADD</Link>
        <Link to='/get'>GET</Link>
        <Link to='/update'>UPDATE</Link>
        <Link to='/delete'>DELETE</Link>
      </nav>
    </div>
  );
}

export default Header;