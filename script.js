const container = document.querySelector('.container');
// container.style.display= 'flex';
// container.style.flexWrap= 'wrap';
// container.style.alignItems= 'center';
container.style.display= 'grid';
container.style.gridTemplateColumns= 'repeat(16, 1fr)';
// container.style.alignItems= 'center';
// container.style.justifyContent= 'center';

let actualColor = document.querySelector('#color-picker').value;
window.addEventListener('load', initializeGridContainer);
let black = document.querySelector('.black');
black.addEventListener('click', ()=>changeHoverColor());
let eraser = document.querySelector('.eraser');
eraser.addEventListener('click', ()=>changeHoverColor('white'));
document.querySelector('#color-picker').addEventListener('input', ()=>{
    actualColor = document.querySelector('#color-picker').value;
    changeHoverColor(actualColor);
});


function initializeGridContainer(){
for(i=0; i < 16; i++) {
    for(j=0; j < 16; j++) {
    let inner_div = document.createElement('div') ;
    inner_div.classList.add('inner-div');
    // inner_div.style.border = `${color} 1px solid`;
    container.appendChild(inner_div);
    
    changeHoverColor(actualColor);
    // console.log(actualColor);
    }
}
}


function changeHoverColor(color='black'){
    // console.log(color.target);
    let inner_divs = document.querySelectorAll('.inner-div');
    inner_divs.forEach(inner_div => inner_div.addEventListener('mouseover',()=>{
        inner_div.style.backgroundColor = `${color}`;
        // console.log(color);
    }))
}

const gridConstructor =document.querySelector('#gridNumber');

let inner_div = document.createElement('div') ;

gridConstructor.addEventListener('change', changeGrid);

function changeGrid() {
    const value = document.querySelector('#gridNumber').value;
    container.innerHTML="";
    container.style.display= 'grid';
    container.style.gridTemplateColumns= `repeat(${value}, 1fr)`;
    for(i=0; i < value; i++) {
        for(j=0; j < value; j++) {
        let inner_div = document.createElement('div') ;
        inner_div.classList.add('inner-div');
        container.appendChild(inner_div);
        
        }
    }
    changeHoverColor(actualColor);
}
