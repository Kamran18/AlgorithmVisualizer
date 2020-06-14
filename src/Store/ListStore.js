const Traversal = [[0,`function TRAVERSE_LIST (headPtr)`],
                [10 ,`tempPtr = headPtr`],
                [50,'while tempPtr -> next'],
                [90,`print tempPtr -> data`],
                [90,`tempPtr = tempPtr -> next`]],
 
       Searching = [
          [0,`function SEARCH_NODE (headPtr, N)`],
          [20 ,`tempPtr = headPtr`],
          [20,'while tempPtr -> next'],
          [60,`if tempPtr -> data = N`],
          [100 ,`return true`],
          [60,`else tempPtr = tempPtr -> next`],
          [20,'return false'],
       ],

       ListInsertion = [
            [0,'func INSERTION_NODE (headPtr, Num, i)'],
            [20 ,`prevPtr = PrevNodePtr (headPtr, i)`],
            [20,'tempPtr = new Node (Num)'], 
            [20,`tempPtr -> next = prevPtr -> next`],
            [20,`prevPtr -> next = tempPtr`],
       ],

       Deletion = [
          [0,`function DELETION_NODE (headPtr, N)`],
          [20 ,`prevPtr = PrevNodePtr (headPtr, N)`],
          [20 ,`if prevPtr = NULL then return`],
          [20,'delNodePtr = prevPtr -> next'],
          [20,`prevPtr = delNodePtr -> next`],
          [20 ,`delete delNodePtr`]
       ]

export {Traversal, Searching, ListInsertion, Deletion} 