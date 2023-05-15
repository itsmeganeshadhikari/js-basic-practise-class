class fruit {
  constructor(fruitName, fruitColor) {
    this.name = fruitName;
    this.color = fruitColor;
  }
  showInfo() {
    console.log("Mango ko information ho hai");
  }
}
var fruit1 = new fruit("Mango", "Yellow");
console.log(fruit1);
console.log(`Name= ${fruit1.name} and color= ${fruit1.color}`);
fruit1.showInfo();
