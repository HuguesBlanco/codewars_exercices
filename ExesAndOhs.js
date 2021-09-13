/* Exercice: Exes and Ohs */

/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

    XO("ooxx") => true
    XO("xooxx") => false
    XO("ooxXm") => true
    XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    XO("zzoo") => false

Source: https://www.codewars.com/kata/55908aad6620c066bc00002a
*/

function XO(str) {
    
  function countLetter(letter, str) {

    const regex = new RegExp(`${letter}`, 'gi');
    const letterCollection = str.match(regex);
    const letterCollectionSecured = letterCollection === null ? [] : letterCollection;
    const nbrOfLetter = letterCollectionSecured.length;
    
    return nbrOfLetter;
  }
    
  const countX = countLetter('x', str);
  const countO = countLetter('o', str);
  
  const isXequalToO = countX === countO ? true : false;
  
  return isXequalToO;
}