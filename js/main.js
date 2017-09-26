// js/main.js

var user = 'guest';

document.addEventListener('DOMContentLoaded', function() {
  var stdin = document.getElementById('stdin');
  stdin.value = "";
  stdin.addEventListener('keydown', function(e) {
    if (e.keyCode == 13)
      handleInput(stdin, stdin.value);
  }, false)
});

function handleInput(stdin, value) {
  var stdout = document.getElementById('stdout');
  stdout.innerHTML += ' ' + value + '<br>';
  
  var argv = value.split(" ");
  
  switch(argv[0]) {
    case 'help':
      help(stdout);
      break;
    case 'ls':
      ls(stdout);
      break;
    case 'cat':
      cat(stdout, argv);
      break;
    case 'su':
      su(argv);
      break;
    case 'wget':
      wget(stdout, argv);
      break;
    case 'whoami':
      whoami(stdout);
      break;
    default:
      undefinedCommand(stdout);
  }
  stdout.innerHTML += '&nbsp' + user + '@hanstxu.github.io:~$'
  stdin.value = "";
}