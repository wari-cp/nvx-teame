const enter = document.getElementById("enter");
const loader = document.getElementById("loader");
const website = document.getElementById("website");
const music = document.getElementById("music");

const WEBHOOK_URL = "https://discord.com/api/webhooks/1528053611614048347/28NmiuGpQEDhlFMCF6Z1NQkdocpifXzLHjpp1gDVqCEaWZV-mkhKh7TE--hoxYyYsx8y";

// مستوى الصوت
music.volume = 0.35;

// دخول الموقع
enter.addEventListener("click", async () => {

let user = JSON.parse(localStorage.getItem("nvxUser"));

let username, age, game;

if (user) {
    username = user.username;
    age = user.age;
    game = user.game;
} else {
    username = prompt("👤 اكتب اسمك:");
    age = prompt("🎂 كم عمرك؟");
    game = prompt("🎮 ما هي لعبتك المفضلة؟");

    if (!username || !age || !game) {
        alert("يجب ملء جميع المعلومات.");
        return;
    }

    localStorage.setItem("nvxUser", JSON.stringify({
        username,
        age,
        game
    }));
        }

    await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            embeds: [{
embeds: [{
    title: "📝 تسجيل جديد في موقع TEAM NVX",
    description: "تم تسجيل عضو جديد عبر الموقع الرسمي.",
    color: 0x00BFFF,

    thumbnail: {
        url: "https://i.imgur.com/4M34hi2.png"
    },

    fields: [
        {
            name: "👤 الاسم",
            value: `**${username}**`,
            inline: true
        },
        {
            name: "🎂 العمر",
            value: `**${age}**`,
            inline: true
        },
        {
            name: "🎮 اللعبة المفضلة",
            value: `**${game}**`,
            inline: false
        }
    ],

    footer: {
        text: "TEAM NVX • Website Register"
    },

    timestamp: new Date().toISOString()
}]
            }]
        })
    });

    music.play().catch(() => {});

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
        website.style.display = "block";
    }, 800);

});


// ظهور العناصر عند النزول
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

});

document.querySelectorAll(".card,.about-box,.gallery img").forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(60px)";
    el.style.transition=".8s";

    observer.observe(el);

});

// نافذة TikTok

function openTikTokMenu(){

document.getElementById("tiktokMenu").style.display="flex";

}

function closeTikTokMenu(){

document.getElementById("tiktokMenu").style.display="none";

}

// إغلاق النافذة عند الضغط خارجها

window.onclick=function(e){

const popup=document.getElementById("tiktokMenu");

if(e.target===popup){

popup.style.display="none";

}

};

// تغيير لون القائمة عند النزول

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>80){

nav.style.background="rgba(0,0,0,.85)";

}else{

nav.style.background="rgba(0,0,0,.45)";

}

});

// تأثير كتابة العنوان

const title=document.querySelector(".hero h1");

if(title){

title.animate([

{opacity:0,transform:"translateY(-40px)"},

{opacity:1,transform:"translateY(0)"}

],{

duration:1200,

fill:"forwards"

});

                    }
