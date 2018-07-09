/** Remove duplicate words (7 kyu)
 * http://www.codewars.com/kata/remove-duplicate-words
 * Your task is to remove all duplicate words from string, leaving only
 * single words entries.
 * Input: 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma
 * gamma gamma delta'
 * Output: 'alpha beta gamma delta'
 */
const removeDuplicateWords = (s) => [...new Set(s.split` `)].join` `;
