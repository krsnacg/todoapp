import "./home.css"
import bannerImg from "./assets/lapoma.jpg"

export function displayHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const welcomeTitle = document.createElement("div");
    const titleText = document.createElement("h2");
    welcomeTitle.classList.add("welcome-title");
    welcomeTitle.appendChild(titleText);
    titleText.textContent = "¡Bienvenido a [Nombre del Restaurante]!";
    
    const homeImage = document.createElement("div");
    const image = document.createElement("img");
    image.src = bannerImg
    homeImage.appendChild(image);
    
    const welcomeMessage = document.createElement("div");
    welcomeMessage.classList.add("welcome-msg")
    const pmsg1 = document.createElement("p");
    const pmsg2 = document.createElement("p");
    const pmsg3 = document.createElement("p");
    pmsg1.textContent = "En [Nombre del Restaurante], creemos que cada comida es una experiencia única. Nos apasiona ofrecerte platos preparados con los ingredientes más frescos, un ambiente acogedor y un servicio excepcional.";
    pmsg2.textContent = "Descubre sabores auténticos, creados con amor y tradición. Ya sea que busques una cena especial, un almuerzo con amigos o simplemente un buen café, aquí encontrarás un espacio donde cada bocado cuenta una historia.";
    pmsg3.textContent = "✨ Cocina con identidad. Ingredientes frescos. Un lugar para disfrutar. ✨";

    welcomeMessage.appendChild(pmsg1);
    welcomeMessage.appendChild(pmsg2);
    welcomeMessage.appendChild(pmsg3);

    const opening = document.createElement("div");
    opening.classList.add("opening-hours");
    const openingTitle = document.createElement("h3");
    openingTitle.textContent = "Horarios de atención";
    const ul = document.createElement("ul")
    const li1 = document.createElement("li");
    li1.textContent = "Lunes - Viernes: 10am - 10pm";
    const li2 = document.createElement("li");
    li2.textContent = "Sabado - Domingo: 12am - 12pm";
    ul.appendChild(li1);
    ul.appendChild(li2);
    opening.appendChild(openingTitle);
    opening.appendChild(ul);

    const locationSection = document.createElement("div");

    const address = document.createElement("p");
    address.textContent = "Dirección: 123 Forest Drive, Forestville, Maine";
    const locationText = document.createElement("p");
    locationText.textContent = "📍 ¡Visítanos y vive la experiencia!";

    locationSection.appendChild(address);
    locationSection.appendChild(locationText);
    
    home.appendChild(welcomeTitle);
    home.appendChild(homeImage);
    home.appendChild(welcomeMessage);
    home.appendChild(opening);
    home.appendChild(locationSection);

    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.appendChild(home);
}