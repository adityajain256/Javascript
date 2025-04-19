// these are special type of strings that are used so that you can use any variable inside one line using ${} this symnol

const product = {
    pName: "moon lamp",
    price: 145,
    listedDate: "15-05-2025",
}

let detailsProduct = `The ${product.pName} is sold at ${product.price} and it is listed on date ${product.listedDate}`

console.log(detailsProduct)


// the symbol we used ${} is called string interpolation