
	var doCoolStuff= function (){
	//getElementByIdは、任意のHTMLタグで指定したIDにマッチするドキュメント要素を取得するメソッドです。
	//Element は Document の中にあるすべての要素オブジェクト 
	//.classNameはクラス属性を取得するプロパティ
	//currentClassNameは今現在のクラスの状態をさす。つまりページを開いた状態ではcoolクラスを指す。
	var currentClassName = document.getElementById('cool').className;

	if (currentClassName == 'cool') {
	//class名がcool red になる
		document.getElementById('cool').className ='cool red';
	} else {
		document.getElementById('cool').className ='cool';
				
}}


var  sayMyName = function (name) {
	alert('My name is'+name);
}

var car = {
			//srting
			make: 'VW',
			type: 'Polo',
			color: 'blue',
			//this propatie is like a keyhole and a turnon system of car connected with a cars engine.
			isTurnedOn: false,
			numberOfWeeles: 4,
			seats: [
			'seat 1', 
			'seat 2', 
			'seat 3', 
			'seat 4'
			],
			//this tuenOn property is a method
			//this property is a method turn on a propaty isTurnOn
			//this property is for turning car on.
			turnOn: function() {
				this.isTurnedOn = true;
			},
			//this is a method too
			fly: function () {
				alert('fly');
			},
			//this is a method too
			//this method turn on or off the car.
			//When I give the true or false to the parameter in a console, this method do its function depend on what I give to its parameter
			//really powerful methos!!!
			switchCar: function (isOn) {
				console.log('turn car '+isOn);
				//Be careful about the defference of == and =
				// = is 代入 == is 比較
				if(isOn == true) {
					this.isTurnedOn = true;
				} else {
					this.isTurnedOn = false;
				}
			}
		};

		console.log('hello there friends!');