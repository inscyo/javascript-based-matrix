let matrix = [];
let colors = ['#003b00', '#008f11', '#00ff41'];

function setup(){
	createCanvas(windowWidth, windowHeight);
	
		setInterval(function(){
			for(let i = 0; i < 1; i++){
				let start = random(10, 15);
				let x = random(0, width);
				let y = -start*25;
				let s = '10px';
				let ys = random(5, 6);
				for(let j = 0; j < start; j++){
					let color = colors[floor(Math.random() * colors.length)];
					matrix.push(new Matrix(start, x+i*20, y+j*25, s, ys, color, String.fromCharCode(0x30A0+Math.round(random(1, 96)))));

				}
			}
		}, 50);
		
		setInterval(function(){ 
		for(let i = 0; i < matrix.length; i++){
			matrix[i].letter = String.fromCharCode(0x30A0+Math.round(random(1, 96)));
		}
		}, 500);
		setInterval(function(){ 
		for(let i = 0; i < matrix.length; i++){
			matrix[i].color = colors[floor(Math.random() * colors.length)];
		}
		}, 100);
	
}
function draw(){
	loop(draw, '#000');
	for(let i = 0; i < matrix.length; i++){
		matrix[i].draw();
		matrix[i].move();
		if(matrix[i].remove){
			matrix.splice(i, 1);
		}
	}
}
