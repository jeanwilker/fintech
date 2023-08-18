import React from 'react';

type DateInputProps = React.ComponentProps<'input'> & {
  label: string;
};

const DateInput = ({ label, ...props }: DateInputProps) => {
  return (
    <div>
      <label className="block mb-2.5 font-semibold text-base text-my-color-2 p-3 bg-color-4 rounded-[1.25rem]" htmlFor={label}>{label}</label>
      <input className='border-none font-mono text-base text-my-color-2 p-3 bg-color-4 rounded-[1.25rem]' id={label} name={label} type="date" {...props}/>
    </div>
  );
};

export default DateInput;
