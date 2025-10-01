const footballers = [
  {
    name: "Erling Haaland",
    image:
      "https://images.teamtalk.com/content/uploads/2022/10/02160859/erling-haaland-man-city-2022.jpg",
  },
  {
    name: "Lionel Messi",
    image:
      "https://s.france24.com/media/display/451ed2b8-eed6-11ea-afdd-005056bf87d6/w:1280/p:4x3/messi-1805.jpg",
  },
  {
    name: "Kylian Mbappé",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*SH23000Oy7JRqyslNyPGoA.jpeg",
  },
  {
    name: "Cristiano Ronaldo",
    image: "https://gymnation.com/media/bgjgtc1d/cr7-2008.jpg",
  },
  {
    name: "Pelé",
    image:
      "https://static01.nyt.com/images/2022/12/22/multimedia/00pele-photos-1-32de/00pele-photos-1-32de-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
  },
  {
    name: "Zinedine Zidane",
    image:
      "https://i.pinimg.com/564x/f2/9b/ae/f29baed184ebf3c6fa25d82fc259d873.jpg",
  },
  {
    name: "Paolo Maldini",
    image:
      "https://w0.peakpx.com/wallpaper/809/437/HD-wallpaper-paolo-maldini-milan.jpg",
  },
  {
    name: "Iker Casillas",
    image:
      "https://assets.realmadrid.com/is/image/realmadrid/1330190795142?$Mobile$&fit=wrap",
  },
  {
    name: "Karim Benzema",
    image:
      "https://www.shutterstock.com/editorial/image-editorial/MdTdA513N1zaA6y8MDkxMzA=/karim-benzema-real-madrid-celebrates-scoring-opening-440nw-10484600u.jpg",
  },
  {
    name: "Sergio Ramos",
    image: "https://a.espncdn.com/photo/2020/0304/r674744_1296x1296_1-1.jpg",
  },
  {
    name: "David Beckham",
    image:
      "https://preview.redd.it/david-beckham-made-his-debut-for-manchester-united-32-years-v0-zbxrdf4k4jqd1.jpg?width=640&crop=smart&auto=webp&s=070c4d4f721791c4225b7183ba66522bee36a873",
  },
  {
    name: "Lamine Yamal",
    image:
      "https://foto.sondakika.com/haber/2025/07/14/dogum-gununde-cuce-bireyleri-calistiran-yamal-18846835_5007_amp.jpg",
  },
  {
    name: "Pedri",
    image:
      "https://www.fcbarcelona.com/fcbarcelona/photo/2023/09/25/08593578-2837-4af2-9235-e3a56e3db23c/2023-09-16_FCBvsBETIS_97.jpg",
  },
  {
    name: "Robert Lewandowski",
    image:
      "https://www.aljazeera.com/wp-content/uploads/2025/01/2025-01-21T220448Z_1474946714_UP1EL1L1PBY5X_RTRMADP_3_SOCCER-CHAMPIONS-SLB-BAR-REPORT-1737497355.jpg?resize=770%2C513&quality=80",
  },
  {
    name: "Jude Bellingham",
    image:
      "https://www.economist.com/content-assets/images/20230121_BLP510.jpg",
  },
  {
    name: "Neymar Jr",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/220930165943-01-neymar.jpg?c=16x9&q=h_833,w_1480,c_fill",
  },
  {
    name: "Luis Suárez",
    image:
      "https://www.fcbarcelona.com/fcbarcelona/photo/2020/09/06/c7355114-245c-48a3-b5fe-0cea11dc9379/SUAREZ-56-min.jpg",
  },
  {
    name: "Andrés Iniesta",
    image:
      "https://s.yimg.com/ny/api/res/1.2/f_SI1D7ZhLzV2drrn948LA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNztjZj13ZWJw/https://media.zenfs.com/en/football_espana_articles_993/2f146b947dd93dc57899e2174a835bf8",
  },
  {
    name: "Xavi Hernández",
    image:
      "https://platform.barcablaugranes.com/wp-content/uploads/sites/21/chorus/uploads/chorus_asset/file/25819505/2191173318.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C99.987501562305&w=2400",
  },
  {
    name: "Virgil van Dijk",
    image:
      "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0803%2Fr1205648_1296x729_16%2D9.jpg",
  },
  {
    name: "Kevin De Bruyne",
    image:
      "https://i.guim.co.uk/img/media/695be08ccc972411834346ccb50f1b5d4411ba22/49_55_2451_1471/master/2451.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a7e210f7b4721335a9eca1b7ee2d5660",
  },
  {
    name: "Ronaldinho",
    image:
      "https://media.licdn.com/dms/image/v2/D4E12AQHmcaBrpXzs0g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1683063381087?e=2147483647&v=beta&t=uI25wJBqJOO7fcCNg2etXqte7kMJ5hAj7nKhozG35KQ",
  },
  {
    name: "Johan Cruyff",
    image:
      "https://cdn.artphotolimited.com/images/60913d60bd40b85323893a87/1000x1000/der-beruehmte-johan-cruyff-vom-fc-barcelona.jpg",
  },
  {
    name: "Lautaro Martínez",
    image:
      "https://icdn.sempreinter.com/wp-content/uploads/2025/05/Lautaro-Martinez-Inter-Milan-4.jpg",
  },
];

