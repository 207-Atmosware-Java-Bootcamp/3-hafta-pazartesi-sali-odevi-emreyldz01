var count = 4;
var loop = true;
function admin(eMail,ePassword)
{
    //email ve password kontrol ediliyor eğer doğruysa while ı durdurmak için 
    // while ın içindeki state i false yaptım.
    if(eMail==="deneme@gmail.com"&&ePassword==="root")
    {
        alert("başarı ile giriş yapıldı");
        alert("hoşgeldiniz");
        loop=false;
    }
    else{
        //eğer yanlışsa count değeri 1 azaltılıp kullanıcıya bildiriliyor
        count--;
        alert("yanlış e-mail veya şifre kalan deneme hakkı: " + count);
    }
}

function main()
{
        //loop false olmadığı sürece while döngümüz çalışacak
    while(loop!=false){
       //kullanıcıdan girdileri aldım
        let mailInput=prompt("lütfen mailinizi giriniz");
         let passWInput=prompt("lütfen şifrenizi giriniz");
         //oluşturduğum admin fonksiyonuna yolladım
        admin(mailInput,passWInput);
        }
        //count 0 olduğunda hata mesajını kullanıcıya bildirilip loop değeri false olacak
        if(count===0)
        {
            alert("hesabınız bloke oldu yönetici ile iletişime geçin");
            loop=false;
        }
}


//main fonksiyonununu çağırdım
main();