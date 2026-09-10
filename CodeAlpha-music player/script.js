/* =========================================================
   MUSIC PLAYER — JAVASCRIPT
   ========================================================= */


/* =========================================================
   1. DOM ELEMENTS
   ========================================================= */

// Sidebar menu items
const menuItems = document.querySelectorAll(".menu-item");

// Main content sections
const contentSections = document.querySelectorAll("main section");


/* =========================================================
   2. SIDEBAR MENU
   ========================================================= */

menuItems.forEach(item => {

    item.addEventListener("click", function () {

        // Remove active class from all menu items
        menuItems.forEach(menu => {
            menu.classList.remove("active");
        });

        // Add active class to clicked item
        this.classList.add("active");

    });

});


/* =========================================================
   3. JAVASCRIPT START CHECK
   ========================================================= */

console.log("Music Player JavaScript Connected Successfully!");
/* =========================================================
   5. TOP BAR — THEME
========================================================= */

const themeToggle = document.getElementById("themeToggle");


if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        // Toggle light mode
        document.body.classList.toggle("light-mode");


        // Check current mode
        const isLightMode =
            document.body.classList.contains("light-mode");


        // Change icon
        const icon = this.querySelector("i");

        if (icon) {

            if (isLightMode) {

                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");

            } else {

                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");

            }

        }


        console.log(
            "Theme:",
            isLightMode ? "Light Mode" : "Dark Mode"
        );

    });

}


/* =========================================================
   6. TOP BAR — NOTIFICATIONS
========================================================= */

const notificationButton =
    document.querySelector(".notification-btn");


if (notificationButton) {

    notificationButton.addEventListener("click", function () {

        console.log("Notifications clicked");


        // Temporary notification message
        alert("No new notifications");

    });

}


/* =========================================================
   7. TOP BAR — PROFILE
========================================================= */

const profileButton =
    document.querySelector(".profile-box");


if (profileButton) {

    profileButton.addEventListener("click", function () {

        console.log("Profile clicked");


        // Temporary profile message
        alert("Profile: Alishba");

    });

}
/* =========================================================
   8. BROWSE CATEGORIES
========================================================= */

const categoryCards =
    document.querySelectorAll(".category-card");

const viewAllCategories =
    document.getElementById("viewAllCategories");


/* ---------------------------------------------------------
   CATEGORY CLICK
--------------------------------------------------------- */

categoryCards.forEach(card => {

    card.addEventListener("click", function () {

        // Remove selected state
        categoryCards.forEach(category => {
            category.classList.remove("selected");
        });

        // Select clicked category
        this.classList.add("selected");


        // Get category name
        const selectedCategory =
            this.dataset.category;


        console.log(
            "Category selected:",
            selectedCategory
        );

    });

});


/* ---------------------------------------------------------
   VIEW ALL CATEGORIES
--------------------------------------------------------- */

if (viewAllCategories) {

    viewAllCategories.addEventListener("click", function () {

        // Remove selected state
        categoryCards.forEach(category => {
            category.classList.remove("selected");
        });

        console.log("Showing all categories");

    });

}
/* =========================================================
   9. RECENTLY PLAYED
========================================================= */

const recentGrid =
    document.getElementById("recentGrid");

const recentEmpty =
    document.getElementById("recentEmpty");

const viewAllRecent =
    document.getElementById("viewAllRecent");


/* ---------------------------------------------------------
   RECENTLY PLAYED DATA
--------------------------------------------------------- */


let recentlyPlayed = [
    {
        id: 1,
        title: "Test Song",
        artist: "Test Artist",
        category: "Pop",
        duration: "3:24"
    }
];


/* ---------------------------------------------------------
   CONNECT EXISTING CSS CLASSES
--------------------------------------------------------- */

if (recentGrid) {

    recentGrid.classList.add(
        "recently-played-grid"
    );

}


/* ---------------------------------------------------------
   RENDER RECENTLY PLAYED
--------------------------------------------------------- */

function renderRecentlyPlayed() {

    if (
        !recentGrid ||
        !recentEmpty
    ) {

        return;

    }


    /* Empty state */

    if (
        recentlyPlayed.length === 0
    ) {

        recentGrid.innerHTML = "";

        recentEmpty.style.display =
            "flex";

        return;

    }


    /* Hide empty message */

    recentEmpty.style.display =
        "none";


    /* Create cards */

    recentGrid.innerHTML =
        recentlyPlayed.map(song => {

            return `

                <button
                    class="recently-played-card"
                    type="button"
                    data-song-id="${song.id}"
                >

                    <!-- Song Cover -->

                    <div class="song-cover">

    ${
        song.cover
        ?
        `<img
            src="${song.cover}"
            alt="${song.title}"
        >`
        :
        `<i class="fa-solid fa-music"></i>`
    }

</div>


                    <!-- Song Information -->

                    <div class="song-info">

                        <h3>
                            ${song.title}
                        </h3>

                        <span>
                            ${song.artist} • ${song.category}
                        </span>

                    </div>


                    <!-- Duration -->

                    <span class="song-duration">
                        ${song.duration || "0:00"}
                    </span>


                    <!-- Play Button -->

                    <span
                        class="song-play-btn"
                        aria-label="Play ${song.title}"
                    >

                        <i class="fa-solid fa-play"></i>

                    </span>

                </button>

            `;

        }).join("");


    /* -----------------------------------------------------
       CARD CLICK
    ----------------------------------------------------- */

    const recentCards =
        document.querySelectorAll(
            ".recently-played-card"
        );


    recentCards.forEach(card => {

        card.addEventListener(
            "click",
            function () {

                const songId =
                    Number(
                        this.dataset.songId
                    );


                const songIndex =
                    melodySongs.findIndex(
                        song =>
                            song.id === songId
                    );


                if (
                    songIndex !== -1 &&
                    typeof loadSong ===
                        "function"
                ) {

                    loadSong(
                        songIndex,
                        true
                    );

                }

            }
        );

    });

}


/* ---------------------------------------------------------
   VIEW ALL
--------------------------------------------------------- */

if (viewAllRecent) {

    viewAllRecent.addEventListener(
        "click",
        function () {

            const isExpanded =
                recentGrid.classList.toggle(
                    "show-all"
                );


            if (isExpanded) {

                this.innerHTML = `
                    Show Less
                    <i class="fa-solid fa-arrow-up"></i>
                `;

            } else {

                this.innerHTML = `
                    View All
                    <i class="fa-solid fa-arrow-right"></i>
                `;

            }

        }
    );

}


/* ---------------------------------------------------------
   INITIALIZE
--------------------------------------------------------- */

renderRecentlyPlayed();
/* =========================================================
   10. PLAYLIST
========================================================= */

const createPlaylistBtn =
    document.getElementById("createPlaylistBtn");

const playlistList =
    document.getElementById("playlistList");

const playlistEmpty =
    document.getElementById("playlistEmpty");

const playlistCount =
    document.getElementById("playlistCount");

const viewAllPlaylistBtn =
    document.getElementById("viewAllPlaylistBtn");


/* ---------------------------------------------------------
   PLAYLIST DATA
--------------------------------------------------------- */

let playlists = [];
function renderPlaylists() {

    if (!playlistList || !playlistEmpty) {
        return;
    }


    /* Empty state */

    if (playlists.length === 0) {

        playlistList.innerHTML = "";

        playlistEmpty.style.display = "flex";

        if (playlistCount) {
            playlistCount.textContent = "0 Songs";
        }

        return;
    }


    /* Hide empty state */

    playlistEmpty.style.display = "none";


    /* Create playlist cards */

    playlistList.innerHTML = playlists.map(playlist => {

        return `
            <div
                class="playlist-item"
                data-playlist-id="${playlist.id}"
            >

                <div class="playlist-icon">
                    <i class="fa-solid fa-music"></i>
                </div>


                <div class="playlist-info">

                    <h3>${playlist.name}</h3>

                    <span>
                        ${playlist.songs.length} Songs
                    </span>

                </div>


                <button
                    class="playlist-delete-btn"
                    type="button"
                    data-playlist-id="${playlist.id}"
                    aria-label="Delete playlist"
                >

                    <i class="fa-solid fa-trash"></i>

                </button>


                <i class="fa-solid fa-chevron-right playlist-arrow"></i>

            </div>
        `;

    }).join("");
/* -------------------------------------------------
   PLAYLIST CLICK
   EXPAND / COLLAPSE SONGS
------------------------------------------------- */

const playlistItems =
    document.querySelectorAll(".playlist-item");


playlistItems.forEach(item => {

    item.addEventListener(
        "click",
        function(event) {

            /* Ignore delete button */

            if (
                event.target.closest(
                    ".playlist-delete-btn"
                )
            ) {
                return;
            }


            const playlistId =
                Number(
                    this.dataset.playlistId
                );


            const selectedPlaylist =
                playlists.find(
                    playlist =>
                        playlist.id === playlistId
                );


            if (!selectedPlaylist) {
                return;
            }


            /* -------------------------------------------------
               CHECK IF SONGS ARE ALREADY OPEN
            ------------------------------------------------- */

            const existingSongs =
                this.querySelector(
                    ".playlist-songs"
                );


            if (existingSongs) {

                existingSongs.remove();


                this.classList.remove(
                    "playlist-expanded"
                );


                const arrow =
                    this.querySelector(
                        ".playlist-arrow"
                    );


                if (arrow) {

                    arrow.classList.remove(
                        "fa-chevron-down"
                    );

                    arrow.classList.add(
                        "fa-chevron-right"
                    );

                }

                return;

            }


            /* -------------------------------------------------
               CREATE SONGS AREA
            ------------------------------------------------- */

            const songsContainer =
                document.createElement("div");


            songsContainer.className =
                "playlist-songs";


            /* Empty playlist */

            if (
                !selectedPlaylist.songs ||
                selectedPlaylist.songs.length === 0
            ) {

                songsContainer.innerHTML = `
                    <div class="playlist-no-songs">

                        <i class="fa-solid fa-music"></i>

                        <span>
                            No songs in this playlist yet.
                        </span>

                    </div>
                `;

            }


            /* -------------------------------------------------
               SHOW PLAYLIST SONGS
            ------------------------------------------------- */

            else {

                songsContainer.innerHTML =
    selectedPlaylist.songs
    .map(song => {

        return `
            <div
                class="playlist-song"
                data-song-id="${song.id}"
            >

                <img
                    src="${song.cover}"
                    alt="${song.title}"
                    class="playlist-song-cover"
                >

                <div class="playlist-song-info">

                    <h4>${song.title}</h4>

                </div>

            </div>
        `;

    })
    .join("");
            }


            /* -------------------------------------------------
               INSERT INSIDE SAME PLAYLIST CARD
            ------------------------------------------------- */

            this.appendChild(
                songsContainer
            );


            this.classList.add(
                "playlist-expanded"
            );


            /* Change arrow */

            const arrow =
                this.querySelector(
                    ".playlist-arrow"
                );


            if (arrow) {

                arrow.classList.remove(
                    "fa-chevron-right"
                );

                arrow.classList.add(
                    "fa-chevron-down"
                );

            }


            /* -------------------------------------------------
               PLAY SONG FROM PLAYLIST
            ------------------------------------------------- */

           const playButtons =
    songsContainer.querySelectorAll(
        ".playlist-song-play"
    );


playButtons.forEach(button => {

    button.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();

            const songId =
                Number(
                    this.dataset.songId
                );

            const songIndex =
                melodySongs.findIndex(
                    song =>
                        song.id === songId
                );

            if (
                songIndex !== -1 &&
                typeof loadSong ===
                "function"
            ) {

                loadSong(
                    songIndex,
                    true
                );

            }

        }
    );

});


            playButtons.forEach(button => {

                button.addEventListener(
                    "click",
                    function(event) {

                        event.stopPropagation();


                        const songId =
                            Number(
                                this.dataset.songId
                            );


                        const songIndex =
                            melodySongs.findIndex(
                                song =>
                                    song.id === songId
                            );


                        if (
                            songIndex !== -1 &&
                            typeof loadSong ===
                            "function"
                        ) {

                            loadSong(
                                songIndex,
                                true
                            );


                            console.log(
                                "Playing playlist song:",
                                selectedPlaylist.songs
                                    .find(
                                        song =>
                                            song.id === songId
                                    )?.title
                            );

                        }

                    }
                );

            });

        }
    );

});




    /* Delete playlist */

    const deleteButtons =
        document.querySelectorAll(
            ".playlist-delete-btn"
        );


    deleteButtons.forEach(button => {

        button.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();


                const playlistId =
                    Number(this.dataset.playlistId);


                const playlist =
                    playlists.find(
                        item => item.id === playlistId
                    );


                if (!playlist) {
                    return;
                }


                const confirmDelete =
                    confirm(
                        `Delete "${playlist.name}" playlist?`
                    );


                if (!confirmDelete) {
                    return;
                }


                playlists =
                    playlists.filter(
                        item => item.id !== playlistId
                    );


                renderPlaylists();


                console.log(
                    "Playlist deleted:",
                    playlist.name
                );

            }
        );

    });

}



