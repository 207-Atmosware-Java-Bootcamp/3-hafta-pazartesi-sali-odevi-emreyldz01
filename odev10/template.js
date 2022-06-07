var inputCelcius= prompt("fahrenayta çevirmek için bir celcius değeri giriniz");

calculateCelcius = (x) => {
    return ((x*9/5)+32);
}

alert(calculateCelcius(inputCelcius)+" Fahrenayt");