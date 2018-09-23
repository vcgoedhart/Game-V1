var monster = "none";

var healthPotionAmount = 3;
var healthPotion = 50;

var elfHelp;
var elfHelpBoss = false;

var name = "none";
var userHealth = 100;
var userConfused =  false;

var attack = "none";
var slash = 30;
var kick = 20;

var kickConfuse = false;
var roar = false;

var orcHealth = 150;
var orcSmash = 30;

var goblinHealth = 80;
var goblinSlice = 45;

var elfHealth = 200;
var elfStomp = 40;
var elfSlap = 60;

var puzzeHealth = 500;
var puzzeDamage = 90;

var smiguelHealth = 220;
var smiguelFirebreath = 45;
var smiguelScream = 0;

if (name == "none"){
	name = prompt("Welkom avonturier! Wat is jou naam?!");
if (name.toLowerCase() == "vincent"){
	alert("Gegroet, " + name + ". Dat is een zeer mooie naam :)");
	alert("U zal nu deze DUNGEON proberen te verslaan. Veel geluk met je avontuur " + name + "!");
	} else {
		alert("Gegroet, "  + name + "!");
		alert("U zal nu deze DUNGEON proberen te verslaan. Veel geluk met je avontuur " + name + "!");
	}
}

function onStartDungeon(){
	alert(name + "!");
	alert("Wakker worden!!!");
	alert("*Je word wakker*");
	alert("Dungeon Keeper: Welkom in de Dungeon " + name + "...");
	alert("Dungeon Keeper: Je zit hier voor redenen die wij jou niet kunnen vertellen. Ik kan je wel één ding vertellen. Je hebt maar één doel in deze Dungeon! En dat is om te onstappen.");
	alert("Dungeon Keeper: Veel geluk met je avontuur... " + name + "...");
	alert("Gedachtens van de Dungeon Keeper: *Alweer een verloren ziel*");
	alert("Je kijkt om je heen... Je hebt geen idéé wat er is gebeurd of hoe je hier in de Dungeon terecht bent gekomen. Maar één ding weet je wel. Je wilt zo snel mogelijk naar huis want de oven staat nog aan!");
	alert("Je besluit om een beetje rond te lopen. Je ziet een vliegend lichtje... Het licht begint opeens in je ogen te schijnen.");
	alert("Uit het niets hoor je een stem in je hoofd. *Help me*");
	alert("*PLOTSELING* HOOR JE GEROMMEL IN DE VERTE VAN DE GANGEN!!!");
	alert("Langs de muren van de kamer gaan er fakkels aan. *Je schikt ervan*");
    alert("*BONK* *BONK* HET IS EEN ORC!!! Het rent razend snel op je af!");
    alert("Het lichtje spreekt opnieuw. *help me...*");
    alert("Missie: maak een keuze of je het lichtje gaat helpen");
	document.getElementById("textMenu").innerText = "Maak een keuze";
	document.getElementById("startMenu").style.visibility = "hidden";
	document.getElementById("yesnoMenu").style.visibility = "visible";
	document.getElementById("healthButton").style.visibility = "visible";
	document.getElementById("amountPotionText").innerText = "Amount: " + healthPotionAmount;
	document.getElementById("healthText").innerText = "Health: " + userHealth;
	console.log("dungeon gestart");
}	

