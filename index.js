// Write your code in this file!
function scuberGreetingForFeet (distance) {
  if (distance <= 400 ) {
    return 'This one is on me!'
  } else if (distance => 2000) {
    if (distance < 2500) {
      return 'I will gladly take your thirty bucks.'
    }
    else {
      return "No can do."
    }
  }
}

function ternaryCheckCity (city) {
  let response = ''
  city == 'NYC' ? response = 'Ok, sounds good.' : response = 'No go.'
  return response
}


function switchOnCharmFromTip (tip) {
  let response = ''
  switch (tip) {
  case 'generous':
    response = "Thank you so much."
    break;
  case 'not as generous':
    response = "Thank you."
    break;
  case 'thanks for everything':
    response = "Bye."
    break;
  }
  return response;
}
