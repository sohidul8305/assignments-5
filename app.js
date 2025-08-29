// -------------------- SELECTORS -------------------
const heartCount = document.getElementById("heartCount");
const coinCount = document.getElementById("coinCount");
const copyCount = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");
const cardContainer = document.getElementById("cardContainer");

let hearts = 0;
let coins = 100;
let copies = 0;



// Function to copy text to clipboard (works in all environments)
function copyToClipboard(text) {
    // Create a temporary textarea element
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";  // Avoid scrolling to bottom
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        // Try the modern approach first
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
            return true;
        }
        // Fallback for older browsers
        const successful = document.execCommand('copy');
        if (!successful) {
            throw new Error('Fallback copy method failed');
        }
        return true;
    } catch (err) {
        console.error('Failed to copy: ', err);
        return false;
    } finally {
        document.body.removeChild(textArea);
    }
}


    

        });