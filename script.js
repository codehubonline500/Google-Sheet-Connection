// JavaScript to handle iframe reloading and full-screen toggle
document.getElementById('reloadButton').addEventListener('click', reloadSheet);
document.getElementById('fullscreenButton').addEventListener('click', toggleFullScreen);

function reloadSheet() {
    const iframe = document.getElementById("sheetIframe");
    const currentSrc = iframe.src;

    // Add refresh animation class
    const reloadButton = document.getElementById("reloadButton");
    reloadButton.classList.add("refreshing");

    // Reset the src to force reload
    setTimeout(() => {
        iframe.src = ''; // Reset the src
        iframe.src = currentSrc; // Set the src back to reload
        reloadButton.classList.remove("refreshing"); // Remove the animation class
    }, 500); // Match this duration with the CSS animation duration
}

function toggleFullScreen() {
    const iframe = document.getElementById("sheetIframe");
    if (!document.fullscreenElement) {
        iframe.requestFullscreen().catch(err => {
            console.error(`Error attempting full-screen: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
    }
}
