var canvas = new fabric.Canvas("myCanvas");
pokebola_x = 0;
pokebola_y = 0;
pokemon_x = 800;
pokemon_y = 400;

function inicializar() {
    fabric.Image.fromURL("furret.png", function (Img) {
        pokemon_obj = Img;
        pokemon_obj.scaleToWidth(100);
        pokemon_obj.scaleToHeight(100);
        pokemon_obj.set({
            top: pokemon_y,
            left: pokemon_x
        });
        canvas.add(pokemon_obj);
    });
    new_image();
}

function new_image() {
    fabric.Image.fromURL("pokebola.png", function (Img) {
        pokebola_obj = Img;
        pokebola_obj.scaleToWidth(50);
        pokebola_obj.scaleToHeight(50);
        pokebola_obj.set({
            top: pokebola_y,
            left: pokebola_x
        });
        canvas.add(pokebola_obj);
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    if ((pokebola_x > pokemon_x) && (pokebola_y > pokemon_y)) {
        canvas.remove(pokebola_obj);
        canvas.remove(pokemon_obj);
        document.getElementById("titulo").innerHTML = "Parabéns, Você capturou o Pokémon!!!";
        document.getElementById("titulo").style.color = "white";
    }
    else {
        if (keyPressed == '38') {
            up();
        }
        if (keyPressed == '40') {
            down();
        }
        if (keyPressed == '39') {
            right();
        }
        if (keyPressed == '37') {
            left();
        }
    }

function up() {
    if (pokebola_y >= 5) {
        pokebola_y = pokebola_y - 5;
        canvas.remove(pokebola_obj);
        new_image();
    }
}

function down() {
    if (pokebola_y <= 450) {
        pokebola_y = pokebola_y + 5;
        canvas.remove(pokebola_obj);
        new_image();
    }
}

function right() {
    if (pokebola_x <= 1050) {
        pokebola_x = pokebola_x + 5;
        canvas.remove(pokebola_obj);
        new_image();
    }
}

function left() {
    if (pokebola_x > 5) {
        pokebola_x = pokebola_x - 5;
        canvas.remove(pokebola_obj);
        new_image();
    }
}

}