/* =========================================================
   CREATE PLAYLIST
========================================================= */

if (createPlaylistBtn) {

    createPlaylistBtn.addEventListener("click", function () {

        const playlistName = prompt("Enter playlist name:");

        if (!playlistName || playlistName.trim() === "") {
            return;
        }

        const newPlaylist = {
            id: Date.now(),
            name: playlistName.trim(),
            songs: []
        };

        playlists.push(newPlaylist);

        renderPlaylists();

        console.log(
            "Playlist created:",
            newPlaylist.name
        );

    });

}

    

/* ---------------------------------------------------------
   VIEW ALL PLAYLISTS
--------------------------------------------------------- */

if (viewAllPlaylistBtn) {

    viewAllPlaylistBtn.addEventListener(
        "click",
        function () {

            console.log(
                "Showing all playlists"
            );

        }
    );

}


/* ---------------------------------------------------------
   INITIALIZE PLAYLIST
--------------------------------------------------------- */

renderPlaylists();
/* =========================================================
   11. SIDEBAR NAVIGATION
========================================================= */


/* ---------------------------------------------------------
   MAIN MENU BUTTONS
--------------------------------------------------------- */

const sidebarMenuItems =
    document.querySelectorAll(".sidebar-menu .menu-item");


/* ---------------------------------------------------------
   LIBRARY BUTTONS
--------------------------------------------------------- */

const libraryItems =
    document.querySelectorAll(".library .library-item");


/* ---------------------------------------------------------
   ALL SIDEBAR BUTTONS
--------------------------------------------------------- */

const allSidebarButtons = [
    ...sidebarMenuItems,
    ...libraryItems
];


/* ---------------------------------------------------------
   SIDEBAR NAVIGATION
--------------------------------------------------------- */

allSidebarButtons.forEach(button => {

    button.addEventListener("click", function () {

        /* Remove active from all buttons */

        allSidebarButtons.forEach(item => {
            item.classList.remove("active");
        });


        /* Add active to clicked button */

        this.classList.add("active");


        /* Get button name */

        const navigationName =
            this.querySelector("span")?.textContent.trim();


        /* Console test */

        console.log(
            "Sidebar navigation:",
            navigationName
        );

    });

});
/* =========================================================
   12. SIDEBAR SECTION NAVIGATION
========================================================= */

const dashboardContent =
    document.querySelector(".dashboard-content");

const exploreSection =
    document.querySelector(".categories-section");

const recentSection =
    document.querySelector(".recent-section");


/* ---------------------------------------------------------
   EXPLORE BUTTON
--------------------------------------------------------- */

const exploreButton =
    [...allSidebarButtons].find(button =>
        button.querySelector("span")?.textContent.trim() === "Explore"
    );


if (exploreButton && exploreSection) {

    exploreButton.addEventListener("click", function () {

        exploreSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        console.log("Explore section opened");

    });

}
/* =========================================================
   13. ALBUMS - VIEW ALL
========================================================= */

const albumsGrid =
    document.getElementById("albumsGrid");

const viewAllAlbums =
    document.getElementById("viewAllAlbums");


if (albumsGrid && viewAllAlbums) {

    viewAllAlbums.addEventListener("click", function () {

        const isExpanded =
            albumsGrid.classList.toggle("show-all");


        if (isExpanded) {

            this.innerHTML = `
                Show Less
                <i class="fa-solid fa-arrow-up"></i>
            `;

            console.log("All albums displayed");

        } else {

            this.innerHTML = `
                View All
                <i class="fa-solid fa-arrow-right"></i>
            `;

            console.log("Albums collapsed");

        }

    });

}
/* =========================================================
   14. ARTISTS - VIEW ALL
========================================================= */

const artistsGrid =
    document.getElementById("artistsGrid");

const viewAllArtists =
    document.getElementById("viewAllArtists");


if (artistsGrid && viewAllArtists) {

    viewAllArtists.addEventListener(
        "click",
        function () {

            const isExpanded =
                artistsGrid.classList.toggle(
                    "show-all"
                );


            if (isExpanded) {

                this.innerHTML = `
                    Show Less
                    <i class="fa-solid fa-arrow-up"></i>
                `;

                console.log(
                    "All artists displayed"
                );

            } else {

                this.innerHTML = `
                    View All
                    <i class="fa-solid fa-arrow-right"></i>
                `;

                console.log(
                    "Artists collapsed"
                );

            }

        }
    );

}
/* =========================================================
   15. FAVORITES - VIEW ALL
========================================================= */

const favoritesGrid =
    document.getElementById("favoritesGrid");

const favoritesEmpty =
    document.getElementById("favoritesEmpty");

const viewAllFavorites =
    document.getElementById("viewAllFavorites");


if (favoritesGrid && viewAllFavorites) {

    viewAllFavorites.addEventListener(
        "click",
        function () {

            const isExpanded =
                favoritesGrid.classList.toggle(
                    "show-all"
                );


            if (isExpanded) {

                this.innerHTML = `
                    Show Less
                    <i class="fa-solid fa-arrow-up"></i>
                `;

                console.log(
                    "All favorite songs displayed"
                );

            } else {

                this.innerHTML = `
                    View All
                    <i class="fa-solid fa-arrow-right"></i>
                `;

                console.log(
                    "Favorites collapsed"
                );

            }

        }
    );

}
/* =========================================================
   16. SIDEBAR - ARTISTS + HOME NAVIGATION
========================================================= */


/* ---------------------------------------------------------
   ARTISTS
--------------------------------------------------------- */

const artistsButton =
    [...allSidebarButtons].find(button =>
        button.querySelector("span")?.textContent.trim() === "Artists"
    );

const artistsSection =
    document.getElementById("artistsSection");


if (artistsButton && artistsSection) {

    artistsButton.addEventListener("click", function () {

        artistsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        console.log("Artists section opened");

    });

}


/* ---------------------------------------------------------
   HOME
--------------------------------------------------------- */

const homeButton =
    [...allSidebarButtons].find(button =>
        button.querySelector("span")?.textContent.trim() === "Home"
    );


if (homeButton) {

    homeButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        console.log("Home section opened");

    });

}
/* =========================================================
   17. FAVORITES + LIKED SONGS NAVIGATION
========================================================= */

const favoritesSection =
    document.getElementById("favoritesSection");


/* ---------------------------------------------------------
   FAVORITES BUTTON
--------------------------------------------------------- */

const favoritesButton =
    [...allSidebarButtons].find(button =>
        button.querySelector("span")?.textContent.trim() === "Favorites"
    );


if (favoritesButton && favoritesSection) {

    favoritesButton.addEventListener("click", function () {

        favoritesSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        console.log("Favorites section opened");

    });

}


/* ---------------------------------------------------------
   LIKED SONGS BUTTON
   Same Favorites section
--------------------------------------------------------- */

const likedSongsButton =
    [...allSidebarButtons].find(button =>
        button.querySelector("span")?.textContent.trim() === "Liked Songs"
    );


if (likedSongsButton && favoritesSection) {

    likedSongsButton.addEventListener("click", function () {

        favoritesSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        console.log("Liked Songs → Favorites section opened");

    });

}
/* =========================================================
   18. ALBUMS NAVIGATION
========================================================= */

const albumsButton =
    [...allSidebarButtons].find(button =>
        button.querySelector("span")?.textContent.trim() === "Albums"
    );

const albumsSection =
    document.getElementById("albumsSection");


if (albumsButton && albumsSection) {

    albumsButton.addEventListener("click", function () {

        albumsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        console.log("Albums section opened");

    });

}
/* =========================================================
   19. PLAYLIST + MY PLAYLISTS NAVIGATION
========================================================= */

const playlistPanel =
    document.querySelector(".playlist-panel");


/* ---------------------------------------------------------
   PLAYLIST BUTTON
--------------------------------------------------------- */

const playlistsButton =
    [...allSidebarButtons].find(button =>
        button.querySelector("span")?.textContent.trim() === "Playlists"
    );


if (playlistsButton && playlistPanel) {

    playlistsButton.addEventListener("click", function () {

        playlistPanel.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        console.log("Playlists panel opened");

    });

}


/* ---------------------------------------------------------
   MY PLAYLISTS BUTTON
   SAME EXISTING PLAYLIST PANEL
--------------------------------------------------------- */

const myPlaylistsButton =
    [...allSidebarButtons].find(button =>
        button.querySelector("span")?.textContent.trim() === "My Playlists"
    );


