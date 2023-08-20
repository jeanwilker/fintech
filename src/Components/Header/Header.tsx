import { useState } from 'react';
import Months from '../Months/Months';
import DateRange from './Components/DateRange';

const Header = () => {
  const [title, setTitle] = useState('Resumo');

  return (
    <header className="mb-5">
      <div className="grid grid-cols-[1fr_1fr] gap-5 mb-5">
        <DateRange />
        <h1 className='flex-1 bg-color-3 p-5 rounded-[1.25rem]'>{title}</h1>
      </div>
      <Months />
    </header>
  );
};

export default Header;
