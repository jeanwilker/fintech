import resumo from '../assets/icons/resumo.svg';
import vendas from '../assets/icons/vendas.svg';
import webhooks from '../assets/icons/webhooks.svg';
import configuracoes from '../assets/icons/configuracoes.svg';
import contato from '../assets/icons/contato.svg';
import sair from '../assets/icons/sair.svg';
import FintechSVG from '../assets/FintechSVG';
import { NavLink } from 'react-router-dom';

const Sidenav = () => {
  return (
    <nav className="flex-1 bg-color-3 p-5 rounded-[1.25rem]">
      <FintechSVG title="Fintech logo" />
      <ul>
        <li className="flex items-center gap-5">
          <span className="w-8 h-8 bg-color-4  flex items-center justify-center rounded-[1.25rem] hover:bg-color-3">
            <img src={resumo} />
          </span>
          <NavLink
            to="/"
            className="flex-1 text-lg text-my-color-1 mx-0 my-1 px-0 py-2.5"
          >
            Resumo
          </NavLink>
        </li>

        <li className="flex items-center gap-5">
          <span className="w-8 h-8 bg-color-4  flex items-center justify-center rounded-[1.25rem] hover:bg-color-3">
            <img src={vendas} />
          </span>
          <NavLink
            to="/vendas"
            className="flex-1 text-lg text-my-color-1 mx-0 my-1 px-0 py-2.5"
          >
            Vendas
          </NavLink>
        </li>

        <li className="flex items-center gap-5">
          <span className="w-8 h-8 bg-color-4  flex items-center justify-center rounded-[1.25rem] hover:bg-color-3">
            <img src={webhooks} />
          </span>
          <a className="flex-1 text-lg text-my-color-1 mx-0 my-1 px-0 py-2.5">
            Webhooks
          </a>
        </li>

        <li className="flex items-center gap-5">
          <span className="w-8 h-8 bg-color-4  flex items-center justify-center rounded-[1.25rem] hover:bg-color-3">
            <img src={configuracoes} />
          </span>
          <a className="flex-1 text-lg text-my-color-1 mx-0 my-1 px-0 py-2.5">
            Configuracoes
          </a>
        </li>

        <li className="flex items-center gap-5">
          <span className="w-8 h-8 bg-color-4  flex items-center justify-center rounded-[1.25rem] hover:bg-color-3">
            <img src={contato} />
          </span>
          <a className="flex-1 text-lg text-my-color-1 mx-0 my-1 px-0 py-2.5">
            Contato
          </a>
        </li>

        <li className="flex items-center gap-5">
          <span className="w-8 h-8 bg-color-4  flex items-center justify-center rounded-[1.25rem] hover:bg-color-3">
            <img src={sair} />
          </span>
          <a className="flex-1 text-lg text-my-color-1 mx-0 my-1 px-0 py-2.5">
            Sair
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
