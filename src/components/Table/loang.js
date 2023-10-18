const move = [-17, -1, 15, -16, 16, -15, 1, 17];
function Loang( table, ind, number0, visited ) {
    for (let k = 0; k < 8; k++) {
        if ((ind % 16 === 0 && k <= 2) || (ind % 16 === 15 && k >= 5)) {
            continue;
        }
        const newind = ind + move[k];
        if (newind < 0 || newind > 255) {
            continue;
        }
        if(table[newind].number === 0 && !visited[newind]){
            visited[newind] = 1;
            number0.push(newind);
            Loang( table, newind, number0,visited );
        }
    }
    for (let k = 0; k < 8; k++) {
        if ((ind % 16 === 0 && k <= 2) || (ind % 16 === 15 && k >= 5)) {
            continue;
        }
        const newind = ind + move[k];
        if (newind < 0 || newind > 255) {
            continue;
        }
        if(!table[newind].mine){
            number0.push(newind);
        }
    }
    return number0;
}

export default Loang;