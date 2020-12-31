const starwars = new Audio('sounds/stars.ogg');
const heading = document.querySelector('.heading');
const bottomtext = document.querySelector('.bottomtext');
const roof = document.querySelector('.roof');
const family = document.querySelector('.family');
const crawl = document.querySelector('.crawl');
const clickme = document.querySelector('.clickme');



function noise(){
    starwars.play();

}

function gogo() {
noise();
    heading.classList.add('headinganim');
    bottomtext.classList.add('bottomtextanim');
    roof.classList.add('roofanim');
    family.classList.add('familyanim');
    crawl.classList.add('crawlanim');
    clickme.classList.add('vanisher');
  
}

