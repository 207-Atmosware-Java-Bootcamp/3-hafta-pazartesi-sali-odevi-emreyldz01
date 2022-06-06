let input = prompt("enter a text");
console.log(input);
//girilen string boyutunda bir char array oluşturdum.
var charArr=[input.toString().length];

for (var i = 0; i < input.length; i++) {
    // her elemanı diziye aktarıyoruz
    charArr[i] = input.charAt(i);
}
// başlangıç olarak ilk index yerine ikiciyi 
// bitiş yerini son index yerine sondan bir önceki seçtim 
for(var i = 1; i < charArr.length-1; i++)
{
    // ve başlangıç ile son arasındaki indexlerin değerlerini * ile değiştirdim.
    charArr[i]="*";
}
//virgülleri null değerle değiştirdim bu sayede düzgün bir kelime olarak görünecek
let text = charArr.join("");
console.log(text);