if (myPlaylistsButton && playlistPanel) {

    myPlaylistsButton.addEventListener("click", function () {

        playlistPanel.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        console.log("My Playlists → Playlist panel opened");

    });

}
/* =========================================================
   20. MOST PLAYED
========================================================= */

const mostPlayedGrid =
    document.getElementById("mostPlayedGrid");

const mostPlayedEmpty =
    document.getElementById("mostPlayedEmpty");

const viewAllMostPlayed =
    document.getElementById("viewAllMostPlayed");


/* ---------------------------------------------------------
   MOST PLAYED DATA
--------------------------------------------------------- */

let mostPlayedSongs = [];


/* ---------------------------------------------------------
   RENDER MOST PLAYED
--------------------------------------------------------- */

function renderMostPlayed() {

    if (!mostPlayedGrid || !mostPlayedEmpty) {
        return;
    }


    /* Empty */

    if (mostPlayedSongs.length === 0) {

        mostPlayedGrid.innerHTML = "";

        mostPlayedEmpty.style.display = "flex";

        return;

    }


    /* Hide empty */

    mostPlayedEmpty.style.display = "none";


    /* Highest play count first */

    const sortedSongs =
        [...mostPlayedSongs].sort(
            (a, b) => b.playCount - a.playCount
        );


    mostPlayedGrid.innerHTML =
        sortedSongs.map((song, index) => {

            return `

                <button
                    class="most-played-card"
                    type="button"
                    data-song-id="${song.id}"
                >

                    <span
                        class="most-played-number"
                    >
                        ${index + 1}
                    </span>


                    <div
                        class="most-played-cover"
                    >

                        ${
                            song.cover
                            ?
                            `<img
                                src="${song.cover}"
                                alt="${song.title}"
                            >`
                            :
                            `<i
                                class="fa-solid fa-music"
                            ></i>`
                        }

                    </div>


                    <div
                        class="most-played-info"
                    >

                        <h3>
                            ${song.title}
                        </h3>

                        <span>
                            ${song.artist}
                        </span>

                    </div>


                    <span
                        class="most-played-count"
                    >
                        ${song.playCount} plays
                    </span>

                </button>

            `;

        }).join("");

}


/* ---------------------------------------------------------
   VIEW ALL MOST PLAYED
--------------------------------------------------------- */

if (viewAllMostPlayed) {

    viewAllMostPlayed.addEventListener(
        "click",
        function () {

            const isExpanded =
                mostPlayedGrid.classList.toggle(
                    "show-all"
                );


            if (isExpanded) {

                this.innerHTML = `
                    Show Less
                    <i class="fa-solid fa-arrow-up"></i>
                `;

                console.log(
                    "All most played songs displayed"
                );

            } else {

                this.innerHTML = `
                    View All
                    <i class="fa-solid fa-arrow-right"></i>
                `;

                console.log(
                    "Most played collapsed"
                );

            }

        }
    );

}


/* =========================================================
   21. RECENTLY PLAYED NAVIGATION
========================================================= */

const recentlyPlayedSection =
    document.querySelector(".recent-section");


const recentlyPlayedButton =
    [...allSidebarButtons].find(button =>
        button.querySelector("span")
        ?.textContent.trim() === "Recently Played"
    );


if (
    recentlyPlayedButton &&
    recentlyPlayedSection
) {

    recentlyPlayedButton.addEventListener(
        "click",
        function () {

            recentlyPlayedSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });


            console.log(
                "Recently Played section opened"
            );

        }
    );

}


/* =========================================================
   22. MOST PLAYED SIDEBAR NAVIGATION
========================================================= */

const mostPlayedButton =
    [...allSidebarButtons].find(button =>
        button.querySelector("span")
        ?.textContent.trim() === "Most Played"
    );


const mostPlayedSection =
    document.getElementById(
        "mostPlayedSection"
    );


if (
    mostPlayedButton &&
    mostPlayedSection
) {

    mostPlayedButton.addEventListener(
        "click",
        function () {

            mostPlayedSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });


            console.log(
                "Most Played section opened"
            );

        }
    );

}


/* =========================================================
   23. INITIALIZE MOST PLAYED
========================================================= */

renderMostPlayed();
/* =========================================================
   24. QUEUE SYSTEM
========================================================= */

const queuePanel =
    document.getElementById("queuePanel");

const queueBtn =
    document.getElementById("queueBtn");

const bottomQueue =
    document.getElementById("bottomQueue");

const queueCloseBtn =
    document.getElementById("queueCloseBtn");

const clearQueueBtn =
    document.getElementById("clearQueueBtn");

const queueList =
    document.getElementById("queueList");

const queueEmpty =
    document.getElementById("queueEmpty");

const queueCount =
    document.getElementById("queueCount");


/* ---------------------------------------------------------
   QUEUE DATA
--------------------------------------------------------- */

let musicQueue = [];


/* ---------------------------------------------------------
   ADD SONG TO QUEUE
--------------------------------------------------------- */

function addSongToQueue(song) {

    if (!song) {

        console.log(
            "No song selected for Queue."
        );

        return;

    }


    /* Prevent duplicate song */

    const alreadyInQueue =
        musicQueue.some(
            item => item.id === song.id
        );


    if (alreadyInQueue) {

        console.log(
            `"${song.title}" is already in Queue.`
        );

        return;

    }


    /* Add song */

    musicQueue.push(song);


    /* Update Queue */

    renderQueue();


    console.log(
        `"${song.title}" added to Queue.`
    );

}


/* ---------------------------------------------------------
   ADD CURRENT SONG TO QUEUE
--------------------------------------------------------- */

function addCurrentSongToQueue() {

    if (!currentSong) {

        console.log(
            "No current song to add to Queue."
        );

        return;

    }


    addSongToQueue(currentSong);

}


/* ---------------------------------------------------------
   OPEN QUEUE
--------------------------------------------------------- */

function openQueue() {

    if (!queuePanel) return;


    queuePanel.classList.add("active");


    queuePanel.setAttribute(
        "aria-hidden",
        "false"
    );


    renderQueue();


    console.log(
        "Queue opened"
    );

}


/* ---------------------------------------------------------
   CLOSE QUEUE
--------------------------------------------------------- */

function closeQueue() {

    if (!queuePanel) return;


    queuePanel.classList.remove(
        "active"
    );


    queuePanel.setAttribute(
        "aria-hidden",
        "true"
    );


    console.log(
        "Queue closed"
    );

}


/* ---------------------------------------------------------
   HERO QUEUE
--------------------------------------------------------- */

if (queueBtn) {

    queueBtn.addEventListener(
        "click",
        function () {

            /*
               Add currently playing song
               to Queue first.
            */

            addCurrentSongToQueue();


            /*
               Then open Queue panel.
            */

            openQueue();

        }
    );

}


/* ---------------------------------------------------------
   BOTTOM PLAYER QUEUE
--------------------------------------------------------- */

if (bottomQueue) {

    bottomQueue.addEventListener(
        "click",
        function () {

            /*
               Add currently playing song
               to Queue first.
            */

            addCurrentSongToQueue();


            /*
               Then open Queue panel.
            */

            openQueue();

        }
    );

}


/* ---------------------------------------------------------
   CLOSE
--------------------------------------------------------- */

if (queueCloseBtn) {

    queueCloseBtn.addEventListener(
        "click",
        closeQueue
    );

}


/* ---------------------------------------------------------
   ESC KEY
--------------------------------------------------------- */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            queuePanel?.classList.contains("active")
        ) {

            closeQueue();

        }

    }
);


/* ---------------------------------------------------------
   CLEAR QUEUE
--------------------------------------------------------- */

if (clearQueueBtn) {

    clearQueueBtn.addEventListener(
        "click",
        function () {

            musicQueue = [];


            renderQueue();


            console.log(
                "Queue cleared"
            );

        }
    );

}


/* ---------------------------------------------------------
   RENDER QUEUE
--------------------------------------------------------- */

function renderQueue() {

    if (
        !queueList ||
        !queueEmpty ||
        !queueCount
    ) {

        return;

    }


    /* Queue count */

    queueCount.textContent =
        `${musicQueue.length} ${
            musicQueue.length === 1
                ? "Song"
                : "Songs"
        }`;


    /* Empty state */

    if (musicQueue.length === 0) {

        queueList.innerHTML = "";


        queueEmpty.style.display =
            "flex";


        return;

    }


    /* Hide empty state */

    queueEmpty.style.display =
        "none";


    /* Create Queue items */

    queueList.innerHTML =
        musicQueue.map(song => `

            <div
                class="queue-item"
                data-song-id="${song.id}"
            >

                <div class="queue-item-cover">

                    ${
                        song.cover

                        ?

                        `<img
                            src="${song.cover}"
                            alt="${song.title}"
                        >`

                        :

                        `<i
                            class="fa-solid fa-music"
                        ></i>`
                    }

                </div>


                <div class="queue-item-info">

                    <h4>
                        ${song.title}
                    </h4>

                    <span>
                        ${song.artist}
                    </span>

                </div>


                <button
                    class="queue-remove-btn"
                    type="button"
                    data-remove-id="${song.id}"
                    aria-label="Remove song"
                >

                    <i class="fa-solid fa-xmark"></i>

                </button>

            </div>

        `).join("");


    /* -----------------------------------------------------
       REMOVE SONG
    ----------------------------------------------------- */

    document
        .querySelectorAll(
            ".queue-remove-btn"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();


                    const id =
                        Number(
                            this.dataset.removeId
                        );


                    musicQueue =
                        musicQueue.filter(
                            song =>
                                song.id !== id
                        );


                    renderQueue();


                    console.log(
                        "Song removed from queue"
                    );

                }
            );

        });


    /* -----------------------------------------------------
       QUEUE SONG CLICK
    ----------------------------------------------------- */

    document
        .querySelectorAll(
            ".queue-item"
        )
        .forEach(item => {

            item.addEventListener(
                "click",
                function (event) {

                    /*
                       Don't play when
                       remove button is clicked.
                    */

                    if (
                        event.target.closest(
                            ".queue-remove-btn"
                        )
                    ) {

                        return;

                    }


                    const songId =
                        Number(
                            this.dataset.songId
                        );


                    const songIndex =
                        melodySongs.findIndex(
                            song =>
                                song.id === songId
                        );


                    if (
                        songIndex !== -1 &&
                        typeof loadSong ===
                            "function"
                    ) {

                        loadSong(
                            songIndex,
                            true
                        );


                        console.log(
                            "Queue song selected:",
                            melodySongs[
                                songIndex
                            ].title
                        );

                    }

                }
            );

        });

}


/* ---------------------------------------------------------
   INITIAL RENDER
--------------------------------------------------------- */

renderQueue();
/* =========================================================
   25. NOW PLAYING — COMPLETE MUSIC PLAYER ENGINE
========================================================= */


/* ---------------------------------------------------------
   AUDIO ENGINE
--------------------------------------------------------- */

