let container = document.querySelector('.container');
let button = document.querySelector('.button');
let img = document.querySelector('img');
let i = 0;
 


button.onclick = function(){
    if (i === 0) {
        alert('Молодец');
    }
    this.classList.toggle('active');
    let imgValue = img.getAttribute('src');
    // чтобы работало после первого клика
    if (imgValue === 'images/crown_PNG23845.png') {
        img.removeAttribute('src');
        img.setAttribute('src', 'images/coronavirus_PNG47.png');
    } 
    if (imgValue === 'images/coronavirus_PNG47.png') {
        img.removeAttribute('src');
        img.setAttribute('src',  'images/crown_PNG23845.png');
    }
    container.classList.toggle('container-active');
    i += 1;
}
