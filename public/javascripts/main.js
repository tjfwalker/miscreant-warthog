var secondary = document.querySelector('.secondary')

document.onkeydown = function (event) {
  var e = event || window.event

  if (e.shiftKey === true && e.keyCode === 191) {
    secondary.style.display = "initial"
  }
}

function create ( event ) {
  fetch('/', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      text: "I was created programmatically"
    })
  }).then(function(response){
    response.json()
    .then(function(todo) {
      console.log(todo)
    })
  }).catch( function (error) {
    console.log('EPIC FAIL' + error)
  })
}
