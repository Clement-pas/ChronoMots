const form = document.getElementById('form-suggestions');
const resultatSuggestion = document.getElementById('resultat-suggestion');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const suggestion = document.getElementById('suggestion').value;

    if (!suggestion.trim()) {
        resultatSuggestion.textContent = 'Veuillez saisir une suggestion.';
        resultatSuggestion.style.color = 'red';
        return;
    }

    const data = {
        content: `Nouvelle suggestion : ${suggestion}`,
    };

    try {
        const response = await fetch('https://discord.com/api/webhooks/1342600701213413426/qCrTowNtVmfJDLhLd9siascEXh-1r1I43jH4PteBla-qZIUYlzuo2kmHGTGmsPoxbNql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            resultatSuggestion.textContent = 'Merci pour votre suggestion !';
            resultatSuggestion.style.color = 'green';
            form.reset();
        } else {
            resultatSuggestion.textContent = 'Erreur lors de l\'envoi de la suggestion. Veuillez réessayer.';
            resultatSuggestion.style.color = 'red';
        }
    } catch (error) {
        resultatSuggestion.textContent = 'Erreur de connexion. Veuillez réessayer plus tard.';
        resultatSuggestion.style.color = 'red';
        console.error('Erreur :', error);
    }
});