var texter = {
  'norea': {
    'logo': '<div class="imagebox"><img src="img/norealogo.png" alt="Noreas logotyp"/></div>',
  },
  'vgb': {
    'ikon': '<div class="imagebox"><img src="img/vgb-vit.png" alt="Vägen genom Bibeln"/></div>',
    'info': '<div class="textbox"><p><b>Vägen genom Bibeln</b> är en programserie som går igenom hela Bibeln från pärm till pärm i 1245 halvtimmeslånga program. Det går när som helst att hoppa på resan och när Uppenbarelsebokens sista kapitel är läst börjar serien om igen i 1 Mosebok.</p></div>',
    'programval': '<div id="bibelbok"> \
            <h2>Välj Bibelbok</h2> \
    				<h3>GT</h3> \
    				<div class="kolumner"> \
    				<ul> \
    					<li><a onclick="scrollTo(\'1 Mos\');">1 Mosebok</a></li> \
    					<li><a onclick="scrollTo(\'2 Mos\');">2 Mosebok</a></li> \
    					<li><a onclick="scrollTo(\'3 Mos\');">3 Mosebok</a></li> \
    					<li><a onclick="scrollTo(\'4 Mos\');">4 Mosebok</a></li> \
    					<li><a onclick="scrollTo(\'5 Mos\');">5 Mosebok</a></li> \
    					<li><a onclick="scrollTo(\'Jos\');">Josua</a></li> \
    					<li><a onclick="scrollTo(\'Dom\');">Domarboken</a></li> \
    					<li><a onclick="scrollTo(\'Rut\');">Rut</a></li> \
    					<li><a onclick="scrollTo(\'1 Sam\');">1 Samuelsboken</a></li> \
    					<li><a onclick="scrollTo(\'2 Sam\');">2 Samuelsboken</a></li> \
    				</ul> \
    				<ul> \
    					<li><a onclick="scrollTo(\'1 Kon\');">1 Konungaboken</a></li> \
    					<li><a onclick="scrollTo(\'2 Kon\');">2 Konungaboken</a></li> \
    					<li><a onclick="scrollTo(\'1 Krön\');">1 Krönikeboken</a></li> \
    					<li><a onclick="scrollTo(\'2 Krön\');">2 Krönikeboken</a></li> \
    					<li><a onclick="scrollTo(\'Esra\');">Esra</a></li> \
    					<li><a onclick="scrollTo(\'Neh\');">Nehemja</a></li> \
    					<li><a onclick="scrollTo(\'Ester\');">Ester</a></li> \
    					<li><a onclick="scrollTo(\'Job\');">Job</a></li> \
    					<li><a onclick="scrollTo(\'Ps\');">Psaltaren</a></li> \
    					<li><a onclick="scrollTo(\'Ords\');">Ordspråksboken</a></li> \
    				</ul> \
    				<ul> \
    					<li><a onclick="scrollTo(\'Pred\');">Predikaren</a></li> \
    					<li><a onclick="scrollTo(\'Höga V\');">Höga Visan</a></li> \
    					<li><a onclick="scrollTo(\'Jes\');">Jesaja</a></li> \
    					<li><a onclick="scrollTo(\'Jer\');">Jeremia</a></li> \
    					<li><a onclick="scrollTo(\'Klag\');">Klagovisorna</a></li> \
    					<li><a onclick="scrollTo(\'Hes\');">Hesekiel</a></li> \
    					<li><a onclick="scrollTo(\'Dan\');">Daniel</a></li> \
    					<li><a onclick="scrollTo(\'Hos\');">Hosea</a></li> \
    					<li><a onclick="scrollTo(\'Joel\');">Joel</a></li> \
    					<li><a onclick="scrollTo(\'Amos\');">Amos</a></li> \
    				</ul> \
    				<ul> \
    					<li><a onclick="scrollTo(\'Ob\');">Obadja</a></li> \
    					<li><a onclick="scrollTo(\'Jona\');">Jona</a></li> \
    					<li><a onclick="scrollTo(\'Mika\');">Mika</a></li> \
    					<li><a onclick="scrollTo(\'Nah\');">Nahum</a></li> \
    					<li><a onclick="scrollTo(\'Hab\');">Habackuck</a></li> \
    					<li><a onclick="scrollTo(\'Sef\');">Sefanja</a></li> \
    					<li><a onclick="scrollTo(\'Hagg\');">Haggai</a></li> \
    					<li><a onclick="scrollTo(\'Sak\');">Sakarja</a></li> \
    					<li><a onclick="scrollTo(\'Mal\');">Malaki</a></li> \
    				</ul> \
    				</div> \
    				<h3>NT</h3> \
    				<div class="kolumner"> \
    				<ul> \
    					<li><a onclick="scrollTo(\'Matt\');">Matteus</a></li> \
    					<li><a onclick="scrollTo(\'Mark\');">Markus</a></li> \
    					<li><a onclick="scrollTo(\'Luk\');">Lukas</a></li> \
    					<li><a onclick="scrollTo(\'Joh\');">Johannes</a></li> \
    					<li><a onclick="scrollTo(\'Apg\');">Apostlagärningarna</a></li> \
    					<li><a onclick="scrollTo(\'Rom\');">Romarbrevet</a></li> \
    					<li><a onclick="scrollTo(\'1 Kor\');">1 Korintierbrevet</a></li> \
    				</ul> \
    				<ul> \
    					<li><a onclick="scrollTo(\'2 Kor\');">2 Korintierbrevet</a></li> \
    					<li><a onclick="scrollTo(\'Gal\');">Galaterbrevet</a></li> \
    					<li><a onclick="scrollTo(\'Ef\');">Efesierbrevet</a></li> \
    					<li><a onclick="scrollTo(\'Fil\');">Filipperbrevet</a></li> \
    					<li><a onclick="scrollTo(\'Kol\');">Kolosserbrevet</a></li> \
    					<li><a onclick="scrollTo(\'1 Tess\');">1 Tessalonikerbrevet</a></li> \
    					<li><a onclick="scrollTo(\'2 Tess\');">2 Tessalonikerbrevet</a></li> \
    				</ul> \
    				<ul> \
    					<li><a onclick="scrollTo(\'1 Tim\');">1 Timoteus</a></li> \
    					<li><a onclick="scrollTo(\'2 Tim\');">2 Timoteus</a></li> \
    					<li><a onclick="scrollTo(\'Tit\');">Titus</a></li> \
    					<li><a onclick="scrollTo(\'Filem\');">Filemon</a></li> \
    					<li><a onclick="scrollTo(\'Hebr\');">Hebreérbrevet</a></li> \
    					<li><a onclick="scrollTo(\'Jak\');">Jakobs brev</a></li> \
    					<li><a onclick="scrollTo(\'1 Petr\');">1 Petrusbrevet</a></li> \
    				</ul> \
    				<ul> \
    					<li><a onclick="scrollTo(\'2 Petr\');">2 Petrusbrevet</a></li> \
    					<li><a onclick="scrollTo(\'1 Joh\');">1 Johannesbrevet</a></li> \
    					<li><a onclick="scrollTo(\'2, 3 Joh\');">2 Johannesbrevet</a></li> \
              <li><a onclick="scrollTo(\'2, 3 Joh\');">3 Johannesbrevet</a></li> \
    					<li><a onclick="scrollTo(\'Jud\');">Judas brev</a></li> \
    					<li><a onclick="scrollTo(\'Upp\');">Uppenbarelseboken</a></li> \
    				</ul> \
    				</div> \
    			</div>',
  },
  'hc': {
    'ikon': '<div class="imagebox"><img src="img/hc-vit.png" alt="Hannas Café"/></div>',
    'info': '<div class="textbox"><p><b>Hannas Café</b> är en programserie där en mängd kvinnor delar med sig av olika livssituationer som drabbat dem. Det gemensamma för alla vittnesbörd är upplevelsen av hur Gud, mitt i all hopplöshet, grep in och gjorde det trasiga helt.</p></div>',
  },
  'omg': {
    'ikon': '<div class="imagebox"><img src="img/omg-vit.png" alt="Ögonblick med Gud"/></div>',
    'info': '<div class="textbox"><p><b>Ögonblick med Gud</b> är en programserie med små korta andakter som kan fungera som en hjälp att förstå mer om Guds kärlek. Oavsett om du har hittat regelbundenhet i ditt andaktsliv eller om du fortfarande kämpar kan det här programmet hjälpa dig att ta tid för Gud.</p></div>'
  }
}
