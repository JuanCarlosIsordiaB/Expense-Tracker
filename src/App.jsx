
import React, { useState } from 'react'
import { Header } from './components/Header';

const App = () => {

  const [budget, setBudget] = useState(0);

  return (
    <div>
      <Header 
        budget={budget}
        setBudget={setBudget}
      />
    </div>
  )
}


export default App;
