/*
	Basic grid-based Javascript game engine for
	Multiplayer Tower Defense (working title)

	Licensed for use by anyone while all copyright claims is maintained in the code.
*/


//Constructor
function Game(canvas) {
	this.ctx = canvas.getContext("2d");
	this.width = canvas.width;
	this.height = canvas.height;

	this.gameover = false;

	this.player = new Entity();
	this.entities = [this.player];

	return this;
}

Game.prototype = {
	run: function() {
		requestAnimationFrame(this.draw.bind(this));
		this.updateId = setInterval(this.update.bind(this));
	},

	teardown: function() {
		if (this.updateId !== undefined) {
			clearInterval(this.updateId);
		}
	},

	update: function() {

		this.entities.forEach((function(entity, i) {
			entity.update(this);
		}).bind(this));

		if (this.gameover) {
			this.teardown();
		}
	},

	draw: function() {
		this.ctx.clearRect(0, 0, this.width, this.height);

		this.ctx.d

		this.entities.forEach((function(entity, i) {
			entity.draw(this, this.ctx);
		}).bind(this));

		if (!this.gameover) {
			requestAnimationFrame(this.draw.bind(this));
		}
	}
}


$(document).ready(function() {
	var canvas = $("#screen")[0];
	g = new Game(canvas);
	g.run();
});
