let age
let day

// Connect "Submit" button to function
document.getElementById('submit').addEventListener('click', ageandday)

function ageandday () {
  // Get user input and convert into an interger
  age = document.getElementById('age').value
  age = parseInt(age)

  // Get user input day
  day = document.getElementById('day').value

  // Check if user can get student pricing
  if ((day === 'Friday' || day === 'Saturday' || day === 'Sunday' || day === 'Monday') && (age > 12 && age < 21)) {
    document.getElementById('answer').innerHTML = 'You can get the student pricing'
  } else {
    document.getElementById('answer').innerHTML = 'You must pay regular price'
  }
}
