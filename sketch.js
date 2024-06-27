document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if (e.keyCode === 123 || // F12
        e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0) || // Ctrl+Shift+I
        e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0) || // Ctrl+Shift+J
        e.ctrlKey && e.keyCode === 'U'.charCodeAt(0) || // Ctrl+U
        e.ctrlKey && e.keyCode === 'S'.charCodeAt(0) || // Ctrl+S
        e.ctrlKey && e.keyCode === 'P'.charCodeAt(0)) { // Ctrl+P
        return false;
    }
}
 
 
 
 const btn1 = document.getElementById('btn1');
  const blk1 = document.getElementById('blk1');

  // Adding touch support to change the background to red on touchstart and increase size
  blk1.addEventListener('touchstart', function() {
    btn1.style.backgroundColor = 'red';
  
    btn1.style.transformOrigin = 'left';
    btn1.style.transition = 'transform 3s, background-color 3s';
  });

  // Adding touchend to revert the background to transparent and revert size after 5 seconds
  blk1.addEventListener('touchend', function() {
    setTimeout(() => {
      btn1.style.backgroundColor = 'transparent';
  
    }, 0); // 5000 milliseconds = 5 seconds
  });



  const btn3 = document.getElementById('btn3');
  const blk3 = document.getElementById('blk3');

  // Adding touch support to change the background to red on touchstart and increase size
  blk3.addEventListener('touchstart', function() {
    btn3.style.backgroundColor = 'blue';
   
    btn3.style.transformOrigin = 'right';
    btn3.style.transition = 'transform 3s, background-color 3s';
  });

  // Adding touchend to revert the background to transparent and revert size
  blk3.addEventListener('touchend', function() {
    setTimeout(() => {
      btn3.style.backgroundColor = 'transparent';
   
    }, 0); 
    });



  const btn2 = document.getElementById('btn2');
  const blk2 = document.getElementById('blk2');

  // Adding touch support to change the background to lime on touchstart and increase size
  blk2.addEventListener('touchstart', function() {
    btn2.style.backgroundColor = 'lime';
 
    btn2.style.transformOrigin = 'center';
    btn2.style.transition = 'transform 3s, background-color 3s';
  });

  // Adding touchend to revert the background to transparent and revert size after 900 milliseconds
  blk2.addEventListener('touchend', function() {
    setTimeout(() => {
      btn2.style.backgroundColor = 'transparent';
     
    }, 0);
  });

