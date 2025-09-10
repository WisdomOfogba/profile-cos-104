import { validateForm } from "../modules/formValidator.js";
import { getDetails, saveDetails} from "../modules/profileManager.js";

const profileDetails = getDetails();

const profileForm = document.getElementById("profile-form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const bio = document.getElementById("bio");
const alert = document.getElementById("alert");
const submit = document.getElementById("submit");

fname.value = profileDetails.fname;
lname.value = profileDetails.lname;
email.value = profileDetails.email;
bio.value = profileDetails.bio;


profileForm.addEventListener("submit", (e) => {
    submit.innerHTML = "Submitting..."
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
        fname: formData.get("fname"),
        lname: formData.get("lname"),
        email: formData.get("email"),
        bio: formData.get("bio")
    }
    const validatedForm = validateForm(data);

    if (!validatedForm.success) {
        alert.innerHTML = validatedForm.message;
        alert.classList.remove("success")
        alert.classList.add("error");
        alert.classList.add("visible")
        return;
    }
 
    saveDetails(data);
    setTimeout(() => {
        submit.innerHTML = "Submitted!"
        alert.innerHTML = "Submited Form Succesfully!"
        alert.classList.remove("error")
        alert.classList.add("success")
        alert.classList.add("visible")
    }, 2000);
    setTimeout(() => {
        window.location.href = "../index.html";
    }, 4000);
    
})