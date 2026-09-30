$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    //createPlatform(Xpos, Ypos, Width, Height, "Color")
    //createPlatform(Xpos, Ypos, Width, Height, "Color", minX, maxX, speedX, minY, maxY, speedY)
    createPlatform(60, 650, 20, 2, "red")
    createPlatform(140, 525, 20, 2, "red")
    createPlatform(240, 650, 20, 2, "red")
    createPlatform(240, 400, 20, 2, "red")
    createPlatform(540, 550, 20, 2, "red")
    createPlatform(640, 700, 20, 2, "red")
    createPlatform(740, 575, 20, 2, "red")
    createPlatform(1040, 500, 20, 2, "red")
    createPlatform(1340, 450, 20, 2, "red")


    // TODO 3 - Create Collectables
    //createCollectable("Name", xPos, yPos, GravitNumber, BounceNumber, minX, maxX, speed)
    //createCollectable("Name", xPos, yPos, GravitNumber, BounceNumber)
    //createCollectable("Name", xPos, yPos)

    createCollectable("database", 1200, 170, 0.5, 1);


    // TODO 4 - Create Cannons
    //createCannon("top bottom left right", position, timeBetweenShots, BulletWidth, BulletHeight, minCannonPos, maxCannonPos, cannonSpeed)
    //createCannon("top bottom left right", position, timeBetweenShots, BulletWidth, BulletHeight)
    //createCannon("top bottom left right", position, timeBetweenShots)  
    createCannon("left", 200, 5000)  
    createCannon("left", 675, 200)  

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
