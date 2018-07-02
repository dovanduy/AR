/**
 *
 */
function levelManager () {
	this.expInformation = new Array();
	
	// Exp level: 0 > 10
	
	for(var i = 0 ; i< 10 ; i++){
		var expUnlock = 10;
		this.expInformation.push(expUnlock*(i+1));
	}
	// Exp level: 10 > 20
	for(var i = 0 ; i< 10 ; i++){
		var expUnlock = 20;
		this.expInformation.push( 100 + expUnlock*(i+1));
	}
	// Exp level: 20 > 30
	for(var i = 0 ; i< 10 ; i++){
		var expUnlock = 50;
		this.expInformation.push(300 +expUnlock*(i+1));
	}
	
	// Exp level: 30 > 40
	for(var i = 0 ; i< 10 ; i++){
		var expUnlock = 100;
		this.expInformation.push(800 +expUnlock*(i+1));
	}
	
	// Exp level: 40 > 50
	for(var i = 0 ; i< 10 ; i++){
		var expUnlock = 150;
		this.expInformation.push(1800 +expUnlock*(i+1));
	}
	
	// Exp level: 50 > 60
	for(var i = 0 ; i< 10 ; i++){
		var expUnlock = 200;
		this.expInformation.push(3300 +expUnlock*(i+1));
	}
	
	// Exp level: 60 > 70
	for(var i = 0 ; i< 10 ; i++){
		var expUnlock = 250;
		this.expInformation.push(5300 +expUnlock*(i+1));
	}
	
	// Exp level: 70 > 80
	for(var i = 0 ; i< 10 ; i++){
		var expUnlock = 300;
		this.expInformation.push(7800 +expUnlock*(i+1));
	}
	
	// Exp level: 80 > 90
	for(var i = 0 ; i< 10 ; i++){
		var expUnlock = 400;
		this.expInformation.push(10800 +expUnlock*(i+1));
	}
}

levelManager.prototype.processLevel = function(currentExp,currentLevel){
	//Return current level of character

	if(currentExp >= this.expInformation[currentLevel] ){
		//Level Up
		return currentLevel  + 1;
	}
	
	return currentLevel;
}

levelManager.prototype.expNextLevel = function(currentLevel){
	if(currentLevel <0) return 0;
	return this.expInformation[currentLevel];
}

levelManager.prototype.addExp = function(exp){
	localData.currentEXP += exp;
	console.log("localData.currentEXP " +localData.currentEXP);
}

