// ====== Show And Hide Nav-Bar ======
const showIcon = document.querySelector(".fa-bars");
const ulLink = document.querySelector("nav ul");
showIcon.addEventListener("click", () => {
  ulLink.classList.toggle("show");
});

// ====== Change Nav Bar In Scroll ======
const navBar = document.querySelector(".header .container nav");
window.addEventListener("scroll" , ()=>{
    if (scrollY >= 55){
        navBar.classList.add("light-animation");
    } else {
        navBar.classList.remove("light-animation");
    }
});

// ====== Change Nav-Bar Links In Scroll ======
const links = document.querySelectorAll("nav ul li a");
const linkHome = document.getElementById("linkHome");
const linkAbout = document.getElementById("linkAbout");
const linkServices = document.getElementById("linkServices");
const linkPortfolio = document.getElementById("linkPortfolio");
const linkTestimonial = document.getElementById("linkTestimonial");
const linkBlog = document.getElementById("linkBlog");
const linkContact = document.getElementById("linkContact");
window.addEventListener("scroll", () => {
  if (scrollY >= -5 && scrollY <= 550) {
    links.forEach((allLink) => {
      linkHome.classList.add("active");
      allLink.classList.remove("active");
    });
  } else if (scrollY >= 550 && scrollY <= 1300) {
    links.forEach((allLink) => {
      linkAbout.classList.add("active");
      allLink.classList.remove("active");
    });
  } else if (scrollY >= 1300 && scrollY <= 1900) {
    links.forEach((allLink) => {
      linkServices.classList.add("active");
      allLink.classList.remove("active");
    });
  } else if (scrollY >= 1900 && scrollY <= 3000) {
    links.forEach((allLink) => {
        linkPortfolio.classList.add("active");
      allLink.classList.remove("active");
    });
  } else if (scrollY >= 3000 && scrollY <= 3650) {
    links.forEach((allLink) => {
      linkTestimonial.classList.add("active");
      allLink.classList.remove("active");
    });
  } else if (scrollY >= 3650 && scrollY <= 4300) {
    links.forEach((allLink) => {
      linkBlog.classList.add("active");
      allLink.classList.remove("active");
    });
  } else if (scrollY >= 4300) {
    links.forEach((allLink) => {
      allLink.classList.remove("active");
      linkContact.classList.add("active");
    });
  }
});

// ====== Arrow Back Up ======
const backUp = document.querySelector(".back-up");
window.addEventListener("scroll", () => {
  if (scrollY >= 250) {
    backUp.style.right = "15px";
  } else {
    backUp.style.right = "-40px";
  }
});
backUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ====== Auto Write Words ======
let x = 0;
const autoWrite = document.querySelector(".auto-write");
const autoWriteFn = () => {
  const title = "Developer ";
  autoWrite.innerHTML = title.slice(0, x);
  x++;
  if (title.length < x) {
    x = 1;
  }
};
const SetIntervalAutoWrite = setInterval(autoWriteFn, 300);

// ====== Counter Increase Numbers ======
const numbersIncrease = document.querySelectorAll("#num");
numbersIncrease.forEach((item) => {
  let startValue = 0;
  let endValue = item.dataset.value;
  let counter = setInterval(() => {
    startValue++;
    item.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, 1000 / endValue);
});

// ====== Filter Images ======
const ulAttack = document.querySelectorAll(".portfolio ul li");
const boxs = document.querySelectorAll(".portfolio .boxs .box");
ulAttack.forEach((li) => {
  li.addEventListener("click", (e) => {
    // -----
    ulAttack.forEach((element) => {
      element.classList.remove("active");
    });
    li.classList.add("active");
    //------
    boxs.forEach((item) => {
      item.style.display = "none";
    });
    let boxShow = document.querySelectorAll(
      `.${e.target.textContent.toLowerCase()}`
    );
    boxShow.forEach((eo) => {
      eo.style.display = "block";
    });
  });
});

// ====== Open Model Image ======
const model = document.querySelector(".model");
const iconOpen = Array.from(document.querySelectorAll(".portfolio .boxs .box .layer-image i"));
const imageChangeModel = document.querySelector(".model .image-change");
const next = document.querySelector(".model .image-change #next");
const prev = document.querySelector(".model .image-change #prev");
const close = document.querySelector(".model .image-change #close");
let currentIndex;

iconOpen.forEach((item , index) => {
  item.addEventListener("click", (e) => {
    model.style.display = "flex";
    let imagePath = e.target.parentElement.parentElement.querySelector("img").getAttribute('src');
    imageChangeModel.style.backgroundImage = `url(${imagePath})`;
    currentIndex = index;
  });
});

next.addEventListener("click" , nextImage);
function nextImage() {
  currentIndex++
  if (currentIndex == iconOpen.length) {
    currentIndex = 0;
  }
  let imagePath = iconOpen[currentIndex].parentElement.parentElement.querySelector("img").getAttribute('src');
  imageChangeModel.style.backgroundImage = `url(${imagePath})`;
}

prev.addEventListener("click" , prevImage);
function prevImage() {
  currentIndex--
  if (currentIndex == -1) {
    currentIndex = iconOpen.length - 1;
  }
  let imagePath = iconOpen[currentIndex].parentElement.parentElement.querySelector("img").getAttribute('src');
  imageChangeModel.style.backgroundImage = `url(${imagePath})`;
}

close.addEventListener("click" , closeImage);
function closeImage() {
  model.style.display = "none";
}

document.addEventListener("keyup" , (e)=>{
  if (e.code == "ArrowRight") {
    nextImage();
  } else if (e.code == "ArrowLeft") {
    prevImage();
  }else if (e.code == "Escape") {
    closeImage();
  }
});

model.addEventListener("click" , (eo)=>{
  if (eo.target.getAttribute("id" ) == "model"){
    closeImage();
  }
});