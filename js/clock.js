const body = document.body;
const nowBox = document.querySelector("#now-time");

const sunriseBg = [
    "https://www.collinsdictionary.com/images/full/sunrise_527304829_1000.jpg?version=4.0.211",
    "https://fdn.gsmarena.com/imgroot/news/16/05/sunrise-shutting-down/inline/gsmarena_001.png",
    "https://www.farmersalmanac.com/wp-content/uploads/2020/11/sunrise.jpg",
    "https://xoxobella.com/wp-content/uploads/2021/06/sunrise_sunset_captions_puns_quotes_instagram-7.jpg",
    "https://kennethsorensen.dk/wp-content/uploads/2020/09/sunrise.jpg"
];
const dayBg = [
    "https://c.pxhere.com/images/e3/22/c10fdee9d8cad74792615b584de5-1627123.jpg!d",
    "https://jooinn.com/images/sunny-day-1.jpg",
    "https://opengameart.org/sites/default/files/Daytime_Background_1024x800.png",
    "https://jooinn.com/images1280_/corn-fields-under-white-clouds-with-blue-sky-during-daytime-2.jpg",
    "https://images.unsplash.com/photo-1564001144768-dafb9f816e53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
];
const sunsetBg = [
    "https://cdn.pixabay.com/photo/2018/08/08/11/19/sunset-3591887_1280.jpg",
    "https://c.pxhere.com/images/30/29/8342196ebf86705e94d1426041fa-1611809.jpg!d",
    "https://cdn.pixabay.com/photo/2020/01/11/13/11/sunset-4757480_1280.jpg",
    "https://libreshot.com/wp-content/uploads/2020/11/sunset-D71_7885-free-image-1536x1024.jpg",
    "https://www.sprayedout.com/wp-content/uploads/2020/11/countryside-nature-landscape-sunset-web.jpg"
];
const nightBg = [
    "https://geographical.co.uk/media/k2/items/cache/eb8c0a46c2085216dea7d19f92a60fd7_XL.jpg",
    "https://cdn.eso.org/images/screen/dave-jones-14.jpg",
    "https://cms.accuweather.com/wp-content/uploads/2020/01/vincentiu-solomon-ln5drpv_ImI-unsplash.jpg?w=632",
    "https://blog.mystart.com/wp-content/uploads/IN_Night_Sky_5afef35da16770ec226a7a8d.jpeg",
    "https://blog.mystart.com/wp-content/uploads/IN_Night_Sky_5afc572da16770ec226a7a0a.jpeg"
];

function updateClock() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const hour = now.getHours();
    const min = String(now.getMinutes()).padStart(2, "0");
    const sec = String(now.getSeconds()).padStart(2, "0");

    nowBox.innerHTML = `${month}월 ${date}일 ${hour}:${min}:${sec}`;
}
function randomBg() {
    const now = new Date();
    const hour = now.getHours();
    const randomNumber = Math.floor(Math.random() * sunriseBg.length);
    let type = "";

    if(hour >= 4 && hour < 9) {
        type = "sunrise";
        body.classList.remove("darkmode");
    }
    else if(hour >= 9 && hour < 17) {
        type = "day";
        body.classList.remove("darkmode");
    }
    else if(hour >= 17 && hour < 21) {
        type = "sunset";
        body.classList.remove("darkmode");
    }
    else {
        type = "night";
        body.classList.add("darkmode");
    }

    switch(type) {
        case "sunrise" :
            body.style.backgroundImage = `url(${sunriseBg[randomNumber]})`;
            break;
        case "day" :
            body.style.backgroundImage = `url(${dayBg[randomNumber]})`;
            break;
        case "sunset" :
            body.style.backgroundImage = `url(${sunsetBg[randomNumber]})`;
            break;
        case "night" :
            body.style.backgroundImage = `url(${nightBg[randomNumber]})`;
            break;
    }
}

updateClock();
setInterval(updateClock, 1000);

randomBg();
setInterval(randomBg, 5000);