let melodyAudio = document.getElementById("melodyAudio");

if (!melodyAudio) {

    melodyAudio = document.createElement("audio");

    melodyAudio.id = "melodyAudio";

    melodyAudio.preload = "metadata";

    document.body.appendChild(melodyAudio);

}


/* ---------------------------------------------------------
   NOW PLAYING DOM ELEMENTS
--------------------------------------------------------- */

const nowPlayingCard =
    document.getElementById("nowPlayingCard");

const heroSongTitle =
    document.getElementById("heroSongTitle");

const heroArtist =
    document.getElementById("heroArtist");

const heroCategory =
    document.getElementById("heroCategory");

const heroDescription =
    document.getElementById("heroDescription");

const heroYear =
    document.getElementById("heroYear");

const heroPlayBtn =
    document.getElementById("heroPlayBtn");

const mainProgress =
    document.getElementById("mainProgress");

const currentTime =
    document.getElementById("currentTime");

const totalTime =
    document.getElementById("totalTime");


/* ---------------------------------------------------------
   HERO COVER
--------------------------------------------------------- */

const heroCover =
    document.getElementById("heroCover");


/* ---------------------------------------------------------
   MINI PLAYER
--------------------------------------------------------- */

const miniPlayerCover =
    document.getElementById("miniPlayerCover");

const miniPlayerTitle =
    document.getElementById("miniPlayerTitle");

const miniPlayerArtist =
    document.getElementById("miniPlayerArtist");

const miniPlayBtn =
    document.getElementById("miniPlay");

const miniPreviousBtn =
    document.getElementById("miniPrevious");

const miniNextBtn =
    document.getElementById("miniNext");

/* ---------------------------------------------------------
   BOTTOM PLAYER
--------------------------------------------------------- */

const bottomPlayer =
    document.getElementById("bottomPlayer");

const bottomPlayerCover =
    document.getElementById("bottomPlayerCover");

const bottomPlayerTitle =
    document.getElementById("bottomPlayerTitle");

const bottomPlayerArtist =
    document.getElementById("bottomPlayerArtist");

const bottomPlay =
    document.getElementById("bottomPlay");

const bottomPrevious =
    document.getElementById("bottomPrevious");

const bottomNext =
    document.getElementById("bottomNext");

const bottomProgress =
    document.getElementById("bottomProgress");

const bottomCurrentTime =
    document.getElementById("bottomCurrentTime");

const bottomDuration =
    document.getElementById("bottomDuration");


/* ---------------------------------------------------------
   EXTRA PLAYER CONTROLS
--------------------------------------------------------- */

const bottomShuffle =
    document.getElementById("bottomShuffle");

const bottomRepeat =
    document.getElementById("bottomRepeat");

const volumeButton =
    document.getElementById("volumeButton");

const volumeSlider =
    document.getElementById("volumeSlider");

const fullscreenButton =
    document.getElementById("fullscreenButton");

const favoriteBtn =
    document.getElementById("favoriteBtn");

const bottomFavorite =
    document.getElementById("bottomFavorite");


/* ---------------------------------------------------------
   PLAYER STATE
--------------------------------------------------------- */

let currentSongIndex = -1;

let isShuffleOn = false;

let repeatMode = "off";

let previousVolume = 0.8;


/* ---------------------------------------------------------
   SONG DATA
   Real songs will be added later.
--------------------------------------------------------- */
let melodySongs = [

    {
        id: 1,
        title: "Me In My Own Skin",
        artist: "Soundlings",
        category: "Pop",
        audio: "songs/me-in-my-own-skin.mp3",
        cover: "image/me-in-my-own-skin.jpg",
        year: "2026",
        description: "A modern pop track from Soundlings.",
        favorite: false,
        playCount: 0
    },

    {
        id: 2,
        title: "Be The One",
        artist: "Lore Vain",
        category: "Pop",
        audio: "songs/be-the-one.mp3",
        cover: "image/be-the-one.jpg",
        year: "2026",
        description: "A smooth and melodic pop song.",
        favorite: false,
        playCount: 0
    },

    {
        id: 3,
        title: "Two Things",
        artist: "Anno Domini Beats",
        category: "Pop",
        audio: "songs/two-things.mp3",
        cover: "image/two-things.jpg",
        year: "2026",
        description: "A catchy modern track.",
        favorite: false,
        playCount: 0
    },

    {
        id: 4,
        title: "Overrated",
        artist: "The Soundlings feat. Ruby Jay",
        category: "Pop",
        audio: "songs/overrated.mp3",
        cover: "image/overrated.jpg",
        year: "2026",
        description: "An energetic pop track.",
        favorite: false,
        playCount: 0
    },

    {
        id: 5,
        title: "Gravel Town Shake",
        artist: "Patrick Jordan Patrikios",
        category: "Hip Hop",
        audio: "songs/gravel-town-shake.mp3",
        cover: "image/gravel-town-shake.jpg",
        year: "2026",
        description: "A rhythmic hip hop track.",
        favorite: false,
        playCount: 0
    },

    {
        id: 6,
        title: "Sky Is The Limit",
        artist: "Anno Domini Beats",
        category: "Hip Hop",
        audio: "songs/sky-is-the-limit.mp3",
        cover: "image/sky-is-the-limit.jpg",
        year: "2026",
        description: "An uplifting hip hop track.",
        favorite: false,
        playCount: 0
    },

    {
        id: 7,
        title: "Party Coded",
        artist: "Rod Kim feat. Mostly Moss",
        category: "Hip Hop",
        audio: "songs/party-coded.mp3",
        cover: "image/party-coded.jpg",
        year: "2026",
        description: "A lively urban track.",
        favorite: false,
        playCount: 0
    },

    {
        id: 8,
        title: "Locked In",
        artist: "Anno Domini Beats",
        category: "Hip Hop",
        audio: "songs/locked-in.mp3",
        cover: "image/locked-in.jpg",
        year: "2026",
        description: "A powerful hip hop track.",
        favorite: false,
        playCount: 0
    },

    {
        id: 9,
        title: "Tiny Shell",
        artist: "Blue Deer & Nyles Lannon",
        category: "Chill",
        audio: "songs/tiny-shell.mp3",
        cover: "image/tiny-shell.jpg",
        year: "2026",
        description: "A calm and relaxing track.",
        favorite: false,
        playCount: 0
    },

    {
        id: 10,
        title: "Paradise",
        artist: "Anno Domini Beats",
        category: "Chill",
        audio: "songs/paradise.mp3",
        cover: "image/paradise.jpg",
        year: "2026",
        description: "A smooth chill track.",
        favorite: false,
        playCount: 0
    },

    {
        id: 11,
        title: "Never Change",
        artist: "The Parrisian feat. Parris Fleming",
        category: "Chill",
        audio: "songs/never-change.mp3",
        cover: "image/never-change.jpg",
        year: "2026",
        description: "A relaxed melodic song.",
        favorite: false,
        playCount: 0
    },

    {
        id: 12,
        title: "Yesterdays",
        artist: "Blue Deer",
        category: "Sad",
        audio: "songs/yesterdays.mp3",
        cover: "image/yesterdays.jpg",
        year: "2026",
        description: "An emotional reflective song.",
        favorite: false,
        playCount: 0
    },

    {
        id: 13,
        title: "House Of Cards",
        artist: "Blue Deer",
        category: "Sad",
        audio: "songs/house-of-cards.mp3",
        cover: "image/house-of-cards.jpg",
        year: "2026",
        description: "A deep emotional track.",
        favorite: false,
        playCount: 0
    },

    {
        id: 14,
        title: "Gone Away",
        artist: "Blue Beat Review",
        category: "Sad",
        audio: "songs/gone-away.mp3",
        cover: "image/gone-away.jpg",
        year: "2026",
        description: "A melancholic song.",
        favorite: false,
        playCount: 0
    },

    {
        id: 15,
        title: "Burned Out",
        artist: "Patrick Jordan Patrikios",
        category: "Sad",
        audio: "songs/burned-out.mp3",
        cover: "image/burned-out.jpg",
        year: "2026",
        description: "An emotional and atmospheric track.",
        favorite: false,
        playCount: 0
    },

    {
        id: 16,
        title: "The Bombs",
        artist: "The Soundlings",
        category: "Rock",
        audio: "songs/the-bombs.mp3",
        cover: "image/the-bombs.jpg",
        year: "2026",
        description: "An energetic rock-inspired track.",
        favorite: false,
        playCount: 0
    },

    {
        id: 17,
        title: "I Hate Your Face",
        artist: "The Soundlings",
        category: "Rock",
        audio: "songs/i-hate-your-face.mp3",
        cover: "image/i-hate-your-face.jpg",
        year: "2026",
        description: "A bold rock track.",
        favorite: false,
        playCount: 0
    },

    {
        id: 18,
        title: "Back To The Start",
        artist: "Patrick Jordan Patrikios",
        category: "Rock",
        audio: "songs/back-to-the-start.mp3",
        cover: "image/back-to-the-start.jpg",
        year: "2026",
        description: "A powerful alternative track.",
        favorite: false,
        playCount: 0
    },

    {
        id: 19,
        title: "Fearless",
        artist: "The Soundlings feat. Ruby Jay",
        category: "Rock",
        audio: "songs/fearless.mp3",
        cover: "image/fearless.jpg",
        year: "2026",
        description: "An energetic fearless anthem.",
        favorite: false,
        playCount: 0
    },

    {
        id: 20,
        title: "Visions",
        artist: "Patrick Jordan Patrikios",
        category: "Classical",
        audio: "songs/visions.mp3",
        cover: "image/visions.jpg",
        year: "2026",
        description: "A cinematic and atmospheric composition.",
        favorite: false,
        playCount: 0
    },

    {
        id: 21,
        title: "Singularity",
        artist: "The Grey Room / Density & Time",
        category: "Classical",
        audio: "songs/singularity.mp3",
        cover: "image/singularity.jpg",
        year: "2026",
        description: "A rich atmospheric composition.",
        favorite: false,
        playCount: 0
    },

    {
        id: 22,
        title: "To The End Of The World",
        artist: "National Sweetheart",
        category: "Classical",
        audio: "songs/to-the-end-of-the-world.mp3",
        cover: "image/to-the-end-of-the-world.jpg",
        year: "2026",
        description: "A cinematic musical experience.",
        favorite: false,
        playCount: 0
    },

    {
        id: 23,
        title: "Town This Small",
        artist: "Anno Domini Beats",
        category: "Classical",
        audio: "songs/town-this-small.mp3",
        cover: "image/town-this-small.jpg",
        year: "2026",
        description: "A smooth atmospheric composition.",
        favorite: false,
        playCount: 0
    },

    {
        id: 24,
        title: "Find My Way",
        artist: "Blue Deer feat. Luqman Frank",
        category: "Jazz",
        audio: "songs/find-my-way.mp3",
        cover: "image/find-my-way.jpg",
        year: "2026",
        description: "A smooth jazzy track.",
        favorite: false,
        playCount: 0
    },

    {
        id: 25,
        title: "Silk Sleeve",
        artist: "Jordan King & Cory Barker",
        category: "Jazz",
        audio: "songs/silk-sleeve.mp3",
        cover: "image/silk-sleeve.jpg",
        year: "2026",
        description: "A smooth contemporary jazz track.",
        favorite: false,
        playCount: 0
    },

    {
        id: 26,
        title: "Talk To Me",
        artist: "Blue Deer feat. Devyn Rush",
        category: "Jazz",
        audio: "songs/talk-to-me.mp3",
        cover: "image/talk-to-me.jpg",
        year: "2026",
        description: "A mellow vocal track.",
        favorite: false,
        playCount: 0
    },

    {
        id: 27,
        title: "Everything",
        artist: "Rodina feat. Alfie Tito",
        category: "Jazz",
        audio: "songs/everything.mp3",
        cover: "image/everything.jpg",
        year: "2026",
        description: "A smooth melodic track.",
        favorite: false,
        playCount: 0
    },

    {
        id: 28,
        title: "Tonight Again",
        artist: "Rod Kim feat. Mostly Moss",
        category: "Romantic",
        audio: "songs/tonight-again.mp3",
        cover: "image/tonight-again.jpg",
        year: "2026",
        description: "A warm romantic track.",
        favorite: false,
        playCount: 0
    },

    {
        id: 29,
        title: "Easy With You",
        artist: "Leon Albertson feat. Adryon de León",
        category: "Romantic",
        audio: "songs/easy-with-you.mp3",
        cover: "image/easy-with-you.jpg",
        year: "2026",
        description: "A soft romantic song.",
        favorite: false,
        playCount: 0
    },

    {
        id: 30,
        title: "Hold Yourself Tight",
        artist: "Splitshine feat. Sybil Rose",
        category: "Romantic",
        audio: "songs/hold-yourself-tight.mp3",
        cover: "image/hold-yourself-tight.jpg",
        year: "2026",
        description: "A warm emotional romantic track.",
        favorite: false,
        playCount: 0
    },

    {
        id: 31,
        title: "Appearing Nowhere",
        artist: "Zenith Bikini feat. Rusty James Miller",
        category: "Romantic",
        audio: "songs/appearing-nowhere.mp3",
        cover: "image/appearing-nowhere.jpg",
        year: "2026",
        description: "A melodic atmospheric song.",
        favorite: false,
        playCount: 0
    }

];
/* =========================================================
   SEARCH SYSTEM
========================================================= */

