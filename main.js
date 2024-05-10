const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};
ScrollReveal().reveal("header_container h1", scrollRevealOption);
ScrollReveal().reveal("header_container h4",{
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal("header_container .btn",{
    ...scrollRevealOption,
    delay: 500,
});
