/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal({}); 
sr.reveal('.boxtext',{delay: 400, origin: 'top' });
sr.reveal('.img1',{delay: 300, origin: 'rigth' });
sr.reveal('.img2',{delay: 600, origin: 'rigth' });