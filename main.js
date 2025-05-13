const task3Item = document.getElementById('task-3')

function alertVuoto() {
  alert('Ciao!')
}

function alertMessage(message) {
  alert(message)
}

// alertVuoto()
// alertMessage('Ciao a te!')
function terza(st1, st2, st3) {
  return st1 + ' ' + st2 + ' ' + st3
}

task3Item.addEventListener('click', alertVuoto)

alert(terza('a', 'b', 'c'))
