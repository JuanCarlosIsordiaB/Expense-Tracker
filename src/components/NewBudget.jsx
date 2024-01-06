

import React, { useState } from 'react'
import { Message } from './Message';

export const NewBudget = ({budget,setBudget, setIsValidBudget}) => {

    const [message, setMessage] = useState('');


    const handleBudget = (e) => {
        e.preventDefault();
        
       if(!Number(budget) || Number(budget)<0){
        setMessage('Buget NOT valid');
        return;
        
       }
        setMessage('');
        setIsValidBudget(true);
       
    }


  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form 
            action=""
            className='formulario'
            onSubmit={handleBudget}
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
            {
                message && (
                    <Message type='error'>{message}</Message>
                )
            }
        </form>
    </div>
  )
}
