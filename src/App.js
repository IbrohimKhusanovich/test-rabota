import './App.css';
import About from './components/about/about';
import ClientsSay from './components/clientsSay/clientsSay';
import Commerce from './components/commerce/commerce';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import LinksPanel from './components/linksPanel/linksPanel';
import Navbar from './components/navbar/navbar';
import Support from './components/support/support';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Commerce/>
      <About/>
      <ClientsSay/>
      <Support/>
      <Footer/>
      <LinksPanel/>
    </div>
  );
}

export default App;
