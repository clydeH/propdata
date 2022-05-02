function PropData(num) {
    let number;
    for (let i = 1; i < num + 1; i++) {
        number = i;
        if (number % 3 == 0 && number % 5 == 0) {

            number = "PropData"
        } else if (number % 3 == 0) {

            number = "Prop"
        } else if (number % 5 == 0) {

            number = "Data"
        }
        console.log(number)

    }

}

PropData(20)