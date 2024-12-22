// more&less
let btnMore = document.getElementById("btn-more");
let btnLess = document.getElementById("btn-less");
let firstP = document.getElementById("first");
let secondP = document.getElementById("second");
let theEnd = document.getElementById("end");


btnMore.addEventListener("click" , function () {
    firstP.style.cssText = "display:block";
    btnMore.addEventListener("click" , function () {
        secondP.style.cssText = "display:block";
        btnMore.addEventListener("click" , function() {
            theEnd.style.cssText = "display:block";
            btnMore.style.cssText = "display:none";
            btnLess.style.cssText = "display:block";
            btnLess.addEventListener("click",function () {
                theEnd.style.cssText = "display:none";
                btnLess.addEventListener("click",function () {
                    secondP.style.cssText = "display:none";
                    btnLess.addEventListener("click",function () {
                        firstP.style.cssText = "display:none";
                        btnLess.style.cssText = "display:none";
                        btnMore.style.cssText = "display:block";
                    });
                });
            })
        });
    });
});

// Back to Top Btn


// Back to Top Btn
let backToTop = document.getElementById("back-top");
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};
backToTop.addEventListener("click", function () {
    window.scrollTo ({
        top:0,
        behavior:"smooth",
    });
});
// print the current year 

let myDate = document.getElementById("years");
let dt = new Date();
myDate.textContent = dt.getFullYear();