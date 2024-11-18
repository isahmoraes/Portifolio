function Form(event) {
    event.preventDefault(); 
    const form = document.getElementById('contatoForm');
    form.reset();

    const alertSuccess = document.getElementById('alertSuccess');
    const root = document.documentElement;

    const isDarkTheme = getComputedStyle(root).getPropertyValue("--background-color").trim() === "#7D0A0A";

    if (isDarkTheme) {
        alertSuccess.style.backgroundColor = "#e07676";  
        alertSuccess.style.color = "white";
    } else {
        alertSuccess.style.backgroundColor = "var(--light-card-background)"; 
        alertSuccess.style.color = "black";  
    }
    alertSuccess.style.display = 'block';

    alertSuccess.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setTimeout(function() {
        alertSuccess.style.display = 'none';
    }, 5000);
}

function toggleTheme() {
    const root = document.documentElement;
    const sunIcon = document.getElementById('sun-icon');  // Ícone de sol
    const moonIcon = document.getElementById('moon-icon');  // Ícone de lua
    const isDarkTheme = getComputedStyle(root).getPropertyValue("--background-color").trim() === "#7D0A0A";

    if (isDarkTheme) {
        // Trocar para tema claro
        root.style.setProperty("--background-color", "var(--light-background-color)");
        root.style.setProperty("--text-color", "var(--light-text-color)");
        root.style.setProperty("--card-background-color", "var(--light-card-background)");
        root.style.setProperty("--link-color", "var(--light-link-color)");
        root.style.setProperty("--hover-color", "var(--light-hover-color)");
        root.style.setProperty("--button-background", "var(--light-button-background)");
        root.style.setProperty("--button-color", "var(--light-button-color)");
        localStorage.setItem("theme", "light");

        // Exibir ícone de lua e ocultar ícone de sol
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
    } else {
        // Trocar para tema escuro
        root.style.setProperty("--background-color", "#7D0A0A");
        root.style.setProperty("--text-color", "#ffffff");
        root.style.setProperty("--card-background-color", "#BF3131");
        root.style.setProperty("--link-color", "gainsboro");
        root.style.setProperty("--hover-color", "#b9b6ac");
        root.style.setProperty("--button-background", "#bdbdbd");
        root.style.setProperty("--button-color", "#ffffff");
        localStorage.setItem("theme", "dark");

        // Exibir ícone de sol e ocultar ícone de lua
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
    }
}

window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    const root = document.documentElement;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    if (savedTheme === "light") {
        root.style.setProperty("--background-color", "var(--light-background-color)");
        root.style.setProperty("--text-color", "var(--light-text-color)");
        root.style.setProperty("--card-background-color", "var(--light-card-background)");
        root.style.setProperty("--link-color", "var(--light-link-color)");
        root.style.setProperty("--hover-color", "var(--light-hover-color)");
        root.style.setProperty("--button-background", "var(--light-button-background)");
        root.style.setProperty("--button-color", "var(--light-button-color)");

        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
    } else {

        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
    }
});
