import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataContextProvider } from './Context/DataContext';
import Header from './Components/Header/Header';
import Sidenav from './Components/Sidenav';
import Resumo from './Pages/Resumo';
import Vendas from './Pages/Vendas/Vendas';
import Venda from './Pages/Venda/Venda';
import './Styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="grid gap-5 grid-cols-[240px_auto] p-5">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/vendas/:id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
