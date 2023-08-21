import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { IVenda } from '../../types/types';
import Loading from '../../Components/Loading/Loading';

type venda = Omit<IVenda, 'data'>;

const Venda = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<venda>(
    `http://data.origamid.dev/vendas/${id}`,
  );

  if (loading) return <Loading />;
  if (data === null) return null;
  return (
    <div>
      <div className="flex-1 bg-white p-5 rounded-[1.25rem] mb-5">
        ID: {data.id}
      </div>
      <div className="flex-1 bg-white p-5 rounded-[1.25rem] mb-5">
        Nome: {data.nome}
      </div>
      <div className="flex-1 bg-white p-5 rounded-[1.25rem] mb-5">
        Preço:{' '}
        {data.preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
      <div className="flex-1 bg-white p-5 rounded-[1.25rem] mb-5">
        Status: {data.status}
      </div>
      <div className="flex-1 bg-white p-5 rounded-[1.25rem] mb-5">
        Pagamento: {data.pagamento}
      </div>
    </div>
  );
};

export default Venda;
