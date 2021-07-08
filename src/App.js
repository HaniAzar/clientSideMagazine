import logo from './logo.svg';
import './App.css';
import ViewUsers from './components/viewUsers';
import AdminEnterce from './components/adminEnterce'
import store from './store'
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AdminEnterce />

        <ViewUsers />
      </Provider>



    </div>
  );
}

export default App;
