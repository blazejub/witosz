let dymek = document.getElementById("dymek");
function sekcje(){
    dymek.innerHTML =  "<a href='#kotwica1'>1. Nagłówek</a> <br>";
    dymek.innerHTML += "<a href='#kotwica2'>2. Ciasto 1</a> <br>";
    dymek.innerHTML += "<a href='#kotwica3'>3. Ciasto 2</a> <br>";
    dymek.innerHTML += "<a href='#kotwica4'>4. Ciasto 3</a> <br>";
    dymek.innerHTML += "<a href='#kotwica5'>5. Ciasto 4</a> <br>";
    dymek.innerHTML += "<a href='#kotwica6'>6. Kontakt</a> <br>";
}
dymek.addEventListener('click',sekcje);

