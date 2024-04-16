
  function addTask() {
    var taskInput = document.getElementById('input-area');
    var taskList = document.getElementById('task');
    var newTask = taskInput.value.trim();
    if(newTask) {
      var listItem = document.createElement('li');
      listItem.innerText = newTask;
      taskList.appendChild(listItem);
      taskInput.value = '';
      var cross = document.createElement('span');
      cross.innerHTML = ('&times;');
      listItem.appendChild(cross);
      cross.onclick = function() { this.parentElement.remove(); };
      listItem.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
          e.target.classList.toggle('checked');
        }
      });
    } else {
      alert('Please enter a task.');
    }
  } 
  