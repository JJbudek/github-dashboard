import './App.scss';

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Repositories from './components/Repositories/Repositories';

function App() {
  return (
    <section className="App-wrapper">
      <Navbar></Navbar>
      <Header></Header>
      <Repositories></Repositories>
    </section>
  );
}

export default App;
