document.addEventListener('DOMContentLoaded', (event) => {
    const lastPostedElement = document.getElementById('last-posted');
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-GB'); 
    lastPostedElement.textContent = `Last Posted: ${formattedDate}`;
});