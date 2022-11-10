const container = document.querySelector('.container');
// container.style.display= 'flex';
// container.style.flexWrap= 'wrap';
// container.style.alignItems= 'center';
container.style.display= 'grid';
container.style.gridTemplateColumns= 'repeat(16, 1fr)';
// container.style.alignItems= 'center';
// container.style.justifyContent= 'center';

for(i=0; i < 16; i++) {
    for(j=0; j < 16; j++) {
    let inner_div = document.createElement('div') ;
    inner_div.classList.add('inner-div');
    container.appendChild(inner_div);
    
    }
}
const gridConstructor =document.querySelector('#gridNumber');

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

}
