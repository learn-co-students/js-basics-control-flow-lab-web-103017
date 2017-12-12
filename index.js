// Write your code in this file!
function scuberGreetingForFeet(input){
  if (input < 200) {
    return  'This one is on me!'
  } else if ( input > 2000 && input <= 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (input > 2500) {
    return 'No can do.'
  }

}

function ternaryCheckCity(city){
  switch (city){
    case 'NYC':
      return 'Ok, sounds good.'
      break
    default:
        return 'No go.'
      break
  }
}

function switchOnCharmFromTip(input){
  switch (input){
    case 'generous':
      return 'Thank you so much.'
      break
    case 'not as generous':
      return 'Thank you.'
      break
    default:
      return 'Bye.'
      break
  }
}
