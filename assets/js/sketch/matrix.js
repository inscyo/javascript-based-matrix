class Matrix{
	constructor(start, x, y, s, ys, color, letter){
		this.start = start;
		this.x = x;
		this.y = y;
		this.s = s;
		this.ys = ys;
		this.color = color;
		this.letter = letter;
		this.remove = false;
		this.lastposition = [];
	}
	
	draw(){
		fill(this.color);
		textStyle(`${this.s} arial`);
		text(this.letter, this.x, this.y);
		this.lastposition.push(this.y);
	}
	
	move(){
		this.y += this.ys;
		if(this.y > height){
			this.remove = true;
		}
	}
}