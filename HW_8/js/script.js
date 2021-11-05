
let metaUtf = document.createElement('meta');
metaUtf.setAttribute('charset', 'UTF-8');
document.head.prepend(metaUtf);

let title = document.createElement('title');
title.innerHTML = 'Homwork 8';
document.head.append(title);

let html = document.querySelector('html');
html.setAttribute('lang', 'en');

let container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

let headTitle = document.createElement('h3');
headTitle.classList.add('title');
headTitle.innerHTML = 'Choose Your Option';
container.append(headTitle);

let subtitle = document.createElement('p');
subtitle.classList.add('subtitle');
subtitle.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
container.append(subtitle);

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
container.append(wrapper);

let item = document.createElement('div');
item.classList.add('item');
wrapper.append(item);

let option = document.createElement('p');
option.classList.add('option');
option.innerHTML = 'freelancer';
item.append(option);

let h3Item = document.createElement('h3');
h3Item.classList.add('item-title');
h3Item.innerHTML = 'Initially designed to';
item.append(h3Item);

let description = document.createElement('p');
description.classList.add('description');
description.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
item.append(description);

let button = document.createElement('button');
button.classList.add('button');
button.innerHTML = ' start here';
item.append(button);

let item2 = item.cloneNode(true);
wrapper.append(item2);
item2.querySelector('.option').innerHTML = 'office';

let style = document.createElement('style');
metaUtf.after(style);

style.innerHTML = `* {
    padding: 0;
    margin: 0;
}

.container {
    text-align: center;
    margin-top: 40px;
}

.title {
    font-size: 36px;
    font-weight: 400;
    color: #212121;
    margin-bottom: 10px;    
}

.subtitle {
    font-size: 14px;
    color: #9FA3A7;
}

.wrapper {
    display: flex;
    width: 45%;
    margin: 0 auto;
    justify-content: center;
    border: 2px solid #E5E5E5;
    border-radius: 5px;
    margin-top: 40px;
}

.item:last-child {
    border-left: 2px solid #E5E5E5;
}

.item {
    width: 50%;
    padding: 70px 60px;
}

.item:hover {
    background-color: #8F75BE;
    color: #ffffff;
}

.option {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: #9FA3A7;
    margin-bottom: 20px;
}

.item:hover .option{
    color: #FFC80A;
} 

.item:hover .item-title,
.item:hover .button,
.item:hover .description{
    color: #ffffff;
}

.item-title {
    font-size: 36px;
    color: #212121;
    font-weight: 400;
    margin-bottom: 25px;
}

.description {
    font-size: 12px;
    line-height: 22px;
    color: #9FA3A7;
    margin-bottom: 40px;
}

.button {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2.5px;
    padding: 15px 25px;
    border: 3px solid #FFC80A;
    border-radius: 30px;
    text-transform: uppercase;
    cursor: pointer;
    background-color: transparent;
}`;




