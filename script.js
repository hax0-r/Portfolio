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


  // =================nav end===============
 
  function adjustBrTags() {
    var screenWidth = window.innerWidth;

    // Get the h1 and p elements
    var h1Element = document.querySelector('.info h1');
    var pElement = document.querySelector('.info p');

    if (screenWidth < 700 && screenWidth > 428) {
        // Add <br> tags to both h1 and p elements
        h1Element.innerHTML = "Let’s Create our <br> Story Together!";
        pElement.innerHTML = "Vr story is an interactive tool that makes it easy for <br> anyone to produce engaging digital experiences";
    } else {
        // Remove <br> tags from both h1 and p elements
        h1Element.innerHTML = "Let’s Create our Story Together!";
        pElement.innerHTML = "Vr story is an interactive tool that makes it easy for anyone to produce engaging digital experiences";
    }
}

// Initial call to adjustBrTags on page load
adjustBrTags();

// Add an event listener to adjustBrTags when the window is resized
window.addEventListener('resize', adjustBrTags);
