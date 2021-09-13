/* Exercice: Human Readable Time */

/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

* HH = hours, padded to 2 digits, range: 00 - 99
* MM = minutes, padded to 2 digits, range: 00 - 59
* SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

Source: https://www.codewars.com/kata/52685f7382004e774f0001f7
*/

function humanReadable(seconds) {
  
  const hoursInSec = seconds - (seconds % 3600);
  const minInSec = (seconds % 3600) - (seconds % 60);
  const secInSec = seconds % 60;
  
  const hours = hoursInSec / 3600;
  const min = minInSec / 60;
  const sec = secInSec;
  
  const padFormat = nbr => nbr < 10 ? ('0' + nbr) : nbr;
  
  const formatedHours = padFormat(hours);
  const formatedMin = padFormat(min);
  const formatedSec = padFormat(sec);
  
  return formatedHours + ':' + formatedMin + ':' + formatedSec;
}