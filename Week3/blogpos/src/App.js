import { store } from './store'
import { Provider } from 'react-redux'
import './App.css';
import Post from './components/Post';

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
      <Post />
    </div>
  </Provider>
  );
}

export default App;
