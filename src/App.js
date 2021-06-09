import {Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/main/Home';
import Form from './components/main/Form';

import styles from './styles/App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header/>

      <Switch>
        <Route path='/add'>
          <Form action='add'/>
        </Route>
        <Route path='/get'>
          <Form action='get'/>
        </Route>
        <Route path='/update'>
          <Form action='update'/>
        </Route>
        <Route path='/delete'>
          <Form action='delete'/>
        </Route>
        <Route path='/' component={Home}/>
      </Switch>

      <Footer/>
    </div>
  );
}

export default App;
