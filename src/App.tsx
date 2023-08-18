import Header from './Components/Header/Header';
import Sidenav from './Components/Sidenav';
import { DataContextProvider } from './Context/DataContext';
import Resumo from './Pages/Resumo';
import './Styles/global.css';

function App() {
  return (
    <DataContextProvider>
      <div className="grid p-5 gap-5">
        <Sidenav />
        <main>
          <Header />
          <Resumo />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
