const modal=document.querySelector(".modal");
const showmodal=document.querySelector(".modal-show");


// show modal
const showModal=()=>{
    modal.classList.add("show")
    showmodal.style.opacity=0;
}

// hide modal
const hideModal=()=>{
    modal.classList.remove("show")
    showmodal.style.opacity=1;
}
