// Funzione per salvare i dati nel localStorage
function saveUserData(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
}

// Funzione per controllare se l'utente è già loggato
function checkIfLoggedIn() {
    const username = localStorage.getItem('username');
    if (username) {
        window.location.href = 'welcome.html';  // Redirige alla pagina di benvenuto
    }
}

// Gestisce la sottomissione del modulo di login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Impedisce il comportamento di default (refresh)

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        saveUserData(username, password);
        window.location.href = 'welcome.html';  // Redirige alla pagina di benvenuto
    } else {
        alert("Please enter both username and password.");
    }
});

// Chiamato all'avvio per verificare se l'utente è già loggato
checkIfLoggedIn();
