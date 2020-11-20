function Graph() { //Конструктор для отрисовки

    //Настройка канваса (рисовалки)
    let canvas = document.getElementById('canvas');
    canvas.width = 440;
    canvas.height = 440;
    let ctx = canvas.getContext('2d');
    let d = 400/8;

    this.print = () => { //Отрисовка шахматной доски
        ctx.beginPath();
        //отрисовка доски
        ctx.fillStyle = 'lightgrey';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white'; 
        ctx.fillRect(20, 20, canvas.width - 40, canvas.height - 40);
        ctx.fillStyle = 'black'; 
        for (let i=0; i<8; i+=2)
            for (let j=0; j<8; j+=2) {
                ctx.fillRect(20 + i*d, 20 + j*d, d, d);
                ctx.fillRect(20 + (i+1)*d, 20 + (j+1)*d, d, d);
            }
        //отрисовка нумерации
        ctx.fillStyle = "red";
        ctx.font = 'bold 15px sans-serif'
        for (let i=0; i<8; i++) {
            ctx.fillText(8 - i, 5, 20 + d/2 + i*d);
        }
        for (let i=0; i<8; i++) {
            ctx.fillText(String.fromCodePoint(65 + i), 20 + d/2 + i*d, 15);
        }
        ctx.stroke();
    }
    
    this.point = (x, y, color) => {
        ctx.beginPath();
        ctx.arc(20 + d/2 + (x-1) * d, canvas.height - 20 - d/2 - (y-1) * d, d/3, 0, 2*Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
    }
}