for (let hundredsDigit = 1; hundredsDigit <= 9; hundredsDigit++) {
    for (let tensDigit = 0; tensDigit <= 9; tensDigit++) {
        for (let unitsDigit = 0; unitsDigit <= 9; unitsDigit++) {

            let threeDigitNumber = hundredsDigit * 100 + tensDigit * 10 + unitsDigit;

            let sumOfSquares =
                (hundredsDigit * hundredsDigit) +
                (tensDigit * tensDigit) +
                (unitsDigit * unitsDigit);

            if (sumOfSquares === threeDigitNumber) {
                console.log(threeDigitNumber);
            }
        }
    }
}
