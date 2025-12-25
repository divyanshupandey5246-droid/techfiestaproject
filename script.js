var loding = document.querySelector(".loding");
document.body.style.overflow = "hidden";
setTimeout(() => {
    loding.style.display = "none";
    document.body.style.overflow = "auto";
}, 3000);
class equipments {
    url;
    title;
    details;
    price;
    power;
    value;

};

var tractor1 = new equipments();
tractor1.url = "https://www.mahindratractor.com/sites/default/files/2024-07/Jivo-225-4wd-Desktop_0_11zon.webp";
tractor1.title = "Mahindra JIVO  Tractor";
tractor1.details = "The Mahindra JIVO 225 DI 4WD Tractor! With fuel efficient 14.9 kW (20 HP) engine ensuring power and control, 2300 rated RPM (r/min), and 750 kg of hydraulics lifting capacity, this latest tractor ensures smooth operations.";
tractor1.price = "₹4,000/day";
tractor1.value = 4000;
tractor1.power = "14.9 kW (20 HP)";

var tractor2 = new equipments();
tractor2.url = "https://www.mahindratractor.com/sites/default/files/2024-07/ARJUN-555-DI-Desktop_1.webp";
tractor2.title = "Mahindra ARJUN Tractor";
tractor2.details = "The Mahindra ARJUN 555 DI Tractor! Unleash the true potential of your farm with its unbeatable features and unmatched fuel efficiency. This latest tractor packs an advanced 26.5 TO 37.3 kW (36 TO 50 HP) engine power range, power steering, and 1800 kg of hydraulics lifting capacity"
tractor2.price = "₹6,000/day";
tractor2.value = 6000;
tractor2.power = "26.5 TO 37.3 kW (36 TO 50 HP)";

var tractor3 = new equipments();
tractor3.url = "https://www.mahindratractor.com/sites/default/files/2024-07/415-DI-XP-Plus-desktop_0.webp";
tractor3.title = "Mahindra XP PLUS Tractor";
tractor3.details = " The ultimate powerhouse for all your agricultural needs! Its robust engine power range of 26.5 TO 37.3 kW (36 TO 50 HP) ELS engine with a torque of 179 Nm is designed to be tough and efficient. This Mahindra tractor is built to tackle any task with ease. Whether you're plowing fields, planting crops, or hauling heavy loads, the Mahindra 415 DI XP PLUS Tractor delivers unbeatable performance"
tractor3.price = "₹5,000/day";
tractor3.value = 5000;
tractor3.power = "26.5 TO 37.3 kW (36 TO 50 HP)";


var img = document.querySelectorAll(".img");
var tit = document.querySelectorAll(".title");
var pri = document.querySelectorAll(".price");

let list = [tractor1, tractor2, tractor3];
var i = 0;
list.forEach(element => {
    img[i].style.background = `url(${element.url})`;
    img[i].style.backgroundSize = `cover`;

    tit[i].textContent = `${element.title}`;
    pri[i].textContent = `${element.price}`;

    i++;

});


