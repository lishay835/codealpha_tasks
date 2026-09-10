document.addEventListener("DOMContentLoaded", () => {
    // 8.1 Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", e => {
            const target = document.querySelector(link.getAttribute("href"));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        });
    });
   // 8.2 Social Links

document.querySelectorAll('[aria-label="LinkedIn"]').forEach(link => {
    link.href = "https://www.linkedin.com/in/alishba-javed-984911423/";
    link.target = "_blank";
});
document.querySelectorAll('[aria-label="GitHub"]').forEach(link => {
    link.href = "https://github.com/lishay835/My-Personal-Portfolio";
    link.target = "_blank";
});
    // 8.3 Dark / Light Theme
    const theme = document.getElementById("theme-toggle");

    if (localStorage.getItem("theme") === "dark")
        document.body.classList.add("dark-mode");

    theme?.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark-mode") ? "dark" : "light"
        );
    });
// 8.4 Projects Carousel
const track = document.getElementById("projects-track");
const viewport = document.querySelector(".projects-viewport");
const next = document.getElementById("project-next");
const prev = document.getElementById("project-prev");
const dots = document.querySelectorAll(".project-dot");

let page = 0;
const totalPages = 4;

function showProjects() {
    track.style.transform =
        `translateX(-${page * viewport.clientWidth}px)`;

    dots.forEach((dot, i) =>
        dot.classList.toggle("active", i === page)
    );
}

next?.addEventListener("click", () => {
    if (page < totalPages - 1) {
        page++;
        showProjects();
    }
});

prev?.addEventListener("click", () => {
    if (page > 0) {
        page--;
        showProjects();
    }
});

    // 8.5 Certificate Viewer
    document.querySelectorAll(".view-certificate").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();

            const viewer = document.createElement("div");
            viewer.className = "certificate-viewer";

            viewer.innerHTML = `
                <div class="certificate-popup">
                    <button class="certificate-close">&times;</button>
                    <img src="${link.href}" alt="Certificate">
                </div>
            `;

            document.body.appendChild(viewer);

            viewer.querySelector(".certificate-close").onclick =
                () => viewer.remove();

            viewer.onclick = e => {
                if (e.target === viewer) viewer.remove();
            };
        });
    });

});
// Skills Animation

const skillsSection = document.querySelector(".skills");
const skillBars = document.querySelectorAll(".skill-progress-bar");

const skillsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        skillBars.forEach((bar, i) => {
            setTimeout(() => {
                bar.style.width = bar.getAttribute("data-width");
            }, i * 150);
        });

        skillsObserver.unobserve(skillsSection);
    }
}, { threshold: 0.3 });

if (skillsSection) {
    skillBars.forEach(bar => {
        bar.setAttribute("data-width", bar.style.width);
        bar.style.width = "0";
    });

    skillsObserver.observe(skillsSection);
}