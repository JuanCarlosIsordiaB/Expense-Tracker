

import React from 'react'

export const BudgetControl = ({budget}) => {

    const formatBudget = (cantidad) => {
        return Number(cantidad).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <div className='contenedor-presupuetso contenedor sombra dos-columnas '>
        <div>
            <p>Grafica</p>
        </div>
        <div className='contenido-presupuesto'>
            <p><span>Budget: </span>{formatBudget(budget)}</p>
            <p><span>Available: </span>{formatBudget(0)}</p>
            <p><span>Spent: </span>{formatBudget(0)}</p>
        </div>
    </div>
  )
}
