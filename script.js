// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {

    const fireworkScene = document.getElementById('firework-scene');
    
    // Set up an Intersection Observer
    const observerOptions = {
        root: null, // use the viewport
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the scene is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'active' class to trigger CSS transitions
                fireworkScene.classList.add('active');
                
                // Optional: Ensure videos are playing (sometimes browsers block autoplay)
                document.getElementById('droneVideo').play();
                document.getElementById('fireworksVideo').play();

                // Stop observing after it triggers once
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(fireworkScene);
});
