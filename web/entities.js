var sprites = {}

function loadSprite(name) {
	if (sprites[name] === undefined) {
		sprites[name] = new Image();
		sprites[name].src = "sprites/"+name+".png";
	}
}

function Entity() {
	loadSprite("entity");
	this.x = 20;
	this.y = 20;
	this.width = 32;
	this.height = 32;
}

Entity.prototype = {
	kind: "entity",
	move: function(game, dx, dy) {
		var nx = this.x + dx;
		var ny = this.y + dy;
		return this.move_abs(game, nx, ny);
	},

	move_abs: function(game, x, y) {
		if (x < this.width/2 || x > game.width-this.width/2-1) {
			return false;
		}

		if (y < this.height/2 || y > game.height-this.height/2-1) {
			return false;
		}

		this.x = x;
		this.y = y;
		return true;
	},

	update: function(game) {
	},

	draw: function(game, ctx) {
		ctx.fillStyle = "red";
		ctx.drawImage(sprites[this.kind], this.x-this.width/2, this.y-this.height/2, this.width, this.height)
	}
}
