import React from 'react'
import { NewBudget } from './NewBudget'

export const Header = ({budget,setBudget, setIsValidBudget,isValidBudget}) => {
  return (
    <header>
        <h1>Expense Manager</h1>

        {
          isValidBudget ? (
            <p>Control Presupuestp</p>
          ) : (
            <NewBudget
              budget={budget}
              setBudget={setBudget}
              setIsValidBudget={setIsValidBudget}
            />
          )
        }

        
    </header>
  )
}
