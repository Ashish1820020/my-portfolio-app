const toggleIcon = document.getElementsByClassName("toggle-icon");
const navLinksArray = document.getElementsByClassName("navlink");
const sections = document.getElementsByClassName("diff-section");

toggleIcon[0].addEventListener("click", (e) => {
    if(Array.from(e.target.classList).includes('bxs-moon')){
        e.target.classList.remove('bxs-moon');
        e.target.classList.add("bxs-sun");
        document.body.classList.add("dark-mode");
    }else{
        e.target.classList.remove("bxs-sun");
        e.target.classList.add('bxs-moon');
        document.body.classList.remove("dark-mode");
    }
});


let clicked = false;
Array.from(navLinksArray).forEach((elem) => {
    elem.addEventListener("click", (e) => {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        e.target.classList.toggle("active");
    })
});


window.onscroll = () => {
    var current = "";
    Array.from(sections).forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop- 500) {
        current = section.getAttribute("id"); }
    });
  
    Array.from(navLinksArray).forEach((li) => {
      li.classList.remove("active");
      if (li.href.includes(current)) {
        li.classList.add("active");
      }
    });
  };

