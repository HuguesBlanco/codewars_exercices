/* Exercice: Sum of odd numbers */

/*
Given the triangle of consecutive odd numbers:

                1
              3     5
          7     9    11
      13    15    17    19
    21    23    25    27    29
    ...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

    1 -->  1
    2 --> 3 + 5 = 8

Source: https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
*/

function rowSumOddNumbers(n) {

  function calcNbrOfPrevOdds(rowNbr) {
    
    var nbrOfPrevOdds = 0;
    for (let i = 0; i < rowNbr; i++) {
      nbrOfPrevOdds += i;
    }
    
    return nbrOfPrevOdds;
  }
  
  function genOddsOfRow(firstOddOfRow, n) {
    
    const OddsOfRow = [firstOddOfRow];
    
    for (let i = 1, oddNbr; i < n; i++) {
      oddNbr = OddsOfRow[OddsOfRow.length - 1] + 2;
      OddsOfRow.push(oddNbr);
    }
    
    return OddsOfRow;
  }
  
  const nbrOfPrevOdds = calcNbrOfPrevOdds(n);
  const firstOddOfRow = 1 + (nbrOfPrevOdds * 2);
  const OddsOfRow = genOddsOfRow(firstOddOfRow, n);
  const sumOfRowNbr = OddsOfRow.reduce((sum, odd) => sum += odd, 0);

  return sumOfRowNbr;
}