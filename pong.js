let ctx, p1_y, p2_y, p1_points, p2_points
const h=500, w=800, p_w=20, p_h=200, p1_x = 10, p2_x = w - p_w - 10
function setup(){
    const canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")
    
    // inicializa as posições y do p1 e do p2 para metade da tela
    p1_y = p2_y = (h / 2) - (p_h/2)
    
    // inicializa os pontos dos jogadores como 0
    p1_points = 0
    p2_points = 0

    //define um intervalo de 60 fps para o loop
    setInterval(loop,1000/60)
}

function loop(){

}

setup()