const searchInput =
    document.getElementById("searchInput");


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const searchText =
                this.value.trim().toLowerCase();


            /* -------------------------------------------------
               EMPTY SEARCH — CLEAR RESULTS
            ------------------------------------------------- */

            if (searchText === "") {

                const searchResultsSection =
                    document.getElementById(
                        "searchResultsSection"
                    );


                if (searchResultsSection) {

                    searchResultsSection.innerHTML = "";

                    searchResultsSection.style.display =
                        "none";

                }


                console.log(
                    "Search cleared"
                );

                return;

            }


            /* -------------------------------------------------
               SEARCH SONGS
            ------------------------------------------------- */

            const searchResults =
                melodySongs.filter(song => {

                    const title =
                        String(song.title || "")
                            .toLowerCase();


                    const artist =
                        String(song.artist || "")
                            .toLowerCase();


                    const album =
                        String(song.album || "")
                            .toLowerCase();


                    const category =
                        String(song.category || "")
                            .toLowerCase();


                    return (
                        title.includes(searchText) ||
                        artist.includes(searchText) ||
                        album.includes(searchText) ||
                        category.includes(searchText)
                    );

                });


            console.log(
                "Search results:",
                searchResults
            );


            showSearchResults(
                searchResults
            );

        }

    );

}

/* =========================================================
   SEARCH RESULTS
========================================================= */

function showSearchResults(searchResults) {

    let searchResultsSection =
        document.getElementById("searchResultsSection");


    /* Create section if it does not exist */

    if (!searchResultsSection) {

        searchResultsSection =
            document.createElement("section");

        searchResultsSection.id =
            "searchResultsSection";

        searchResultsSection.className =
            "search-results-section";


        const searchBox =
            document.querySelector(".search-box");


        if (searchBox) {

            searchBox.parentElement.after(
                searchResultsSection
            );

        } else {

            document.body.prepend(
                searchResultsSection
            );

        }

    }


    /* No results */

    if (searchResults.length === 0) {

        searchResultsSection.innerHTML = `

            <div class="search-no-results">

                <i class="fa-solid fa-magnifying-glass"></i>

                <h3>No songs found</h3>

                <p>
                    Try another song, artist or album.
                </p>

            </div>

        `;

        searchResultsSection.style.display =
            "block";

        return;

    }


    /* Results */

    searchResultsSection.innerHTML = `

        <div class="search-results-header">

            <div>

                <span class="section-eyebrow">
                    SEARCH RESULTS
                </span>

                <h2>
                    ${searchResults.length} Songs Found
                </h2>

            </div>

        </div>


        <div class="search-results-list">

            ${searchResults.map(song => `

                <article
                    class="search-result-item"
                    data-song-id="${song.id}"
                >

                    <div class="search-result-cover">

                        <img
                            src="${song.cover}"
                            alt="${song.title}"
                        >

                    </div>


                    <div class="search-result-info">

                        <h3>
                            ${song.title}
                        </h3>

                        <p>
                            ${song.artist}
                        </p>

                        <span>
                            ${song.category}
                        </span>

                    </div>


                    <button
                        type="button"
                        class="search-result-play"
                        data-song-id="${song.id}"
                        aria-label="Play ${song.title}"
                    >

                        <i class="fa-solid fa-play"></i>

                    </button>

                </article>

            `).join("")}

        </div>

    `;


    searchResultsSection.style.display =
        "block";


    /* -----------------------------------------------------
       RESULT CLICK
    ----------------------------------------------------- */

    searchResultsSection
        .querySelectorAll(".search-result-item")
        .forEach(item => {

            item.addEventListener(
                "click",
                function(event) {

                    if (
                        event.target.closest(
                            ".search-result-play"
                        )
                    ) {

                        return;

                    }


                    const songId =
                        Number(
                            this.dataset.songId
                        );


                    const songIndex =
                        melodySongs.findIndex(
                            song =>
                                song.id === songId
                        );


                    if (
                        songIndex !== -1 &&
                        typeof loadSong ===
                            "function"
                    ) {

                        loadSong(
                            songIndex,
                            false
                        );

                    }

                }
            );

        });


    /* -----------------------------------------------------
       PLAY BUTTON
    ----------------------------------------------------- */

    searchResultsSection
        .querySelectorAll(".search-result-play")
        .forEach(button => {

            button.addEventListener(
                "click",
                function(event) {

                    event.stopPropagation();


                    const songId =
                        Number(
                            this.dataset.songId
                        );


                    const songIndex =
                        melodySongs.findIndex(
                            song =>
                                song.id === songId
                        );


                    if (
                        songIndex !== -1 &&
                        typeof loadSong ===
                            "function"
                    ) {

                        loadSong(
                            songIndex,
                            true
                        );

                    }

                }
            );

        });

}
    


/* ---------------------------------------------------------
   CURRENT SONG
--------------------------------------------------------- */

let currentSong = null;


/* =========================================================
   FORMAT TIME
========================================================= */

function formatPlayerTime(seconds) {

    if (
        !Number.isFinite(seconds) ||
        seconds < 0
    ) {
        return "0:00";
    }


    const minutes =
        Math.floor(seconds / 60);

    const remainingSeconds =
        Math.floor(seconds % 60);


    return `${minutes}:${String(
        remainingSeconds
    ).padStart(2, "0")}`;

}


/* =========================================================
   UPDATE PLAY ICONS
========================================================= */

function updatePlayerIcons() {

    const isPlaying =
        !melodyAudio.paused &&
        !melodyAudio.ended;


    /* Hero */

    if (heroPlayBtn) {

        const icon =
            heroPlayBtn.querySelector("i");

        const text =
            heroPlayBtn.querySelector("span");


        if (icon) {

            icon.classList.toggle(
                "fa-play",
                !isPlaying
            );

            icon.classList.toggle(
                "fa-pause",
                isPlaying
            );

        }


        if (text) {

            text.textContent =
                isPlaying
                ? "Pause"
                : "Play";

        }

    }


    /* Mini */

    if (miniPlayBtn) {

        const icon =
            miniPlayBtn.querySelector("i");

        if (icon) {

            icon.classList.toggle(
                "fa-play",
                !isPlaying
            );

            icon.classList.toggle(
                "fa-pause",
                isPlaying
            );

        }

    }


    /* Bottom */

    if (bottomPlay) {

        const icon =
            bottomPlay.querySelector("i");

        if (icon) {

            icon.classList.toggle(
                "fa-play",
                !isPlaying
            );

            icon.classList.toggle(
                "fa-pause",
                isPlaying
            );

        }

    }


    /* Body state */

    document.body.classList.toggle(
        "is-playing",
        isPlaying
    );

}


/* =========================================================
   UPDATE FAVORITE ICON
========================================================= */

function updateFavoriteButtons() {

    if (!currentSong) {
        return;
    }


    const isFavorite =
        currentSong.favorite === true;


    if (favoriteBtn) {

        const icon =
            favoriteBtn.querySelector("i");

        if (icon) {

            icon.classList.toggle(
                "fa-regular",
                !isFavorite
            );

            icon.classList.toggle(
                "fa-solid",
                isFavorite
            );

        }

    }


    if (bottomFavorite) {

        const icon =
            bottomFavorite.querySelector("i");

        if (icon) {

            icon.classList.toggle(
                "fa-regular",
                !isFavorite
            );

            icon.classList.toggle(
                "fa-solid",
                isFavorite
            );

        }

    }

}


/* =========================================================
   UPDATE CURRENT SONG UI
========================================================= */

