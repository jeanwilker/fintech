import { PropsWithChildren, createContext, useContext } from 'react';
import useFetch from '../hooks/useFetch';

type IVenda = {
  id: string;
  nome: string;
  preco: number;
  status: 'pago' | 'processando' | 'falha';
  pagamento: 'cartao' | 'boleto' | 'pix';
  parcelas: number | null;
  data: string;
};

type IDataContext = {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
};

const DataContext = createContext<IDataContext | null>(null);

const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataContextProvider');
  }
  return context;
};

const DataContextProvider = ({ children }: PropsWithChildren) => {
  const { data, loading, error } = useFetch<IVenda[]>(
    'https://data.origamid.dev/vendas',
  );

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export { useData, DataContextProvider };
