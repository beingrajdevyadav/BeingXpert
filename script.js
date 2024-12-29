// navbar links functionality
const navLinks = document.querySelectorAll('.nav-link');
// console.log(navLinks);
navLinks.forEach(link=>{
    // this will add event listener to each link
    link.addEventListener('click', ()=>{
        // this will remove active class from all links
        navLinks.forEach(link=>{
            link.classList.remove('active');
        })
        // this will add active class to the clicked link
        link.classList.add('active');
        console.log(link);
    });
})