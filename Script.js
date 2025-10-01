const footballers = [
    {
        name: "Erling Haaland",
        image: 'https://images.teamtalk.com/content/uploads/2022/10/02160859/erling-haaland-man-city-2022.jpg'
    },
    {
        name: "Lionel Messi",
        image: 'https://s.france24.com/media/display/451ed2b8-eed6-11ea-afdd-005056bf87d6/w:1280/p:4x3/messi-1805.jpg'
    },
    {
        name: "Kylian Mbappé",
        image: 'https://miro.medium.com/v2/resize:fit:1400/1*SH23000Oy7JRqyslNyPGoA.jpeg'
    },
    {
        name: "Cristiano Ronaldo",
        image: 'https://gymnation.com/media/bgjgtc1d/cr7-2008.jpg'
    },
    {
        name: "Pelé",
        image: 'https://static01.nyt.com/images/2022/12/22/multimedia/00pele-photos-1-32de/00pele-photos-1-32de-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
    },
    {
        name: "Ronaldinho",
        image: 'https://i.pinimg.com/564x/f2/9b/ae/f29baed184ebf3c6fa25d82fc259d873.jpg'
    },
    {
        name: "Paolo Maldini",
        image: 'https://w0.peakpx.com/wallpaper/809/437/HD-wallpaper-paolo-maldini-milan.jpg'
    },
    {
        name: "Zinedine Zidane",
        image: 'https://assets.realmadrid.com/is/image/realmadrid/1330190795142?$Mobile$&fit=wrap'
    },
    {
        name: "Karim Benzema",
        image: 'https://www.shutterstock.com/editorial/image-editorial/MdTdA513N1zaA6y8MDkxMzA=/karim-benzema-real-madrid-celebrates-scoring-opening-440nw-10484600u.jpg'
    },
    {
        name: "Kevin De Bruyne",
        image: 'https://a.espncdn.com/photo/2020/0304/r674744_1296x1296_1-1.jpg'
    },
    {
        name: "David Beckham",
        image: 'https://preview.redd.it/david-beckham-made-his-debut-for-manchester-united-32-years-v0-zbxrdf4k4jqd1.jpg?width=640&crop=smart&auto=webp&s=070c4d4f721791c4225b7183ba66522bee36a873'
    },
    {
        name: "Lamine Yamal",
        image: 'https://foto.sondakika.com/haber/2025/07/14/dogum-gununde-cuce-bireyleri-calistiran-yamal-18846835_5007_amp.jpg'
    },
    {
        name: "Pedri",
        image: 'https://www.fcbarcelona.com/fcbarcelona/photo/2023/09/25/08593578-2837-4af2-9235-e3a56e3db23c/2023-09-16_FCBvsBETIS_97.jpg'
    },
    {
        name: "Robert Lewandowski",
        image: 'https://www.aljazeera.com/wp-content/uploads/2025/01/2025-01-21T220448Z_1474946714_UP1EL1L1PBY5X_RTRMADP_3_SOCCER-CHAMPIONS-SLB-BAR-REPORT-1737497355.jpg?resize=770%2C513&quality=80'
    },
    {
        name: "Virgil van Dijk",
        image: 'https://www.economist.com/content-assets/images/20230121_BLP510.jpg'
    },
    {
        name: "Neymar Jr",
        image: 'https://media.cnn.com/api/v1/images/stellar/prod/220930165943-01-neymar.jpg?c=16x9&q=h_833,w_1480,c_fill'
    },
    {
        name: "Luis Suárez",
        image: 'https://www.fcbarcelona.com/fcbarcelona/photo/2020/09/06/c7355114-245c-48a3-b5fe-0cea11dc9379/SUAREZ-56-min.jpg'
    },
    {
        name: "Gavi",
        image: 'https://platform.barcablaugranes.com/wp-content/uploads/sites/21/chorus/uploads/chorus_asset/file/25819505/2191173318.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C99.987501562305&w=2400'
    },
    {
        name: "Vinícius Jr",
        image: 'https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0803%2Fr1205648_1296x729_16%2D9.jpg'
    },
    {
        name: "Mohamed Salah",
        image: 'https://i.guim.co.uk/img/media/695be08ccc972411834346ccb50f1b5d4411ba22/49_55_2451_1471/master/2451.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a7e210f7b4721335a9eca1b7ee2d56'
    },
    {
        name: "Jude Bellingham",
        image: 'https://media.licdn.com/dms/image/v2/D4E12AQHmcaBrpXzs0g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1683063381087?e=2147483647&v=beta&t=uI25wJBqJOO7fcCNg2etXqte'
    },
    {
        name: "Johan Cruyff",
        image: 'https://cdn.artphotolimited.com/images/60913d60bd40b85323893a87/1000x1000/der-beruehmte-johan-cruyff-vom-fc-barcelona.jpg'
    },
    {
        name: "Lautaro Martínez",
        image: 'https://icdn.sempreinter.com/wp-content/uploads/2025/05/Lautaro-Martinez-Inter-Milan-4.jpg'
    }
];

let isProgramStopped = false;

// Theme functionality
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme on page load
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
}

function showRandomImage() {
    const userName = document.getElementById('userName').value.trim();
    if (!userName) {
        alert('Please enter your name before showing an image!');
        return;
    }
    if (isProgramStopped) {
        showFinalResult();
        return;
    }
    if (footballers.length === 0) {
        alert('Please add footballers to the collection!');
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * footballers.length);
    const selectedFootballer = footballers[randomIndex];
    
    const imageElement = document.getElementById('randomImage');
    const captionElement = document.getElementById('playerCaption');
    
    imageElement.src = selectedFootballer.image;
    captionElement.textContent = selectedFootballer.name;
    
    imageElement.classList.add('show');
    captionElement.classList.add('show');
    
    // Call showFinalResult after image is loaded
    imageElement.onload = () => {
        isProgramStopped = true;
        showFinalResult();
    };
}

function showFinalResult() {
    document.querySelectorAll('button:not([onclick="resetProgram()"])').forEach(button => button.disabled = true);
    const userName = document.getElementById('userName').value.trim();
    const playerName = document.getElementById('playerCaption').textContent;
    alert(`${userName ? userName + ', y' : 'Y'}ou are ${playerName}! This is the final result. Click Reset to try again.`);
}

function resetProgram() {
    isProgramStopped = false;
    document.querySelectorAll('button').forEach(button => button.disabled = false);
    
    const imageElement = document.getElementById('randomImage');
    const captionElement = document.getElementById('playerCaption');
    
    imageElement.src = '';
    imageElement.classList.remove('show');
    captionElement.textContent = '';
    captionElement.classList.remove('show');
    
    document.getElementById('userName').value = '';
    alert('Program has been reset. Please enter your name to discover your footballer!');
}

// Initialize theme when page loads
document.addEventListener('DOMContentLoaded', loadSavedTheme);
