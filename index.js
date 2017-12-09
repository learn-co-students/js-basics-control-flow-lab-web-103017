// Write your code in this file!
function scuberGreetingForFeet(distance)
{
  if(distance <= 400)
  {
    return 'This one is on me!';
  }

  if (distance > 2000 && distance < 2500)
  {
    return 'I will gladly take your thirty bucks.';

  }else if (distance > 2500)
  {
    return 'No can do.';
  }
}

function ternaryCheckCity(city)
{
  let go = ""
  city == 'NYC' ? go = 'Ok, sounds good.': go = "No go.";
  return go
}
function switchOnCharmFromTip(charm)
{
  switch (charm)
  {
  case 'generous':
    return 'Thank you so much.';
    break;
  case 'not as generous':
    return 'Thank you.'
    break;
  case 'thanks for everything':
    return 'Bye.';
    break;
  }

}
