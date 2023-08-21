import { IVenda } from '../../types/types';
import { NavLink } from 'react-router-dom';

const Vendasitem = ({ venda }: { venda: IVenda }) => {
  return (
    <div className="flex-1 p-5 rounded-[1.25rem] bg-color-5 grid grid-cols-[auto_auto_1fr] gap-5 items-center mb-2.5">
      <NavLink
        className="font-[monospace] text-inherit"
        to={`/vendas/${venda.id}`}
      >
        {venda.id}
      </NavLink>
      <div>{venda.nome}</div>
      <div className="justify-self-end">
        {venda.preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
    </div>
  );
};

export default Vendasitem;
