let winSize = 600
let boidSize = 10

let boids = []
let numBoids = 30

function setup(){
    createCanvas(winSize, winSize)
    
    //Fill boids into array
    for (let i = 0; i < numBoids; i++) {
        boids.push(new Boid(random(0, winSize), random(0, winSize)))
    }
}

function draw(){
    background(0)

    // Run through each boid
    boids.forEach(boid => {
        boid.update()
        boid.show()
    });
    
}