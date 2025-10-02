const footballers = [
  {
    name: "Erling Haaland",
    image: "https://images.teamtalk.com/content/uploads/2022/10/02160859/erling-haaland-man-city-2022.jpg",
    position: "Forward",
    bio: "Norwegian striking sensation known for his immense speed, strength, and an insane goal-scoring record, defining a new generation of centre-forwards.",
    achievements: ["2x Premier League Golden Boot", "UEFA Champions League Winner", "Premier League Champion"],
  },
  {
    name: "Lionel Messi",
    image: "https://s.france24.com/media/display/451ed2b8-eed6-11ea-afdd-005056bf87d6/w:1280/p:4x3/messi-1805.jpg",
    position: "Forward",
    bio: "The Argentine magician, widely regarded as the greatest player of all time, known for his dribbling, vision, and prolific goal-scoring from the right wing.",
    achievements: ["8x Ballon d'Or Winner", "FIFA World Cup Champion (2022)", "4x UEFA Champions League Winner"],
  },
  {
    name: "Kylian Mbappé",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*SH23000Oy7JRqyslNyPGoA.jpeg",
    position: "Forward",
    bio: "A French speedster and generational talent known for his blistering pace and clinical finishing, leading the next era of global football.",
    achievements: ["FIFA World Cup Champion (2018)", "6x Ligue 1 Champion", "World Cup Final Hat-trick (2022)"],
  },
  {
    name: "Cristiano Ronaldo",
    image: "https://gymnation.com/media/bgjgtc1d/cr7-2008.jpg",
    position: "Forward",
    bio: "The Portuguese legend, an iconic global superstar known for his unmatched athleticism, aerial ability, and relentless pursuit of goals and records.",
    achievements: ["5x Ballon d'Or Winner", "5x UEFA Champions League Winner", "European Championship Winner (2016)"],
  },
  {
    name: "Pelé",
    image: "https://static01.nyt.com/images/2022/12/22/multimedia/00pele-photos-1-32de/00pele-photos-1-32de-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    position: "Forward",
    bio: "The Brazilian 'King,' a global icon who remains the only player in history to win three FIFA World Cups, revolutionizing the sport with his flair and athleticism.",
    achievements: ["3x FIFA World Cup Winner", "FIFA Player of the Century", "Guinness World Record for career goals"],
  },
  {
    name: "Diego Maradona",
    image: "https://i.pinimg.com/564x/f2/9b/ae/f29baed184ebf3c6fa25d82fc259d873.jpg",
    position: "Attacking Midfielder",
    bio: "The unforgettable Argentine creative genius, famous for the 'Hand of God' goal and single-handedly leading Argentina to World Cup glory in 1986.",
    achievements: ["FIFA World Cup Champion (1986)", "2x Serie A Champion", "FIFA Goal of the Century"],
  },
  {
    name: "Paolo Maldini",
    image: "https://w0.peakpx.com/wallpaper/809/437/HD-wallpaper-paolo-maldini-milan.jpg",
    position: "Defender",
    bio: "The AC Milan legend, regarded as one of the greatest and most versatile defenders ever. He epitomized loyalty, spending his entire 25-year career with the club.",
    achievements: ["5x UEFA Champions League Winner", "7x Serie A Champion", "AC Milan All-Time Appearance Leader"],
  },
  {
    name: "Zinedine Zidane",
    image: "https://assets.realmadrid.com/is/image/realmadrid/1330190795142?$Mobile$&fit=wrap",
    position: "Midfielder",
    bio: "French midfield genius, famous for his sublime control and elegance. He scored twice in the 1998 World Cup final and the iconic 2002 Champions League final winner.",
    achievements: ["FIFA World Cup Champion (1998)", "Ballon d'Or Winner (1998)", "UEFA Champions League Winner"],
  },
  {
    name: "Karim Benzema",
    image: "https://www.shutterstock.com/editorial/image-editorial/MdTdA513N1zaA6y8MDkxMzA=/karim-benzema-real-madrid-celebrates-scoring-opening-440nw-10484600u.jpg",
    position: "Forward",
    bio: "The intelligent and lethal French striker who blossomed into a 2022 Ballon d'Or winner, known for his link-up play and clinical finishing for Real Madrid.",
    achievements: ["Ballon d'Or Winner (2022)", "5x UEFA Champions League Winner", "4x Ligue 1 Champion"],
  },
  {
    name: "Wayne Rooney",
    image: "https://a.espncdn.com/photo/2020/0304/r674744_1296x1296_1-1.jpg",
    position: "Forward",
    bio: "Manchester United's all-time top scorer, a fierce competitor, and a powerful forward known for his incredible work rate and versatility across the attack.",
    achievements: ["Manchester United All-Time Top Scorer", "5x Premier League Winner", "UEFA Champions League Winner (2008)"],
  },
  {
    name: "Ronaldinho",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Ronaldinho_2019.jpg",
    position: "Attacking Midfielder",
    bio: "The Brazilian wizard, loved globally for his flair, mesmerizing tricks, and infectious smile. He defined an era of joyous, free-flowing football.",
    achievements: ["Ballon d'Or Winner (2005)", "FIFA World Cup Champion (2002)", "UEFA Champions League Winner"],
  },
  {
    name: "David Beckham",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/David_Beckham_2019.jpg",
    position: "Midfielder",
    bio: "England star and a global fashion icon, famous for his lethal free-kicks, pinpoint crossing, and exceptional range of passing from the right flank.",
    achievements: ["6x Premier League Winner", "UEFA Champions League Winner (1999)", "First Englishman to win titles in four countries"],
  },
  {
    name: "Neymar Jr.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Neymar_2018.jpg",
    position: "Forward",
    bio: "Brazilian dribbler known for his incredible flair, mesmerizing skills, and trickery. One of the most gifted and entertaining players of his generation.",
    achievements: ["Copa Libertadores Winner", "UEFA Champions League Winner", "Olympic Gold Medalist"],
  },
  {
    name: "Andrés Iniesta",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Andr%C3%A9s_Iniesta_2018.jpg",
    position: "Midfielder",
    bio: "Spain’s midfield brain, a master of control and passing. He scored the iconic 2010 World Cup winning goal and was a central figure in Barcelona's greatest era.",
    achievements: ["FIFA World Cup Champion (2010)", "4x UEFA Champions League Winner", "9x La Liga Champion"],
  },
  {
    name: "Xavi Hernández",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Xavi_2011.jpg",
    position: "Midfielder",
    bio: "Barcelona and Spain legend, the 'puppet master,' known for his masterful passing, vision, and tactical intelligence, dictating the tempo of the game.",
    achievements: ["FIFA World Cup Champion (2010)", "4x UEFA Champions League Winner", "8x La Liga Champion"],
  },
  {
    name: "Thierry Henry",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Thierry_Henry_2012.jpg",
    position: "Forward",
    bio: "Arsenal legend and Premier League icon, known for his blistering pace, silky finishing, and tendency to score from cutting in off the left wing.",
    achievements: ["FIFA World Cup Champion (1998)", "2x Premier League Winner", "UEFA Champions League Winner"],
  },
  {
    name: "Roberto Carlos",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Roberto_Carlos_2011.jpg",
    position: "Defender",
    bio: "Brazilian left-back famous for his incredible speed, stamina, and thunderbolt free-kicks, particularly his legendary 'impossible' goal against France.",
    achievements: ["FIFA World Cup Champion (2002)", "3x UEFA Champions League Winner", "4x La Liga Champion"],
  },
  {
    name: "Luka Modrić",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Luka_Modric_2018.jpg",
    position: "Midfielder",
    bio: "The Croatian playmaker, a 2018 Ballon d’Or winner, known for his immaculate passing, vision, and tireless energy in the center of the pitch.",
    achievements: ["Ballon d’Or Winner (2018)", "5x UEFA Champions League Winner", "Captain of Croatia's Golden Generation"],
  },
  {
    name: "Mohamed Salah",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Mohamed_Salah_2018.jpg",
    position: "Forward",
    bio: "The 'Egyptian King' of Liverpool, known for his blistering pace, prolific goal-scoring, and exceptional dribbling from the right wing.",
    achievements: ["3x Premier League Golden Boot", "UEFA Champions League Winner", "Premier League Champion"],
  },
  {
    name: "Didier Drogba",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Didier_Drogba_2015.jpg",
    position: "Forward",
    bio: "Chelsea’s big-game striker and Ivorian legend, loved for his physical strength, leadership, and clutch goals in major finals.",
    achievements: ["4x Premier League Winner", "UEFA Champions League Winner (2012)", "2x Premier League Golden Boot"],
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
  const playerPositionElement = document.getElementById("playerPosition");
  const playerBioElement = document.getElementById("playerBio");
  const playerAchievementsContainer = document.getElementById("playerAchievements");
  const achievementsList = document.getElementById("achievementsList");
  const progressContainer = document.getElementById("progressContainer");
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");

  imageElement.classList.remove("show");
  playerNameElement.classList.remove("show");
  playerPositionElement.classList.remove("show");
  playerBioElement.classList.remove("show");
  playerAchievementsContainer.classList.remove("show");
    
    playerNameElement.classList.remove("hidden-initial");
    playerPositionElement.classList.remove("hidden-initial");
    playerBioElement.classList.remove("hidden-initial");
    playerAchievementsContainer.classList.remove("hidden-initial");
    
  achievementsList.innerHTML = ''; 

  progressContainer.classList.add("show");
  progressBar.style.width = "0%";
  progressText.textContent = "Analyzing stats...";

// ... inside showRandomImage() ...

  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += Math.random() * 15;
    
    if (progress >= 100) {
      clearInterval(progressInterval);
      progress = 100;
      progressText.textContent = "Match Found!";
    } else if (progress > 90) {
      progress = 90 + (progress - 90) * 0.1; 
    }
    
    progressBar.style.width = progress + "%";
    progressText.textContent = `Analyzing... ${Math.floor(progress)}%`;
  }, 100);

  imageElement.onload = () => {
    if (progress < 100) {
      clearInterval(progressInterval);
      progressBar.style.width = "100%";
      progressText.textContent = "Match Found!";
    }
  };

  imageElement.src = currentFootballer.image;

  imageElement.onload = () => {
    clearInterval(progressInterval);
    progressBar.style.width = "100%";
    progressText.textContent = "Match Found!";

    setTimeout(() => {
      progressContainer.classList.remove("show");
      
      imageElement.classList.add("show");
      
      playerNameElement.textContent = currentFootballer.name;
      playerNameElement.classList.add("show");
      
      playerPositionElement.textContent = `Position: ${currentFootballer.position}`;
      playerPositionElement.classList.add("show");
      
      playerBioElement.textContent = currentFootballer.bio;
      playerBioElement.classList.add("show");
      
      if (currentFootballer.achievements && currentFootballer.achievements.length > 0) {
        currentFootballer.achievements.forEach(achievement => {
          const listItem = document.createElement("li");
          listItem.textContent = achievement;
          achievementsList.appendChild(listItem);
        });
        playerAchievementsContainer.classList.add("show");
      }

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
  
// REMOVED the alert() function from here. The page now shows the final result without a pop-up.
}

function resetProgram() {
  isProgramStopped = false;
  currentFootballer = null;
  document
    .querySelectorAll("button")
    .forEach((button) => (button.disabled = false));

  document.getElementById("randomImage").src = "";
  document.getElementById("randomImage").classList.remove("show");
  document.getElementById("playerName").textContent = "";
  document.getElementById("playerPosition").textContent = "";
  document.getElementById("playerBio").textContent = "";
  
    document.getElementById("playerName").classList.add("hidden-initial");
    document.getElementById("playerPosition").classList.add("hidden-initial");
    document.getElementById("playerBio").classList.add("hidden-initial");
    document.getElementById("playerAchievements").classList.add("hidden-initial");

  document.getElementById("playerAchievements").classList.remove("show");
  document.getElementById("achievementsList").innerHTML = "";
  document.getElementById("progressContainer").classList.remove("show");
  document.getElementById("userName").value = "";

  alert("Program has been reset. Please enter your name to show a new random footballer.");
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
}

function handleEnter(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        event.preventDefault();
    }
}

document.documentElement.setAttribute("data-theme", "dark");
