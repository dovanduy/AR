var game;
window.onload = function() {
	
	
   game = new Phaser.Game(720, 1180, Phaser.AUTO);
	
		
	// Add the States your game has.
	game.state.add("preLoad", preLoad);
	game.state.add("Level", Level);

	game.state.start("preLoad");
};

