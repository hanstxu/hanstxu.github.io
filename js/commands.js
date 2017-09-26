// js/commands.js

// user is defined in js/main.js

function help(stdout) {
  stdout.innerHTML += '&nbspThe list of commands include:<br>';
  stdout.innerHTML += '&nbsp cat<br>';
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
    stdout.innerHTML += '&nbspThe author of this site is Steven Xu, who is in ';
    stdout.innerHTML += 'his last year of <br>&nbspstudying computer science at UCLA.<br>';
  }
  else if (argv[1] == 'resume.pdf')
    stdout.innerHTML += '&nbspCannot cat file. Maybe try wget resume.pdf<br>';
  else if (argv[1] == 'weblog') {
    stdout.innerHTML += '&nbspMost websites use a graphical user interface.<br>';
    stdout.innerHTML += '&nbspUnfortunately, I think a lot of people are missing out.<br>';
    stdout.innerHTML += '&nbspIn my years learning about Computer Science at UCLA,<br>';
    stdout.innerHTML += '&nbspI\'ve grown to really like the command line interface.<br>';
    stdout.innerHTML += '&nbspThat is the idea behind the design of this website.<br>';
    stdout.innerHTML += '&nbspThis is also an opportunity for me .<br>';
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