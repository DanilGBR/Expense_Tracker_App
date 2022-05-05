import './newExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseHandler = (enteredExpense) => {
    const expenseEnteredData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseEnteredData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
