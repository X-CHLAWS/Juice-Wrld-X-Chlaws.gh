function scrollToMusic() {
    document.getElementById("music").scrollIntoView({ behavior: 'smooth' });
}
// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(link => {
link.addEventListener('click', event => {
event.preventDefault();
const target = document.querySelector(link.getAttribute('href'));
target.scrollIntoView({ behavior: 'smooth' });
});
});
