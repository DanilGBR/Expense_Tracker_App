import './newExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
  const saveExpenseHandler = (enteredExpense) => {
    const expenseEnteredData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
