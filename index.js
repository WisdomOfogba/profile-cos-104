import { getDetails } from "./modules/profileManager.js";

const fnames = document.querySelectorAll(".fname");
const lname = document.querySelector(".lname");
const email = document.querySelector(".email");
const bio = document.querySelector(".bio");

const profileDetails = getDetails();


for (const fname of fnames) {
  fname.innerHTML = profileDetails.fname;
}
lname.innerHTML = profileDetails.lname;
email.innerHTML = profileDetails.email;
bio.innerHTML = profileDetails.bio;