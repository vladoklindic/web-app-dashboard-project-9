/***** display current date *****/
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();

if(dd<10) {
	dd = '0'+dd;
}

if(mm<10) {
	mm = '0'+mm;
}
today = mm+'/'+dd+'/'+yyyy;

/******* random user generator fetch api *******/
function createNode(element){
	return document.createElement(element);
}

function append(parent, el){
	return parent.appendChild(el);
}

const ul = document.getElementById('members');
const url = 'https://randomuser.me/api/?results=4&inc=picture,name,email';
fetch(url)
.then((resp) => resp.json())
.then(function(data){
	let newMembers = data.results;
	return newMembers.map(function(member){
		let li = createNode('li');
		let img = createNode('img');
		let div = createNode('div');
		let name = createNode('p');
		let email = createNode('p');
		let date = createNode('span'); 
		img.src = member.picture.thumbnail;
		img.alt = 'Members picture';
		img.className = 'members-icon';
		name.className = 'members-name';
		email.className = 'members-email';
		date.className = 'members-date';
		name.innerHTML = `${member.name.first} ${member.name.last}`;
		email.innerHTML = member.email;
		date.innerHTML = today;
		append(li, img);
		append(li, div);
		append(div, name);
		append(div, email);
		append(li, date);
		append(ul, li);
	})
})
.catch(function(error){
	console.log(error);
});

function submitForm(){
	const user = document.forms["message-form"]["search-user"].value;
	const message = document.forms["message-form"]["message-user"].value;
	if(user === '' || message === ''){
		alert("Please fill out all the fields");
		event.preventDefault();
	} else {
		alert(`Message has been sent to ${user}`);
		event.preventDefault();
	}
}