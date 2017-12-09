// Write your code in this file!
function scuberGreetingForFeet(ride){
  if (ride < 400){
    return "This one is on me!"
  }
  else if (ride > 2000) {
    if (ride < 2500){return 'I will gladly take your thirty bucks.'}
    else {return "No can do."}
  }

}


function ternaryCheckCity(city){
  let hey = ''
  city == 'NYC' ? hey = 'Ok, sounds good.' : hey = 'No go.'
  return hey
}


function switchOnCharmFromTip(mood){
  switch (mood){
  case 'generous':
    phrase = 'Thank you so much.';
    break;
  case 'not as generous':
    phrase = 'Thank you.';
    break;
  default:
    phrase = "Bye.";
    break;
  }
  return phrase
}
