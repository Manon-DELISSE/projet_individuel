function afficherTexteBd () {
document.getElementById('bd_js').innerHTML =
'<div style=\"background-color:#2DC800; border-radius: 45px; height:60px; padding:40px; padding-left:60px;\"> Découvrez ici l\'univers merveilleux de la bande-dessinée, par toutatis !</div>';
}

function afficherTexteManga () {
  document.getElementById('manga_js').innerHTML=
  '<div style=\"background-color:#62A9FF; border-radius: 45px; height: 60px; padding:40px; padding-left:60px;\"> Plongez dans le monde varié du manga ! \"Gambatte\" !</div>';
}

function afficherTexteRoman () {
document.getElementById('roman_js').innerHTML =
'<div style=\"background-color:#DC143C; border-radius: 45px; height:60px; padding:40px; padding-left:60px; padding-bottom: 50px;\">Honneur aux romans et particulièrement aux épopées fantastiques que j\'affectione !</div>';
}

function enleverTexte () {
 document.getElementById('bd_js').innerHTML = '';
 document.getElementById('manga_js').innerHTML = '';
 document.getElementById('roman_js').innerHTML = '';
}
