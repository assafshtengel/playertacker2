// frontend/src/components/TacticalBoard.js
import React from 'react';

function TacticalBoard({onClose}){
  return (
    <div style={overlayStyle}>
      <div style={boardStyle}>
        <span style={closeBtnStyle} onClick={onClose}>X</span>
        <h2>לוח טקטי (Placeholder)</h2>
        <div style={{width:'100%',height:'300px',background:'green',position:'relative'}}>
          {/* כאן בעתיד נוסיף עיגולים מייצגי שחקנים וגרירה */}
          <p style={{color:'#fff',textAlign:'center',marginTop:'140px'}}>מגרש placeholder</p>
        </div>
        <button onClick={()=>alert("תכנית נשמרה (Placeholder)")} style={btnStyle}>צלם תכנית</button>
      </div>
    </div>
  )
}

const overlayStyle = {
  position:'fixed',top:0,left:0,right:0,bottom:0,
  background:'rgba(0,0,0,0.5)',
  display:'flex',justifyContent:'center',alignItems:'center',zIndex:9999
};

const boardStyle = {
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

const btnStyle = {
  background:'#2196F3',
  color:'#fff',
  border:'none',
  borderRadius:'5px',
  padding:'10px 20px',
  fontSize:'16px',
  marginTop:'20px',
  cursor:'pointer'
};

export default TacticalBoard;
