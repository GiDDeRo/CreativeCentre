const Link = document.querySelectorAll("ul > a");
const customBtn = document.querySelectorAll(".chatBtn");
const orderBtn = document.querySelector(".btn");
const callBtn = document.querySelector(".call");
const open =  document.getElementById("open");
const close =  document.getElementById("close");
const openCloseIcon = document.getElementById("open-close");
const sideBar = document.querySelector("nav");



function clickLink(element){
    element.addEventListener("click", e=> {
       for (let i = 0; i < Link.length; i++) {
                Link[i].classList.remove("active")
                openCloseIcon.classList.remove("side-active");
                sideClose();
       }
       element.classList.toggle("active");
    });

}

function sideOpen () {
        open.style.display = "block";
        open.style.animation = "openClose .5s ease";
        close.style.display = "none";
        sideBar.style.right = "0";
        sideBar.style.transition = ".5s all ease";
        sideBar.style.boxShadow = "0px 0px 0px 10000px rgb(0, 0, 0, .8)";
}

function sideClose () {
        open.style.display = "none";
        close.style.display = "block";
        close.style.animation = "openClose .5s ease";
        sideBar.style.right = "-100%";
        sideBar.style.transition = ".5s all ease";
        sideBar.style.boxShadow = "none";
}

openCloseIcon.addEventListener("click", e=> {
    openCloseIcon.classList.toggle("side-active")
    if (openCloseIcon.classList.contains("side-active")) {
        sideOpen();
    } else {
        sideClose();
    }
});

function contactBtn (element) {
    let phoneNumber = "2348111923106";

    element.addEventListener("click", e=> {
        let customMessage = "Hello there, I want to ";
        let url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(customMessage)}`;
        window.open(url, '_blank');
    });
    
    orderBtn.addEventListener("click", e=> {
        let customMessage = "Hello there, I want to place an order";
        let url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(customMessage)}`;
        window.open(url, '_blank');
    });

    callBtn.addEventListener("click", e=> {
        window.location.href = `tel${phoneNumber}`;
    });
};

Link.forEach(clickLink);
customBtn.forEach(contactBtn);
