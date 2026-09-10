/* =========================================================
   IMAGE GALLERY — JAVASCRIPT PART 01
   120 IMAGES + CATEGORIES + THEME + RECENT FOUNDATION
========================================================= */


/* =========================================================
   1. MAIN DATA
========================================================= */

const galleryData = [

    /* =========================
       NATURE — 20 IMAGES
    ========================= */

    {
        id: 1,
        category: "nature",
        image: "images/nature/nature-01.jpg",
        title: "Mountain Escape",
        description: "A peaceful mountain view surrounded by endless natural beauty."
    },
    {
        id: 2,
        category: "nature",
        image: "images/nature/nature-02.jpg",
        title: "Hidden Waterfall",
        description: "A breathtaking waterfall hidden deep inside the wild."
    },
    {
        id: 3,
        category: "nature",
        image: "images/nature/nature-03.jpg",
        title: "Into the Wild",
        description: "A refreshing green forest filled with peaceful natural vibes."
    },
    {
        id: 4,
        category: "nature",
        image: "images/nature/nature-04.jpg",
        title: "Peaceful Waters",
        description: "Calm blue waters creating a beautiful escape from the world."
    },
    {
        id: 5,
        category: "nature",
        image: "images/nature/nature-05.jpg",
        title: "Golden Horizon",
        description: "Warm sunlight painting the horizon with beautiful golden tones."
    },
    {
        id: 6,
        category: "nature",
        image: "images/nature/nature-06.jpg",
        title: "Forest Dreams",
        description: "A dreamy forest scene surrounded by rich green landscapes."
    },
    {
        id: 7,
        category: "nature",
        image: "images/nature/nature-07.jpg",
        title: "Wild Horizon",
        description: "A stunning natural landscape stretching beyond the horizon."
    },
    {
        id: 8,
        category: "nature",
        image: "images/nature/nature-08.jpg",
        title: "Nature's Calm",
        description: "A quiet moment where nature feels completely untouched."
    },
    {
        id: 9,
        category: "nature",
        image: "images/nature/nature-09.jpg",
        title: "Mountain Mist",
        description: "Soft mist floating across a dramatic mountain landscape."
    },
    {
        id: 10,
        category: "nature",
        image: "images/nature/nature-10.jpg",
        title: "Into the Green",
        description: "A peaceful journey through a beautiful green environment."
    },
    {
        id: 11,
        category: "nature",
        image: "images/nature/nature-11.jpg",
        title: "Wild Serenity",
        description: "A serene natural view filled with calm and fresh energy."
    },
    {
        id: 12,
        category: "nature",
        image: "images/nature/nature-12.jpg",
        title: "Morning Glow",
        description: "The soft beauty of nature captured in the morning light."
    },
    {
        id: 13,
        category: "nature",
        image: "images/nature/nature-13.jpg",
        title: "Ocean Breeze",
        description: "A refreshing coastal scene inspired by the endless ocean."
    },
    {
        id: 14,
        category: "nature",
        image: "images/nature/nature-14.jpg",
        title: "Secret Valley",
        description: "A beautiful valley surrounded by dramatic natural scenery."
    },
    {
        id: 15,
        category: "nature",
        image: "images/nature/nature-15.jpg",
        title: "Earthly Beauty",
        description: "A stunning reminder of the beauty found in the natural world."
    },
    {
        id: 16,
        category: "nature",
        image: "images/nature/nature-16.jpg",
        title: "Quiet Escape",
        description: "A peaceful place perfect for escaping the noise of everyday life."
    },
    {
        id: 17,
        category: "nature",
        image: "images/nature/nature-17.jpg",
        title: "Sunset Trails",
        description: "Warm sunset light creating a magical natural atmosphere."
    },
    {
        id: 18,
        category: "nature",
        image: "images/nature/nature-18.jpg",
        title: "Nature Uncovered",
        description: "A captivating view showing nature in its purest form."
    },
    {
        id: 19,
        category: "nature",
        image: "images/nature/nature-19.jpg",
        title: "Green Paradise",
        description: "A lush landscape that feels like a hidden paradise."
    },
    {
        id: 20,
        category: "nature",
        image: "images/nature/nature-20.jpg",
        title: "Beyond the Peaks",
        description: "A dramatic landscape inviting you to explore beyond the mountains."
    },


    /* =========================
       ANIMALS — 20 IMAGES
    ========================= */

    {
        id: 21,
        category: "animals",
        image: "images/animals/animal-01.jpg",
        title: "Wild Beauty",
        description: "A powerful wildlife moment captured in its natural surroundings."
    },
    {
        id: 22,
        category: "animals",
        image: "images/animals/animal-02.jpg",
        title: "Little Explorer",
        description: "A cute animal enjoying a curious moment in nature."
    },
    {
        id: 23,
        category: "animals",
        image: "images/animals/animal-03.jpg",
        title: "Wild Moments",
        description: "A beautiful glimpse into the fascinating world of wildlife."
    },
    {
        id: 24,
        category: "animals",
        image: "images/animals/animal-04.jpg",
        title: "Forest Friend",
        description: "A charming wildlife encounter surrounded by nature."
    },
    {
        id: 25,
        category: "animals",
        image: "images/animals/animal-05.jpg",
        title: "Untamed Spirit",
        description: "A striking portrait of an animal living freely in the wild."
    },
    {
        id: 26,
        category: "animals",
        image: "images/animals/animal-06.jpg",
        title: "Gentle Eyes",
        description: "A beautiful close-up revealing the gentle side of wildlife."
    },
    {
        id: 27,
        category: "animals",
        image: "images/animals/animal-07.jpg",
        title: "Into the Wild",
        description: "An unforgettable moment from the heart of the wilderness."
    },
    {
        id: 28,
        category: "animals",
        image: "images/animals/animal-08.jpg",
        title: "Nature's Guardian",
        description: "A powerful animal captured in its natural environment."
    },
    {
        id: 29,
        category: "animals",
        image: "images/animals/animal-09.jpg",
        title: "Wild Soul",
        description: "A captivating portrait celebrating the spirit of wildlife."
    },
    {
        id: 30,
        category: "animals",
        image: "images/animals/animal-10.jpg",
        title: "Tiny Adventure",
        description: "A small explorer discovering the world around it."
    },
    {
        id: 31,
        category: "animals",
        image: "images/animals/animal-11.jpg",
        title: "Untamed World",
        description: "A glimpse into the raw and beautiful world of wild animals."
    },
    {
        id: 32,
        category: "animals",
        image: "images/animals/animal-12.jpg",
        title: "Wild Connection",
        description: "A special moment showing the connection between life and nature."
    },
    {
        id: 33,
        category: "animals",
        image: "images/animals/animal-13.jpg",
        title: "Born to Roam",
        description: "A beautiful animal enjoying the freedom of the wild."
    },
    {
        id: 34,
        category: "animals",
        image: "images/animals/animal-14.jpg",
        title: "Golden Wildlife",
        description: "Warm natural light highlighting the beauty of wildlife."
    },
    {
        id: 35,
        category: "animals",
        image: "images/animals/animal-15.jpg",
        title: "Wild Portrait",
        description: "A striking wildlife portrait filled with character."
    },
    {
        id: 36,
        category: "animals",
        image: "images/animals/animal-16.jpg",
        title: "Nature's Companion",
        description: "A beautiful animal moment surrounded by peaceful scenery."
    },
    {
        id: 37,
        category: "animals",
        image: "images/animals/animal-17.jpg",
        title: "Fearless Spirit",
        description: "A powerful glimpse of confidence and freedom in the wild."
    },
    {
        id: 38,
        category: "animals",
        image: "images/animals/animal-18.jpg",
        title: "Wild at Heart",
        description: "A memorable portrait celebrating the freedom of wildlife."
    },
    {
        id: 39,
        category: "animals",
        image: "images/animals/animal-19.jpg",
        title: "A Moment in Nature",
        description: "A peaceful wildlife scene frozen in a beautiful moment."
    },
    {
        id: 40,
        category: "animals",
        image: "images/animals/animal-20.jpg",
        title: "Into the Wilderness",
        description: "An inspiring view into the untouched world of wildlife."
    },


    /* =========================
       FOOD — 20 IMAGES
    ========================= */

    {
        id: 41,
        category: "food",
        image: "images/food/food-01.jpg",
        title: "Delicious Moment",
        description: "A delicious creation that looks as good as it tastes."
    },
    {
        id: 42,
        category: "food",
        image: "images/food/food-02.jpg",
        title: "Sweet Delight",
        description: "A tempting sweet treat made for beautiful food moments."
    },
    {
        id: 43,
        category: "food",
        image: "images/food/food-03.jpg",
        title: "Taste of Joy",
        description: "A colorful dish bringing flavor and happiness together."
    },
    {
        id: 44,
        category: "food",
        image: "images/food/food-04.jpg",
        title: "Golden Bite",
        description: "A delicious golden creation ready to steal the spotlight."
    },
    {
        id: 45,
        category: "food",
        image: "images/food/food-05.jpg",
        title: "Fresh & Flavorful",
        description: "Fresh ingredients combined into a beautiful food experience."
    },
    {
        id: 46,
        category: "food",
        image: "images/food/food-06.jpg",
        title: "Comfort on a Plate",
        description: "A warm and inviting dish full of comforting flavors."
    },
    {
        id: 47,
        category: "food",
        image: "images/food/food-07.jpg",
        title: "A Perfect Treat",
        description: "A beautifully prepared treat made for food lovers."
    },
    {
        id: 48,
        category: "food",
        image: "images/food/food-08.jpg",
        title: "Flavor Story",
        description: "A delicious plate telling its own story through color and texture."
    },
    {
        id: 49,
        category: "food",
        image: "images/food/food-09.jpg",
        title: "Simply Delicious",
        description: "Simple ingredients transformed into something irresistible."
    },
    {
        id: 50,
        category: "food",
        image: "images/food/food-10.jpg",
        title: "Foodie Favorite",
        description: "A mouthwatering creation made to inspire every food lover."
    },
    {
        id: 51,
        category: "food",
        image: "images/food/food-11.jpg",
        title: "Fresh Cravings",
        description: "A colorful dish ready to satisfy your next craving."
    },
    {
        id: 52,
        category: "food",
        image: "images/food/food-12.jpg",
        title: "Sweet Indulgence",
        description: "A beautiful dessert moment filled with sweetness."
    },
    {
        id: 53,
        category: "food",
        image: "images/food/food-13.jpg",
        title: "Chef's Moment",
        description: "A beautifully presented dish with a restaurant-worthy look."
    },
    {
        id: 54,
        category: "food",
        image: "images/food/food-14.jpg",
        title: "Delicious Layers",
        description: "A tempting creation filled with delicious textures and flavors."
    },
    {
        id: 55,
        category: "food",
        image: "images/food/food-15.jpg",
        title: "Craving This",
        description: "The kind of food moment that instantly makes you hungry."
    },
    {
        id: 56,
        category: "food",
        image: "images/food/food-16.jpg",
        title: "Perfectly Served",
        description: "A beautiful presentation turning a meal into an experience."
    },
    {
        id: 57,
        category: "food",
        image: "images/food/food-17.jpg",
        title: "Colorful Plate",
        description: "A vibrant dish where color and flavor come together."
    },
    {
        id: 58,
        category: "food",
        image: "images/food/food-18.jpg",
        title: "Sweet Escape",
        description: "A delightful dessert moment worth remembering."
    },
    {
        id: 59,
        category: "food",
        image: "images/food/food-19.jpg",
        title: "Made to Enjoy",
        description: "A delicious dish created for memorable food moments."
    },
    {
        id: 60,
        category: "food",
        image: "images/food/food-20.jpg",
        title: "Final Delicious Bite",
        description: "A tempting final bite that leaves you wanting more."
    },


    /* =========================
       CARS — 20 IMAGES
    ========================= */

    {
        id: 61,
        category: "cars",
        image: "images/cars/car-01.jpg",
        title: "Luxury Drive",
        description: "A premium machine combining elegance, power and style."
    },
    {
        id: 62,
        category: "cars",
        image: "images/cars/car-02.jpg",
        title: "Speed & Style",
        description: "Performance and bold design coming together perfectly."
    },
    {
        id: 63,
        category: "cars",
        image: "images/cars/car-03.jpg",
        title: "Road Royalty",
        description: "A stunning car built to command attention on the road."
    },
    {
        id: 64,
        category: "cars",
        image: "images/cars/car-04.jpg",
        title: "Midnight Machine",
        description: "A sleek ride with a powerful and mysterious personality."
    },
    {
        id: 65,
        category: "cars",
        image: "images/cars/car-05.jpg",
        title: "Built to Impress",
        description: "A beautifully designed machine made for the spotlight."
    },
    {
        id: 66,
        category: "cars",
        image: "images/cars/car-06.jpg",
        title: "Urban Racer",
        description: "A stylish performance car made for modern city streets."
    },
    {
        id: 67,
        category: "cars",
        image: "images/cars/car-07.jpg",
        title: "Pure Performance",
        description: "A powerful design created for an unforgettable drive."
    },
    {
        id: 68,
        category: "cars",
        image: "images/cars/car-08.jpg",
        title: "Road Legend",
        description: "A legendary-looking ride with timeless automotive appeal."
    },
    {
        id: 69,
        category: "cars",
        image: "images/cars/car-09.jpg",
        title: "Elegant Motion",
        description: "Smooth lines and elegant details create a beautiful silhouette."
    },
    {
        id: 70,
        category: "cars",
        image: "images/cars/car-10.jpg",
        title: "Power on Wheels",
        description: "A bold machine designed around power and performance."
    },
    {
        id: 71,
        category: "cars",
        image: "images/cars/car-11.jpg",
        title: "Street Icon",
        description: "A head-turning car made for the streets."
    },
    {
        id: 72,
        category: "cars",
        image: "images/cars/car-12.jpg",
        title: "Driven by Style",
        description: "A stylish ride where performance meets modern design."
    },
    {
        id: 73,
        category: "cars",
        image: "images/cars/car-13.jpg",
        title: "Fast Lane",
        description: "A dynamic machine made for those who love speed."
    },
    {
        id: 74,
        category: "cars",
        image: "images/cars/car-14.jpg",
        title: "Chrome Dreams",
        description: "A polished automotive beauty designed to stand out."
    },
    {
        id: 75,
        category: "cars",
        image: "images/cars/car-15.jpg",
        title: "Performance Beast",
        description: "A powerful road machine with an unmistakable presence."
    },
    {
        id: 76,
        category: "cars",
        image: "images/cars/car-16.jpg",
        title: "Modern Classic",
        description: "A timeless automotive look with a modern personality."
    },
    {
        id: 77,
        category: "cars",
        image: "images/cars/car-17.jpg",
        title: "Luxury in Motion",
        description: "Premium design and smooth lines captured in motion."
    },
    {
        id: 78,
        category: "cars",
        image: "images/cars/car-18.jpg",
        title: "Speed Icon",
        description: "A bold performance machine built to turn heads."
    },
    {
        id: 79,
        category: "cars",
        image: "images/cars/car-19.jpg",
        title: "Dream Ride",
        description: "A dream car combining stunning looks with strong performance."
    },
    {
        id: 80,
        category: "cars",
        image: "images/cars/car-20.jpg",
        title: "Beyond the Road",
        description: "A beautiful automotive moment made for true car lovers."
    },


    /* =========================
       CHARACTERS — 20 IMAGES
    ========================= */

    {
        id: 81,
        category: "characters",
        image: "images/characters/character-01.jpg",
        title: "Character World",
        description: "A fun character moment filled with imagination and personality."
    },
    {
        id: 82,
        category: "characters",
        image: "images/characters/character-02.jpg",
        title: "Dream Character",
        description: "A playful character bringing a little magic to the gallery."
    },
    {
        id: 83,
        category: "characters",
        image: "images/characters/character-03.jpg",
        title: "Fantasy Moment",
        description: "A colorful character scene inspired by imagination."
    },
    {
        id: 84,
        category: "characters",
        image: "images/characters/character-04.jpg",
        title: "Magic in Motion",
        description: "A lively character captured in a magical world."
    },
    {
        id: 85,
        category: "characters",
        image: "images/characters/character-05.jpg",
        title: "Playful Spirit",
        description: "A cheerful character moment full of energy and fun."
    },
    {
        id: 86,
        category: "characters",
        image: "images/characters/character-06.jpg",
        title: "Storybook Star",
        description: "A charming character that feels like it stepped from a storybook."
    },
    {
        id: 87,
        category: "characters",
        image: "images/characters/character-07.jpg",
        title: "Colorful Adventure",
        description: "A vibrant character scene filled with creative energy."
    },
    {
        id: 88,
        category: "characters",
        image: "images/characters/character-08.jpg",
        title: "Little Hero",
        description: "A fun character moment with a heroic personality."
    },
    {
        id: 89,
        category: "characters",
        image: "images/characters/character-09.jpg",
        title: "Fantasy Friend",
        description: "A memorable character from a colorful imaginary world."
    },
    {
        id: 90,
        category: "characters",
        image: "images/characters/character-10.jpg",
        title: "Happy Moments",
        description: "A cheerful scene created to bring a little happiness."
    },
    {
        id: 91,
        category: "characters",
        image: "images/characters/character-11.jpg",
        title: "Creative Soul",
        description: "A unique character filled with creative personality."
    },
    {
        id: 92,
        category: "characters",
        image: "images/characters/character-12.jpg",
        title: "Adventure Begins",
        description: "A character ready for a brand-new imaginary adventure."
    },
    {
        id: 93,
        category: "characters",
        image: "images/characters/character-13.jpg",
        title: "Dreamy World",
        description: "A soft and colorful character scene full of imagination."
    },
    {
        id: 94,
        category: "characters",
        image: "images/characters/character-14.jpg",
        title: "Fun & Fantasy",
        description: "A playful world where creativity has no limits."
    },
    {
        id: 95,
        category: "character",
        image: "images/characters/character-15.jpg",
        title: "Bright Personality",
        description: "A colorful character moment full of charm and personality."
    },
    {
        id: 96,
        category: "character",
        image: "images/characters/character-16.jpg",
        title: "Magical Friend",
        description: "A lovable character bringing imagination to life."
    },
    {
        id: 97,
        category: "character",
        image: "images/characters/character-17.jpg",
        title: "Animated Dreams",
        description: "A creative character scene inspired by animated worlds."
    },
    {
        id: 98,
        category: "character",
        image: "images/characters/character-18.jpg",
        title: "Fantasy Star",
        description: "A standout character with a bright and magical personality."
    },
    {
        id: 99,
        category: "character",
        image: "images/characters/character-19.jpg",
        title: "Imagination Lane",
        description: "A colorful moment where imagination takes center stage."
    },
    {
        id: 100,
        category: "characters",
        image: "images/characters/character-20.jpg",
        title: "The Final Adventure",
        description: "A memorable character moment full of fun and imagination."
    },


    /* =========================
       ART — 20 IMAGES
    ========================= */

    {
        id: 101,
        category: "art",
        image: "images/art/art-01.jpg",
        title: "Creative Vision",
        description: "A creative artwork expressing imagination through visual details."
    },
    {
        id: 102,
        category: "art",
        image: "images/art/art-02.jpg",
        title: "Modern Expression",
        description: "A contemporary artistic expression full of character."
    },
    {
        id: 103,
        category: "art",
        image: "images/art/art-03.jpg",
        title: "Colors of Imagination",
        description: "A vibrant artwork where colors create a world of imagination."
    },
    {
        id: 104,
        category: "art",
        image: "images/art/art-04.jpg",
        title: "Abstract Beauty",
        description: "A unique visual composition filled with artistic energy."
    },
    {
        id: 105,
        category: "art",
        image: "images/art/art-05.jpg",
        title: "Creative Lines",
        description: "A beautiful artwork built around shapes, lines and expression."
    },
    {
        id: 106,
        category: "art",
        image: "images/art/art-06.jpg",
        title: "Artistic Soul",
        description: "A creative piece carrying its own artistic personality."
    },
    {
        id: 107,
        category: "art",
        image: "images/art/art-07.jpg",
        title: "Dream in Color",
        description: "A colorful creation turning imagination into visual art."
    },
    {
        id: 108,
        category: "art",
        image: "images/art/art-08.jpg",
        title: "Visual Poetry",
        description: "A captivating artwork that feels like poetry in visual form."
    },
    {
        id: 109,
        category: "art",
        image: "images/art/art-09.jpg",
        title: "Creative Escape",
        description: "An artistic escape filled with interesting details and emotion."
    },
    {
        id: 110,
        category: "art",
        image: "images/art/art-10.jpg",
        title: "The Art Story",
        description: "A visual story told through creativity and artistic expression."
    },
    {
        id: 111,
        category: "art",
        image: "images/art/art-11.jpg",
        title: "Bold Expression",
        description: "A bold artistic composition designed to capture attention."
    },
    {
        id: 112,
        category: "art",
        image: "images/art/art-12.jpg",
        title: "Creative Perspective",
        description: "A unique perspective transformed into an artistic experience."
    },
    {
        id: 113,
        category: "art",
        image: "images/art/art-13.jpg",
        title: "Inspired Creation",
        description: "A beautiful artwork inspired by creativity and imagination."
    },
    {
        id: 114,
        category: "art",
        image: "images/art/art-14.jpg",
        title: "Art in Motion",
        description: "A dynamic artistic composition filled with visual movement."
    },
    {
        id: 115,
        category: "art",
        image: "images/art/art-15.jpg",
        title: "Colorful Mind",
        description: "A vibrant creation reflecting a colorful artistic mind."
    },
    {
        id: 116,
        category: "art",
        image: "images/art/art-16.jpg",
        title: "Creative Energy",
        description: "An expressive artwork filled with bold creative energy."
    },
    {
        id: 117,
        category: "art",
        image: "images/art/art-17.jpg",
        title: "Hidden Details",
        description: "A fascinating artwork revealing beautiful details at every glance."
    },
    {
        id: 118,
        category: "art",
        image: "images/art/art-18.jpg",
        title: "Artistic Dream",
        description: "A dreamy composition where imagination meets artistic style."
    },
    {
        id: 119,
        category: "art",
        image: "images/art/art-19.jpg",
        title: "Endless Creativity",
        description: "A creative artwork celebrating limitless imagination."
    },
    {
        id: 120,
        category: "art",
        image: "images/art/art-20.jpg",
        title: "Creative Finale",
        description: "A beautiful final piece completing our creative collection."
    }

];


