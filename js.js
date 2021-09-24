let money = document.getElementById('bu2');
money.addEventListener('click', function(){
	let div = document.getElementById('kk');
	div.style.display = 'block';
	let kk2 = document.getElementById('kk2');
	kk2.style.display = 'none';
	let kk3 = document.getElementById('kk3');
	kk3.style.display = 'none';
	let kk4 = document.getElementById('kk4');
	kk4.style.display = 'none';
});

let bu3 = document.getElementById('bu1');
bu3.addEventListener('click', function(){
	let div = document.getElementById('kk');
	div.style.display = 'none';
	let kk2 = document.getElementById('kk2');
	kk2.style.display = 'none';
	let kk3 = document.getElementById('kk3');
	kk3.style.display = 'block';
	let kk4 = document.getElementById('kk4');
	kk4.style.display = 'none';

});


let bu1 = document.getElementById('bu3');
bu1.addEventListener('click', function(){
	let div = document.getElementById('kk');
	div.style.display = 'none';
	let kk2 = document.getElementById('kk2');
	kk2.style.display = 'none';
	let kk3 = document.getElementById('kk3');
	kk3.style.display = 'none';
		let kk4 = document.getElementById('kk4');
	kk4.style.display = 'block';
});
let cc = document.getElementById('open');
let but = document.getElementById('send');
but.addEventListener('click', function(){
	let hd = document.getElementById('pass').value;
	if (hd === '') {
		alert('Write password');
	}
	let y = document.getElementById('mn').value;
	if (y === '') {
		alert('Write money');
	}
	else {
		cc.style.display = 'block';
		let nc = document.getElementById('tha');
		nc.innerHTML = 'Thank you!';
	}	
});

let nn = document.getElementById('admm');
nn.addEventListener('click', function(){
	
});
let pkk = document.getElementById('okk');
pkk.addEventListener('click', function(){
	cc.style.display = 'none';
});


let i = document.getElementById('sh2');
i.addEventListener('click', function(){
	let inp = document.getElementById('sch').value;
	if (inp === 'jsaqw1yed') {
		cc.style.display = 'block';
		let tha = document.getElementById('tha');
		tha.innerHTML = 'Go to your profile';
		let nnum = document.getElementById('num');
		nnum.innerHTML = '001.06';
	} 

	if (inp === 'paxchd4kml') {
		cc.style.display = 'block';
		let tha = document.getElementById('tha');
		tha.innerHTML = 'Go to your profile';
		let nnum = document.getElementById('num');
		nnum.innerHTML = '004.02';
	} 

});





