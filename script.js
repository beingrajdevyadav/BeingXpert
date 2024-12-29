// ------------------------------- Navbar functionality -------------------------------

const navLinks = document.querySelectorAll('.nav-link');
// console.log(navLinks);
navLinks.forEach(link => {
    // this will add event listener to each link
    link.addEventListener('click', () => {
        // this will remove active class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        })
        // this will add active class to the clicked link
        link.classList.add('active');
        // console.log(link.getAttribute("name"));

        // this will render the UI based on the clicked link
        
        Render(Home(link.getAttribute("name")));
    });
})


// ------------------------------- UI render functionality -------------------------------
const root = document.getElementById('root');
const Render = (ui) => {
    root.innerHTML = ui;
}

// -----------------------------------   App Component  ------------------------------------


// ------------------------------- UI Components -------------------------------
const Home = (title) => {
    return `
     <div class="container">
        <img src="https://i.pinimg.com/originals/ef/09/36/ef0936558e58d6bebf73fee2ae895fe3.gif" alt="working">
        <h2>Welcome To ${title} Page </h2>

        <h1>Working On..</h1>

    </div>
`;
};

Render(Home("Home"));
