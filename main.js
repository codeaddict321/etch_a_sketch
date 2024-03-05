const board = document.querySelector('.board')
const range = document.querySelector('#range')
const modes = document.querySelector('.modes')
const  rangeText = document.querySelector('.range-text')
range.addEventListener('input',(e)=>{
   
    rangeText.innerText = `${range.value} X ${range.value}`
    board.style.gridTemplateColumns = `repeat(${range.value},1fr)`

  
    board.innerText =""
   for(let i =1;i<`${range.value*range.value+1}`;i++){
    const element = document.createElement('div')
    element.classList.add("board_element");
  board.appendChild(element)
   }

})


board.addEventListener('mousemove',(e)=>{
  const element = e.target
    element.style.backgroundColor = "black"
  
})

modes.addEventListener('click',e=>{
Array.from(modes.children).forEach(element => {
    element.classList.remove("active_mode")
});

    if(e.target.classList.contains('mode')){

        e.target.classList.add('active_mode')
        if(e.target.classList.contains("black_mode")){
            board.addEventListener('mousemove',(e)=>{
                const element = e.target
                  element.style.backgroundColor = "black"
                
              })
        }
      else  if(e.target.classList.contains("eraser_mode")){
            board.addEventListener('mousemove',(e)=>{
                const element = e.target
                  element.style.backgroundColor = "white"
                
              })
        } else  if(e.target.classList.contains("rainbow_mode")){
            board.addEventListener('mousemove',(e)=>{
                const element = e.target
                  element.style.backgroundColor = randomColor()
                
              })
        } else if(e.target.classList.contains("clear_mode")){
            board.style.gridTemplateColumns = "repeat(4,1fr)"
            rangeText.innerText = "4 X 4"
            range.value = 4
            board.innerText =""
   for(let i =1;i<17;i++){
    const element = document.createElement('div')
    element.classList.add("board_element");
  board.appendChild(element)
   }

   Array.from(modes.children).forEach(element => {
    element.classList.remove("active_mode")
});
        } 
    }
})


function randomColor() {
    const colors = ['red,"blue',"green","orange",'yellow', 'purple', 'pink', 'cyan', 'magenta', 'brown', 'teal', 'lime', 'gray', 'black']
    const randomNum = Math.floor(Math.random()*14)
    return colors[randomNum]
    
}