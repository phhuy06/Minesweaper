import { useEffect, useState } from 'react';
import styles from './Table.module.scss';
import Reset from './reset';
import dfs from './dfs';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

function Table() {
    const action = useSelector(state => state.control.value);
    const [table, setTable] = useState([]);
    const [isLose, setIsLose] = useState(false);

    function handleLose(newTable, ind) {
        newTable[ind].lose = true;
        for (let i = 0; i < table.length; i++) {
            if (newTable[i].mine) {
                newTable[i].lose = true;
            }
        }

        setIsLose(true)
        return setTable(newTable);
    }

    function openNumber(open) {
        const newTable = [...table];
        for (let i = 0; i < open.length; i++) {
            newTable[open[i]].flag = false;
            newTable[open[i]].click = true;
            if (table[open[i]].number === 0) {
                newTable[open[i]].number0 = true;
            }
            if (table[open[i]].number === 1) {
                newTable[open[i]].number1 = true;
            }
            if (table[open[i]].number === 2) {
                newTable[open[i]].number2 = true;
            }
            if (table[open[i]].number === 3) {
                newTable[open[i]].number3 = true;
            }
            if (table[open[i]].number === 4) {
                newTable[open[i]].number4 = true;
            }
            if (table[open[i]].number === 5) {
                newTable[open[i]].number5 = true;
            }
            if (table[open[i]].number === 6) {
                newTable[open[i]].number6 = true;
            }
            if (table[open[i]].number === 7) {
                newTable[open[i]].number7 = true;
            }
        }
        return setTable(newTable);
    }

    function handleClick(ind) {
        if (isLose) return

        let newTable = [...table];
        if (table[ind].click) {
            const move = [-17, -1, 15, -16, 16, -15, 1, 17];
            let cnt = 0;
            for (let k = 0; k < 8; k++) {
                if ((ind % 16 === 0 && k <= 2) || (ind % 16 === 15 && k >= 5)) {
                    continue;
                }
                const newIndex = ind + move[k];
                if (newIndex < 0 || newIndex > 255) {
                    continue;
                }
                if (table[newIndex].flag) {
                    cnt = cnt + 1;
                }
            }
            if (cnt === table[ind].number) {
                const toOpen = [];
                for (let k = 0; k < 8; k++) {
                    if ((ind % 16 === 0 && k <= 2) || (ind % 16 === 15 && k >= 5)) {
                        continue;
                    }
                    const newIndex = ind + move[k];
                    if (newIndex < 0 || newIndex > 255) {
                        continue;
                    }
                    if (table[newIndex].mine && !table[newIndex].flag) {
                        return handleLose(newTable, newIndex);
                    }
                    if (!table[newIndex].mine) {
                        toOpen.push(newIndex);
                    }
                }
                for(let i = 0;i<toOpen.length;i++){
                    if(table[toOpen[i]].number === 0 && !table[toOpen[i]].click){
                        const visited = [];
                        for(let i = 0;i<256;i++){
                            visited.push(0);
                        }
                        const openNumbers = dfs(table, toOpen[i], [], visited).filter((value, index, self) => self.indexOf(value) === index);
                        openNumber(openNumbers);  
                    }
                }
                openNumber(toOpen);
            }
        } else if (!table[ind].flag) {
            newTable[ind].click = true;
            if (newTable[ind].mine) {
                return handleLose(newTable, ind);
            } else {
                if (newTable[ind].number === 0) {
                    const visited = [];
                    for(let i = 0;i<256;i++){
                        visited.push(0);
                    }
                    const openNumbers = dfs(table, ind, [], visited).filter((value, index, self) => self.indexOf(value) === index);
                    return openNumber(openNumbers);
                } else {
                    return openNumber([ind]);
                }
            }
        }
        return setTable(newTable);
    }

    function handleRightClick(e, ind) {
        e.preventDefault();
        if (!table[ind].click) {
            let newTable = [...table];
            newTable[ind].flag = !newTable[ind].flag;
            return setTable(newTable);
        }
    }
    
    useEffect(() => {
        setTable(Reset());
        setIsLose(false)
    }, [action]);

    useEffect(() => {
        let cnt = 0;
        for(let i = 0;i<table.length;i++){
            if(table[i].click){
                cnt = cnt + 1;
            }
        }
        if(cnt === 218){
            alert("You won!");
            setTable(Reset());
        }
    }, [table])

    return (
        <div className={styles.container}>
            {table.map((item, ind) => (
                <button
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
                </button>
            ))}
        </div>
    );
}

export default Table;
