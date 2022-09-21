import{openMobMenu}from"./toggle-menu";const formSection=document.querySelector(".form-application"),form=document.querySelector(".form-application__data"),inputs=document.querySelectorAll("input[data-rule]"),btnSubmit=document.querySelector(".form-application__button-buy"),modal=document.querySelector(".modal-form"),modalWindow=document.querySelector(".modal-form__window"),modalClose=document.querySelector(".modal-form__button-close"),buttonBuy=document.querySelector(".card__button-buy");function handleButtonclick(){formSection.scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"})}btnSubmit.disabled=!0,buttonBuy.addEventListener("click",handleButtonclick),form.addEventListener("submit",(function(t){t.preventDefault()}));for(let t of inputs)t.addEventListener("input",(function(){let t,e=this.dataset.rule,o=this.value;switch(e){case"name":t=/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(o);break;case"number":t=/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(o);break;case"email":t=/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i.test(o);break;case"comment":t=!0}this.classList.remove("invalid"),this.classList.remove("valid"),t?(this.classList.add("valid"),btnSubmit.disabled=!1):(this.classList.add("invalid"),btnSubmit.disabled=!0),checkInputs()||!0!==t||(btnSubmit.disabled=!0)}));function checkInputs(){for(let t=0;t<inputs.length;t++)if(!inputs[t].value)return!1;return!0}btnSubmit.addEventListener("click",(function(t){modal.classList.remove("modal-form--close")}));const clearForm=function(){form.reset()};modal.addEventListener("click",(function(t){modal.classList.add("modal-form--close"),clearForm()})),modalWindow.addEventListener("click",(function(t){t.stopPropagation()})),modalClose.addEventListener("click",(function(){modal.classList.add("modal-form--close"),clearForm()})),toggleMenu.addEventListener("click",openMobMenu);