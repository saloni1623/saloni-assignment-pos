import { Provider } from 'react-redux';
import './App.css';
import MainScreen from './screen/MainScreen';
import store from './assets/redux/store';

function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}

export default App;
