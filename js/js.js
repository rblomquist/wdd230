const current_date = new Date();
const copyright_year = document.querySelector("#copyright_year");
const last_updated = document.querySelector("#last_update");

copyright_year.textContent = current_date.getFullYear();

last_updated.textContent = `${document.lastModified} EST`;