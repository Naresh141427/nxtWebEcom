import toast from "react-hot-toast";


export const showSuccessToast = (message, duration = 800) => {
    toast.success(message, {
        duration,
        style: {
            color: "#0f9d58",
            fontWeight: "600",
        },
        iconTheme: {
            primary: "#0f9d58",
            secondary: "#ffffff",
        },
    });
};


export const showErrorToast = (message, duration = 700) => {
    toast.error(message, {
        duration,
        style: {
            color: "#d32f2f",
            fontWeight: "600",
        },
        iconTheme: {
            primary: "#d32f2f",
            secondary: "#ffffff",
        },
    });
};


export const showNeutralToast = (message, duration = 700) => {
    toast(message, {
        duration,
        style: {
            background: "#e3f2fd",
            color: "#0d47a1",
            fontWeight: "600",
        },
        iconTheme: {
            primary: "#0d47a1",
            secondary: "#ffffff",
        },
    });
};
