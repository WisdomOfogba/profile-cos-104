export const validateForm = (formData) => {
    if (!formData.email.includes("@")) {
        return {
            success: false,
            message: "Email must contain '@' sign"
        };
    };
    if (!formData.email.includes(".")) {
        return {
            success: false,
            message: "Email must contain a '.' in the domain"
        }
    }
    if (formData.bio.length > 200) {
        return {
            success: false,
            message: "Bio should not be more than 200 characters."
        }
    }

    return { success: true}
}