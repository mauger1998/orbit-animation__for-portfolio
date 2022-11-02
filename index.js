const scrollSection = document.querySelector(".scrollTo")
const firstTarget = document.querySelector("ul")
const secondTarget = Array.from(document.querySelectorAll("#orbitImg"))
const thirdTarget = Array.from(document.querySelectorAll("p"))
const wholeAnimation = document.querySelector(".orbit__body")



const options = { 
    root: null,
    rootMargin: " -150px",
    threshold: 0.25,
}

const observer = 
    new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                firstTarget.classList.add("addAnimationToUl")
                secondTarget.forEach(target => {
                    target.classList.add("addAnimationToLiImg")
                })
                thirdTarget.forEach(thing => {
                    thing.classList.add("addToP")
                })
                wholeAnimation.style.opacity = "1"




            }
            
            
            
            
        })
    }, options)

observer.observe(scrollSection)
