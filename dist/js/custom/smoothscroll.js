window.addEventListener('DOMContentLoaded', function(){
  scrollLinks();
});

function scrollLinks (e) {
  //Find all anchor tags with a hash as the target location
  let scrollable = Array.from(document.querySelectorAll('a[href^="#"]'));

  //For each link...
  scrollable.forEach(link => {

    //If the link isn't just # i.e. contains a scrollable ID
    if(link.href !== `${link.origin}/#`) {

      //Add a click event
      link.addEventListener('click', (e) => {

        //Prevent default browser scroll
        e.preventDefault();

        //What is the destination of the clicked link
        let linkDestination = e.target.hash;

        //Search DOM for the the related ID and get the distance from the top
        let linkPos = document.querySelector(linkDestination).offsetTop;

        //Does the link have a data attribute called "scroll offset"
        let linkOffset = link.getAttribute('data-scroll-offset');
        
        //Check that if there is an offset, and if not, or is formatted wrong, set offset to 0 - default
        if(typeof linkOffset == "undefined" || typeof linkOffset == null || typeof linkOffset == NaN) {
          linkOffset = 0;
        }

        //Trigger scroll to the DOM location, accounting for the offset. Make sure it doesn''t jump and smoothly scroll
        window.scrollTo({top: (linkPos - linkOffset), behaviour: 'smooth'});

      })

    }
  });

}