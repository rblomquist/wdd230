function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

const date = document.querySelector(".date");
const now = new Date();
const currentdate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

date.textContent = currentdate

const last_updated = document.querySelector("#last_update");
last_updated.textContent = `${document.lastModified} EST`;