let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 10000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal({}); 
sr.reveal('.box-text', { delay: 400, origin: 'left' }); 
sr.reveal('.box-card, .box_Servi',{ interval: 200, origin: 'bottom' }); 
sr.reveal('.box3',{delay: 400, origin: 'left' });
sr.reveal('.img',{delay: 400, origin: 'bottom' });
