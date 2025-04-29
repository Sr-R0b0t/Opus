/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal({}); 
sr.reveal('#first',{delay: 400, origin: 'top' });
sr.reveal('.social',{interval: 500, origin: 'left' });
sr.reveal('#h2-location',{delay: 600, origin: 'bottom' });
sr.reveal('#location',{delay: 400, origin: 'bottom' });
sr.reveal('.operation',{delay: 600, origin: 'top' });