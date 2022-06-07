var x = prompt("tam sayı giriniz ");
isNegative = (x) => {
    if(x>0)
    {
        alert( x + " tam sayısı pozitiftir");
    }
    else if(x<0)
    {
        alert( x + " tam sayısı negatiftir");
    }
    else{
        alert("0 değeri negatif veya pozitif değildir");
    }
}

isNegative(x);