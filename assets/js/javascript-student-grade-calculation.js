/*
Bir öğrencinin notuna göre geçip geçmediğini ve 
hangi başarı seviyesinde olduğunu belirleyecek bir program yazın. 
Kullanıcıdan 0 ile 100 arasında bir not alın (prompt ile) ve 
aşağıdaki not aralıklarına göre öğrenciye bir değerlendirme yapın:

Pekiyi: 90 ile 100 arası
İyi: 80 ile 89 arası
Orta: 70 ile 79 arası
Geçti: 60 ile 69 arası
Geçer: 50 ile 59 arası
Kaldı: 0 ile 49 arası

Programın, kullanıcıya uygun mesajı yazdırmasını sağlayın. 
(Örneğin, eğer not 85 ise "İyi" yazsın.) 
Ayrıca, geçme notunun 50 olduğunu unutmayın ve 
bu uygulamayı yalnızca if, else if ve else yapılarıyla çözmeye çalışın."
*/


gradeNote = prompt("Sınav Notunuzu Giriniz : ")

if ((gradeNote < 0) || (gradeNote > 100)) {
  console.log("Lütfen 0-100 Arası Bir Değer Giriniz");
} else if ((gradeNote >= 90) && (gradeNote <= 100)) {
  console.log("Pekiyi");
} else if ((gradeNote >= 80) && (gradeNote <= 89)) {
  console.log("İyi");
} else if ((gradeNote >= 70) && (gradeNote <= 79)) {
  console.log("Orta");
} else if ((gradeNote >= 60) && (gradeNote <= 69)) {
  console.log("Geçti");
} else if ((gradeNote >= 50) && (gradeNote <= 59)) {
  console.log("Geçer");
} else if ((gradeNote >= 0) && (gradeNote <= 49)) {
  console.log("Kaldı");
} else {
  console.log("Lütfen Geçerli Bir Değer Giriniz");
}