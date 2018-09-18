# Description

After they became famous, the CodeBots all decided to move to a new building and live together. The building is represented by a rectangular matrix of rooms. Each cell in the matrix contains an integer that represents the price of the room. Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots to live in.

Help the bots calculate the total price of all the rooms that are suitable for them.

### <span style="color: lightblue">Example</span>

For matrix = [[0, 1, 1, 2], 
             [0, 5, 0, 0], 
            [2, 0, 3, 3]]

the output should be matrixElementsSum(matrix) = 9.

Here's the rooms matrix with unsuitable rooms marked with 'x':

   [[x, 1, 1, 2], 
   [x, 5, x, x], 
 [x, x, x, x]]

Thus, the answer is 1 + 5 + 1 + 2 = 9.


## <span style="color: lightblue">Input/Output</span>

A 2-dimensional array of integers representing a rectangular matrix of the building.

Guaranteed constraints:
 * 1 ≤ matrix.length ≤ 5,
 * ≤ matrix[i].length ≤ 5,
 * ≤ matrix[i][j] ≤ 10.

