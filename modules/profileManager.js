export const saveDetails = (formData) => {
    localStorage.setItem("form-data", JSON.stringify(formData));
};

export const getDetails = () => {
 const res = localStorage.getItem("form-data");
 const data = JSON.parse(res);
 if (data) {
    return data;
 } else {
    return {
        fname: "John",
        lname: "Doe",
        email: "test@testmail.com",
        bio: "I love Pizza!"
    }
 }
};