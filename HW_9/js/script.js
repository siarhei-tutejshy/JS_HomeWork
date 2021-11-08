let openDoList = document.querySelector('.button');

 function openList() {
    openDoList.hidden=true;

    let container = document.querySelector('.container');
    let mainList = document.createElement('div');
    mainList.classList.add('main-list');
    container.append(mainList);

    let title = document.createElement('h3');
    title.classList.add('list-title');
    title.innerHTML = 'ToDo List';
    mainList.append(title);

    let list = document.createElement('div');
    list.classList.add('list');
    mainList.append(list);

    let input = document.createElement('input');
    input.classList.add('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'write your task...');
    list.append(input);

    let clear = document.createElement('button');
    clear.classList.add('clear');
    clear.innerHTML = "clear";

    let close = document.createElement('span');
    close.classList.add('close');
    list.append(close);
    
    input.addEventListener('keydown', function(task) {

        let taskItem = document.createElement('div');
        taskItem.classList.add('task');

        let check = document.createElement('div');
        check.classList.add('check');

        let taskText = document.createElement('p')
        taskText.classList.add('task-text');

        let del = document.createElement('span');
        del.classList.add('delete');
       
        
        if (task.keyCode == 13 && task.target.value != '') {
            taskText.innerHTML = task.target.value;
            task.target.value = '';
            list.append(taskItem);
            taskItem.append(check);
            taskItem.append(taskText);
            taskItem.append(del)
            list.append(clear);
        }

        check.addEventListener('click', function() {
            taskText.classList.toggle('text');
            check.classList.toggle('done');
        });

        taskText.addEventListener('dblclick', function() {
            let change = document.createElement('input');
            change.classList.add('change-text');
            change.style.display ='block';
            taskItem.replaceChild(change, taskText);

            change.addEventListener('keydown', function(task) {
                if ( task.keyCode == 13) {
                taskItem.replaceChild(taskText, change);
                taskText.innerHTML = task.target.value;
                task.target.value = '';
                }
            });
        });

        del.addEventListener('click', function() {
            taskItem.remove();
        });
        
        clear.addEventListener('click', function() {
            taskItem.remove();
            clear.remove();
        });
        
    });

    close.addEventListener('click', function() {
        mainList.remove();
        openDoList.hidden = false;
    })
    
};

openDoList.addEventListener('click', openList);




