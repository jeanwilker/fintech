import GraphSales from '../Components/GraphSales/GraphSales';
import { useData } from '../Context/DataContext';

const Resumo = () => {
  const { data } = useData();

  if (data === null) return null;
  return (
    <section>
      <div className="flex gap-5 text-2xl font-semibold mb-5">
        <div className="flex-1 p-5 rounded-[1.25rem] bg-color-5">
          <h2 className="text-2xl mb-5 text-my-color-1">Vendas</h2>
          <span>
            {data
              .filter((i) => i.status !== 'falha')
              .reduce((total, venda) => total + venda.preco, 0)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>

        <div className="flex-1 p-5 rounded-[1.25rem] bg-color-5">
          <h2 className="text-2xl mb-5 text-my-color-1">Recebido</h2>
          <span>
            {data
              .filter((i) => i.status === 'pago')
              .reduce((total, venda) => total + venda.preco, 0)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>

        <div className="flex-1 p-5 rounded-[1.25rem] bg-color-5">
          <h2 className="text-2xl mb-5 text-my-color-1">Processando</h2>
          <span>
            {data
              .filter((i) => i.status === 'processando')
              .reduce((total, venda) => total + venda.preco, 0)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
      </div>
      <div className="flex-1 p-5 rounded-[1.25rem] bg-color-5 mb-5">
        <GraphSales data={data} />
      </div>
    </section>
  );
};

export default Resumo;
