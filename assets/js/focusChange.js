window.onload = function () {
  var preTitle = document.title;
  var postTitle = "Gone too soon ! 🥺";
  document.addEventListener("visibilitychange", function () {
    var page_Active = !document.hidden;

    if (!page_Active) {
      document.title = postTitle;
    } else {
      document.title = preTitle;
    }
  });
};

const mobile_nav= document.querySelector('.mobile-menu');
const nav_header= document.querySelector(".headerUp");

const toggleNav = () =>{
  nav_header.classList.toggle("switchOn");
}

mobile_nav.addEventListener('click', () => toggleNav());
