import DateInput from './DateInput';
import { useState } from 'react';

const DateRange = () => {
  const [inicio, setInicio] = useState('');
  const [final, setFinal] = useState('');
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Início"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default DateRange;
