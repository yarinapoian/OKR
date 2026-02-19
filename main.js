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

// window.location.href = "https://chanel.com";


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