/* =========================================================
   2. GALLERY ELEMENTS
========================================================= */

const galleryContainer = document.getElementById("galleryContainer");
const galleryTitle = document.getElementById("galleryTitle");
const gallerySubtitle = document.getElementById("gallerySubtitle");
const imageCount = document.getElementById("imageCount");

const categoryButtons = document.querySelectorAll(".category-btn");


/* =========================================================
   3. CURRENT GALLERY STATE
========================================================= */

let currentCategory = "all";

let visibleImages = [...galleryData];

let recentImages = JSON.parse(
    localStorage.getItem("galleryRecent") || "[]"
);


/* =========================================================
   4. CATEGORY INFORMATION
========================================================= */

const categoryInfo = {

    all: {
        title: "All Photos",
        subtitle: "Explore our complete collection of beautiful images.",
        theme: "theme-all"
    },

    nature: {
        title: "Nature",
        subtitle: "Discover peaceful landscapes and beautiful moments from nature.",
        theme: "theme-nature"
    },

    animals: {
        title: "Animals",
        subtitle: "Explore amazing wildlife and unforgettable animal moments.",
        theme: "theme-animals"
    },

    food: {
        title: "Food",
        subtitle: "Discover delicious dishes, desserts and tasty creations.",
        theme: "theme-food"
    },

    cars: {
        title: "Cars",
        subtitle: "Explore luxury, performance and beautiful automotive design.",
        theme: "theme-cars"
    },

    characters: {
        title: "Characters",
        subtitle: "Enter a colorful world of imagination and creativity.",
        theme: "theme-characters"
    },

    art: {
        title: "Art",
        subtitle: "Discover creative expressions, colors and artistic visions.",
        theme: "theme-art"
    }

};


