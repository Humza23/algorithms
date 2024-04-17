# Description: Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
# O(n^2), n * n time/space

class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        mat = [[0] * n for _ in range(n) ]

        left, right = 0, n
        top, bottom = 0, n
        val = 1

        while left <= right:
            # fill every val in top row
            for col in range(left, right):
                mat[top][col] = val
                val +=1
            top += 1
            # fill every val in right column vertical
            for row in range(top,bottom):
                mat[row][right-1] = val
                val += 1
            right -=1
            # fill every val in bottom row (reverse)
            for col in range(right-1, left-1, -1):
                mat[bottom-1][col] = val
                val +=1
            bottom -= 1
            # fill ever val in left column (reverse)
            for row in range(bottom-1,top-1, -1):
                mat[row][left] = val
                val +=1
            left += 1
        
        return mat