function updateCurrentSongUI() {

    if (!currentSong) {
        return;
    }


    /* Title */

    if (heroSongTitle) {

        heroSongTitle.textContent =
            currentSong.title || "Unknown Song";

    }


    if (miniPlayerTitle) {

        miniPlayerTitle.textContent =
            currentSong.title || "Unknown Song";

    }


    if (bottomPlayerTitle) {

        bottomPlayerTitle.textContent =
            currentSong.title || "Unknown Song";

    }


    /* Artist */

    if (heroArtist) {

        heroArtist.textContent =
            currentSong.artist || "Unknown Artist";

    }


    if (miniPlayerArtist) {

        miniPlayerArtist.textContent =
            currentSong.artist || "Unknown Artist";

    }


    if (bottomPlayerArtist) {

        bottomPlayerArtist.textContent =
            currentSong.artist || "Unknown Artist";

    }


    /* Category */

    if (heroCategory) {

        heroCategory.textContent =
            currentSong.category || "Music";

    }


    /* Description */

    if (heroDescription) {

        heroDescription.textContent =
            currentSong.description ||
            "Enjoy your music with Melody.";

    }


    /* Year */

    if (heroYear) {

        heroYear.textContent =
            currentSong.year || "2026";

    }


    /* Cover */

    if (currentSong.cover) {

        if (heroCover) {

            heroCover.src =
                currentSong.cover;

        }


        if (miniPlayerCover) {

            miniPlayerCover.src =
                currentSong.cover;

        }


        if (bottomPlayerCover) {

            bottomPlayerCover.src =
                currentSong.cover;

        }

    }


    updateFavoriteButtons();

console.log("MINI COVER:", miniPlayerCover);
console.log("MINI TITLE:", miniPlayerTitle);
console.log("MINI ARTIST:", miniPlayerArtist);
}
/* =========================================================
   UPDATE NOW PLAYING UI
========================================================= */

function updateCurrentSongUI() {

    if (!currentSong) {
        return;
    }


    /* -----------------------------------------------------
       SONG TITLE
    ----------------------------------------------------- */

    if (heroSongTitle) {

        heroSongTitle.textContent =
            currentSong.title || "Unknown Song";

    }


    /* -----------------------------------------------------
       ARTIST
    ----------------------------------------------------- */

    if (heroArtist) {

        heroArtist.textContent =
            currentSong.artist || "Unknown Artist";

    }


    /* -----------------------------------------------------
       CATEGORY
    ----------------------------------------------------- */

    if (heroCategory) {

        heroCategory.textContent =
            currentSong.category || "Music";

    }


    if (heroGenre) {

        heroGenre.textContent =
            currentSong.category || "Music";

    }


    /* -----------------------------------------------------
       DESCRIPTION
    ----------------------------------------------------- */

    if (heroDescription) {

        heroDescription.textContent =
            currentSong.description ||
            "Enjoy your music.";

    }


    /* -----------------------------------------------------
       YEAR
    ----------------------------------------------------- */

    if (heroYear) {

        heroYear.textContent =
            currentSong.year || "2026";

    }


    /* -----------------------------------------------------
       ALBUM COVER
    ----------------------------------------------------- */

    if (heroAlbumCover) {

        if (currentSong.cover) {

            heroAlbumCover.src =
                currentSong.cover;

            heroAlbumCover.alt =
                currentSong.title ||
                "Album Cover";

        } else {

            heroAlbumCover.removeAttribute(
                "src"
            );

        }

    }


    /* -----------------------------------------------------
       FAVORITE BUTTON
    ----------------------------------------------------- */

    updateFavoriteButtons();


    /* -----------------------------------------------------
       PLAYER BUTTON ICONS
    ----------------------------------------------------- */

    updatePlayerIcons();

}

/* =========================================================
   LOAD SONG
========================================================= */

function loadSong(index, autoPlay = false) {

    if (
        !Array.isArray(melodySongs) ||
        melodySongs.length === 0
    ) {

        console.log(
            "No songs available yet. Add songs to melodySongs."
        );

        return;

    }


    if (
        index < 0 ||
        index >= melodySongs.length
    ) {

        return;

    }


    currentSongIndex = index;

    currentSong =
        melodySongs[currentSongIndex];
/* =========================================================
   ADD TO RECENTLY PLAYED
========================================================= */

recentlyPlayed =
    recentlyPlayed.filter(
        song => song.id !== currentSong.id
    );


recentlyPlayed.unshift(
    currentSong
);


recentlyPlayed =
    recentlyPlayed.slice(0, 8);


renderRecentlyPlayed();


      


    /* Reset audio */

    melodyAudio.pause();

    melodyAudio.currentTime = 0;


    /* Set source */

    melodyAudio.src =
        currentSong.audio;


    melodyAudio.load();


    /* Update UI */

    updateCurrentSongUI();


    /* Reset timeline */

    if (mainProgress) {

        mainProgress.value = 0;

    }


    if (bottomProgress) {

        bottomProgress.value = 0;

    }


    if (currentTime) {

        currentTime.textContent =
            "0:00";

    }


    if (bottomCurrentTime) {

        bottomCurrentTime.textContent =
            "0:00";

    }


    if (totalTime) {

        totalTime.textContent =
            "0:00";

    }


    if (bottomDuration) {

        bottomDuration.textContent =
            "0:00";

    }


    /* Auto play */

    if (autoPlay) {

        playCurrentSong();

    }


    console.log(
        "Loaded song:",
        currentSong.title
    );

}


/* =========================================================
   PLAY
========================================================= */

function playCurrentSong() {

    if (!currentSong) {

        if (melodySongs.length > 0) {

            loadSong(0, false);

        } else {

            console.log(
                "No song selected yet."
            );

            return;

        }

    }


    const playPromise =
        melodyAudio.play();


    if (
        playPromise &&
        typeof playPromise.catch === "function"
    ) {

        playPromise.catch(error => {

            console.log(
                "Playback waiting for a valid audio file:",
                error.message
            );

        });

    }

}


/* =========================================================
   PAUSE
========================================================= */

function pauseCurrentSong() {

    melodyAudio.pause();

}


/* =========================================================
   TOGGLE PLAY / PAUSE
========================================================= */

function togglePlayPause() {

    if (!currentSong) {

        if (melodySongs.length > 0) {

            loadSong(0, true);

        } else {

            console.log(
                "Add songs first to start playback."
            );

        }

        return;

    }


    if (melodyAudio.paused) {

        playCurrentSong();

    } else {

        pauseCurrentSong();

    }

}


/* =========================================================
   NEXT SONG
========================================================= */

function playNextSong() {

    if (melodySongs.length === 0) {

        console.log(
            "No songs available for Next."
        );

        return;

    }


    let nextIndex;


    if (isShuffleOn) {

        if (melodySongs.length === 1) {

            nextIndex = 0;

        } else {

            do {

                nextIndex =
                    Math.floor(
                        Math.random() *
                        melodySongs.length
                    );

            } while (
                nextIndex ===
                currentSongIndex
            );

        }

    } else {

        nextIndex =
            currentSongIndex + 1;

        if (
            nextIndex >=
            melodySongs.length
        ) {

            nextIndex = 0;

        }

    }


    loadSong(
        nextIndex,
        true
    );

}


/* =========================================================
   PREVIOUS SONG
========================================================= */

function playPreviousSong() {

    if (melodySongs.length === 0) {

        console.log(
            "No songs available for Previous."
        );

        return;

    }


    /*
       If song has already played more than
       3 seconds, Previous starts the same song
       from the beginning.
    */

    if (
        melodyAudio.currentTime > 3
    ) {

        melodyAudio.currentTime = 0;

        return;

    }


    let previousIndex =
        currentSongIndex - 1;


    if (previousIndex < 0) {

        previousIndex =
            melodySongs.length - 1;

    }


    loadSong(
        previousIndex,
        true
    );

}


/* =========================================================
   HERO PLAY
========================================================= */

if (heroPlayBtn) {

    heroPlayBtn.addEventListener(
        "click",
        togglePlayPause
    );

}


/* =========================================================
   MINI PLAY
========================================================= */

if (miniPlayBtn) {

    miniPlayBtn.addEventListener(
        "click",
        togglePlayPause
    );

}


/* =========================================================
   BOTTOM PLAY
========================================================= */

if (bottomPlay) {

    bottomPlay.addEventListener(
        "click",
        togglePlayPause
    );

}


/* =========================================================
   NEXT BUTTONS
========================================================= */

if (nextBtn) {

    nextBtn.addEventListener(
        "click",
        playNextSong
    );

}


if (bottomNext) {

    bottomNext.addEventListener(
        "click",
        playNextSong
    );

}


/* =========================================================
   PREVIOUS BUTTONS
========================================================= */

/* MINI PLAY */

if (miniPlayBtn) {
    miniPlayBtn.addEventListener(
        "click",
        togglePlayPause
    );
}


/* MINI PREVIOUS / NEXT */

if (miniPreviousBtn) {
    miniPreviousBtn.addEventListener(
        "click",
        playPreviousSong
    );
}

if (miniNextBtn) {
    miniNextBtn.addEventListener(
        "click",
        playNextSong
    );
}


/* =========================================================
   AUDIO LOADED METADATA
========================================================= */

melodyAudio.addEventListener(
    "loadedmetadata",
    function () {

        const duration =
            melodyAudio.duration;


        const formatted =
            formatPlayerTime(duration);


        if (totalTime) {

            totalTime.textContent =
                formatted;

        }


        if (bottomDuration) {

            bottomDuration.textContent =
                formatted;

        }


        if (mainProgress) {

            mainProgress.max =
                duration || 100;

        }


        if (bottomProgress) {

            bottomProgress.max =
                duration || 100;

        }

    }
);


/* =========================================================
   AUDIO TIME UPDATE
========================================================= */

melodyAudio.addEventListener(
    "timeupdate",
    function () {

        const current =
            melodyAudio.currentTime;

        const duration =
            melodyAudio.duration;


        if (currentTime) {

            currentTime.textContent =
                formatPlayerTime(current);

        }


        if (bottomCurrentTime) {

            bottomCurrentTime.textContent =
                formatPlayerTime(current);

        }


        if (
            mainProgress &&
            Number.isFinite(duration)
        ) {

            mainProgress.value =
                current;

        }


        if (
            bottomProgress &&
            Number.isFinite(duration)
        ) {

            bottomProgress.value =
                current;

        }

    }
);


/* =========================================================
   MAIN TIMELINE
========================================================= */

if (mainProgress) {

    mainProgress.addEventListener(
        "input",
        function () {

            if (
                Number.isFinite(
                    melodyAudio.duration
                )
            ) {

                melodyAudio.currentTime =
                    Number(this.value);

            }

        }
    );

}


/* =========================================================
   BOTTOM TIMELINE
========================================================= */

if (bottomProgress) {

    bottomProgress.addEventListener(
        "input",
        function () {

            if (
                Number.isFinite(
                    melodyAudio.duration
                )
            ) {

                melodyAudio.currentTime =
                    Number(this.value);

            }

        }
    );

}


/* =========================================================
   AUDIO PLAY EVENT
========================================================= */

melodyAudio.addEventListener(
    "play",
    function () {

        updatePlayerIcons();

    }
);


/* =========================================================
   AUDIO PAUSE EVENT
========================================================= */

melodyAudio.addEventListener(
    "pause",
    function () {

        updatePlayerIcons();

    }
);


/* =========================================================
   AUDIO ENDED
========================================================= */