/* =========================================================
   5. CHANGE THEME
========================================================= */

function changeTheme(category) {

    const themes = [
        "theme-all",
        "theme-nature",
        "theme-animals",
        "theme-food",
        "theme-cars",
        "theme-characters",
        "theme-art"
    ];

    document.body.classList.remove(...themes);

    const selectedTheme =
        categoryInfo[category]?.theme || "theme-all";

    document.body.classList.add(selectedTheme);
}


/* =========================================================
   6. CREATE IMAGE CARD
========================================================= */

function createGalleryCard(item) {

    const card = document.createElement("article");

    card.className = "gallery-card";

    card.dataset.id = item.id;
    card.dataset.category = item.category;

    card.innerHTML = `

        <div class="image-wrapper">

            <img
                src="${item.image}"
                alt="${item.title}"
                loading="lazy"
            >

            <div class="image-overlay">

                <button
                    type="button"
                    class="image-action favorite-btn"
                    aria-label="Add to favorites"
                    data-id="${item.id}"
                >
                    ♥
                </button>

                <button
                    type="button"
                    class="image-action view-btn"
                    aria-label="View image"
                    data-id="${item.id}"
                >
                    ⛶
                </button>

            </div>

        </div>

        <div class="image-info">

            <div>

                <h3>${item.title}</h3>

                <p>${capitalize(item.category)}</p>

            </div>

            <button
                type="button"
                class="save-btn"
                aria-label="Save image"
                data-id="${item.id}"
            >
                📌
            </button>

        </div>

    `;

    return card;
}


