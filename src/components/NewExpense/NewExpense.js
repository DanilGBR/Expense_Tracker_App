import { useState } from 'react';
import './newExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [visible, setVisibility] = useState(false);

  const saveExpenseHandler = (enteredExpense) => {
    const expenseEnteredData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseEnteredData);
    setVisibility(!visible);
  };

  const formStateHandler = () => {
    setVisibility(!visible);
  };

  return (
    <div className='new-expense'>
      {!visible && (
        <button type='button' onClick={formStateHandler}>
          Add New Expense
        </button>
      )}
      {visible && <ExpenseForm onSaveExpense={saveExpenseHandler} />}
    </div>
  );
};

export default NewExpense;
