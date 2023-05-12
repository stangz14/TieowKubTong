

const travel = [{
    id: 0,
    img: 'img/tham-luang-khun-nam-nang-non.jpg',
    name: 'ถ้ำหลวง ขุนน้ำนางนอน',
    des: 'นี่ก็เป็นอีกสถานที่เที่ยวเชียงรายที่ไม่ไกลจาก ที่เที่ยวเชียงใหม่ เที่ยวธรรมชาติที่ไม่ควรพลาดเมื่อไปเยือนเชียงรายนั่นก็คือ อุทยานถ้ำหลวง-ขุนน้ำนางนอน ตั้งอยู่ใน เขตป่าสงวนแห่งชาติดอยนางนอน ตำบลโป่งผา อำเภอแม่สาย จังหวัดเชียงราย ลักษณะของสถานที่แห่งนี้รายล้อมไปด้วย พันธุ์ไม้ต่างๆ ที่ขึ้นเองตามธรรมชาติขึ้นตามลำธารและลำห้วยทำให้ป่าแห่งนี้อุดมสมบูรณ์เขียวขจี ร่มรื่นเป็นอย่างมาก ลักษณะเด่นที่ดึงดูดนักท่องเที่ยวหลายๆ คนให้ไปเที่ยวชมอุทยานถ้ำหลวง-ขุนน้ำนางนอน มีเทือกเขาขนาดใหญ่ที่มีรูปปร่างคล้ายสตรีนอนเหยียดยาว เกิดเป็นดอยที่อยู่ตามเทือกเขา ซึ่งในปัจจุบันกลายเป็นสถานที่ท่องเที่ยวยอดนิยมของจังหวัดเชียงราย ทั้งนักท่องเที่ยวไทยและต่างชาติ ให้ความสนใจไปเที่ยวชมกันอย่างล้นหลาม อีกไฮไลท์ที่น่าสนใจคือ สระมรกตขุนน้ำนางนอน น้ำสีฟ้าสดใสกริ๊ง ฟิวนั่งมอง นั่งรับอากาศบริสุทธิ์ก็ฮีลต่อใจกันแล้วค่า หรือใครอยากสนุกสนานกับแก๊งค์เพื่อนเราสามารถลงไปเล่นน้ำได้ด้วยน๊า ไม่ไปไม่ได้แล้วไปพักผ่อนหย่อนใจชมธรรมชาติสวยๆ อากาศดีๆ ที่อุทยานถ้ำหลวง-ขุนน้ำนางนอน ทริปยังไม่จบเดินทางไปเที่ยวต่อ ที่เที่ยวแม่สาย กันต่อเลย',
    gps: 'Unnamed Road ตำบล โป่งผา อำเภอแม่สาย เชียงราย 57130',
    maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.0391187048917!2d99.8674341!3d20.3812769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d6f5bb1e1220c7%3A0xa5068562c8c64890!2z4Lit4Li44LiX4Lii4Liy4LiZ4LmB4Lir4LmI4LiH4LiK4Liy4LiV4Li04LiW4LmJ4Liz4Lir4Lil4Lin4LiHLeC4guC4uOC4meC4meC5ieC4s-C4meC4suC4h-C4meC4reC4mQ!5e0!3m2!1sth!2sth!4v1683872821342!5m2!1sth!2sth" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    score: '4.3',
    star: ` <i class="fa-solid fa-star check"></i>
                            <i class="fa-solid fa-star check"></i>
                            <i class="fa-solid fa-star check"></i>
                            <i class="fa-solid fa-star check"></i>
                            <i class="fa-solid fa-star"></i>`,
    timepopen: '08:00',
    timeclose: '17:00',
    web: 'https://roijang.com/%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2/#2-%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%99%E0%B8%96%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87-%E0%B8%82%E0%B8%B8%E0%B8%99%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%99%E0%B8%B2%E0%B8%87%E0%B8%99%E0%B8%AD%E0%B8%99'
},
{
    id: 1,
    img: 'img/doy-sa-ngo.jpg',
    name: 'ดอยสะโง้',
    des: 'มาค่าไปเที่ยวดอยสะโง้ ที่เที่ยวเชียงแสน ในอำเภอเชียงแสน จังหวัดเชียงราย เดินทางสะดวก วิวด้านบนสวยงาม อากาศดี อยากฟินไปกับที่เที่ยวต้องห้ามพลาด เป็นอีกดอยมีครบจบที่เดียว มีบริการตอบโจทย์ตามความต้องการของหลายคนแน่นอน มีร้านกาแฟรสชาติอร่อย หวานหอมกลมกล่อมให้นั่งชิล และยังมีที่พักบนดอยระดับห้าดาว บรรยากาศร่มรื่นสวยงาม ที่เที่ยวเชียงแสน วิวธรรมชาติสุดปัง ไว้คอยบริการ มีจุดชมวิวสวยงามสามารถมองเห็นวิวทิวทัศน์ ทั้งดินแดนไทย ลาว และ พม่า อย่างชัดเจน เก็บประเป๋าเตรียมวันลา วางแผนเที่ยวลองแวะมาพักผ่อนกันได้ ที่ ดอยสะโง้ รับประกันความสนุกค่า',
    gps: 'ตำบล ศรีดอนมูล อำเภอ เชียงแสน เชียงราย 57150',
    maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14964.183653485436!2d100.01833330000001!3d20.33972185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d65c720f1c083f%3A0x4b6cef94381b0db2!2sDoi%20Sa-Ngo!5e0!3m2!1sth!2sth!4v1683873610736!5m2!1sth!2sth" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    score: '4.6',
    star: ` <i class="fa-solid fa-star check"></i>
                            <i class="fa-solid fa-star check"></i>
                            <i class="fa-solid fa-star check"></i>
                            <i class="fa-solid fa-star check"></i>
                            <i class="fa-solid fa-star check"></i>`,
    timepopen: '09:30',
    timeclose: '19:30',
    web: 'https://roijang.com/%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2/#3-%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%AA%E0%B8%B0%E0%B9%82%E0%B8%87%E0%B9%89'
},
{
    id: 2,
    img: 'img/wat-rong-knun.jpg',
    name: 'วัดร่องขุน',
    des: 'นึกถึงวัดสวยๆ ต้องวัดร่องขุนเลยค่า วัดสวยในเชียงราย ที่เที่ยวเชียงราย ด้วยสถาปัตยกรรมที่มีความสวยงามสะดุดตา เรียกว่าถ่ายรูปมุมไหนก็สวยปังแน่นอน มาค่าทุกคนมากราบไหว้สักการะสิ่งศักดิ์สิทธิ์ที่ วัดร่องขุ่น เพื่อเป็นสิริมงคลต่อการใช้ชีวิตมาสะสมแต้มบุญกันค่า ซึ่งที่วัดแห่งนี้มีเอกลักษณ์ความงดงามของอุโบสถสีขาวประดับด้วยกระจกสีเงินแวววาว และลวดลายปูนปั้นอันวิจิตรเป็นเอกลักษณ์ รวมถึงประดับด้วยภาพจิตรกรรมฝาผนังที่งดงามประณีตที่เห็นแล้วต้องตะลึงมรดกแห่งแผ่นดิน เพื่อสร้างสรรค์วัดแห่งนี้ให้กลายเป็นศิลปะที่ยิ่งใหญ่ระดับนานาชาติ ถือเป็นแลนด์มาร์กในเชียงรายที่นักท่องเที่ยวต้องเดินทางมาสัมผัสสักครั้ง นอกจากอิ่มบุญแล้วยังได้รูปสวยๆ หลังจากจบทริปแน่นอนค่า',
    gps: 'ป่าอ้อดอนชัย อำเภอเมืองเชียงราย เชียงราย 57000',
    maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.394196064006!2d99.7627085!3d19.8232669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d7b7dfce59940f%3A0x2afcd50d8eacb7a3!2z4Lin4Lix4LiU4Lij4LmI4Lit4LiH4LiC4Li44LmI4LiZ!5e0!3m2!1sth!2sth!4v1683874093494!5m2!1sth!2sth" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    score: '4.6',
    star: ` <i class="fa-solid fa-star check"></i>
                            <i class="fa-solid fa-star check"></i>
                            <i class="fa-solid fa-star check"></i>
                            <i class="fa-solid fa-star check"></i>
                            <i class="fa-solid fa-star check"></i>`,
    timepopen: '08:00',
    timeclose: '17:00',
    web: 'https://roijang.com/%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2/#25-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%A3%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B8%B8%E0%B8%99'
},
{
    id: 3,
    img: 'img/cafe-waiting-for-you.jpg',
    name: 'I’m waiting for you Cafe & Bakery',
    des: 'มาค่าวันนี้แอดจะพาไปเช็คอิน เชียงรายที่เที่ยว คาเฟ่ นั่งชิลๆ ที่ I’m waiting for you Cafe & Bakery สำหรับใครอยากจะไปนั่งจิบกาแฟทานขนม หรือจะถ่ายรูปท่ามกลางคาเฟ่สไตล์มินิมอล ตกแต่งน่ารัก มีมุมถ่ายรูปเพียบ ถือเป็นเสน่ห์ของร้านที่ดึงดูดสายตาของทุกคนที่เข้ามา ทั้งโซนด้านในร้านและนอกร้าน มีบริการทั้งเครื่องดื่มหลากหลายเมนู โดยนิยามของทางร้านเน้นรสชาติหวาน อร่อยกลมกล่อมและที่พลาดไม่ได้ขนมเค้ก เบเกอรี่คืออร่อยมากๆ กินแล้วจะติดใจต้องติดไม้ติดมือไปฝากคนที่บ้าน ที่ I’m waiting for you Cafe & Bakery เขามีมีบริการจัดเป็นเซ็ตของขวัญใส่กล่องสุด cute เผื่ออยากทานเค้กหลายๆ รสชาติ และให้เป็นของขวัญ ของฝาก เซ็ตนี้แอดแนะนำเลยย ใครตามหาคาเฟ่ที่บรรยากาศรายล้อมไปด้วยความมินิมอลมาที่ I’m waiting for you Cafe & Bakery มาถึงเชียงราย ใครสายคาเฟ่ห้ามพลาดนะค่าเพิ่มมากขึ้น ตกแต่งน่ารัก มีมุมถ่ายรูปเยอะแยะ',
    gps: 'ถ.หนองด่าน-ฮ่องอ้อ ตำบล รอบเวียง เมือง เชียงราย 57000',
    maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.5630947680997!2d99.7824771!3d19.900662399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d7071521bd7e67%3A0xa2a5ff7dc36f4752!2sI&#39;m%20waiting%20for%20you%20-%20Caf%C3%A9%20%26%20Bakery!5e0!3m2!1sth!2sth!4v1683874401640!5m2!1sth!2sth" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    score: '4.8',
    star: ` <i class="fa-solid fa-star check"></i>
                            <i class="fa-solid fa-star check"></i>
                            <i class="fa-solid fa-star check"></i>
                            <i class="fa-solid fa-star check"></i>
                            <i class="fa-solid fa-star check"></i>`,
    timepopen: '08:30',
    timeclose: '17:30',
    web: 'https://roijang.com/%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2/#8-i%E2%80%99m-waiting-for-you-cafe-amp-bakery'
},
];




