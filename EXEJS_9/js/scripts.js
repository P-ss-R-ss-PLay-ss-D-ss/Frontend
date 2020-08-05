//Show/hide chat
const btnShow = document.querySelector('.btn-show');
const cover = document.querySelector('.cover');

btnShow.addEventListener('click', () =>{
    if( cover.style.display != 'none'){
        cover.style.display = 'none';
    }
    else{
        cover.style.display = 'block';
    }
})