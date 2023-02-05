import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import './components/Style.css';
import { Routes,Route } from "react-router-dom";
import AllItems from './components/MainContent';
import Cart from './components/Cart';
import ItemDetail from './components/ItemDetail';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<AllItems />} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/ItemsDetails/:id" element={<ItemDetail/>} />     
      </Routes>
    </div>
  );
}

export default App;
