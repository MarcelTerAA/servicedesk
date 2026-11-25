/* Naslag: Bijlage 1 SLA + Bijlage 2 Procedures en scripts (Het Verhalenhuis).
   Ook de keuzelijsten van het registratieformulier komen hieruit. */
window.KEUZES = {
  soort: ['Gebruikersvraag', 'Informatieverzoek', 'Incident', 'Storing', 'Wijzigingsverzoek'],
  categorie: {
    'Netwerk hardware': ['Servers', 'Routers', 'Bekabeling', 'Printers', 'Switches', 'Wall outlets', 'Hubs', 'Telefooncentrales'],
    'Werkplek hardware': ["PC's", 'Laptops', 'Monitoren', 'Toetsenborden', 'Muizen', 'Tablets', 'Beamers', 'Telefoons', 'Overige werkplek hardware'],
    'Besturingssystemen': ['Android', 'Linux', 'Windows', 'Mac OS', 'Unix'],
    'Kantoorapplicaties': ['Access', 'Excel', 'Internet Explorer', 'Chrome', 'Outlook (Exchange)', 'PowerPoint', 'Visio', 'Word', 'Libre Office', 'Overige kantoorapplicaties'],
    'Middelen': ['Airco', 'Audiovisuele middelen', 'Koffieapparaten', 'Kopieerapparaten'],
    'Specifieke applicaties': ['Beaufort', 'TOPdesk', 'Dreamweaver', 'SAP', 'Exact (ERP)'],
    'Diensten': ['Autorisatie', 'Back-up retrieval', 'E-mail', 'Nieuwe gebruiker', 'Nieuwe werkplek', 'Verhuizing', 'Voorraad en logistiek', 'Security']
  },
  impact: ['Individu', 'Afdeling / team', 'Vestiging', 'Een klant', 'Alle klanten'],
  urgentie: ['Kan werken', 'Kan deels werken', 'Kan niet werken'],
  prioriteit: ['P1 – 15 minuten', 'P2 – 30 minuten', 'P3 – 1 uur', 'P4 – 2 uur', 'P5 – 4 uur', 'P6 – 8 uur', 'P7 – 1 dag'],
  status: ['Geregistreerd', 'In behandeling', 'Toegekend', 'On hold', 'Afgehandeld', 'Afgewezen'],
  behandelaar: [
    'Eerste lijn (ikzelf)',
    'Informatisering & Automatisering – Hajo Kootstra',
    'Hoofd automatisering – Marcel Offermans',
    'Systeembeheer – John Hendrikx',
    'Systeembeheer – Benno Richters',
    'Applicatiebeheer – Inge Meijer',
    'Applicatiebeheer – Arjen Dirks',
    'Technische dienst – Berry Dielemans',
    'Technische dienst – Johan Cornelissen',
    'Hoofd technische dienst – Martin Beijering'
  ]
};

