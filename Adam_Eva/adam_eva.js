let Apple = function (weight) {
    this.weight = weight;
    this.getWeight = function () {
        return this.weight;
    };

    this.decrease = function () {
        if (this.weight > 0) {
            this.weight = this.weight - 1;
        }
    };

    this.isEmpty = function () {
        if (this.weight === 0) {
            return true;
        } else {
            if (this.weight > 0) {
                return false;
            }
        }
    };
};

let Human = function (name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.getName = function () {
        return this.name;
    };

    this.getWeight = function () {
        return this.weight;
    };
    this.isMale = function () {
        if (this.gender) {
            return true;
        } else {
            return false;
        }
    };
    this.checkApple = function (Apple) {
        if (Apple.weight > 0) {
            return true;
        }
    };

    this.eat = function (Apple) {
        if (Apple.isEmpty()) {
            alert("Không Còn Táo Để Ăn");
        } else {
            Apple.decrease();
            this.weight = this.weight + 1;
        }
    };

    this.say = function (content) {
        this.content=prompt("Nội Dung");
    // let content = prompt("Nội Dung");
    // return content;
    }
};

let apple = new Apple(10);
document.getElementById("apple").innerHTML="Apple : "+apple.getWeight()+" Quả";

let adam = new Human("Adam", true, 65);

let eva = new Human("Eva",false, 45);

function evaEat() {
    eva.eat(apple);
    document.getElementById("eva").innerHTML="Eva : "+eva.getWeight()+" KG";
    document.getElementById("apple").innerHTML="Apple : "+apple.getWeight()+" Quả";
    eva.say();
    document.getElementById("textEva").innerHTML=eva.content;
}

function adamEat() {
    adam.eat(apple);
    document.getElementById("adam").innerHTML="Adam : "+adam.getWeight()+" KG";
    document.getElementById("apple").innerHTML="Apple : "+apple.getWeight()+" Quả";
    adam.say();
    document.getElementById("textAdam").innerHTML=adam.content;
    // document.getElementById("textAdame").innerHTML=adam.say();
}