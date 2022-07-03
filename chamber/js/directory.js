const url = "json/data.json";

const container = document.querySelector("#directory");

async function getDirectory() {

    let response = await fetch(url);

    if (response.ok) {

        let data = await response.json();
        buildDirectory(data);
    };
};

function buildDirectory(data) {
    data.forEach(business => {        
        let section = document.createElement("section");
        let h2 = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let member = document.createElement("p");
        let img = document.createElement("img");

        h2.textContent = business.name;
        img.setAttribute("src", business.image);
        img.setAttribute("alt", business.name);
        address.textContent = business.address;
        phone.textContent = business.phoneNumber;
        member.textContent = `Membership level: ${business.membership}`;
        website.setAttribute("href", business.website);
        website.textContent = "Visit our site!"
        
        
        section.append(h2);
        section.append(img);
        section.append(address);
        section.append(phone);
        section.append(member);
        section.append(website);

        container.append(section);
    })
};

getDirectory()

const gridbutton = document.querySelector("#gridview");
const listbutton = document.querySelector("#listview");

gridbutton.addEventListener("click", () => {
  container.classList.add("directorygridview");
  container.classList.remove("directorylistview");
});

listbutton.addEventListener("click", () => {
  container.classList.add("directorylistview");
  container.classList.remove("directorygridview");
});