function Reset() {
    const table = [];
    const gridSize = 16;
    const move = [-17, -1, 15, -16, 16, -15, 1, 17];
    let mineCount = Math.floor(gridSize * gridSize * 0.15);
    let cnt = 0;
    
    for (let i = 0; i < gridSize * gridSize; i++) {
        let mine = 0;
        if (cnt < mineCount) {
            mine = 1;
            cnt++;
        }
        
        const data = {
            number: 100,
            number0: false,
            number1: false,
            number2: false,
            number3: false,
            number4: false,
            number5: false,
            number6: false,
            number7: false,
            lose: false,
            flag: false,
            click: false,
            mine: mine,
        };
        table[i] = data;
    }

    shuffle(table);

    for (let i = 0; i <= 16 * 16 - 1; i++) {
        if (table[i].mine) {
            continue;
        }
        let cnt = 0;
        for (let k = 0; k < 8; k++) {
            const moveOutsideBoard = (i % 16 === 0 && k <= 2) || (i % 16 === 15 && k >= 5)

            if (moveOutsideBoard) {
                continue;
            }

            const newIndex = i + move[k];

            if (newIndex < 0 || newIndex > 255) {
                continue;
            }
            
            if (table[newIndex].mine) {
                cnt = cnt + 1;
            }
        }
        table[i].number = cnt;
    }
    return table;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export default Reset;
