import { PropsWithChildren, createContext, useContext, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { getDate } from '../utils/getDate';

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
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
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
  const [inicio, setInicio] = useState(getDate(30));
  const [final, setFinal] = useState(getDate(0));

  const { data, loading, error } = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`,
  );

  return (
    <DataContext.Provider
      value={{ data, loading, error, inicio, setInicio, final, setFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { useData, DataContextProvider };
