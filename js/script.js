// Page d'accueil//
var texteBd = '<div style=\"background-color:#2DC800; border-radius: 45px; height:50px; padding:40px; padding-top:50px; padding-left:36px;\"> Découvrez ici l\'univers de la bande-dessinée, par toutatis !"</div>';
var texteManga = '<div style=\"background-color:#62A9FF; border-radius: 45px; height: 50px; padding:40px; padding-left:40px;\"> Plongez dans le monde varié du manga ! \"Ganbatte\" !</div>';
var texteRoman = '<div style=\"background-color:#DC143C; border-radius: 45px; height:50px; padding:40px; padding-left:39px; padding-bottom: 50px;\">Honneur aux romans et aux épopées fantastiques que j\'affectione particulièrement !</div>'
//Eragon//
var tomeEragon = '<span>Tome 1 : Eragon, Tome 2 : L\'ainé, Tome 3 : Brisingr, Tome 4 : L\'Héritage</span>'
var sommaireEragon = '<span>Alors que l\'ère des dragonniers est révolue et que la population est sous le contrôle d\'un tyran chevaucheur de dragon, Eragon, un jeune fermier, trouve un jour en chassant un étrange oeuf. Il ne savait pas que cette découverte allait changer sa vie et celle de toute une contrée...</span>';
var dateEragon = '<span>Première parution aux Etats-Unis : 2003</span>'
//Harry Potter//
var tomeHp = '<span>Tome 1 : A l\'école des sorciers, Tome 2 : Et la Chambre des Secrets, Tome 3 : Le Prisonnier d\'Azkaban, Tome 4 : Et la Coupe de Feu, Tome 5 : Et l\'Ordre du Phénix, Tome 6 : Et le Prince de Sang Mêlé, Tome 7 : Et les Reliques de la Mort.</span>'
var sommaireHp = '<span>Les aventures d\'un apprenti sorcier nommé Harry Potter et de ses amis Ron Weasley et Hermione Granger à l\'école de sorcellerie Poudlard, dirigée par Albus Dumbledore. L\'intrigue principale de la série met en scène le combat du jeune Harry Potter contre un mage noir réputé invincible, Lord Voldemort, qui a tué autrefois ses parents ; à la tête d\'un clan de mages noirs, les Mangemorts, Voldemort cherche depuis des décennies à prendre le pouvoir sur le monde des sorciers.</span>'
var dateHp = '<span>Première parution en Angleterre : 1997</span>'
//Les Chevaliers d'Emeraude//
var tomeLce ='<span>Douze tomes : Le Feu dans le ciel, Les Dragons de l\'Empereur Noir, Piège au Royaume des Ombres, La Princesse Rebelle, L\'île des Lézards, Le Journal d\'Onyx, L\'Enlèvement, Les Dieux Déchus, L\'Héritage de Danalieth, Représailles, La Justice Céleste, Irianeth</span>'
var sommaireLce ='<span>Enkidiev, continent peuplé d\'hommes, d\'elfes, de Fées est, depuis cinq cents ans, en paix après une guerre contre l\'Empereur Noir Amecareth, souverain d\'Irianeth, l\’empire des hommes-insectes situé sur le continent éponyme, et de civilisations peu commodes, mais asservies. Celui-ci décide de tenter une seconde fois de conquérir Enkidiev sur les conseils de son sorcier, Asbeth. Le seul espoir de survie d\'Enkidiev réside dans la résurrection de l\'ordre des Chevaliers d\'Émeraude par le roi Émeraude 1er. Les Chevaliers devront protéger la fille de l\'Empereur Noir, Kira.</span>'
var dateLce = '<span>Première parution au Québec : 2003</span>'

function afficherTexteBd () {
  document.getElementById('bd_js').innerHTML = texteBd;
}

function afficherTexteManga () {
  document.getElementById('manga_js').innerHTML= texteManga;
}

function afficherTexteRoman () {
  document.getElementById('roman_js').innerHTML = texteRoman;
}

function resumeEragon () {
  document.getElementById('book').innerHTML = tomeEragon;
  document.getElementById('summary').innerHTML = sommaireEragon;
  document.getElementById('date').innerHTML = dateEragon;
}

function resumeHp () {
  document.getElementById('book').innerHTML = tomeHp;
  document.getElementById('summary').innerHTML = sommaireHp;
  document.getElementById('date').innerHTML = dateHp;
}

function resumeLce () {
  document.getElementById('book').innerHTML = tomeLce;
  document.getElementById('summary').innerHTML = sommaireLce;
  document.getElementById('date').innerHTML = dateLce;
}

function enleverTexte () {
  document.getElementById('bd_js').innerHTML = '';
  document.getElementById('manga_js').innerHTML = '';
  document.getElementById('roman_js').innerHTML = '';
}

function textNone () {
  document.getElementById('book').innerHTML = '<p>Tomes parus</p>';
  document.getElementById('summary').innerHTML = '<p>Synopsis</p>';
  document.getElementById('date').innerHTML = '<p>Date de parution</p>';
}
