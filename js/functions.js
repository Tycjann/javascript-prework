function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function printResult(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('result').appendChild(div);
}

function clearMessages(id){
	if (id == 'messages') document.getElementById('messages').innerHTML = '';
	else if (id == 'result') document.getElementById('result').innerHTML = '';
}