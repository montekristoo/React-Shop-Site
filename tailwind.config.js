/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: ["jit"],
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            height: {
                128: "81px",
            },
            fontFamily: {
                sans: ["ui-sans-serif", "system-ui"],
                serif: ["ui-serif", "Georgia"],
                mono: ["ui-monospace", "SFMono-Regular"],
                display: ["Oswald", "Montserrat"],
                body: ['"Open Sans"'],
            },
            fontSize: {
                logo: "2rem",
                navText: "18px",
                productName: "64px;",
            },
            colors: {
                customGray: "#BDBDBD",
                number: "#3C3C3C",
            },
        },
    },
    plugins: [],
};