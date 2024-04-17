# Description: Given an m x n matrix, return all elements of the matrix in spiral order.
# O(m*n), m is rows, n is columns

class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        res = []
        top, left = 0, 0
        bottom, right = len(matrix), len(matrix[0])

        # so we want to go through left to right increase top,
        # top to bottom decrease right, go right to left decrease bottom, 
        # bottom - 1 to top-1, increase left,
        # loop will take care of inner elements
        # this is while left < right and top < bottom, after first 2 iterations, check if either are not true and break to return

        while left < right and top < bottom:
            for i in range(left, right):
                res.append(matrix[top][i])
            top+=1

            for i in range(top,bottom):
                res.append(matrix[i][right-1])
            right -=1

            if not (left < right and top < bottom):
                break
            
            for i in range(right-1,left-1, -1):
                res.append(matrix[bottom-1][i])
            bottom -=1

            for i in range(bottom - 1, top - 1, -1):
                res.append(matrix[i][left])
            left +=1

        return res