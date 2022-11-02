const scrollSection = document.querySelector(".scrollTo")
const firstTarget = document.querySelector("ul")
const secondTarget = Array.from(document.querySelectorAll("#orbitImg"))
const thirdTarget = Array.from(document.querySelectorAll("p"))
const wholeAnimation = document.querySelector(".orbit__body")
const firstList = document.querySelector("#firstList")
const secondList = document.querySelector("#secondList")
const thirdList = document.querySelector("#thirdList")
const fourthList = document.querySelector("#fourthList")
const fifthList = document.querySelector("#fifthList")
const sixthList = document.querySelector("#sixthList")
const seventhList = document.querySelector("#seventhList")
const eigthList = document.querySelector("#eigthList")




const options = { 
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
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
                firstList.classList.add("addToFirstList")
                secondList.classList.add("addToSecondList")
                thirdList.classList.add("addToThirdList")

                fourthList.classList.add("addToFourthList")
                fifthList.classList.add("addToFifthList")
                sixthList.classList.add("addToSixthList")
                seventhList.classList.add("addToSeventhList")
                eigthList.classList.add("addToEigthList")




            }
            
            
            
            
        })
    }, options)

observer.observe(scrollSection)
