window.addEventListener('load', ()=>{
    const form = document.querySelector('#new-task-form')
    const input = document.querySelector('#new-task-input')
    const list_el =document.querySelector('#tasks')

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        if (!task) {
            alert('fill the task man !');
            return;
        }
        const task_el = document.createElement('div');
        task_el.classList.add('task'); 

        const task_task_content_el =document.createElement("div");
        task_task_content_el.classList.add("content");
        task_task_content_el.innerText = task
        task_el.appendChild(task_task_content_el);

        list_el.appendChild(task_el);
         task_input_el = document.createElement("input")
         task_input_el.classlist.add("text");
    }
    )
})