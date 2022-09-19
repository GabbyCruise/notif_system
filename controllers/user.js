class HandleUser {
	constructor(value){
		this._val  = value;
	}

	async get(){
		return this._val;
	}

}

var lifeAnswer = new HandleUser(42);
lifeAnswer.get();//42

var dessertAnswer = new HandleUser(3.14153);
dessertAnswer.get();//3.14159