melodyAudio.addEventListener(
    "ended",
    function () {

        updatePlayerIcons();


        /* Repeat One */

        if (
            repeatMode === "one"
        ) {

            melodyAudio.currentTime = 0;

            playCurrentSong();

            return;

        }


        /* Normal / Repeat All */

        if (
            currentSongIndex <
            melodySongs.length - 1
        ) {

            playNextSong();

        } else if (
            repeatMode === "all"
        ) {

            loadSong(0, true);

        } else {

            updatePlayerIcons();

        }

    }
);


/* =========================================================
   SHUFFLE — ALL PLAYER BUTTONS
========================================================= */

function toggleShuffle() {

    isShuffleOn = !isShuffleOn;


    /* Bottom player shuffle */

    if (bottomShuffle) {

        bottomShuffle.classList.toggle(
            "active",
            isShuffleOn
        );

        bottomShuffle.setAttribute(
            "aria-pressed",
            String(isShuffleOn)
        );

    }


    /* Now Playing / Hero shuffle */

    if (shuffleBtn) {

        shuffleBtn.classList.toggle(
            "active",
            isShuffleOn
        );

        shuffleBtn.setAttribute(
            "aria-pressed",
            String(isShuffleOn)
        );

    }


    console.log(
        "Shuffle:",
        isShuffleOn
            ? "ON"
            : "OFF"
    );

}


/* Bottom Shuffle */

if (bottomShuffle) {

    bottomShuffle.addEventListener(
        "click",
        toggleShuffle
    );

}


/* Now Playing Shuffle */

if (shuffleBtn) {

    shuffleBtn.addEventListener(
        "click",
        toggleShuffle
    );

}
/* =========================================================
   REPEAT — ALL PLAYER BUTTONS
========================================================= */

function toggleRepeat() {

    if (repeatMode === "off") {

        repeatMode = "all";

    } else if (repeatMode === "all") {

        repeatMode = "one";

    } else {

        repeatMode = "off";

    }


    /* Bottom Repeat */

    if (bottomRepeat) {

        bottomRepeat.classList.toggle(
            "active",
            repeatMode !== "off"
        );

        bottomRepeat.dataset.repeatMode =
            repeatMode;

    }


    /* Now Playing Repeat */

    if (repeatBtn) {

        repeatBtn.classList.toggle(
            "active",
            repeatMode !== "off"
        );

        repeatBtn.dataset.repeatMode =
            repeatMode;

    }


    console.log(
        "Repeat:",
        repeatMode
    );

}


/* Bottom Repeat */

if (bottomRepeat) {

    bottomRepeat.addEventListener(
        "click",
        toggleRepeat
    );

}


/* Now Playing Repeat */

if (repeatBtn) {

    repeatBtn.addEventListener(
        "click",
        toggleRepeat
    );

}



/* =========================================================
   VOLUME
========================================================= */

if (volumeSlider) {

    const initialVolume =
        Number(volumeSlider.value) / 100;


    melodyAudio.volume =
        Number.isFinite(initialVolume)
        ? initialVolume
        : 0.8;


    previousVolume =
        melodyAudio.volume;


    volumeSlider.addEventListener(
        "input",
        function () {

            const volume =
                Number(this.value) / 100;


            melodyAudio.volume =
                Math.max(
                    0,
                    Math.min(1, volume)
                );


            if (
                melodyAudio.volume > 0
            ) {

                previousVolume =
                    melodyAudio.volume;

            }


            updateVolumeIcon();

        }
    );

}


/* =========================================================
   VOLUME ICON
========================================================= */

function updateVolumeIcon() {

    if (!volumeButton) {
        return;
    }


    const icon =
        volumeButton.querySelector("i");


    if (!icon) {
        return;
    }


    icon.classList.remove(
        "fa-volume-high",
        "fa-volume-low",
        "fa-volume-xmark"
    );


    if (
        melodyAudio.volume === 0
    ) {

        icon.classList.add(
            "fa-volume-xmark"
        );

    } else if (
        melodyAudio.volume < 0.5
    ) {

        icon.classList.add(
            "fa-volume-low"
        );

    } else {

        icon.classList.add(
            "fa-volume-high"
        );

    }

}


/* =========================================================
   MUTE / UNMUTE
========================================================= */

if (volumeButton) {

    volumeButton.addEventListener(
        "click",
        function () {

            if (
                melodyAudio.volume > 0
            ) {

                previousVolume =
                    melodyAudio.volume;

                melodyAudio.volume = 0;

                if (volumeSlider) {

                    volumeSlider.value = 0;

                }

            } else {

                melodyAudio.volume =
                    previousVolume || 0.8;

                if (volumeSlider) {

                    volumeSlider.value =
                        melodyAudio.volume * 100;

                }

            }


            updateVolumeIcon();

        }
    );

}
/* =========================================================
   RENDER FAVORITES
========================================================= */

function renderFavorites() {

    if (!favoritesGrid || !favoritesEmpty) {
        return;
    }


    /* Get favorite songs */

    const favoriteSongs =
        melodySongs.filter(song => song.favorite === true);


    /* Empty state */

    if (favoriteSongs.length === 0) {

        favoritesGrid.innerHTML = "";

        favoritesEmpty.style.display = "flex";

        return;

    }


    /* Hide empty state */

    favoritesEmpty.style.display = "none";


    /* Create favorite cards */

    favoritesGrid.innerHTML =
        favoriteSongs.map(song => {

            return `
                <article
                    class="favorite-song-card"
                    data-song-id="${song.id}"
                >

                    <div class="favorite-song-cover">

                        <img
                            src="${song.cover}"
                            alt="${song.title}"
                        >

                    </div>


                    <div class="favorite-song-info">

                        <h3>
                            ${song.title}
                        </h3>

                        <p>
                            ${song.artist}
                        </p>

                        <span>
                            ${song.category}
                        </span>

                    </div>


                    <button
                        type="button"
                        class="favorite-remove-btn"
                        data-song-id="${song.id}"
                        aria-label="Remove from favorites"
                    >

                        <i class="fa-solid fa-heart"></i>

                    </button>

                </article>
            `;

        }).join("");


    /* -----------------------------------------------------
       FAVORITE CARD CLICK
    ----------------------------------------------------- */

    const favoriteCards =
        favoritesGrid.querySelectorAll(
            ".favorite-song-card"
        );


    favoriteCards.forEach(card => {

        card.addEventListener(
            "click",
            function(event) {

                if (
                    event.target.closest(
                        ".favorite-remove-btn"
                    )
                ) {
                    return;
                }


                const songId =
                    Number(
                        this.dataset.songId
                    );


                const songIndex =
                    melodySongs.findIndex(
                        song => song.id === songId
                    );


                if (
                    songIndex !== -1 &&
                    typeof loadSong === "function"
                ) {

                    loadSong(
                        songIndex,
                        true
                    );

                }

            }
        );

    });


    /* -----------------------------------------------------
       REMOVE FAVORITE
    ----------------------------------------------------- */

    const removeButtons =
        favoritesGrid.querySelectorAll(
            ".favorite-remove-btn"
        );


    removeButtons.forEach(button => {

        button.addEventListener(
            "click",
            function(event) {

                event.stopPropagation();


                const songId =
                    Number(
                        this.dataset.songId
                    );


                const song =
                    melodySongs.find(
                        item => item.id === songId
                    );


                if (!song) {
                    return;
                }


                song.favorite = false;


                renderFavorites();


                updateFavoriteButtons();


                console.log(
                    "Removed from Favorites:",
                    song.title
                );

            }
        );

    });

}


/* =========================================================
   FAVORITE SYSTEM
========================================================= */

function toggleCurrentFavorite() {

    if (!currentSong) {

        console.log(
            "No current song to favorite."
        );

        return;

    }


    /* Toggle favorite */

    currentSong.favorite =
        !currentSong.favorite;


    /* Update heart icons */

    updateFavoriteButtons();


    /* Update Favorites section */

    renderFavorites();


    console.log(
        currentSong.favorite
            ? "Song added to Favorites"
            : "Song removed from Favorites"
    );

}


/* Hero Favorite */

if (favoriteBtn) {

    favoriteBtn.addEventListener(
        "click",
        toggleCurrentFavorite
    );

}


/* Bottom Favorite */

if (bottomFavorite) {

    bottomFavorite.addEventListener(
        "click",
        toggleCurrentFavorite
    );

}


/* =========================================================
   FULLSCREEN
========================================================= */

if (fullscreenButton) {

    fullscreenButton.addEventListener(
        "click",
        async function () {

            try {

                if (
                    !document.fullscreenElement
                ) {

                    const fullscreenTarget =
                        nowPlayingCard ||
                        bottomPlayer ||
                        document.documentElement;


                    if (
                        fullscreenTarget.requestFullscreen
                    ) {

                        await fullscreenTarget
                            .requestFullscreen();

                    }

                } else {

                    if (
                        document.exitFullscreen
                    ) {

                        await document
                            .exitFullscreen();

                    }

                }

            } catch (error) {

                console.log(
                    "Fullscreen error:",
                    error
                );

            }

        }
    );

}


/* =========================================================
   FULLSCREEN ICON
========================================================= */

document.addEventListener(
    "fullscreenchange",
    function () {

        if (!fullscreenButton) {
            return;
        }


        const icon =
            fullscreenButton.querySelector("i");


        if (!icon) {
            return;
        }


        const isFullscreen =
            Boolean(
                document.fullscreenElement
            );


        icon.classList.toggle(
            "fa-expand",
            !isFullscreen
        );

        icon.classList.toggle(
            "fa-compress",
            isFullscreen
        );


        fullscreenButton.setAttribute(
            "aria-label",
            isFullscreen
                ? "Exit fullscreen"
                : "Fullscreen"
        );

    }
);


/* =========================================================
   INITIAL PLAYER STATE
========================================================= */

updatePlayerIcons();

updateVolumeIcon();
renderFavorites();


console.log(
    "Now Playing player engine connected successfully!"
);
/* =========================================================
   CATEGORY SONGS SYSTEM
   Shows songs according to selected category
========================================================= */

const categoriesGrid = document.getElementById("categoriesGrid");


/* ---------------------------------------------------------
   CREATE CATEGORY SONG SECTION
--------------------------------------------------------- */

let categorySongsSection =
    document.getElementById("categorySongsSection");


/* If section does not exist in HTML, create it */

if (!categorySongsSection && categoriesGrid) {

    categorySongsSection =
        document.createElement("section");

    categorySongsSection.id =
        "categorySongsSection";

    categorySongsSection.className =
        "category-songs-section";

    categoriesGrid.parentElement.appendChild(
        categorySongsSection
    );

}


/* ---------------------------------------------------------
   SHOW SELECTED CATEGORY
--------------------------------------------------------- */

