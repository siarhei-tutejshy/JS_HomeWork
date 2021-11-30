
class User {

    constructor(object) {
        this.data = {
            id : object.id || 0,
            name : object.name || "",
            address : object.address || "",
            email : object.email || "",
            phone : object.phone || ""
        } 
    }

    edit(obj){
        this.data.name = obj.name || this.data.name ;
        this.data.address = obj.address || this.data.address;
        this.data.email = obj.email || this.data.email;
        this.data.phone = obj.phone || this.data.phone;
        return this.data;
    }

    get() {
        console.log(this.data);
        return this.data;
    }
}




class Contacts {
    
    data = new Array();
    constructor(){
        
    }
    
    add(obj) {
          let user = new User(obj);
          console.log(user.data.id, user, this.data)
          this.data.push(user)
    }

    edit(id, obj) {
        let editUser;
        this.data.forEach(item => {
            if(item.data.id == id)
            editUser = item;
        })

        editUser.edit(obj);
        
    }

    remove(id) {
        this.data.forEach(item => {
            if(item.data.id == id){
                const index = this.data.indexOf(item);
                this.data.splice(index,1)
            } 
        });
    }

    get() {
        return this.data;
    }
}



class ContactsApp extends Contacts{
   
     appEl = document.createElement('div');
   
    constructor() {
     super()
        this.id = 1;

        this.appEl.classList.add('container')
        document.querySelector('body').append(this.appEl);

        this.appEl.innerHTML = `
        <div class="show">
            <div class="contacts"></div>
        </div>

        <div class="form hidden">
            <form action="#" >
            
                <input type="text" class="name" name="name">
                <input type="text" class="address" name="address">
                <input type="email" class="email" name="email">
                <input type="tel" class="phone" name = "phone">
                <button class="submit added">submit</button>
            </form>
        </div>

        <div class="head__contacts">
            <h2>Contacts</h2>
            <div class="add"></div>
        </div>
    `
    }

    onAdd(){
        let d = {};

        d.id = this.id;
        d.name = document.querySelector('.name').value;
        d.address = document.querySelector('.address').value;
        d.email = document.querySelector('.email').value;
        d.phone = document.querySelector('.phone').value;

        document.querySelector('.address').value = "";
        document.querySelector('.email').value = "";
        document.querySelector('.name').value = "";
        document.querySelector('.phone').value = "";

        super.add(d);
        this.id++;
    }

    onEdit(){
        let contact = event.target.closest("div .contact__item");
        let ad = {};
        ad.name = document.querySelector('.name').value;
        ad.address = document.querySelector('.address').value;
        ad.email = document.querySelector('.email').value;
        ad.phone = document.querySelector('.phone').value;
        let id = contact.dataset.id;
        super.edit(id,ad);
        this.get();
    }

    onRemove(){
        let contact = event.target.closest("div .contact__item");
        let id = contact.dataset.id;
        super.remove(id);
        this.get();
    }

    get(){
        let c = document.querySelector('.contacts');
        let b = super.get();

        while(c.firstChild) {
            c.removeChild(c.firstChild);
        }

        b.forEach(item => {
            let p = document.createElement('div');
            p.setAttribute('data-id',item.data.id);
            p.classList.add('contact__item');
            let id  = document.createElement('div');
            id.classList.add('contact__item__id');
            let content = document.createElement('div');
            content.classList.add('contact__item__content');
            let buttons = document.createElement('div');
            buttons.classList.add('contact__item__buttons');
            let edit = document.createElement('div');
            let del = document.createElement('div');
            edit.classList.add('edit');
            del.classList.add('delete');
            buttons.append(edit,del);
            p.append(id,content,buttons);
            id.innerHTML = `${item.data.id}`;
            content.innerHTML = ` <h2> Name: ${item.data.name} </br>Phone: ${item.data.phone} </h2> email: ${item.data.email} address: ${item.data.address} </br>`;
            
            c.append(p);

            edit.addEventListener('click', (event) => {
                content.innerHTML += `
                <div class="form edit">
            
                    <form action="#" >
                    
                        <input type="text" class="name" name="name">
                        <input type="text" class="address" name="address">
                        <input type="email" class="email" name="email">
                        <input type="tel" class="phone" name = "phone">
                        <button class="submit edited">edit contact</button>
                    </form>
                </div>`

                
                let conta = document.querySelector('.edited');

                conta.addEventListener('click', (event) => {
                           this.onEdit();
                           this.get();
                        }); 
            });

            del.addEventListener('click', (event) => {
            this.onRemove();    
            });

        })
    }
    
    init() {
        
        let but = document.querySelector('.added');
        let add = document.querySelector('.add');
        
        add.addEventListener('click', ()=>{
            document.querySelector(".form").classList.remove('hidden')
        })
        
        
        but.addEventListener('click', () => {

            if(but.classList.contains('added')){
                this.onAdd();
                this.get()
                document.querySelector(".form").classList.add('hidden')
            }
            
        })
        
    }
}


let app = new ContactsApp();
app.init();


// let a = {
//     id : 1,
//     name : "asdaasadasddd",
//     address :  "zzzzzasdadd",
//     email :  "zzzzzzzasdadd",
//     phone :  "zzzzzzzzasdadd",

// }
