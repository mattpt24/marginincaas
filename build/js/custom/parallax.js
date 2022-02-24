
//Get all parallax items
let parallaxItems = document.querySelectorAll('.parallax');

//Listen for scroll
window.addEventListener('scroll', () => {

  //Throtle JS scroll event
  setInterval(() => {

    //Get Scroll position
    let scrollPos = window.scrollY;

    //Get the screen height
    let screenHeight = window.screen.height;

    //Get all parallax itemms
    parallaxItems.forEach(item => {
      
      //Get any custom speed choices 
      var speed = item.dataset.speed;

      //Check if a custom speed had been set. If not, set to 1 by default
      if(typeof speed == "undefined" || typeof speed == null || typeof speed == NaN || speed == 0) {
        speed = 1;
      } 

      //Check if the scroll position is less than screen
      if(scrollPos <= screenHeight) {
        let backgroundPositionY = scrollPos * speed;
        item.style.backgroundPositionY =  backgroundPositionY + "px";
      }
      
    });
  }, 150);
})