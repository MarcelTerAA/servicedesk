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
  { id:"demo", num:"Demo · ½ dag", title:"Oefendemo", subtitle:"Kennismaken met het examen", open:true, start:510,
    intro:"Een korte dienst om te wennen aan het oefenexamen: 3 e-mails en 1 klant aan de balie. Werk precies zoals op het examen: lees, beoordeel volgens de SLA, registreer in TOPdesk en beantwoord de melder.",
    mails:[
      { van:"Degruyter, Lieve", onderwerp:"Muisknoppen omdraaien", aanhef:"Beste collega van de servicedesk,",
        tekst:"Ik ben linkshandig en wil mijn muisknoppen omdraaien, dus klikken met de rechterknop ipv links. Hoe stel ik dat in?" },
      { van:"Walting, Frederike van der", onderwerp:"Printer foutmelding", aanhef:"Beste collega,",
        tekst:"De laserprinter op onze afdeling staat in storing. Op het display staat code B81565BC. We hebben de printer al een keer uit en weer aan gezet, maar dat helpt niet. Kunnen jullie ernaar kijken? Op de printer zit een sticker met nummer PR1001." },
      { van:"Groot, Pieter de", onderwerp:"Virusscanner op prive laptop", aanhef:"Geachte heer, mevrouw,",
        tekst:"Ik wil een virusscanner installeren op de laptop van mijn zoon. Wat is een goede gratis virusscanner?" }
    ],
    balie:[
      { naam:"Klein, Elles",
        vraag:"Het scherm van mijn Samsung telefoon staat erg donker. Kun je me uitleggen hoe ik de helderheid van het scherm kan aanpassen?" }
    ] },

  { id:"dag1", num:"Dag 1", title:"Servicedesk – Dag 1", subtitle:"Oefenexamen", open:true, start:484,
    intro:"Je werkt vandaag op de Servicedesk ICT van Het Verhalenhuis. In je postvak staan 9 e-mails en er komt een klant aan de balie. Verwerk elke melding volgens de SLA en de procedures, registreer alles in TOPdesk en laat de melder weten wat er gebeurt.",
    mails:[
      { van:"Ginneken, Erik van", onderwerp:"Bekabeling netwerk", aanhef:"Beste collega van de servicedesk,",
        tekst:"De huidige netwerkbekabeling in ons filiaal in Amsterdam moet worden herzien en geoptimaliseerd. Het doel is om de snelheid en betrouwbaarheid van de internetverbinding te verbeteren." },
      { van:"Heide, Renske van der", onderwerp:"Video's standaard afspelen met ander programma", aanhef:"Beste collega,",
        tekst:"Zodra ik een video (mp4) wil afspelen, wordt deze geopend in Windows Media Player. Ik vind dit programma niet echt gebruikersvriendelijk. Ik wil graag dat video's standaard in VLC media player worden afgespeeld. Hoe stel ik dit in?" },
      { van:"Hofman, Frits", onderwerp:"Website uit de lucht", aanhef:"Geachte heer, mevrouw,",
        tekst:"De intranetwebsite van ons bedrijf reageert niet. Tientallen mensen kunnen niet werken!" },
      { van:"Dekker, Leontine", onderwerp:"Aanvraag 2e beeldschem", aanhef:"Beste collega,",
        tekst:"Ik wil graag een 2e beeldscherm op mijn werkplek." },
      { van:"Groot, Pieter de", onderwerp:"Outlook handtekening", aanhef:"Beste medewerker van de servicedesk,",
        tekst:"Ik wil graag een handtekening automatisch in mijn Outlook E-mail hebben staan. Hoe doe ik dat?" },
      { van:"Flips, Dirk-Jan", onderwerp:"Wachtwoord reset van collega", aanhef:"Beste collega,",
        tekst:"Mijn collega Chan Po kan  niet op zijn  computer. Hij  is zijn wachtwoord  vergeten. Kun je dit resetten?" },
      { van:"Po, Chan", onderwerp:"Extra pagina bij printen", aanhef:"Beste servicedesk,",
        tekst:"Bij Word krijg ik steeds (bij het printen) een extra pagina met daarop auteursnaam en andere bijzonderheden. Zonde van het papier. Kun je dit voor me uitzetten?" },
      { van:"Elsacker, Nancy van", onderwerp:"Backup terugzetten", aanhef:"Beste collega van de helpdesk,",
        tekst:"Het bestand 'Jaarverslag 2023.pdf' dat in de map E:\\Jaarverslagen stond is verdwenen. Zelf kunnen we het bestand niet terugvinden in de prullenbak. Kunnen jullie een backup terugzetten? Het heeft geen haast, ons team heeft het bestand niet nodig nu. Volgende week heb ik het bestand wel nodig. Alvast dank." },
      { van:"Elkemed, Ibrahim", onderwerp:"Dubbele waarden in Excel", aanhef:"Beste servicedesk,",
        tekst:"In Excel heb ik een lijst met meer dan 10.000 schrijvers van boeken. Sommige schrijvers  komen meerdere keren voor. Kun je voor mij een instructie schrijven hoe ik ervoor kan zorgen dat elke schrijver maar één keer in de lijst voorkomt?" }
    ],
    balie:[
      { naam:"Grinsven, Hannes van",
        vraag:"Ik heb een Excel-werkblad met de namen van 250 boeken in kolom A (cel A2 t/m A251) en hun prijzen in kolom B. Ik wil graag weten wat de gemiddelde prijs van al deze boeken is. Ook wil ik de hoogste en de laagste prijs weten. Hoe doe ik dat?" }
    ] },

  { id:"dag2", num:"Dag 2", title:"Servicedesk – Dag 2", subtitle:"Oefenexamen", open:true, start:479,
    intro:"Je werkt vandaag op de Servicedesk ICT van Het Verhalenhuis. In je postvak staan 9 e-mails en er komt een klant aan de balie. Verwerk elke melding volgens de SLA en de procedures, registreer alles in TOPdesk en laat de melder weten wat er gebeurt.",
    mails:[
      { van:"Flips, Dirk-Jan", onderwerp:"Screensaver instellen", aanhef:"Beste collega van de servicedesk,",
        tekst:"Mijn scherm schakelt  na 5 minuten een screensaver in. Dan moet ik op een toets drukken en dan schakelt dit scherm zich weer in. Is het mogelijk de screensaver op 20 minuten in te stellen?" },
      { van:"Domst, Henk van", onderwerp:"Fotobewerkingssoftware", aanhef:"Beste collega,",
        tekst:"Voor het geven van een cursus wil ik de open source software PhotoDemon' laten zien. Ik kan deze software zelf niet installeren op mijn bedrijfslaptop, omdat ik geen administratorrechten heb. Kunnen jullie PhotoDemon voor me installeren?" },
      { van:"Caspers, Frank", onderwerp:"Server down", aanhef:"Geachte heer, mevrouw,",
        tekst:"Kan er naar de webserver gekeken worden? Er is geen internetverbinding." },
      { van:"Po, Chan", onderwerp:"Nieuwe beamer", aanhef:"Beste medewerker van de servicedesk,",
        tekst:"Ik wil thuis bij daglicht films bekijken op een beamer vanaf mijn werklaptop. Wat is een goede beamer tot € 1.000,00?" },
      { van:"Flips, Dirk-Jan", onderwerp:"Tijdzone bij reizen", aanhef:"Beste servicedesk,",
        tekst:"Ik ga naar New York voor een week en wil rechtsonder op mijn beeldscherm niet alleen de Nederlandse tijd zien, maar tegelijkertijd ook de tijd in New York . Hoe stel ik dat in?" },
      { van:"Bergen, Doeke van", onderwerp:"Nieuwe PC", aanhef:"Beste collega van de helpdesk,",
        tekst:"Ik  wil graag een nieuwe pc. De applicatie Photoshop is zo traag als ik afbeeldingen aan het bewerken ben." },
      { van:"Limback, Chris", onderwerp:"E-mailserver migratie", aanhef:"Beste collega van de servicedesk,",
        tekst:"De huidige e-mailserver moet worden gemigreerd naar een nieuwe, meer efficiënte en betrouwbare server. Het doel is om de e-mailcommunicatie binnen het bedrijf te verbeteren." },
      { van:"Groot, Pieter de", onderwerp:"Handtekening bij antwoorden", aanhef:"Beste collega,",
        tekst:"Bedankt voor jullie hulp met mijn handtekening, die staat nu onder mijn nieuwe e-mails. Maar als ik op een e-mail antwoord of hem doorstuur, staat de handtekening er niet onder. Hoe zorg ik ervoor dat dat ook gebeurt?" },
      { van:"Po, Chan", onderwerp:"Instructie voettekst in Word starten op 2e pagina", aanhef:"Geachte heer, mevrouw,",
        tekst:"Ik wil in Word een voettekst hebben met een paginanummering. Die moet starten op de 2e pagina en niet direct op de eerste. Kun je een instructie schrijven hoe ik dat kan doen?" }
    ],
    balie:[
      { naam:"Flips, Dirk-Jan",
        vraag:"Ik kan niet goed zien. Ik heb een nieuwe laptop met Windows en ik zou graag het vergrootglas willen gebruiken. Langere teksten wil ik ook laten voorlezen. Kun je me uitleggen hoe ik het vergrootglas makkelijk aanzet, en hoe ik de voorleesfunctie in- en uitschakel?" }
    ] },

  { id:"dag3", num:"Dag 3", title:"Servicedesk – Dag 3", subtitle:"Oefenexamen", open:true, start:488,
    intro:"Je werkt vandaag op de Servicedesk ICT van Het Verhalenhuis. In je postvak staan 9 e-mails en er komt een klant aan de balie. Verwerk elke melding volgens de SLA en de procedures, registreer alles in TOPdesk en laat de melder weten wat er gebeurt.",
    mails:[
      { van:"Wiel, Erik van de", onderwerp:"Nieuwe werkplek", aanhef:"Beste medewerker van de servicedesk,",
        tekst:"Over twee weken krijgen we op de afdeling HR gelukkig ondersteuning van een nieuwe medewerker. Hij moet in eerste instantie gebruik kunnen maken van de standaard administratieve pakketten. Kunnen jullie een werkplek voor hem inrichten?" },
      { van:"Po, Chan", onderwerp:"Cellen tellen in Excel", aanhef:"Beste servicedesk,",
        tekst:"Ik wil graag het aantal cellen tellen in Excel die gevuld zijn met een tekst. Hoe doe ik dat?" },
      { van:"Dieleman, Berry", onderwerp:"Exact gegevens naar SAP", aanhef:"Beste collega van de helpdesk,",
        tekst:"Ik wil graag adressen vanuit Exact importeren in SAP." },
      { van:"Witte, Tonnie de", onderwerp:"Nieuwe werkplek", aanhef:"Beste collega van de servicedesk,",
        tekst:"Ik wil graag een nieuwe werkplek aanvragen." },
      { van:"Beijering, Martin", onderwerp:"VPN op thuisnetwerk", aanhef:"Beste collega,",
        tekst:"Graag wil ik op mijn thuisnetwerk een VPN-verbinding instellen om gemakkelijk films te kunnen downloaden. Kun je dit voor me instellen?" },
      { van:"Degruyter, Lieve", onderwerp:"Access", aanhef:"Geachte heer, mevrouw,",
        tekst:"Ik wil graag upgraden naar Microsoft Professional. Ik heb  Access nodig om  de verschillende projecten te kunnen beheren." },
      { van:"Hofman, Frits", onderwerp:"Word paginanummering", aanhef:"Beste medewerker van de servicedesk,",
        tekst:"Ik wil graag een paginanummering onder mijn Worddocument hebben. Hoe doe ik dat?" },
      { van:"Elkemed, Ibrahim", onderwerp:"Beaufort installeren", aanhef:"Beste servicedesk,",
        tekst:"Mijn nieuwe laptop is uitgeleverd, maar Beaufort moet nog worden geïnstalleerd. Kunnen jullie dat op korte termijn voor mij doen?" },
      { van:"Degruyter, Lieve", onderwerp:"Instructie invoegen inhoudsopgave in Word", aanhef:"Beste collega van de helpdesk,",
        tekst:"Ik wil een automatische inhoudsopgave in Word invoegen. Hoe kan ik ervoor zorgen dat Word deze zelf maakt? Kun je me dat uitleggen?" }
    ],
    balie:[
      { naam:"Ginneken, Erik van",
        vraag:"Binnenkort moet ik voor het werk naar Griekenland. Het is handig als ik dan ook over de Griekse toetsenbordindeling kan beschikken. Kun je me uitleggen hoe ik naast het Nederlandse toetsenbord ook het Griekse toestsenbord installeer op mijn Windows laptop? Hoe kan ik eenvoudig wisselen tussen deze beide toesenbordindelingen?" }
    ] },

  { id:"dag4", num:"Dag 4", title:"Servicedesk – Dag 4", subtitle:"Oefenexamen", open:true, start:482,
    intro:"Je werkt vandaag op de Servicedesk ICT van Het Verhalenhuis. In je postvak staan 9 e-mails en er komt een klant aan de balie. Verwerk elke melding volgens de SLA en de procedures, registreer alles in TOPdesk en laat de melder weten wat er gebeurt.",
    mails:[
      { van:"Caspers, Frank", onderwerp:"Printer druk slecht af", aanhef:"Beste collega van de servicedesk,",
        tekst:"De laserprinter PR1005drukt alleen de eerste helft van een pagina af. De hele afdeling (drie personen) kan niet meer adrukken." },
      { van:"Ching, Hannes", onderwerp:"Optellen en gemiddelde in Excel", aanhef:"Beste collega,",
        tekst:"Ik wil een aantal getallen in Excel optellen en het gemiddelde ervan berekenen. Met welke functies doet ik dit?" },
      { van:"Hoogstra, Simone", onderwerp:"Verhuizing", aanhef:"Geachte heer, mevrouw,",
        tekst:"Onze afdeling wordt binnenkort verplaatst naar een nieuwe locatie. Dit zal waarschijnlijk invloed hebben op onze netwerktoegang en andere IT-gerelateerde zaken. Kunnen we een wijziging plannen om deze overgang soepel te laten verlopen?" },
      { van:"Hofman, Frits", onderwerp:"Instructie vulgreep in Excel", aanhef:"Beste medewerker van de servicedesk,",
        tekst:"Ik begrijp dat Excel een functie heet die vulgreep heet? Hoe werkt deze? Kun je een instructie maken?" },
      { van:"Bergen, Doeke van", onderwerp:"Nieuw account", aanhef:"Beste servicedesk,",
        tekst:"Wij krijgen een nieuwe collega. Er moet een nieuw account aangemaakt worden voor Johan de Witte." },
      { van:"Groot, Pieter de", onderwerp:"Weggevallen netwerk", aanhef:"Beste collega van de helpdesk,",
        tekst:"Alleen mijn netwerkverbindingen zijn weggevallen op de afdeling. Ik kan niet meer bij de bestanden op de server komen. Ik moet dat rapport over een uur af hebben voor de directie. Kan iemand met spoed langskomen?" },
      { van:"Groot, Pieter de", onderwerp:"Papier uit foute laden", aanhef:"Beste collega van de servicedesk,",
        tekst:"Het papier wordt door de printer uit de verkeerde lade gehaald. Hoe kan ik bij Word een andere lade kiezen? We kunnen nog wel doorwerken, maar de hele afdeling van 10 man heeft er last van." },
      { van:"Dieleman, Berry", onderwerp:"Printer installeren", aanhef:"Beste collega,",
        tekst:"Vandaag is onze nieuwe printer binnengekomen. Deze printer gaat onze oude printer PR1005 vervangen. Kunnen jullie de nieuwe printer installeren?" },
      { van:"Degruyter, Lieve", onderwerp:"Instructie grafiek maken in Excel", aanhef:"Geachte heer, mevrouw,",
        tekst:"Ik wil graag weten hoe je een grafiek kunt maken in Excel van getallen die in de tabel staan. Hoe maak ik eenvoudig een grafiek? Kun je een instructie maken?" }
    ],
    balie:[
      { naam:"Heijdemans, Hanneke",
        vraag:"In Excel houd ik de bezoekersaantallen van de bibliotheek per dag bij. Al die getallen onder elkaar zijn niet zo overzichtelijk. Ik wil er een grafiek van maken, en die grafiek moet op een apart tabblad komen. Hoe doe ik dat?" }
    ] },

  { id:"dag5", num:"Dag 5", title:"Servicedesk – Dag 5", subtitle:"Oefenexamen", open:true, start:486,
    intro:"Je werkt vandaag op de Servicedesk ICT van Het Verhalenhuis. In je postvak staan 9 e-mails en er komt een klant aan de balie. Verwerk elke melding volgens de SLA en de procedures, registreer alles in TOPdesk en laat de melder weten wat er gebeurt.",
    mails:[
      { van:"Dekker, Leontine", onderwerp:"Animatie toevoegen aan afbeelding", aanhef:"Beste medewerker van de servicedesk,",
        tekst:"Ik wil aan een afbeelding in een powerpointpresentatie een animatie toevoegen. Hoe moet ik dat doen?" },
      { van:"Degruyter, Lieve", onderwerp:"Vergeten wachtwoord", aanhef:"Beste servicedesk,",
        tekst:"Ik kan niet op mijn computer, want ik ben mijn wachtwoord vergeten. Kun je dit resetten?" },
      { van:"Hofman, Frits", onderwerp:"Intranet opnieuw onbereikbaar", aanhef:"Beste collega van de helpdesk,",
        tekst:"Gisteren was de intranetwebsite al uit de lucht en vandaag is het weer zo. Niemand op onze afdeling kan inloggen op het intranet, dus we kunnen ons werk niet doen. Kunnen jullie er met spoed naar kijken?" },
      { van:"Batenberk, Leontine van", onderwerp:"Back-up foto's privé smartphone", aanhef:"Beste collega van de servicedesk,",
        tekst:"Kun je me uitleggen hoe ik een back-up kan maken van de foto’s op mijn privé smartphone?" },
      { van:"Ganzefles, Mylo", onderwerp:"Persoonlijke website controleren", aanhef:"Beste collega,",
        tekst:"Kun je mijn persoonlijke website controleren? Het laadt heel langzaam." },
      { van:"Klein, Elles", onderwerp:"Visio drukt maar deels af", aanhef:"Geachte heer, mevrouw,",
        tekst:"Bij het printen komen de Visio tekeningen maar voor een deel op papier. Heeft dit probleem alleen met Visio te maken?\nGraag spoed! Ik moet de bouwtekeningen voor de nieuwe applicatie zo snel mogelijk versturen naar Bangalore in India." },
      { van:"Kamp, Wilco", onderwerp:"Voorwaardelijke opmaak in Excel", aanhef:"Beste medewerker van de servicedesk,",
        tekst:"In Excel houd ik de uitleentermijn bij van veelgevraagde boeken. In een van de kolommen staat het aantal dagen dat het boek uitgeleend is. Als het boek 14 dagen (en langer) uitgeleend is, moet de cel waarin het aantal dagen staat extra goed opvallen. Dit moet gebeuren door een gele achtergrond met een rode, vetgedrukte tekst.\nKun je voor mij een instructie schrijven hoe ik dat moet doen?" },
      { van:"Arjen Dirks", onderwerp:"Nieuwe versie dreamweaver", aanhef:"Beste servicedesk,",
        tekst:"Er is een nieuwe geteste versie van Dreamweaver. Willen jullie deze versie installeren bij alle medewerkers van de afdeling Administratie?" },
      { van:"Groot, Pieter de", onderwerp:"Instructie plaktoetsen aanzetten", aanhef:"Beste collega van de helpdesk,",
        tekst:"Ik heb recent mijn  arm gebroken en moet nu met één hand typen. Ik kan alleen niet meer met twee handen tegelijk toetsen indrukken zoals CTRL+B om iets vet te maken. Ik weet dat er plaktoetsen zijn om dit op te lossen. Kun je een instructie maken hoe je de plaktoetsen aanzet en daarna kunt gebruiken?" }
    ],
    balie:[
      { naam:"Pas, Yvonne van de",
        vraag:"Ik heb een afbeelding in een Word-document die ik wil aanpassen. De afbeelding staat op de kop. Ik wil hem bijsnijden en hij moet half zo groot worden. Hoe doe ik dat?" }
    ] },

  { id:"dag6", num:"Dag 6", title:"Servicedesk – Dag 6", subtitle:"Oefenexamen", open:true, start:481,
    intro:"Je werkt vandaag op de Servicedesk ICT van Het Verhalenhuis. In je postvak staan 9 e-mails en er komt een klant aan de balie. Verwerk elke melding volgens de SLA en de procedures, registreer alles in TOPdesk en laat de melder weten wat er gebeurt.",
    mails:[
      { van:"Dekker, Leontine", onderwerp:"Tweede beeldscherm geeft geen beeld", aanhef:"Beste collega van de servicedesk,",
        tekst:"Mijn tweede beeldscherm is gisteren geleverd en aangesloten, maar het scherm blijft zwart. Ik kan nog wel werken op mijn laptopscherm, maar dat is erg onhandig. Kunnen jullie ernaar kijken?" },
      { van:"Domst, Henk van", onderwerp:"App installeren op smartphone collega", aanhef:"Beste collega,",
        tekst:"Ik heb een handige app op mijn werktelefoon. Kun je die ook installeren op de telefoon van Leontine Dekker?" },
      { van:"Wiel, Erik van de", onderwerp:"Toegang gedeelde map voor nieuwe medewerker", aanhef:"Geachte heer, mevrouw,",
        tekst:"Als hoofd van de afdeling HR heb ik eerder een nieuwe werkplek aangevraagd voor onze nieuwe medewerker. Hij begint volgende week. Hij heeft ook lees- en schrijfrechten nodig op de gedeelde map HR op de server. Kunnen jullie dat regelen?" },
      { van:"Hart, Dorien 't", onderwerp:"E-mail account collega controleren", aanhef:"Beste medewerker van de servicedesk,",
        tekst:"Kun je de instellingen van het e-mailaccount van Pieter de Groot controleren? Hij kan geen e-mails verzenden." },
      { van:"Ching, Hannes", onderwerp:"Instructie celopmaak in Excel", aanhef:"Beste servicedesk,",
        tekst:"Ik wil graag een instructie. Als ik in Excel het getal 365000 typ, dan wil ik eigenlijk dat Excel er automatisch euro's van maakt dus € 365.000,00. Hoe kan ik dit instellen voor hele kolommen?" },
      { van:"Walting, Frederike van der", onderwerp:"Printer PR1001 papierstoring", aanhef:"Beste collega van de helpdesk,",
        tekst:"De laserprinter PR1001 op onze afdeling is gerepareerd na mijn eerdere melding, maar nu geeft hij steeds een papierstoring. We hebben het papier er al uitgehaald en de printer opnieuw opgestart. Niemand op de afdeling kan nu afdrukken; ander werk kunnen we wel doen." },
      { van:"Dekker, Leontine", onderwerp:"Animaties automatisch laten starten", aanhef:"Beste collega van de servicedesk,",
        tekst:"Het toevoegen van een animatie aan mijn afbeelding is gelukt. Nu wil ik dat de animaties in mijn PowerPoint vanzelf na elkaar starten, zonder dat ik steeds moet klikken. Hoe doe ik dat?" },
      { van:"Dieleman, Berry", onderwerp:"Oude printer PR1005 verwijderen", aanhef:"Beste collega,",
        tekst:"De nieuwe printer is geïnstalleerd, dank daarvoor. De oude printer PR1005 staat nog wel in de printerlijst van alle computers op onze afdeling en het apparaat zelf staat nog op de gang. Kunnen jullie de oude printer van de computers verwijderen en het apparaat laten ophalen?" },
      { van:"Zanten, Dennis van", onderwerp:"Applicatie verwijderen MacOS", aanhef:"Geachte heer, mevrouw,",
        tekst:"Sinds kort heb ik een MacBook als werkcomputer. Kun je voor mij een instructie schrijven hoe ik een applicatie verwijder van deze laptop?" }
    ],
    balie:[
      { naam:"Hart, Dorien 't",
        vraag:"Ik werk aan een belangrijk document in Word. De eerste pagina's zijn staand, maar vanaf de bijlagen moeten de pagina's liggend zijn. Ik weet niet hoe ik dat doe. Kun je me helpen?" }
    ] }
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
