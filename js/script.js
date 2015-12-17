function afficherTexteBd () {
document.getElementById('bd_js').innerHTML =
'<div style=\"background-color:#2DC800; border-radius: 45px; height:50px; padding:40px; padding-top:50px; padding-left:36px;\"> Découvrez ici l\'univers de la bande-dessinée, par toutatis !</div>';
}

function afficherTexteManga () {
  document.getElementById('manga_js').innerHTML=
  '<div style=\"background-color:#62A9FF; border-radius: 45px; height: 50px; padding:40px; padding-left:40px;\"> Plongez dans le monde varié du manga ! \"Ganbatte\" !</div>';
}

function afficherTexteRoman () {
document.getElementById('roman_js').innerHTML =
'<div style=\"background-color:#DC143C; border-radius: 45px; height:50px; padding:40px; padding-left:39px; padding-bottom: 50px;\">Honneur aux romans et aux épopées fantastiques que j\'affectione particulièrement !</div>';
}

function enleverTexte () {
 document.getElementById('bd_js').innerHTML = '';
 document.getElementById('manga_js').innerHTML = '';
 document.getElementById('roman_js').innerHTML = '';
}
