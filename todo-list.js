
      const todoList = [{
        name: 'make dinner',
        dueDate: '2025-08-16' // Updated date for relevance
      }, {
        name: 'wash dishes',
        dueDate: '2025-08-17'
      }];
     
      renderTodoList();
     
      function renderTodoList(){
        let todoListHTML = '';

        // Using forEach for cleaner iteration
        todoList.forEach((todoObject, index) => {
          const { name, dueDate } = todoObject;

          // Generating the HTML for each todo item
          const html =   `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
              todoList.splice(${index}, 1);
              renderTodoList();
            " class="delete-todo-button">Delete</button>
          `;
          todoListHTML += html;
        });
        
        document.querySelector('.js-todo-list').innerHTML = todoListHTML;
      }

      function addTodo() {
        const inputElement = document.querySelector('.js-name-input');
        const name = inputElement.value;
        const dateInputElement = document.querySelector('.js-due-date-input');
        const dueDate = dateInputElement.value;

        // Prevents adding empty todos
        if (name === '' || dueDate === '') {
            alert('Please enter both a name and a due date.');
            return;
        }

        todoList.push({
          name,
          dueDate  
        });
       
        inputElement.value = '';
        dateInputElement.value = ''; // Clear the date input as well
         
        renderTodoList();
      }
    