// sum of all positive numbers till 30
sum = 0;
for(i = 2; i < 31; i += 2){
    if(i % 2 == 0){
        sum += i;
    } continue;
}
console.log(sum);

//print only even numbers till 20
for(i = 2; i < 21; i += 2){
    console.log(i)
}

//creating an object to represent a product from Myntra
let product = {
    id: 511,
    productName: 'women tshirt',
    brand: 'Nuon',
    size: 'XS',
    color: 'black',
};
console.log(product);
console.log(product.color);

//creating an array of nos. [5,6] and adding 4 at the beginning & 7 at the end
let arr = [5, 6];
console.log('before adding: ', arr);
arr.push(7);
arr.unshift(4);
console.log('after adding: ', arr);

