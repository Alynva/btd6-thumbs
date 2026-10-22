const STORAGE_KEY = "yt_thumbnail_generator";

  const backgrounds = [
  {
    "image": "./images/backgrounds/MonkeyMeadow_No_UI.png",
    "en": "Monkey Meadow",
    "pt": "Campo dos Símios",
    "difficulty": "Iniciante"
  },
  {
    "image": "./images/backgrounds/MiddleOfTheRoad_No_UI.png",
    "en": "Middle of the Road",
    "pt": "Meio da Estrada",
    "difficulty": "Iniciante"
  },
  {
    "image": "./images/backgrounds/InTheLoop_No_UI.png",
    "en": "In the Loop",
    "pt": "No Loop",
    "difficulty": "Iniciante"
  },
  {
    "image": "./images/backgrounds/TreeStump_No_UI.png",
    "en": "Tree Stump",
    "pt": "Toco de Árvore",
    "difficulty": "Iniciante"
  },
  {
    "image": "./images/backgrounds/TownCenter_No_UI.png",
    "en": "Town Center",
    "pt": "Centro da Cidade",
    "difficulty": "Iniciante"
  },
  {
    "image": "./images/backgrounds/Cubism_No_UI.png",
    "en": "Cubism",
    "pt": "Cubismo",
    "difficulty": "Iniciante"
  },
  {
    "image": "./images/backgrounds/FourCircles_No_UI.png",
    "en": "Four Circles",
    "pt": "Quatro Círculos",
    "difficulty": "Iniciante"
  },
  {
    "image": "./images/backgrounds/Hedge_No_UI.png",
    "en": "Hedge",
    "pt": "Cerca Viva",
    "difficulty": "Iniciante"
  },
  {
    "image": "./images/backgrounds/EndoftheRoad_No_UI.png",
    "en": "End of the Road",
    "pt": "Fim da Estrada",
    "difficulty": "Iniciante"
  },
  {
    "image": "./images/backgrounds/Logs_No_UI.png",
    "en": "Logs",
    "pt": "Troncos",
    "difficulty": "Iniciante"
  },
  {
    "image": "./images/backgrounds/ParkPath_No_UI.png",
    "en": "Park Path",
    "pt": "Caminho do Parque",
    "difficulty": "Iniciante"
  },
  {
    "image": "./images/backgrounds/AlpineRun_No_UI.png",
    "en": "Alpine Run",
    "pt": "Corrida Alpina",
    "difficulty": "Iniciante"
  },
  {
    "image": "./images/backgrounds/FrozenOver_No_UI.png",
    "en": "Frozen Over",
    "pt": "Congelado",
    "difficulty": "Iniciante"
  },
  {
    "image": "./images/backgrounds/Carved_No_UI.png",
    "en": "Carved",
    "pt": "Entalhado",
    "difficulty": "Iniciante"
  },
  {
    "image": "./images/backgrounds/WinterPark_No_UI.png",
    "en": "Winter Park",
    "pt": "Parque do Inverno",
    "difficulty": "Iniciante"
  },
  {
    "image": "./images/backgrounds/CandyFalls_No_UI.png",
    "en": "Candy Falls",
    "pt": "Cachoeira Doce",
    "difficulty": "Iniciante"
  },
  {
    "image": "./images/backgrounds/Scrapyard_No_UI.png",
    "en": "Scrapyard",
    "pt": "Ferro-velho",
    "difficulty": "Iniciante"
  },
  {
    "image": "./images/backgrounds/TheCabin_No_UI.png",
    "en": "The Cabin",
    "pt": "A Cabana",
    "difficulty": "Iniciante"
  },
  {
    "image": "./images/backgrounds/Resort_No_UI.png",
    "en": "Resort",
    "pt": "Resort",
    "difficulty": "Iniciante"
  },
  {
    "image": "./images/backgrounds/MapSelectSkatesButton.png",
    "en": "Skates",
    "pt": "Patins",
    "difficulty": "Iniciante"
  },
  {
    "image": "./images/backgrounds/LotusIsland_No_UI.png",
    "en": "Lotus Island",
    "pt": "Ilha de Lótus",
    "difficulty": "Iniciante"
  },
  {
    "image": "./images/backgrounds/SpaPits_No_UI.png",
    "en": "Spa Pits",
    "pt": "Poços de Spa",
    "difficulty": "Iniciante",
    "inativo": true
  },
  {
    "image": "./images/backgrounds/Tinkerton_No_UI.png",
    "en": "Tinkerton",
    "pt": "Tinkerton",
    "difficulty": "Iniciante",
    "inativo": true
  },
  {
    "image": "./images/backgrounds/Three_Mines_Around_No_UI.png",
    "en": "Three Mines 'Round",
    "pt": "Três Minas ao Redor",
    "difficulty": "Iniciante",
    "inativo": true
  },
  {
    "image": "./images/backgrounds/OneTwoTree_No_UI.png",
    "en": "One Two Tree",
    "pt": "Um Dois Três",
    "difficulty": "Iniciante"
  },
  {
    "image": "./images/backgrounds/AdorasTemple_No_UI.png",
    "en": "Adora's Temple",
    "pt": "Templo de Adora",
    "difficulty": "Intermediário"
  },
  {
    "image": "./images/backgrounds/Bazaar_No_UI.PNG",
    "en": "Bazaar",
    "pt": "Bazar",
    "difficulty": "Intermediário"
  },
  {
    "image": "./images/backgrounds/Balance_No_UI.png",
    "en": "Balance",
    "pt": "Equilíbrio",
    "difficulty": "Intermediário"
  },
  {
    "image": "./images/backgrounds/MapSelectEncryptedButton.png",
    "en": "Encrypted",
    "pt": "Criptografado",
    "difficulty": "Intermediário"
  },
  {
    "image": "./images/backgrounds/SpringSpring_No_UI.png",
    "en": "Spring Spring",
    "pt": "Primavera Saltitante",
    "difficulty": "Intermediário"
  },
  {
    "image": "./images/backgrounds/KartsNDarts_No_UI.png",
    "en": "KartsNDarts",
    "pt": "Karts e Dardos",
    "difficulty": "Intermediário"
  },
  {
    "image": "./images/backgrounds/MoonLanding_No_UI.png",
    "en": "Moon Landing",
    "pt": "Pouso Lunar",
    "difficulty": "Intermediário"
  },
  {
    "image": "./images/backgrounds/Haunted_No_UI.png",
    "en": "Haunted",
    "pt": "Assombrado",
    "difficulty": "Intermediário"
  },
  {
    "image": "./images/backgrounds/Downstream_No_UI.png",
    "en": "Downstream",
    "pt": "Correnteza Abaixo",
    "difficulty": "Intermediário"
  },
  {
    "image": "./images/backgrounds/FiringRange_No_UI.png",
    "en": "Firing Range",
    "pt": "Estande de Tiro",
    "difficulty": "Intermediário"
  },
  {
    "image": "./images/backgrounds/Cracked_No_UI.png",
    "en": "Cracked",
    "pt": "Partido",
    "difficulty": "Intermediário"
  },
  {
    "image": "./images/backgrounds/Streambed_No_UI.png",
    "en": "Streambed",
    "pt": "Leito do Rio",
    "difficulty": "Intermediário"
  },
  {
    "image": "./images/backgrounds/Chutes_No_UI.png",
    "en": "Chutes",
    "pt": "Canaletas",
    "difficulty": "Intermediário"
  },
  {
    "image": "./images/backgrounds/ProtectTheYacht_No_UI.png",
    "en": "Protect the Yacht",
    "pt": "Proteja o Iate",
    "difficulty": "Intermediário",
    "inativo": true
  },
  {
    "image": "./images/backgrounds/LostCrevasse_No_UI.png",
    "en": "Lost Crevasse",
    "pt": "Fenda Perdida",
    "difficulty": "Intermediário",
    "inativo": true
  },
  {
    "image": "./images/backgrounds/LuminousCove_No_UI.png",
    "en": "Luminous Cove",
    "pt": "Enseada Luminosa",
    "difficulty": "Intermediário",
    "inativo": true
  },
  {
    "image": "./images/backgrounds/AncientPortal_No_UI.png",
    "en": "Ancient Portal",
    "pt": "Portal Antigo",
    "difficulty": "Intermediário",
    "inativo": true
  },
  {
    "image": "./images/backgrounds/Polyphemus_No_UI.png",
    "en": "Polyphemus",
    "pt": "Polifemo",
    "difficulty": "Intermediário",
    "inativo": true
  },
  {
    "image": "./images/backgrounds/Rake_No_UI.png",
    "en": "Rake",
    "pt": "Ancinho",
    "difficulty": "Intermediário"
  },
  {
    "image": "./images/backgrounds/SpiceIslands_No_UI.png",
    "en": "Spice Islands",
    "pt": "Ilha das Especiarias",
    "difficulty": "Intermediário"
  },
  {
    "image": "./images/backgrounds/Sulfur_Springs_No_UI.png",
    "en": "Sulfur Springs",
    "pt": "Fontes Sulfúricas",
    "difficulty": "Intermediário"
  },
  {
    "image": "./images/backgrounds/WaterPark_No_UI.png",
    "en": "Water Park",
    "pt": "Parque Aquático",
    "difficulty": "Intermediário"
  },
  {
    "image": "./images/backgrounds/CoveredGarden_No_UI.png",
    "en": "Covered Garden",
    "pt": "Jardim Coberto",
    "difficulty": "Intermediário"
  },
  {
    "image": "./images/backgrounds/Quarry_No_UI.png",
    "en": "Quarry",
    "pt": "Pedreira",
    "difficulty": "Intermediário"
  },
  {
    "image": "./images/backgrounds/QuietStreet_No_UI.png",
    "en": "Quiet Street",
    "pt": "Rua Quieta",
    "difficulty": "Intermediário"
  },
  {
    "image": "./images/backgrounds/BloonariusPrime_No_UI.png",
    "en": "Bloonarius Prime",
    "pt": "Bloonarius Prime",
    "difficulty": "Intermediário"
  },
  {
    "image": "./images/backgrounds/DarkPath_No_UI.png",
    "en": "Dark Path",
    "pt": "Caminho Sombrio",
    "difficulty": "Avançado"
  },
  {
    "image": "./images/backgrounds/Erosion_No_UI.png",
    "en": "Erosion",
    "pt": "Erosão",
    "difficulty": "Avançado"
  },
  {
    "image": "./images/backgrounds/Midnight_Mansion_No_UI.png",
    "en": "Midnight Mansion",
    "pt": "Mansão da Meia-Noite",
    "difficulty": "Avançado"
  },
  {
    "image": "./images/backgrounds/Sunken_Columns_No_UI.png",
    "en": "Sunken Columns",
    "pt": "Colunas Submersas",
    "difficulty": "Avançado"
  },
  {
    "image": "./images/backgrounds/MapSelectXFactorButton.png",
    "en": "X Factor",
    "pt": "Fator X",
    "difficulty": "Avançado"
  },
  {
    "image": "./images/backgrounds/Mesa_No_UI.png",
    "en": "Mesa",
    "pt": "Mesa",
    "difficulty": "Avançado"
  },
  {
    "image": "./images/backgrounds/Geared_No_UI.png",
    "en": "Geared",
    "pt": "Engrenado",
    "difficulty": "Avançado"
  },
  {
    "image": "./images/backgrounds/Spillway_No_UI.png",
    "en": "Spillway",
    "pt": "Vertedouro",
    "difficulty": "Avançado"
  },
  {
    "image": "./images/backgrounds/Cargo_No_UI.png",
    "en": "Cargo",
    "pt": "Carga",
    "difficulty": "Avançado"
  },
  {
    "image": "./images/backgrounds/PatsPond_No_UI.png",
    "en": "Pat's Pond",
    "pt": "Lago do Pat",
    "difficulty": "Avançado"
  },
  {
    "image": "./images/backgrounds/Peninsula_No_UI.png",
    "en": "Peninsula",
    "pt": "Península",
    "difficulty": "Avançado"
  },
  {
    "image": "./images/backgrounds/HighFinance_No_UI.png",
    "en": "High Finance",
    "pt": "Altas Finanças",
    "difficulty": "Avançado"
  },
  {
    "image": "./images/backgrounds/AnotherBrick_No_UI.png",
    "en": "Another Brick",
    "pt": "Outro Tijolo",
    "difficulty": "Avançado"
  },
  {
    "image": "./images/backgrounds/OffTheCoast_No_UI.png",
    "en": "Off the Coast",
    "pt": "Litoral",
    "difficulty": "Avançado"
  },
  {
    "image": "./images/backgrounds/Cornfield_No_UI.png",
    "en": "Cornfield",
    "pt": "Milharal",
    "difficulty": "Avançado"
  },
  {
    "image": "./images/backgrounds/Underground_No_UI.png",
    "en": "Underground",
    "pt": "Subterrâneo",
    "difficulty": "Avançado"
  },
  {
    "image": null,
    "en": "Mushroom Grotto",
    "pt": "Gruta dos Cogumelos",
    "difficulty": "Avançado",
    "inativo": true
  },
  {
    "image": "./images/backgrounds/MapSelectPartyParadeButton.png",
    "en": "Party Parade",
    "pt": "Desfile da Festa",
    "difficulty": "Avançado",
    "inativo": true
  },
  {
    "image": "./images/backgrounds/Sunset_Gulch_No_UI.png",
    "en": "Sunset Gulch",
    "pt": "Desfiladeiro do Pôr do Sol",
    "difficulty": "Avançado",
    "inativo": true
  },
  {
    "image": "./images/backgrounds/EnchantedGlade_No_UI.png",
    "en": "Enchanted Glade",
    "pt": "Clareira Encantada",
    "difficulty": "Avançado",
    "inativo": true
  },
  {
    "image": "./images/backgrounds/Last_Resort_No_UI.png",
    "en": "Last Resort",
    "pt": "Último Resort",
    "difficulty": "Avançado",
    "inativo": true
  },
  {
    "image": "./images/backgrounds/CastleRevenge_No_UI.png",
    "en": "Castle Revenge",
    "pt": "Vingança do Castelo",
    "difficulty": "Avançado",
    "inativo": true
  },
  {
    "image": "./images/backgrounds/GlacialTrail_No_UI.png",
    "en": "Glacial Trail",
    "pt": "Trilha Glacial",
    "difficulty": "Especialista"
  },
  {
    "image": "./images/backgrounds/DarkDungeons_No_UI.png",
    "en": "Dark Dungeons",
    "pt": "Calabouços Sombrios",
    "difficulty": "Especialista",
    "inativo": true
  },
  {
    "image": "./images/backgrounds/Sanctuary_No_UI.png",
    "en": "Sanctuary",
    "pt": "Santuário",
    "difficulty": "Especialista"
  },
  {
    "image": "./images/backgrounds/Ravine_No_UI.png",
    "en": "Ravine",
    "pt": "Ravina",
    "difficulty": "Especialista"
  },
  {
    "image": "./images/backgrounds/Flooded_Valley_No_UI.png",
    "en": "Flooded Valley",
    "pt": "Vale Inundado",
    "difficulty": "Especialista"
  },
  {
    "image": "./images/backgrounds/Infernal_No_UI.png",
    "en": "Infernal",
    "pt": "Infernal",
    "difficulty": "Especialista"
  },
  {
    "image": "./images/backgrounds/BloodyPuddles_No_UI.png",
    "en": "Bloody Puddles",
    "pt": "Poças Sangrentas",
    "difficulty": "Especialista"
  },
  {
    "image": "./images/backgrounds/Workshop_No_UI.png",
    "en": "Workshop",
    "pt": "Oficina",
    "difficulty": "Especialista"
  },
  {
    "image": "./images/backgrounds/Quad_No_UI.png",
    "en": "Quad",
    "pt": "Quadra",
    "difficulty": "Especialista"
  },
  {
    "image": "./images/backgrounds/DarkCastle_No_UI.png",
    "en": "Dark Castle",
    "pt": "Castelo Sombrio",
    "difficulty": "Especialista"
  },
  {
    "image": "./images/backgrounds/MuddyPuddles_No_UI.png",
    "en": "Muddy Puddles",
    "pt": "Lamaçal Terrível",
    "difficulty": "Especialista"
  },
  {
    "image": "./images/backgrounds/Ouch_No_UI.png",
    "en": "#Ouch",
    "pt": "#Ai",
    "difficulty": "Especialista"
  },
  {
    "image": "./images/backgrounds/Blons_No_UI.png",
    "en": "Blons",
    "pt": "Blons",
    "difficulty": "Especialista",
    "inativo": true
  }
  ].map(x => ({ image: x.image, label: x.pt })).filter(Boolean);

  const saved = JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "{}"
  );

  const IMAGE_PROXY_URL =
    "https://alynva.com/cors.php?";

  const imageLoadCache =
    new Map();

  function getImageUrl(source) {

    if (!source) return "";

    if (typeof source === "string") {
      return source;
    }

    return source.image || "";

  }

  function getCachedImageUrl(source) {

    const url =
      getImageUrl(source);

    if (
      !url ||
      url.startsWith("./") ||
      url.startsWith("images/") ||
      url.startsWith("/") ||
      url.startsWith("data:") ||
      url.startsWith("blob:") ||
      url.startsWith(IMAGE_PROXY_URL)
    ) {
      return url;
    }

    // Only proxy if an external URL is provided
    return IMAGE_PROXY_URL + url;

  }

  let selectedBg =
    backgrounds.find(b => b.image === saved.selectedBg)?.image || backgrounds[0].image;

  let characterGroups = [];

  let selectedCharacterGroup =
    saved.selectedCharacterGroup || null;

  let selectedCharacter =
    saved.selectedCharacter || null;

  let logoData =
    saved.logoData || null;

  const canvas =
    document.getElementById("canvas");

  const ctx =
    canvas.getContext("2d");

  const titleInput =
    document.getElementById("titleInput");

  const dateInput =
    document.getElementById("dateInput");

  const pathInput =
    document.getElementById("pathInput");

  titleInput.value =
    saved.title || titleInput.value;

  dateInput.value =
    saved.date || dateInput.value;

  pathInput.value =
    saved.path || pathInput.value;

  const bgList =
    document.getElementById("backgroundList");

  const characterList =
    document.getElementById("characterList");

  let logoImage = null;

  function saveState() {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        selectedBg,
        selectedCharacterGroup,
        selectedCharacter,
        title: titleInput.value,
        date: dateInput.value,
		path: pathInput.value,
        logoData
      })
    );
  }

  function normalizeOption(item) {

    if (typeof item === "string") {
      return {
        value: item,
        image: item,
        label: ""
      };
    }

    return {
      value: item.value ?? item.image,
      image: item.image,
      label: item.label || ""
    };

  }

  function createList(
    container,
    items,
    selected,
    callback
  ) {

    container.innerHTML = "";

    items.forEach(item => {

      const option =
        normalizeOption(item);

      const div =
        document.createElement("div");

      div.className = "thumb-option";

      if (option.value === selected) {
        div.classList.add("active");
      }

      const img =
        document.createElement("img");

      img.loading = "eager";

      img.decoding = "async";

      img.fetchPriority = "high";

      img.src =
        getCachedImageUrl(option.image);

      div.appendChild(img);

      if (option.label) {

        const label =
          document.createElement("div");

        label.className =
          "thumb-label";

        label.textContent =
          option.label;

        div.appendChild(label);

      }

      div.onclick = () => {

        callback(option.value);

        container
          .querySelectorAll(".thumb-option")
          .forEach(el => {
            el.classList.remove("active");
          });

        div.classList.add("active");
      };

      container.appendChild(div);

    });

  }

  function loadCharacterGroups() {

    const data = {
  "Dart Monkey": [
    {
      "name": "Dart Monkey",
      "image": "./images/characters/BTD6_000-DartMonkey.png"
    },
    {
      "name": "Sharp Shots",
      "image": "./images/characters/BTD6_100-Dartmonkey.png"
    },
    {
      "name": "Quick Shots",
      "image": "./images/characters/BTD6_010-Dartmonkey.png"
    },
    {
      "name": "Long Range Darts",
      "image": "./images/characters/BTD6_001-Dartmonkey.png"
    },
    {
      "name": "Razor Sharp Shots",
      "image": "./images/characters/BTD6_200-Dartmonkey.png"
    },
    {
      "name": "Very Quick Shots",
      "image": "./images/characters/BTD6_020-Dartmonkey.png"
    },
    {
      "name": "Enhanced Eyesight",
      "image": "./images/characters/BTD6_002-Dartmonkey.png"
    },
    {
      "name": "Spike-o-pult",
      "image": "./images/characters/BTD6_300-Dartmonkey.png"
    },
    {
      "name": "Triple Shot",
      "image": "./images/characters/BTD6_030-Dartmonkey.png"
    },
    {
      "name": "Crossbow",
      "image": "./images/characters/BTD6_003-Dartmonkey.png"
    },
    {
      "name": "Juggernaut",
      "image": "./images/characters/BTD6_400-Dartmonkey.png"
    },
    {
      "name": "Super Monkey Fan Club",
      "image": "./images/characters/BTD6_040-Dartmonkey.png"
    },
    {
      "name": "Sharp Shooter",
      "image": "./images/characters/BTD6_004-Dartmonkey.png"
    },
    {
      "name": "Ultra-Juggernaut",
      "image": "./images/characters/BTD6_500-Dartmonkey.png"
    },
    {
      "name": "Plasma Monkey Fan Club",
      "image": "./images/characters/BTD6_050-Dartmonkey.png"
    },
    {
      "name": "Crossbow Master",
      "image": "./images/characters/BTD6_005-Dartmonkey.png"
    },
    {
      "name": "Apex Plasma Master",
      "image": "./images/characters/BTD6_Paragon-ApexPlasmaMaster.png"
    }
  ],
  "Boomerang Monkey": [
    {
      "name": "Boomerang Monkey",
      "image": "./images/characters/BTD6_000-BoomerangMonkey.png"
    },
    {
      "name": "Improved Rangs",
      "image": "./images/characters/BTD6_100-BoomerangMonkey.png"
    },
    {
      "name": "Faster Throwing",
      "image": "./images/characters/BTD6_010-BoomerangMonkey.png"
    },
    {
      "name": "Long Range Rangs",
      "image": "./images/characters/BTD6_001-BoomerangMonkey.png"
    },
    {
      "name": "Glaives",
      "image": "./images/characters/BTD6_200-BoomerangMonkey.png"
    },
    {
      "name": "Faster Rangs",
      "image": "./images/characters/BTD6_020-BoomerangMonkey.png"
    },
    {
      "name": "Red Hot Rangs",
      "image": "./images/characters/BTD6_002-BoomerangMonkey.png"
    },
    {
      "name": "Glaive Ricochet",
      "image": "./images/characters/BTD6_300-BoomerangMonkey.png"
    },
    {
      "name": "Bionic Boomerang",
      "image": "./images/characters/BTD6_030-BoomerangMonkey.png"
    },
    {
      "name": "Kylie Boomerang",
      "image": "./images/characters/BTD6_003-BoomerangMonkey.png"
    },
    {
      "name": "M.O.A.R Glaives",
      "image": "./images/characters/BTD6_400-BoomerangMonkey.png"
    },
    {
      "name": "Turbo Charge",
      "image": "./images/characters/BTD6_040-BoomerangMonkey.png"
    },
    {
      "name": "MOAB Press",
      "image": "./images/characters/BTD6_004-BoomerangMonkey.png"
    },
    {
      "name": "Glaive Lord",
      "image": "./images/characters/BTD6_500-BoomerangMonkey.png"
    },
    {
      "name": "Perma Charge",
      "image": "./images/characters/BTD6_050-BoomerangMonkey.png"
    },
    {
      "name": "MOAB Domination",
      "image": "./images/characters/BTD6_005-BoomerangMonkey.png"
    },
    {
      "name": "Glaive Dominus",
      "image": "./images/characters/BTD6_ParagonGlaiveDominus.png"
    }
  ],
  "Bomb Shooter": [
    {
      "name": "Bomb Shooter",
      "image": "./images/characters/BTD6_000-BombShooter.png"
    },
    {
      "name": "Bigger Bombs",
      "image": "./images/characters/BTD6_100-BombShooter.png"
    },
    {
      "name": "Faster Reload",
      "image": "./images/characters/BTD6_010-BombShooter.png"
    },
    {
      "name": "Extra Range",
      "image": "./images/characters/BTD6_001-BombShooter.png"
    },
    {
      "name": "Heavy Bombs",
      "image": "./images/characters/BTD6_200-BombShooter.png"
    },
    {
      "name": "Missile Launcher",
      "image": "./images/characters/BTD6_020-BombShooter.png"
    },
    {
      "name": "Frag Bombs",
      "image": "./images/characters/BTD6_002-BombShooter.png"
    },
    {
      "name": "Really Big Bombs",
      "image": "./images/characters/BTD6_300-BombShooter.png"
    },
    {
      "name": "MOAB Mauler",
      "image": "./images/characters/BTD6_030-BombShooter.png"
    },
    {
      "name": "Cluster Bombs",
      "image": "./images/characters/BTD6_003-BombShooter.png"
    },
    {
      "name": "Bloon Impact",
      "image": "./images/characters/BTD6_400-BombShooter.png"
    },
    {
      "name": "MOAB Assassin",
      "image": "./images/characters/BTD6_040-BombShooter.png"
    },
    {
      "name": "Recursive Cluster",
      "image": "./images/characters/BTD6_004-BombShooter.png"
    },
    {
      "name": "Bloon Crush",
      "image": "./images/characters/BTD6_500-BombShooter.png"
    },
    {
      "name": "MOAB Eliminator",
      "image": "./images/characters/BTD6_050-BombShooter.png"
    },
    {
      "name": "Bomb Blitz",
      "image": "./images/characters/BTD6_005-BombShooter.png"
    },
    {
      "name": "Ballistic Obliteration Missile Bunker",
      "image": "./images/characters/BTD6_Paragon-BallisticObliterationMissileBunker.png"
    }
  ],
  "Tack Shooter": [
    {
      "name": "Tack Shooter",
      "image": "./images/characters/BTD6_000-TackShooter.png"
    },
    {
      "name": "Faster Shooting",
      "image": "./images/characters/BTD6_100-TackShooter.png"
    },
    {
      "name": "Long Range Tacks",
      "image": "./images/characters/BTD6_010-TackShooter.png"
    },
    {
      "name": "More Tacks",
      "image": "./images/characters/BTD6_001-TackShooter.png"
    },
    {
      "name": "Even Faster Shooting",
      "image": "./images/characters/BTD6_200-TackShooter.png"
    },
    {
      "name": "Super Range Tacks",
      "image": "./images/characters/BTD6_020-TackShooter.png"
    },
    {
      "name": "Even More Tacks",
      "image": "./images/characters/BTD6_002-TackShooter.png"
    },
    {
      "name": "Hot Shots",
      "image": "./images/characters/BTD6_300-TackShooter.png"
    },
    {
      "name": "Blade Shooter",
      "image": "./images/characters/BTD6_030-TackShooter.png"
    },
    {
      "name": "Tack Sprayer",
      "image": "./images/characters/BTD6_003-TackShooter.png"
    },
    {
      "name": "Ring of Fire",
      "image": "./images/characters/BTD6_400-TackShooter.png"
    },
    {
      "name": "Blade Maelstrom",
      "image": "./images/characters/BTD6_040-TackShooter.png"
    },
    {
      "name": "Overdrive",
      "image": "./images/characters/BTD6_004-TackShooter.png"
    },
    {
      "name": "Inferno Ring",
      "image": "./images/characters/BTD6_500-TackShooter.png"
    },
    {
      "name": "Super Maelstrom",
      "image": "./images/characters/BTD6_050-TackShooter.png"
    },
    {
      "name": "The Tack Zone",
      "image": "./images/characters/BTD6_005-TackShooter.png"
    },
    {
      "name": "Crucible of Steel and Flame",
      "image": "./images/characters/BTD6_Paragon-CycloneOfFireAndMetal.png"
    }
  ],
  "Ice Monkey": [
    {
      "name": "Ice Monkey",
      "image": "./images/characters/BTD6_000-IceMonkey.png"
    },
    {
      "name": "Permafrost",
      "image": "./images/characters/BTD6_100-IceMonkey.png"
    },
    {
      "name": "Enhanced Freeze",
      "image": "./images/characters/BTD6_010-IceMonkey.png"
    },
    {
      "name": "Larger Radius",
      "image": "./images/characters/BTD6_001-IceMonkey.png"
    },
    {
      "name": "Cold Snap",
      "image": "./images/characters/BTD6_200-IceMonkey.png"
    },
    {
      "name": "Deep Freeze",
      "image": "./images/characters/BTD6_020-IceMonkey.png"
    },
    {
      "name": "Re-Freeze",
      "image": "./images/characters/BTD6_002-IceMonkey.png"
    },
    {
      "name": "Ice Shards",
      "image": "./images/characters/BTD6_300-IceMonkey.png"
    },
    {
      "name": "Arctic Wind",
      "image": "./images/characters/BTD6_030-IceMonkey.png"
    },
    {
      "name": "Cryo Cannon",
      "image": "./images/characters/BTD6_003-IceMonkey.png"
    },
    {
      "name": "Embrittlement",
      "image": "./images/characters/BTD6_400-IceMonkey.png"
    },
    {
      "name": "Snowstorm",
      "image": "./images/characters/BTD6_040-IceMonkey.png"
    },
    {
      "name": "Icicles",
      "image": "./images/characters/BTD6_004-IceMonkey.png"
    },
    {
      "name": "Super Brittle",
      "image": "./images/characters/BTD6_500-IceMonkey.png"
    },
    {
      "name": "Absolute Zero",
      "image": "./images/characters/BTD6_050-IceMonkey.png"
    },
    {
      "name": "Icicle Impale",
      "image": "./images/characters/BTD6_005-IceMonkey.png"
    },
    {
      "name": "Herald of Everfrost",
      "image": "./images/characters/BTD6_Paragon-HeraldOfEverfrost.png"
    }
  ],
  "Glue Gunner": [
    {
      "name": "Glue Gunner",
      "image": "./images/characters/BTD6_000-GlueGunner.png"
    },
    {
      "name": "Glue Soak",
      "image": "./images/characters/BTD6_100-GlueGunner.png"
    },
    {
      "name": "Bigger Globs",
      "image": "./images/characters/BTD6_010-GlueGunner.png"
    },
    {
      "name": "Stickier Glue",
      "image": "./images/characters/BTD6_001-GlueGunner.png"
    },
    {
      "name": "Corrosive Glue",
      "image": "./images/characters/BTD6_200-GlueGunner.png"
    },
    {
      "name": "Glue Splatter",
      "image": "./images/characters/BTD6_020-GlueGunner.png"
    },
    {
      "name": "Stronger Glue",
      "image": "./images/characters/BTD6_002-GlueGunner.png"
    },
    {
      "name": "Bloon Dissolver",
      "image": "./images/characters/BTD6_300-GlueGunner.png"
    },
    {
      "name": "Glue Hose",
      "image": "./images/characters/BTD6_030-GlueGunner.png"
    },
    {
      "name": "MOAB Glue",
      "image": "./images/characters/BTD6_003-GlueGunner.png"
    },
    {
      "name": "Bloon Liquefier",
      "image": "./images/characters/BTD6_400-GlueGunner.png"
    },
    {
      "name": "Glue Strike",
      "image": "./images/characters/BTD6_040-GlueGunner.png"
    },
    {
      "name": "Relentless Glue",
      "image": "./images/characters/BTD6_004-GlueGunner.png"
    },
    {
      "name": "The Bloon Solver",
      "image": "./images/characters/BTD6_500-GlueGunner.png"
    },
    {
      "name": "Glue Storm",
      "image": "./images/characters/BTD6_050-GlueGunner.png"
    },
    {
      "name": "Super Glue",
      "image": "./images/characters/BTD6_005-GlueGunner.png"
    }
  ],
  "Desperado": [
    {
      "name": "Desperado",
      "image": "./images/characters/BTD6_000-Desperado.png"
    },
    {
      "name": "Quickdraw",
      "image": "./images/characters/BTD6_100-Desperado.png"
    },
    {
      "name": "Eagle Eye",
      "image": "./images/characters/BTD6_010-Desperado.png"
    },
    {
      "name": "Wanderer",
      "image": "./images/characters/BTD6_001-Desperado.png"
    },
    {
      "name": "Standoff",
      "image": "./images/characters/BTD6_200-Desperado.png"
    },
    {
      "name": "Bullseye",
      "image": "./images/characters/BTD6_020-Desperado.png"
    },
    {
      "name": "Nomad",
      "image": "./images/characters/BTD6_002-Desperado.png"
    },
    {
      "name": "Big Iron",
      "image": "./images/characters/BTD6_300-Desperado.png"
    },
    {
      "name": "Deadeye",
      "image": "./images/characters/BTD6_030-Desperado.png"
    },
    {
      "name": "Enforcer",
      "image": "./images/characters/BTD6_003-Desperado.png"
    },
    {
      "name": "Twin Sixes",
      "image": "./images/characters/BTD6_400-Desperado.png"
    },
    {
      "name": "Bounty Hunter",
      "image": "./images/characters/BTD6_040-Desperado.png"
    },
    {
      "name": "Avenger",
      "image": "./images/characters/BTD6_004-Desperado.png"
    },
    {
      "name": "The Blazing Sun",
      "image": "./images/characters/BTD6_500-Desperado.png"
    },
    {
      "name": "Golden Justice",
      "image": "./images/characters/BTD6_050-Desperado.png"
    },
    {
      "name": "The Desert Phantom",
      "image": "./images/characters/BTD6_005-Desperado.png"
    }
  ],
  "Sniper Monkey": [
    {
      "name": "Sniper Monkey",
      "image": "./images/characters/BTD6_000-SniperMonkey.png"
    },
    {
      "name": "Full Metal Jacket",
      "image": "./images/characters/BTD6_100-SniperMonkey.png"
    },
    {
      "name": "Night Vision Goggles",
      "image": "./images/characters/BTD6_010-SniperMonkey.png"
    },
    {
      "name": "Fast Firing",
      "image": "./images/characters/BTD6_001-SniperMonkey.png"
    },
    {
      "name": "Large Calibre",
      "image": "./images/characters/BTD6_200-SniperMonkey.png"
    },
    {
      "name": "Shrapnel Shot",
      "image": "./images/characters/BTD6_020-SniperMonkey.png"
    },
    {
      "name": "Even Faster Firing",
      "image": "./images/characters/BTD6_002-SniperMonkey.png"
    },
    {
      "name": "Deadly Precision",
      "image": "./images/characters/BTD6_300-SniperMonkey.png"
    },
    {
      "name": "Bouncing Bullet",
      "image": "./images/characters/BTD6_030-SniperMonkey.png"
    },
    {
      "name": "Semi-Automatic",
      "image": "./images/characters/BTD6_003-SniperMonkey.png"
    },
    {
      "name": "Maim MOA B",
      "image": "./images/characters/BTD6_400-SniperMonkey.png"
    },
    {
      "name": "Supply Drop",
      "image": "./images/characters/BTD6_040-SniperMonkey.png"
    },
    {
      "name": "Full Auto Rifle",
      "image": "./images/characters/BTD6_004-SniperMonkey.png"
    },
    {
      "name": "Cripple MOA B",
      "image": "./images/characters/BTD6_500-SniperMonkey.png"
    },
    {
      "name": "Elite Sniper",
      "image": "./images/characters/BTD6_050-SniperMonkey.png"
    },
    {
      "name": "Elite Defender",
      "image": "./images/characters/BTD6_005-SniperMonkey.png"
    }
  ],
  "Monkey Sub": [
    {
      "name": "Monkey Sub",
      "image": "./images/characters/BTD6_000-MonkeySub.png"
    },
    {
      "name": "Longer Range",
      "image": "./images/characters/BTD6_100-MonkeySub.png"
    },
    {
      "name": "Barbed Darts",
      "image": "./images/characters/BTD6_010-MonkeySub.png"
    },
    {
      "name": "Twin Guns",
      "image": "./images/characters/BTD6_001-MonkeySub.png"
    },
    {
      "name": "Advanced Intel",
      "image": "./images/characters/BTD6_200-MonkeySub.png"
    },
    {
      "name": "Heat-tipped Darts",
      "image": "./images/characters/BTD6_020-MonkeySub.png"
    },
    {
      "name": "Airburst Darts",
      "image": "./images/characters/BTD6_002-MonkeySub.png"
    },
    {
      "name": "Submerge and Support",
      "image": "./images/characters/BTD6_300-MonkeySub.png"
    },
    {
      "name": "Ballistic Missile",
      "image": "./images/characters/BTD6_030-MonkeySub.png"
    },
    {
      "name": "Triple Guns",
      "image": "./images/characters/BTD6_003-MonkeySub.png"
    },
    {
      "name": "Bloontonium Reactor",
      "image": "./images/characters/BTD6_400-MonkeySub.png"
    },
    {
      "name": "First Strike Capability",
      "image": "./images/characters/BTD6_040-MonkeySub.png"
    },
    {
      "name": "Armor Piercing Darts",
      "image": "./images/characters/BTD6_004-MonkeySub.png"
    },
    {
      "name": "Energizer",
      "image": "./images/characters/BTD6_500-MonkeySub.png"
    },
    {
      "name": "Pre-emptive Strike",
      "image": "./images/characters/BTD6_050-MonkeySub.png"
    },
    {
      "name": "Sub Commander",
      "image": "./images/characters/BTD6_005-MonkeySub.png"
    },
    {
      "name": "Nautic Siege Core",
      "image": "./images/characters/BTD6_Paragon-NauticSeigeCore.png"
    }
  ],
  "Monkey Buccaneer": [
    {
      "name": "Monkey Buccaneer",
      "image": "./images/characters/BTD6_000-MonkeyBuccaneer.png"
    },
    {
      "name": "Faster Shooting",
      "image": "./images/characters/BTD6_100-MonkeyBuccaneer.png"
    },
    {
      "name": "Grape Shot",
      "image": "./images/characters/BTD6_010-MonkeyBuccaneer.png"
    },
    {
      "name": "Long Range",
      "image": "./images/characters/BTD6_001-MonkeyBuccaneer.png"
    },
    {
      "name": "Double Shot",
      "image": "./images/characters/BTD6_200-MonkeyBuccaneer.png"
    },
    {
      "name": "Hot Shot",
      "image": "./images/characters/BTD6_020-MonkeyBuccaneer.png"
    },
    {
      "name": "Crow's Nest",
      "image": "./images/characters/BTD6_002-MonkeyBuccaneer.png"
    },
    {
      "name": "Destroyer",
      "image": "./images/characters/BTD6_300-MonkeyBuccaneer.png"
    },
    {
      "name": "Cannon Ship",
      "image": "./images/characters/BTD6_030-MonkeyBuccaneer.png"
    },
    {
      "name": "Merchantman",
      "image": "./images/characters/BTD6_003-MonkeyBuccaneer.png"
    },
    {
      "name": "Aircraft Carrier",
      "image": "./images/characters/BTD6_400-MonkeyBuccaneer.png"
    },
    {
      "name": "Monkey Pirates",
      "image": "./images/characters/BTD6_040-MonkeyBuccaneer.png"
    },
    {
      "name": "Favored Trades",
      "image": "./images/characters/BTD6_004-MonkeyBuccaneer.png"
    },
    {
      "name": "Carrier Flagship",
      "image": "./images/characters/BTD6_500-MonkeyBuccaneer.png"
    },
    {
      "name": "Pirate Lord",
      "image": "./images/characters/BTD6_050-MonkeyBuccaneer.png"
    },
    {
      "name": "Trade Empire",
      "image": "./images/characters/BTD6_005-MonkeyBuccaneer.png"
    },
    {
      "name": "Navarch of the Seas",
      "image": "./images/characters/BTD6_Paragon-NavarchOfTheSeas.png"
    }
  ],
  "Monkey Ace": [
    {
      "name": "Monkey Ace",
      "image": "./images/characters/BTD6_000-MonkeyAce.png"
    },
    {
      "name": "Rapid Fire",
      "image": "./images/characters/BTD6_100-MonkeyAce.png"
    },
    {
      "name": "Exploding Pineapple",
      "image": "./images/characters/BTD6_010-MonkeyAce.png"
    },
    {
      "name": "Sharper Darts",
      "image": "./images/characters/BTD6_001-MonkeyAce.png"
    },
    {
      "name": "Lots More Darts",
      "image": "./images/characters/BTD6_200-MonkeyAce.png"
    },
    {
      "name": "Spy Plane",
      "image": "./images/characters/BTD6_020-MonkeyAce.png"
    },
    {
      "name": "Centered Path",
      "image": "./images/characters/BTD6_002-MonkeyAce.png"
    },
    {
      "name": "Fighter Plane",
      "image": "./images/characters/BTD6_300-MonkeyAce.png"
    },
    {
      "name": "Bomber Ace",
      "image": "./images/characters/BTD6_030-MonkeyAce.png"
    },
    {
      "name": "Neva-Miss Targeting",
      "image": "./images/characters/BTD6_003-MonkeyAce.png"
    },
    {
      "name": "Operation: Dart Storm",
      "image": "./images/characters/BTD6_400-MonkeyAce.png"
    },
    {
      "name": "Ground Zero",
      "image": "./images/characters/BTD6_040-MonkeyAce.png"
    },
    {
      "name": "Spectre",
      "image": "./images/characters/BTD6_004-MonkeyAce.png"
    },
    {
      "name": "Sky Shredder",
      "image": "./images/characters/BTD6_500-MonkeyAce.png"
    },
    {
      "name": "Tsar Bomba",
      "image": "./images/characters/BTD6_050-MonkeyAce.png"
    },
    {
      "name": "Flying Fortress",
      "image": "./images/characters/BTD6_005-MonkeyAce.png"
    },
    {
      "name": "Goliath Doomship",
      "image": "./images/characters/BTD6_Paragon-GoliathDoomship.png"
    }
  ],
  "Heli Pilot": [
    {
      "name": "Heli Pilot",
      "image": "./images/characters/BTD6_000-HeliPilot.png"
    },
    {
      "name": "Quad Darts",
      "image": "./images/characters/BTD6_100-HeliPilot.png"
    },
    {
      "name": "Bigger Jets",
      "image": "./images/characters/BTD6_010-HeliPilot.png"
    },
    {
      "name": "Faster Darts",
      "image": "./images/characters/BTD6_001-HeliPilot.png"
    },
    {
      "name": "Pursuit",
      "image": "./images/characters/BTD6_200-HeliPilot.png"
    },
    {
      "name": "IFR",
      "image": "./images/characters/BTD6_020-HeliPilot.png"
    },
    {
      "name": "Faster Firing",
      "image": "./images/characters/BTD6_002-HeliPilot.png"
    },
    {
      "name": "Razor Rotors",
      "image": "./images/characters/BTD6_300-HeliPilot.png"
    },
    {
      "name": "Downdraft",
      "image": "./images/characters/BTD6_030-HeliPilot.png"
    },
    {
      "name": "MOAB Shove",
      "image": "./images/characters/BTD6_003-HeliPilot.png"
    },
    {
      "name": "Apache Dartship",
      "image": "./images/characters/BTD6_400-HeliPilot.png"
    },
    {
      "name": "Support Chinook",
      "image": "./images/characters/BTD6_040-HeliPilot.png"
    },
    {
      "name": "Comanche Defense",
      "image": "./images/characters/BTD6_004-HeliPilot.png"
    },
    {
      "name": "Apache Prime",
      "image": "./images/characters/BTD6_500-HeliPilot.png"
    },
    {
      "name": "Special Poperations",
      "image": "./images/characters/BTD6_050-HeliPilot.png"
    },
    {
      "name": "Comanche Commander",
      "image": "./images/characters/BTD6_005-HeliPilot.png"
    },
    {
      "name": "Marine",
      "image": "./images/characters/BTD6_Marine.png"
    }
  ],
  "Mortar Monkey": [
    {
      "name": "Mortar Monkey",
      "image": "./images/characters/BTD6_000-MortarMonkey.png"
    },
    {
      "name": "Bigger Blast",
      "image": "./images/characters/BTD6_100-MortarMonkey.png"
    },
    {
      "name": "Faster Reload",
      "image": "./images/characters/BTD6_010-MortarMonkey.png"
    },
    {
      "name": "Increased Accuracy",
      "image": "./images/characters/BTD6_001-MortarMonkey.png"
    },
    {
      "name": "Bloon Buster",
      "image": "./images/characters/BTD6_200-MortarMonkey.png"
    },
    {
      "name": "Rapid Reload",
      "image": "./images/characters/BTD6_020-MortarMonkey.png"
    },
    {
      "name": "Burny Stuff",
      "image": "./images/characters/BTD6_002-MortarMonkey.png"
    },
    {
      "name": "Shell Shock",
      "image": "./images/characters/BTD6_300-MortarMonkey.png"
    },
    {
      "name": "Heavy Shells",
      "image": "./images/characters/BTD6_030-MortarMonkey.png"
    },
    {
      "name": "Signal Flare",
      "image": "./images/characters/BTD6_003-MortarMonkey.png"
    },
    {
      "name": "The Big One",
      "image": "./images/characters/BTD6_400-MortarMonkey.png"
    },
    {
      "name": "Artillery Battery",
      "image": "./images/characters/BTD6_040-MortarMonkey.png"
    },
    {
      "name": "Shattering Shells",
      "image": "./images/characters/BTD6_004-MortarMonkey.png"
    },
    {
      "name": "The Biggest One",
      "image": "./images/characters/BTD6_500-MortarMonkey.png"
    },
    {
      "name": "Pop and Awe",
      "image": "./images/characters/BTD6_050-MortarMonkey.png"
    },
    {
      "name": "Blooncineration",
      "image": "./images/characters/BTD6_005-MortarMonkey.png"
    }
  ],
  "Dartling Gunner": [
    {
      "name": "Dartling Gunner",
      "image": "./images/characters/BTD6_000-DartlingGunner.png"
    },
    {
      "name": "Focused Firing",
      "image": "./images/characters/BTD6_100-DartlingGunner.png"
    },
    {
      "name": "Advanced Targeting",
      "image": "./images/characters/BTD6_010-DartlingGunner.png"
    },
    {
      "name": "Faster Swivel",
      "image": "./images/characters/BTD6_001-DartlingGunner.png"
    },
    {
      "name": "Laser Shock",
      "image": "./images/characters/BTD6_200-DartlingGunner.png"
    },
    {
      "name": "Faster Barrel Spin",
      "image": "./images/characters/BTD6_020-DartlingGunner.png"
    },
    {
      "name": "Powerful Darts",
      "image": "./images/characters/BTD6_002-DartlingGunner.png"
    },
    {
      "name": "Laser Cannon",
      "image": "./images/characters/BTD6_300-DartlingGunner.png"
    },
    {
      "name": "Hydra Rocket Pods",
      "image": "./images/characters/BTD6_030-DartlingGunner.png"
    },
    {
      "name": "Buckshot",
      "image": "./images/characters/BTD6_003-DartlingGunner.png"
    },
    {
      "name": "Plasma Accelerator",
      "image": "./images/characters/BTD6_400-DartlingGunner.png"
    },
    {
      "name": "Rocket Storm",
      "image": "./images/characters/BTD6_040-DartlingGunner.png"
    },
    {
      "name": "Bloon Area Denial System",
      "image": "./images/characters/BTD6_004-DartlingGunner.png"
    },
    {
      "name": "Ray of Doom",
      "image": "./images/characters/BTD6_500-DartlingGunner.png"
    },
    {
      "name": "M.A.D",
      "image": "./images/characters/BTD6_050-DartlingGunner.png"
    },
    {
      "name": "Bloon Exclusion Zone",
      "image": "./images/characters/BTD6_005-DartlingGunner.png"
    }
  ],
  "Wizard Monkey": [
    {
      "name": "Wizard Monkey",
      "image": "./images/characters/BTD6_000-Wizard.png"
    },
    {
      "name": "Guided Magic",
      "image": "./images/characters/BTD6_100-Wizard.png"
    },
    {
      "name": "Fireball",
      "image": "./images/characters/BTD6_010-Wizard.png"
    },
    {
      "name": "Intense Magic",
      "image": "./images/characters/BTD6_001-Wizard.png"
    },
    {
      "name": "Arcane Blast",
      "image": "./images/characters/BTD6_200-Wizard.png"
    },
    {
      "name": "Wall of Fire",
      "image": "./images/characters/BTD6_020-Wizard.png"
    },
    {
      "name": "Monkey Sense",
      "image": "./images/characters/BTD6_002-Wizard.png"
    },
    {
      "name": "Arcane Mastery",
      "image": "./images/characters/BTD6_300-Wizard.png"
    },
    {
      "name": "Dragon's Breath",
      "image": "./images/characters/BTD6_030-Wizard.png"
    },
    {
      "name": "Shimmer",
      "image": "./images/characters/BTD6_003-Wizard.png"
    },
    {
      "name": "Arcane Spike",
      "image": "./images/characters/BTD6_400-Wizard.png"
    },
    {
      "name": "Summon Phoenix",
      "image": "./images/characters/BTD6_040-Wizard.png"
    },
    {
      "name": "Necromancer: Unpopped Army",
      "image": "./images/characters/BTD6_004-Wizard.png"
    },
    {
      "name": "Archmage",
      "image": "./images/characters/BTD6_500-Wizard.png"
    },
    {
      "name": "Wizard Lord Phoenix",
      "image": "./images/characters/BTD6_050-Wizard.png"
    },
    {
      "name": "Prince of Darkness",
      "image": "./images/characters/BTD6_005-Wizard.png"
    },
    {
      "name": "Magus Perfectus",
      "image": "./images/characters/BTD6_ParagonMagusPerfectus.png"
    }
  ],
  "Super Monkey": [
    {
      "name": "Super Monkey",
      "image": "./images/characters/BTD6_000-SuperMonkey.png"
    },
    {
      "name": "Laser Blasts",
      "image": "./images/characters/BTD6_100-SuperMonkey.png"
    },
    {
      "name": "Super Range",
      "image": "./images/characters/BTD6_010-SuperMonkey.png"
    },
    {
      "name": "Knockback",
      "image": "./images/characters/BTD6_001-SuperMonkey.png"
    },
    {
      "name": "Plasma Blasts",
      "image": "./images/characters/BTD6_200-SuperMonkey.png"
    },
    {
      "name": "Epic Range",
      "image": "./images/characters/BTD6_020-SuperMonkey.png"
    },
    {
      "name": "Ultravision",
      "image": "./images/characters/BTD6_002-SuperMonkey.png"
    },
    {
      "name": "Sun Avatar",
      "image": "./images/characters/BTD6_300-SuperMonkey.png"
    },
    {
      "name": "Robo Monkey",
      "image": "./images/characters/BTD6_030-SuperMonkey.png"
    },
    {
      "name": "Dark Knight",
      "image": "./images/characters/BTD6_003-SuperMonkey.png"
    },
    {
      "name": "Sun Temple",
      "image": "./images/characters/BTD6_400-SuperMonkey.png"
    },
    {
      "name": "Tech Terror",
      "image": "./images/characters/BTD6_040-SuperMonkey.png"
    },
    {
      "name": "Dark Champion",
      "image": "./images/characters/BTD6_004-SuperMonkey.png"
    },
    {
      "name": "True Sun God",
      "image": "./images/characters/BTD6_500-SuperMonkey.png"
    },
    {
      "name": "The Anti-Bloon",
      "image": "./images/characters/BTD6_050-SuperMonkey.png"
    },
    {
      "name": "Legend of the Night",
      "image": "./images/characters/BTD6_005-SuperMonkey.png"
    },
    {
      "name": "VTSG",
      "image": "./images/characters/BTD6_555-SuperMonkey.png"
    },
    {
      "name": "VTSG Sun Avatar",
      "image": "./images/characters/BTD6_555-SunAvatarTurret.png"
    }
  ],
  "Ninja Monkey": [
    {
      "name": "Ninja Monkey",
      "image": "./images/characters/BTD6_000-NinjaMonkey.png"
    },
    {
      "name": "Ninja Discipline",
      "image": "./images/characters/BTD6_100-NinjaMonkey.png"
    },
    {
      "name": "Distraction",
      "image": "./images/characters/BTD6_010-NinjaMonkey.png"
    },
    {
      "name": "Seeking Shuriken",
      "image": "./images/characters/BTD6_001-NinjaMonkey.png"
    },
    {
      "name": "Sharp Shurikens",
      "image": "./images/characters/BTD6_200-NinjaMonkey.png"
    },
    {
      "name": "Counter-Espionage",
      "image": "./images/characters/BTD6_020-NinjaMonkey.png"
    },
    {
      "name": "Caltrops",
      "image": "./images/characters/BTD6_002-NinjaMonkey.png"
    },
    {
      "name": "Double Shot",
      "image": "./images/characters/BTD6_300-NinjaMonkey.png"
    },
    {
      "name": "Shinobi Tactics",
      "image": "./images/characters/BTD6_030-NinjaMonkey.png"
    },
    {
      "name": "Flash Bomb",
      "image": "./images/characters/BTD6_003-NinjaMonkey.png"
    },
    {
      "name": "Bloonjitsu",
      "image": "./images/characters/BTD6_400-NinjaMonkey.png"
    },
    {
      "name": "Bloon Sabotage",
      "image": "./images/characters/BTD6_040-NinjaMonkey.png"
    },
    {
      "name": "Sticky Bomb",
      "image": "./images/characters/BTD6_004-NinjaMonkey.png"
    },
    {
      "name": "Grandmaster Ninja",
      "image": "./images/characters/BTD6_500-NinjaMonkey.png"
    },
    {
      "name": "Grand Saboteur",
      "image": "./images/characters/BTD6_050-NinjaMonkey.png"
    },
    {
      "name": "Master Bomber",
      "image": "./images/characters/BTD6_005-NinjaMonkey.png"
    },
    {
      "name": "Ascended Shadow",
      "image": "./images/characters/BTD6_Paragon-AscendedShadow.png"
    }
  ],
  "Alchemist": [
    {
      "name": "Alchemist",
      "image": "./images/characters/BTD6_000-Alchemist.png"
    },
    {
      "name": "Larger Potions",
      "image": "./images/characters/BTD6_100-Alchemist.png"
    },
    {
      "name": "Stronger Acid",
      "image": "./images/characters/BTD6_010-Alchemist.png"
    },
    {
      "name": "Faster Throwing",
      "image": "./images/characters/BTD6_001-Alchemist.png"
    },
    {
      "name": "Acidic Mixture Dip",
      "image": "./images/characters/BTD6_200-Alchemist.png"
    },
    {
      "name": "Perishing Potions",
      "image": "./images/characters/BTD6_020-Alchemist.png"
    },
    {
      "name": "Acid Pool",
      "image": "./images/characters/BTD6_002-Alchemist.png"
    },
    {
      "name": "Berserker Brew",
      "image": "./images/characters/BTD6_300-Alchemist.png"
    },
    {
      "name": "Unstable Concoction",
      "image": "./images/characters/BTD6_030-Alchemist.png"
    },
    {
      "name": "Lead to Gold",
      "image": "./images/characters/BTD6_003-Alchemist.png"
    },
    {
      "name": "Stronger Stimulant",
      "image": "./images/characters/BTD6_400-Alchemist.png"
    },
    {
      "name": "Transforming Tonic",
      "image": "./images/characters/BTD6_040-Alchemist.png"
    },
    {
      "name": "Rubber to Gold",
      "image": "./images/characters/BTD6_004-Alchemist.png"
    },
    {
      "name": "Permanent Brew",
      "image": "./images/characters/BTD6_500-Alchemist.png"
    },
    {
      "name": "Total Transformation",
      "image": "./images/characters/BTD6_050-Alchemist.png"
    },
    {
      "name": "Bloon Master Alchemist",
      "image": "./images/characters/BTD6_005-Alchemist.png"
    }
  ],
  "Druid": [
    {
      "name": "Druid",
      "image": "./images/characters/BTD6_000-Druid.png"
    },
    {
      "name": "Hard Thorns",
      "image": "./images/characters/BTD6_100-Druid.png"
    },
    {
      "name": "Thorn Swarm",
      "image": "./images/characters/BTD6_010-Druid.png"
    },
    {
      "name": "Druidic Reach",
      "image": "./images/characters/BTD6_001-Druid.png"
    },
    {
      "name": "Heart of Thunder",
      "image": "./images/characters/BTD6_200-Druid.png"
    },
    {
      "name": "Heart of Oak",
      "image": "./images/characters/BTD6_020-Druid.png"
    },
    {
      "name": "Heart of Vengeance",
      "image": "./images/characters/BTD6_002-Druid.png"
    },
    {
      "name": "Druid of the Storm",
      "image": "./images/characters/BTD6_300-Druid.png"
    },
    {
      "name": "Druid of the Jungle",
      "image": "./images/characters/BTD6_030-Druid.png"
    },
    {
      "name": "Druid of Wrath",
      "image": "./images/characters/BTD6_003-Druid.png"
    },
    {
      "name": "Ball Lightning",
      "image": "./images/characters/BTD6_400-Druid.png"
    },
    {
      "name": "Jungle's Bounty",
      "image": "./images/characters/BTD6_040-Druid.png"
    },
    {
      "name": "Poplust",
      "image": "./images/characters/BTD6_004-Druid.png"
    },
    {
      "name": "Monarch of Storms",
      "image": "./images/characters/BTD6_500-Druid.png"
    },
    {
      "name": "Spirit of the Forest",
      "image": "./images/characters/BTD6_050-Druid.png"
    },
    {
      "name": "Avatar of Wrath",
      "image": "./images/characters/BTD6_005-Druid.png"
    },
    {
      "name": "Root of all Nature",
      "image": "./images/characters/BTD6_Paragon-RootOfAllNature.png"
    }
  ],
  "Mermonkey": [
    {
      "name": "Mermonkey",
      "image": "./images/characters/BTD6_000-Mermonkey.png"
    },
    {
      "name": "Trident Efficiency",
      "image": "./images/characters/BTD6_100-Mermonkey.png"
    },
    {
      "name": "Sharper Prongs",
      "image": "./images/characters/BTD6_010-Mermonkey.png"
    },
    {
      "name": "Echosense Precision",
      "image": "./images/characters/BTD6_001-Mermonkey.png"
    },
    {
      "name": "Trident Swiftness",
      "image": "./images/characters/BTD6_200-Mermonkey.png"
    },
    {
      "name": "Tidal Chill",
      "image": "./images/characters/BTD6_020-Mermonkey.png"
    },
    {
      "name": "Echosense Network",
      "image": "./images/characters/BTD6_002-Mermonkey.png"
    },
    {
      "name": "Abyss Dweller",
      "image": "./images/characters/BTD6_300-Mermonkey.png"
    },
    {
      "name": "Riptide Champion",
      "image": "./images/characters/BTD6_030-Mermonkey.png"
    },
    {
      "name": "Alluring Melody",
      "image": "./images/characters/BTD6_003-Mermonkey.png"
    },
    {
      "name": "Abyssal Warrior",
      "image": "./images/characters/BTD6_400-Mermonkey.png"
    },
    {
      "name": "Arctic Knight",
      "image": "./images/characters/BTD6_040-Mermonkey.png"
    },
    {
      "name": "Symphonic Resonance",
      "image": "./images/characters/BTD6_004-Mermonkey.png"
    },
    {
      "name": "Lord of the Abyss",
      "image": "./images/characters/BTD6_500-Mermonkey.png"
    },
    {
      "name": "Popseidon",
      "image": "./images/characters/BTD6_050-Mermonkey.png"
    },
    {
      "name": "The Final Harmonic",
      "image": "./images/characters/BTD6_005-Mermonkey.png"
    }
  ],
  "Banana Farm": [
    {
      "name": "Banana Farm",
      "image": "./images/characters/BTD6_000-BananaFarm.png"
    },
    {
      "name": "Increased Production",
      "image": "./images/characters/BTD6_100-BananaFarm.png"
    },
    {
      "name": "Long Life Bananas",
      "image": "./images/characters/BTD6_010-BananaFarm.png"
    },
    {
      "name": "EZ Collect",
      "image": "./images/characters/BTD6_001-BananaFarm.png"
    },
    {
      "name": "Greater Production",
      "image": "./images/characters/BTD6_200-BananaFarm.png"
    },
    {
      "name": "Valuable Bananas",
      "image": "./images/characters/BTD6_020-BananaFarm.png"
    },
    {
      "name": "Banana Salvage",
      "image": "./images/characters/BTD6_002-BananaFarm.png"
    },
    {
      "name": "Banana Plantation",
      "image": "./images/characters/BTD6_300-BananaFarm.png"
    },
    {
      "name": "Monkey Bank",
      "image": "./images/characters/BTD6_030-BananaFarm.png"
    },
    {
      "name": "Marketplace",
      "image": "./images/characters/BTD6_003-BananaFarm.png"
    },
    {
      "name": "Banana Research Facility",
      "image": "./images/characters/BTD6_400-BananaFarm.png"
    },
    {
      "name": "IMF Loan",
      "image": "./images/characters/BTD6_040-BananaFarm.png"
    },
    {
      "name": "Central Market",
      "image": "./images/characters/BTD6_004-BananaFarm.png"
    },
    {
      "name": "Banana Central",
      "image": "./images/characters/BTD6_500-BananaFarm.png"
    },
    {
      "name": "Monkey-Nomics",
      "image": "./images/characters/BTD6_050-BananaFarm.png"
    },
    {
      "name": "Monkey Wall Street",
      "image": "./images/characters/BTD6_005-BananaFarm.png"
    }
  ],
  "Spike Factory": [
    {
      "name": "Spike Factory",
      "image": "./images/characters/BTD6_000-SpikeFactory.png"
    },
    {
      "name": "Bigger Stacks",
      "image": "./images/characters/BTD6_100-SpikeFactory.png"
    },
    {
      "name": "Faster Production",
      "image": "./images/characters/BTD6_010-SpikeFactory.png"
    },
    {
      "name": "Long Reach",
      "image": "./images/characters/BTD6_001-SpikeFactory.png"
    },
    {
      "name": "White Hot Spikes",
      "image": "./images/characters/BTD6_200-SpikeFactory.png"
    },
    {
      "name": "Even Faster Production",
      "image": "./images/characters/BTD6_020-SpikeFactory.png"
    },
    {
      "name": "Smart Spikes",
      "image": "./images/characters/BTD6_002-SpikeFactory.png"
    },
    {
      "name": "Spiked Balls",
      "image": "./images/characters/BTD6_300-SpikeFactory.png"
    },
    {
      "name": "MOAB SHREDR",
      "image": "./images/characters/BTD6_030-SpikeFactory.png"
    },
    {
      "name": "Long Life Spikes",
      "image": "./images/characters/BTD6_003-SpikeFactory.png"
    },
    {
      "name": "Spiked Mines",
      "image": "./images/characters/BTD6_400-SpikeFactory.png"
    },
    {
      "name": "Spike Storm",
      "image": "./images/characters/BTD6_040-SpikeFactory.png"
    },
    {
      "name": "Deadly Spikes",
      "image": "./images/characters/BTD6_004-SpikeFactory.png"
    },
    {
      "name": "Super Mines",
      "image": "./images/characters/BTD6_500-SpikeFactory.png"
    },
    {
      "name": "Carpet of Spikes",
      "image": "./images/characters/BTD6_050-SpikeFactory.png"
    },
    {
      "name": "Perma-Spike",
      "image": "./images/characters/BTD6_005-SpikeFactory.png"
    },
    {
      "name": "Mega Massive Munitions Factory",
      "image": "./images/characters/BTD6_SpikeFactoryParagon.png"
    }
  ],
  "Monkey Village": [
    {
      "name": "Monkey Village",
      "image": "./images/characters/BTD6_000-MonkeyVillage.png"
    },
    {
      "name": "Bigger Radius",
      "image": "./images/characters/BTD6_100-MonkeyVillage.png"
    },
    {
      "name": "Grow Blocker",
      "image": "./images/characters/BTD6_010-MonkeyVillage.png"
    },
    {
      "name": "Monkey Business",
      "image": "./images/characters/BTD6_001-MonkeyVillage.png"
    },
    {
      "name": "Jungle Drums",
      "image": "./images/characters/BTD6_200-MonkeyVillage.png"
    },
    {
      "name": "Radar Scanner",
      "image": "./images/characters/BTD6_020-MonkeyVillage.png"
    },
    {
      "name": "Monkey Commerce",
      "image": "./images/characters/BTD6_002-MonkeyVillage.png"
    },
    {
      "name": "Primary Training",
      "image": "./images/characters/BTD6_300-MonkeyVillage.png"
    },
    {
      "name": "Monkey Intelligence Bureau",
      "image": "./images/characters/BTD6_030-MonkeyVillage.png"
    },
    {
      "name": "Monkey Town",
      "image": "./images/characters/BTD6_003-MonkeyVillage.png"
    },
    {
      "name": "Primary Mentoring",
      "image": "./images/characters/BTD6_400-MonkeyVillage.png"
    },
    {
      "name": "Call to Arms",
      "image": "./images/characters/BTD6_040-MonkeyVillage.png"
    },
    {
      "name": "Monkey City",
      "image": "./images/characters/BTD6_004-MonkeyVillage.png"
    },
    {
      "name": "Primary Expertise",
      "image": "./images/characters/BTD6_500-MonkeyVillage.png"
    },
    {
      "name": "Homeland Defense",
      "image": "./images/characters/BTD6_050-MonkeyVillage.png"
    },
    {
      "name": "Monkeyopolis",
      "image": "./images/characters/BTD6_005-MonkeyVillage.png"
    }
  ],
  "Engineer Monkey": [
    {
      "name": "Engineer Monkey",
      "image": "./images/characters/BTD6_000-EngineerMonkey.png"
    },
    {
      "name": "Sentry Gun",
      "image": "./images/characters/BTD6_100-EngineerMonkey.png"
    },
    {
      "name": "Larger Service Area",
      "image": "./images/characters/BTD6_010-EngineerMonkey.png"
    },
    {
      "name": "Oversize Nails",
      "image": "./images/characters/BTD6_001-EngineerMonkey.png"
    },
    {
      "name": "Faster Engineering",
      "image": "./images/characters/BTD6_200-EngineerMonkey.png"
    },
    {
      "name": "Deconstruction",
      "image": "./images/characters/BTD6_020-EngineerMonkey.png"
    },
    {
      "name": "Pin",
      "image": "./images/characters/BTD6_002-EngineerMonkey.png"
    },
    {
      "name": "Sprockets",
      "image": "./images/characters/BTD6_300-EngineerMonkey.png"
    },
    {
      "name": "Cleansing Foam",
      "image": "./images/characters/BTD6_030-EngineerMonkey.png"
    },
    {
      "name": "Double Gun",
      "image": "./images/characters/BTD6_003-EngineerMonkey.png"
    },
    {
      "name": "Sentry Expert",
      "image": "./images/characters/BTD6_400-EngineerMonkey.png"
    },
    {
      "name": "Overclock",
      "image": "./images/characters/BTD6_040-EngineerMonkey.png"
    },
    {
      "name": "Bloon Trap",
      "image": "./images/characters/BTD6_004-EngineerMonkey.png"
    },
    {
      "name": "Sentry Champion",
      "image": "./images/characters/BTD6_500-EngineerMonkey.png"
    },
    {
      "name": "Ultraboost",
      "image": "./images/characters/BTD6_050-EngineerMonkey.png"
    },
    {
      "name": "XXXL Trap",
      "image": "./images/characters/BTD6_005-EngineerMonkey.png"
    },
    {
      "name": "Master Builder",
      "image": "./images/characters/BTD6_Paragon_-_MasterBuilder.png"
    }
  ],
  "Beast Handler": [
    {
      "name": "Beast Handler",
      "image": "./images/characters/BTD6_000-BeastHandler.png"
    },
    {
      "name": "Piranha",
      "image": "./images/characters/BTD6_100-BeastHandler.png"
    },
    {
      "name": "Microraptor",
      "image": "./images/characters/BTD6_010-BeastHandler.png"
    },
    {
      "name": "Gyrfalcon",
      "image": "./images/characters/BTD6_001-BeastHandler.png"
    },
    {
      "name": "Barracuda",
      "image": "./images/characters/BTD6_200-BeastHandler.png"
    },
    {
      "name": "Adasaurus",
      "image": "./images/characters/BTD6_020-BeastHandler.png"
    },
    {
      "name": "Horned Owl",
      "image": "./images/characters/BTD6_002-BeastHandler.png"
    },
    {
      "name": "Great White",
      "image": "./images/characters/BTD6_300-BeastHandler.png"
    },
    {
      "name": "Velociraptor",
      "image": "./images/characters/BTD6_030-BeastHandler.png"
    },
    {
      "name": "Golden Eagle",
      "image": "./images/characters/BTD6_003-BeastHandler.png"
    },
    {
      "name": "Orca",
      "image": "./images/characters/BTD6_400-BeastHandler.png"
    },
    {
      "name": "Tyrannosaurus Rex",
      "image": "./images/characters/BTD6_040-BeastHandler.png"
    },
    {
      "name": "Giant Condor",
      "image": "./images/characters/BTD6_004-BeastHandler.png"
    },
    {
      "name": "Megalodon",
      "image": "./images/characters/BTD6_500-BeastHandler.png"
    },
    {
      "name": "Giganotosaurus",
      "image": "./images/characters/BTD6_050-BeastHandler.png"
    },
    {
      "name": "Pouākai",
      "image": "./images/characters/BTD6_005-BeastHandler.png"
    }
  ],
  "Quincy": [
    {
      "name": "Levels 1–2",
      "image": "./images/characters/BTD6_QuincyPortrait.png"
    },
    {
      "name": "Levels 3–6",
      "image": "./images/characters/BTD6_QuincyPortraitLvl3.png"
    },
    {
      "name": "Levels 7–9",
      "image": "./images/characters/BTD6_QuincyPortraitLvl7.png"
    },
    {
      "name": "Levels 10–19",
      "image": "./images/characters/BTD6_QuincyPortraitLvl10.png"
    },
    {
      "name": "Level 20",
      "image": "./images/characters/BTD6_QuincyPortraitLvl20.png"
    }
  ],
  "Gwendolin": [
    {
      "name": "Levels 1–2",
      "image": "./images/characters/BTD6_GwendolinPortrait.png"
    },
    {
      "name": "Levels 3–9",
      "image": "./images/characters/BTD6_GwendolinPortraitLvl3.png"
    },
    {
      "name": "Levels 10–19",
      "image": "./images/characters/BTD6_GwendolinPortraitLvl10.png"
    },
    {
      "name": "Level 20",
      "image": "./images/characters/BTD6_GwendolinPortraitLvl20.png"
    }
  ],
  "Striker Jones": [
    {
      "name": "Levels 1–2",
      "image": "./images/characters/BTD6_StrikerJonesPortrait.png"
    },
    {
      "name": "Levels 3–9",
      "image": "./images/characters/BTD6_StrikerJonesLv3.png"
    },
    {
      "name": "Levels 10–19",
      "image": "./images/characters/BTD6_StrikerJonesLv10.png"
    },
    {
      "name": "Level 20",
      "image": "./images/characters/BTD6_StrikerJonesLv20.png"
    }
  ],
  "Obyn Greenfoot": [
    {
      "name": "Levels 1–2",
      "image": "./images/characters/BTD6_ObynGreenFoot.png"
    },
    {
      "name": "Levels 3–9",
      "image": "./images/characters/BTD6_ObynGreenfootLv3.png"
    },
    {
      "name": "Levels 10–19",
      "image": "./images/characters/BTD6_ObynGreenfootLv10.png"
    },
    {
      "name": "Level 20",
      "image": "./images/characters/BTD6_ObynGreenfootLv20.png"
    },
    {
      "name": "Nature's Ward Totem",
      "image": "./images/characters/BTD6_Totem.png"
    }
  ],
  "Benjamin": [
    {
      "name": "Levels 1–2",
      "image": "./images/characters/BTD6_BenjaminPortrait.png"
    },
    {
      "name": "Levels 3–6",
      "image": "./images/characters/BTD6_BenjaminPortraitLvl3.png"
    },
    {
      "name": "Levels 7–9",
      "image": "./images/characters/BTD6_BenjaminPortraitLvl7.png"
    },
    {
      "name": "Levels 10–19",
      "image": "./images/characters/BTD6_BenjaminPortraitLvl10.png"
    },
    {
      "name": "Level 20",
      "image": "./images/characters/BTD6_BenjaminPortraitLvl20.png"
    }
  ],
  "Pat Fusty": [
    {
      "name": "Levels 1–2",
      "image": "./images/characters/BTD6_PatFustyPortrait.png"
    },
    {
      "name": "Levels 3–4",
      "image": "./images/characters/BTD6_PatFustyPortraitLvl3.png"
    },
    {
      "name": "Levels 5–9",
      "image": "./images/characters/BTD6_PatFustyPortraitLvl5.png"
    },
    {
      "name": "Levels 10–19",
      "image": "./images/characters/BTD6_PatFustyPortraitLvl10.png"
    },
    {
      "name": "Level 20",
      "image": "./images/characters/BTD6_PatFustyPortraitLvl20.png"
    }
  ],
  "Captain Churchill": [
    {
      "name": "Levels 1–2",
      "image": "./images/characters/BTD6_CaptainChurchillPortrait.png"
    },
    {
      "name": "Levels 3–4",
      "image": "./images/characters/BTD6_CaptainChurchillPortraitLvl3.png"
    },
    {
      "name": "Level 5",
      "image": "./images/characters/BTD6_CaptainChurchillPortraitLvl5.png"
    },
    {
      "name": "Levels 6–9",
      "image": "./images/characters/BTD6_CaptainChurchillPortraitLvl6.png"
    },
    {
      "name": "Levels 10–19",
      "image": "./images/characters/BTD6_CaptainChurchillPortraitLvl10.png"
    },
    {
      "name": "Level 20",
      "image": "./images/characters/BTD6_CaptainChurchillPortraitLvl20.png"
    }
  ],
  "Ezili": [
    {
      "name": "Levels 1–2",
      "image": "./images/characters/BTD6_EziliPortrait.png"
    },
    {
      "name": "Levels 3–6",
      "image": "./images/characters/BTD6_EziliPortraitLvl3.png"
    },
    {
      "name": "Levels 7–9",
      "image": "./images/characters/BTD6_EziliPortraitLvl7.png"
    },
    {
      "name": "Levels 10–15",
      "image": "./images/characters/BTD6_EziliPortraitLvl10.png"
    },
    {
      "name": "Levels 16–19",
      "image": "./images/characters/BTD6_EziliPortraitLvl16.png"
    },
    {
      "name": "Level 20",
      "image": "./images/characters/BTD6_EziliPortraitLvl20.png"
    },
    {
      "name": "Sacrificial Totem",
      "image": "./images/characters/BTD6_EziliTotem.png"
    }
  ],
  "Rosalia": [
    {
      "name": "Level 1",
      "image": "./images/characters/BTD6_RosaliaPortrait.png"
    },
    {
      "name": "Levels 2–4",
      "image": "./images/characters/BTD6_RosaliaPortraitLvl2.png"
    },
    {
      "name": "Levels 5–6",
      "image": "./images/characters/BTD6_RosaliaPortraitLvl5.png"
    },
    {
      "name": "Levels 7–12",
      "image": "./images/characters/BTD6_RosaliaPortraitLvl7.png"
    },
    {
      "name": "Levels 13–19",
      "image": "./images/characters/BTD6_RosaliaPortraitLvl13.png"
    },
    {
      "name": "Level 20",
      "image": "./images/characters/BTD6_RosaliaPortraitLvl20.png"
    }
  ],
  "Etienne": [
    {
      "name": "Levels 1–2",
      "image": "./images/characters/BTD6_EtiennePortrait.png"
    },
    {
      "name": "Levels 3–6",
      "image": "./images/characters/BTD6_EtiennePortraitLvl3.png"
    },
    {
      "name": "Levels 7–9",
      "image": "./images/characters/BTD6_EtiennePortraitLvl7.png"
    },
    {
      "name": "Levels 10–19",
      "image": "./images/characters/BTD6_EtiennePortraitLvl10.png"
    },
    {
      "name": "Level 20",
      "image": "./images/characters/BTD6_EtiennePortraitLvl20.png"
    }
  ],
  "Sauda": [
    {
      "name": "Levels 1–2",
      "image": "./images/characters/BTD6_SaudaPortrait.png"
    },
    {
      "name": "Levels 3–9",
      "image": "./images/characters/BTD6_SaudaPortraitLvl3.png"
    },
    {
      "name": "Levels 10–19",
      "image": "./images/characters/BTD6_SaudaPortraitLvl10.png"
    },
    {
      "name": "Level 20",
      "image": "./images/characters/BTD6_SaudaPortraitLvl20.png"
    }
  ],
  "Adora": [
    {
      "name": "Levels 1–2",
      "image": "./images/characters/BTD6_AdoraPortrait.png"
    },
    {
      "name": "Levels 3–6",
      "image": "./images/characters/BTD6_AdoraPortraitLvl3.png"
    },
    {
      "name": "Levels 7–9",
      "image": "./images/characters/BTD6_AdoraPortraitLvl7.png"
    },
    {
      "name": "Levels 10–19",
      "image": "./images/characters/BTD6_AdoraPortraitLvl10.png"
    },
    {
      "name": "Level 20",
      "image": "./images/characters/BTD6_AdoraPortraitLvl20.png"
    },
    {
      "name": "True Adora",
      "image": "./images/characters/BTD6_AdoraPortraitLvl20SunGod.png"
    },
    {
      "name": "Vengeful Adora",
      "image": "./images/characters/BTD6_AdoraPortraitLvl20SunGodVengeful.png"
    }
  ],
  "Admiral Brickell": [
    {
      "name": "Levels 1–2",
      "image": "./images/characters/BTD6_AdmiralBrickellPortrait.png"
    },
    {
      "name": "Levels 3–6",
      "image": "./images/characters/BTD6_AdmiralBrickellPortraitLvl3.png"
    },
    {
      "name": "Levels 7–9",
      "image": "./images/characters/BTD6_AdmiralBrickellPortraitLvl7.png"
    },
    {
      "name": "Levels 10–19",
      "image": "./images/characters/BTD6_AdmiralBrickellPortraitLvl10.png"
    },
    {
      "name": "Level 20",
      "image": "./images/characters/BTD6_AdmiralBrickellPortraitLvl20.png"
    }
  ],
  "Psi": [
    {
      "name": "Levels 1–2",
      "image": "./images/characters/BTD6_PsiPortrait.png"
    },
    {
      "name": "Levels 3–7",
      "image": "./images/characters/BTD6_PsiPortraitLvl3.png"
    },
    {
      "name": "Level 8",
      "image": "./images/characters/BTD6_PsiPortraitLvl8.png"
    },
    {
      "name": "Level 9",
      "image": "./images/characters/BTD6_PsiPortraitLvl9.png"
    },
    {
      "name": "Levels 10–16",
      "image": "./images/characters/BTD6_PsiPortraitLvl10.png"
    },
    {
      "name": "Levels 17–19",
      "image": "./images/characters/BTD6_PsiPortraitLvl17.png"
    },
    {
      "name": "Level 20",
      "image": "./images/characters/BTD6_PsiPortraitLvl20.png"
    }
  ],
  "Geraldo": [
    {
      "name": "Levels 1–2",
      "image": "./images/characters/BTD6_GeraldoPortrait.png"
    },
    {
      "name": "Levels 3–6",
      "image": "./images/characters/BTD6_GeraldoPortraitLvl3.png"
    },
    {
      "name": "Levels 7–9",
      "image": "./images/characters/BTD6_GeraldoPortraitLvl7.png"
    },
    {
      "name": "Levels 10–19",
      "image": "./images/characters/BTD6_GeraldoPortraitLvl10.png"
    },
    {
      "name": "Level 20",
      "image": "./images/characters/BTD6_GeraldoPortraitLvl20.png"
    }
  ],
  "Corvus": [
    {
      "name": "Spiritless",
      "image": "./images/characters/BTD6_CorvusPortraitSpiritless.png"
    },
    {
      "name": "Levels 1–2",
      "image": "./images/characters/BTD6_CorvusPortrait.png"
    },
    {
      "name": "Levels 3–6",
      "image": "./images/characters/BTD6_CorvusLv3.png"
    },
    {
      "name": "Levels 7–9",
      "image": "./images/characters/BTD6_CorvusLv7.png"
    },
    {
      "name": "Levels 10–14",
      "image": "./images/characters/BTD6_CorvusLv10.png"
    },
    {
      "name": "Levels 15–19",
      "image": "./images/characters/BTD6_CorvusLv15.png"
    },
    {
      "name": "Level 20",
      "image": "./images/characters/BTD6_CorvusLv20.png"
    }
  ],
  "Silas": [
    {
      "name": "Levels 1–2",
      "image": "./images/characters/BTD6_SilasPortrait.png"
    },
    {
      "name": "Levels 3–6",
      "image": "./images/characters/BTD6_SilasPortraitLvl3.png"
    },
    {
      "name": "Levels 7–9",
      "image": "./images/characters/BTD6_SilasPortraitLvl7.png"
    },
    {
      "name": "Levels 10–19",
      "image": "./images/characters/BTD6_SilasPortraitsLvl10.png"
    },
    {
      "name": "Level 20",
      "image": "./images/characters/BTD6_SilasPortraitsLvl20.png"
    }
  ],
  "Powers": [
    {
      "name": "Banana Farmer",
      "image": "./images/characters/BTD6_BananaFarmerPortrait.png"
    },
    {
      "name": "Banana Farmer Banana Costume",
      "image": "./images/characters/BTD6_BananaCostumeFarmerPortrait.png"
    },
    {
      "name": "The Grim Farmer",
      "image": "./images/characters/BTD6_SpookyBananaFarmerPortrait.png"
    },
    {
      "name": "Banana Farmer Pro",
      "image": "./images/characters/BTD6_BananaFarmerPro.png"
    },
    {
      "name": "Battle Cat!",
      "image": "./images/characters/BTD6_BattleCatPortrait.png"
    },
    {
      "name": "Camo Trap",
      "image": "./images/characters/BTD6_CamoTrap.png"
    },
    {
      "name": "Cash Drop",
      "image": "./images/characters/BTD6_CashDrop.png"
    },
    {
      "name": "Cave Monkey",
      "image": "./images/characters/BTD6_CaveMonkeyPortrait.png"
    },
    {
      "name": "Energizing Totem",
      "image": "./images/characters/BTD6_EnergisingTotemPortrait.png"
    },
    {
      "name": "Christmas Tree Energizing Totem",
      "image": "./images/characters/BTD6_ChristmasTreeTotemPortrait.png"
    },
    {
      "name": "Havoc Staff",
      "image": "./images/characters/BTD6_SkeletorPowerPortrait.png"
    },
    {
      "name": "Glue Trap",
      "image": "./images/characters/BTD6_GlueTrap.png"
    },
    {
      "name": "MOAB Mine",
      "image": "./images/characters/BTD6_MoabMines.png"
    },
    {
      "name": "Monkey Boost",
      "image": "./images/characters/BTD6_MonkeyBoost.png"
    },
    {
      "name": "Pontoon",
      "image": "./images/characters/BTD6_PontoonPortrait.png"
    },
    {
      "name": "Iceberg Pontoon",
      "image": "./images/characters/BTD6_PontoonIcebergPortrait.png"
    },
    {
      "name": "Chocolate Pontoon",
      "image": "./images/characters/BTD6_PontoonChocolatePortrait.png"
    },
    {
      "name": "Portable Lake",
      "image": "./images/characters/BTD6_PortableLakePortrait.png"
    },
    {
      "name": "Portable Lava Lake",
      "image": "./images/characters/BTD6_LavaLakePortrait.png"
    },
    {
      "name": "Road Spikes",
      "image": "./images/characters/BTD6_HotSpikes.png"
    },
    {
      "name": "Super Monkey Beacon",
      "image": "./images/characters/BTD6_SuperMonkeyBeacon.png"
    },
    {
      "name": "Super Monkey Storm",
      "image": "./images/characters/BTD6_SuperMonkeyStormPortrait.png"
    },
    {
      "name": "Sword of Protection",
      "image": "./images/characters/BTD6_SheRaSwordPart.png"
    },
    {
      "name": "Tech Bot",
      "image": "./images/characters/BTD6_TechbotPortrait.png"
    },
    {
      "name": "Retro Techbot",
      "image": "./images/characters/BTD6_RetroTechbotPortrait.png"
    },
    {
      "name": "Thrive",
      "image": "./images/characters/BTD6_Thrive.png"
    },
    {
      "name": "Time Stop",
      "image": "./images/characters/BTD6_TimeStop.png"
    }
  ],
  "Miscellaneous": [
    {
      "name": "Dungeon Statue",
      "image": "./images/characters/BTD6_DarkDungeonStatuePortrait.png"
    }
  ]
}

    return Object
      .entries(data)
      .filter(([, items]) => (
        Array.isArray(items) &&
        items.some(item => item && item.image)
      ))
      .map(([name, items]) => ({
        name,
        items: items.filter(item => item && item.image)
      }))

  }

  function resolveSelectedCharacter() {

    if (!characterGroups.length) return;

    const savedGroup =
      characterGroups.find(group => (
        group.name === selectedCharacterGroup
      ));

    const groupByImage =
      characterGroups.find(group => (
        group.items.some(item => item.image === selectedCharacter)
      ));

    const group =
      groupByImage || savedGroup || characterGroups[0];

    const item =
      group.items.find(option => (
        option.image === selectedCharacter
      )) || group.items[0];

    selectedCharacterGroup =
      group.name;

    selectedCharacter =
      item.image;

  }

  function renderCharacterGroups() {

    createList(
      characterList,
      characterGroups.map(group => ({
        value: group.name,
        image: group.items[0].image,
        label: group.name
      })),
      selectedCharacterGroup,
      groupName => {

        selectedCharacterGroup =
          groupName;

        saveState();

        renderCharacterVariants();

      }
    );

  }

  function renderCharacterVariants() {

    const group =
      characterGroups.find(item => (
        item.name === selectedCharacterGroup
      ));

    if (!group) {
      renderCharacterGroups();
      return;
    }

    characterList.innerHTML = "";

    const header =
      document.createElement("div");

    header.className =
      "character-step-header";

    const backButton =
      document.createElement("button");

    backButton.type =
      "button";

    backButton.textContent =
      "Voltar";

    backButton.onclick =
      renderCharacterGroups;

    const title =
      document.createElement("span");

    title.textContent =
      group.name;

    header.appendChild(backButton);

    header.appendChild(title);

    characterList.appendChild(header);

    const options =
      document.createElement("div");

    options.className =
      "character-variant-list";

    characterList.appendChild(options);

    createList(
      options,
      group.items.map(item => ({
        value: item.image,
        image: item.image,
        label: item.name
      })),
      selectedCharacter,
      value => {

        selectedCharacter =
          value;

        saveState();

        render();

      }
    );

  }

  function scrollActiveOptionsIntoView() {

    Array
      .from(document.querySelectorAll(".active"))
      .forEach(option => {
        option.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      });

  }

  function initializeBackgrounds() {

    createList(
      bgList,
      backgrounds,
      selectedBg,
      value => {

      selectedBg = value;

      saveState();

      render();

      }
    );

  }

  async function initializeCharacters() {

    try {

      characterGroups =
        await loadCharacterGroups();

      resolveSelectedCharacter();

      renderCharacterGroups();

      scrollActiveOptionsIntoView();

    } catch (error) {

      characterList.innerHTML =
        '<div class="sidebar-message">Nao foi possivel carregar bloons_images.json.</div>';

      console.error(error);

    }

  }

  function loadImage(src) {

    const imageUrl =
      getCachedImageUrl(src);

    if (imageLoadCache.has(imageUrl)) {
      return imageLoadCache.get(imageUrl);
    }

    const imagePromise =
      new Promise(resolve => {

      const img = new Image();

      img.crossOrigin = "anonymous";

      img.decoding = "async";

      img.fetchPriority = "high";

      img.onload = () => resolve(img);

      img.src = imageUrl;

    });

    imageLoadCache.set(
      imageUrl,
      imagePromise
    );

    return imagePromise;

  }

  function drawImageCover(
    image,
    x,
    y,
    width,
    height
  ) {

    const scale =
      Math.max(
        width / image.width,
        height / image.height
      );

    const sourceWidth =
      width / scale;

    const sourceHeight =
      height / scale;

    const sourceX =
      (image.width - sourceWidth) / 2;

    const sourceY =
      (image.height - sourceHeight) / 2;

    ctx.drawImage(
      image,
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight,
      x,
      y,
      width,
      height
    );

  }

  function wrapText(
    text,
    maxWidth
  ) {

    const words = text.split(" ");

    const lines = [];

    let line = "";

    for (const word of words) {

      const test =
        line + word + " ";

      const width =
        ctx.measureText(test).width;

      if (
        width > maxWidth &&
        line
      ) {

        lines.push(line.trim());

        line = word + " ";

      } else {

        line = test;

      }

    }

    lines.push(line.trim());

    return lines;

  }

  async function render() {

    if (!selectedBg || !selectedCharacter) return;

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    const bg =
      await loadImage(selectedBg);

    ctx.save();

    ctx.filter =
      "blur(2px)";

    drawImageCover(
      bg,
      0,
      0,
      canvas.width,
      canvas.height
    );

    ctx.restore();

    ctx.fillStyle =
      "rgba(0,0,0,.2)";

    ctx.fillRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    const character =
      await loadImage(selectedCharacter);

    const targetHeight = 650;

    const scale =
      targetHeight / character.height;

    const charWidth =
      character.width * scale;
	const charX = canvas.width - charWidth - 30;
	const charY = canvas.height/2 - targetHeight/2;

    ctx.drawImage(
      character,
      charX,
      charY,
      charWidth,
      targetHeight
    );

    ctx.font = '400 92px "Luckiest Guy", cursive, sans-serif';
    ctx.textBaseline = "top";
    ctx.lineWidth = 18;
    ctx.strokeStyle = "rgba(0,0,0,.9)";
    ctx.fillStyle = "white";

    const title =
      titleInput.value
        .toUpperCase();

    const textRegionX = 30;
    const textRegionWidth = 650;
    const textRegionCenterX =
      textRegionX + (textRegionWidth / 2);

    const lines =
      wrapText(
        title,
        textRegionWidth
      );

    const titleLineHeight = 90;
    const bottomMargin = 60;
    const dateGap = 20;
    const rectHeight = 82;

    const textBlockHeight =
      (lines.length * titleLineHeight) +
      dateGap +
      rectHeight;

    let y =
      canvas.height - bottomMargin - textBlockHeight;

    ctx.textAlign =
      "center";

    for (const line of lines) {

      ctx.strokeText(
        line,
        textRegionCenterX,
        y
      );

      ctx.fillText(
        line,
        textRegionCenterX,
        y
      );

      y += titleLineHeight;

    }

    const date =
      dateInput.value
        .toUpperCase();

    ctx.font =
      "900 54px Arial";

    const paddingX = 28;

    const textWidth =
      ctx.measureText(date).width;

    const rectWidth =
      textWidth + (paddingX * 2);

    const rectX =
      textRegionCenterX - (rectWidth / 2);

    const rectY =
      y + dateGap;

    ctx.fillStyle =
      "#ff3b30";

	ctx.beginPath();
    ctx.roundRect(
      rectX,
      rectY,
      rectWidth,
      rectHeight,
	  [30]
    );
	ctx.fill();

    ctx.fillStyle =
      "white";

    ctx.fillText(
      date,
      textRegionCenterX,
      rectY + 16
    );

	const pathX = charX + charWidth/2
	const pathY = charY + targetHeight - 120
	  
    ctx.font = '400 92px "Luckiest Guy", cursive, sans-serif';
    ctx.textBaseline = "top";
    ctx.lineWidth = 18;
    ctx.strokeStyle = "rgba(0,0,0,.9)";
    ctx.fillStyle = "white";
	ctx.strokeText(pathInput.value, pathX, pathY);
	ctx.fillText(pathInput.value, pathX, pathY);

    ctx.textAlign =
      "left";

    if (logoImage) {

      const logoHeight = 140;

      const logoWidth =
        logoImage.width *
        (logoHeight / logoImage.height);

      ctx.drawImage(
        logoImage,
        60,
        60,
        logoWidth,
        logoHeight
      );

    }

  }

  [titleInput, dateInput, pathInput].forEach(elem => elem.addEventListener(
    "input",
    () => {

      saveState();

      render();

    }
  ));

  document
    .getElementById("logoInput")
    .addEventListener(
      "change",
      event => {

        const file =
          event.target.files[0];

        if (!file) return;

        const reader =
          new FileReader();

        reader.onload = () => {

          logoData =
            reader.result;

          const img =
            new Image();

          img.onload = () => {

            logoImage = img;

            saveState();

            render();

          };

          img.src =
            reader.result;

        };

        reader.readAsDataURL(file);

      }
    );

  if (logoData) {

    const img =
      new Image();

    img.onload = () => {

      logoImage = img;

      if (selectedCharacter) {
        render();
      }

    };

    img.src = logoData;

  }

  document
    .getElementById("downloadBtn")
    .addEventListener(
      "click",
      () => {

        const a =
          document.createElement("a");

        a.href =
          canvas.toDataURL("image/png");

        a.download =
          "thumbnail.png";

        a.click();

      }
    );

  document
    .getElementById("copyBtn")
    .addEventListener(
      "click",
      async () => {

        canvas.toBlob(
          async blob => {

            await navigator.clipboard.write([
              new ClipboardItem({
                [blob.type]: blob
              })
            ]);

            alert("Imagem copiada!");

          }
        );

      }
    );

  async function initialize() {

    try {
      await document.fonts.load('400 92px "Luckiest Guy"');
      await document.fonts.ready;
    } catch (e) {
      console.warn("Font loading error:", e);
    }

    if (document.fonts) {
      document.fonts.ready.then(() => render());
    }

    initializeBackgrounds();

    await initializeCharacters();

    scrollActiveOptionsIntoView();

    render();

  }

  initialize();