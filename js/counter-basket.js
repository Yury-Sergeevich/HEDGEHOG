const addButtonProduct=document.querySelectorAll(".slider__button-add"),basketContainer=document.querySelector(".user-list__counter-container"),basketCounter=document.querySelector(".user-list__counter-basket");let counter=0;function counterProduct(){basketContainer.classList.contains("user-list__counter-container--counter-product")||basketContainer.classList.add("user-list__counter-container--counter-product"),counter+=1,basketCounter.textContent=counter}addButtonProduct.forEach((t=>{t.addEventListener("click",counterProduct)}));