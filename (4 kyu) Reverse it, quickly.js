/**
 * -Reverse it, quickly! (4 kyu) https://www.codewars.com/kata/reverse-it-quickly
 * Typically, reversing an array is a pretty straightforward task even for
 * novice programmers. But not when a crowd of angry zombies scratching your
 * door, looking for a fresh brains. In this case even skilled ninja-geek
 * probably prefer to quickly push his code on github to have enough time to
 * find a chainsaw. So there's two obstacles:
 * 1. Your code needs to be as short as possible, in fact not longer than 28
 * characters
 * 2. Because you are scared and stressed you have forgotten how to use the
 * standard reverse() method
 * Input: an array containing data of any types. Ex: [1,2,3,'a','b','c',[]]
 * Output: [[],'c','b','a',3,2,1]
 */
weirdReverse=a=>a.sort(_=>1)
