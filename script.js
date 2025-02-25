const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// const a = document.querySelector('#elem1');
// const image = a.getAttribute('data-image')
// console.log(image);


const btn = document.getElementById("button")
const c = document.getElementById("imge")
const d = document.querySelector(".h1")

//imgae change
btn.addEventListener('click', function () {
    d.style.left = "0vw"
    c.style.backgroundImage = `url(https://plus.unsplash.com/premium_photo-1661378416851-75cf45fbc0e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`

})
function page4Animation() {
    const elemC = document.querySelector('#elem-container')
    const fixed = document.querySelector('#fixed-image')

    elemC.addEventListener('mouseover', function () {
        fixed.style.display = "block"

    })
    elemC.addEventListener('mouseleave', function () {
        fixed.style.display = "none"

    })

    const elems = document.querySelectorAll('.elem');
    elems.forEach(function (e) {
        e.addEventListener('mouseenter', function () {
            const image = e.getAttribute('data-image')
            fixed.style.backgroundImage = `url(${image})`
        })
    })

}
// CODE FROM SWIPR.JS WEBSIDE
function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,

    });
}
function menuanimation() {
    const menu = document.querySelector("nav h3")
    const full = document.querySelector("#full-scr")
    const navimg = document.querySelector("nav img")
    var flag = 0

    menu.addEventListener('click', function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = '-100%'
            navimg.style.opacity = 1
            flag = 0
        }
    })
}
swiperAnimation()
page4Animation()
menuanimation()

const loader= document.querySelector("#loader")
setTimeout(function () {
    loader.style.top = '-100%' 
},[4000])