window.NASLAG = [
{ id: 'sla', titel: 'SLA', html: `
<h3>Bijlage 1 – Service Level Agreement</h3>
<p class="klein">Het Verhalenhuis · versie 1.0</p>
<h4>Onderdelen van het contract</h4>
<p>De volgende onderdelen van de ICT-infrastructuur vallen onder deze SLA.</p>
<div class="kolommen">
<div><b>Netwerk hardware</b><br>Servers · Routers · Bekabeling · Printers · Switches · Wall outlets · Hubs · Telefooncentrales</div>
<div><b>Werkplek hardware</b><br>PC's · Laptops · Monitoren · Toetsenborden · Muizen · Beamers · Telefoons · Overige hardware</div>
<div><b>Besturingssystemen</b><br>Android · Linux · Windows · Mac OS · Unix</div>
<div><b>Kantoorapplicaties</b><br>Access · Excel · Internet Explorer · Chrome · Outlook (Exchange) · PowerPoint · Visio · Word · Libre Office · Overige kantoorapplicaties</div>
<div><b>Middelen</b><br>Airco · Audiovisuele middelen · Koffieapparaten · Kopieerapparaten</div>
<div><b>Specifieke applicaties</b><br>Beaufort · TOPdesk · Dreamweaver · SAP · Exact (ERP)</div>
<div><b>Diensten</b><br>Autorisatie · Back-up retrieval · E-mail · Nieuwe gebruiker · Nieuwe werkplek · Verhuizing · Voorraad en logistiek · Security</div>
</div>
<h4>Aannemen</h4>
<p>Er worden alleen meldingen aangenomen van gebruikers die in het servicemanagementsysteem staan. Staat een gebruiker niet in het servicemanagementsysteem, dan wordt de melding niet aangenomen en niet geregistreerd.</p>
<h4>Categorieën</h4>
<p>De servicedesk neemt alléén meldingen aan in deze ondersteuningscategorieën: gebruikersvragen, informatieverzoeken, wijzigingsverzoeken, incidenten en storingen.</p>
<h4>Afwijzen</h4>
<p>De volgende zaken worden standaard afgewezen:</p>
<ul>
<li>Onderwerpen die geen onderdeel van dit contract zijn.</li>
<li>Onderwerpen die niet binnen de genoemde categorieën vallen.</li>
<li>Vragen over privé-apparaten of -software.</li>
<li>Vragen om iets te doen voor een andere gebruiker / uit naam van een andere gebruiker.</li>
<li>Als de aanvraag is gedaan door het hoofd of de manager van de afdeling voor een andere gebruiker, dan wordt het verzoek <b>niet</b> afgewezen. Dan gaat het om een wijzigingsverzoek.</li>
</ul>
<p>Deze meldingen worden wel geregistreerd in het servicemanagementsysteem voor latere evaluatie.</p>
<h4>Prioriteitenmatrix</h4>
<p>Er wordt gewerkt met zeven prioriteiten, elk met een eigen doorlooptijd.</p>
<table class="matrix">
<tr><th>Impact ↓ / Urgentie →</th><th>Kan werken</th><th>Kan deels werken</th><th>Kan niet werken</th></tr>
<tr><th>Individu</th><td>P7 / 1 dag</td><td>P6 / 8 uur</td><td>P5 / 4 uur</td></tr>
<tr><th>Afdeling / team</th><td>P5 / 4 uur</td><td>P4 / 2 uur</td><td>P3 / 1 uur</td></tr>
<tr><th>Vestiging</th><td>P4 / 2 uur</td><td>P3 / 1 uur</td><td>P2 / 30 minuten</td></tr>
<tr><th>Een klant</th><td>P4 / 2 uur</td><td>P2 / 30 minuten</td><td>P1 / 15 minuten</td></tr>
<tr><th>Alle klanten</th><td>P3 / 1 uur</td><td>P2 / 30 minuten</td><td>P1 / 15 minuten</td></tr>
</table>
<h4>Privacy en wetgeving</h4>
<ul>
<li>Er wordt geen privé-informatie van medewerkers doorgegeven.</li>
<li>Er wordt alleen software gebruikt waarvoor voldoende licenties aanwezig zijn.</li>
<li>Bedrijfssoftware wordt niet geïnstalleerd op privé-hardware van medewerkers.</li>
<li>Er wordt gewerkt volgens de geldende wetgeving.</li>
</ul>
<h4>Wijzigingsverzoeken</h4>
<p>Wijzigingsverzoeken mogen alleen aangevraagd worden via e-mail.</p>
<h4>Procedureel werken</h4>
<p>Incidenten, storingen, gebruikersvragen en wijzigingsaanvragen worden in behandeling genomen volgens de geldende werkwijze, zie Bijlage 2 – Procedures en scripts.</p>
`},
{ id: 'procedure', titel: 'Procedure', html: `
<h3>Hoofdstuk 1 – Procedure melding verwerken</h3>
<ol>
<li>Neem de melding aan.</li>
<li>Zoek de melder op in het servicemanagementsysteem. Komt de melder niet voor? Wijs de aanvraag dan af. De aanvraag hoeft niet geregistreerd te worden <i>[script 2.1 Controle aanmelder]</i>.</li>
<li>Bepaal wat voor type melding het is: een gebruikersvraag, een informatieverzoek, een incident of een wijzigingsverzoek.</li>
<li>Categoriseer op type en onderwerp.</li>
<li>Prioriteer de melding en bepaal de doorlooptijd.</li>
<li>Beoordeel of je de melding mag afhandelen door de SLA te controleren. Valt de melding niet onder de SLA?
  <ul>
  <li>Wijs de melding af <i>[script 2.2 SLA controle]</i>.</li>
  <li>Voer de melding in het registratiesysteem in met status <b>Afgewezen</b>.</li>
  <li>Vermeld in het actieveld de reden van de afwijzing.</li>
  <li>Categorie en subcategorie hoeven niet ingevuld te worden.</li>
  <li>De melding wordt niet afgemeld.</li>
  </ul></li>
<li>Bepaal voor gebruikersvragen en informatieverzoeken of je ze zelf mag beantwoorden of moet doorzetten naar de tweede lijn. Zelf beantwoorden → 1.1. Doorzetten → 1.3.</li>
<li>Bepaal voor incidenten en storingen of je ze zelf mag oplossen of moet doorzetten naar de tweede lijn. Zelf oplossen → 1.2. Doorzetten → 1.3.</li>
<li>Wijzigingsverzoeken worden altijd doorgezet naar de tweede lijn → 1.4.</li>
<li>Laat de melder weten welke actie je gaat nemen, voor alle typen meldingen <i>[script 2.4]</i>.</li>
<li>Als je de melding zelf afhandelt, rond de melding na afronding af <i>[script 2.4]</i>.</li>
<li>Documenteer de melding door deze af te drukken.</li>
</ol>
<h4>1.1 Zelf beantwoorden van de gebruikersvraag (eerste lijn)</h4>
<ol><li>Beantwoord de gebruikersvraag per e-mail of mondeling aan de balie.</li><li>Maak een melding aan in het registratiesysteem op naam van de melder.</li><li>Noteer de melding duidelijk en compleet.</li><li>Noteer de actie die je hebt ondernomen. Vermeld in het actieveld welk antwoord je hebt gegeven.</li><li>Registreer de bestede tijd.</li><li>Meld de melding af indien gereed.</li><li>Breng de melder via e-mail op de hoogte dat de melding is afgemeld.</li></ol>
<h4>1.2 Zelf oplossen van een incident of storing (eerste lijn)</h4>
<ol><li>Los de storing op.</li><li>Test of de storing verholpen is.</li><li>Maak een melding aan in het registratiesysteem op naam van de melder.</li><li>Noteer de melding duidelijk en compleet.</li><li>Noteer de actie die je hebt ondernomen: wat je gedaan hebt en hoe je getest hebt.</li><li>Registreer de bestede tijd.</li><li>Meld de melding af indien gereed.</li><li>Breng de melder via e-mail op de hoogte dat de melding is afgemeld.</li></ol>
<h4>1.3 Melding doorzetten naar de tweede lijn</h4>
<ol><li>Maak een tweedelijnsmelding aan voor de melder.</li><li>Noteer de melding duidelijk en compleet.</li><li>Geef de melding door aan de juiste specialist (escalatiematrix, hoofdstuk 3).</li><li>Noteer in het actieveld de gewenste acties.</li><li>Registreer de bestede tijd.</li><li>Breng de melder via e-mail op de hoogte dat de melding is doorgezet naar een collega.</li></ol>
<h4>1.4 Wijzigingsverzoeken</h4>
<ol><li>Maak een eerstelijnsmelding aan voor de melder.</li><li>Kies als soort melding <b>Wijzigingsverzoek</b>.</li><li>Escaleer de melding naar de tweede lijn.</li><li>Kies bij "Behandelaar" de juiste specialist (escalatiematrix, hoofdstuk 3).</li><li>Bepaal de soort wijziging: eenvoudig of uitgebreid (escalatiematrix). Eenvoudige wijzigingen krijgen de status <b>Toegekend</b>. Uitgebreide wijzigingen krijgen de status <b>On hold</b>.</li><li>Noteer de melding duidelijk en compleet.</li><li>Registreer de bestede tijd.</li><li>Breng de melder via e-mail op de hoogte dat de melding is doorgezet naar een collega.</li></ol>
`},
{ id: 'scripts', titel: 'Scripts', html: `
<h3>Hoofdstuk 2 – Scripts</h3>
<p>Bij het verwerken van een melding volgt iedere medewerker hetzelfde script. Zo krijgen alle melders dezelfde behandeling. Per script zijn er reacties voor de mail en voor de balie. Als je twijfelt wat je moet doen, vraag dan je leidinggevende om advies.</p>
<h4>2.1 Controle aanmelder</h4>
<p><b>Mail</b> – Zoek de naam op in het servicedesksysteem. Komt de naam niet voor, dan mag je geen hulp verlenen:</p>
<blockquote>Beste &lt;voornaam en achternaam&gt;,<br><br>U bent nog geen bekende gebruiker in ons systeem en daarom kan ik u niet helpen. Heeft u vragen, dan kunt u terecht bij uw direct leidinggevende. Deze kan een aanvraag voor een account indienen. Deze aanvraag wordt meestal binnen 4 uur verwerkt. Mail ons gerust weer als u een account heeft in ons systeem.<br><br>Met vriendelijke groet,<br>&lt;je eigen naam&gt;<br>Servicedesk ICT</blockquote>
<p><b>Balie</b> – "Kunt u mij uw achternaam, afdeling en locatie geven?" Komt de naam niet voor:</p>
<blockquote>U bent nog geen bekende gebruiker in ons systeem en daarom kan ik u momenteel niet helpen. Uw leidinggevende kan een account laten aanmaken in ons systeem. Deze aanvraag neemt ongeveer 4 uur in beslag. Neem gerust weer contact met ons op als u een account hebt in ons systeem.</blockquote>
<p>Beëindig nu netjes het gesprek.</p>
<h4>2.2 SLA controle</h4>
<p>Valt de melding niet onder de SLA-voorwaarden, gebruik dan dit script.</p>
<p><b>Mail</b></p>
<blockquote>Beste &lt;voornaam en achternaam&gt;,<br><br>Ik kan geen ondersteuning bieden voor wat u vraagt, want dit valt buiten de afgesproken dienstverlening met uw afdeling. Wilt u toch ondersteuning krijgen, dan moet ik u terugverwijzen naar uw leidinggevende. Deze melding zal ik daarom sluiten. Als er nog meer vragen zijn, dan kunt u natuurlijk weer contact met ons opnemen.<br><br>Met vriendelijke groet,<br>&lt;je naam&gt;<br>Servicedesk ICT</blockquote>
<p><b>Balie</b></p>
<blockquote>Ik kan geen ondersteuning bieden voor hetgeen u vraagt, want dit valt buiten de afgesproken dienstverlening met uw afdeling. Wilt u toch ondersteuning krijgen, dan moet ik u terugverwijzen naar uw leidinggevende. Deze melding zal ik daarom sluiten. Als er nog meer vragen zijn, dan wil ik natuurlijk graag helpen.</blockquote>
<p>Voer de melding in het servicedesksysteem in als <b>Afgewezen</b>. Beëindig netjes het gesprek.</p>
<h4>2.3 Melding in behandeling nemen</h4>
<p>Als een melding niet door jou kan worden opgelost, krijgt de melder bericht dat de aanvraag in behandeling is genomen.</p>
<p><b>Mail</b></p>
<blockquote>Beste &lt;voornaam en achternaam&gt;,<br><br>Uw vraag is in behandeling genomen door &lt;afdeling die de afhandeling op zich neemt&gt;. Binnen &lt;doorlooptijd&gt; krijgt u reactie. Als u vragen heeft over de afhandeling, dan ben ik uw contactpersoon.<br><br>Met vriendelijke groet,<br>&lt;je eigen naam&gt;<br>Servicedesk ICT</blockquote>
<p><b>Balie</b></p>
<blockquote>Uw vraag is in behandeling genomen door &lt;afdeling&gt;. Binnen &lt;doorlooptijd&gt; krijgt u reactie. Als u vragen hebt over de afhandeling, dan ben ik uw contactpersoon. Als er nog meer vragen zijn, help ik graag. Als er geen vragen meer zijn, dan wens ik u alvast een fijne dag.</blockquote>
<p>Beëindig nu netjes het gesprek.</p>
<h4>2.4 Melding afronden en beantwoorden</h4>
<p>Als een melding is opgelost, kun je de communicatie via de mail of het gesprek beëindigen.</p>
<p><b>Mail</b></p>
<blockquote>Beste &lt;voornaam en achternaam&gt;,<br><br>De oplossing horende bij uw melding is aan onze kant opgepakt en afgerond. De oplossing voor uw verzoek is &lt;geef hier de oplossing voor de melding&gt;. Ik wil vragen of voor u alles naar wens is verlopen. Zijn er nog vragen of andere zaken, dan wil ik dit graag horen. Ik zal deze melding anders na twee werkdagen sluiten.<br><br>Met vriendelijke groet,<br>&lt;je eigen naam&gt;<br>Servicedesk ICT</blockquote>
<p><b>Balie</b></p>
<blockquote>Is voor u alles naar wens verlopen en is uw vraag naar tevredenheid beantwoord?<br>Zijn er nog vragen of andere zaken, dan wil ik dit natuurlijk graag horen. Zijn er geen andere vragen, dan ga ik de melding voor u sluiten.</blockquote>
`},
{ id: 'escalatie', titel: 'Escalatiematrix', html: `
<h3>Hoofdstuk 3 – Escalatiematrixen</h3>
<p>Hier zoek je op welke medewerker verantwoordelijk is voor de afhandeling van een melding die binnen de SLA valt.</p>
<h4>Eenvoudige wijzigingen</h4>
<table class="tabel"><tr><th>Aanvraag</th><th>Behandelaar</th></tr>
<tr><td>Aanvraag toetsenbord / muis</td><td>Systeembeheer – John Hendrikx</td></tr></table>
<h4>Netwerk hardware</h4>
<table class="tabel"><tr><th>Onderdeel</th><th>Gebruikersvragen en incidenten</th><th>Tweedelijns- / wijzigingsverzoeken</th></tr>
<tr><td>Servers, routers, printers, switches, bekabeling, wall outlets, telefooncentrales</td><td>Informatisering &amp; Automatisering – Hajo Kootstra</td><td>Informatisering &amp; Automatisering – Hoofd automatisering Marcel Offermans</td></tr></table>
<h4>Werkplek hardware</h4>
<table class="tabel"><tr><th>Onderdeel</th><th>Gebruikersvragen en incidenten</th><th>Tweedelijns- / wijzigingsverzoeken</th></tr>
<tr><td>Pc's, laptops, monitoren, toetsenborden, muizen, tablets, beamers, overige werkplek hardware</td><td>Systeembeheer – John Hendrikx</td><td>Systeembeheer – John Hendrikx</td></tr>
<tr><td>Telefoons</td><td>Systeembeheer – Benno Richters</td><td>Systeembeheer – Benno Richters</td></tr></table>
<h4>Besturingssystemen</h4>
<table class="tabel"><tr><th>Onderdeel</th><th>Gebruikersvragen en incidenten</th><th>Tweedelijns- / wijzigingsverzoeken</th></tr>
<tr><td>Android</td><td>Eerste lijn</td><td>Systeembeheer – Benno Richters</td></tr>
<tr><td>Windows, Linux, Mac OS</td><td>Eerste lijn</td><td>Informatisering &amp; Automatisering – Hajo Kootstra</td></tr>
<tr><td>Unix</td><td>Informatisering &amp; Automatisering – Hajo Kootstra</td><td>Informatisering &amp; Automatisering – Hajo Kootstra</td></tr></table>
<h4>Kantoorapplicaties</h4>
<table class="tabel"><tr><th>Onderdeel</th><th>Gebruikersvragen en incidenten</th><th>Tweedelijns- / wijzigingsverzoeken</th></tr>
<tr><td>Word, Access, Excel, PowerPoint</td><td>Eerste lijn</td><td>Applicatiebeheer – Inge Meijer</td></tr>
<tr><td>Visio, Internet Explorer, Outlook &amp; Exchange, Chrome, Libre Office, overige applicaties</td><td>Eerste lijn</td><td>Applicatiebeheer – Arjen Dirks</td></tr></table>
<h4>Middelen</h4>
<table class="tabel"><tr><th>Onderdeel</th><th>Gebruikersvragen en incidenten</th><th>Tweedelijns- / wijzigingsverzoeken</th></tr>
<tr><td>Airco, koffieapparaten, kopieerapparaten</td><td>Technische dienst – Berry Dielemans</td><td>Hoofd technische dienst – Martin Beijering</td></tr>
<tr><td>Audiovisuele middelen</td><td>Technische dienst – Johan Cornelissen</td><td>Hoofd technische dienst – Martin Beijering</td></tr></table>
<h4>Specifieke applicaties</h4>
<table class="tabel"><tr><th>Onderdeel</th><th>Gebruikersvragen en storingen</th><th>Wijzigingsverzoeken</th></tr>
<tr><td>Beaufort, Dreamweaver</td><td>Applicatiebeheer – Inge Meijer</td><td>Applicatiebeheer – Inge Meijer</td></tr>
<tr><td>SAP, ERP, Exact (ERP)</td><td>Applicatiebeheer – Arjen Dirks</td><td>Applicatiebeheer – Arjen Dirks</td></tr></table>
<h4>Diensten</h4>
<table class="tabel"><tr><th>Onderdeel</th><th>Gebruikersvragen en incidenten</th><th>Tweedelijns- / wijzigingsverzoeken</th></tr>
<tr><td>Autorisatie (account aanmaken/aanpassen/verwijderen, autorisatie instellen, wachtwoorden resetten)</td><td></td><td></td></tr>
<tr><td>Back-up retrieval</td><td>Informatisering &amp; Automatisering – Hajo Kootstra</td><td>Informatisering &amp; Automatisering – Hajo Kootstra</td></tr>
<tr><td>E-mail (account aanmaken/verwijderen, autorisatie instellen, wachtwoorden resetten)</td><td></td><td></td></tr>
<tr><td>Nieuwe gebruiker aanmaken</td><td>Systeembeheer – Benno Richters</td><td>Informatisering &amp; Automatisering – Hajo Kootstra</td></tr>
<tr><td>Nieuwe werkplek inrichten, verhuizing (werkplekken), voorraad en logistiek (werkplekken)</td><td>Systeembeheer – Benno Richters</td><td>Hoofd technische dienst – Martin Beijering</td></tr>
<tr><td>Security</td><td>Systeembeheer – John Hendrikx</td><td>Systeembeheer – John Hendrikx</td></tr></table>
`}
];
