import './App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import Seguimentos from './components/Seguimentos';
import Vitrine from './components/Vitrine';
import Parceiros from './components/Parceiros';
import Produtos from './components/Produtos';
import Footer from './components/Footer';
import Rodape from './components/Rodape';


function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Seguimentos/>
      <Vitrine/>
      <Parceiros/>
      <Produtos/>
      <Footer/>
      <Rodape/>
    </div>
  );
}

export default App;
