// inventory tracker system
// Required functionality: users can add, remove, and display products

//initial products
let inventory =  {
    "00001": {name: "SIGEBOX 1", price: 500, quantity: 20},
    "00002": {name: "Lab09 2", price: 800, quantity: 15},
    "00003": {name: "Assignment 3", price: 1200, quantity: 8}
};

function addProduct(productID, name, price, quantity){
    inventory[productID] = {name: name, price: price, quantity: quantity};
}

function removeProduct(productID){
    if (inventory[productID]) {
        let quantity = inventory[productID].quantity;
        console.log("Product with ID " + productID + " has " + quantity + " units in inventory.");

        let deleteQuantity = prompt("Enter the quantity to remove (max: " + quantity + "):");

        if (deleteQuantity) {
            deleteQuantity = parseInt(deleteQuantity);
            if (deleteQuantity <= quantity) {
                inventory[productID].quantity -= deleteQuantity;
                console.log(deleteQuantity + " units of product with ID " + productID + " have been successfully removed from the inventory.");
                if (inventory[productID].quantity === 0) {
                    delete inventory[productID];
                    console.log("Product with ID " + productID + " has been completely removed from the inventory.");
                }
            } else {
                console.log("Invalid quantity. Please enter a quantity less than or equal to the current quantity.");
            }
        } else {
            console.log("No quantity entered. Product removal canceled.");
        }
    } else {
        console.log("Product with ID " + productID + " not found in inventory. Unable to remove.");
    }
}

function calculateTotalInventoryValue() {
    let totalValue = 0;
    for (let key in inventory) {
        totalValue += totalValue + inventory[key].price * inventory[key].quantity;
    }
    console.log("Total inventory value : " + totalValue);
}


function displayInventory() {
    console.log("Current inventory:");
    let productIDs = [];
    let i = 0;
    for (let key in inventory) {
        productIDs[i] = key;
        i++;
    }
    for (let i = 0; i < productIDs.length; i++) {
        let productID = productIDs[i];
        console.log("Product ID: " + productID + ", Name: " + inventory[productID].name + ", Price: " + inventory[productID].price + ", Quantity: " + inventory[productID].quantity);

    }
}

function findProduct(productID) {
    if (inventory[productID]) {
        console.log("Product ID: " + productID + ", Name: " + inventory[productID].name + ", Price: " + inventory[productID].price + ", Quantity: " + inventory[productID].quantity);

    } else {
        console.log("Product not found in inventory.");
    }
}

function displayProductInfo(productID) {
    if (inventory[productID]) {
        let product = inventory[productID];
        console.log("Product ID: " + productID + ", Name: " + product.name + ", Price: " + product.price + ", Quantity: " + product.quantity);
    } else {
        console.log("Product not found in inventory.");
    }
}

displayInventory();
addProduct("00004", "productName", 1500,10);
addProduct("00005", "web", 2300, 5);
displayInventory();
removeProduct("00001");
findProduct("00001");
calculateTotalInventoryValue();