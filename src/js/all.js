'use strict';

//Раздел описания функций
//Ф-я: создаём DOM элемент
function createElement(tag, props, ...children){
	const elem = d.createElement(tag);
	//Примсваиваем свойства
	//prоps это объект, поэтому необходимо перебирать только собственные свойства 
	Object.keys(props).forEach(key => elem[key] = props[key]); 

	if(children.length > 0){
		children.forEach(child =>{
			if(typeof child == 'string'){
				child = d.createTextNode(child);
			}
			elem.appendChild(child);
		})
	}
	return elem;
};
//Ф-я: создаём запись об игроке
function createSquadItem(fullName, amplua){
	const squadfullName = createElement('a', {className: 'squad__fullname squad__link', href: ''}, fullName);
	const squadAmplua = createElement('a', {className: 'squad__amplua squad__link', href: ''}, amplua);
	const squadButton = createElement('a', {className: 'control__delete squad__link control__btn', href: ''}, 'Удалить');
	const squadItem = createElement('li', {className: 'squad__item'}, squadfullName,squadAmplua, squadButton);

	return squadItem;
};
//Ф-я: добавляем игрока в команду
function addSquadItem(e){
	e.preventDefault();
	if(addInput.value === ''){
		return alert('Необходимо ввести данные');
	}
	
	const amplua = selectAmplua.options[selectAmplua.value].textContent;
	const squadItem = createSquadItem(addInput.value, amplua);
	squadList.appendChild(squadItem);
};

//Раздел описания переменных
	const d =document,
				form = d.getElementById('control'),
				addInput = d.getElementById('fullName'),
				selectAmplua = d.getElementById('amplua'),
				squadList = d.getElementById('list'),
				squadItems = d.querySelectorAll('.squad__item');

	
//Развешиваем события
form.addEventListener('submit', addSquadItem); 