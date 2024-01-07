import React, { useState } from 'react';
import { Header } from './components/Header';
import IconNewExpense from './img/nuevo-gasto.svg';

const App = () => {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);

  const handleNewExpense = () => {
    console.log('Diste Click a New Expense');
    setModal(true);
  }

  return (
    <div>
      <Header 
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />


      {
        isValidBudget && (
          <div className='nuevo-gasto'>
            <img 
              src={IconNewExpense}
              alt="icon New Expense" 
              onClick={handleNewExpense}
            />
          </div>
          
        )
      }

      {
        modal && (
          <p> Desde modal</p>
        )

      }
     </div> 
  )
}


export default App;
