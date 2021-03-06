const particles = [];
function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	
	const particlesLength = Math.min(Math.floor(window.innerWidth / 30), 100);
	for(let i=0; i<particlesLength; i++) {
		particles.push(new Particle());
	}
}

function draw() {
	background('#f23e3e');
	
	particles.forEach((particle, idx) => {
		particle.update();
		particle.draw();
		particle.checkParticles(particles.slice(idx));
	});
}

class Particle {
	constructor() {
		this.pos = createVector(random(width), random(height));
		this.vel = createVector(random(-2, 2), random(-2, 2));
		this.size = 5;
	}
	
	update() {
		this.pos.add(this.vel);
		this.edges();
	}
	
	draw() {
		noStroke();
		fill('rgba(255, 255, 255, 1)');
		circle(this.pos.x, this.pos.y, this.size * 2);
	}
	
	edges() {
		if(this.pos.x < 0 || this.pos.x > width) {
			this.vel.x *= -1;
		}
		
		if(this.pos.y < 0 || this.pos.y > height) {
			this.vel.y *= -1;
		}
		
// 		if(this.pos.x > width) {
// 			this.pos.x = 0;
// 		}
		
// 		if(this.pos.y > height) {
// 			this.pos.y = 0;
// 		}
	}
	
	checkParticles(particles) {
		particles.forEach(particle => {
			const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
			if(d < 120) {
				const alpha = map(d, 0, 120, 0, 0.25)
				stroke(`rgba(255, 255, 255, ${alpha})`);
				line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
			}
		});
	}
}

// SOCIAL PANEL JS
// const floating_btn = document.querySelector('.floating-btn');
// const close_btn = document.querySelector('.close-btn');
// const social_panel_container = document.querySelector('.social-panel-container');

// floating_btn.addEventListener('click', () => {
// 	social_panel_container.classList.toggle('visible')
// });

// close_btn.addEventListener('click', () => {
// 	social_panel_container.classList.remove('visible')
// });