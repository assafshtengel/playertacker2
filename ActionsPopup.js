// frontend/src/components/ActionsPopup.js
import React, { useState, useEffect } from 'react';

function ActionsPopup({action, onClose, onResult}) {
  const [note, setNote] = useState('');
  const [timeoutId, setTimeoutId] = useState(null);

  const closeAfterDelay = () => {
    // נסגור אוטומטית לאחר 4 שניות אם אין אינטראקציה
    const id = setTimeout(()=>{
      onClose();
    },4000);
    setTimeoutId(id);
  };

  useEffect(()=>{
    closeAfterDelay();
    return ()=>clearTimeout(timeoutId);
    // eslint-disable-next-line
  },[]);

  const handleSuccess = ()=>{
    clearTimeout(timeoutId);
    onResult(action.id, true, note);
  };
  const handleFail = ()=>{
    clearTimeout(timeoutId);
    onResult(action.id, false, note);
  };

  const handleCloseNow = ()=>{
    clearTimeout(timeoutId);
    onClose();
  };

  return (
    <div style={popupOverlayStyle}>
      <div style={popupStyle}>
        <span style={closeBtnStyle} onClick={handleCloseNow}>X</span>
        <h2>{action.name}</h2>
        <div style={{display:'flex',gap:'10px',marginBottom:'20px'}}>
          <button onClick={handleFail} style={{...btnSideStyle,background:'#f44336'}}>לא מוצלח</button>
          <button onClick={handleSuccess} style={{...btnSideStyle,background:'#4CAF50'}}>מוצלח</button>
        </div>
        <textarea placeholder="הוסף הערה (אופציונלי)" value={note} onChange={e=>setNote(e.target.value)} style={textAreaStyle}></textarea>
      </div>
    </div>
  )
}

const popupOverlayStyle = {
  position:'fixed',top:0,left:0,right:0,bottom:0,
  background:'rgba(0,0,0,0.5)',
  display:'flex',justifyContent:'center',alignItems:'center',zIndex:9999
};

const popupStyle = {
  background:'#fff',
  border:'3px solid #333',
  borderRadius:'10px',
  boxShadow:'0 8px 16px rgba(0,0,0,0.2)',
  width:'90%',maxWidth:'600px',
  padding:'20px',
  position:'relative',
  textAlign:'center'
};

const closeBtnStyle = {
  position:'absolute',top:'10px',left:'15px',
  fontSize:'24px',color:'red',cursor:'pointer',fontWeight:'bold'
};

const btnSideStyle = {
  flex:1,
  fontSize:'18px',
  fontWeight:'bold',
  color:'#fff',
  padding:'10px',
  border:'none',
  borderRadius:'5px',
  cursor:'pointer'
};

const textAreaStyle = {
  width:'100%',
  boxSizing:'border-box',
  borderRadius:'5px',
  border:'1px solid #ccc',
  padding:'10px',
  fontSize:'16px',
  marginTop:'10px'
};

export default ActionsPopup;
