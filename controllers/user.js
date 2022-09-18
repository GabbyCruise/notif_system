class Answer {
	constructor(value){
		this._val  = value;
	}

	async get(){
		return this._val;
	}

}

var lifeAnswer = new Answer(42);
lifeAnswer.get();//42

var dessertAnswer = new Answer(3.14153);
dessertAnswer.get();//3.14159