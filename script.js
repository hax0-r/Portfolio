function toggleNavMid() {
    const navMid = document.querySelector('.nav-mid');
    const bar = document.querySelector('.fa-bars');
    const navHireMe = document.querySelector('.navHireMe');
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
    if (screenWidth < 1024) {
      navMid.style.display = 'none';
      navHireMe.style.display = 'none';
      bar.style.display = 'block';
    } 
    else {
      navMid.style.display = 'block';
      navHireMe.style.display = 'block';
      bar.style.display = 'none';
    }
  }
  
  window.addEventListener('load', toggleNavMid);
  window.addEventListener('resize', toggleNavMid);
  