/* =========================================================
   7. RENDER GALLERY
========================================================= */

function renderGallery(images) {

    galleryContainer.innerHTML = "";

    images.forEach(item => {

        const card = createGalleryCard(item);

        galleryContainer.appendChild(card);

    });

    visibleImages = [...images];

    updateImageCount(images.length);
}


/* =========================================================
   8. IMAGE COUNT
========================================================= */

function updateImageCount(count) {

    imageCount.textContent = count;

}


/* =========================================================
   9. UPDATE PAGE HEADING
========================================================= */

function updateHeading(category) {

    const info = categoryInfo[category];

    if (!info) return;

    galleryTitle.textContent = info.title;

    gallerySubtitle.textContent = info.subtitle;

}


/* =========================================================
   10. ACTIVE CATEGORY BUTTON
========================================================= */

function updateActiveCategory(category) {

    categoryButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.category === category
        );

    });

}


/* =========================================================
   11. FILTER CATEGORY
========================================================= */

function filterCategory(category) {

    currentCategory = category;

    updateActiveCategory(category);

    updateHeading(category);

    changeTheme(category);

    if (category === "all") {

        renderGallery(galleryData);

        return;
    }

    const filteredImages = galleryData.filter(
        item => item.category === category
    );

    renderGallery(filteredImages);
}


/* =========================================================
   12. CATEGORY BUTTON EVENTS
========================================================= */

categoryButtons.forEach(button => {

    button.addEventListener("click", event => {

        event.preventDefault();

        const category =
            button.dataset.category;

        if (!category) return;

        if (category === "favorites") {

            return;

        }

        filterCategory(category);

    });

});


/* =========================================================
   13. RECENT IMAGE FOUNDATION
   Recently viewed images will be handled by Lightbox
   in Part 02.
========================================================= */

function addToRecent(imageId) {

    recentImages =
        recentImages.filter(id => id !== imageId);

    recentImages.unshift(imageId);

    recentImages =
        recentImages.slice(0, 30);

    localStorage.setItem(
        "galleryRecent",
        JSON.stringify(recentImages)
    );

}


/* =========================================================
   14. GET IMAGE BY ID
========================================================= */

function getImageById(id) {

    return galleryData.find(
        item => item.id === Number(id)
    );

}


/* =========================================================
   15. TEXT HELPER
========================================================= */

function capitalize(text) {

    return text.charAt(0).toUpperCase() + text.slice(1);

}


/* =========================================================
   16. IMAGE CARD EVENT FOUNDATION
   Favorite / Save / View functionality will be fully
   connected in Parts 02 and 03.
========================================================= */

galleryContainer.addEventListener("click", event => {

    const button =
        event.target.closest("button");

    if (!button) return;

    const imageId =
        button.dataset.id;

    if (!imageId) return;

    const image =
        getImageById(imageId);

    if (!image) return;

    if (button.classList.contains("view-btn")) {

        addToRecent(image.id);

    }

});


/* =========================================================
   17. INITIAL LOAD
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    filterCategory("all");

});


/* =========================================================
   18. FALLBACK INITIALIZATION
========================================================= */

if (document.readyState !== "loading") {

    filterCategory("all");

}


/* =====================================================
   IMAGE GALLERY — JAVASCRIPT PART 02
   SEARCH + RECENTLY VIEWED + LIGHTBOX
   NEXT / PREVIOUS + FAVORITE + SAVE
===================================================== */


