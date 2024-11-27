class Product{
    name;
    price;
    category;
    constructor(name, price, category){
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(amount){
        console.log(amount, "applying Discont", this.price);
    }

    getPriceAfterDiscount(amount){
        console.log("get price after discount is", this.price - amount);
    }
}

var myProduct = new Product("apple", 100000, "Mobile");
myProduct.applyDiscount(5000);
myProduct.getPriceAfterDiscount(5000);
console.log(myProduct);
