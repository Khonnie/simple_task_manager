const input = document.getElementById('userinput');
const btn = document.getElementById('addtask-btn');
const ul = document.getElementById('tasklist');

function addtask() {
  const inputvalue = input.value.trim();

  if (inputvalue.length !== 0) {
    const li = document.createElement('li');

    const span1 = document.createElement('span');
    span1.classList.add('click');
    span1.textContent = '✓';  // tick mark

    const span2 = document.createElement('span');
    span2.classList.add('realtask');
    span2.textContent = inputvalue;
span1.addEventListener('click', ()=>{
  span2.classList.toggle('completed')
})

    const rvbtn = document.createElement('button');
    rvbtn.classList.add('delbtn');
    rvbtn.textContent = 'Remove';
    rvbtn.addEventListener('click', ()=>{
  if(confirm('Do you want to delete this task?'))
  li.remove();
})

    li.appendChild(span1);
    li.appendChild(span2);
    li.appendChild(rvbtn);

    ul.appendChild(li);

    input.value = '';
  } else {
    alert('Please Enter Task!');
  }
  
}

btn.addEventListener('click', addtask);
