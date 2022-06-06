alert("Sayı tahmin oyununa hoşgeldiniz");
var loop = false;
 //1 ile 10 arasında değer üretilmesi için üretilmesi için Math.random() * 10 
 var temp = (Math.random() * 9)+1;
 var  numberLF = Math.round(temp);
 console.log(numberLF);

while(loop!=true){
    var input = prompt("sizce bu sayı kaç ?");
    //girilen sayı ile random belirlenen sayıyı karşılaştırıyoruz.
    if(numberLF==input){
        alert("doğru tahmin ettiniz tebrikler");
        loop = true;
    }
    else
    {
        alert("yanlış tahmin ettiniz tekrar deneyin");
    }
}
