/** Count the smiley faces! (6 kyu)
 * http://www.codewars.com/kata/count-the-smiley-faces
 * Given an array (arr) as an argument complete the function
 * countSmileys that should return the total number of smiling faces.
 * Rules for a smiling face:
 * -Each smiley face must contain a valid pair of eyes. Eyes can be
 * marked as : or ;
 * -A smiley face can have a nose but it does not have to. Valid characters
 * for a nose are - or ~
 * -Every smiling face must have a smiling mouth that should be marked with
 * either ) or D.
 * No additional characters are allowed except for those mentioned.
 *
 * Valid smiley face examples:
 * :) :D ;-D :~)
 * Invalid smiley faces:
 * ;( :> :} :]
 */
//return the total number of smiling faces in the array
const countSmileys = (arr) =>
  // regExp#1 /^((:|;))\s*[-~]{0,1}\s*((\)|D))$/
  // regExp#2 /^[:;][-~]{0,1}[)D]$/
  arr.filter((el) => el.match(/^[:;][-~]?[)D]$/)).length;
