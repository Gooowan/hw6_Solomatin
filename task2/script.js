const buttonsContainer = document.getElementById('buttonsContainer');
const apodImage = document.getElementById('apodImage');
const title = document.getElementById('title');
const description = document.getElementById('description');
const statusMessage = document.getElementById('statusMessage');

// Create 30 buttons
for (let i = 1; i <= 30; i++) {
    const button = document.createElement('button');
    button.innerText = i;
    button.addEventListener('click', () => fetchApod(i));
    buttonsContainer.appendChild(button);
}

function fetchApod(day) {
    // Check if the day is 20
    if (day > 19) {
        handleError('Data for day 20 is not allowed to be fetched.');
        return;
    }

    const currentDate = new Date();
    if (currentDate.getDate() < day) {
        handleError('Fetching future data is not allowed.');
        return;
    }

    const dateStr = `2023-09-${String(day).padStart(2, '0')}`;
    const API_URL = `https://api.nasa.gov/planetary/apod?date=${dateStr}&api_key=Gf7SEiYVYobr5ziQsLauSucRNr0snxgGJ6BDZyG0`;

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            apodImage.src = data.url;
            title.innerText = data.title;
            description.innerText = data.explanation;
        })
        .catch(error => {
            handleError(error.message);
        })
        .finally(() => {
            statusMessage.innerText = 'Request completed';
        });
}

function handleError(errorMessage) {
    apodImage.src = '';
    title.innerText = 'Error';
    description.innerText = errorMessage;
}