/* =====================================================
   1. SECTION STATE
===================================================== */

let currentSection = "featured";
let currentSearch = "";


/* =====================================================
   2. FAVORITE / SAVE STORAGE
===================================================== */

let favoriteImages = JSON.parse(
    localStorage.getItem("galleryFavorites") || "[]"
);

let savedImages = JSON.parse(
    localStorage.getItem("gallerySaved") || "[]"
);


/* =====================================================
   3. STORAGE HELPERS
===================================================== */

function saveFavorites() {
    localStorage.setItem(
        "galleryFavorites",
        JSON.stringify(favoriteImages)
    );
}

function saveSavedImages() {
    localStorage.setItem(
        "gallerySaved",
        JSON.stringify(savedImages)
    );
}

function saveRecentImages() {
    localStorage.setItem(
        "galleryRecent",
        JSON.stringify(recentImages)
    );
}


/* =====================================================
   4. IMAGE HELPERS
===================================================== */

function getImageById(id) {
    return galleryData.find(
        image => image.id === Number(id)
    );
}

function isFavorite(id) {
    return favoriteImages.includes(Number(id));
}

function isSaved(id) {
    return savedImages.includes(Number(id));
}


/* =====================================================
   5. RECENTLY VIEWED
===================================================== */

function addToRecent(id) {

    id = Number(id);

    recentImages = recentImages.filter(
        imageId => imageId !== id
    );

    recentImages.unshift(id);

    recentImages = recentImages.slice(0, 30);

    saveRecentImages();
}

function getRecentImages() {

    return recentImages
        .map(id => getImageById(id))
        .filter(Boolean);
}


/* =====================================================
   6. FAVORITE
===================================================== */

function toggleFavorite(id) {

    id = Number(id);

    if (isFavorite(id)) {

        favoriteImages =
            favoriteImages.filter(
                imageId => imageId !== id
            );

        showToast(
            "Removed from favorites",
            "♡"
        );

    } else {

        favoriteImages.push(id);

        showToast(
            "Added to favorites",
            "♥"
        );
    }

    saveFavorites();

    updateFavoriteButtons();
    updateLightboxFavorite();
}


/* =====================================================
   7. SAVE
===================================================== */

function toggleSave(id) {

    id = Number(id);

    if (isSaved(id)) {

        savedImages =
            savedImages.filter(
                imageId => imageId !== id
            );

        showToast(
            "Removed from saved images",
            "♡"
        );

    } else {

        savedImages.push(id);

        showToast(
            "Image saved successfully",
            "✓"
        );
    }

    saveSavedImages();

    updateSaveButtons();
    updateLightboxSave();
}


/* =====================================================
   8. TOAST
===================================================== */

function showToast(message, icon = "✓") {

    const toast =
        document.getElementById("toast");

    const toastMessage =
        document.getElementById("toastMessage");

    const toastIcon =
        document.getElementById("toastIcon");

    if (!toast) return;

    toastMessage.textContent = message;
    toastIcon.textContent = icon;

    toast.classList.add("show");

    clearTimeout(window.galleryToast);

    window.galleryToast = setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}


/* =====================================================
   9. UPDATE CARD BUTTONS
===================================================== */

function updateFavoriteButtons() {

    document
        .querySelectorAll(".favorite-btn")
        .forEach(button => {

            const card =
                button.closest(".gallery-card");

            if (!card) return;

            const id =
                Number(card.dataset.id);

            if (isFavorite(id)) {

                button.textContent = "♥";
                button.classList.add("active");

            } else {

                button.textContent = "♡";
                button.classList.remove("active");
            }
        });
}


function updateSaveButtons() {

    document
        .querySelectorAll(".save-btn")
        .forEach(button => {

            const card =
                button.closest(".gallery-card");

            if (!card) return;

            const id =
                Number(card.dataset.id);

            if (isSaved(id)) {

                button.textContent = "✓";
                button.classList.add("active");

            } else {

                button.textContent = "📌";
                button.classList.remove("active");
            }
        });
}


/* =====================================================
   10. CURRENT IMAGE LIST
===================================================== */

function getCurrentImages() {

    let images = [...visibleImages];

    if (currentSection === "recent") {
        images = getRecentImages();
    }

    if (currentSection === "popular") {

        images = galleryData
            .filter(image => image.popular === true)
            .filter(image =>
                currentCategory === "all" ||
                image.category === currentCategory
            );
    }

    if (currentSearch) {

        const term =
            currentSearch.toLowerCase();

        images = images.filter(image =>
            image.title.toLowerCase().includes(term) ||
            image.category.toLowerCase().includes(term) ||
            image.description.toLowerCase().includes(term)
        );
    }

    return images;
}


/* =====================================================
   11. GALLERY CARD EVENTS
===================================================== */

galleryContainer.addEventListener(
    "click",
    event => {

        const card =
            event.target.closest(".gallery-card");

        if (!card) return;

        const id =
            Number(card.dataset.id);

        const favoriteButton =
            event.target.closest(".favorite-btn");

        if (favoriteButton) {

            event.stopPropagation();

            toggleFavorite(id);

            return;
        }


        const saveButton =
            event.target.closest(".save-btn");

        if (saveButton) {

            event.stopPropagation();

            toggleSave(id);

            return;
        }


        const viewButton =
            event.target.closest(".view-btn");

        if (viewButton) {

            event.stopPropagation();

            openLightbox(id);

            return;
        }


        if (
            event.target.closest(".image-wrapper")
        ) {

            openLightbox(id);
        }
    }
);


/* =====================================================
   12. LIGHTBOX ELEMENTS
===================================================== */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const lightboxDescription =
    document.getElementById("lightboxDescription");

const lightboxCategory =
    document.getElementById("lightboxCategory");

const lightboxCounter =
    document.getElementById("lightboxCounter");

const lightboxFavorite =
    document.getElementById("lightboxFavorite");

const lightboxSave =
    document.getElementById("lightboxSave");

const lightboxClose =
    document.getElementById("lightboxClose");

const lightboxPrev =
    document.getElementById("lightboxPrev");

const lightboxNext =
    document.getElementById("lightboxNext");


let lightboxImages = [];
let currentLightboxIndex = 0;


/* =====================================================
   13. OPEN LIGHTBOX
===================================================== */

function openLightbox(id) {

    const image =
        getImageById(id);

    if (!image) return;


    lightboxImages =
        getCurrentImages();


    if (
        !lightboxImages.some(
            item => item.id === image.id
        )
    ) {

        lightboxImages = [image];
    }


    currentLightboxIndex =
        lightboxImages.findIndex(
            item => item.id === image.id
        );


    if (currentLightboxIndex < 0) {
        currentLightboxIndex = 0;
    }


    addToRecent(image.id);

    displayLightboxImage();


    if (lightbox) {

        lightbox.classList.add("show");

        lightbox.setAttribute(
            "aria-hidden",
            "false"
        );
    }

    document.body.classList.add(
        "lightbox-open"
    );
}


/* =====================================================
   14. DISPLAY LIGHTBOX
===================================================== */

function displayLightboxImage() {

    const image =
        lightboxImages[
            currentLightboxIndex
        ];

    if (!image) return;


    lightboxImage.src =
        image.image;

    lightboxImage.alt =
        image.title;

    lightboxTitle.textContent =
        image.title;

    lightboxDescription.textContent =
        image.description;

    lightboxCategory.textContent =
        image.category;


    lightboxCounter.textContent =
        `${currentLightboxIndex + 1} / ${lightboxImages.length}`;


    updateLightboxFavorite();
    updateLightboxSave();
}


