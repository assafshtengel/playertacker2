// frontend/src/components/TeamMood.js
import React, {useState} from 'react';

function TeamMood(){
  const [mood,setMood] = useState('');
  const [message,setMessage] = useState('');

  return (
    <div>
      <select value={mood} onChange={e=>setMood(e.target.value)} style={{width:'100%',padding:'10px',fontSize:'16px',marginBottom:'10px'}}>
        <option value="">בחר מצב רוח</option>
        <option value="מורל גבוה">מורל גבוה</option>
        <option value="חוסר ריכוז">חוסר ריכוז</option>
        <option value="רוגע">רוגע</option>
        <option value="נלהבים">נלהבים</option>
      </select>

      <textarea placeholder="מסר לשחקנים..." value={message} onChange={e=>setMessage(e.target.value)}
        style={{width:'100%',height:'100px',fontSize:'16px',boxSizing:'border-box',padding:'10px'}}></textarea>

      {/* בעתיד נשמור ב-API את המצב רוח וההודעה */}
    </div>
  )
}

export default TeamMood;
