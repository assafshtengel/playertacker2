document.addEventListener('DOMContentLoaded',()=>{
  const roleButtons = document.querySelectorAll('.role-btn');
  const trainingSummaryBtn = document.getElementById('training-summary-btn');

  // כאן בהמשך נוכל להוסיף ניווט ותלויות בתפקיד:
  roleButtons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const role = btn.getAttribute('data-role');
      // בהתאם לתפקיד ננווט לעמוד המתאים (בהמשך נגדיר ראוטים)
      if(role==='player'){
        window.location.href='/login?role=player';
      } else if(role==='coach'){
        window.location.href='/login?role=coach';
      } else if(role==='analyst'){
        window.location.href='/login?role=analyst';
      }
    });
  });

  trainingSummaryBtn.addEventListener('click', ()=>{
    // מעבר לעמוד סיכום אימון
    window.location.href='/training-summary';
  });
});