/* =====================================================
   15. LIGHTBOX FAVORITE
===================================================== */

function updateLightboxFavorite() {

    if (!lightboxFavorite) return;

    const image =
        lightboxImages[
            currentLightboxIndex
        ];

    if (!image) return;


    const icon =
        lightboxFavorite.querySelector(
            ".favorite-icon"
        );


    if (isFavorite(image.id)) {

        if (icon) {
            icon.textContent = "♥";
        }

        lightboxFavorite.classList.add(
            "active"
        );

    } else {

        if (icon) {
            icon.textContent = "♡";
        }

        lightboxFavorite.classList.remove(
            "active"
        );
    }
}


/* =====================================================
   16. LIGHTBOX SAVE
===================================================== */

function updateLightboxSave() {

    if (!lightboxSave) return;

    const image =
        lightboxImages[
            currentLightboxIndex
        ];

    if (!image) return;


    if (isSaved(image.id)) {

        lightboxSave.classList.add(
            "active"
        );

        lightboxSave.innerHTML = `
            <span>✓</span>
            <span>Saved</span>
        `;

    } else {

        lightboxSave.classList.remove(
            "active"
        );

        lightboxSave.innerHTML = `
            <span>📌</span>
            <span>Save</span>
        `;
    }
}


/* =====================================================
   17. CLOSE LIGHTBOX
===================================================== */

function closeLightbox() {

    if (!lightbox) return;

    lightbox.classList.remove("show");

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "lightbox-open"
    );
}


if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );
}


const lightboxOverlay =
    document.querySelector(
        ".lightbox-overlay"
    );


if (lightboxOverlay) {

    lightboxOverlay.addEventListener(
        "click",
        closeLightbox
    );
}


/* =====================================================
   18. NEXT IMAGE
===================================================== */

function showNextImage() {

    if (!lightboxImages.length) return;

    currentLightboxIndex++;

    if (
        currentLightboxIndex >=
        lightboxImages.length
    ) {

        currentLightboxIndex = 0;
    }

    displayLightboxImage();

    const image =
        lightboxImages[
            currentLightboxIndex
        ];

    if (image) {
        addToRecent(image.id);
    }
}


if (lightboxNext) {

    lightboxNext.addEventListener(
        "click",
        showNextImage
    );
}


/* =====================================================
   19. PREVIOUS IMAGE
===================================================== */

function showPreviousImage() {

    if (!lightboxImages.length) return;

    currentLightboxIndex--;

    if (currentLightboxIndex < 0) {

        currentLightboxIndex =
            lightboxImages.length - 1;
    }

    displayLightboxImage();

    const image =
        lightboxImages[
            currentLightboxIndex
        ];

    if (image) {
        addToRecent(image.id);
    }
}


if (lightboxPrev) {

    lightboxPrev.addEventListener(
        "click",
        showPreviousImage
    );
}


/* =====================================================
   20. LIGHTBOX FAVORITE BUTTON
===================================================== */

if (lightboxFavorite) {

    lightboxFavorite.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            const image =
                lightboxImages[
                    currentLightboxIndex
                ];

            if (!image) return;

            toggleFavorite(image.id);
        }
    );
}


/* =====================================================
   21. LIGHTBOX SAVE BUTTON
===================================================== */

if (lightboxSave) {

    lightboxSave.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            const image =
                lightboxImages[
                    currentLightboxIndex
                ];

            if (!image) return;

            toggleSave(image.id);
        }
    );
}


/* =====================================================
   22. SEARCH
===================================================== */

const searchInput =
    document.getElementById("searchInput");

const noResults =
    document.getElementById("noResults");

const resetSearch =
    document.getElementById("resetSearch");


if (searchInput) {

    searchInput.addEventListener(
        "input",
        () => {

            currentSearch =
                searchInput.value
                    .trim()
                    .toLowerCase();

            renderCurrentView();
        }
    );
}


/* =====================================================
   23. RENDER CURRENT VIEW
===================================================== */

function renderCurrentView() {

    let images =
        getCurrentImages();


    galleryContainer.innerHTML = "";


    images.forEach(image => {

        const card =
            createGalleryCard(image);

        galleryContainer.appendChild(card);
    });


    visibleImages = [...images];


    imageCount.textContent =
        images.length;


    if (currentSearch) {

        galleryTitle.textContent =
            "Search Results";

        gallerySubtitle.textContent =
            `${images.length} matching images found`;

    } else if (currentSection === "recent") {

        galleryTitle.textContent =
            currentCategory === "all"
                ? "Recently Viewed"
                : `Recent ${currentCategory}`;

        gallerySubtitle.textContent =
            "Images you recently opened";

    } else if (currentSection === "popular") {

        galleryTitle.textContent =
            currentCategory === "all"
                ? "Popular Photos"
                : `Popular ${currentCategory}`;

        gallerySubtitle.textContent =
            "Popular images from the gallery";

    } else {

        updateHeading(currentCategory);
    }


    if (noResults) {

        if (!images.length) {

            noResults.classList.add("show");

            noResults.setAttribute(
                "aria-hidden",
                "false"
            );

        } else {

            noResults.classList.remove("show");

            noResults.setAttribute(
                "aria-hidden",
                "true"
            );
        }
    }


    updateFavoriteButtons();
    updateSaveButtons();
}


/* =====================================================
   24. RESET SEARCH
===================================================== */

if (resetSearch) {

    resetSearch.addEventListener(
        "click",
        () => {

            currentSearch = "";

            if (searchInput) {
                searchInput.value = "";
            }

            renderCurrentView();
        }
    );
}


/* =====================================================
   25. SIDEBAR NAVIGATION
===================================================== */

document
    .querySelectorAll(".sidebar-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();

                const section =
                    link.dataset.section;

                if (
                    section === "collections" ||
                    section === "saved" ||
                    section === "favorites"
                ) {
                    return;
                }


                document
                    .querySelectorAll(
                        ".sidebar-link"
                    )
                    .forEach(item =>
                        item.classList.remove(
                            "active"
                        )
                    );


                link.classList.add("active");

                currentSection =
                    section;


                currentSearch = "";

                if (searchInput) {
                    searchInput.value = "";
                }


                renderCurrentView();
            }
        );
    });


/* =====================================================
   26. CATEGORY NAVIGATION
===================================================== */

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        event => {

            event.preventDefault();

            const category =
                button.dataset.category;

            if (!category) return;


            if (category === "favorites") {
                return;
            }


            currentCategory =
                category;

            currentSection =
                "featured";

            currentSearch = "";

            if (searchInput) {
                searchInput.value = "";
            }


            document
                .querySelectorAll(
                    ".sidebar-link"
                )
                .forEach(link =>
                    link.classList.remove(
                        "active"
                    )
                );


            const featured =
                document.querySelector(
                    '[data-section="featured"]'
                );


            if (featured) {
                featured.classList.add(
                    "active"
                );
            }


            filterCategory(category);
        }
    );
});


