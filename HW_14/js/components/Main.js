class Main {
    constructor() {
        this.element;
    }
    create() {
        const appElement = document.createElement('main');
        appElement.classList.add('main');

        
        this.element = appElement;
    }
    
    init() {
        this.create();
        return this.element;
    }
}
const main = new Main().init();

export {main}