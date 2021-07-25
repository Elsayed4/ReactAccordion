import React, { useState } from 'react';
import data from './data';
import SingleQustions from './SingleQustions';
import './App.css';

function App() {
  const [qustions,setqustion] = useState(data);
  return (
    <main>
    <div className="container">
     <h3>Qustion And Answer About Login</h3>
     <section className="info">
       {
        qustions.map((qustion)=>{
          return <SingleQustions key={qustion.id} {...qustion}/>
        })
       }
     </section>
    </div>
    </main>
  );
}

export default App;
