import "./menu.css"

class Item {
    constructor(name, desc, price, img) { 
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.img = img;
    }
}

class Category {
    constructor(name, items) {
        this.name = name,
        this.items = items
    }
}

function initMenuItems() {
    const entradas = [
        new Item("Bruschettas Clásicas", "Pan tostado con tomate, albahaca y aceite de oliva.", 6.99, "assets/items/item01.jpg"),
        new Item("Ceviche de la Casa", "Pescado fresco marinado en jugo de limón con cebolla y cilantro.", 9.99, "assets/items/item02.jpg"),
        new Item("Croquetas de Jamón Ibérico", "Crujientes por fuera, cremosas por dentro, con alioli casero.", 7.99, "assets/items/item03.jpg"),
        new Item("Sopa del Día", "Consulta a nuestro equipo por la especialidad del chef.", 5.99, "assets/items/item04.jpg")
    ];
    
    const platosPrincipales = [
        new Item("Risotto de Mariscos", "Cremoso arroz con camarones, calamares y un toque de parmesano.", 16.99, "assets/items/item05.jpg"),
        new Item("Filete de Res a la Parrilla", "Acompañado de puré de papas trufado y espárragos salteados.", 18.99, "assets/items/item06.jpg"),
        new Item("Salmón en Salsa de Maracuyá", "Servido con quinoa y ensalada fresca.", 17.99, "assets/items/item07.jpg"),
        new Item("Pasta Alfredo con Pollo", "Fettuccine en salsa cremosa con trozos de pechuga de pollo.", 14.99, "assets/items/item08.jpg")
    ];
    
    const ensaladas = [
        new Item("Ensalada César", "Lechuga romana, crutones, parmesano y aderezo casero.", 9.99, "assets/items/item09.jpg"),
        new Item("Ensalada Mediterránea", "Tomate, pepino, aceitunas, queso feta y aderezo de limón.", 10.99, "assets/items/item10.jpg"),
        new Item("Ensalada de Pollo y Aguacate", "Mezcla de verdes, pollo a la parrilla, aguacate y vinagreta balsámica.", 11.99, "assets/items/item11.jpg")
    ];
    
    const sandwichesBurgers = [
        new Item("Hamburguesa Clásica", "Carne de res 100% Angus con queso cheddar y papas fritas.", 12.99, "assets/items/item12.jpg"),
        new Item("Sándwich de Pollo a la Parrilla", "Pechuga de pollo con rúcula, tomate y aderezo especial.", 10.99, "assets/items/item13.jpg"),
        new Item("Club Sándwich", "Pavo, tocino, huevo, lechuga y mayonesa en pan tostado.", 11.99, "assets/items/item14.jpg")
    ];
    
    const postres = [
        new Item("Tiramisú", "Delicado postre italiano con café y mascarpone.", 7.99, "assets/items/item15.jpg"),
        new Item("Cheesecake de Frutos Rojos", "Base de galleta con crema de queso y coulis de frutos rojos.", 6.99, "assets/items/item16.jpg"),
        new Item("Brownie con Helado", "Brownie de chocolate caliente con helado de vainilla.", 6.99, "assets/items/item17.jpg"),
        new Item("Flan Casero", "Cremoso flan de caramelo con un toque de vainilla.", 5.99, "assets/items/item18.jpg")
    ];
    
    const bebidas = [
        new Item("Limonada de Hierbabuena", "Refrescante y natural.", 3.99, "assets/items/item19.jpg"),
        new Item("Jugo de Frutas Naturales", "Naranja, mango, fresa o piña.", 4.50, "assets/items/item20.jpg"),
        new Item("Café Espresso / Capuccino / Latte", "Preparado con granos seleccionados.", 3.99, "assets/items/item21.jpg"),
        new Item("Vinos & Cócteles", "Consulta nuestra carta de vinos y coctelería.", 7.99, "assets/items/item22.jpg")
    ];
    
    // Agrupando todo en un objeto para fácil acceso
    return [
        new Category("Entradas", entradas),
        new Category("Platos Principales", platosPrincipales),
        new Category("Ensaladas", ensaladas),
        new Category("Sandwich y Hamburguesas", sandwichesBurgers),
        new Category("Postres", postres),
        new Category("Bebidas", bebidas)
    ]; 
}

function loadItem(itemData) {
    const menuItem = document.createElement("div");
    const itemHeader = document.createElement("div");
    const name = document.createElement("h5");
    const desc = document.createElement("p");
    const price = document.createElement("div");
    const img = document.createElement("div");
    name.textContent = itemData.name;
    desc.textContent = itemData.desc;
    price.textContent = itemData.price;
    menuItem.classList.add("menu-item")
    itemHeader.classList.add("item-header")
    img.classList.add("item-img");
    price.classList.add("item-price")
    itemHeader.appendChild(name);
    itemHeader.appendChild(price)
    menuItem.appendChild(itemHeader);
    menuItem.appendChild(img)
    menuItem.appendChild(desc);
    return menuItem;
}

export function loadMenuContent() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    initMenuItems().forEach((category) => {
        const section = document.createElement("div");
        const sectionTitle = document.createElement("div");
        const itemList = document.createElement("div");

        itemList.classList.add("item-list")

        section.appendChild(sectionTitle);
        section.appendChild(itemList);

        section.classList.add("menu-section");
        sectionTitle.textContent = category.name;
        
        category.items.forEach((itemData) => {
            itemList.appendChild(loadItem(itemData));
        })

        menu.appendChild(section);
    })

    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.appendChild(menu);
}