import { IVenda } from '../../types/types';

const Vendasitem = ({ venda }: { venda: IVenda }) => {
  return (
    <div className="flex-1 p-5 rounded-[1.25rem] bg-color-5 grid grid-cols-[auto_auto_1fr] gap-5 items-center mb-2.5">
      <a className="font-[monospace] text-inherit" href="">
        {venda.id}
      </a>
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
