// js/commands.js

// user is defined in js/main.js

function help(stdout) {
  stdout.innerHTML += '&nbspThe list of commands include:<br>';
  stdout.innerHTML += '&nbsp cat<br>';
  stdout.innerHTML += '&nbsp help<br>';
  stdout.innerHTML += '&nbsp ls<br>';
  stdout.innerHTML += '&nbsp su<br>';
  stdout.innerHTML += '&nbsp wget<br>';
  stdout.innerHTML += '&nbsp whoami<br>';
}

function ls(stdout) {
  stdout.innerHTML += '&nbspabout.txt';
  stdout.innerHTML += '&nbsp&nbsp&nbsp&nbspresume.pdf';
  stdout.innerHTML += '&nbsp&nbsp&nbsp&nbspweblog';
  stdout.innerHTML += '&nbsp&nbsp&nbsp&nbsplinks.txt<br>';
}

function cat(stdout, argv) {
  if (argv.length < 2)
    stdout.innerHTML += '&nbspError: no argument has been passed in<br>';
  else if (argv[1] == 'about.txt') {
    stdout.innerHTML += '&nbspMy name is Steven Xu and I\'m in my last year of';
    stdout.innerHTML += '&nbspstudying computer<br>&nbspscience at UCLA.<br>';
  }
  else if (argv[1] == 'resume.pdf')
    stdout.innerHTML += '&nbspCannot cat file. Maybe try wget resume.pdf<br>';
  else if (argv[1] == 'weblog') {
    stdout.innerHTML += '&nbspI like command line interfaces.<br>';
  }
  else if (argv[1] == 'links.txt') {
    stdout.innerHTML += '&nbspgithub: github.com/hanstxu<br>';
    stdout.innerHTML += '&nbsplinkedin: linkedin.com/in/hanstxu<br>';
  }
  else
    stdout.innerHTML += '&nbspError: file not found<br>';
}

function su(argv) {
  if (argv.length < 2)
    stdout.innerHTML += '&nbspError: no argument has been passed in<br>';
  else
    user = argv[1];
}

function wget(stdout, argv) {
  if (argv.length < 2)
    stdout.innerHTML += '&nbspError: no argument has been passed in<br>';
  else if (argv[1] == 'resume.pdf') {
    stdout.innerHTML += '&nbspRequest has been opened in a new window<br>';
    window.open('assets/resume.pdf', '_blank');
  }
  else if (argv[1] == 'projects') {
    stdout.innerHTML += '&nbspRequest has been opened in a new window<br>';
    window.open('https://github.com/hanstxu?tab=repositories', '_blank');
  }
  else {
    stdout.innerHTML += '&nbspRequest has been opened in a new window<br>';
    window.open(argv[1], '_blank');
  }
}

function whoami(stdout) {
  stdout.innerHTML += '&nbsp' + user + '<br>';
}

function undefinedCommand(stdout) {
  stdout.innerHTML += '&nbspCommand not found<br>';
}