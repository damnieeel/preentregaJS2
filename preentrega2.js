
//Declaración de objetos parte del menú

let clasicos = [
    {
        id: 1,
        trago: "Pisco Sour",
        precio: 5290,
    },
    {
        id: 2,
        trago: "Aperol",
        precio: 6990,
    },
    {
        id: 3,
        trago: "Ramazzotti",
        precio: 6990,
    },
    {
        id: 4,
        trago: "Daiquiri",
        precio: 6990,
    },
    {
        id: 5,
        trago: "Mojito",
        precio: 6590,
    },
    {
        id: 6,
        trago: "Piña Colada",
        precio: 5990,
    },
];

let schops = [
    {
        id: 1,
        trago: "Heineken",
        precio: 5490,
    },
    {
        id: 2,
        trago: "Austral Calafate",
        precio: 6990,
    },
    {
        id: 3,
        trago: "Kunstmann Torobayo",
        precio: 6990,
    },
    {
        id: 4,
        trago: "Royal",
        precio: 4990,
    },
];

let sinAlcohol = [
    {
        id: 1,
        trago: "Heineken Cero",
        precio: 3490,
    },
    {
        id: 2,
        trago: "Mojito S/Alcohol",
        precio: 3990,
    },
    {
        id: 3,
        trago: "Piña Colada S/Alcohol",
        precio: 3990,
    },
    {
        id: 4,
        trago: "Limonada de la Casa",
        precio: 3990,
    },
];

// Dar forma al HTML creando elementos desde js

let menus = ["Clasicos", "Schops", "Sin Alcohol"];

const menu = document.getElementById("menu");


menus.forEach((e) => {
    let contenedorMenus = document.createElement("div");
    contenedorMenus.className = e;
    contenedorMenus.innerHTML = `<h4>${e}</h4>`;

    menu.appendChild(contenedorMenus);
}
);
