text=document.getElementById("ip");
bt=document.getElementById('btn');
todo=document.getElementById('todo');
bt.addEventListener('click',function(){
    var p=document.createElement('p');
    p.innerText=text.value;
    todo.appendChild(p);
    text.value="";
    p.addEventListener('click',function(){
        p.style.textDecoration="line-through";
    })
    p.addEventListener('dblclick',function(){
        todo.removeChild(p);
    })
})
