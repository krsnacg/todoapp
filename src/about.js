import "./about.css"

export function loadAboutContent() {

    const about = document.createElement("div");
    about.classList.add("about")

    const aboutSection = document.createElement("div")
    const title = document.createElement("h2");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");

    title.textContent = "Sobre Nostros";
    para1.textContent = "En [Nombre del Restaurante], no solo servimos comida, sino que creamos experiencias. Desde nuestros inicios, hemos trabajado con pasión para ofrecer platos que combinan sabor, calidad y tradición, en un ambiente cálido y acogedor.";
    para2.textContent = "Nuestra cocina está inspirada en [tipo de cocina: italiana, fusión, tradicional, etc.], utilizando ingredientes frescos y seleccionados cuidadosamente para garantizar un sabor inigualable en cada bocado. Creemos que una buena comida debe disfrutarse con todos los sentidos, por eso cuidamos cada detalle, desde la presentación de los platos hasta el servicio excepcional que ofrecemos a nuestros comensales.";

    aboutSection.appendChild(title);
    aboutSection.appendChild(para1);
    aboutSection.appendChild(para2);

    const philSection = document.createElement("div");
    const title2 = document.createElement("h3");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    title2.textContent = "Nuestra Filosofía";
    li1.textContent = "🍽️ Calidad – Cada ingrediente cuenta. Nos aseguramos de que cada plato refleje lo mejor de nuestra cocina.";
    li2.textContent = " 💛 Pasión – Cocinamos con amor y dedicación, porque creemos que la comida conecta a las personas.";
    li3.textContent = "🏡 Hospitalidad – Queremos que te sientas como en casa, con un ambiente acogedor y un servicio inigualable."

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    philSection.appendChild(title2);
    philSection.appendChild(ul);

    about.appendChild(aboutSection);
    about.appendChild(philSection);

    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.appendChild(about);

}