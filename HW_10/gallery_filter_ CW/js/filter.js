const filter = function() {

    const elems = document.querySelectorAll('.portfolio__filter li');

    const handler = (event) => {
        elems.forEach(elem => elem.classList.remove('active'));

        let filter = event.target.dataset.filter;
        let lists = document.querySelectorAll('.portfolio__list li');

        lists.forEach(list => {
            list.classList.remove('hidden');
           
            if(list.dataset.filter != filter) list.classList.add('hidden');
            if(filter === 'all') list.classList.remove('hidden');
        });
        
        event.target.classList.add('active');
    };

    elems.forEach(elem => elem.addEventListener("click", handler));
};

filter(); 