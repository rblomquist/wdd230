var spoturl = "json/data.json";

const spotlight1 = document.querySelector(".spotlight1");
const spotlight2 = document.querySelector(".spotlight2");




async function getSpotlight() {

    let response = await fetch(spoturl);

    if (response.ok) {

        let data = await response.json();
        buildSpotlight(data);
    };
};

function buildSpotlight(data) {
    let random1 = getRandomInt(0, data.length - 1)
    let random2 = getRandomInt(0, data.length - 1)

    makeSpotlight(data, random1, spotlight1);
    makeSpotlight(data, random2, spotlight2);
};

function makeSpotlight (data, index, container) {
    let div = document.createElement("div");
    div.setAttribute("class", "contact")
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("a");
    let img = document.createElement("img");

    h2.textContent = "Community Spotlight"
    h3.textContent = data[index].name;
    address.textContent = data[index].address;
    phone.textContent = data[index].phoneNumber;
    website.textContent = data[index].website;
    img.setAttribute("src", data[index].image);
    img.setAttribute("alt", data[index].name);

    container.append(h2);
    container.append(h3);
    container.append(img);
    container.append(address);
    container.appendChild(phone);
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

getSpotlight();
