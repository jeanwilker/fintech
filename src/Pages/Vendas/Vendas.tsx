import { useData } from '../../Context/DataContext';
import Vendasitem from './Vendasitem';

const Vendas = () => {
  const { data } = useData();
  return (
    <ul>
      {data?.map((venda) => (
        <li>
          <Vendasitem key={venda.id} venda={venda} />
        </li>
      ))}
    </ul>
  );
};

export default Vendas;
