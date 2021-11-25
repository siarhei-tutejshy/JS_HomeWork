const gallery = function() {

    const elems = document.querySelectorAll('.gallery__thumbs a');
    
    const show = function(content){
        let views = document.querySelectorAll('.view');
        views.forEach(v => v.remove());

        let gallery = document.querySelector('.gallery__preview');
        let view = document.createElement('div');

        view.classList.add('view');
        view.innerHTML = content;
        gallery.append(view);
        
        let cls = document.querySelector('.gallery__preview');
        cls.classList.remove('hide');
        cls.addEventListener('click', close);
    };

    const close = function () {
        document.querySelector('.view').remove();
        document.querySelector('.gallery__preview').classList.add('hide');
        elems.forEach(el => el.classList.remove('active'));
    };

    const clickHandler = function(event) {
        event.preventDefault();
        elems.forEach(el => el.classList.remove('active'));


        let elem = event.target;
        let link = elem.closest('a');
        link.classList.add('active');

        let href = link.href;
        let content = `<img src="${href}" alt="#" />`;

        show(content);
    };

elems.forEach(elem => elem.addEventListener('click', clickHandler ));
    
};

gallery();