const input = document.getElementById('userinput');
const btn = document.getElementById('addtask-btn');
const ul = document.getElementById('tasklist');

//....Load tasks from localStorage or start with empty array....
let usertasks = JSON.parse(localStorage.getItem("task")) || [];

//....Display tasks when page loads....
window.addEventListener("DOMContentLoaded", displaytasks);

function addtask() {
  const inputvalue = input.value.trim();
  if (inputvalue.length === 0) {
    alert('Please Enter Task!');
    return;
  }
  usertasks.push(inputvalue);
  localStorage.setItem("task", JSON.stringify(usertasks));
  displaytasks();
  input.value = '';
}

function displaytasks() {
  ul.innerHTML = ""; 

  usertasks.forEach((task, index) => {
    const li = document.createElement('li');

    const span1 = document.createElement('span');
    span1.classList.add('click');
    span1.textContent = '✓';
    span1.addEventListener('click', () => {
      span2.classList.toggle('completed');
    });

    const span2 = document.createElement('span');
    span2.classList.add('realtask');
    span2.textContent = task;

    const rvbtn = document.createElement('button');
    rvbtn.classList.add('delbtn');
    rvbtn.textContent = 'Remove';
    rvbtn.addEventListener('click', () => {
      if (confirm('Do you want to delete this task?')) {
        usertasks.splice(index, 1);
        localStorage.setItem('task', JSON.stringify(usertasks));
        displaytasks();
      }
    });

    li.appendChild(span1);
    li.appendChild(span2);
    li.appendChild(rvbtn);
    ul.appendChild(li);
  });
}

btn.addEventListener('click', addtask);