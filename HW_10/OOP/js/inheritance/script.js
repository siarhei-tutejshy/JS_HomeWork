let Kettle = function(name = 'Bosch', color = 'black') {
    this.name = name;
    this.color = color;
    this.turning = false; 
    this.volume = 1000;
    this.amount = 100;
    this.waterTemp = 20;

    this.get = function() {
        alert(` kettle: ${this.name}, color: ${this.color}`);
        this.volume = +prompt("Enter kettle`s volume");
        this.amount = +prompt('Add water');

        if ((this.volume > 2000 || this.volume < 400) || (this.amount < 50 || this.amount >= this.volume)) {
            alert('wrong volume');
            this.get();
        } else if (confirm('Do you want to turn on the kettle?')) {
            this.turnOn();
        }  
    };

    this.turnOn = function() {
        this.turning = true;
        alert('Kettle is turning on');

        if (confirm('boil water?')) {
            this.boiling();
        } else if (confirm('turn off the kettle?')) {
            this.turnOff();
        }
    };

    this.boiling = function() {
        if (this.turning && this.amount > 100) {
            while (this.waterTemp <= 100) {
                alert('water temperature ' + this.waterTemp + " deg.");
                this.waterTemp +=10;
            }

            alert('Water has boiled');

            for (let ans  = true;;) {
                ans = confirm('Make tea?'); 
                
                if (ans === false) {
                    this.turnOff();
                    break;
                } else this.makeTea();
            } 
        }

        if (this.amount <= 100) {
            alert('kettle is empty. Add water!');
            this.addWater();
        }
    };
    
    this.makeTea = function() {
        this.amount -= 100;
        this.waterTemp -= 10;

        if (this.amount < 200) {
            alert('add water');
            this.addWater();
        } else if (this.waterTemp < 30) {
            alert('boil water!');
            this.boiling();
        } else alert('Have a nice tea');       
    };

    this.addWater = function() {
        this.water = +prompt('add water');
        this.amount += this.water;
        this.boiling();

        if (this.amount >= this.volume) {
            alert("Kettle is full");
            this.amount = this.volume;
        }  
    };

    this.turnOff = function() {
        this.turning = false;
        alert('kettle is turning off');
        console.log(this)
    };
};

let kettle = new Kettle('Bork', 'Black');






