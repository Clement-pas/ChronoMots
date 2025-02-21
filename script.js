// Données du jeu (facilement modifiables)
const categories =
{
    "La montagne ça vous gagne": [
        "Raclette", "Moniteur ESF", "PiouPiou", "Piste noire", "Tartiflette",
        "Forfait ski", "Chalet", "Télésiège", "Mont-Blanc", "Neige poudreuse",
        "Avalanche", "Snowboard", "Yéti", "Vin chaud", "Raquettes",
        "Luge", "Chamois", "Marmotte", "Lac gelé", "Téléphérique",
        "Dameuse", "Hors-piste", "Grotte de glace", "Crevasse", "Édelweiss",
        "Ski de fond", "Parapente", "Crampons", "Piolet", "Refuge",
        "Col", "Serpentins", "Chamois d'or", "Givre", "Montagnard",
        "Arva", "Igloo", "Tempête de neige", "Vallon", "Faune alpine",
        "Meule de foin", "Clarines", "Mouflon", "Gypaète", "Sérac",
        "Tyrolienne", "Croûte au fromage", "Fondue", "Gouffre", "Montée infernale"
    ],
    "L'univers spatial": [
        "Astronaute", "Fusée", "NASA", "Mars", "Étoile",
        "Voie lactée", "Comète", "Satellite", "Lune", "Télescope",
        "Galaxie", "Météorite", "Astéroïde", "Espace", "Éclipse",
        "Trou noir", "Supernova", "Gravité", "Cosmos", "Big Bang",
        "Station spatiale", "Sonde", "Rayon cosmique", "Atmosphère", "Exoplanète",
        "Soleil", "Vaisseau spatial", "Orbite", "Étoile filante", "Lumière",
        "Terre", "Jupiter", "Saturne", "Neptune", "Uranus",
        "Pluton", "Hubble", "Univers", "Système solaire", "Astronomie",
        "Matière noire", "Andromède", "Missions Apollo", "Astrophysique", "Géante rouge",
        "Nébuleuse", "Éruption solaire", "Champ magnétique", "E.T.", "Planétarium"
    ],
    "Héros et super-pouvoirs": [
        "Superman", "Batman", "Flash", "Wonder Woman", "Iron Man",
        "Spider-Man", "Hulk", "Thor", "Black Panther", "Captain America",
        "Docteur Strange", "Deadpool", "Wolverine", "Ant-Man", "Aquaman",
        "Cyborg", "Vision", "Green Lantern", "Hawkeye", "Robin",
        "Joker", "Magneto", "Thanos", "Lex Luthor", "Venom",
        "Shazam", "Harley Quinn", "Mystique", "Catwoman", "Blade",
        "Groot", "Rocket Raccoon", "Falcon", "Gamora", "Star-Lord",
        "Colossus", "Cyclope", "Bane", "Darkseid", "Silver Surfer",
        "Invisible Woman", "The Thing", "Human Torch", "Black Widow", "Nick Fury",
        "Loki", "Green Goblin", "Doctor Octopus", "Storm", "Jean Grey"
    ],
    "Animaux sauvages": [
        "Tigre", "Lion", "Éléphant", "Gorille", "Loup",
        "Ours", "Aigle", "Puma", "Serpent", "Crocodile",
        "Rhinocéros", "Hippopotame", "Léopard", "Jaguar", "Zèbre",
        "Gnou", "Panthère", "Orque", "Dauphin", "Requin",
        "Python", "Koala", "Kangourou", "Chauve-souris", "Tortue",
        "Baleine", "Loutre", "Faucon", "Cobra", "Harfang des neiges",
        "Lynx", "Bison", "Antilope", "Gazelle", "Pangolin",
        "Hérisson", "Cerf", "Élan", "Caribou", "Dingo",
        "Gibbon", "Chacal", "Furet", "Caméléon", "Scorpion",
        "Araignée", "Iguane", "Mandrill", "Morse", "Paresseux"
    ],
    "Pays et capitales": [
        "France - Paris", "Allemagne - Berlin", "Italie - Rome", "Espagne - Madrid", "Portugal - Lisbonne",
        "Belgique - Bruxelles", "Pays-Bas - Amsterdam", "Suisse - Berne", "Autriche - Vienne", "Grèce - Athènes",
        "Royaume-Uni - Londres", "Irlande - Dublin", "Norvège - Oslo", "Suède - Stockholm", "Finlande - Helsinki",
        "Danemark - Copenhague", "Pologne - Varsovie", "Tchéquie - Prague", "Hongrie - Budapest", "Slovaquie - Bratislava",
        "Roumanie - Bucarest", "Bulgarie - Sofia", "Serbie - Belgrade", "Croatie - Zagreb", "Slovénie - Ljubljana",
        "Ukraine - Kiev", "Russie - Moscou", "États-Unis - Washington", "Canada - Ottawa", "Mexique - Mexico",
        "Brésil - Brasilia", "Argentine - Buenos Aires", "Chili - Santiago", "Colombie - Bogota", "Pérou - Lima",
        "Japon - Tokyo", "Chine - Pékin", "Inde - New Delhi", "Australie - Canberra", "Afrique du Sud - Pretoria",
        "Égypte - Le Caire", "Arabie Saoudite - Riyad", "Turquie - Ankara", "Thaïlande - Bangkok", "Corée du Sud - Séoul",
        "Viêt Nam - Hanoï", "Philippines - Manille", "Indonésie - Jakarta", "Pakistan - Islamabad", "Iran - Téhéran"
    ],
    "Aliments et boissons": [
        "Pizza", "Burger", "Sushi", "Lasagnes", "Tacos",
        "Pâtes", "Raclette", "Tartiflette", "Quiche", "Couscous",
        "Paella", "Choucroute", "Cassoulet", "Bœuf bourguignon", "Ratatouille",
        "Foie gras", "Steak", "Frites", "Poulet rôti", "Blanquette",
        "Fromage", "Camembert", "Roquefort", "Cheddar", "Mozzarella",
        "Chocolat", "Crêpe", "Gaufre", "Tarte aux pommes", "Glace",
        "Sorbet", "Macaron", "Croissant", "Pain au chocolat", "Baguette",
        "Café", "Thé", "Chocolat chaud", "Limonade", "Soda",
        "Jus d'orange", "Smoothie", "Milkshake", "Vin rouge", "Bière",
        "Cocktail", "Whisky", "Rhum", "Champagne", "Digestif"
    ],
    "Instruments de musique": [
        "Guitare", "Piano", "Violon", "Batterie", "Flûte",
        "Trompette", "Saxophone", "Harmonica", "Basse", "Ukulélé",
        "Harpe", "Accordéon", "Violoncelle", "Clarinette", "Tuba",
        "Cor d'harmonie", "Maracas", "Xylophone", "Tambourin", "Castagnettes",
        "Orgue", "Synthétiseur", "Mandoline", "Banjo", "Balalaïka",
        "Didgeridoo", "Djembé", "Congas", "Bongos", "Glockenspiel",
        "Clavecin", "Luth", "Cithare", "Bugle", "Trombone",
        "Fagot", "Basson", "Zither", "Ocarina", "Gong",
        "Caisse claire", "Tom basse", "Cymbales", "Triangle", "Kalimba",
        "Hang drum", "Vièle", "Gaita", "Sitar", "Duduk"
    ],
    "Métiers et professions": [
        "Médecin", "Chirurgien", "Infirmier", "Dentiste", "Vétérinaire",
        "Pompier", "Policier", "Militaire", "Juge", "Avocat",
        "Professeur", "Enseignant", "Chercheur", "Scientifique", "Ingénieur",
        "Informaticien", "Développeur", "Graphiste", "Architecte", "Plombier",
        "Électricien", "Mécanicien", "Boulanger", "Pâtissier", "Cuisinier",
        "Agriculteur", "Éleveur", "Pêcheur", "Commerçant", "Vendeur",
        "Caissier", "Banquier", "Agent immobilier", "Journaliste", "Écrivain",
        "Acteur", "Réalisateur", "Chanteur", "Musicien", "Danseur",
        "Peintre", "Sculpteur", "Photographe", "Styliste", "Mannequin",
        "Pilote", "Astronaute", "Marin", "Explorateur", "Sommelier"
    ],
    "Sports et disciplines": [
        "Football", "Basketball", "Tennis", "Rugby", "Handball",
        "Volley-ball", "Athlétisme", "Natation", "Cyclisme", "Gymnastique",
        "Ski", "Snowboard", "Patinage", "Aviron", "Canoë-kayak",
        "Surf", "Plongée", "Escalade", "Marathon", "Triathlon",
        "Golf", "Baseball", "Hockey sur glace", "Boxe", "Judo",
        "Karaté", "Taekwondo", "Escrime", "Lutte", "Sumo",
        "Parkour", "Skateboard", "BMX", "Moto GP", "Formule 1",
        "Équitation", "Tir à l'arc", "Billard", "Bowling", "E-sport",
        "Pétanque", "Badminton", "Squash", "Ultimate frisbee", "Kendo",
        "Yoga", "CrossFit", "Zumba", "Musculation", "Parachutisme"
    ],
    "Merveilles du monde": [
        "Pyramides de Gizeh", "Grande Muraille de Chine", "Taj Mahal", "Machu Picchu", "Chichén Itzá",
        "Colisée de Rome", "Statue du Christ Rédempteur", "Petra", "Tour Eiffel", "Big Ben",
        "Acropole d'Athènes", "Mont Rushmore", "Stonehenge", "Angkor Wat", "Château de Versailles",
        "Château de Neuschwanstein", "Louvre", "Cathédrale Notre-Dame", "Sagrada Familia", "Empire State Building",
        "Burj Khalifa", "Golden Gate Bridge", "Mont Everest", "Grand Canyon", "Niagara Falls",
        "Baie d'Ha Long", "Amazonie", "Île de Pâques", "Chutes d'Iguazu", "Plage de Bora Bora",
        "Mont Fuji", "Antarctique", "Désert du Sahara", "Forêt de Bambous d'Arashiyama", "Parc de Yellowstone",
        "Geysers d'Islande", "Lac Baïkal", "Cappadoce", "Météores de Grèce", "Îles Galápagos",
        "Pétra", "Mosquée Bleue", "Palais de l'Alhambra", "Cathédrale Saint-Basile", "Pont Charles",
        "Parthénon", "Statue de la Liberté", "Château de Chambord", "Mont-Saint-Michel", "Château de Prague"
    ]





}