function showCategorySongs(category) {

    if (!categorySongsSection) {
        return;
    }


    /* Get only selected category songs */

    const categorySongs =
        melodySongs.filter(song =>

            song.category.toLowerCase() ===
            category.toLowerCase()

        );


    /* Section content */

    categorySongsSection.innerHTML = `

        <div class="category-songs-header">

            <div>

                <span class="section-eyebrow">
                    CATEGORY
                </span>

                <h2>${category}</h2>

                <p>
                    ${categorySongs.length} songs
                </p>

            </div>

            <button
                type="button"
                class="category-back-btn"
                id="categoryBackBtn"
            >
                <i class="fa-solid fa-arrow-up"></i>
                Back to Categories
            </button>

        </div>


        <div
            class="category-songs-grid"
            id="categorySongsGrid"
        ></div>

    `;


    const categorySongsGrid =
        document.getElementById(
            "categorySongsGrid"
        );


    /* -----------------------------------------------------
       CREATE SONG CARDS
    ----------------------------------------------------- */

    categorySongs.forEach(song => {

        const songIndex =
            melodySongs.findIndex(
                item => item.id === song.id
            );


        const card =
            document.createElement("article");

        card.className =
            "category-song-card";


        card.innerHTML = `
    <div class="category-song-cover">

        <img
            src="${song.cover}"
            alt="${song.title}"
            onerror="
                this.style.display='none';
                this.nextElementSibling.style.display='flex';
            "
        >

        <div class="category-cover-fallback">
            <i class="fa-solid fa-music"></i>
        </div>

        <button
            type="button"
            class="category-play-btn"
            aria-label="Play ${song.title}"
        >
            <i class="fa-solid fa-play"></i>
        </button>

    </div>


    <div class="category-song-info">

        <h3>${song.title}</h3>

        <p>${song.artist}</p>

        <span>${song.category}</span>

        <button
            type="button"
            class="song-options-btn"
            aria-label="Song options"
        >
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>

        <div class="song-options-menu">

            <button
                type="button"
                class="add-to-playlist-option"
            >
                <i class="fa-solid fa-plus"></i>
                Add to Playlist
            </button>

        </div>

    </div>
`;

        /* -------------------------------------------------
           PLAY BUTTON
        ------------------------------------------------- */

        const playButton =
            card.querySelector(
                ".category-play-btn"
            );


        playButton.addEventListener(
            "click",
            function(event) {

                event.stopPropagation();


                if (
                    typeof loadSong ===
                    "function"
                ) {

                    loadSong(
                        songIndex,
                        true
                    );

                    console.log(
                        "Playing:",
                        song.title
                    );

                }

            }
        );
/* -------------------------------------------------
   SONG OPTIONS
------------------------------------------------- */

const optionsButton =
    card.querySelector(".song-options-btn");

const optionsMenu =
    card.querySelector(".song-options-menu");


if (optionsButton && optionsMenu) {

    optionsButton.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();

            optionsMenu.classList.toggle("show");

        }
    );

}


/* -------------------------------------------------
   ADD TO PLAYLIST
------------------------------------------------- */

const addToPlaylistButton =
    card.querySelector(
        ".add-to-playlist-option"
    );


if (addToPlaylistButton) {

    addToPlaylistButton.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();


            /* No playlist created yet */

            if (
                !Array.isArray(playlists) ||
                playlists.length === 0
            ) {

                alert(
                    "Please create a playlist first."
                );

                return;

            }


            /* Playlist selection */

            const playlistNames =
                playlists
                    .map(
                        (playlist, index) =>
                            `${index + 1}. ${playlist.name}`
                    )
                    .join("\n");


            const selected =
                prompt(
                    "Add to Playlist:\n\n" +
                    playlistNames +
                    "\n\nEnter playlist number:"
                );


            if (!selected) {
                return;
            }


            const playlistIndex =
                Number(selected) - 1;


            if (
                playlistIndex < 0 ||
                playlistIndex >= playlists.length
            ) {

                alert("Invalid playlist number.");

                return;

            }


            const selectedPlaylist =
                playlists[playlistIndex];


            /* Prevent duplicate song */

            const alreadyAdded =
                selectedPlaylist.songs.some(
                    existingSong =>
                        existingSong.id === song.id
                );


            if (alreadyAdded) {

                alert(
                    `"${song.title}" is already in ${selectedPlaylist.name}.`
                );

                return;

            }


            /* Add song */

            selectedPlaylist.songs.push({
                id: song.id,
                title: song.title,
                artist: song.artist,
                category: song.category,
                audio: song.audio,
                cover: song.cover
            });


            /* Update Playlist */

            renderPlaylists();


            /* Close menu */

            if (optionsMenu) {
                optionsMenu.classList.remove("show");
            }


            console.log(
                `"${song.title}" added to "${selectedPlaylist.name}"`
            );

        }
    );

}


        /* -------------------------------------------------
           CARD CLICK
        ------------------------------------------------- */

        card.addEventListener(
            "click",
            function() {

                if (
                    typeof loadSong ===
                    "function"
                ) {

                    loadSong(
                        songIndex,
                        true
                    );

                    console.log(
                        "Song selected:",
                        song.title
                    );

                }

            }
        );


        categorySongsGrid.appendChild(card);

    });


    /* -----------------------------------------------------
       SHOW SECTION
    ----------------------------------------------------- */

    categorySongsSection.style.display =
        "block";


    categorySongsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });


    /* -----------------------------------------------------
       BACK BUTTON
    ----------------------------------------------------- */

    const backButton =
        document.getElementById(
            "categoryBackBtn"
        );


    if (backButton) {

        backButton.addEventListener(
            "click",
            function() {

                categoriesGrid.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    }


    console.log(
        `${category}: ${categorySongs.length} songs`
    );

}


/* ---------------------------------------------------------
   CATEGORY BUTTONS
--------------------------------------------------------- */

if (categoriesGrid) {

    const categoryButtons =
        categoriesGrid.querySelectorAll(
            ".category-card"
        );


    categoryButtons.forEach(button => {

        button.addEventListener(
            "click",
            function() {

                const category =
                    this.dataset.category;


                if (!category) {
                    return;
                }


                showCategorySongs(
                    category
                );

            }
        );

    });

}


console.log(
    "🎵 Category song system connected successfully!"
);
// =====================================================
// ALBUMS DATA
// =====================================================

const albumsData = [
    {
        name: "Midnight Dreams",
        artist: "Billie Eilish",
        songs: 12,
        image: "album-images/midnight-dreams.jpg"
    },
    {
        name: "Love & Emotions",
        artist: "Justin Bieber",
        songs: 10,
        image: "album-images/love-and-emotions.jpg"
    },
    {
        name: "Arirang",
        artist: "BTS",
        songs: 8,
        image: "album-images/arirang.jpg"
    },
    {
        name: "Khamoshiyan",
        artist: "Asim Azhar",
        songs: 9,
        image: "album-images/khamoshiyan.jpg"
    },
   {
    name: "After Hours",
    artist: "The Soundlings",
    songs: 14,
    image: "album-images/after-hours.jpg"
}
];


// =====================================================
// ARTISTS DATA
// =====================================================

const artistsData = [
    {
        name: "Soundlings",
        category: "Rock / Pop",
        title: "Featured Artist",
        songs: 4,
        image: "artist-images/soundlings.jpg"
    },
    {
        name: "Anno Domini Beats",
        category: "Hip Hop / Chill",
        title: "Featured Artist",
        songs: 5,
        image: "artist-images/anno-domini-beats.jpg"
    },
    {
        name: "Patrick Jordan Patrikios",
        category: "Classical / Rock",
        title: "Featured Artist",
        songs: 3,
        image: "artist-images/patrick-jordan-patrikios.jpg"
    },
    {
        name: "Blue Deer",
        category: "Chill / Sad",
        title: "Featured Artist",
        songs: 4,
        image: "artist-images/blue-deer.jpg"
    },
    {
        name: "Rod Kim",
        category: "Hip Hop / Romantic",
        title: "Featured Artist",
        songs: 2,
        image: "artist-images/rod-kim.jpg"
    },
    {
        name: "Zenith Bikini",
        category: "Romantic",
        title: "Featured Artist",
        songs: 1,
        image: "artist-images/zenith-bikini.jpg"
    },
    {
        name: "Lore Vain",
        category: "Pop",
        title: "Featured Artist",
        songs: 1,
        image: "artist-images/lore-vain.jpg"
    },
    {
        name: "National Sweetheart",
        category: "Classical",
        title: "Featured Artist",
        songs: 1,
        image: "artist-images/national-sweetheart.jpg"
    },
    {
        name: "The Grey Room / Density & Time",
        category: "Classical",
        title: "Featured Artist",
        songs: 1,
        image: "artist-images/the-grey-room-density-time.jpg"
    },
    {
        name: "The Parrisian",
        category: "Jazz",
        title: "Featured Artist",
        songs: 1,
        image: "artist-images/the-parrisian.jpg"
    }
];


// =====================================================
// RENDER ALBUMS
// =====================================================

function renderAlbums() {

    const albumsGrid = document.getElementById("albumsGrid");
    const albumsEmpty = document.getElementById("albumsEmpty");

    if (!albumsGrid) return;

    albumsGrid.innerHTML = "";

    albumsData.forEach(album => {

        const card = document.createElement("div");

        card.className = "album-card";

        card.innerHTML = `
            <div class="album-card-image">
                <img src="${album.image}" alt="${album.name}">
            </div>

            <div class="album-card-info">

                <h3>${album.name}</h3>

                <p>${album.artist}</p>

                <span>${album.songs} Songs</span>

            </div>
        `;

        albumsGrid.appendChild(card);
    });

    if (albumsEmpty) {
        albumsEmpty.style.display =
            albumsData.length === 0 ? "block" : "none";
    }
}


// =====================================================
// RENDER ARTISTS
// =====================================================

function renderArtists() {

    const artistsGrid = document.getElementById("artistsGrid");
    const artistsEmpty = document.getElementById("artistsEmpty");

    if (!artistsGrid) return;

    artistsGrid.innerHTML = "";

    artistsData.forEach(artist => {

        const card = document.createElement("div");

        card.className = "artist-card";

        card.innerHTML = `
            <div class="artist-card-image">
                <img src="${artist.image}" alt="${artist.name}">
            </div>

            <div class="artist-card-info">

                <h3>${artist.name}</h3>

                <p>${artist.category}</p>

                <span>${artist.title}</span>

                <small>${artist.songs} Songs</small>

            </div>
        `;

        artistsGrid.appendChild(card);
    });

    if (artistsEmpty) {
        artistsEmpty.style.display =
            artistsData.length === 0 ? "block" : "none";
    }
}


// =====================================================
// LOAD ALBUMS + ARTISTS
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    renderAlbums();
    renderArtists();

});
