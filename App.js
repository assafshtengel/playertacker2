// frontend/src/pages/HomePage.js
import React from 'react';

function HomePage(){
  const buttonStyle={
    width:'100%',
    padding:'15px',
    fontSize:'18px',
    border:'none',
    borderRadius:'8px',
    backgroundColor:'#2196F3',
    color:'#fff',
    marginBottom:'10px',
    cursor:'pointer'
  };

  const handlePlayer = ()=> {
    window.location.href = '/player-dashboard';
  };
  const handleCoach = ()=> {
    window.location.href = '/coach-dashboard';
  };
  const handleAnalyst = ()=> {
    window.location.href = '/analyst-dashboard';
  };

  const handleTrainingSummary = ()=>{
    window.location.href='/training-summary'; // בהמשך, אם תרצה מסלול זה
  };

  return (
    <div style={{textAlign:'center',padding:'50px'}}>
      <div id="logo" style={{
        margin:'20px auto',
        background:'linear-gradient(to right, #4A90E2, #5F9EA0)',
        color:'white',
        padding:'15px',
        borderRadius:'10px',
        fontSize:'32px',
        fontWeight:'bold',
        maxWidth:'500px',
        boxShadow:'0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <span className="logo-text" style={{fontWeight:'bold',fontSize:'28px'}}>אסף שטנגל - מאמן מנטלי לשחקנים</span>
      </div>

      <h1 id="welcome-message" style={{color:'#4A90E2',margin:'20px',fontSize:'26px'}}>ברוך הבא למערכת הניתוח</h1>
      <p className="intro-text" style={{fontSize:'20px',maxWidth:'600px',margin:'0 auto 30px auto',lineHeight:'1.4'}}>
        המערכת נועדה לעזור לשחקנים, למאמנים ולאנליסטים לנתח את ביצועי המשחק על בסיס נתונים מדויקים ולא על ניחושים.
      </p>

      <div style={{maxWidth:'300px',margin:'0 auto'}}>
        <button style={buttonStyle} onClick={handlePlayer}>שחקן</button>
        <button style={buttonStyle} onClick={handleCoach}>מאמן</button>
        <button style={buttonStyle} onClick={handleAnalyst}>אנליסט</button>
        <button style={{...buttonStyle,backgroundColor:'#4CAF50',marginTop:'20px'}} onClick={handleTrainingSummary}>סיכום אימון</button>
      </div>
    </div>
  );
<Route exact path="/login">
  <Redirect to="/" />
</Route>

}

export default HomePage;
