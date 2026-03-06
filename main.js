const mainString = document.getElementById("chanelCompany");
const squareList = document.querySelector(".square")
console.log(mainString.textContent)
console.log(squareList.innerHTML)
console.log(squareList.outerHTML)
const clientName = document.getElementById("inputName");
console.log(clientName.value);

const listOfWhoAmI = document.getElementById('whoAmI')
const newElem1 = document.createTextNode('Модель');
const newElem2 = document.createElement('li');
listOfWhoAmI.append(newElem1);
newElem2.textContent = 'Донька';
listOfWhoAmI.prepend(newElem2);
newElem1.after("-знаменитість");
newElem2.replaceWith("Донька знаменитості");

function dialogWithClient() {
	let age = prompt("What is your age?");
	if(age < 12) {
		for (let i = 0; i < 10; i++) {
			console.log("It is forbidden for you to watch this content");
		}
	} else {
		console.log("Congratulations! You have an access!");
	}
}
dialogWithClient();

function clientInfo(surname, name, position= "student") {
	alert(surname + " " + name + " " + position)
}

clientInfo("Poian", "Yarina")

function compare(str1, str2) {
	if (str1.length > str2.length) {
		console.log(str1)
	} else {
		console.log(str2)
	}
}
compare("Lilly Rose Depp", "Johnny Depp")

let body = document.getElementsByTagName('body')[0]

setTimeout(function(){
	body.style.backgroundColor = 'red';
}, 30000)


const mainTitle = document.getElementById("oneAndOnly");

mainTitle.onclick = function() {
	this.style.textShadow = "2px 2px 5px rgba(0,0,0,0.3)";
	console.log("Title was clicked");
};

function changeColor() {
	mainTitle.style.color = "white";
}
function show() {
	console.log("Подія mouseover спрацювала на заголовку");
}

mainTitle.addEventListener("mouseover", changeColor);
mainTitle.addEventListener("mouseover", show);

const hndlr = {
	handleEvent(event) {
		console.log("Подія спрацювала на:", event.currentTarget.tagName);
		alert("Ви взаємодіяли з постером!");
	}
};

const poster = document.querySelector(".idolPoster img");
poster.addEventListener("click", hndlr);

setTimeout(() => {
	poster.removeEventListener("click", hndlr);
}, 15000);


const ulList = document.querySelector('.square');
ulList.addEventListener('click', (event) => {
	event.target.style.color = 'red';
})


const behaviors = {
	highlightInfo() {
		const info = document.querySelector('.mainInfo');
		if (!info) return;
		info.style.backgroundColor = info.style.backgroundColor ? '' : 'rgba(255,235,205,0.8)';
	},
	goToFilmography() {
		const target = document.getElementById('filmography');
		if (!target) return;
		target.scrollIntoView({ behavior: 'smooth', block: 'start' });
	},
	reloadPage() {
		window.location.reload();
	}
};

const menu = document.getElementById('siteMenu');
menu.addEventListener('click', (event) => {
	const button = event.target.closest('button');
	const behaviorName = button.dataset.behavior;
	const behavior = behaviors[behaviorName];
	behavior.call(button, event);
});

const idolPoster = document.querySelector('.idolPoster img');
idolPoster.addEventListener('mouseover', (event) => {
	event.target.style.transform = 'scale(1.1)';
	event.relatedTarget.style.filter = 'blur(10px)'
	console.log(event.relatedTarget)
})
idolPoster.addEventListener('mouseout', (event) => {
	event.target.style.transform = 'none';
	event.relatedTarget.style.filter = 'none';
})

const moveable = document.querySelector('#moveable');
moveable.ondragstart = function() {
	return false;
}
moveable.addEventListener('mousedown', function(event) {
	event.target.style.position = 'absolute';
	event.target.style.zIndex = 1000;
})
const onMouseMove = function(event) {
	moveable.style.left = event.pageX - moveable.offsetWidth / 2 + 'px';
	moveable.style.top = event.pageY - moveable.offsetHeight / 2 + 'px';
}
moveable.addEventListener('mousemove', onMouseMove)
moveable.addEventListener('mouseup', function() {
	moveable.removeEventListener('mousemove', onMouseMove)
})