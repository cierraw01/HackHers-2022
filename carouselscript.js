const back = document.querySelector('#back');
const next = document.querySelector('#next');

const photo = [
  'https://i.pinimg.com/750x/8a/df/25/8adf25f3fc84556562513a1750312ad8.jpg',
  'https://i.pinimg.com/750x/21/af/0b/21af0b290963dd6d6451ed52cc96703f.jpg',
  'https://i.pinimg.com/originals/f5/d5/75/f5d575d4b9310855e7ab0d62caed5fbd.jpg',
  'https://i.pinimg.com/564x/6d/c7/ce/6dc7ce92ae8b8a18fb08592b528a12d2.jpg',
  'https://i.pinimg.com/564x/1b/fb/5d/1bfb5de82950b1753f0b9de93cc7155a.jpg',
  'https://i.pinimg.com/originals/a2/7f/c9/a27fc95beeb39d0b870f173cff5cbb68.jpg',
  'https://i.pinimg.com/564x/65/a3/04/65a304a8def6eeca63cc949b6972a9da.jpg',
  'https://i.pinimg.com/750x/94/c1/2e/94c12e71a33ef78be083d7282e060e71.jpg']
let i = 0;

next.addEventListener('click',()=>{
    i++;
    if(i > photo.length-1){
        i = 0;
    }
    document.querySelector('#cpicture').src=photo[i];
    
})
back.addEventListener('click',()=>{
    i--;
    if (i < 0){
        i = photo.length-1;
    }
    document.querySelector('#cpicture').src=photo[i];
})