function onYes(){
	if (elfHelp == null){
		alert("Je schreeuwt tegen het lichtje. *JA IK HELP JE*");
		alert("Het lichtje spreekt opnieuw. *Ik kan niet voor je vechten! Je zal dit zelf moeten doen!! Maar... Ik kan je wel 5 health potions geven!*");
		alert("*Op een magische manier krijg jij 5 extra health potions in je inventory*");
		alert("Lichtje: Gebruik je wapens!");
		alert("Je pakt je wapen en je bereid je voor het gevecht. *Je benen beginnen te trillen*");
		alert("De Orc rent op je af met een woedende blik. *KLONS* Het staat 5 meter voor je... Het beingt te spreken tegen je. *HOE DURF JIJ IN DEZE GANGEN TE LOPEN!!!*");
		alert("Missie: versla de orc");
		monster = "orc";
		healthPotionAmount += 5;
		document.getElementById("amountPotionText").innerText = "Hoeveelheid: " + healthPotionAmount;
		elfHelp = true;
		attackMonster();
		} else if (elfHelp == true){
			alert("Je zegt tegen de elf. *Ja, ik zal je helpen*");
			alert("De elf zit vol met vreugde! Hij ziet hoop in jouw... Hij denkt dat jij de eindbaas aankan...");
			alert("De elf spreekt opnieuw. *Volg mij! Ik weet de weg naar de eindbaas*");
			alert("*Je volgt de elf...*");
			alert("Je loopt de gang uit waar je de Orc hebt verslagen. Je komt een kamer in... De elf stop met vliegen.");
			alert("Je kijkt in de kamer... Je ziet iets in de hoek zitten");
			alert("Je besluit om ernaar toe te lopen om het te zien. HET STAAT OP!!!");
			alert("HET IS EEN GOBLIN!!! Goblin: HOE DURF JIJ MIJ WAKKER TE MAKEN!!!");
			alert("Missie: versla de Goblin");
			monster = "goblin";
			elfHelpBoss = true;
			attackMonster();
		}
	console.log("ja");
}

function onNee(){
	if (elfHelp == null){
		alert("Het lichtje zit vol met verdriet. Het mompeld een beetje. *De vloek zal niet verheven worden*");
		alert("Opeens is het lichtje weg. Je geen idee wat er is gebeurd. Maar je moet toch wat doen tegen de Orc.");
		alert("*KLONS* Daar staat de Orc! 5 meter voor je... Je hebt geen keuze. Je moet tegen de Orc vechten.");
		alert("Missie: versla de Orc");
		monster = "orc";
		elfHelp = false;
		attackMonster();
		} else if (elfHelp != false){
			alert("Elf: W-W-WATTT Z-Z-ZEG JIJ?!?! JE ZOU ME NET HELPEN?!?! MAAR NU NIET MEER!!!");
			alert("Elf: ARGHHH!! IK BEN HIER KLAAR MEE");
			alert("Angry Elf: IK ZAL JE VERMOORDEN!!");
			alert("Missie: versla de angry elf");
			monster = "angry elf";
			attackMonster();
	}
	console.log("nee");
}

function onSlash(){ console.log("slash"); attack = "slash"; attackMonster(); }
function onRoar(){ console.log("roar"); attack = "roar"; attackMonster(); }
function onKick(){ console.log("kick"); attack = "kick"; attackMonster(); }

function onUsePotion(){
	if (healthPotionAmount > 0 && userHealth < 100){ 
		userHealth += healthPotion;
		if (userHealth > 100){ userHealth = 100; }
		healthPotionAmount -= 1;
		document.getElementById("amountPotionText").innerText = "Hoeveelheid: " + healthPotionAmount;
		document.getElementById("healthText").innerText = "Health: " + userHealth;
		alert("Je hebt een health potion gebruikt! (Your health: " + userHealth + "HP)");
		} else if (userHealth >= 100){
			alert("Je health is al max!")
			} else if (healthPotionAmount <= 0){
			alert("Je hebt geen health potions meer!");
			}
			console.log("potion gebruikt");
}

