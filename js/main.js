

function post() {
    const headline = document.querySelector(".title__head");
    const headlineSub = document.querySelector(".title__sub");
    const img = document.querySelector(".img");
    const name = document.querySelector(".title__name");
    const dob = document.querySelector(".title__dob");
    const bio = document.querySelector(".title__content");

    headline.innerHTML = usain.headline;
    headlineSub.textContent = usain.subhead;
    img.src = usain.img;
    name.textContent = usain.name;
    dob.textContent = usain.dob;
    bio.innerHTML = usain.bio;
}

post();


// let dropdown = document.querySelector('.dropdown')
//     dropdown.addEventListener('click', (e) => {
//         if (dropdown.classList.contains('closed')) {
//         dropdown.classList.remove('closed')
//     } else {
//         dropdown.classList.add('closed')    
//     }
// })

// let test = document.querySelectorAll(".menu__sel"),
//     menu = document.querySelector(".menu");

// menu.addEventListener("click", (e) => {
//     let value = e.target.innerHTML;

//     if (value === "USAIN BOLT") {
//         post();
//     } else {
//         console.log(value)
//     }
// })

