window.onload = function() {
    
    const graph = new Graph();
    graph.print();
    const calc = new Calc();

    let x1, y1, x2, y2;

    document.getElementById('start').addEventListener('click', () => {
        x1 = document.getElementById('x1').value*1 || 1;
        y1 = document.getElementById('y1').value*1 || 1;
        x2 = document.getElementById('x2').value*1 || 2;
        y2 = document.getElementById('y2').value*1 || 2;
        if (x1*y1 > 0 && x1 <= 8 && x2 <= 8 && y1 <= 8 && y2 <= 8 && x2*y2 > 0 && x1>0 && x2>0) {
            graph.print();
            graph.point(x1, y1, 'red');
            graph.point(x2, y2, 'blue');
            startCalc();
        } else {
            alert('Введите целые числа от 1 до 8');
        }
    });

    function startCalc () {
        let a = document.getElementById('a');
        let b = document.getElementById('b');
        let c = document.getElementById('c');
        let d = document.getElementById('d');
        let d1 = document.getElementById('d1');
        let e = document.getElementById('e');
        let e1 = document.getElementById('e1');
        let f = document.getElementById('f');
        let f1 = document.getElementById('f1');

        a.value = (calc.func_a(x1, y1, x2, y2)? 'да' : 'нет');
        b.value = (calc.func_b(x1, y1, x2, y2)? 'да' : 'нет');
        c.value = (calc.func_c(x1, y1, x2, y2)? 'да' : 'нет');
        if (calc.func_d(x1, y1, x2, y2)) {
            d.value = 'да'; 
            d1.value = '';
        } else {
            d.value = 'нет'; 
            d1.value = calc.func_d1(x1, y1, x2, y2);
        }
        if (calc.func_b(x1, y1, x2, y2)) {
            e.value = 'да'; 
            e1.value = '';
        } else {
            e.value = 'нет'; 
            e1.value = calc.func_e1(x1, y1, x2, y2);
        }
        if (calc.func_f(x1, y1, x2, y2)) {
            f.value = 'да'; 
            f1.value = '';
        } else {
            f.value = 'нет'; 
            f1.value = calc.func_f1(x1, y1, x2, y2);
        }
    }
}