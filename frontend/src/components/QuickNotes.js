// frontend/src/components/QuickNotes.js
import React, {useState} from 'react';

function QuickNotes(){
  const [notes,setNotes] = useState([]);
  const [newNote,setNewNote] = useState('');

  const addNote = ()=>{
    if(newNote.trim()!==''){
      setNotes([...notes,newNote.trim()]);
      setNewNote('');
    }
  }

  return (
    <div>
      <input type="text" placeholder="הקלד תובנה מהירה..." value={newNote} onChange={e=>setNewNote(e.target.value)}
        style={{width:'100%',padding:'10px',fontSize:'16px',marginBottom:'10px'}} />
      <button onClick={addNote} style={{padding:'10px',fontSize:'16px',background:'#2196F3',color:'#fff',border:'none',borderRadius:'5px',cursor:'pointer'}}>הוסף פתק</button>

      <div style={{marginTop:'20px'}}>
        {notes.map((n,i)=>(
          <div key={i} style={{background:'yellow',border:'1px solid #ccc',borderRadius:'5px',padding:'10px',marginBottom:'10px'}}>
            {n}
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuickNotes;
