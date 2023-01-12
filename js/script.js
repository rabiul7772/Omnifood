console.log("Hello world!")

const myName = "Rabiul Akand";
 const h1 = document.querySelector('.heading-primary');



// h1.addEventListener("click", function(){
  
// h1.textContent = myName;
// h1.style.backgroundColor ="red";
// h1.style.padding = '5rem';

// });

///////////////////////////////////////////////////////////
// to select html class using js variable down here yearEl is js variable and year is html class name
// website year will be automatically changed by following functions
const yearEl = document.querySelector('.year')
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
///////////////////////////////////////////////////////////
// MOBILE NAVIGATION WORK

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
// after click button, toggle look at headerEL if there is no nav-open class it will add if it exists it will be removed
btnNavEl.addEventListener('click', function(){
  // only class name "nav-open"  without dot that will be added and removed
  headerEl.classList.toggle('nav-open');
});

///////////////////////////////////////////////////////////
// SMOOTH SCROLLING ANIMATION

//document.querySelectorAll is used to select all links those have anchor element
const allLinks = document.querySelectorAll("a:link");
// for single link we can use addEventListener but down here is multiple link that's why we need to use forEach
 
allLinks.forEach(function(link){
link.addEventListener("click", function(e) {
  e.preventDefault();
  const href = link.getAttribute("href");
  
// scroll back to top of page

if (href === "#")
window.scrollTo({
  top: 0,
  behavior:'smooth',
});
// scroll to other links

if (href != "#" && href.startsWith("#")){
const sectionEl = document.querySelector(href);
sectionEl.scrollIntoView({behavior:'smooth'});
}
// to close mobile navigation after clicked from the rest of the page
// as every link has the same class main-nav-link
if(link.classList.contains('main-nav-link'))
 headerEl.classList.toggle('nav-open');

});
});

///////////////////////////////////////////////////////////
// STICKY NAVIGATION
const sectionHeroEl = document.querySelector ('.section-hero');
const obs = new IntersectionObserver (function (entries) {
const ent = entries[0];
console.log(ent);
if(ent.isIntersecting === false){
// when ent is intersection will be false then sticky selector will be added to the body
document.body.classList.add('sticky');
}
if(ent.isIntersecting === true){
// when ent is intersection will be true then sticky selector will be added to the body
document.body.classList.remove('sticky');
}

},
{
// IN THE VIEWPORT
  root:null,
  threshold:0,
  rootMargin:"-80px",

});
// to observe when section-hero moves out of the viewport then the navigation want to be sticky
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

