//Listen for scroll
function scroll() {
  window.addEventListener('scroll', () => {

    //Throtle JS scroll event
    setInterval(() => {
  
      // Get the navbar
      const navbar = document.querySelector("#navbar");
  
      // Get the offset position of the navbar
      let stickyOffset = navbar.offsetTop;
  
      // Get the site logo
      let logo = document.querySelector('#site-logo');
  
      // Set logo states (light and dark)
      const logoDark = '/dist/img/logo.svg';
      const logoLight = '/dist/img/logo-light.svg';
      
  
      if(window.pageYOffset <= stickyOffset) {
        //Set to logo light version
        logo.src = logoLight;
        navbar.classList.remove("sticky-nav");
      } else {
        //Set to logo dark version
        logo.src = logoDark;
        navbar.classList.add("sticky-nav");
      }
    }, 100);
  
   });
  
}

window.addEventListener('load', function(){
  const mobileBtn = document.getElementById('mobile-button');
  const dropdownMenu = document.getElementById('dropdown');

  mobileBtn.addEventListener('click', function() {
    dropdownMenu.classList.toggle('hidden');

    if(dropdownMenu.classList.contains == "bg-white") {
    dropdownMenu.classList.remove('bg-white');
    } else {
    dropdownMenu.classList.add('bg-white');
    }
  })

  scroll();

});