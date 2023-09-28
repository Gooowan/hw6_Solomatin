function displayResponse(response) {
    const responseElement = document.getElementById('response');

    responseElement.style.height = "auto";

    if (response.message) {
        // Displaying the error message
        responseElement.textContent = response.message;
    } else {
        // Displaying the valid profile info
        responseElement.textContent = JSON.stringify(response, null, 2);
    }
}

function fetchValidNickname() {
    fetch('https://api.github.com/users/Gooowan')
        .then(response => response.json())
        .then(data => displayResponse(data))
        .catch(error => {
            displayResponse({ message: `Error: ${error.message}` });
        });
}

function fetchInvalidNickname() {
    // Intentionally fetching a non-existent endpoint
    fetch('https://api.github.com/users/Gooowans23f')
        .then(response => response.json())
        .then(data => displayResponse(data))
        .catch(error => {
            displayResponse({ message: `Error: ${error.message}` });
        });
}
