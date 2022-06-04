function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

const date = document.querySelector(".date");
const now = new Date();
const currentdate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

date.textContent = currentdate

const last_updated = document.querySelector("#last_update");
last_updated.textContent = `${document.lastModified} EST`;

const weekday = now.getDay();

if (weekday == 1 || weekday ==2) {

    document.querySelector(".meeting").textContent = "Come join us for the chamber meet and greet Wednesday at 7:00 p.m";
}

