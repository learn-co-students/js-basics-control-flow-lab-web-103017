// Write your code in this file!

function scuberGreetingForFeet(distance){
  if (distance <= 400){
    return 'This one is on me!'
  }

  else if (distance => 2000) {
    if (distance < 2500){
      return 'I will gladly take your thirty bucks.'
    }
    else {
      return 'No can do.'
    }
  }
}

function ternaryCheckCity(city){
  if (city === 'NYC'){
    return 'Ok, sounds good.'
  }
  else {
    return 'No go.'
  }

}

function switchOnCharmFromTip(tip){
  let responce = ''

  switch (tip){
    case 'generous':
    responce = 'Thank you so much.'
    break;
    case 'not as generous':
    responce = 'Thank you.'
    break;
    case 'thanks for everything':
    responce = 'Bye.'
    break;
  }

  return responce
}
