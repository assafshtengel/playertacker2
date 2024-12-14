// frontend/src/pages/CoachDashboard.js
import React, { useState, useEffect } from 'react';
import ActionsPopup from '../components/ActionsPopup';
import QuickNotes from '../components/QuickNotes';
import TeamMood from '../components/TeamMood';
import TacticalBoard from '../components/TacticalBoard';

function CoachDashboard() {
  const [actions, setActions] = useState([
    {id:1, name:"יציאה נכונה לכדור גובה", hulia:"שוער", successCount:0, failCount:0, target:5},
    {id:2, name:"סגירת קווי מסירה", hulia:"הגנה", successCount:0, failCount:0, target:3},
    {id:3, name:"ניהול קצב במשחק", hulia:"קישור", successCount:0, failCount:0, target:4},
    {id:4, name:"תנועה ללא כדור לעומק", hulia:"התקפה", successCount:0, failCount:0, target:2}
  ]);

  const [selectedAction, setSelectedAction] = useState(null);
  const [showTacticalBoard, setShowTacticalBoard] = useState(false);

  // טיימר לדקה הנוכחית
  const [currentMinute, setCurrentMinute] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);

  useEffect(()=>{
    if(timerRunning){
      const interval = setInterval(()=>{
        setCurrentMinute(m=>m+1);
      },60000); // כל 60 שניות תגדל הדקה
      setTimerInterval(interval);
      return ()=> clearInterval(interval);
    }
  },[timerRunning]);

  const startGame = ()=>{
    setCurrentMinute(0);
    setTimerRunning(true);
  };

  const endHalf = () => {
    setTimerRunning(false);
    if(timerInterval) clearInterval(timerInterval);
    alert(`סיום מחצית - דקה נוכחית: ${currentMinute}. בעתיד נציג פופאפ עם סיכום מחצית`);
  };

  const endGame = () => {
    setTimerRunning(false);
    if(timerInterval) clearInterval(timerInterval);
    alert("סיום משחק - פופאפ סיכום מלא יוצג בהמשך");
  };

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

  // הוספת פעולה חדשה לחוליה
  const [showAddActionPopup, setShowAddActionPopup] = useState(false);
  const [newActionName, setNewActionName] = useState('');
  const [newActionHulia, setNewActionHulia] = useState('שוער');
  const [newActionTarget, setNewActionTarget] = useState(0);

  const addNewAction = ()=>{
    if(newActionName.trim()!==''){
      const newId = actions.length+1;
      setActions([...actions,{
        id:newId,
        name:newActionName.trim(),
        hulia:newActionHulia,
        successCount:0,
        failCount:0,
        target:newActionTarget>0?newActionTarget:null
      }]);
      setNewActionName('');
      setNewActionHulia('שוער');
      setNewActionTarget(0);
      setShowAddActionPopup(false);
    }
  };

  const huliaSections = [
    {name:'שוער',color:'#E8F4FA'},
    {name:'הגנה',color:'#E8FAE8'},
    {name:'קישור',color:'#FAF8E8'},
    {name:'התקפה',color:'#FAEEE8'}
  ];

  return (
    <div style={{padding:'20px'}}>
      <h1>מעקב בזמן אמת (מאמן)</h1>
      <p>דקה נוכחית: <span>{currentMinute}</span></p>
      <div style={{marginBottom:'20px'}}>
        <button style={btnStyle} onClick={startGame}>התחל משחק</button>
        <button style={btnStyle} onClick={endHalf}>סיום מחצית</button>
        <button style={btnStyle} onClick={endGame}>סיום משחק</button>
        <button style={btnStyle} onClick={()=>setShowTacticalBoard(true)}>פתח לוח טקטי</button>
        <button style={btnStyle} onClick={()=>setShowAddActionPopup(true)}>הוסף פעולה</button>
      </div>

      {huliaSections.map(h=>{
        const huliaActions = actions.filter(a=>a.hulia===h.name);
        if(huliaActions.length===0) return null;
        return (
          <div key={h.name}>
            <h2>{h.name}</h2>
            <div style={{...huliaBoxStyle, background:h.color}}>
              {huliaActions.map(a=>(
                <div key={a.id} style={actionCardStyle} onClick={()=>openActionPopup(a)}>
                  <h3>{a.name}</h3>
                  {a.target && <p>יעד: {a.target} מוצלחות</p>}
                  <p>מוצלח: {a.successCount}, לא מוצלח: {a.failCount}</p>
                </div>
              ))}
            </div>
          </div>
        )
      })}

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

      {showAddActionPopup &&
        <div style={popupOverlayStyle}>
          <div style={popupStyle}>
            <span style={closeBtnStyle} onClick={()=>setShowAddActionPopup(false)}>X</span>
            <h2>הוסף פעולה חדשה</h2>
            <input type="text" placeholder="שם פעולה" value={newActionName} onChange={e=>setNewActionName(e.target.value)} style={inputStyle}/>
            <select value={newActionHulia} onChange={e=>setNewActionHulia(e.target.value)} style={inputStyle}>
              <option value="שוער">שוער</option>
              <option value="הגנה">הגנה</option>
              <option value="קישור">קישור</option>
              <option value="התקפה">התקפה</option>
            </select>
            <input type="number" placeholder="יעד מוצלחות (לא חובה)" value={newActionTarget} onChange={e=>setNewActionTarget(parseInt(e.target.value)||0)} style={inputStyle}/>
            <button style={{...btnStyle,background:'#4CAF50',width:'100%',marginTop:'10px'}} onClick={addNewAction}>הוסף</button>
          </div>
        </div>
      }
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
  width:'90%',maxWidth:'300px',
  padding:'20px',
  position:'relative',
  textAlign:'center'
};

const closeBtnStyle = {
  position:'absolute',top:'10px',left:'15px',
  fontSize:'24px',color:'red',cursor:'pointer',fontWeight:'bold'
};

const inputStyle = {
  width:'100%',
  padding:'10px',
  marginBottom:'10px',
  fontSize:'16px',
  boxSizing:'border-box'
};

export default CoachDashboard;