/* =====================================================
   27. KEYBOARD CONTROLS
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            !lightbox ||
            !lightbox.classList.contains(
                "show"
            )
        ) {
            return;
        }


        if (event.key === "Escape") {
            closeLightbox();
        }


        if (event.key === "ArrowRight") {
            showNextImage();
        }


        if (event.key === "ArrowLeft") {
            showPreviousImage();
        }
    }
);


/* =====================================================
   28. INITIAL UPDATE
===================================================== */

updateFavoriteButtons();
updateSaveButtons();
/* =====================================================
   IMAGE GALLERY — JAVASCRIPT PART 03
   SAVED + FAVORITES + UPLOAD + COLLECTIONS
===================================================== */


/* =====================================================
   1. SAVED IMAGES VIEW
===================================================== */

function showSavedImages() {

    currentSection = "saved";

    currentSearch = "";

    if (searchInput) {
        searchInput.value = "";
    }

    const images = galleryData.filter(
        image => savedImages.includes(image.id)
    );

    updateSidebarActive("saved");

    galleryContainer.innerHTML = "";

    images.forEach(image => {
        galleryContainer.appendChild(
            createGalleryCard(image)
        );
    });

    visibleImages = [...images];

    imageCount.textContent = images.length;

    galleryTitle.textContent = "Saved Photos";

    gallerySubtitle.textContent =
        images.length
            ? "Images you saved for later."
            : "Your saved images will appear here.";

    showEmptyState(
        "emptySaved",
        images.length === 0
    );

    hideEmptyState("noResults");

    updateFavoriteButtons();
    updateSaveButtons();
}


/* =====================================================
   2. FAVORITES VIEW
===================================================== */

function showFavoriteImages() {

    currentSection = "favorites";

    currentSearch = "";

    if (searchInput) {
        searchInput.value = "";
    }

    const images = galleryData.filter(
        image => favoriteImages.includes(image.id)
    );

    updateSidebarActive("favorites");

    galleryContainer.innerHTML = "";

    images.forEach(image => {
        galleryContainer.appendChild(
            createGalleryCard(image)
        );
    });

    visibleImages = [...images];

    imageCount.textContent = images.length;

    galleryTitle.textContent = "Favorite Photos";

    gallerySubtitle.textContent =
        images.length
            ? "Your favorite moments in one place."
            : "Images you love will appear here.";

    showEmptyState(
        "emptyFavorites",
        images.length === 0
    );

    hideEmptyState("noResults");

    updateFavoriteButtons();
    updateSaveButtons();
}


/* =====================================================
   3. EMPTY STATE HELPERS
===================================================== */

function showEmptyState(id, show) {

    const element =
        document.getElementById(id);

    if (!element) return;

    element.classList.toggle("show", show);

    element.setAttribute(
        "aria-hidden",
        show ? "false" : "true"
    );
}


function hideEmptyState(id) {
    showEmptyState(id, false);
}


/* =====================================================
   4. SIDEBAR ACTIVE STATE
===================================================== */

function updateSidebarActive(section) {

    document
        .querySelectorAll(".sidebar-link")
        .forEach(link => {

            link.classList.toggle(
                "active",
                link.dataset.section === section
            );
        });
}


/* =====================================================
   5. REFRESH CURRENT SAVED / FAVORITE VIEW
===================================================== */

function refreshSpecialView() {

    if (currentSection === "saved") {

        showSavedImages();

        return;
    }

    if (currentSection === "favorites") {

        showFavoriteImages();

        return;
    }

    updateFavoriteButtons();
    updateSaveButtons();
}


/* =====================================================
   6. SIDEBAR SAVED + FAVORITES
===================================================== */

document
    .querySelectorAll(".sidebar-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const section =
                    link.dataset.section;

                if (
                    section !== "saved" &&
                    section !== "favorites"
                ) {
                    return;
                }

                event.preventDefault();
                event.stopPropagation();


                if (section === "saved") {

                    showSavedImages();

                    return;
                }


                if (section === "favorites") {

                    showFavoriteImages();

                    return;
                }
            }
        );
    });


/* =====================================================
   7. HEADER FAVORITE BUTTON
===================================================== */

const headerFavoritesBtn =
    document.getElementById(
        "headerFavoritesBtn"
    );


if (headerFavoritesBtn) {

    headerFavoritesBtn.addEventListener(
        "click",
        event => {

            event.preventDefault();

            showFavoriteImages();
        }
    );
}


/* =====================================================
   8. CATEGORY FAVORITE BUTTON
===================================================== */

const favoritesCategory =
    document.querySelector(
        ".favorites-category"
    );


if (favoritesCategory) {

    favoritesCategory.addEventListener(
        "click",
        event => {

            event.preventDefault();

            event.stopPropagation();

            showFavoriteImages();
        }
    );
}


/* =====================================================
   9. KEEP FAVORITES / SAVED IN SYNC
===================================================== */

const originalToggleFavorite =
    toggleFavorite;

toggleFavorite = function(id) {

    originalToggleFavorite(id);

    if (
        currentSection === "favorites" ||
        currentSection === "saved"
    ) {
        refreshSpecialView();
    }
};


const originalToggleSave =
    toggleSave;

toggleSave = function(id) {

    originalToggleSave(id);

    if (
        currentSection === "saved" ||
        currentSection === "favorites"
    ) {
        refreshSpecialView();
    }
};


/* =====================================================
   10. UPLOAD MODAL
===================================================== */

const uploadBtn =
    document.getElementById("uploadBtn");

const uploadModal =
    document.getElementById("uploadModal");

const uploadModalClose =
    document.getElementById(
        "uploadModalClose"
    );

const uploadCancel =
    document.getElementById("uploadCancel");

const uploadForm =
    document.getElementById("uploadForm");

const imageFile =
    document.getElementById("imageFile");

const previewImage =
    document.getElementById("previewImage");

const uploadPreview =
    document.getElementById("uploadPreview");


function openUploadModal() {

    if (!uploadModal) return;

    uploadModal.classList.add("show");

    uploadModal.setAttribute(
        "aria-hidden",
        "false"
    );
}


function closeUploadModal() {

    if (!uploadModal) return;

    uploadModal.classList.remove("show");

    uploadModal.setAttribute(
        "aria-hidden",
        "true"
    );
}


if (uploadBtn) {

    uploadBtn.addEventListener(
        "click",
        openUploadModal
    );
}


if (uploadModalClose) {

    uploadModalClose.addEventListener(
        "click",
        closeUploadModal
    );
}


if (uploadCancel) {

    uploadCancel.addEventListener(
        "click",
        closeUploadModal
    );
}


/* =====================================================
   11. UPLOAD PREVIEW
===================================================== */

if (imageFile) {

    imageFile.addEventListener(
        "change",
        () => {

            const file =
                imageFile.files[0];

            if (!file) return;

            const reader =
                new FileReader();

            reader.onload = event => {

                previewImage.src =
                    event.target.result;

                if (uploadPreview) {
                    uploadPreview.classList.add(
                        "show"
                    );
                }
            };

            reader.readAsDataURL(file);
        }
    );
}


/* =====================================================
   12. UPLOAD IMAGE
===================================================== */

