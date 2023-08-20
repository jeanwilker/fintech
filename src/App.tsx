import Header from './Components/Header/Header';
import Sidenav from './Components/Sidenav';
import { DataContextProvider } from './Context/DataContext';
import Resumo from './Pages/Resumo';
import Vendas from './Pages/Vendas/Vendas';
import './Styles/global.css';

function App() {
  return (
    <DataContextProvider>
      <div className="grid gap-5 grid-cols-[240px_auto] p-5">
        <Sidenav />
        <main>
          <Header />
          <Resumo />
          <Vendas />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
