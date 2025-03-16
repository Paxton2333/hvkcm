document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('感谢您的消息！我们将尽快回复。');
        contactForm.reset();
    });
});

const texts = [
    "每一个人的存在都有价值 -- P4XT0N",
    "kionababy是老板娘 -- kionababy",
    "哈夫克x九重天yyds！ -- YULUO",
    "社长是帅哥 -- chenaiCN",
    "胡桃天下第一可爱 -- hnnnnnnh",
    "我是胡桃的狗 -- HTDG",
    "哎哟你干嘛哈哈 -- Jueshadada",
    "没有社长就没有哈夫克😭😭😭😭 -- weiyuling23333",
    "社区观光客 -- Tanghelove",
    "社长是出生 -- xiao_xiao_A",
    "让他们说去吧，经历只属于自己 -- Yankon",
    "加强天道超 -- ssssongyi",
    "我，大道之行！ -- shengge",
    "背负火影之名 -- Li_xiang",
    "加强深蓝！！！！ -- P4XT0N"
];

function updateRandomText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    document.getElementById('random-text-content').textContent = texts[randomIndex];
}

// Volume control (Placeholder without actual audio control)
const volumeButton = document.getElementById('volume-button');
let muted = false;

volumeButton.addEventListener('click', () => {
    muted = !muted;
    volumeButton.textContent = muted ? '🔊' : '🔇'; // Toggle icon
    // Actual audio manipulation would go here if audio was included.
});