// Éléments du DOM
const choixThemeDiv = document.getElementById('choix-theme');
const jeuDiv = document.getElementById('jeu');
const themeSelect = document.getElementById('theme-select');
const dureeChronoInput = document.getElementById('duree-chrono');
const validerThemeBtn = document.getElementById('valider-theme');
const themeDisplay = document.getElementById('theme');
const carteDisplay = document.getElementById('carte');
const tempsDisplay = document.getElementById('temps');
const compteurDisplay = document.getElementById('compteur');
const resultatDisplay = document.getElementById('resultat');
const motTrouveBtn = document.getElementById('mot-trouve');
const passeBtn = document.getElementById('passe');
const recommencerBtn = document.getElementById('recommencer');

let tempsRestant;
let interval;
let themeChoisi = null;
let motsDevinés = 0;
let motsRestants = []; // Liste des mots restants pour la partie en cours

// Remplir le menu déroulant des thèmes
function remplirThemes() {
    themeSelect.innerHTML = '';
    for (const theme in categories) {
        const option = document.createElement('option');
        option.value = theme;
        option.textContent = theme;
        themeSelect.appendChild(option);
    }
}

// Fonction pour valider le choix du thème et démarrer le jeu
function validerTheme() {
    themeChoisi = themeSelect.value;
    const dureeChrono = parseInt(dureeChronoInput.value, 10);

    if (isNaN(dureeChrono) || dureeChrono < 10 || dureeChrono > 300) {
        alert("Veuillez entrer une durée valide (entre 10 et 300 secondes).");
        return;
    }

    // Réinitialiser les mots restants avec une copie de la liste des mots du thème choisi
    motsRestants = [...categories[themeChoisi]];

    themeDisplay.textContent = themeChoisi;
    choixThemeDiv.classList.add('hidden');
    jeuDiv.classList.remove('hidden');
    demarrerJeu(dureeChrono);
}

