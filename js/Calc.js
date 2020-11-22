function Calc() { //Конструктор для вычисления

    this.func_a = (x1, y1, x2, y2) => { // решение задачи "а"
        if ((x1+y1)%2 == (x2+y2)%2) return true;
        else return false;
    }

    this.func_b = (x1, y1, x2, y2) => { // решение задачи "б" и "д"
        if (x1 == x2 || y1 == y2 || Math.abs(y2 - y1) == Math.abs(x2 - x1)) return true;
        else return false;
    }

    this.func_c = (x1, y1, x2, y2) => { // решение задачи "в"
        let delta = Math.abs((y2-y1)/(x2-x1));
        if (delta == 2 || delta == 0.5 ) return true;
        else return false;
    }

    this.func_d = (x1, y1, x2, y2) => { // решение задачи "г"
        if (x1 == x2 || y1 == y2) return true;
        else return false;
    }
    this.func_d1 = (x1, y1, x2, y2) => { // нахождение точки для задачи "г"
        return `(${x2};${y1})`;
    }

    this.func_e1 = (x1, y1, x2, y2) => { // нахождение точки для задачи "д"
        let d = x1;
        let i = x1<x2? 1: -1;
        do {
            d += i;
        } while (!this.func_b(d, y1, x2, y2));
        return `(${d};${y1})`;
    }

    this.func_f = (x1, y1, x2, y2) => { // решение задачи "е"
        if (Math.abs(y2 - y1) == Math.abs(x2 - x1)) return true;
        else return false;
    }
    this.func_f1 = (x1, y1, x2, y2) => { // нахождение точки для задачи "е"
        let d = x1;
        let i = x1<x2? 1: -1;
        do {
            d += i;
        } while (!this.func_f(d, y1, x2, y2));
        return `(${d};${y1})`;
    }
}