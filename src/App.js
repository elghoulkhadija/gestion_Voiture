import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import ClientandCard from './component/ClientandCard';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* Your components go here */}
        <ClientandCard/>
      </Provider>
    </div>
  );
}

export default App;
