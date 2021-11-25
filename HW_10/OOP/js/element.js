let Element = function() {

    this.create = function(name) {
        let elem = document.createElement(name);
        console.log(elem)
        return elem;
    };

    this.attr = function(element, name, value) {
        let elem = element;
        if (!value) {
            return elem.getAttribute(name);

        } else {
            elem.setAttribute(name, value);
        }
        console.log(elem)
    };

    this.html = function(element, value) {
        let elem = element;
        if (!value) {
            return elem.innerHTML;
        } else {
             elem.innerHTML += value;
        }
    };

    this.search = function(element, selector) {
        let elem = element;
        let result = elem.querySelectorAll(selector);
           
        if (result.length == 0) {
            result = document.querySelectorAll(selector);
        } 
        return result;
    };

    this.addClass = function(element, className) {
        let elem = element;
        elem.classList.add(className);
    };

    this.removeClass = function(element, className) {
        let elem = element;;
        elem.classList.remove(className);
    };

    this.toggleClass = function(element, className) {
        let elem = element;;
        elem.classList.toggle(className);
    };

    this.hasClass = function(element, className) {
        let elem = element;
        return elem.classList.contains(className);
    };

    this.append = function(element, newElement, beforeElement) {
        let elem = element;

        if(!beforeElement) {
            elem.append(newElement);
        } else {
            beforeElement.before(newElement)
        }
        
    };

    this.on = function(element, eventName, functionName) {
        let elem = element;
        elem.addEventListener(eventName, functionName);
    };
}

let element = new Element();

function showContext(event) {
    console.log(this, event.target)
}


let elem = document.querySelector('.block');

let c = element.create('div');

element.addClass(c, 'block3');
element.html(c, '<h2>Element construstor</h2>');
element.append(elem, c);
element.on(c, 'click', showContext);

