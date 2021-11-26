let Teapot = function(name, color = "green"){
    this.name = name;
    this.color = color;

    this.get = function() {
        alert(` teapot: ${this.name}, color: ${this.color}`);
        this.volume = +prompt("Enter teapot`s volume");
        this.amount = +prompt('Add water');
    
        if ((this.volume > 2000 || this.volume < 400) || (this.amount < 50 || this.amount >= this.volume)) {
            alert('wrong volume');
            this.get();
        } else if (confirm('Do you want to boil water?')) {
            this.turning = true;
            alert('Stove is working');
            this.boiling();
        } 
    };

    this.turnOff = function () {
        this.turning = false;
        alert('Stove is turning off');
    }
};

Teapot.prototype = kettle;


let teapot = new Teapot('bork');

teapot.get();