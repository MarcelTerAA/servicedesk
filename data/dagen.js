/* Oefenexamen B1-K2 – meldingen per dag.
   Alleen wat de STUDENT mag zien: geen uitwerkingen (de repo is openbaar).
   Een nieuwe dag toevoegen = een object in DAGEN met mails + balie, en open:true zetten. */
window.DAGEN = {
  1: {
    open: true,
    titel: 'Dag 1',
    mails: [
      { id: 'm1', tijd: '08:04', van: 'Ginneken, Erik van', onderwerp: 'Bekabeling netwerk',
        aanhef: 'Beste collega van de servicedesk,',
        tekst: 'De huidige netwerkbekabeling in ons filiaal in Amsterdam moet worden herzien en geoptimaliseerd. Het doel is om de snelheid en betrouwbaarheid van de internetverbinding te verbeteren.' },
      { id: 'm2', tijd: '08:11', van: 'Heide, Renske van der', onderwerp: "Video's standaard afspelen met ander programma",
        aanhef: 'Beste collega,',
        tekst: "Zodra ik een video (mp4) wil afspelen, wordt deze geopend in Windows Media Player. Ik vind dit programma niet echt gebruikersvriendelijk. Ik wil graag dat video's standaard in VLC media player worden afgespeeld. Hoe stel ik dit in?" },
      { id: 'm3', tijd: '08:19', van: 'Hofman, Frits', onderwerp: 'Website uit de lucht',
        aanhef: 'Geachte heer, mevrouw,',
        tekst: 'De intranetwebsite van ons bedrijf reageert niet. Tientallen mensen kunnen niet werken!' },
      { id: 'm4', tijd: '08:26', van: 'Dekker, Leontine', onderwerp: 'Aanvraag 2e beeldschem',
        aanhef: 'Beste collega,',
        tekst: 'Ik wil graag een 2e beeldscherm op mijn werkplek.' },
      { id: 'm5', tijd: '08:33', van: 'Groot, Pieter de', onderwerp: 'Outlook handtekening',
        aanhef: 'Beste medewerker van de servicedesk,',
        tekst: 'Ik wil graag een handtekening automatisch in mijn Outlook E-mail hebben staan. Hoe doe ik dat?' },
      { id: 'm6', tijd: '08:41', van: 'Flips, Dirk-Jan', onderwerp: 'Wachtwoord reset van collega',
        aanhef: 'Beste collega,',
        tekst: 'Mijn collega Chan Po kan niet op zijn computer. Hij is zijn wachtwoord vergeten. Kun je dit resetten?' },
      { id: 'm7', tijd: '08:47', van: 'Po, Chan', onderwerp: 'Extra pagina bij printen',
        aanhef: 'Beste servicedesk,',
        tekst: 'Bij Word krijg ik steeds (bij het printen) een extra pagina met daarop auteursnaam en andere bijzonderheden. Zonde van het papier. Kun je dit voor me uitzetten?' },
      { id: 'm8', tijd: '08:55', van: 'Elsacker, Nancy van', onderwerp: 'Backup terugzetten',
        aanhef: 'Beste collega van de helpdesk,',
        tekst: "Het bestand 'Jaarverslag 2023.pdf' dat in de map E:\\Jaarverslagen stond is verdwenen. Zelf kunnen we het bestand niet terugvinden in de prullenbak. Kunnen jullie een backup terugzetten? Het heeft geen haast, ons team heeft het bestand niet nodig nu. Volgende week heb ik het bestand wel nodig. Alvast dank." },
      { id: 'm9', tijd: '09:02', van: 'Elkemed, Ibrahim', onderwerp: 'Dubbele waarden in Excel',
        aanhef: 'Beste servicedesk,',
        tekst: 'In Excel heb ik een lijst met meer dan 10.000 schrijvers van boeken. Sommige schrijvers komen meerdere keren voor. Kun je voor mij een instructie schrijven hoe ik ervoor kan zorgen dat elke schrijver maar één keer in de lijst voorkomt?' }
    ],
    balie: { aantal: 1 }
  },
  2: { open: false, titel: 'Dag 2' },
  3: { open: false, titel: 'Dag 3' },
  4: { open: false, titel: 'Dag 4' }
};
