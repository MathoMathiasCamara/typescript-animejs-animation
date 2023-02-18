// Import stylesheets
import './style.css';
import anime from 'animejs';
// Write TypeScript code!

let top = '20px';
const box1 = document.createElement('span');
const box2 = document.createElement('span');
const ball = document.createElement('span');
const forklift = document.createElement('span');
forklift.innerHTML = `<span class="material-symbols-outlined">
forklift
</span>`;
ball.appendChild(forklift);
box1.classList.add('box', 'left');
box2.classList.add('box', 'right');
ball.classList.add('box', 'movingBox', 'topElement');
document.body.append(box1, box2, ball);

ball.style.top = `${
  getCenterY(box1) - ball.getBoundingClientRect().height / 2
}px`;
ball.style.left = `${
  getCenterX(box1) - ball.getBoundingClientRect().width / 2
}px`;

// function
function getCenterX(target: HTMLElement) {
  let boundary = target.getBoundingClientRect();
  return boundary.x + boundary.width / 2;
}

function getCenterY(target: HTMLElement) {
  let boundary = target.getBoundingClientRect();
  return boundary.y + boundary.height / 2;
}

goRight();

function goLeft() {
  anime({
    targets: ball,
    translateX: getCenterX(box1) - ball.getBoundingClientRect().width,
    easing: 'easeInOutSine',
    complete: function (anim) {
      forklift.style.transform = 'scaleX(1)';
      goRight();
    },
  });
}

function goRight() {
  anime({
    targets: ball,
    translateX: getCenterX(box2) - ball.getBoundingClientRect().width,
    easing: 'easeInOutSine',
    complete: function (anim) {
      forklift.style.transform = 'scaleX(-1)';
      goLeft();
    },
  });
}