if (uploadForm) {

    uploadForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const file =
                imageFile.files[0];

            const title =
                document.getElementById(
                    "imageTitle"
                ).value.trim();

            const description =
                document.getElementById(
                    "imageDescription"
                ).value.trim();

            const category =
                document.getElementById(
                    "imageCategory"
                ).value;

            const collection =
                document.getElementById(
                    "imageCollection"
                ).value;


            if (
                !file ||
                !title ||
                !description ||
                !category
            ) {
                return;
            }


            const reader =
                new FileReader();


            reader.onload = event => {

                const newId =
                    galleryData.length
                    ? Math.max(
                        ...galleryData.map(
                            image => image.id
                        )
                    ) + 1
                    : 1;


                const uploadedImage = {

                    id: newId,

                    category: category,

                    image:
                        event.target.result,

                    title: title,

                    description:
                        description,

                    popular: false,

                    collection:
                        collection || ""
                };


                galleryData.push(
                    uploadedImage
                );


                saveUploadedImages();


                closeUploadModal();

                uploadForm.reset();


                if (uploadPreview) {

                    uploadPreview.classList.remove(
                        "show"
                    );
                }


                showToast(
                    "Image added to gallery",
                    "✓"
                );


                currentSection =
                    "all";

                currentCategory =
                    category;


                filterCategory(
                    category
                );
            };


            reader.readAsDataURL(file);
        }
    );
}


/* =====================================================
   13. UPLOADED IMAGE STORAGE
===================================================== */

function saveUploadedImages() {

    const uploaded =
        galleryData.filter(
            image => image.uploaded === true
        );

    localStorage.setItem(
        "galleryUploaded",
        JSON.stringify(uploaded)
    );
}


function loadUploadedImages() {

    const uploaded =
        JSON.parse(
            localStorage.getItem(
                "galleryUploaded"
            ) || "[]"
        );


    uploaded.forEach(image => {

        if (
            !galleryData.some(
                item => item.id === image.id
            )
        ) {

            galleryData.push(image);
        }
    });
}


/* =====================================================
   14. LOAD UPLOADED IMAGES
===================================================== */

loadUploadedImages();


/* =====================================================
   15. COLLECTION DATA
===================================================== */

const collectionData = {

    landscapes: {
        title: "Mountain Escapes",
        description:
            "Peaceful mountains, lakes and breathtaking landscapes.",
        category: "nature"
    },

    wildlife: {
        title: "Wildlife Stories",
        description:
            "Beautiful animals and unforgettable wild moments.",
        category: "animals"
    },

    desserts: {
        title: "Sweet Delights",
        description:
            "Delicious desserts and sweet creations.",
        category: "food"
    },

    "luxury-cars": {
        title: "Luxury Drives",
        description:
            "Elegant cars, premium designs and powerful machines.",
        category: "cars"
    },

    "sports-cars": {
        title: "Speed & Performance",
        description:
            "Fast cars built for speed and performance.",
        category: "cars"
    },

    "character-world": {
        title: "Character World",
        description:
            "Fun characters from a colorful creative world.",
        category: "characters"
    },

    "creative-art": {
        title: "Creative World",
        description:
            "Artistic ideas, colors and creative expressions.",
        category: "art"
    }
};


/* =====================================================
   16. COLLECTION PANEL
===================================================== */

const collectionsPanel =
    document.getElementById(
        "collectionsPanel"
    );

const collectionsClose =
    document.getElementById(
        "collectionsClose"
    );


function openCollections() {

    if (!collectionsPanel) return;

    collectionsPanel.classList.add(
        "show"
    );

    collectionsPanel.setAttribute(
        "aria-hidden",
        "false"
    );
}


function closeCollections() {

    if (!collectionsPanel) return;

    collectionsPanel.classList.remove(
        "show"
    );

    collectionsPanel.setAttribute(
        "aria-hidden",
        "true"
    );
}


if (collectionsClose) {

    collectionsClose.addEventListener(
        "click",
        closeCollections
    );
}


/* =====================================================
   17. COLLECTION CARD PREVIEWS
===================================================== */

function createCollectionPreviews() {

    document
        .querySelectorAll(
            ".collection-card"
        )
        .forEach(card => {

            const collection =
                card.dataset.collection;

            const images =
                galleryData.filter(
                    image =>
                        image.collection ===
                        collection
                );


            if (!images.length) return;


            let preview =
                card.querySelector(
                    ".collection-preview"
                );


            if (!preview) {

                preview =
                    document.createElement(
                        "div"
                    );

                preview.className =
                    "collection-preview";

                card.prepend(preview);
            }


            preview.innerHTML = "";


            images
                .slice(0, 4)
                .forEach(image => {

                    const img =
                        document.createElement(
                            "img"
                        );

                    img.src =
                        image.image;

                    img.alt =
                        image.title;

                    preview.appendChild(
                        img
                    );
                });
        });
}


/* =====================================================
   18. SHOW COLLECTION
===================================================== */

function showCollection(
    collectionName
) {

    const info =
        collectionData[
            collectionName
        ];

    if (!info) return;


    closeCollections();


    currentSection =
        "collection";


    currentSearch = "";


    if (searchInput) {
        searchInput.value = "";
    }


    const images =
        galleryData.filter(
            image =>
                image.collection ===
                collectionName
        );


    galleryContainer.innerHTML = "";


    images.forEach(image => {

        galleryContainer.appendChild(
            createGalleryCard(image)
        );
    });


    visibleImages = [...images];


    imageCount.textContent =
        images.length;


    galleryTitle.textContent =
        info.title;


    gallerySubtitle.textContent =
        info.description;


    hideEmptyState("noResults");

    hideEmptyState("emptySaved");

    hideEmptyState("emptyFavorites");


    updateFavoriteButtons();

    updateSaveButtons();
}


/* =====================================================
   19. COLLECTION CARD EVENTS
===================================================== */

document
    .querySelectorAll(
        ".collection-card"
    )
    .forEach(card => {

        card.addEventListener(
            "click",
            event => {

                event.preventDefault();

                const collection =
                    card.dataset.collection;

                if (!collection) return;

                showCollection(
                    collection
                );
            }
        );
    });


/* =====================================================
   20. SIDEBAR COLLECTIONS
===================================================== */

document
    .querySelectorAll(".sidebar-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                if (
                    link.dataset.section !==
                    "collections"
                ) {
                    return;
                }

                event.preventDefault();
                event.stopPropagation();

                updateSidebarActive(
                    "collections"
                );

                openCollections();

                createCollectionPreviews();
            }
        );
    });


/* =====================================================
   21. BROWSE GALLERY
===================================================== */

const browseGallery =
    document.getElementById(
        "browseGallery"
    );


if (browseGallery) {

    browseGallery.addEventListener(
        "click",
        () => {

            currentSection =
                "featured";

            filterCategory(
                currentCategory || "all"
            );
        }
    );
}


/* =====================================================
   22. BROWSE SAVED
===================================================== */

const browseSaved =
    document.getElementById(
        "browseSaved"
    );


if (browseSaved) {

    browseSaved.addEventListener(
        "click",
        () => {

            currentSection =
                "featured";

            filterCategory(
                currentCategory || "all"
            );
        }
    );
}


/* =====================================================
   23. COLLECTION ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            collectionsPanel &&
            collectionsPanel.classList.contains(
                "show"
            )
        ) {

            closeCollections();
        }
    }
);


/* =====================================================
   24. INITIAL COLLECTION PREVIEWS
===================================================== */

createCollectionPreviews();


/* =====================================================
   25. FINAL BUTTON STATE
===================================================== */

updateFavoriteButtons();
updateSaveButtons();


/* =====================================================
   END OF JAVASCRIPT PART 03
===================================================== */