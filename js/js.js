const current_date = new Date();
const copyright_year = document.querySelector("#copyright_year");
const last_updated = document.querySelector("#last_update");

copyright_year.textContent = current_date.getFullYear();

// sets 2 digit values for month and day
const month = String(current_date.getMonth()).padStart(2, "0");
const day = String(current_date.getDay()).padStart(2, "0");

// sets 2 digit values for hours, mintes, and seconds
const hours = String(current_date.getHours()).padStart(2, "0");
const minutes = String(current_date.getMinutes()).padStart(2, "0");
const seconds = String(current_date.getSeconds()).padStart(2, "0");

// combines values togetehr to give current date and time
const date = `${month}/${day}/${current_date.getFullYear()}`;
const time = `${hours}:${minutes}:${seconds}`

last_updated.textContent = `${date} ${time}`