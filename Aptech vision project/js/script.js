let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".vid-btn");

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

document.getElementById("login-btn").onclick = () => {
  document.querySelector(".login-form-container").classList.add("active");
};

document.getElementById("form-close").onclick = () => {
  document.querySelector(".login-form-container").classList.remove("active");
};

// Remember Me Checkbox (Mock Functionality)
document.getElementById("remember").onclick = () => {
  if (document.getElementById("remember").checked) {
    alert("You will be remembered!");
    // Add your "remember me" functionality here
  } else {
    alert("You will not be remembered.");
    // Remove "remember me" functionality here
  }
};

// Form Validation
document.querySelector(".login-form-container form").onsubmit = (event) => {
  let email = document.querySelector(
    '.login-form-container input[type="email"]'
  ).value;
  let password = document.querySelector(
    '.login-form-container input[type="password"]'
  ).value;

  if (email === "" || password === "") {
    alert("Please fill in both fields.");
    event.preventDefault(); // Prevent form submission
  } else {
    alert("Form submitted successfully!");
    // Continue with form submission
  }
};

/*formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});


formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});*/





document.querySelector(".search-bar-container").onsubmit = (event) => {
  event.preventDefault(); // Prevent form submission

  const searchTerm = document.getElementById("search-bar").value.toLowerCase(); // Get the search term and convert to lowercase

  if (searchTerm.includes("review")) {
    // Redirect to the review section
    document.querySelector('.navbar a[href="#review"]').click();
  }
 

  else if (searchTerm.includes("contact")) {
    // Redirect to the contact section
    document.querySelector('.navbar a[href="#contact"]').click();
  }

  else if (searchTerm.includes("packages")) {
    // Redirect to the packages section
    document.querySelector('.navbar a[href="#packages"]').click();
  }

  else if (searchTerm.includes("services")) {
    // Redirect to the services section
    document.querySelector('.navbar a[href="#services"]').click();
  }

  else if (searchTerm.includes("gallery")) {
    // Redirect to the gallery section
    document.querySelector('.navbar a[href="#gallery"]').click();
  }

  else if (searchTerm.includes("book")) {
    // Redirect to the book section
    document.querySelector('.navbar a[href="#book"]').click();
  }

  else if (searchTerm.includes("home")) {
    // Redirect to the home section
    document.querySelector('.navbar a[href="#home"]').click();
  }
  

  
  else {
    alert("No results found for Please try again.");
  }
};




videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breeakpoints: {
    640: {
      slidesPerview: 1,
    },
    768: {
      slidesPerview: 2,
    },
    1024: {
      slidesPerview: 3,
    },
  },
});

// var swiper = new Swiper(".brand-slider", {
//     spaceBetween: 20,
//     loop:true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     breeakpoints: {
//         640: {
//             slidesPerview:1,
//         },
//         768:{
//             slidesPerview:2,
//         },
//         1024: {
//             slidesPerview:3,
//         },
//     },
// });


