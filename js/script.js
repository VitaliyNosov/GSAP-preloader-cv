const text = document.querySelector('.text');

const splitText = (el) => {
	el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
  return `<div class="word">` +
			m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
			`</div>`;
	});
	return el;
};

const split = splitText(text);

function random(min, max){
  return (Math.random() * (max - min)) + min;
}

Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
	TweenMax.from(el, 2.5, {
		opacity: 0,
		scale: .1,
		x: random(-500, 500),
		y: random(-500, 500),
		z: random(-500, 500),
		delay: idx * 0.25,
		repeat: 0,
	})
});

// Появление блока

gsap.to('.preloader', {
	duration: 1.5,
	y: 0,
	scale: 1,
	opacity: 1
  })

gsap.to('.linePreloader', {
	duration: 1,
	y: 0,
	scale: 1
  })