let passWd=prompt("şifrenizi giriniz");
var loop = true;
passWdCheck  = (password) => {
    if(password===passWd)
    {
        alert("şifre doğru");
        loop = false;
    }
    else{alert("şifre yanlış");
        loop=true;}
}

function main()
{
    while(loop!= false){
    let passWd2=prompt("şifrenizi tekrar giriniz");
    passWdCheck(passWd2);
    }
}

main();