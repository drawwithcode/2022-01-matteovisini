  /* coordinate cerchi */
  let x = 250;
  let y = 250;
  let k = 662;
  let l = 662;

  /* apertura cerchi */
  let inizio = 180;
  let inizio2=170;
  let fine = 0;

  /* incrementi */
  let down = 0;
  let up = 800;

  /* variabili linee ondulate */
  let q = 0;
  let w = 0;
  var iterator = 0;

  /* scala cerchio finale */
  let s = 0;

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(240, 240, 240); 
  frameRate(60); 
  angleMode(DEGREES);
}

function draw() {
    ellipseMode(CENTER);
    const randomValue= random(0.5, 0.9);
    strokeWeight (randomValue*2.5);
    stroke ("black");
    noFill();
    
    /* linee verso il basso */
    push();
    if (down<=180) {
      translate (0,down);
      line (0, 0, width, 0);
      down = down + 3;
      if (down >=80){
      down=down+5;
      } 
    }
    pop()

    /*linee verso l'alto */
    push()
    if (down == 182) {
      if (up > 182) {
      translate(0,up);
      line (0, 0, width, 0);
      up = up - 4;
      }
    }
    pop()

    push ()
    /* quadrato rotante */
    if (frameCount >= 216) {
      const angle= 1 * frameCount;
      let rotation = sin(angle)*35;
      translate(q, w);
      fill (240, 240, 240);
      rotate(rotation);
      rect(-130,55,130,130); 
      q = q+6;
      w = w +0.55;
    }
    pop ()

    push()
    /* linee ondulate */ 
    if (q > width+400) {
      if (frameCount <= 600) {
      stroke (0, 0, 0,10);
      strokeWeight (randomValue*3);
      for(n = 336; n<height; n+=height/150) {
        beginShape();
        curveVertex(0,n);
        for (i = 0; i < width; i+=100) {
          var d = dist(i,n,width/2,n);
          curveVertex(i,n-noise(n+i*0.08)*(5));
        }
        curveVertex(width,n)
        curveVertex(width,n)
        endShape();
        }
      }
    }
    pop()

    /* archi 1 */
    let inc=10 ; 
    if (x < 700) {
      background (240, 240, 240, 0.7);
      strokeWeight (randomValue*2.5);
      if (frameCount > 620) {
        arc (600, 450, x, y, fine, inizio);
        x =x+inc - randomValue*6;
        y=y+inc - randomValue*6;
      }
    }

    /* archi 2 */
    if (x >= 700) {
      if (k <= 1400) {
      arc (600, 450, k, l, fine, inizio2);
      k =k+inc - randomValue*5;
      l=l+inc - randomValue*5;
        if (k >= 1200) {
        fine=20;
      }
    }
    /* cerchio finale */
    noStroke();
    fill(240, 240, 240);
    if (frameCount >= 820) {
      circle (1050, 300, s);
      s=s+10
    }
    if (frameCount >= 870){
      circle (1050, 300, s);
      s=s+50
    }
  }
}