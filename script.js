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
//tractor1
var tractor1 = new equipments();
tractor1.url = "https://www.mahindratractor.com/sites/default/files/2024-07/Jivo-225-4wd-Desktop_0_11zon.webp";
tractor1.title = "Mahindra JIVO  Tractor";
tractor1.details = "The Mahindra JIVO 225 DI 4WD Tractor! With fuel efficient 14.9 kW (20 HP) engine ensuring power and control, 2300 rated RPM (r/min), and 750 kg of hydraulics lifting capacity, this latest tractor ensures smooth operations.";
tractor1.price = "₹4,000/day";
tractor1.value = 4000;
tractor1.power = "14.9 kW (20 HP)";
//tractor2
var tractor2 = new equipments();
tractor2.url = "https://www.mahindratractor.com/sites/default/files/2024-07/ARJUN-555-DI-Desktop_1.webp";
tractor2.title = "Mahindra ARJUN Tractor";
tractor2.details = "The Mahindra ARJUN 555 DI Tractor! Unleash the true potential of your farm with its unbeatable features and unmatched fuel efficiency. This latest tractor packs an advanced 26.5 TO 37.3 kW (36 TO 50 HP) engine power range, power steering, and 1800 kg of hydraulics lifting capacity"
tractor2.price = "₹6,000/day";
tractor2.value = 6000;
tractor2.power = "26.5 TO 37.3 kW (36 TO 50 HP)";
//tractor 3
var tractor3 = new equipments();
tractor3.url = "https://www.mahindratractor.com/sites/default/files/2024-07/415-DI-XP-Plus-desktop_0.webp";
tractor3.title = "Mahindra XP PLUS Tractor";
tractor3.details = " The ultimate powerhouse for all your agricultural needs! Its robust engine power range of 26.5 TO 37.3 kW (36 TO 50 HP) ELS engine with a torque of 179 Nm is designed to be tough and efficient. This Mahindra tractor is built to tackle any task with ease. Whether you're plowing fields, planting crops, or hauling heavy loads, the Mahindra 415 DI XP PLUS Tractor delivers unbeatable performance"
tractor3.price = "₹5,000/day";
tractor3.value = 5000;
tractor3.power = "26.5 TO 37.3 kW (36 TO 50 HP)";
//tractor 4
var tractor4=new equipments();
tractor4.url=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHAoTBq99IqqPbwbKtTWRKGdtMVV6JixhJQ&s";
tractor4.details = "A powerful and reliable companion for modern farming! The Sonalika DI 60 is equipped with a strong 44.7 kW (60 HP) engine that delivers high torque for superior performance in tough field conditions. Built for efficiency and durability, this tractor handles heavy-duty tasks like ploughing, cultivation, and hauling with ease. With its robust design and excellent fuel efficiency, the Sonalika DI 60 ensures maximum productivity and long-lasting performance for every agricultural need.";
tractor4.title = "Sonalika DI 60 Tractor";

tractor4.price = "₹5,000/day";
tractor4.value = 5000;
tractor4.power="60Hp";





var img = document.querySelectorAll(".img");
var tit = document.querySelectorAll(".title");
var pri = document.querySelectorAll(".price");




let list1 = [tractor1, tractor2, tractor3];

let list2 = [tractor1, tractor2, tractor3,tractor4];

var i = 0;
list1.forEach((element) => {
    img[i].style.background = `url(${element.url})`;
    img[i].style.backgroundSize = `cover`;

    tit[i].textContent = `${element.title}`;
    pri[i].textContent = `${element.price}`;

    i++;

});
// harvest machine 1
var harvest1 = new equipments();
harvest1.url = "";
harvest1.price = "₹25,000/day";
harvest1.value = 25000;
harvest1.power = "Diesel Engine";

// harvest machine 2
var harvest2 = new equipments();
harvest2.url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXG0KlcgKZcCPakkCrQBIkq7Koxt8RX6QPCA&s";
harvest2.title = "John Deere Combine Harvester";
harvest2.details = "Advanced harvesting solution with superior cutting efficiency, fuel economy, and operator comfort for large farms.";
harvest2.price = "₹28,000/day";
harvest2.value = 28000;
harvest2.power = "Diesel Engine";

// harvest machine 3
var harvest3 = new equipments();
harvest3.url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepaozPfMRsNITd2OM-byQC_YzX2Q_Z0_h4w&s";
harvest3.title = "Preet Paddy Harvester";
harvest3.details = "Reliable paddy harvester built for Indian field conditions, ensuring fast harvesting with minimal grain loss.";
harvest3.price = "₹22,000/day";
harvest3.value = 22000;
harvest3.power = "Diesel Engine";


var hImg = document.querySelectorAll(".harvest-img");
var hTitle = document.querySelectorAll(".harvest-title");
var hPrice = document.querySelectorAll(".harvest-price");

let harvestList = [harvest1, harvest2, harvest3];

harvestList.forEach((item, i) => {
    hImg[i].style.backgroundImage = `url(${item.url})`;
    hTitle[i].textContent = item.title;
    hPrice[i].textContent = item.price;
});