let isProgramStopped = false;
let currentFootballer = null;

function showRandomImage() {

  const randomButton = document.getElementById("randomButton");
  randomButton.classList.add("clicked");

  
  setTimeout(() => {
    randomButton.classList.remove("clicked");
  }, 300);
 

  const userName = document.getElementById("userName").value.trim();
  if (!userName) {
    alert("Please enter your name before showing an image!");
    return;
  }
  if (isProgramStopped) {
    showFinalResult();
    return;
  }
  if (footballers.length === 0) {
    alert("Please add images to the collection!");
    return;
  }

  const randomIndex = Math.floor(Math.random() * footballers.length);
  currentFootballer = footballers[randomIndex];

  const imageElement = document.getElementById("randomImage");
  const playerNameElement = document.getElementById("playerName");
  const progressContainer = document.getElementById("progressContainer");
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");

  // Hide image and player name, show progress bar
  imageElement.classList.remove("show");
  playerNameElement.classList.remove("show");
  progressContainer.classList.add("show");
  progressBar.style.width = "0%";
  progressText.textContent = "Loading...";

  // Simulate progress
  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress > 90) progress = 90;
    progressBar.style.width = progress + "%";
    progressText.textContent = Math.floor(progress) + "%";
  }, 100);

  imageElement.src = currentFootballer.image;

  imageElement.onload = () => {
    // Complete the progress bar
    clearInterval(progressInterval);
    progressBar.style.width = "100%";
    progressText.textContent = "100%";

    setTimeout(() => {
      progressContainer.classList.remove("show");
      imageElement.classList.add("show");
      playerNameElement.textContent = currentFootballer.name;
      playerNameElement.classList.add("show");
      isProgramStopped = true;
      showFinalResult();
    }, 500);
  };

  imageElement.onerror = () => {
    clearInterval(progressInterval);
    progressContainer.classList.remove("show");
    alert("Failed to load image. Please try again.");
    isProgramStopped = false;
  };
}

function showFinalResult() {
  document
    .querySelectorAll(
      'button:not([onclick="resetProgram()"]):not(.theme-toggle)'
    )
    .forEach((button) => (button.disabled = true));
  const userName = document.getElementById("userName").value.trim();
  alert(
    `${userName}, you are ${currentFootballer.name}! The program has stopped. Click Reset to start again.`
  );
}

function resetProgram() {
  isProgramStopped = false;
  currentFootballer = null;
  document
    .querySelectorAll("button")
    .forEach((button) => (button.disabled = false));

  const imageElement = document.getElementById("randomImage");
  const playerNameElement = document.getElementById("playerName");
  const progressContainer = document.getElementById("progressContainer");

  imageElement.src = "";
  imageElement.classList.remove("show");
  playerNameElement.textContent = "";
  playerNameElement.classList.remove("show");
  progressContainer.classList.remove("show");
  document.getElementById("userName").value = "";

  alert(
    "Program has been reset. Please enter your name to show a new random footballer."
  );
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
}


document.documentElement.setAttribute("data-theme", "dark");
