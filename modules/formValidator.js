export const validateForm = (formData) => {
    if (!formData.email.includes("@")) {
        return {
            success: false,
            message: "Email does not include '@' sign"
        };
    };
    if (!formData.email.includes(".")) {
        return {
            success: false,
            message: "Email does not include '.' sign before the domain"
        }
    }
    if (!formData.bio.length > 200) {
        return {
            success: false,
            message: "Bio should not be more than 200 words."
        }
    }

    return { success: true}
}