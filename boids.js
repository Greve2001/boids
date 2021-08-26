

class Boid {
    constructor(startX, startY) {
        this.position = new p5.Vector(startX, startY)
        this.acc = new p5.Vector(random(-1, 1), random(-1, 1))
    }

    update() {
        this.position.x += this.acc.x
        this.position.y += this.acc.y
        
        // Check if out of bounds
        if(this.position.x < 0) {this.position.x += winSize}
        if(this.position.x > winSize) {this.position.x -= winSize}
        if(this.position.y < 0) {this.position.y += winSize}
        if(this.position.y > winSize) {this.position.y -= winSize}
    }
    
    show() {
        fill(255)
        stroke(2500)
        circle(this.position.x, this.position.y, boidSize)

        //Direction ray
        let rayLength = 20
        stroke(255, 0, 0)
        line(this.position.x, this.position.y, this.position.x + this.acc.x * rayLength, this.position.y + this.acc.y * rayLength)
    }
}
