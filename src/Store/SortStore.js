const Bubble = [[0,`function BUBBLE_SORT (A, N)`],
                [10 ,`for i from 1 to N-1`],
                [50,`for j from 0 to N-1`],
                [90,`if A [ j ] > A [ j+1 ]`],
                [130,`swap( A [ j ], A [ j+1 ] )`]],
 
       Selection = [
           [0,'function SELECTION_SORT (A, N)'],
           [10,'for i from 1 to N-1'],
           [50,'max = 0'],
           [50,`for j from 1 to N-1`],
           [90,`if A [ j ] > A [ max ]`],
           [130,`max = j `],
           [50 ,`swap( A [ j ], A [ max ] )`]
       ],

       Insertion = [
            [0,'function INSERTION_SORT (A, N)'],
            [10,'for i from 1 to N-1'], 
            [50,`for j from i+1 to 1`],
            [90,`if A [ j-1 ] > A [ j ]`],
            [130 ,`swap( A [ j ], A [ j-1 ] )`],
            [90,`else break`]
       ],

       Quick = [
            [0,'function QUICK_SORT (A, start, pivot)'],
            [10,'if start <= pivot'], 
            [50,`if start = 1 then return`],
            [50,`while j = 0 , i from 0 to pivot-1`],
            [90 ,`if A[i] <= A[pivot]`],
            [130,`swap (A[i] , A[j]) , j++`],
            [90,`i++`],
            [50 ,`swap (A[i], A[pivot])`],
            [50,`QUICK_SORT (A, start, j-1)`],
            [50 ,`QUICK_SORT (A, j+1, start)`],
       ],

       Merge = [
            [0,'0 function MERGE_SORT (A, N)'],
            [10,'1 if N > 0'], 
            [50,`2 if N = 1 then return`],
            [50,`3 A1 <- A[ 0 to N/2 ], N1 = N/2`],
            [50 ,`4 A2 <- A[ 1+N/2 to N ], N2 = 1+N/2`],
            [50,`5 MERGE_SORT (A1, N1)`],
            [50,`6 MERGE_SORT (A2, N2)`],
            [50 ,`7 Merge (A, A1, N1, A2, N2)`],
       ],

       Default = [[0,'404']]

export {Bubble, Selection, Insertion, Quick, Merge, Default } 