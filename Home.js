function showEducation() {
    var info = document.getElementById("Education");
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}
function showExperiance() {
    var info = document.getElementById("Experiance");
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}
function showAchivements() {
    var info = document.getElementById("Achivements");
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}
// Text Animation
function animateText(element, text, delay = 100, callback = null) {
    element.innerHTML = "";
    text.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.classList.add("letter");
        element.appendChild(span);
        setTimeout(() => {
            span.style.opacity = 1;
            span.style.transform = "translateY(0)";
        }, index * delay);
    });

    if (callback) {
        setTimeout(callback, text.length * delay);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const helloText = document.getElementById("hello-text");
    const nameText = document.getElementById("name-text");

    animateText(helloText, "Hello, it's Me ", 100, () => {
        animateText(nameText, "Abdul Gani...", 150);
    });
});
const contents = document.querySelectorAll('.content');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

contents.forEach(content => observer.observe(content));
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create the mailto link
    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=Name:%20${encodeURIComponent(name)}%0APhone:%20${encodeURIComponent(phone)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;

    // Open the default email client with the pre-filled email
    window.location.href = mailtoLink;
});
document.addEventListener("DOMContentLoaded", () => {
    const skillSection = document.getElementById("MySkills");
    const skillBars = document.querySelectorAll(".skill-bar");

    let animated = false;

    window.addEventListener("scroll", () => {
        const sectionTop = skillSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100 && !animated) {
            skillBars.forEach(bar => {
                const value = bar.getAttribute("data-skill");
                bar.style.width = value + "%";
            });
            animated = true;
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".skill-bar");
    const section = document.getElementById("MySkills");
    let animated = false;

    window.addEventListener("scroll", () => {
        const top = section.getBoundingClientRect().top;
        const height = window.innerHeight;

        if (top < height - 120 && !animated) {
            skillBars.forEach(bar => {
                bar.style.width = bar.dataset.skill + "%";
            });
            animated = true;
        }
    });
});

