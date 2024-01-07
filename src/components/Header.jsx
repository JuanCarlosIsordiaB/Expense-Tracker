import React from 'react'
import { NewBudget } from './NewBudget'
import { BudgetControl } from './BudgetControl'

export const Header = ({budget,setBudget, setIsValidBudget,isValidBudget}) => {
  return (
    <header>
        <h1>Expense Manager</h1>

        {
          isValidBudget ? (
            <BudgetControl budget={budget} />
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
