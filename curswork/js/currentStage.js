const btns = document.querySelectorAll(".button")
const floors = document.querySelectorAll(".floor")

//начальный этаж
let currentStage = 2

for(let i=0; i<btns.length;i++){
    btns[i].addEventListener('click',function (){
        if(i!==currentStage) {
            btns[currentStage].classList.remove("now")
            this.classList.add("now")

            floors[currentStage].classList.add("hidden")
            floors[i].classList.remove("hidden")
            currentStage = i
        }

    })

}