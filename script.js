const talepform = document.querySelectorAll(".talepform");
const talepContainer= document.querySelector(".talep-container");
const offForm = document.querySelectorAll(".off-talep-form");
const changetext = document.querySelector(".pelet-header");
const plchange = document.querySelector(".pl-change");


for (let i = 0; i < talepform.length; i++) {
    talepform[i].addEventListener("click", () => {
        talepContainer.style.display = "none"
    })
    offForm[i].addEventListener("click", () => {
        talepContainer.style.display = "none"
    })   
}




