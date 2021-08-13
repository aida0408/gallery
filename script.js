const result = document.querySelectorAll(".wrapper div")
const wrapper = document.querySelector(".wrapper")
const colors = ["dark", "red", "green", "blue"]


    result.forEach((el) => {
        el.addEventListener("click",() =>{
           result.forEach((el) =>{
               el.classList.remove("dark")
           })
            el.classList.add("dark")
        })
    })

result.forEach((el) => {
    el.addEventListener("click",() =>{
        const random = Math.floor(Math.random() * 4)
        result.forEach((el) =>
            el.removeAttribute("class"))
        el.classList.add(colors[random])
    })
})

wrapper.addEventListener("click", (event) => {
    if (event.target.classList[0] !== "wrapper"){
        const random = Math.floor(Math.random() * 4)
        result.forEach((el) =>  el.removeAttribute("class"))
        event.target.classList.add(colors[random])
    }
})

result.forEach((el, idx) => {
    el.addEventListener("click", () => {
        const random = Math.floor(Math.random() * 4)
        result.forEach((el) =>  el.removeAttribute("class"))
        if (idx === result.length -1){
            idx = -1
        }
        result[idx + 1].classList.add(colors[random])

    })
})
const smallImages = document.querySelectorAll(".small-img")
const smallwrapper = document.querySelector(".small-img")
const bigImg = document.querySelector(".big-img")

smallwrapper.addEventListener("click", (event) =>{
    if (event.target.classList[0] === "small-img"){
        bigImg.src = event.target.src
        smallImages.forEach(item => item.classList.remove("active"))
        event.target.classList.add("active")
    }
})

smallImages.forEach((el) =>{
    al.addEventListener("click", () =>{
        bigImg.src = el.src
        smallImages.forEach(item => item.classList.remove("active"))
        el.classList.add("active")
    })
})
















