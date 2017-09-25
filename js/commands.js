// js/commands.js

// user is defined in js/main.js

function help(stdout) {
  stdout.innerHTML += '&nbspThe list of commands include:<br>';
  stdout.innerHTML += '&nbspcat<br>';
  stdout.innerHTML += '&nbspls<br>';
  stdout.innerHTML += '&nbspsu<br>';
  stdout.innerHTML += '&nbspwhoami<br>';
}

function ls(stdout) {
  stdout.innerHTML += '&nbspabout_me.txt<br>';
}

function cat(stdout, argv) {
  if (argv.length < 2)
    stdout.innerHTML += '&nbspError: no argument has been passed in<br>';
  else if (argv[1] != 'about_me.txt')
    stdout.innerHTML += '&nbspError: file not found<br>';
  else
    stdout.innerHTML += '&nbspThe author of this site is Steven Xu.<br>';
}

function su(argv) {
  if (argv.length < 2)
    stdout.innerHTML += '&nbspError: no argument has been passed in<br>'
  else
    user = argv[1];
}

function whoami(stdout) {
  stdout.innerHTML += '&nbsp' + user + '<br>';
}

function undefinedCommand(stdout) {
  stdout.innerHTML += '&nbspCommand not found<br>';
}