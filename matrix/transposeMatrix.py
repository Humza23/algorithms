# Given a 2D integer array matrix, return the transpose of matrix.

# The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        transposed_matrix = zip(*matrix)

        return transposed_matrix

        # row = len(matrix)
        # col = len(matrix[0])
        # result = [[0] * row for _ in range(col)]
        
        # for r in range(row):
        #     for c in range(col):
        #         result[c][r] = matrix[r][c]
                
        # return result