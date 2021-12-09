class User {
    constructor(object) {
        this.data = {
            id: object.id || 0,
            name: object.name || 'unknown',
            address: object.address || '- -',
            email: object.email || '- -',
            phone: object.phone || 'unknown',
        };
    }

    edit(obj) {
        this.data.name = obj.name || this.data.name;
        this.data.address = obj.address || this.data.address;
        this.data.email = obj.email || this.data.email;
        this.data.phone = obj.phone || this.data.phone;
        return this.data;
    }

    get() {
        return this.data;
    }
}

class Contacts {
    data = new Array();

    add(obj) {
        let user = new User(obj);
        this.data.push(user);
    }

    edit(id, obj) {
        let editUser;
        this.data.forEach((item) => {
            if (item.data.id == id) editUser = item;
        });

        editUser.edit(obj);
    }

    remove(id) {
        this.data.forEach((item) => {
            if (item.data.id == id) {
                const index = this.data.indexOf(item);
                this.data.splice(index, 1);
            }
        });
    }

    get() {
        return this.data;
    }
}

class ContactsApp extends Contacts {
    appEl = document.createElement('div');

    constructor() {
        super();

        this.id = 1;

        this.appEl.classList.add('container');
        document.querySelector('body').append(this.appEl);

        this.appEl.innerHTML = `
        <div class="head__contacts">
            <h2>Contacts</h2>
            <div class="add"></div>
        </div>

        <div class="form hidden">
            <form action="#" >
           
                <div class="field">Name<input  type="text" class="name" name="name"></div>
                <div class="field">Phone<input type="tel" class="phone" name = "phone"></div>
                <div class="field">Address<input type="text" class="address" name="address"></div>
                <div class="field">Email<input type="email" class="email" name="email"></div>
                <button class="submit added">add contact</button>
            </form>
        </div>
        <div class="contacts"></div>`;
    }

    onAdd() {
        let contact = {};

        contact.id = this.id;
        contact.name = document.querySelector('.name').value;
        contact.address = document.querySelector('.address').value;
        contact.email = document.querySelector('.email').value;
        contact.phone = document.querySelector('.phone').value;

        document.querySelector('.address').value = '';
        document.querySelector('.email').value = '';
        document.querySelector('.name').value = '';
        document.querySelector('.phone').value = '';

        super.add(contact);
        this.id++;
    }

    onEdit() {
        let contact = event.target.closest('div .contact__item');
        let form = document.querySelector('.edit__form');

        let editedContact = {};
        let id = contact.dataset.id;

        editedContact.name = form.querySelector('.name').value;
        editedContact.address = form.querySelector('.address').value;
        editedContact.email = form.querySelector('.email').value;
        editedContact.phone = form.querySelector('.phone').value;

        super.edit(id, editedContact);
        this.show();
    }

    onRemove() {
        let contact = event.target.closest('div .contact__item');
        let id = contact.dataset.id;

        super.remove(id);
        this.show();
    }

    show() {
        this.storage = this.get();

        let contacts = document.querySelector('.contacts');

        while (contacts.firstChild) {
            contacts.removeChild(contacts.firstChild);
        }

        if (!this.storage) return;
        this.storage.forEach((item) => this.showContacts(item));
    }

    showContacts(item) {
        let contactItem = document.createElement('div');
        contactItem.setAttribute('data-id', item.data.id);
        contactItem.classList.add('contact__item');

        let main = document.createElement('div');
        main.classList.add('contact__item__main');

        let id = document.createElement('div');
        id.classList.add('contact__item__id');

        let content = document.createElement('div');
        content.classList.add('contact__item__content');

        let buttons = document.createElement('div');
        buttons.classList.add('contact__item__buttons');

        let editButton = document.createElement('div');
        editButton.classList.add('edit');

        let deleteButton = document.createElement('div');
        deleteButton.classList.add('delete');

        main.append(content);
        buttons.append(editButton, deleteButton);
        contactItem.append(main, buttons);

        content.innerHTML = ` <h2> Name: <span>${item.data.name}</span> </br>Phone: <span>${item.data.phone}</span> </h2> email: <span>${item.data.email}</span>;   address: <span>${item.data.address}</span> </br>`;

        document.querySelector('.contacts').prepend(contactItem);

        editButton.addEventListener('click', (event) => {
            content.innerHTML = `
            <div class="form edit__form">
                <form action="#" >
                    <input type="text" class="name" name="name" placeholder="NAME: ${item.data.name}">
                    <input type="tel" class="phone" name = "phone" placeholder="PHONE: ${item.data.phone}">
                    <input type="text" class="address" name="address" placeholder="ADDRESS: ${item.data.address}">
                    <input type="email" class="email" name="email" placeholder="EMAIL: ${item.data.email}">
                    <button class="submit edited">edit contact</button>
                </form>
            </div>`;

            editButton.addEventListener('click', () => this.get());

            let editConfirmButt = document.querySelector('.edited');

            editConfirmButt.addEventListener('click', (event) => {
                this.onEdit();
                this.show();
            });
        });

        deleteButton.addEventListener('click', (event) => this.onRemove());
    }

    get storage() {
        return JSON.parse(localStorage.getItem('contactsData'));
    }

    set storage(contactsData) {
        let date = new Date(Date.now() + 10*24*60*60*1000);
        date = date.toUTCString();

        localStorage.setItem('contactsData', JSON.stringify(contactsData));
        localStorage.setItem('expires', JSON.stringify(date));

        document.cookie = 'storageExperise=1; expires=' + date;
    }

    init() {
        let submitAddCont = document.querySelector('.added');
        let addContact = document.querySelector('.add');
        let form = document.querySelector('.form');

        addContact.addEventListener('click', () =>
            form.classList.toggle('hidden')
        );

        submitAddCont.addEventListener('click', (event) => {
            event.preventDefault();
            form.classList.add('hidden');

            this.onAdd();
            this.show();
        });

        let date = Date.now();
        let expiresDate = Date.parse(
            JSON.parse(localStorage.getItem('expires'))
        );
        if (date >= expiresDate) localStorage.clear();

        if (this.storage) {
            this.storage.forEach((item) => this.showContacts(item));
            this.data = this.storage;
        }
    }
}

let application = new ContactsApp();
application.init();
