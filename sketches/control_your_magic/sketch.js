let lastX, lastY, currentX, currentY, randomCounter

function setup() {
    createCanvas(displayWidth, displayHeight)
    // frameRate(120)

    lastX = random(0, displayWidth)
    lastY = random(0, displayHeight)

    randomCounter = 0

}

function draw() {

    if (abs(mouseX-lastX) > 80) {
        currentX = random(mouseX/3, mouseX)
    } else {
        currentX = mouseX+random(-10, 10)
    }

    if (abs(mouseY-lastY) > 80) {
        currentY = random(mouseY/3, mouseY)

    } else {
        currentY = mouseY+random(-10, 10)
    }

    if (abs(mouseY-lastY) < 20 && abs(mouseX-lastX) < 20) {
        stroke(20,20,255,100)
        fill(255,0,0,200)
    } else {
        stroke(100,100,200,200)
        fill(randomCounter,255,0,200)
    }

    strokeWeight(2)
    line(lastX,lastY,currentX,currentY)

    noStroke()
    rectMode(CENTER)
    rect(currentX,currentY,4,4)

    lastX = currentX
    lastY = currentY

    if (randomCounter > 255) {
        randomCounter = 0
    } else {
        randomCounter = randomCounter + 1
    }

    background(20,2,25,30)
}
