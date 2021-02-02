//using selectors inside the element
const questions = document.querySelectorAll(".question");
const navbar = document.getElementById("nav");
const navContainer = document.querySelector(".nav-container")
const links = document.querySelectorAll('.nav-link')
const toggle = document.querySelector(".navbar-toggler")
const toggleBar = document.querySelector(".navbar-nav")
const open = document.querySelector("#open")
const close = document.querySelector("#close")

toggle.addEventListener('click', ()=>{
  // toggleBar.classList.toggle("show-link")
 
  if (toggleBar.classList.contains("show-link")) {
    toggleBar.classList.remove("show-link")
    open.style.display = 'block'
    close.style.display = 'none'
  }else{
    toggleBar.classList.add("show-link")
    open.style.display = 'none'
    close.style.display = 'block'
  }
})

links.forEach((link)=>{
  const btn = link.querySelector("a")
  // console.log(btn);
  btn.addEventListener('click', ()=>{
    links.forEach((item)=>{
      console.log(item);
      if (item !== link) {
        item.classList.remove("active")
      }
    });
    link.classList.toggle("active")
  })
})

window.addEventListener("scroll", ()=> {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  // console.log(navHeight);
  // console.log('scroll heigh' , scrollHeight);
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
    navContainer.style.visibility = "visible"
  } else {
    navbar.classList.remove("fixed-nav");
    navContainer.style.visibility = "hidden"
    toggleBar.classList.remove("show-link")
    close.style.display = 'none'
    open.style.display = 'block'
  }
});

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", ()=>{
    // console.log(question);
    questions.forEach((item)=> {
      // console.log(item);
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
