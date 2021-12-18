//WEATHER WEAR
function chooseClothes(tempa) {
    if (tempa < -5) {
        return ("Brrr! It's really cold outside. You should wear down jacket, sweatshirt and hat.")
    }
    else if (tempa < 10) {
        return ("Grab your coat - it's a quite chilly weather.")
    }
    else if (tempa < 20) {
        return ("Perfect weather for sneakers! Also can either take a jacket with light sweater or just wear warm hoodie.")
    }
    else { 
        return ("Hooray! It's summer time! Take your best t-shirt and sexiest shorts and get ready for long warm sunny days.")
    }
}
//example
const clothesToWear = chooseClothes(8);
console.log(clothesToWear);