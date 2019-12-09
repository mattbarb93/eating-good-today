//Constants
const nav = document.querySelector('.nav-list');
const menuItemNames = [
    `<a href="#section-1">Our Goal</a>`,
    `<a href="#section-2">Plans</a>`,
    `<a href="#section-3">Meet the Team</a>`
];
const planDetailsTitle = document.querySelector('.plan-details-title');
const planDetailsInfo = document.querySelector('.plan-details-info');
const planDetailsPrice = document.querySelector('.plan-details-price');
const planDetailsImage = document.querySelector('.plan-details-image');
const planDetailsButton = document.getElementById('plan-btn');
//Create and append the menu items

menuItemNames.forEach(function (el) {
    const newMenuItem = document.createElement('li');
    newMenuItem.innerHTML = el;
    nav.appendChild(newMenuItem);
});

//Navbar disappears if user doesnt scroll

window.onscroll = function(){
  var currentScrollPosition = window.pageYOffset;
  //If the user scrolls to the first section and below, nav will disappear
  if(currentScrollPosition > 500){
    setTimeout(() => {
      nav.style.top = "-15vh";
    }, 1);
  // If the user does not move in the next 2 seconds, the bar will appear.
    setTimeout(() => {
      nav.style.top = "0";
    }, 2000);
  }
  else{
    nav.style.top = "0";
  }
}
 
function planOption1(){
  planDetailsTitle.innerHTML = "Small Meetings";
  planDetailsInfo.innerHTML = 
  `<ul>
      <li>Cheapest</li>
      <li>3 Trays of Chicken and Greens</li>
      <li>10% off paying cash</li>
  </ul>`
  planDetailsPrice.innerHTML = "$300";
  planDetailsImage.innerHTML = `<img src="../images/max-delsid-0geTqSZ76Xg-unsplash.jpg" alt="Preparing food""> `;
  planDetailsButton.classList.remove('btn-hide');
  planDetailsButton.innerHTML = `<a href="#addPlanOneToCart">Order Now!</a>`
}
function planOption2(){
  planDetailsTitle.innerHTML = "Crowded Meeting";
  planDetailsInfo.innerHTML = 
  `<ul>
      <li>Best Value</li>
      <li>7 Trays of Chicken, Beef, and Greens</li>
      <li>15% off paying cash</li>
  </ul>`
  planDetailsPrice.innerHTML = "$500";
  planDetailsImage.innerHTML = `<img src="../images/dan-gold-4_jhDO54BYg-unsplash.jpg" alt="Preparing food""> `;
  planDetailsButton.classList.remove('btn-hide');
  planDetailsButton.innerHTML = `<a href="#addPlanTwoToCart">Order Now!</a>`
}

function planOption3(){
  planDetailsTitle.innerHTML = "Big Party";
  planDetailsInfo.innerHTML = 
  `<ul>
      <li>Best Value</li>
      <li>10 Trays of Chicken, Beef, and Greens</li>
      <li>20% off paying cash</li>
  </ul>`
  planDetailsPrice.innerHTML = "$800";
  planDetailsImage.innerHTML = `<img src="../images/alyson-mcphee-yWG-ndhxvqY-unsplash.jpg" alt="Preparing food""> `;
  planDetailsButton.classList.remove('btn-hide');
  planDetailsButton.innerHTML = `<a href="#addPlanThreeToCart">Order Now!</a>`
}


/*
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav-list").style.top = "0";
  } else {
    document.querySelector(".nav-list").style.top = "-15vh";
  }
  prevScrollpos = currentScrollPos;
  
}
*/
//Change bg-color when section is selected
