// Get elements
let listContainer = document.getElementById('list-container')
let inputBox = document.getElementById('input-box')

// Get the add button element
let addButton = document.querySelector('.row button')

// Function to add task
function addTask(){
  if(inputBox.value.trim() === ''){
    alert('Please enter a task')
  } else {
    const task = document.createElement('li')
    task.textContent = inputBox.value.trim()
    task.className = 'task'
    listContainer.appendChild(task)
    inputBox.value = ''

    // Add delete button
    let deleteButton = document.createElement('span')
    deleteButton.textContent = "\u00d7"
    deleteButton.className = 'delete'
    task.appendChild(deleteButton)

    // Save data
    saveData()
  }
}

// Add event listener to add button
addButton.addEventListener('click', addTask)

// Event listener for list container
listContainer.addEventListener('click', (e)=>{
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle("checked")
    saveData()
  } else if(e.target.tagName === 'SPAN' && e.target.className === 'delete'){
    e.target.parentElement.remove()
    saveData()
  }
})

// Function to save data
function saveData(){
  localStorage.setItem("data", listContainer.innerHTML)
}

// Function to show tasks
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data")
}

// Show tasks on page load
showTask()