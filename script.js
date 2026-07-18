const enter = document.getElementById("enter");
const loader = document.getElementById("loader");
const website = document.getElementById("website");
const music = document.getElementById("music");

// مستوى الصوت
music.volume = 0.35;

// دخول الموقع
enter.addEventListener("click", () => {

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
