let page = document.querySelector('div')



let form = document.querySelector('form');
let div = document.querySelector('#myDiv');
let meme = document.querySelector('input[type=text]');



let btn = document.querySelector('input[type = button]');


form.addEventListener('click', function(event){
    event.preventDefault();
});

form.addEventListener('keypress', function(event){
    console.log(event);
    if(event.key ==='Enter'){
        event.preventDefault();
        makememe();

    }
  
    div.addEventListener('click', function(e){
        console.log(e);
        if(e.target.innerText === e.target.innerText)
        {
            drag(e);
           e.onmousedown = dragMouseDown
        }
    })
});

    btn.addEventListener('click', function(event){
        event.preventDefault();
        makememe()
    });



function makememe(){
    if(meme.value){
        let p = document.createElement('p');
        let text = meme.value;
        p.innerText = text;
        meme.value = '';
         div.appendChild(p);
    }
 
};


function drag(elmt){
    let pos1=0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
    console.log(elmt);
    // elmt.onmousedown = dragMouseDown;
   
 }


function dragMouseDown(e){
    e = e|| window.event;
    e.preventDefault();
    //get mouse cursor position @ start
    pos3 = e.clientX;  //200
    pos4 = e.clientY;   //435
    document.onmouseup = closeDragElement;
    //calls function when mouse moves:
    document.onmousemove = elementDrag; 
}

function closeDragElement(){
    //stop moving when mouse button is released
    document.onmouseup  = null;
    document.onmousemove = null
}


function elementDrag(e){
    e = e|| window.event;
    e.preventDefault();
    //calculate the new cursor position
    pos1 = pos3 - e.clientX; //200-250
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;  //250
    pos4 = e.clientY;
    //set the element pos
    elmt.style.left = (elmt.offsetLeft - pos1)+'px';
    elmt.style.top = (elmt.offsetTop - pos2)+'px'
}
