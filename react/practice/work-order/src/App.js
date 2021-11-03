import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import styles from './app.module.scss';
import Message from './pages/Message/index';
import TransferTicket from './pages/TransferTicket';

function App() {
  return (
    <div className={styles.app}>
      <HashRouter>
      {/* <BrowserRouter> */}
        <Switch>
          <Route path='/' exact component={Message} />
          <Route path='/transforTicket' exact component={TransferTicket} />
        </Switch>
      {/* </BrowserRouter> */}
      </HashRouter>
    </div>
  );
}

export default App;
