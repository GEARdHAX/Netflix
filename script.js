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
