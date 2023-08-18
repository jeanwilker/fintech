import { useData } from '../../../Context/DataContext';
import DateInput from './DateInput';

const DateRange = () => {
  const { final, setFinal, inicio, setInicio } = useData();

  return (
    <form
      className="flex gap-5 p-5 rounded-[1.25rem] bg-color-5"
      onSubmit={(e) => e.preventDefault()}
    >
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
