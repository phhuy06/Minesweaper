function Reset() {
    const table = [];
    const move = [-17, -1, 15, -16, 16, -15, 1, 17];
    let cnt = 0;
    for (let i = 0; i <= 16 * 16 - 1; i++) {
        let mine = Math.round(Math.random());
        let data = {};
        if (mine === 1) {
            cnt = cnt + 1;
        }
        if (i <= 51) {
            if (cnt > 12) {
                mine = 0;
                cnt = cnt - 1;
            }
        } else if (i <= 102) {
            if (cnt > 24) {
                mine = 0;
                cnt = cnt - 1;
            }
        } else if (i <= 153) {
            if (cnt > 36) {
                cnt = cnt - 1;
                mine = 0;
            }
        } else if (i <= 204){
            if (cnt > 48){
                cnt = cnt - 1;
                mine = 0;
            }
        } else if (i <= 255){
            if(cnt > 60){
                cnt = cnt - 1;
                mine = 0;
            }
        }
        data = {
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

    for (let i = 0; i <= 16 * 16 - 1; i++) {
        if (table[i].mine) {
            continue;
        }
        let cnt = 0;
        for (let k = 0; k < 8; k++) {
            if ((i % 16 === 0 && k <= 2) || (i % 16 === 15 && k >= 5)) {
                continue;
            }
            const newi = i + move[k];
            if (newi < 0 || newi > 255) {
                continue;
            }
            if (table[newi].mine) {
                cnt = cnt + 1;
            }
        }
        table[i].number = cnt;
    }
    return table;
}

export default Reset;
