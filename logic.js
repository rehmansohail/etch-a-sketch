const main = document.querySelector('#main_container')

//dynamically make the grid
for(let i=0;i<32;i++){
  let container=document.createElement('div')
  container.classList.add('container')
  for(let j=0;j<32;j++){
    let box=document.createElement('div')
    box.style.height='16px'
    box.style.width='16px'
    box.classList.add('box')
    container.appendChild(box)
  }
  main.appendChild(container)

}

//to color all boxes
const smallBoxes = document.querySelectorAll('.box');

// [...smallBoxes].forEach(smallBox => {
//   smallBox.addEventListener('mouseover', () => {
//       smallBox.style.backgroundColor='red'           //use camelCase for the color property
//   });
// })

const buttons = document.querySelectorAll('button')
const buttonsarr = Array.prototype.slice.call(buttons)
buttonsarr.forEach(button=>{
  button.addEventListener('click',(e)=>{
    let elementtext = e.target.innerText;
    // console.log(elementtext)
    if(elementtext==='Red'){
        [...smallBoxes].forEach(smallBox => {
      smallBox.addEventListener('mouseover', () => {
        smallBox.style.backgroundColor='red' 
          
      });
    })
    }else if(elementtext==='Erase'){
      [...smallBoxes].forEach(smallBox => {
        smallBox.addEventListener('mouseover', () => {
          smallBox.style.backgroundColor='pink' 
            
        });
      })
    }else if(elementtext==='Random'){
      const colorButton = document.getElementById('colorButton');
const colorPicker = document.getElementById('colorPicker');
colorPicker.click();

// Color picker change event listener
colorPicker.addEventListener('input', (event) => {
  const selectedColor = event.target.value;
  [...smallBoxes].forEach(smallBox => {
    smallBox.addEventListener('mouseover', () => {
      smallBox.style.backgroundColor=`${selectedColor}` 
        
    });
  })
});
    }
    else{
      //reset everything
    }
    // [...smallBoxes].forEach(smallBox => {
    //   smallBox.addEventListener('mouseover', () => {
          
          
    //   });
    // })
  })
})