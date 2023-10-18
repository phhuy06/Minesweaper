import { useEffect, useState } from 'react';
import styles from './Table.module.scss';
import Reset from './reset';
import Loang from './loang';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

function Table() {
    const action = useSelector(state => state.control.value);
    const [table, setTable] = useState([]);
    useEffect(() => {
        setTable(Reset());
    }, []);

    useEffect(() => {
        setTable(Reset());
    }, [action])

    useEffect(() => {
        let cnt = 0;
        for(let i = 0;i<table.length;i++){
            if(table[i].click){
                cnt = cnt + 1;
            }
        }
        if(cnt === 196){
            alert("You won!");
            setTable(Reset());
        }
    }, [table])

    function handleLose(newtable, ind) {
        newtable[ind].lose = true;
        for (let i = 0; i < table.length; i++) {
            if (newtable[i].mine) {
                newtable[i].lose = true;
            }
        }
        return setTable(newtable);
    }

    function openNumber(open) {
        const newtable = [...table];
        for (let i = 0; i < open.length; i++) {
            newtable[open[i]].flag = false;
            newtable[open[i]].click = true;
            if (table[open[i]].number === 0) {
                newtable[open[i]].number0 = true;
            }
            if (table[open[i]].number === 1) {
                newtable[open[i]].number1 = true;
            }
            if (table[open[i]].number === 2) {
                newtable[open[i]].number2 = true;
            }
            if (table[open[i]].number === 3) {
                newtable[open[i]].number3 = true;
            }
            if (table[open[i]].number === 4) {
                newtable[open[i]].number4 = true;
            }
            if (table[open[i]].number === 5) {
                newtable[open[i]].number5 = true;
            }
            if (table[open[i]].number === 6) {
                newtable[open[i]].number6 = true;
            }
            if (table[open[i]].number === 7) {
                newtable[open[i]].number7 = true;
            }
        }
        return setTable(newtable);
    }

    function handleClick(ind) {
        let newtable = [...table];
        if (table[ind].click) {
            const move = [-17, -1, 15, -16, 16, -15, 1, 17];
            let cnt = 0;
            for (let k = 0; k < 8; k++) {
                if ((ind % 16 === 0 && k <= 2) || (ind % 16 === 15 && k >= 5)) {
                    continue;
                }
                const newi = ind + move[k];
                if (newi < 0 || newi > 255) {
                    continue;
                }
                if (table[newi].flag) {
                    cnt = cnt + 1;
                }
            }
            if (cnt === table[ind].number) {
                const toopen = [];
                for (let k = 0; k < 8; k++) {
                    if ((ind % 16 === 0 && k <= 2) || (ind % 16 === 15 && k >= 5)) {
                        continue;
                    }
                    const newi = ind + move[k];
                    if (newi < 0 || newi > 255) {
                        continue;
                    }
                    if (table[newi].mine && !table[newi].flag) {
                        return handleLose(newtable, newi);
                    }
                    if (!table[newi].mine) {
                        toopen.push(newi);
                    }
                }
                for(let i = 0;i<toopen.length;i++){
                    if(table[toopen[i]].number === 0 && !table[toopen[i]].click){
                        const visited = [];
                        for(let i = 0;i<256;i++){
                            visited.push(0);
                        }
                        const loang = Loang(table, toopen[i], [], visited).filter((value, index, self) => self.indexOf(value) === index);
                        openNumber(loang);  
                    }
                }
                openNumber(toopen);
            }
        } else if (!table[ind].flag) {
            newtable[ind].click = true;
            if (newtable[ind].mine) {
                return handleLose(newtable, ind);
            } else {
                if (newtable[ind].number === 0) {
                    const visited = [];
                    for(let i = 0;i<256;i++){
                        visited.push(0);
                    }
                    const loang = Loang(table, ind, [], visited).filter((value, index, self) => self.indexOf(value) === index);
                    console.log(loang);
                    return openNumber(loang);
                } else {
                    return openNumber([ind]);
                }
            }
        }
        return setTable(newtable);
    }

    function handleRightClick(e, ind) {
        e.preventDefault();
        if (!table[ind].click) {
            let newtable = [...table];
            newtable[ind].flag = !newtable[ind].flag;
            return setTable(newtable);
        }
    }

    return (
        <div className={styles.container}>
            {table.map((item, ind) => (
                <div
                    onClick={() => handleClick(ind)}
                    onContextMenu={(e) => handleRightClick(e, ind)}
                    className={clsx(styles.box, { [styles.unbox]: item.click })}
                    key={ind}
                >
                    <div
                        className={clsx({
                            [styles.number0]: item.number0,
                            [styles.number1]: item.number1,
                            [styles.number2]: item.number2,
                            [styles.number3]: item.number3,
                            [styles.number4]: item.number4,
                            [styles.number5]: item.number5,
                            [styles.number6]: item.number6,
                            [styles.number7]: item.number7,
                            [styles.lose]: item.lose,
                            [styles.flag]: item.flag,
                        })}
                    >
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Table;
