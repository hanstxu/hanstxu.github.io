// js/main.js

var user = 'guest';

function handleInput(stdin, value) {
  var stdout = document.getElementById('stdout');
  stdout.innerHTML += ' ' + value + '<br>';
  
  switch(value) {
    case 'help':
      stdout.innerHTML += '&nbspThe list of commands include:<br>';
      stdout.innerHTML += '&nbspls<br>';
      stdout.innerHTML += '&nbspless<br>';
      stdout.innerHTML += '&nbspsu<br>';
      stdout.innerHTML += '&nbspwhoami<br>';
      break;
    case 'ls':
      stdout.innerHTML += '&nbspAboutMe.txt<br>';
      break;
    case 'less':
      stdout.innerHTML += '&nbspThe author of this site is Steven Xu.<br>';
      break;
    case 'su':
      user = 'newUser';
      break;
    case 'whoami':
      stdout.innerHTML += '&nbsp' + user + '<br>';
      break;
    default:
      stdout.innerHTML += '&nbspCommand not found<br>';
  }
  stdout.innerHTML += '&nbsp' + user + '@hanstxu.github.io:~$'
  stdin.value = "";
}

document.addEventListener('DOMContentLoaded', function() {
  var stdin = document.getElementById('stdin');
  stdin.value = "";
  stdin.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
      handleInput(stdin, stdin.value);
    }
  }, false)
});