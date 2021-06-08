import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/main/Home';
import Add from './components/main/Add';
import Delete from './components/main/Delete';
import Get from './components/main/Get';
import Update from './components/main/Update';

import styles from './styles/App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <Home/>
      {/*<Add/>*/}
      {/*<Delete/>*/}
      {/*<Update/>*/}
      {/*<Get/>*/}
      <Footer/>
    </div>
  );
}

export default App;