// Fonction pour démarrer le jeu
function demarrerJeu(duree) {
    // Réinitialiser le compteur de mots devinés
    motsDevinés = 0;
    compteurDisplay.textContent = motsDevinés;
    resultatDisplay.textContent = '';

    // Afficher le premier mot
    afficherNouveauMot();

    // Démarrer le chronomètre
    tempsRestant = duree;
    tempsDisplay.textContent = tempsRestant;
    clearInterval(interval);
    interval = setInterval(updateChrono, 1000);
}

// Fonction pour afficher un nouveau mot
function afficherNouveauMot() {
    if (motsRestants.length === 0) {
        resultatDisplay.textContent = "Tous les mots ont été proposés !";
        clearInterval(interval);
        return;
    }

    const index = Math.floor(Math.random() * motsRestants.length);
    const mot = motsRestants[index];

    // Retirer le mot de la liste des mots restants
    motsRestants.splice(index, 1);

    carteDisplay.textContent = mot;
}

// Fonction pour mettre à jour le chronomètre
function updateChrono() {
    tempsRestant--;
    tempsDisplay.textContent = tempsRestant;
    if (tempsRestant <= 0) {
        clearInterval(interval);
        resultatDisplay.textContent = `Temps écoulé ! Vous avez deviné ${motsDevinés} mots.`;
    }
}

// Fonction pour passer au mot suivant (mot trouvé)
function motTrouve() {
    motsDevinés++;
    compteurDisplay.textContent = motsDevinés;
    afficherNouveauMot();
}

// Fonction pour passer au mot suivant (sans compter comme deviné)
function passe() {
    afficherNouveauMot();
}

// Fonction pour recommencer une nouvelle partie
function recommencer() {
    clearInterval(interval);
    choixThemeDiv.classList.remove('hidden');
    jeuDiv.classList.add('hidden');
    motsDevinés = 0;
    tempsRestant = 0;
    motsRestants = []; // Réinitialiser la liste des mots restants
}

// Initialisation
remplirThemes();

// Événements
validerThemeBtn.addEventListener('click', validerTheme);
motTrouveBtn.addEventListener('click', motTrouve);
passeBtn.addEventListener('click', passe);
recommencerBtn.addEventListener('click', recommencer);