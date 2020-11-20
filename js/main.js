window.onload = function() {
    
    var graph = new Graph();
    graph.print();

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
        } else {
            alert('Введите целые числа от 1 до 8');
        }
    })
}