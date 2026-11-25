/* Oefenexamens B1-K2 – meldingen per dag (bron: Excel "Bijlage 6 Meldingen…", Print Meldingen + Balie).
   Alleen wat de STUDENT mag zien: geen uitwerkingen (deze repo is openbaar).

   Een dag vullen:
   - mails: { van:'Achternaam, Voornaam tussenvoegsel', onderwerp, aanhef, tekst }
   - balie: { naam:'Achternaam, Voornaam', vraag:'wat de klant aan de balie zegt (ik-vorm)' }
   - zet open:true
   start = tijd van de eerste melding in minuten na middernacht (480 = 08:00). */

var LEERDOELEN = [
  'Meldingen aannemen en controleren of ze onder de SLA vallen',
  'Soort melding, categorie, impact, urgentie en prioriteit bepalen',
  'Kiezen: zelf oplossen, doorzetten naar de juiste specialist of afwijzen',
  'Professioneel communiceren met de scripts, per e-mail en aan de balie',
  'Alle meldingen volledig en correct registreren in TOPdesk'
];
var AFRONDING = [
  'Registreer alle meldingen correct in TOPdesk',
  'Beantwoord alle e-mails met het juiste script en zet je antwoord in de registratie',
  'Sla je registraties als .PDF op in je portfolio-map'
];

var DAGEN = [
  { id:'demo', num:'Demo · ½ dag', title:'Oefendemo', subtitle:'Kennismaken met het examen', open:false, start:510,
    intro:'Een korte dienst om te wennen aan het oefenexamen: 3 e-mails en 1 klant aan de balie. Werk precies zoals op het examen: lees, beoordeel volgens de SLA, registreer in TOPdesk en beantwoord de melder.',
    mails:[], balie:[] },

  { id:'dag1', num:'Dag 1', title:'Servicedesk – Dag 1', subtitle:'Oefenexamen', open:true, start:484,
    intro:'Je werkt vandaag op de Servicedesk ICT van Het Verhalenhuis. In je postvak staan 9 e-mails en er komt een klant aan de balie. Verwerk elke melding volgens de SLA en de procedures, registreer alles in TOPdesk en laat de melder weten wat er gebeurt.',
    mails:[
      { van:'Ginneken, Erik van', onderwerp:'Bekabeling netwerk', aanhef:'Beste collega van de servicedesk,',
        tekst:'De huidige netwerkbekabeling in ons filiaal in Amsterdam moet worden herzien en geoptimaliseerd. Het doel is om de snelheid en betrouwbaarheid van de internetverbinding te verbeteren.' },
      { van:'Heide, Renske van der', onderwerp:"Video's standaard afspelen met ander programma", aanhef:'Beste collega,',
        tekst:"Zodra ik een video (mp4) wil afspelen, wordt deze geopend in Windows Media Player. Ik vind dit programma niet echt gebruikersvriendelijk. Ik wil graag dat video's standaard in VLC media player worden afgespeeld. Hoe stel ik dit in?" },
      { van:'Hofman, Frits', onderwerp:'Website uit de lucht', aanhef:'Geachte heer, mevrouw,',
        tekst:'De intranetwebsite van ons bedrijf reageert niet. Tientallen mensen kunnen niet werken!' },
      { van:'Dekker, Leontine', onderwerp:'Aanvraag 2e beeldschem', aanhef:'Beste collega,',
        tekst:'Ik wil graag een 2e beeldscherm op mijn werkplek.' },
      { van:'Groot, Pieter de', onderwerp:'Outlook handtekening', aanhef:'Beste medewerker van de servicedesk,',
        tekst:'Ik wil graag een handtekening automatisch in mijn Outlook E-mail hebben staan. Hoe doe ik dat?' },
      { van:'Flips, Dirk-Jan', onderwerp:'Wachtwoord reset van collega', aanhef:'Beste collega,',
        tekst:'Mijn collega Chan Po kan niet op zijn computer. Hij is zijn wachtwoord vergeten. Kun je dit resetten?' },
      { van:'Po, Chan', onderwerp:'Extra pagina bij printen', aanhef:'Beste servicedesk,',
        tekst:'Bij Word krijg ik steeds (bij het printen) een extra pagina met daarop auteursnaam en andere bijzonderheden. Zonde van het papier. Kun je dit voor me uitzetten?' },
      { van:'Elsacker, Nancy van', onderwerp:'Backup terugzetten', aanhef:'Beste collega van de helpdesk,',
        tekst:"Het bestand 'Jaarverslag 2023.pdf' dat in de map E:\\Jaarverslagen stond is verdwenen. Zelf kunnen we het bestand niet terugvinden in de prullenbak. Kunnen jullie een backup terugzetten? Het heeft geen haast, ons team heeft het bestand niet nodig nu. Volgende week heb ik het bestand wel nodig. Alvast dank." },
      { van:'Elkemed, Ibrahim', onderwerp:'Dubbele waarden in Excel', aanhef:'Beste servicedesk,',
        tekst:'In Excel heb ik een lijst met meer dan 10.000 schrijvers van boeken. Sommige schrijvers komen meerdere keren voor. Kun je voor mij een instructie schrijven hoe ik ervoor kan zorgen dat elke schrijver maar één keer in de lijst voorkomt?' }
    ],
    balie:[
      { naam:'Grinsven, Hannes van',
        vraag:'Ik heb een Excel-werkblad met de namen van 250 boeken in kolom A (cel A2 t/m A251) en hun prijzen in kolom B. Ik wil graag weten wat de gemiddelde prijs van al deze boeken is. Ook wil ik de hoogste en de laagste prijs weten. Hoe doe ik dat?' }
    ] },

  { id:'dag2', num:'Dag 2', title:'Servicedesk – Dag 2', subtitle:'Oefenexamen', open:false, mails:[], balie:[] },
  { id:'dag3', num:'Dag 3', title:'Servicedesk – Dag 3', subtitle:'Oefenexamen', open:false, mails:[], balie:[] },
  { id:'dag4', num:'Dag 4', title:'Servicedesk – Dag 4', subtitle:'Oefenexamen', open:false, mails:[], balie:[] },
  { id:'dag5', num:'Dag 5', title:'Servicedesk – Dag 5', subtitle:'Oefenexamen', open:false, mails:[], balie:[] },
  { id:'dag6', num:'Dag 6', title:'Servicedesk – Dag 6', subtitle:'Oefenexamen', open:false, mails:[], balie:[] }
];

/* Man (m) of vrouw (v) per naam, alleen voor het poppetje. Onbekend = neutraal poppetje. */
var GESLACHT_EXTRA = {
  'Erik van Ginneken':'m', 'Frits Hofman':'m', 'Pieter de Groot':'m', 'Dirk-Jan Flips':'m', 'Ibrahim Elkemed':'m',
  'Hannes van Grinsven':'m', 'Hannes Ching':'m', 'Frank Caspers':'m', 'Doeke van Bergen':'m', 'Berry Dieleman':'m',
  'Martin Beijering':'m', 'Henk van Domst':'m', 'Erik van de Wiel':'m', 'Arjen Dirks':'m', 'Wilco Kamp':'m', 'Dennis van Zanten':'m',
  'Renske van der Heide':'v', 'Leontine Dekker':'v', 'Nancy van Elsacker':'v', 'Lieve Degruyter':'v', 'Elles Klein':'v',
  'Frederike van der Walting':'v', "Dorien 't Hart":'v', 'Leontine van Batenberk':'v', 'Simone Hoogstra':'v',
  'Hanneke Heijdemans':'v', 'Yvonne van de Pas':'v'
};
