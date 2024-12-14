// frontend/src/pages/CoachDashboard.js
import React, { useState } from 'react';
import ActionsPopup from '../components/ActionsPopup';
import QuickNotes from '../components/QuickNotes';
import TeamMood from '../components/TeamMood';
import TacticalBoard from '../components/TacticalBoard';

function CoachDashboard() {
  const [actions, setActions] = useState([
    {id:1, name:"יציאה נכונה לכדור גובה", hulia:"שוער", successCount:0, failCount:0},
    {id:2, name:"סגירת קווי מסירה", hulia:"הגנה", successCount:0, failCount:0},
    {id:3, name:"ניהול קצב במשחק", hulia:"קישור", successCount:0, failCount:0},
    {id:4, name:"תנועה ללא כדור לעומק", hulia:"התקפה", successCount:0, failCount:0}
  ]);

  const [selectedAction, setSelectedAction] = useState(null);
  const [showTacticalBoard, setShowTacticalBoard] = useState(false);

  const openActionPopup = (action) => {
    setSelectedAction(action);
  };

  const handleActionResult = (actionId, isSuccess, note) => {
    setActions(prev=>prev.map(a=>{
      if(a.id===actionId){
        return {
          ...a,
          successCount: isSuccess ? a.successCount+1 : a.successCount,
          failCount: !isSuccess ? a.failCount+1 : a.failCount
        };
      }
      return a;
    }));
    setSelectedAction(null);
  };

  const handleClosePopup = () => {
    setSelectedAction(null);
  };

  const endHalf = () => {
    alert("סיום מחצית - בהמשך נממש פופאפ סיכום");
  };

  const endGame = () => {
    alert("סיום משחק - בהמשך נממש פופאפ סיכום מלא");
  };

  return (
    <div style={{padding:'20px'}}>
      <h1>מעקב בזמן אמת (מאמן)</h1>
      <p>דקה נוכחית: <span>23</span></p>
      <div style={{marginBottom:'20px'}}>
        <button style={btnStyle} onClick={()=>alert("מתחילים משחק...")}>התחל משחק</button>
        <button style={btnStyle} onClick={endHalf}>סיום מחצית</button>
        <button style={btnStyle} onClick={endGame}>סיום משחק</button>
        <button style={btnStyle} onClick={()=>setShowTacticalBoard(true)}>פתח לוח טקטי</button>
      </div>

      <h2>שוער</h2>
      <div style={huliaBoxStyle}>
        {actions.filter(a=>a.hulia==="שוער").map(a=>(
          <div key={a.id} style={actionCardStyle} onClick={()=>openActionPopup(a)}>
            <h3>{a.name}</h3>
            <p>מוצלח: {a.successCount}, לא מוצלח: {a.failCount}</p>
          </div>
        ))}
      </div>

      <h2>הגנה</h2>
      <div style={{...huliaBoxStyle, background:'#E8FAE8'}}>
        {actions.filter(a=>a.hulia==="הגנה").map(a=>(
          <div key={a.id} style={actionCardStyle} onClick={()=>openActionPopup(a)}>
            <h3>{a.name}</h3>
            <p>מוצלח: {a.successCount}, לא מוצלח: {a.failCount}</p>
          </div>
        ))}
      </div>

      <h2>קישור</h2>
      <div style={{...huliaBoxStyle, background:'#FAF8E8'}}>
        {actions.filter(a=>a.hulia==="קישור").map(a=>(
          <div key={a.id} style={actionCardStyle} onClick={()=>openActionPopup(a)}>
            <h3>{a.name}</h3>
            <p>מוצלח: {a.successCount}, לא מוצלח: {a.failCount}</p>
          </div>
        ))}
      </div>

      <h2>התקפה</h2>
      <div style={{...huliaBoxStyle, background:'#FAEEE8'}}>
        {actions.filter(a=>a.hulia==="התקפה").map(a=>(
          <div key={a.id} style={actionCardStyle} onClick={()=>openActionPopup(a)}>
            <h3>{a.name}</h3>
            <p>מוצלח: {a.successCount}, לא מוצלח: {a.failCount}</p>
          </div>
        ))}
      </div>

      <div style={{display:'flex', gap:'20px', marginTop:'30px'}}>
        <div style={{flex:1}}>
          <h2>רשימות מהירות</h2>
          <QuickNotes />
        </div>
        <div style={{flex:1}}>
          <h2>מצב רוח הקבוצה</h2>
          <TeamMood />
        </div>
      </div>

      {selectedAction && <ActionsPopup action={selectedAction} onClose={handleClosePopup} onResult={handleActionResult}/>}

      {showTacticalBoard && <TacticalBoard onClose={()=>setShowTacticalBoard(false)} />}
    </div>
  )
}

const btnStyle = {
  marginRight:'10px',
  padding:'10px 20px',
  fontSize:'16px',
  background:'#2196F3',
  color:'#fff',
  border:'none',
  borderRadius:'5px',
  cursor:'pointer'
};

const huliaBoxStyle = {
  padding:'10px',
  marginBottom:'20px',
  background:'#E8F4FA',
  borderRadius:'10px'
};

const actionCardStyle = {
  background:'#fdfdfd',
  border:'1px solid #ddd',
  borderRadius:'8px',
  boxShadow:'0 2px 4px rgba(0,0,0,0.1)',
  padding:'20px',
  marginBottom:'10px',
  cursor:'pointer'
};

export default CoachDashboard;
