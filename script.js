const categories =
{
    "La montagne ça vous gagne": [
        "Raclette", "Moniteur ESF", "PiouPiou", "Piste noire", "Tartiflette",
        "Forfait ski", "Chalet", "Télésiège", "Mont-Blanc", "Neige poudreuse",
        "Avalanche", "Snowboard", "Yéti", "Vin chaud", "Raquettes",
        "Luge", "Chamois", "Marmotte", "Lac gelé", "Téléphérique",
        "Dameuse", "Hors-piste", "Crevasse", "Édelweiss",
        "Ski de fond", "Parapente", "Crampons", "Piolet", "Refuge",
        "Col", "Serpentins", "Chamois d'or", "Givre", "Montagnard",
         "Igloo", "Tempête de neige", "Clarines","Fondue",
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
        "Baleine", "Loutre", "Faucon", "Cobra",
        "Lynx", "Bison", "Antilope", "Gazelle", "Pangolin",
        "Hérisson", "Cerf", "Élan", "Caribou", "Dingo",
        "Gibbon", "Chacal", "Furet", "Caméléon", "Scorpion",
        "Araignée", "Iguan", "Morse", "Paresseux"
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
        "Vietnam - Hanoï", "Philippines - Manille", "Indonésie - Jakarta", "Pakistan - Islamabad", "Iran - Téhéran"
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
        "Cor", "Maracas", "Xylophone", "Tambourin",
        "Orgue", "Mandoline", "Banjo", "Balalaïka",
        "Didgeridoo", "Djembé", "Congas", "Bongos",
        "Clavecin","Trombone","Basson",
        "Caisse claire","Cymbales", "Triangle","Duduk"
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
        "Pilote", "Astronaute", "Marin", "Explorateur",
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
        "Pétanque", "Badminton", "Squash", "Ultimate (frisbee)",
        "Yoga", "CrossFit", "Zumba", "Musculation", "Parachutisme"
    ],
}
const choixThemeDiv = document.getElementById('choix-theme');
const jeuDiv = document.getElementById('jeu');
const themeSelect = document.getElementById('theme-select');
const dureeChronoInput = document.getElementById('duree-chrono');
const validerThemeBtn = document.getElementById('valider-theme');
const themeDisplay = document.getElementById('theme');
const motDisplay = document.getElementById('mot');
const tempsDisplay = document.getElementById('temps');
const compteurDisplay = document.getElementById('compteur');
const resultatDisplay = document.getElementById('resultat');
const motTrouveBtn = document.getElementById('mot-trouve');
const passeBtn = document.getElementById('passe');
const recommencerBtn = document.getElementById('recommencer');
const contacterBtn = document.getElementById('contacter');

let tempsRestant;
let interval;
let themeChoisi = null;
let motsDevinés = 0;
let motsRestants = [];
function remplirThemes() {
    themeSelect.innerHTML = '';
    for (const theme in categories) {
        const option = document.createElement('option');
        option.value = theme;
        option.textContent = theme;
        themeSelect.appendChild(option);
    }
}

function validerTheme() {
    themeChoisi = themeSelect.value;
    const dureeChrono = parseInt(dureeChronoInput.value, 10);

    if (isNaN(dureeChrono) || dureeChrono < 10 || dureeChrono > 300) {
        alert("Veuillez entrer une durée valide (entre 10 et 300 secondes).");
        return;
    }
    motsRestants = [...categories[themeChoisi]];

    themeDisplay.textContent = themeChoisi;
    choixThemeDiv.classList.add('hidden');
    jeuDiv.classList.remove('hidden');
    demarrerJeu(dureeChrono);
}

function demarrerJeu(duree) {
    motsDevinés = 0;
    compteurDisplay.textContent = motsDevinés;
    resultatDisplay.textContent = '';

    afficherNouveauMot();


    tempsRestant = duree;
    tempsDisplay.textContent = tempsRestant;
    clearInterval(interval);
    interval = setInterval(updateChrono, 1000);
}

function afficherNouveauMot() {
    if (motsRestants.length === 0) {
        resultatDisplay.textContent = "Tous les mots ont été proposés !";
        clearInterval(interval);
        return;
    }

    const index = Math.floor(Math.random() * motsRestants.length);
    const mot = motsRestants[index];

    motsRestants.splice(index, 1);

    motDisplay.textContent = mot;
}

function updateChrono() {
    tempsRestant--;
    tempsDisplay.textContent = tempsRestant;
    if (tempsRestant <= 0) {
        clearInterval(interval);
        resultatDisplay.textContent = `Temps écoulé ! Vous avez deviné ${motsDevinés} mots.`;
    }
}


function motTrouve() {
    motsDevinés++;
    compteurDisplay.textContent = motsDevinés;
    afficherNouveauMot();
}

function passe() {
    afficherNouveauMot();
}


function recommencer() {
    clearInterval(interval);
    choixThemeDiv.classList.remove('hidden');
    jeuDiv.classList.add('hidden');
    motsDevinés = 0;
    tempsRestant = 0;
    motsRestants = []; 
}

function contacter() {
    alert("Pour nous contacter, envoyez un email à contact@chronomots.com");
}


remplirThemes();

validerThemeBtn.addEventListener('click', validerTheme);
motTrouveBtn.addEventListener('click', motTrouve);
passeBtn.addEventListener('click', passe);
recommencerBtn.addEventListener('click', recommencer);
contacterBtn.addEventListener('click', contacter);