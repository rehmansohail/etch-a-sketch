const main = document.querySelector('#main_container')

for(let i=0;i<32;i++){
  let container=document.createElement('div')
  container.classList.add('container')
  for(let j=0;j<32;j++){
    let box=document.createElement('div')
    box.style.backgroundColor='pink'
    box.style.height='16px'
    box.style.width='16px'
    box.classList.add('box')
    container.appendChild(box)
  }
  main.appendChild(container)

}