$(document).ready(() => {
    var html = '';
    for (let i = 0; i < travel.length; i++) {
        html += ` <div class="card">
                    <img src="${travel[i].img}" alt="">
                    <br>
                    <h3 style="font-family: 'Prompt', sans-serif;">${travel[i].name}</h3>
                    <div class="content">
                        <div class="star">
                            ${travel[i].star}
                        </div>
                        <span onclick="openModal(${travel[i].id})">read more</span>
                    </div>
                </div>`
    }
    document.querySelector('.card-container').innerHTML = html;
});



const openModal = ((index) => {
    console.log(travel[index])
    document.querySelector("#modal").style.display = 'flex';
    document.querySelector('.img-modal').src = travel[index].img;
    document.querySelector('.name-modal').innerText = travel[index].name;
    document.querySelector('.score-modal').innerText = travel[index].score;
    document.querySelector('.star-modal').innerHTML = travel[index].star;
    document.querySelector('.timeopen-modal').innerText = travel[index].timepopen;
    document.querySelector('.timeclose-modal').innerText = travel[index].timeclose;
    document.querySelector('.gps-modal').innerText = travel[index].gps;
    document.querySelector('.des-modal').innerText = travel[index].des;
    document.querySelector('.map-modal').innerHTML = travel[index].maps;
    document.querySelector('.credit').href = travel[index].web;

})


const closeModal = (() => {
    document.querySelector('#modal').style.display = 'none';
    document.getElementById("maps-show").checked = false;
})

const list = document.querySelectorAll('.nav li a');
function active() {
    list.forEach((i) => {
        i.classList.remove('active');
        header.classList.remove('active');
    });
    this.classList.add('active');
}


list.forEach((i) => {

    i.addEventListener('click', active)
});

let header = document.querySelector('header');
let menuToggle = document.querySelector('.menuToggle');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
    header.classList.toggle('black', window.scrollY > 0);
    menuToggle.classList.toggle('black', window.scrollY > 0);
});

menuToggle.onclick = function () {
    header.classList.toggle('active');
}


$('.owl-carousel').owlCarousel({
    loop: true,
    padding: 10,
    margin:10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            center:true
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
