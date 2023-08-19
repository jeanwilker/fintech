import Months from '../Months/Months';
import DateRange from './Components/DateRange';

const Header = () => {
  return (
    <header className="mb-5">
      <div className="mb-5">
        <DateRange />
      </div>
      <Months />
    </header>
  );
};

export default Header;
