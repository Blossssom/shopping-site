import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Product from './pages/Product';
import Header from './pages/Header';


function App() {
  const [itemList, setItemList] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(12);

  return (
    <div className="App">
      <BrowserRouter>
      <Header setSearch={setSearch} />
        <Routes>
          <Route path='/' element={<Main page={page} setPage={setPage} search={search} itemList={itemList} setItemList={setItemList} />}/>
          <Route path='/product/:id' element={<Product itemList={itemList} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
