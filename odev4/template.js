//arrow function
getDate = () => {
let time = new Date();
//ilk 3 harf gün değerini verdiği için substring kullandım.
let day = time.toString().substring(0, 3);
//alınan değişkene göre switch case yapısı kurdum
switch(day) {
      case day="Mon":
        alert("Bugün Pazartesi");
      break;
      case day="Tue":
        alert("Bugün Salı");
      break;
      case day="Wed":
        alert("Bugün Çarşamba");
      break;
      case day="Thu":
        alert("Bugün Perşembe");
      break;
      case day="Fri":
        alert("Bugün Cuma");
      break;
      case day="Sat":
        alert("Bugün Cumartesi");
      break;
      case day="Sun":
        alert("Bugün Pazar");
      break;
      default:
      alert("beklenmeyen bir hata oluştu");
      break;
  }
}

getDate();