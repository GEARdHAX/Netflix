console.log("Scirpt Injected")
window.addEventListener('resize', function() {
 if (window.innerWidth <= 768) {
  document.getElementsByClassName("btn btn-secondary dropdown-toggle")[0].innerHTML = "🌏︎";
 }
 else{
  document.getElementsByClassName("btn btn-secondary dropdown-toggle")[0].innerHTML = "🌏︎ English";
  
 }
});
const image = document.getElementsByClassName("logo")[0];

image.addEventListener('click', function() {
  location.reload();
});
document
 .getElementsByClassName("arrow")[0]
 .addEventListener("click", function () {
  if (
   window.pageYOffset ===
   document.documentElement.scrollHeight - window.innerHeight
  ) {
   // Reached bottom of the page
   window.scrollTo(0, 0); // Scroll to the top
  } else {
   window.scrollBy(0, window.innerHeight); // Scroll one viewport height
  }
 });
