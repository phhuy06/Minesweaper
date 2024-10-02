export const move = [-17, -1, 15, -16, 16, -15, 1, 17];

function Loang(table, ind, number0, visited) {
    for (let k = 0; k < 8; k++) {
        if ((ind % 16 === 0 && (k === 1 || k === 2 || k === 5)) || (ind % 16 === 15 && (k === 0 || k === 3 || k === 4))) {
            continue;
        }

        const newind = ind + move[k];

        if (newind < 0 || newind > 255) {
            continue;
        }

        if (table[newind].number === 0 && !visited[newind]) {
            visited[newind] = true;
            number0.push(newind);
            Loang(table, newind, number0, visited);
        } 
        else if (!table[newind].mine && !visited[newind]) {
            visited[newind] = true;
            number0.push(newind);
        }
    }

    return number0;
}

export default Loang;
