function startAnimation() {
    animate(document.getElementById("bg"), "horizontal", 0);
    animate(document.getElementById("contacts"), "vertical", 500);
    animate(document.getElementById("lang"), "vertical", 600);
    animate(document.getElementById("top-menu__call-button"), "vertical", 700);
    animate(document.getElementById("pagination"), "horizontal-fadein", 500);
    setTimeout(function () {
        document.getElementById("side-menu__logo").style.transform = 'translateX(0%) translateY(-100%)';
        document.getElementById("side-menu__logo").style.opacity = '1';
    }, 500);
    setTimeout(function () {
        document.getElementById("savo__logo").style.transform = 'translateX(100%)';
        document.getElementById("savo__logo").style.opacity = '1';
    }, 500);
    setTimeout(function () {
        document.getElementById("watermark").style.transform = 'rotate(-90deg) translateX(50%) translateY(-50%)';
        document.getElementById("watermark").style.opacity = '1';
    }, 500);
    animate(document.getElementById("main-content__text1"), "vertical", 500);
    animate(document.getElementById("main-content__text2"), "vertical", 500);
    animate(document.getElementById("main-content__text3"), "vertical", 500);
    animate(document.getElementById("main-content__text4"), "vertical", 500);
    animate(document.getElementById("secondary-content__text1"), "vertical-fadein", 500);
    animate(document.getElementById("secondary-content__text2"), "vertical-fadein", 500);
    animate(document.getElementById("secondary-content__button"), "vertical-fadein", 500);
    animate(document.getElementById("nav__item1"), "vertical-fadein", 500);
    animate(document.getElementById("nav__item2"), "vertical-fadein", 500);
    animate(document.getElementById("nav__item3"), "vertical-fadein", 500);
    animate(document.getElementById("nav__item4"), "vertical-fadein", 500);
    animate(document.getElementById("nav__item5"), "vertical-fadein", 500);
    animate(document.getElementById("nav__item6"), "vertical-fadein", 500);
    animate(document.getElementById("first-house"), "vertical-fadein", 500);
    animate(document.getElementById("second-house"), "vertical-fadein", 700);

}

function animate(element, type, delay) {
    if (type == "horizontal") {
        setTimeout(function () {
            element.style.transform = 'translateX(0%)'
        }, delay);
    }
    if (type == "vertical") {
        setTimeout(function () {
            element.style.transform = 'translateY(0%)'
        }, delay);
    }
    if (type == "horizontal-fadein") {
        setTimeout(function () {
            element.style.transform = 'translateX(0%)';
            element.style.opacity = '1';
        }, delay);
    }
    if (type == "vertical-fadein") {
        setTimeout(function () {
            element.style.transform = 'translateY(0%)';
            element.style.opacity = '1';
        }, delay);
    }
}


document.getElementById("bg").addEventListener("load", animate);
//document.getElementById("bg").onload = function () {
//    animate();
//};
//
//function myFunction() {
//    document.getElementById("demo").innerHTML = "Iframe is loaded.";
//}
