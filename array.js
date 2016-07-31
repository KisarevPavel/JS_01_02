var names = [];
var i;

for ( i = 0 ; i < 5; i++ ){
	names[i] = prompt("Введите имя");
	}

var user = prompt("Введите имя пользователя");

var flag = false;

for ( i = 0 ; i < names.length; i++ ){
	if ( names[i] == user ){
		alert( user + ", вы успешно вошли");
		flag = true;
		}
	}

if ( !flag ) { alert ("ERROR");}