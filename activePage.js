
// for navbar links active page 

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').
    forEach(link => {
       if(link.href.includes(`${activePage}`)){
        console.log(`${activePage}`);
        link.classList.add('active');
       }; 
    });
