function btn_display() {
    document.getElementById('project').style.display = 'block';
    document.getElementById('con').style.display = 'flex';
    document.getElementById('hide').style.display = 'block';
    document.getElementById('show').style.display = 'none';
    document.getElementById('share').style.display = 'none';
    
}
function btn_on() {
    document.getElementById('image').src = 'https://www.w3schools.com/js/pic_bulbon.gif';
    document.getElementById('on').style.display = 'none';
    
    document.getElementById('of').style.color = '#fff';
    document.getElementById('of').style.borderColor = '#000';
    document.getElementById('of').style.display = 'block';
}
function btn_of() {
    document.getElementById('image').src = 'https://www.w3schools.com/js/pic_bulboff.gif';    document.getElementById('of').style.background = '#ff00d4';
    document.getElementById('on').style.background = '#00ffc8';
    document.getElementById('of').style.display = 'none';
    document.getElementById('on').style.borderColor = '#000';
    document.getElementById('on').style.display = 'block';
    document.getElementById('on').style.color = '#fff';
}
function btn_hide() {
    document.getElementById('project').style.display = 'none';
    document.getElementById('hide').style.display = 'none';
    document.body.style.backgroundColor = '#ff002b';
    document.getElementById('show').style.display = 'block';
    document.getElementById('share').style.display = 'block';

}