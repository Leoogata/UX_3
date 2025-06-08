let vwLogo;
let bgSound;

function preload() {
  // Carrega o modelo STL
  vwLogo = loadModel('../assets/vw_logo.stl', true);

  // Carrega o som
  bgSound = loadSound('../assets/piao_da_casa_propria.mp3');

}

function setup() {
  createCanvas(600, 600, WEBGL);

  // Toca o som em loop quando a cena inicia
  bgSound.loop();
}

function draw() {
    background(30);

    // Iluminação
    directionalLight(255, 255, 255, 0.5, 0.5, -1);
    pointLight(255, 255, 255, 200, -200, 300);
    ambientLight(60);

    // Material com reflexo
    ambientMaterial(255); // Azul metálico

    // Posicionamento no centro da cena
    translate(1, 0, 0);

    rotateX(PI - QUARTER_PI / 4);
    // Rotação automática no eixo Y
    rotateY(frameCount * -0.02);

    // Exibe o modelo com escala adequada
    scale(1); // Ajuste conforme necessário
    model(vwLogo);
}


