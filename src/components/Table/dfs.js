const move = [-17, -1, 15, -16, 16, -15, 1, 17];

function dfs( table, ind, number0, visited ) {
    for (let k = 0; k < 8; k++) {
        const moveOutsideBoard = (ind % 16 === 0 && k <= 2) || (ind % 16 === 15 && k >= 5)

        if (moveOutsideBoard) {
            continue;
        }
        const newIndex = ind + move[k];

        if (newIndex < 0 || newIndex > 255) {
            continue;
        }

        if( table[newIndex].number === 0 && !visited[newIndex] ){
            visited[newIndex] = 1;
            number0.push(newIndex);

            dfs( table, newIndex, number0,visited );
        }
    }
    for (let k = 0; k < 8; k++) {
        const moveOutsideBoard = (ind % 16 === 0 && k <= 2) || (ind % 16 === 15 && k >= 5)

        if (moveOutsideBoard) {
            continue;
        }

        const newIndex = ind + move[k];

        if (newIndex < 0 || newIndex > 255) {
            continue;
        }

        if(!table[newIndex].mine){
            number0.push(newIndex);
        }
    }
    
    return number0;
}

export default dfs;