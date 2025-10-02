const footballers = [
  {
    name: "Erling Haaland",
    image: "https://images.teamtalk.com/content/uploads/2022/10/02160859/erling-haaland-man-city-2022.jpg",
    fact: "Norwegian striker, known for his insane goal-scoring at Manchester City.",
  },
  {
    name: "Lionel Messi",
    image: "https://s.france24.com/media/display/451ed2b8-eed6-11ea-afdd-005056bf87d6/w:1280/p:4x3/messi-1805.jpg",
    fact: "Argentine magician, 8-time Ballon d'Or winner, 2022 World Cup champion.",
  },
  {
    name: "Kylian Mbappé",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*SH23000Oy7JRqyslNyPGoA.jpeg",
    fact: "French speedster who scored a hat-trick in the 2022 World Cup final.",
  },
  {
    name: "Cristiano Ronaldo",
    image: "https://gymnation.com/media/bgjgtc1d/cr7-2008.jpg",
    fact: "Portuguese legend, 5-time Ballon d'Or winner, CR7 brand icon.",
  },
  {
    name: "Pelé",
    image: "https://static01.nyt.com/images/2022/12/22/multimedia/00pele-photos-1-32de/00pele-photos-1-32de-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    fact: "Brazilian king, only player with 3 World Cups.",
  },
  {
    name: "Diego Maradona",
    image: "https://i.pinimg.com/564x/f2/9b/ae/f29baed184ebf3c6fa25d82fc259d873.jpg",
    fact: "Famous for the 'Hand of God' and 1986 World Cup glory.",
  },
  {
    name: "Paolo Maldini",
    image: "https://w0.peakpx.com/wallpaper/809/437/HD-wallpaper-paolo-maldini-milan.jpg",
    fact: "AC Milan legend, regarded as one of the greatest defenders ever.",
  },
  {
    name: "Zinedine Zidane",
    image: "https://assets.realmadrid.com/is/image/realmadrid/1330190795142?$Mobile$&fit=wrap",
    fact: "French midfield genius, scored twice in the 1998 World Cup final.",
  },
  {
    name: "Karim Benzema",
    image: "https://www.shutterstock.com/editorial/image-editorial/MdTdA513N1zaA6y8MDkxMzA=/karim-benzema-real-madrid-celebrates-scoring-opening-440nw-10484600u.jpg",
    fact: "2022 Ballon d'Or winner, Real Madrid’s lethal striker.",
  },
  {
    name: "Wayne Rooney",
    image: "https://a.espncdn.com/photo/2020/0304/r674744_1296x1296_1-1.jpg",
    fact: "Manchester United's all-time top scorer, fierce competitor.",
  },
  {
    name: "Ronaldinho",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Ronaldinho_2019.jpg",
    fact: "Brazilian wizard, loved for his flair, tricks, and smile.",
  },
  {
    name: "David Beckham",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/David_Beckham_2019.jpg",
    fact: "England star, free-kick specialist, global fashion icon.",
  },
  {
    name: "Neymar Jr.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Neymar_2018.jpg",
    fact: "Brazilian dribbler, famous for skills and trickery.",
  },
  {
    name: "Andrés Iniesta",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Andr%C3%A9s_Iniesta_2018.jpg",
    fact: "Spain’s midfield brain, scored the 2010 World Cup winning goal.",
  },
  {
    name: "Xavi Hernández",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Xavi_2011.jpg",
    fact: "Barcelona and Spain legend, master of passing and vision.",
  },
  {
    name: "Thierry Henry",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Thierry_Henry_2012.jpg",
    fact: "Arsenal legend, Premier League icon, known for silky finishing.",
  },
  {
    name: "Roberto Carlos",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Roberto_Carlos_2011.jpg",
    fact: "Brazilian left-back famous for his thunderbolt free-kicks.",
  },
  {
    name: "Luka Modrić",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Luka_Modric_2018.jpg",
    fact: "Croatian playmaker, 2018 Ballon d’Or winner.",
  },
  {
    name: "Mohamed Salah",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Mohamed_Salah_2018.jpg",
    fact: "Egyptian King of Liverpool, blistering pace and goals.",
  },
  {
    name: "Didier Drogba",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Didier_Drogba_2015.jpg",
    fact: "Chelsea’s big-game striker, loved for his clutch goals.",
  }
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
  const playerFactElement = document.getElementById("playerFact");
  const progressContainer = document.getElementById("progressContainer");
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");

  imageElement.classList.remove("show");
  playerNameElement.classList.remove("show");
  playerFactElement.classList.remove("show");
  progressContainer.classList.add("show");
  progressBar.style.width = "0%";
  progressText.textContent = "Loading...";

  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress > 90) progress = 90;
    progressBar.style.width = progress + "%";
    progressText.textContent = Math.floor(progress) + "%";
  }, 100);

  imageElement.src = currentFootballer.image;

  imageElement.onload = () => {
    clearInterval(progressInterval);
    progressBar.style.width = "100%";
    progressText.textContent = "100%";

    setTimeout(() => {
      progressContainer.classList.remove("show");
      imageElement.classList.add("show");
      playerNameElement.textContent = currentFootballer.name;
      playerFactElement.textContent = currentFootballer.fact;
      playerNameElement.classList.add("show");
      playerFactElement.classList.add("show");
      isProgramStopped = true;
      showFinalResult();
    }, 500);
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
    `${userName}, you are ${currentFootballer.name}! ${currentFootballer.fact} The program has stopped. Click Reset to start again.`
  );
}

function resetProgram() {
  isProgramStopped = false;
  currentFootballer = null;
  document
    .querySelectorAll("button")
    .forEach((button) => (button.disabled = false));

  document.getElementById("randomImage").src = "";
  document.getElementById("playerName").textContent = "";
  document.getElementById("playerFact").textContent = "";
  document.getElementById("progressContainer").classList.remove("show");
  document.getElementById("userName").value = "";

  alert("Program has been reset. Please enter your name to show a new random footballer.");
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
}

document.documentElement.setAttribute("data-theme", "dark");
