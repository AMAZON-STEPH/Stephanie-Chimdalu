const  hamburger = document.getElementById("hamburger")
const ham1 = document.getElementById("ham1")
const ham2 = document.getElementById("ham2")
const ham3 = document.getElementById("ham3")
const menu = document.getElementById("menu")
const search = document.getElementById("search")
const tooltip = document.getElementById("tooltip")
const scroll = document.getElementById("scroll")
const email = document.getElementById("email")
const checkEmail = document.getElementById("checkEmail")
const username = document.getElementById("name")
const message = document.getElementById("message")
const send = document.getElementById("send") 
const container = scroll.parentElement;
const thehome = document.getElementById("thehome")
const theprojects = document.getElementById("theprojects")
const project = document.getElementById("project")
const fasbolt = document.getElementById("fasbolt")
const skills = document.getElementById("skill")
const portfoilo = document.getElementById("portfoilo")
const loader = document.getElementById("loader")
const Qualifications = document.getElementById("Qualifications")
const theQualifications = document.getElementById("theQualifications")
const closeQualification = document.getElementById("closeModal");
const settings = document.getElementById("settings")


hamburger.addEventListener("click", () => {
  ham1.classList.toggle("rotate-[-45deg]");
  ham1.classList.toggle("translate-y-[7px]");

  ham2.classList.toggle("opacity-0");

  ham3.classList.toggle("rotate-[45deg]");
  ham3.classList.toggle("-translate-y-[7px]");

  menu.classList.toggle("hidden")
})

search.addEventListener("click", () => {
  tooltip.classList.toggle("hidden")
})

let position = container.offsetWidth;

function movetext(){
  position--;
  if(position < -scroll.offsetWidth){
    position = container.offsetWidth;
  }
  scroll.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(movetext);
}

movetext();

email.addEventListener("input", () => {
  checkEmail.innerHTML =/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)? "" :"invalid email address";
})
send.addEventListener("click", (e) => {
  e.preventDefault()
  if (
    username.value.trim().length === 0 &&
    email.value.trim().length === 0 &&
    message.value.trim().length === 0
  ) {
    alert("Please fill in the fields");
    return;
  }alert("sent successfully")
})

thehome.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  thehome.classList.add("text-white")
})

theprojects.addEventListener("click", () => {
  project.scrollIntoView({ behavior: "smooth" });
  theprojects.classList.add("text-white")
})

fasbolt.addEventListener("click", () => {
  skills.scrollIntoView({ behavior: "smooth" });
  fasbolt.classList.add("text-white")
})

function Loading() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      setTimeout(resolve, 1200); 
    }, 4000);
  });
}

Loading().then(() => {
  loader.style.display = "none";
  portfoilo.classList.remove("hidden");
});

Qualifications.addEventListener("click", () => {
  theQualifications.classList.remove("hidden")
  document.body.classList.add("overflow-hidden");
  Qualifications.classList.add("text-white")
});

closeQualification.addEventListener("click", () => {
  theQualifications.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
});

theQualifications.addEventListener("click", (e) => {
  if (e.target === theQualifications) {
    theQualifications.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
});

settings.addEventListener("click", () => {
  document.body.classList.remove("font-serif", "font-mono");
  document.body.classList.add("font-sans");
});