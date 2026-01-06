const input = document.getElementById('userinput');
const btn = document.getElementById('addtask-btn');
const ul = document.getElementById('tasklist');

const editModal = document.getElementById("editModal");
const editInput = document.getElementById("editInput");
const saveEdit = document.getElementById("saveEdit");
const cancelEdit = document.getElementById("cancelEdit");

let currentEditIndex = null;

let usertasks = JSON.parse(localStorage.getItem("task")) || [];

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
    span1.textContent = '✓';
    span1.classList.add('click')
    span1.addEventListener('click', () => {
      span2.classList.toggle('completed');
    });

    const span2 = document.createElement('span');
    span2.classList.add('realtask')
    span2.textContent = task;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('editbtn')
    editBtn.addEventListener('click', () => {
      currentEditIndex = index;
      editInput.value = usertasks[index];
      editModal.classList.remove('hidden');
    });

    const rvbtn = document.createElement('button');
    rvbtn.textContent = 'Remove';
    rvbtn.classList.add('delbtn')
    rvbtn.addEventListener('click', () => {
      if (confirm('Do you want to delete this task?')) {
        usertasks.splice(index, 1);
        localStorage.setItem('task', JSON.stringify(usertasks));
        displaytasks();
      }
    });

    li.appendChild(span1);
    li.appendChild(span2);
    li.appendChild(editBtn);
    li.appendChild(rvbtn);

    ul.appendChild(li);
  });
}

btn.addEventListener('click', addtask);

saveEdit.addEventListener('click', () => {
  const updatedTask = editInput.value.trim();
  if (updatedTask.length === 0) return;

  usertasks[currentEditIndex] = updatedTask;
  localStorage.setItem("task", JSON.stringify(usertasks));
  displaytasks();
  editModal.classList.add('hidden');
});

cancelEdit.addEventListener('click', () => {
  editModal.classList.add('hidden');
});