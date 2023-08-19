import React from 'react';
import { monthName } from '../../utils/monthName';
import { useData } from '../../Context/DataContext';
import { setMonth } from '../../utils/setMonth';
import { formateDate } from '../../utils/formatDate';

type ButtonProps = React.ComponentProps<'button'> & {
  n: number;
};

const Button = ({ n, ...rest }: ButtonProps) => {
  const { setInicio, setFinal } = useData();
  const { firstDay, lastDay } = setMonth(n);

  return (
    <button
      className="py-2.5 px-5 bg-color-3 rounded-[1.25rem] border-none text-my-color-2 font-semibold capitalize"
      onClick={() => {
        setInicio(formateDate(firstDay));
        setFinal(formateDate(lastDay));
      }}
      {...rest}
    >
      {monthName(n)}
    </button>
  );
};

export default Button;
