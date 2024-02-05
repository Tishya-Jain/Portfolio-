// Array of different greetings in different languages
const greetings = ['Hello', 'Let me guess, you are here to', 'Appoint me?', 'Review my work?', 'Give critics?', 'Explore design wonders?', 'Or seek inspiration?'];
let index = 0;

// Function to change text every few seconds
function changeText() {
  document.getElementById('changingText').textContent = greetings[index];
  index = (index + 1) % greetings.length;
}

// Change text every 3 seconds (adjust timing as needed)
setInterval(changeText, 3000);


document.getElementById('next').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
}

