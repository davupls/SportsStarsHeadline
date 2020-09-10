

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