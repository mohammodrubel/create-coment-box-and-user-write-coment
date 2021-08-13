document.getElementById('submit_button').addEventListener('click',function(){
    const comment = document.getElementById('comentBox')
    // const userComent=(comment.value)
    const newComent = document.createElement('p')
    newComent.innerText=comment.value;
    const comentContainer =document.getElementById('cmntContainer')
    comentContainer.appendChild(newComent)
    comment.value='';
})