# search for a target in matrix
# O(log(m) + log(n)), where m is the number of rows and n is the number of columns in the matrix. 
# performing binary search twice: first to find the row containing the target element (O(log(m))), 
# and then within that row to find the target element itself (O(log(n))).÷÷

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        rows, cols = len(matrix), len(matrix[0])

        top, bottom = 0, rows - 1

        while top <= bottom:
            row = (top + bottom) // 2

            if target > matrix[row][-1]:
                top = row + 1
            elif target < matrix[row][0]:
                bottom = row - 1
            else:
                break
        
        if not (top <= bottom):
            return False

        row = (top + bottom) // 2
        l, r = 0, cols - 1

        while l <= r:
            m = (l + r) // 2

            if target > matrix[row][m]:
                l = m + 1
            elif target < matrix[row][m]:
                r = m - 1
            else:
                return True
        
        return False