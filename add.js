// Creating classes:

// Class declaration: class Name {}
// Class expression: const Name = class {}

class Backpack {
  constructor(
    //define parameters:
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    //define properties:
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }
  //Add methods like normal function:
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}

class Books {
  constructor(name, pages) {
    this.name = name;
    this.pages = pages;
  }
  newBookpages(name) {
    this.name = name;
  }
}

export { Books, Backpack };
