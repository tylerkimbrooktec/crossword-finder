function findWords(board, words) {
    const res = {}

    for (const word of words) {

        for (let r = 0; r <board.length; r++) {
            const rowString = board[r].join('')

            const forwardInd = rowString.indexOf(word)

            if(forwardInd != -1) {
                res[word] = {
                    type: "row",
                    direction: "normal",
                    beginsAt: [r, forwardInd]
                }
            }

            const reverseInd = rowString.split('').reverse().join('').indexOf(word)
            if(reverseInd != -1) {
                res[word] = {
                    type: "row",
                    direction: "reverse",
                    beginsAt: [r, rowString.length -reverseInd - 1]
                }
            }
        }

        for (let c = 0; c < board[0].length; c++) {
            const colString = board.map(row => row[c]).join('')

            const forwardCol = colString.indexOf(word)
            
            if(forwardCol != -1) {
                res[word] = {
                    type: "column",
                    direction: "normal",
                    beginsAt: [forwardCol, c]
                }
            }

            const reverseCol = colString.split('').reverse().join('').indexOf(word)

             if(reverseCol != -1) {
                res[word] = {
                    type: "column",
                    direction: "reverse",
                    beginsAt: [colString.length - reverseCol - 1, c]
                }
            }
        }
    }


    return res

}