function attackMonster(){
	document.getElementById("yesnoMenu").style.visibility = "hidden";
	document.getElementById("swordMenu").style.visibility = "visible";
	console.log("monster aangevallen");
	if (monster == "orc"){
		if (attack == "slash"){
			orcHealth -= slash;
			if (orcHealth <= 0){ orcHealth = 0; }
			alert("Je hebt slash gebruikt op de Orc! (Orc's health: " + orcHealth + "HP)");
				} else if (attack == "roar"){
				randomAttack = Math.floor(Math.random() * 2) + 1;
					if (randomAttack == 1){
						roar = true;
						alert("Je hebt de Orc bang gemaakt!");
						attack = "none";
						attackMonster();
					} 
					if (randomAttack == 2){
						alert("De roar aanval is gefaalt!");
						roar = false;
					}
				} else if (attack == "kick"){
					randomAttack = Math.floor(Math.random() * 2) + 1;
					if (randomAttack == 1){
						orcHealth -= kick;
						if (orcHealth <= 0){ orcHealth = 0; }
							alert("Je hebt de Orc zo hard geschopt dat hij duizelig is!");
							alert("Je hebt de Orc geschopt (Orc's health: " + orcHealth + "HP)");
							kickConfuse = true;
						} 
					if (randomAttack == 2){			
						orcHealth -= kick;
						if (orcHealth <= 0){ orcHealth = 0; }
							alert("Je hebt de Orc geschopt (Orc's health: " + orcHealth + "HP)");
						}							
					}
			if (orcHealth <= 0){
				attack = "none";
				alert("Je hebt de Orc verslagen!");
				if (elfHelp == true){
				alert("De adreline gaat door je heen! Je voelt geen emoties meer... Daar ligt het... Op de grond... Dood...");
				alert("Je had geen keuze. Je hebt nog nooit eerder iets vermoord. Maar je moet toch de Dungeon uit!");
				alert("Het lichtje spreekt je weer aan. *Gegroet, mens! Ik ben een elf. Maar mijn ziel is mijn lichaam verlaten. Het is een VLOEK!!!*");
				alert("Elf: Kan jij me helpen de vloek op te heven. Je moet de eindbaas 'Smiguel á Mexicano' verslaan.");
				alert("Wil je me helpen hem te verslaan? Ja of nee?");
				alert("Missie: maak een keuze (ja/nee)");
				document.getElementById("swordMenu").style.visibility = "hidden";
				document.getElementById("yesnoMenu").style.visibility = "visible";			
				} else if (elfHelp == false){
					alert("De adreline gaat door je heen! Je voelt geen emoties meer... Daar ligt het... Op de grond... Dood...");
					alert("Je had geen keuze. Je hebt nog nooit eerder iets vermoord. Maar je moet toch de Dungeon uit!");
					alert("Je besluit om verder te lopen. Je loopt langzaam en voorzichtig de kamer uit.");
					alert("De kamer eindigt met een deur. Er staat een boordje boven de deur. Op het boordje staat 'Puzzel Meester'.");
					alert("Je loopt zonder twijfel naar binnen. Je ziet een man met een baard.");
					alert("Hij spreekt je toe. *Welkom " + name + " als jij verder wilt dan zal je me moeten verslaan in mij spel*");
					alert("Je denkt goed na want je kent de regels nog helemaal niet. Maar je hebt geen keuze... Je zegt ja!");
					alert("De Puzzel Meester zegt dat als je een vraag fout beantwoord dat je dood gaat. Als jij het goed raadt dan neemt hij damage.");
					alert("Puzzel Meester: Veel geluk " + name + ".. HAHAHA...");
					alert("Missie: versla de Puzzel Meester in zijn eigen spel.");
					document.getElementById("swordMenu").style.visibility = "hidden";
					attack = "none";
					var vraag1 = prompt("Mijn eerste vraag aan jouw, Met welk taal ben ik geprogrammeerd?");
					if (vraag1.toLowerCase() == "javascript" || vraag1.toLowerCase() == "js"){
						var vraag2 = prompt("(De Puzzel Meester nam 100 damage HP: 200) Met welke JavaScript methode vraag ik deze vragen?");
						if (vraag2.toLowerCase() == "prompt" || vraag2.toLowerCase() == "prompt()"){
							var vraag3 = prompt("(De Puzzel Meester nam 100 damage HP: 100) Wat is het volle woord voor de afkorting van 'var'?");
							if (vraag3.toLowerCase() == "variabel" || vraag3.toLowerCase() == "variable"){
								alert("Puzzel Meester: ARGHHH! IK WEET GEEN VRAGEN MEER");
								alert("De Puzzel Meester stort neer op de grond. Vol in pijn begint hij te schreeuwen!");
								alert("*BONK* Hij valt neer op de grond... Er gaat een deur open verderop.");
								alert("De Puzzel Meester had toevallig wel 6 health potions bij zich. Die zullen misschien wel handig zijn voor de volgende kamer.");
								alert("Je pakt ze op... Je gaat naar de open deur. Boven de deur staat 'EINDBAAS'");
								alert("EINDELIJK! Je bent er. Je doet zonder twijfel de deur open. Je bent klaar om terug naar je oven te gaan");
								alert("TOTDAT! Je ziet iets groots, angstaanjagend ziet... ");
								alert("Smiguel á Mexicano....");
								alert("Missie: versla de eindbaas");
								monster = "smiguel";
								healthPotionAmount += 6;
								document.getElementById("amountPotionText").innerText = "Hoeveelheid: " + healthPotionAmount;
								attackMonster();
							} else {
								puzzleMeesterAttack();
							}
						} else {
							puzzleMeesterAttack();
						}
					} else {
						puzzleMeesterAttack();
					}
				}
			} 
			if (orcHealth > 0 && attack != "none"){
				if (roar == true){
					alert("De Orc is nogsteeds bang van je schreeuw");
					roar = false;
					} else if (kickConfuse == true) {
						alert("De Orc is nog steeds duizelig van je kick!");
						randomAttack = Math.floor(Math.random() * 2) + 1;
						if (randomAttack == 1){
							userHealth -= orcSmash-5;
							document.getElementById("healthText").innerText = "Health: " + userHealth;
							alert("De Orc heeft je toch kunnen raken! (Jouw health: " + userHealth + "HP)");
						} else if (randomAttack == 2){
							alert("De Orc was te duizelig om je te raken!");
						}
						kickConfuse = false;
						} else {
						userHealth -= orcSmash;
						document.getElementById("healthText").innerText = "Health: " + userHealth;

							if (userHealth <= 0){ userHealth = 0; }
							alert("The Orc has smashed you! (Your health: " + userHealth + "HP)");
						}

				if (userHealth <= 0){
					userDied();
				}
			}
	} else if (monster == "goblin"){
		if (attack == "slash"){
			goblinHealth -= slash;
			if (goblinHealth <= 0){ goblinHealth = 0; }
				alert("Je hebt slash gebruikt op de Goblin (Goblin's health: " +  goblinHealth + "HP)");
			} else if (attack == "roar"){
			randomAttack = Math.floor(Math.random() * 2) + 1;
				if (randomAttack == 1){
				roar = true;
				alert("Je hebt de Goblin bang gemaakt!");
				attack = "none";
				attackMonster();
				} 
				if (randomAttack == 2){
					alert("De roar aanval is gefaalt!");
					roar = false;
				}
			} else if (attack == "kick"){
					randomAttack = Math.floor(Math.random() * 2) + 1;
					if (randomAttack == 1){
						goblinHealth -= kick;
						if (goblinHealth <= 0){ goblinHealth = 0; }
							alert("Je hebt de Goblin zo hard geschopt dat hij duizelig is!");
							alert("Je hebt de Goblin geschopt (Goblin's health: " + goblinHealth + "HP)");					
							kickConfuse = true;
						} 
						if (randomAttack == 2){			
							goblinHealth -= kick;
							if (goblinHealth <= 0){ goblinHealth = 0; }
							alert("Je hebt de Goblin geschopt (Goblin's health: " + goblinHealth + "HP)");
						}							
			}
			if (goblinHealth <= 0){
				attack = "none";
				alert("Je hebt de Goblin verslagen!");
				if (elfHelp == true && elfHelpBoss == true){
				alert("Je bent nog steeds niet eraan gewend. Het idéé van vermoorden...");
				alert("De elf zegt dat je het goed hebt gedaan. De elf zegt dat je toch verder zal moeten gaan.");
				alert("De elf begint weer verder te vliegen. Jij volgt de elf.");
				alert("Na een tijdje kom je bij een deur. De deur heeft een boord. Op het boord staat 'EINDBAAS'.");
				alert("EINDELIJK! Je bent er. Je doet zonder twijfel de deur open. Je bent klaar om terug naar je oven te gaan");
				alert("TOTDAT! Je ziet iets groots, angstaanjagend ziet... ");
				alert("Smiguel á Mexicano....");
				alert("Missie: versla de eindbaas");
				monster = "smiguel";
				attackMonster();
				}
			}
			if (goblinHealth > 0 && attack != "none"){
				if (roar == true){
					alert("De Goblin is nogsteeds bang van je schreeuw");
					roar = false;
					} else if (kickConfuse == true) {
						alert("De Goblin is nog steeds duizelig van je kick!");
						randomAttack = Math.floor(Math.random() * 2) + 1;
						if (randomAttack == 1){
							userHealth -= goblinHealth;
							document.getElementById("healthText").innerText = "Health: " + userHealth;
							alert("De Goblin heeft je toch kunnen raken! (Jouw health: " + userHealth + "HP)");
						} else if (randomAttack == 2){
							alert("De Goblin was te duizelig om je te raken!");
						}
						kickConfuse = false;
						} else {
						userHealth -= goblinSlice;
						document.getElementById("healthText").innerText = "Health: " + userHealth;
						if (userHealth <= 0){ userHealth = 0; }
						alert("The Goblin has sliced you! (Your health: " + userHealth + "HP)");
					}
				if (userHealth <= 0){
					userDied();
				}
			}
	} else if (monster == "smiguel"){
		if (attack == "slash" && userConfused == false){
			smiguelHealth -= slash;
			if (smiguelHealth <= 0){ smiguelHealth = 0; }
				alert("Je hebt slash gebruikt op Smiguel (Smiguel's health: " + smiguelHealth + "HP)");
			} else if (attack == "roar"){
				alert("Smiguel: HAHAHAH!");
				alert("Je hebt Smiguel alleen maar bozer gemaakt!");
				alert("KIJK UIT!!!");
				userHealth -= 90;	
				if (userHealth <= 0){ userHealth = 0; }
				document.getElementById("healthText").innerText = "Health: " + userHealth;
				alert("*Smiguel sloeg je met zijn verwoestende vuist* (Jouw health: " + userHealth + "HP)");
				attack = "none";
				if (userHealth <= 0){ userDied(); }		
				if (userConfused == true){ userConfused = false; }
				attackMonster();
			} else if (attack == "kick"){
				smiguelHealth -= kick;
				if (smiguelHealth <= 0){ smiguelHealth = 0; }
				alert("Je schopt hem recht in zijn maag! Maar hij blijft gewoon staan... (Smiguel's health: " + smiguelHealth + "HP)");
			}
			if (smiguelHealth <= 0){
				attack = "none";
				alert("Het is je gelukt!");
				if (elfHelpBoss == true){
					alert("Elf: HAHAHAHHAHA! IK BEN VRIJ. Ik dank je jonge avonturier. Voordat we afscheid nemen... Wat is je naam?");
					alert("Jij: Mijn naam is " + name);
					alert("Elf: Ahhhh.. " + name + ". Die naam zal ik onthouden.");
					alert("De elf klapt in zijn handen... *BOEM* In een flits ben je terug.");
					alert("Je weet dat je dit avontuur nooit zal vergeten. Je vraagt je nog steeds af hoe dit mogelijk is. Maar eerst check je even je oven.");
					alert("Einde");
					window.close();
				} else if (elfHelpBoss != true){
					alert("Gefeliciteerd! Je hebt de dungeon verslagen.");
					alert("Je mag vrolijk naar je oven toe.");
					alert("En zo eindigde vincent's prachtige storyline");
					alert("Het is zeer goed.");
					alert("Dus niet");
					window.close();
				}
			}
			if (userConfused == true){
				userConfused = false;
				alert("Je bent nog een beetje van het padje!");
			}
			if (smiguelHealth > 0 && attack != "none"){
				var randomAttack = Math.floor(Math.random() * 3) + 1;
				if (randomAttack == 1 || randomAttack == 2){
					userHealth -= smiguelFirebreath;
					document.getElementById("healthText").innerText = "Health: " + userHealth;
					if (userHealth <= 0){ userHealth = 0; }
					alert("Smiguel gebruikt zijn firebreath op jouw! (Your health: " + userHealth + "HP)");
					} else if (randomAttack == 3){
					userConfused = true;
					alert("Smiguel gebruikt zijn kwaadaardige schreeuw op jouw! Je bent confused!");
					}
					if (userHealth <= 0){
						userDied();
					}				
			}
	} else if (monster == "angry elf"){
		if (attack == "slash" && userConfused == false){
			elfHealth -= slash;
			if (elfHealth <= 0){ elfHealth = 0; }
				alert("Je hebt slash gebruikt op Angry Elf (Angry Elf's health: " + elfHealth + "HP)");
			} else if (attack == "roar"){
				alert("Die aanval werkt niet op de Angry Elf!");
			} else if (attack == "kick"){
				randomAttack = Math.floor(Math.random() * 2) + 1;
				if (randomAttack == 1){
					elfHealth -= kick;
					if (elfHealth <= 0){ elfHealth = 0; }
						alert("Je hebt de Angry Elf zo hard geschopt dat hij duizelig is!");
						alert("Je hebt de Angry Elf geschopt (Angry Elf's health: " + elfHealth + "HP)");					
						kickConfuse = true;
					} 
					if (randomAttack == 2){			
						elfHealth -= kick;
						if (elfHealth <= 0){ elfHealth = 0; }
						alert("Je hebt de Angry Elf geschopt (Angry Elf's health: " + elfHealth + "HP)");
					}	
			}
		if (elfHealth <= 0){
			alert("Je versloeg de Angry Elf! Maar er gebeurt niks...");
			alert("De Angry Elf spreekt zijn laatste woorden.");
			alert("Hij zegt: *" + name + " ik ben de Dungeon Keeper*");
			alert("Zonder mij is er geen Dungeon...");
			alert("einde...");
			window.close();
		}
		if (userConfused == true){
			userConfused = false;
			alert("Je bent nog een beetje van het padje!");
		}
		if (elfHealth > 0 && attack != "none"){
			var randomAttack = Math.floor(Math.random() * 3) + 1;
			if (randomAttack == 1 || randomAttack == 2){
				userHealth -= elfSlap;
				document.getElementById("healthText").innerText = "Health: " + userHealth;
				if (userHealth <= 0){ userHealth = 0; }
				alert("De Angry Elf sloeg je! (Jouw health: " + userHealth + "HP)");
				} else if (randomAttack == 3){
				userConfused = true;
				userHealth -= elfStomp;
				document.getElementById("healthText").innerText = "Health: " + userHealth;
				if (userHealth <= 0){ userHealth = 0; }
				alert("De Angry Elf stond op je (Jouw health: " + userHealth + "HP)");
				alert("Je voelt je een beetje duizelig...");
				}
				if (userHealth <= 0){ userDied(); }				
			}
	}
}

function userDied(){
	alert("Oh nee! Je bent dood gegaan!");
	window.close();
	window.open("index.html");
}

function puzzleMeesterAttack(){
	alert("DAT IS FOUT!!");
	alert("De Puzzle Meester sloeg je met zijn platte hand! Het deed 100 DMG. (Jouw health: 0HP)");
	userDied();
}