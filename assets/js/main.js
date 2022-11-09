window.addEventListener('load', () => {

	// Selectors for the main Elements
	const form = document.querySelector("#new-todo-form");
	const input = document.querySelector("#new-todo-input");
	const list_el = document.querySelector("#todos");
	const finished_el = document.querySelector("#finished-todos");

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const todo = input.value;

		// Checks if form was filled out and returns an error if not.
		if(!todo){
			alert("Bitte geben Sie eine Aufgabe ein.");
			return;
		}

		// Create the elements of the task card.
		const task_el = document.createElement('div');
		task_el.classList.add('todo');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = todo;
		task_input_el.setAttribute('readonly', 'readonly');

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Bearbeiten';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('done');
		task_delete_el.innerText = 'Erledigt';

		// Append Elements
		task_el.appendChild(task_content_el);
		task_content_el.appendChild(task_input_el);
		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el); 
		task_el.appendChild(task_actions_el); 
		list_el.appendChild(task_el);

		input.value = '';

		// Eventlistener for EDITING and SAVING an existing task.
		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "bearbeiten") {
				task_edit_el.innerText = "Speichern";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Bearbeiten";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		// Eventlistener for the "Alles löschen"-button.
		const task_clear = document.querySelector(".clear");
		task_clear.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		})

		// Create done cards.
		// Still in progress...
		
		// Add finished tasks to board
		// Still in progress...

		// Eventlistener for cards to be moved to the done-board (WIP)
		/*task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
			finished_el.appendChild(task_el);
		});*/
	});
});
