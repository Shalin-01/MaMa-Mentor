document.addEventListener("DOMContentLoaded", () => {
    // Animate flash messages
    const flashMessages = document.querySelectorAll("ul li");
    if (flashMessages.length > 0) {
        flashMessages.forEach((message, index) => {
            message.style.animation = `fadeOut 2s ${index * 0.5}s forwards`;
            
            // Add hover animation to flash messages
            message.addEventListener("mouseover", () => {
                message.style.animation = `hoverScale 0.3s ease-out forwards`;
            });

            message.addEventListener("mouseleave", () => {
                message.style.animation = `hoverScaleReverse 0.3s ease-out forwards`;
            });
        });
    }

    // Add animations to all links
    document.querySelectorAll("a").forEach(link => {
        // On click animation
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const href = e.target.getAttribute("href");
            document.body.style.animation = "fadeOut 1s ease-in-out";
            setTimeout(() => (window.location.href = href), 1000);
        });

        // On mouseover animation
        link.addEventListener("mouseover", () => {
            link.style.animation = `linkPulse 0.6s infinite alternate`;
        });

        // Stop animation on mouse leave
        link.addEventListener("mouseleave", () => {
            link.style.animation = "";
        });
    });
});
