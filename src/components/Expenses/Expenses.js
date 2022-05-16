import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpenseFilter from '../ExpensesFilter/ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';

import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const dateFilterHandler = (selectedYear) => {
    return setFilteredYear(selectedYear);
  };

  const filteredItems = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear,
  );

  return (
    <li>
      <Card className='expenses'>
        <ExpenseFilter
          selectedYear={filteredYear}
          onDateSelect={dateFilterHandler}
        />
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList items={filteredItems} />
      </Card>
    </li>
  );
};

export default Expenses;
