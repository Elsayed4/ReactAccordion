
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function SingleQustions({title,info}) {
 const [ShowInfo,setShowInfo] = useState(false);
    return (
    <article className="question">
     <header>
      <h4>{title}</h4>
      <button className="btn" onClick={()=> setShowInfo(! ShowInfo)}>{ShowInfo ? <AiOutlineMinus/> :<AiOutlinePlus/>}</button>
     </header>
     <p>{ShowInfo  && info}</p>
    </article>
  );
}

export default SingleQustions;
