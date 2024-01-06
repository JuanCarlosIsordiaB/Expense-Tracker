

import React from 'react'

export const NewBudget = ({budget,setBudget}) => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form 
            action=""
            className='formulario'
        >
            <div 
                className='campo'
            >
                <label htmlFor="" className=''>Define Budget:</label>
                <input 
                    type="text" 
                    placeholder='Add new budget'
                    className='nuevo-presupuesto'
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                />
            </div>
            <input 
                type="submit" 
                value='Add budget' 
            />
        </form>
    </div>
  )
}
