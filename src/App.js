import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <div className='container content'>
        <Header />
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
