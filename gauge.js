/**
 * gauge.js
 * -------------------
 * @author Alan Alencar
 * @description desenhar um gauge no canvas do HTML5.
 * @version 1.0.0 - versão inicial.
 */

// Função para desenhar o gauge.
/**
 * @param canvas - container onde será renderizado o gauge.
 * @param x_cord - coordenada x para o centro do círculo do gauge.
 * @param y_cord - coordenada y para o centro do círculo do gauge.
 * @param radius - raio da circunferência.
 * @param percent - informa o percentual de exibição do progresso.
 * @param color_line - cor da linha de progresso em "hex color".
 */
function gauge(canvas, x_cord, y_cord, radius, percent, color_line) {

    const ctx = canvas.getContext('2d');

    // 360 graus = 2 * Pi
    ctx.beginPath();
    ctx.lineWidth = 0.1;
    ctx.arc(x_cord, y_cord, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Desenha o caminho com traçado para o percentual informado.
    ctx.beginPath();
    ctx.lineWidth = 5; // expessura da linha de indicação.
    ctx.strokeStyle = color_line ;
    ctx.arc(x_cord, y_cord, radius, 0, (percent * 2 / 100) * Math.PI);
    ctx.stroke();

    // Label interno
    ctx.font = "24px Arial";
    ctx.fillStyle = "#999999";
    ctx.fillText(` ${percent}%`, 62, 58);
}

// Carrega os canvas em constantes para chamar a função de desenho.
const canvasTotal = document.getElementById('total');
const canvasOk = document.getElementById('ok')
const canvasNok = document.getElementById('nok');
const canvasGauge1 = document.getElementById('gauge_1');
const canvasGauge2 = document.getElementById('gauge_2');
const canvasGauge3 = document.getElementById('gauge_3');

// Chama a função que vai desenhar cada um dos gauges.
gauge(canvasTotal, 95, 50, 40, 80, '#a8e4a0');
gauge(canvasOk, 95, 50, 40, 61, '#fedcba');
gauge(canvasNok, 95, 50, 40, 30, '#c0d6e4');
gauge(canvasGauge1, 95, 50, 40, 50, '#de8cc2');
gauge(canvasGauge2, 95, 50, 40, 20, '#db8186');
gauge(canvasGauge3, 95, 50, 40, 100, '#1981DC');

// Alan Alencar