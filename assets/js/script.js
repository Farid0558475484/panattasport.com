$(document).ready(function () {
  $(".login_usr").focus(function () {
    $(".login-label-usr").addClass("active");
    $(".login-label-psw").removeClass("active");
  });

  $(".login_psw").focus(function () {
    $(".login-label-psw").addClass("active");
    $(".login-label-usr").removeClass("active");
  });

  $(".login_usr").focusout(function () {
    $(".login-label-usr").removeClass("active");
  });
  $(".login_psw").focusout(function () {
    $(".login-label-psw").removeClass("active");
  });
});

// const person = new Object({
//   name: "Farid",
//   age: 25,
//   greet: function () {
//     console.log("Hi, I am " + this.name);
//   },
// });

// Object.prototype.sayHello = function () {
//   console.log("Hello");
// };

// Object.prototype.Salam = function () {
//   console.log("Salam");
// };

// const lena = Object.create(person);

// lena.name = "Elena";

// const qwerty = "asdfgh";

// sort array

// const sortArray =()=>{
//   let issorted = false;
//   newAz.addEventListener("click", () => {
//     if (!issorted) {
//       issorted = true;
//       az();
//     } else {
//       issorted = false;
//       za();
//     }
//   }
//   );

// }

// const az = () => {
//   const sorted = [...products].sort((a, b) => {
//     return a.price - b.price;
//   });
//   renderProducts(sorted);
// }

// const za = () => {
//   const sorted = [...products].sort((a, b) => {
//     return b.price - a.price;
//   });
//   renderProducts(sorted);
// }

// console.log("salam");
//  setTimeout(() => {console.log("sagol");},100);

//  console.log("salam111");

// header sticky on scroll 100px

// window.onscroll = function () {
//   myFunction();
// };

// var header = document.getElementsByClassName("header");
// var sticky = header.offsetTop;

// function myFunction() {
//     console.log(window.pageYOffset);
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("header").addClass("sticky");
  } else {
    $("header").removeClass("sticky");
  }
});

//   preloader jquery timer

// $(".technologia-slider").owlCarousel({
//   loop: true,
//   margin: 10,
//   nav: false,
//   autoplay: true,
//   autoplayTimeout: 3000,
//   dot: true,
//   responsive: {
//     0: {
//       items: 1,
//       dot: true,
//     },
//     600: {
//       items: 1,
//       dot: true,
//     },
//     1000: {
//       items: 1,
//       dot: true,
//     },
//   },
// });

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }
// array.forEach((element) => {});

// const map = document.getElementById("map");
// const country = document.querySelectorAll(".land");
// const toolTip = document.getElementById("tooltip");
// const message = toolTip.innerHTML;

// // grab the country name and display
// function showCountryName() {
//   let countryName = event.target.getAttribute("title");
//   toolTip.innerHTML = countryName;
// }

// // show the default text
// function hideCountryName() {
//   toolTip.innerHTML = message;
// }

// // set event listener on the map
// map.addEventListener("mouseover", function (event) {
//   // if the mouse hovers over a country
//   if (event.target.classList.contains("land")) {
//     showCountryName();
//   } else {
//     hideCountryName();
//   }
// });

// /////

// // add click/ hover event to the map
// map.addEventListener("click", function (event) {
//   // if the mouse hovers over a country
//   if (event.target.classList.contains("land")) {
//     showCountryName();
//   } else {
//     hideCountryName();
//   }
// }
// );

// // add click/ hover event to the map
// map.addEventListener("mouseover", function (event) {
//   // if the mouse hovers over a country
//   if (event.target.classList.contains("land")) {
//     showCountryName();
//   } else {
//     hideCountryName();
//   }
// }
// );

// window.onload = function () {
//   let myIframe = document.getElementsByTagName("iframe");
//   let doc = myIframe.contentDocument;
//   doc.body.innerHTML = doc.body.innerHTML + `<style> {height: 450px;}</style>`;
// };


