'use strict';

// ── Phoneme data ─────────────────────────────────────────────────────────────
const PHONEMES = [
  // SHORT VOWELS
  { id:'vowel_short_a',  num:1,  ipa:'æ',  name:'Short A',      sub:'Short Vowel',   cat:'ms', file:'vowel_short_a',
    keywords:'cat plait bat',
    how:'Open mouth wide, tongue low and forward. Lips spread slightly. The lowest front vowel.',
    patterns:[{sp:'a',words:['cat','bat','hat','map']},{sp:'ai',words:['plait','plaid']}],
    sents:['The black cat sat on the flat map.','Can you hand me that tan bag?'],
    tip:'Exaggerate the jaw drop. Think of a sheep going "baa" — same open, flat sound.',
    mistake:'In RP, TRAP and BATH vowels differ: "cat" /æ/ but "path" /ɑː/. Don\'t mix them.' },

  { id:'vowel_short_e',  num:2,  ipa:'e',  name:'Short E',      sub:'Short Vowel',   cat:'ms', file:'vowel_short_e',
    keywords:'bed head said',
    how:'Open your mouth halfway. Tongue mid-level — not high, not low. Lips slightly spread. Keep it short and crisp.',
    patterns:[{sp:'e',words:['bed','red','ten','pet']},{sp:'ea',words:['head','dead','bread','thread']},{sp:'ai',words:['said','again','against']},{sp:'a',words:['many','any','Thames']},{sp:'ie',words:['friend']}],
    sents:['The red hen sat on the edge of the bed.','When did he get the letter from the head?'],
    tip:'Say "eh?" as in British surprise. Short, clear, mid-front vowel.',
    mistake:'Keep it short — "bed" has /e/ not the long vowel /eɪ/.' },

  { id:'vowel_short_i',  num:3,  ipa:'ɪ',  name:'Short I',      sub:'Short Vowel',   cat:'ms', file:'vowel_short_i',
    keywords:'sit gym build',
    how:'Similar to /iː/ but more relaxed. The tongue is high but not as high. Lips slightly spread but not tense. Shorter and laxer.',
    patterns:[{sp:'i',words:['sit','bit','tip','pin']},{sp:'y',words:['gym','myth','busy','crystal']},{sp:'ui',words:['build','guilt','built','guild']},{sp:'o',words:['women']},{sp:'e',words:['women','pretty','because','English']}],
    sents:['The fish in the big river swim quickly.','Is this the gift in the pink tin?'],
    tip:'Relax your tongue and lips — /ɪ/ is the lazy version of /iː/. Short and lax.',
    mistake:'Don\'t mix up "ship" /ʃɪp/ and "sheep" /ʃiːp/. Short /ɪ/ vs long /iː/.' },

  { id:'vowel_short_o',  num:4,  ipa:'ɒ',  name:'Short O',      sub:'Short Vowel',   cat:'ms', file:'vowel_short_o',
    keywords:'hot want dog',
    how:'Open your mouth wide. Tongue low and back. Lips slightly rounded but not as much as /ɔː/. A low, back, rounded vowel.',
    patterns:[{sp:'o',words:['hot','dog','lot','fox']},{sp:'a',words:['want','wash','what','was']}],
    sents:['The hot dog fell off the top of the box.','Pop the odd sock into the shop pot.'],
    tip:'Say "oh" but cut it very short and don\'t round your lips as much.',
    mistake:'In RP, the "o" in "hot" is /ɒ/ NOT /ɑː/. The lips are slightly rounded.' },

  { id:'vowel_short_u',  num:5,  ipa:'ʌ',  name:'Short U',      sub:'Short Vowel',   cat:'ms', file:'vowel_short_u',
    keywords:'cup son blood',
    how:'Open your mouth slightly. Tongue central and low-mid. Lips neutral — not spread, not rounded. Very open and relaxed.',
    patterns:[{sp:'u',words:['cup','bus','run','mud']},{sp:'o',words:['son','come','love','above']},{sp:'oo',words:['blood','flood']},{sp:'ou',words:['cousin','country','double','touch']}],
    sents:['The young duck dug up the mud under the bush.','Run and touch the rough trunk.'],
    tip:'Say it like you\'ve been hit in the stomach — "uh!". Brief and central.',
    mistake:'Don\'t confuse "cut" /kʌt/ with "caught" /kɔːt/ or "cot" /kɒt/. Three different vowels.' },

  { id:'vowel_short_oo', num:6,  ipa:'ʊ',  name:'Short OO',     sub:'Short Vowel',   cat:'ms', file:'vowel_short_oo',
    keywords:'book put should',
    how:'Lightly round your lips — less rounded than /uː/. Tongue high-back but relaxed. The short, lax version of /uː/.',
    patterns:[{sp:'oo',words:['book','look','foot','good']},{sp:'u',words:['put','push','pull','full']},{sp:'oul',words:['should','could','would']},{sp:'o',words:['wolf','woman','bosom','worsted']}],
    sents:['She took a good look at the full book.','Put the wool cushion on the wooden hook.'],
    tip:'Like /uː/ but cut it short and relax the lips. "Look" is much shorter than "Luke".',
    mistake:'Don\'t make "book" rhyme with "Luke". /ʊ/ is short and lax; /uː/ is long and tense.' },

  { id:'vowel_schwa',    num:7,  ipa:'ə',  name:'Schwa',         sub:'Unstressed Vowel',cat:'ms', file:'vowel_schwa',
    keywords:'about open bacon',
    how:'The most RELAXED sound in English. Your mouth is slightly open, tongue is central. Only appears in UNSTRESSED syllables.',
    patterns:[{sp:'a',words:['about','ago','banana','afraid']},{sp:'e',words:['open','happen','broken','listen']},{sp:'o',words:['bacon','melon','onion','lemon']},{sp:'i',words:['pencil','fossil','council','April']},{sp:'u',words:['supply','circus','focus','status']},{sp:'ou',words:['famous','colour','humour','glamour']},{sp:'er',words:['teacher','sister','butter','writer']},{sp:'re',words:['theatre','centre','lustre','metre']},{sp:'ar',words:['collar','scholar','dollar','grammar']},{sp:'or',words:['doctor','victor','actor','conductor']},{sp:'al',words:['vocal','local','moral','coral']},{sp:'el',words:['cancel','parcel','chisel','vessel']},{sp:'ure',words:['figure','stature','gesture','culture']}],
    sents:['The teacher opened the lesson about the famous painter.','A person\'s banana fell into the garden.'],
    tip:'Schwa is the MOST COMMON sound in English. Every unstressed syllable can become /ə/.',
    mistake:'"banana" is not /bæ.næ.næ/. It should be /bə.nɑː.nə/. Unstressed = schwa.' },

  // LONG VOWELS
  { id:'vowel_long_ee',  num:8,  ipa:'iː', name:'Long EE',      sub:'Long Vowel',    cat:'ml', file:'vowel_long_ee',
    keywords:'see meat field',
    how:'Spread your lips wide as if smiling. Raise the front of your tongue high toward the roof of your mouth. Hold the position — no glide.',
    patterns:[{sp:'ee',words:['see','tree','feet','bee']},{sp:'ea',words:['meat','read','beach','dream']},{sp:'e',words:['he','she','me','we']},{sp:'e-e',words:['these','scene','eve','complete']},{sp:'ie',words:['field','piece','thief','brief']},{sp:'ey',words:['key','money','honey','donkey']},{sp:'y',words:['funny','baby','city','party']},{sp:'i',words:['sardine','marine','machine','vaccine']}],
    sents:['She can see the green tree by the sea.','We need to keep the streets clean.'],
    tip:'Think of the sound when you say "Cheese!" for a photo. Lips spread wide.',
    mistake:'Don\'t add a glide at the end. Keep it pure and steady — not "ee-yuh".' },

  { id:'vowel_long_ar',  num:9,  ipa:'ɑː', name:'Long AR',      sub:'Long Vowel',    cat:'ml', file:'vowel_long_ar',
    keywords:'car bath half',
    how:'Open your mouth wide — as if a doctor is checking your throat. Drop your jaw. Tongue lies flat and low at the back.',
    patterns:[{sp:'ar',words:['car','far','star','park']},{sp:'a',words:['bath','path','grass','fast']},{sp:'al',words:['half','calf','calm','palm']},{sp:'ear',words:['heart','hearth','hearken','dishearten']}],
    sents:['The car park is far from the farm.','Ask your father to cast the glass.'],
    tip:'Practise saying "Ahhh" as if relaxing in a hot bath. Open and back.',
    mistake:'In British RP, "bath" words use /ɑː/ not /æ/. "path" = /pɑːθ/, not /pæθ/.' },

  { id:'vowel_long_aw',  num:10, ipa:'ɔː', name:'Long AW',      sub:'Long Vowel',    cat:'ml', file:'vowel_long_aw',
    keywords:'saw born caught',
    how:'Round your lips into a small oval shape. Raise the back of your tongue toward your soft palate. Hold it steady.',
    patterns:[{sp:'aw',words:['saw','law','draw','lawn']},{sp:'or',words:['born','sport','for','short']},{sp:'al',words:['call','walk','talk','ball']},{sp:'au',words:['sauce','audio','launch','fault']},{sp:'oor',words:['floor','door','indoor','outdoor']},{sp:'oar',words:['board','soar','oar','hoard']},{sp:'ough',words:['thought','bought','ought','brought']},{sp:'ure',words:['sure2','mature','insure','immature']},{sp:'ore',words:['more','snore','core','shore']},{sp:'our',words:['four','pour','court','your']},{sp:'ar',words:['ward','warm','swarm','dwarf']},{sp:'augh',words:['caught','taught','daughter','naughty']}],
    sents:['She thought a walk by the shore would restore her.','The ball caught the wall and fell to the floor.'],
    tip:'Say "or" in "more" and keep that rounded lip shape.',
    mistake:'Don\'t confuse with /ɒ/ (short o). /ɔː/ is LONGER and more rounded.' },

  { id:'vowel_long_oo',  num:11, ipa:'uː', name:'Long OO',      sub:'Long Vowel',    cat:'ml', file:'vowel_long_oo',
    keywords:'moon blue fruit',
    how:'Round your lips tightly into a small circle — like blowing out a candle. Push your lips forward. Raise the back of your tongue high.',
    patterns:[{sp:'oo',words:['moon','food','boot','cool']},{sp:'ue',words:['blue','clue','glue','true']},{sp:'ew',words:['new','few','dew','flew']},{sp:'u-e',words:['rule','tune','cube','rude']},{sp:'ui',words:['fruit','suit','juice','bruise']},{sp:'ou',words:['soup','you','group','wound']},{sp:'o',words:['who','do','to','two']},{sp:'o-e',words:['move','prove','lose','reprove']},{sp:'ough',words:['through']},{sp:'oe',words:['shoe','canoe']},{sp:'u',words:['super','flu','truth','ruby']}],
    sents:['The moon shone on the cool blue pool.','Use a spoon to remove the fruit juice.'],
    tip:'Say "oo" as if surprised by something beautiful. Lips form a tight circle.',
    mistake:'Keep lips tightly rounded. Don\'t relax into /ʊ/ — "food" ≠ "foot".' },

  { id:'vowel_long_er',  num:12, ipa:'ɜː', name:'Long ER',      sub:'Long Vowel',    cat:'ml', file:'vowel_long_er',
    keywords:'her bird turn',
    how:'Relax your lips — don\'t round them. Place your tongue in the middle of your mouth, neither high nor low. Hold it steady.',
    patterns:[{sp:'er',words:['her','fern','verb','herd']},{sp:'ir',words:['bird','girl','sir','first']},{sp:'ur',words:['turn','burn','fur','hurt']},{sp:'ear',words:['learn','earth','early','heard']},{sp:'or',words:['word','work','world','worse']},{sp:'our',words:['journal','courtesy','scourge','adjourn']}],
    sents:['The bird perched on the first fern by the church.','Her words hurt more than the burn.'],
    tip:'Imagine you\'re unsure and say "errr...". That\'s it! No lip rounding.',
    mistake:'British /ɜː/ has NO R colouring. Don\'t pull your tongue back like American English.' },

  // DIPHTHONGS
  { id:'vowel_diph_ay',  num:13, ipa:'eɪ', name:'Long A / AY',  sub:'Diphthong',     cat:'di', file:'vowel_diph_ay',
    keywords:'day rain cake',
    how:'Start with /e/ (mid-front position), then GLIDE UP toward /ɪ/. Your tongue rises and lips slightly spread more.',
    patterns:[{sp:'ay',words:['day','play','say','stay']},{sp:'ai',words:['rain','wait','train','sail']},{sp:'a-e',words:['cake','name','late','game']},{sp:'a',words:['table','baby','paper','label']},{sp:'ea',words:['great','break','steak']},{sp:'ey',words:['they','grey','prey','obey']},{sp:'eigh',words:['eight','weight','neigh','sleigh']}],
    sents:['They say the train may arrive late on that grey day.','Take the cake and place it on the great table.'],
    tip:'The classic "long A" sound. Feel your tongue rise from /e/ to /ɪ/ as you say it.',
    mistake:'Don\'t cut it short. The glide is essential — "day" must end with a slight /ɪ/ quality.' },

  { id:'vowel_diph_eye', num:14, ipa:'aɪ', name:'Long I / EYE',  sub:'Diphthong',     cat:'di', file:'vowel_diph_eye',
    keywords:'time night fly',
    how:'Start with an open /a/ position (low, central tongue, wide jaw), then GLIDE UP to /ɪ/. The jaw closes and tongue rises.',
    patterns:[{sp:'i-e',words:['time','like','bike','fine']},{sp:'igh',words:['high','night','light','right']},{sp:'y',words:['my','sky','fly','try']},{sp:'i',words:['find','kind','mind','blind']},{sp:'ie',words:['pie','die','tie','lie']},{sp:'ye',words:['bye','rye','dye','lye']},{sp:'ei',words:['height','either','neither']}],
    sents:['Try to find the bright light on the right side.','The child might fly the bright kite high tonight.'],
    tip:'Say "ahh" then close to "ee" — "aaaee". That\'s the glide in "my".',
    mistake:'Don\'t flatten it to /aː/. The /ɪ/ glide at the end is essential.' },

  { id:'vowel_diph_oh',  num:15, ipa:'əʊ', name:'Long O / OH',  sub:'Diphthong',     cat:'di', file:'vowel_diph_oh',
    keywords:'home boat know',
    how:'Start with /ə/ (central, relaxed), then GLIDE toward /ʊ/ (rounded). Your lips round and tongue moves back.',
    patterns:[{sp:'o-e',words:['home','bone','stone','note']},{sp:'oa',words:['boat','road','coat','load']},{sp:'ow',words:['low','slow','grow','know']},{sp:'o',words:['go','so','no','also']},{sp:'oe',words:['toe','foe','doe','hoe']},{sp:'ou',words:['soul','though','dough','mould']}],
    sents:['Go home along the road below the old stone wall.','Show the boat how to row toward the coast.'],
    tip:'This is the classic British "long O". Start neutral then round your lips.',
    mistake:'American "go" starts more back; British /əʊ/ starts central. Keep the schwa start.' },

  { id:'vowel_diph_ow',  num:16, ipa:'aʊ', name:'OW / OW',      sub:'Diphthong',     cat:'di', file:'vowel_diph_ow',
    keywords:'now house plough',
    how:'Start with an open /a/ (wide jaw, low tongue), then GLIDE toward /ʊ/ (rounded). Lips round and jaw closes as you move.',
    patterns:[{sp:'ow',words:['now','cow','down','town']},{sp:'ou',words:['house','out','loud','cloud']},{sp:'ough',words:['plough','drought','bough']}],
    sents:['The cloud came down around the whole town.','A loud shout from the crowd in the south.'],
    tip:'Say "ah" then close your lips to "oo" — "ahoo". That\'s how a cow says it!',
    mistake:'Don\'t make it too rounded at the start. The journey from open /a/ is key.' },

  { id:'vowel_diph_oy',  num:17, ipa:'ɔɪ', name:'OY / OI',      sub:'Diphthong',     cat:'di', file:'vowel_diph_oy',
    keywords:'boy coin joy',
    how:'Start with /ɔː/ (rounded lips, back tongue), then GLIDE toward /ɪ/. Tongue moves from back to front. Lips unround as you move.',
    patterns:[{sp:'oy',words:['boy','toy','joy','enjoy']},{sp:'oi',words:['coin','oil','soil','voice']}],
    sents:['The boy joined the royal voyage to avoid the noise.','The soil in the foil was moist with oil.'],
    tip:'Say "oi!" as a British expression of surprise. That\'s your /ɔɪ/!',
    mistake:'Don\'t rhyme "oil" with "ole". It must end with the /ɪ/ glide.' },

  { id:'vowel_diph_air', num:18, ipa:'eə', name:'AIR',           sub:'Diphthong',     cat:'di', file:'vowel_diph_air',
    keywords:'chair care bear',
    how:'Start /e/ then relax to schwa /ə/. Your jaw opens slightly as you move.',
    patterns:[{sp:'air',words:['air','hair','fair','chair']},{sp:'are',words:['care','dare','share','stare']},{sp:'ear',words:['bear','pear','wear','swear']},{sp:'ere',words:['where','there','somewhere','everywhere']},{sp:'eir',words:['their','heir']}],
    sents:['Where is the rare chair with the fair repair?','Beware — a bear may be there near the pear tree.'],
    tip:'Think of the British "there" — glide from /e/ toward schwa.',
    mistake:'In RP, "there" = /ðeə/ not /ðɛːr/. No R colouring!' },

  { id:'vowel_diph_ear', num:19, ipa:'ɪə', name:'EAR',           sub:'Diphthong',     cat:'di', file:'vowel_diph_ear',
    keywords:'ear beer here',
    how:'Start /ɪ/ (short i position), then GLIDE toward /ə/ (schwa). Your jaw slightly opens as you move. The first element is stronger.',
    patterns:[{sp:'ear',words:['ear','near','year','fear']},{sp:'eer',words:['beer','deer','cheer','sheer']},{sp:'ere',words:['here','mere','severe','sincere']},{sp:'ier',words:['pier','fierce','tier','pierce']}],
    sents:['I fear that the deer is near the pier here.','A cheerful engineer appeared.'],
    tip:'Start at /ɪ/ and smoothly glide to schwa. Feel the tongue move down.',
    mistake:'Don\'t split it into two syllables. "Year" is one syllable, not "ye-ah".' },

  { id:'vowel_diph_oor', num:20, ipa:'ʊə', name:'OOR / CURE',   sub:'Diphthong',     cat:'di', file:'vowel_diph_oor',
    keywords:'cure tour moor',
    how:'Start with /ʊ/ (lightly rounded lips), then GLIDE toward /ə/ (schwa). Lips gradually unround as you move.',
    patterns:[{sp:'ure',words:['cure','pure','sure','lure']},{sp:'our',words:['tour','detour','velour','contour']},{sp:'oor',words:['boor','spoor','poor','moor']},{sp:'ewer',words:['fewer','sewer']}],
    sents:['The tour to the pure moor was a sure cure.','I am sure your tour will endure.'],
    tip:'This diphthong is merging with /ɔː/ in modern RP. "Sure" can be /ʃɔː/ or /ʃʊə/.',
    mistake:'Many speakers now say /ɔː/ instead: "poor" = /pɔː/. Both are acceptable in RP.' },

  // CONSONANTS — PLOSIVES
  { id:'cons_p', num:21, ipa:'p', name:'P',  sub:'Voiceless Plosive', cat:'pl', file:'cons_p',
    keywords:'pan happy hippo',
    how:'Press your LIPS together firmly. Build up air pressure. Then release suddenly — a burst of air. No voice.',
    patterns:[{sp:'p',words:['pan','pet','top','cap','map','cup','lip','dip','hip','tip']},{sp:'pp',words:['happy','pepper','copper','supper','happen']}],
    sents:['Pick up the purple pen from the top of the page.','The puppy put its paw on the purple cap.'],
    tip:'Put your hand in front of your mouth — feel a puff of air. No throat vibration.',
    mistake:'At the start of stressed syllables, /p/ is aspirated (with a puff). "pan" = /pʰæn/.' },

  { id:'cons_b', num:22, ipa:'b', name:'B',  sub:'Voiced Plosive',    cat:'pl', file:'cons_b',
    keywords:'bat rabbit building',
    how:'Same lip position as /p/ — press lips together. But ADD VOICE (feel your throat vibrate). Release suddenly. No puff of air like /p/.',
    patterns:[{sp:'b',words:['bat','bus','bag','bit']},{sp:'bb',words:['rabbit','bubble','rubber','ribbon']},{sp:'bu',words:['building','buy','built','bury']}],
    sents:['Bob bought a big blue bag of bread.','The rabbit bit the rubber ball by the bed.'],
    tip:'Touch your throat — you should feel vibration when saying /b/.',
    mistake:'At word endings, /b/ is often devoiced. "rob" ends with less vibration.' },

  { id:'cons_t', num:23, ipa:'t', name:'T',  sub:'Voiceless Plosive', cat:'pl', file:'cons_t',
    keywords:'tap butter walked',
    how:'Touch the tip of your tongue to the ridge just BEHIND your upper teeth (alveolar ridge). Build up air. Release suddenly with a burst. No voice.',
    patterns:[{sp:'t',words:['tap','ten','sit','hot']},{sp:'tt',words:['butter','better','letter','bottle']},{sp:'ed',words:['walked','jumped','stopped','missed']},{sp:'th',words:['Thomas','thyme','Thames','Thailand']}],
    sents:['Take the hot pot from the table at the top.','The cat sat on the mat and ate the lot.'],
    tip:'Feel the tongue tip on the ridge — NOT touching the teeth (that\'s /θ/).',
    mistake:'In informal British speech, /t/ mid-word becomes a glottal stop. "butter" = /bʌʔə/.' },

  { id:'cons_d', num:24, ipa:'d', name:'D',  sub:'Voiced Plosive',    cat:'pl', file:'cons_d',
    keywords:'dog muddy played',
    how:'Same tongue position as /t/ — tip on alveolar ridge. But ADD VOICE. Feel your throat vibrate. Release suddenly.',
    patterns:[{sp:'d',words:['dog','day','bed','mad','did','dug','bad','nod','red']},{sp:'dd',words:['muddy','saddle','middle','fiddle','puddle']},{sp:'ed',words:['played','moved','called','pulled','lived']}],
    sents:['The dog dug a deep ditch in the dark garden.','Did the red bird land on the old dead wood?'],
    tip:'Same as /t/ but voiced. Touch your throat — vibration = /d/, no vibration = /t/.',
    mistake:'/d/ at word endings is often devoiced. Be careful "bad" doesn\'t sound like "bat".' },

  { id:'cons_k', num:25, ipa:'k', name:'K',  sub:'Voiceless Plosive', cat:'pl', file:'cons_k',
    keywords:'key cat back',
    how:'Raise the BACK of your tongue to touch the soft palate (velum). Build up air pressure. Release suddenly. No voice.',
    patterns:[{sp:'k',words:['key','king','kind','kit']},{sp:'c',words:['cat','cup','coat','car']},{sp:'ck',words:['back','lock','duck','neck']},{sp:'ch',words:['school','ache','chaos','character']},{sp:'qu',words:['queen','quilt','quiz','quick']},{sp:'que',words:['queue','plaque','unique','antique']},{sp:'cc',words:['account','occur','accurate','occasion']}],
    sents:['Take the black clock and put the key on the back of the box.','Could a cat catch a quick duck?'],
    tip:'Feel the back of your tongue press up. /k/ and /g/ are at the BACK of the mouth.',
    mistake:'Silent K: "knee", "knife", "know", "knock" — the K is not pronounced.' },

  { id:'cons_g', num:26, ipa:'g', name:'G',  sub:'Voiced Plosive',    cat:'pl', file:'cons_g',
    keywords:'get egg ghost',
    how:'Same back-tongue position as /k/. But ADD VOICE — feel your throat vibrate. Release suddenly.',
    patterns:[{sp:'g',words:['get','go','dog','leg']},{sp:'gg',words:['egg','giggle','wiggle','bigger']},{sp:'gh',words:['ghost','ghetto','ghoul','gherkin']},{sp:'gue',words:['colleague','vague','league','tongue']},{sp:'gu',words:['guard','guest','guide','guild']}],
    sents:['The big dog got through the green gate in the fog.','Grab the big log and get going.'],
    tip:'Same as /k/ but add voice. "Go" starts with vibration; "co" does not.',
    mistake:'Silent G: "gnat", "gnome", "gnaw", "sign", "design" — the G is silent.' },

  // CONSONANTS — FRICATIVES
  { id:'cons_f', num:27, ipa:'f', name:'F',  sub:'Voiceless Fricative', cat:'fr', file:'cons_f',
    keywords:'fan off phone',
    how:'Place your UPPER FRONT TEETH on your lower lip. Push air through the narrow gap. No voice — no throat vibration.',
    patterns:[{sp:'f',words:['fan','fat','fit','fun']},{sp:'ff',words:['off','cliff','staff','stuff']},{sp:'ph',words:['photo','phone','dolphin','elephant']},{sp:'gh',words:['enough','rough','laugh','tough']},{sp:'lf',words:['half','calf','behalf','shelf']}],
    sents:['Fifty fluffy foxes fled from the forest to find food.','Life is often brief — offer fresh fruit.'],
    tip:'Feel the slight tickle of your teeth on your lip. That\'s the right position.',
    mistake:'Don\'t confuse "ph" words: "phone" = /fəʊn/ not /pəʊn/.' },

  { id:'cons_v', num:28, ipa:'v', name:'V',  sub:'Voiced Fricative',   cat:'fr', file:'cons_v',
    keywords:'van give of',
    how:'Same teeth-on-lip position as /f/. But ADD VOICE — feel your throat vibrate strongly.',
    patterns:[{sp:'v',words:['van','vine','love','vest']},{sp:'ve',words:['give','live','love','have']},{sp:'f',words:['of','thereof','hereof','whereof']}],
    sents:['The van drove over the vast valley to the village.','Five brave divers move above the vivid cave.'],
    tip:'Hold /v/ for a moment — you should feel and hear a buzz. "Van" buzzes; "fan" does not.',
    mistake:'Don\'t substitute "w" for "v" — "van" ≠ "wan". Common mistake for some learners.' },

  { id:'cons_th_soft', num:29, ipa:'θ', name:'TH (soft)',  sub:'Voiceless Fricative', cat:'fr', file:'cons_th_soft',
    keywords:'think bath three',
    how:'Place the TIP of your tongue BETWEEN your teeth — or just behind your upper teeth. Push air through. No voice.',
    patterns:[{sp:'th',words:['think','thank','bath','path','teeth','thin','thick','three','thread','through']}],
    sents:['Think through the method — three paths are worth a thought.','The thin thread stretched through the thick cloth.'],
    tip:'Stick your tongue out slightly between your teeth. A mirror helps to check.',
    mistake:'Don\'t replace with /s/ or /f/ — "think" ≠ "sink", "three" ≠ "free".' },

  { id:'cons_th_hard', num:30, ipa:'ð', name:'TH (hard)',  sub:'Voiced Fricative',   cat:'fr', file:'cons_th_hard',
    keywords:'the mother this',
    how:'Same tongue position as /θ/. But ADD VOICE — feel a buzzy vibration. This sound feels "thicker" than /θ/.',
    patterns:[{sp:'th',words:['the','this','that','them','with','they','then','there','thus','mother']}],
    sents:['They would rather bathe in the smooth weather together.','The mother breathes through those other paths.'],
    tip:'/ð/ appears in common function words: the, this, that, they, them, there, than, though.',
    mistake:'Don\'t replace with /d/ or /z/ — "this" ≠ "dis". Feel the tongue between the teeth.' },

  { id:'cons_s', num:31, ipa:'s', name:'S',  sub:'Voiceless Fricative', cat:'fr', file:'cons_s',
    keywords:'sun miss city',
    how:'Bring tongue tip CLOSE (not touching) to the alveolar ridge. Channel air down the middle of your tongue. A thin, sharp hiss. No voice.',
    patterns:[{sp:'s',words:['sun','bus','sad','sit']},{sp:'ss',words:['miss','class','dress','cross']},{sp:'c',words:['city','cell','rice','nice']},{sp:'sc',words:['scene','science','scent','scissors']},{sp:'ps',words:['psyche','psalm','psychology','pseudo']},{sp:'x',words:['tax','fox','six','box']},{sp:'ce',words:['place','face','race','grace']},{sp:'se',words:['mouse','house','blouse','loose']},{sp:'cy',words:['bicycle','fancy','juicy','mercy']}],
    sents:['The six swans sat still on the soft surface of the sea.','Susan sells the finest sea salt.'],
    tip:'Tongue near the ridge but NOT touching. Controlled airflow over a central groove.',
    mistake:'Don\'t over-hiss. Also: "s" after voiced sounds = /z/ (dogs /dɒgz/).' },

  { id:'cons_z', num:32, ipa:'z', name:'Z',  sub:'Voiced Fricative',   cat:'fr', file:'cons_z',
    keywords:'zip buzz dogs',
    how:'Same as /s/ but ADD VOICE. The "buzz" of the voice adds a low vibration to the hiss.',
    patterns:[{sp:'z',words:['zip','zoo','zero','zone']},{sp:'zz',words:['buzz','jazz','fizz','fuzz']},{sp:'s',words:['dogs','rose','nose','easy']},{sp:'se',words:['cheese','these','ease','tease']},{sp:'ze',words:['squeeze','breeze','freeze','sneeze']},{sp:'x',words:['xylophone','xerox','xenon','xenophobia']}],
    sents:['The bees in the busy zone buzzed near the frozen roses.','Zoe\'s clothes were frozen in the blizzard.'],
    tip:'/s/ at the end of voiced words becomes /z/: "dogs" = /dɒgz/, "beds" = /bedz/.',
    mistake:'Don\'t confuse -s plural rules: /s/ after voiceless, /z/ after voiced sounds.' },

  { id:'cons_sh', num:33, ipa:'ʃ', name:'SH', sub:'Voiceless Fricative', cat:'fr', file:'cons_sh',
    keywords:'ship chef nation',
    how:'Bring your tongue to a broad, flat position slightly further back than /s/. Lips slightly rounded and protruded. "Shhhh" — like quieting someone.',
    patterns:[{sp:'sh',words:['ship','shoe','fish','wish']},{sp:'ch',words:['chef','machine','chic','champagne']},{sp:'ti',words:['nation','station','action','mention']},{sp:'ssi',words:['mission','passion','permission','expression']},{sp:'ci',words:['special','social','official','ancient']},{sp:'si',words:['tension','version','pension','mansion']},{sp:'s',words:['sugar','sure','insure']}],
    sents:['She shushed the children by the fish and chip shop.','The flashy fashion show featured fresh shrubbery.'],
    tip:'Imagine hushing a baby — "shhh!" Your lips push forward slightly.',
    mistake:'Don\'t use /s/ instead of /ʃ/. "Ship" and "sip" are different sounds!' },

  { id:'cons_zh', num:34, ipa:'ʒ', name:'ZH', sub:'Voiced Fricative',   cat:'fr', file:'cons_zh',
    keywords:'vision measure beige',
    how:'Same position as /ʃ/ but ADD VOICE. The voiced version of "sh". Mainly in borrowed French words and "-sion"/"-sure" endings.',
    patterns:[{sp:'si',words:['vision','decision','television','revision']},{sp:'su',words:['measure','treasure','pleasure','leisure']},{sp:'ge',words:['beige','mirage','garage','camouflage']},{sp:'z',words:['azure','seizure']},{sp:'g',words:['genre','regime']}],
    sents:['The television showed a vision of beige leisure.','It is a pleasure to measure the treasure.'],
    tip:'/ʒ/ is rare in native English. Master it in "measure", "vision", "beige".',
    mistake:'Don\'t substitute /dʒ/ for /ʒ/. "Measure" = /meʒə/ not /medʒə/.' },

  { id:'cons_h', num:35, ipa:'h', name:'H',  sub:'Voiceless Fricative', cat:'fr', file:'cons_h',
    keywords:'hat who hill',
    how:'Simply breathe out through your open mouth and throat. No specific tongue or lip position — just an airy rush of breath.',
    patterns:[{sp:'h',words:['hat','hot','hit','hop','hub','had','him','has','hug','hen']},{sp:'wh',words:['who','whole','whose']}],
    sents:['He held his hat over his head in the heavy heat.','The happy hamster hid behind the huge hedge.'],
    tip:'Breathe on your glasses to clean them — that airy sound is /h/.',
    mistake:'Silent H: "hour", "honest", "heir", "honour", "vehicle", "herb" (British) — no H sound.' },

  // CONSONANTS — AFFRICATES
  { id:'cons_ch', num:36, ipa:'tʃ', name:'CH', sub:'Voiceless Affricate', cat:'af', file:'cons_ch',
    keywords:'chair catch picture',
    how:'Start with /t/ (tongue on ridge), then immediately release into /ʃ/ (sh sound). A TWO-PART sound that feels like one smooth movement.',
    patterns:[{sp:'ch',words:['chair','chip','teach','church']},{sp:'tch',words:['catch','match','watch','fetch']},{sp:'t',words:['picture','future','creature','feature']},{sp:'ture',words:['nature','culture','pasture','texture']}],
    sents:['Choose the right chair and watch the champion teach the children.','The rich butcher watched the sketch catch fire.'],
    tip:'Say /t/ then /ʃ/ fast: "t-sh" → "ch". The stop then the release.',
    mistake:'Don\'t make it just /ʃ/ (sh). "Chair" needs the /t/ burst before the /ʃ/ flow.' },

  { id:'cons_j', num:37, ipa:'dʒ', name:'J',  sub:'Voiced Affricate',   cat:'af', file:'cons_j',
    keywords:'jump giant bridge',
    how:'Same movement as /tʃ/ but VOICED. Start with /d/ then release into /ʒ/. Feel your throat vibrate throughout.',
    patterns:[{sp:'j',words:['jump','jar','joy','just']},{sp:'g',words:['giant','gem','gentle','giraffe']},{sp:'dge',words:['bridge','hedge','judge','ridge']},{sp:'ge',words:['cage','huge','page','age']},{sp:'gy',words:['gym','allergy','gyrate','gypsy']},{sp:'di',words:['soldier','gradual','individual','cordial']}],
    sents:['The judge in the large cage urged John to jump the bridge.','The giant giraffe juggled jars of jam.'],
    tip:'Say /d/ then /ʒ/ fast: "d-zh" → "j". Same as /tʃ/ but with voice.',
    mistake:'In British English, "g" before "e/i" = /dʒ/. "Gentle" = /dʒentl/.' },

  // CONSONANTS — NASALS
  { id:'cons_m', num:38, ipa:'m', name:'M',  sub:'Nasal',              cat:'na', file:'cons_m',
    keywords:'mat hammer lamb',
    how:'Close your LIPS. Let air flow through your NOSE. Voice resonates in nasal cavity. A humming sound. Feel your nose vibrate.',
    patterns:[{sp:'m',words:['mat','me','ham','mud']},{sp:'mm',words:['hammer','summer','swimmer','comment']},{sp:'mb',words:['lamb','comb','thumb','climb']},{sp:'mn',words:['column','autumn','hymn','condemn']},{sp:'me',words:['come','some','become','welcome']}],
    sents:['The mum made some warm meatballs for the summer meal.','The lamb climbed through the morning mist.'],
    tip:'Hum with closed lips — "mmm". That\'s /m/. Feel the nasal resonance.',
    mistake:'Silent M before N: "mnemonic" = /nɪˈmɒnɪk/.' },

  { id:'cons_n', num:39, ipa:'n', name:'N',  sub:'Nasal',              cat:'na', file:'cons_n',
    keywords:'net running know',
    how:'Touch the tip of your tongue to the alveolar ridge (same as /t/ and /d/). Let air flow through your NOSE.',
    patterns:[{sp:'n',words:['net','no','ten','nap']},{sp:'nn',words:['running','dinner','winner','connect']},{sp:'kn',words:['know','knee','knife','knock']},{sp:'gn',words:['gnome','gnaw','gnarl','gnash']},{sp:'ne',words:['phone','tone','bone','cone']}],
    sents:['Now and then, in the morning sun, ten thin lines narrow into one.','The knight knocked and kneeled.'],
    tip:'Like /m/ but tongue touches the ridge instead of lips closing.',
    mistake:'Silent KN: "know" = /nəʊ/. The K is completely silent in kn- words.' },

  { id:'cons_ng', num:40, ipa:'ŋ', name:'NG', sub:'Nasal',              cat:'na', file:'cons_ng',
    keywords:'king think drink',
    how:'Raise the BACK of your tongue to touch the soft palate (same as /k/ and /g/). Let air flow through your NOSE. Tongue tip is DOWN.',
    patterns:[{sp:'ng',words:['king','ring','long','song']},{sp:'n',words:['think','bank','sink','drink']},{sp:'nk',words:['think','drink','pink','rank']}],
    sents:['The king sang a long song, ringing a gong.','The young gang clung to the strong climbing ring.'],
    tip:'This sound NEVER starts a word in English. It\'s always in the middle or end.',
    mistake:'Many learners add a /g/ after /ŋ/: "singing" = /sɪŋɪŋ/ NOT /sɪŋgɪŋ/.' },

  // CONSONANTS — APPROXIMANTS
  { id:'cons_l', num:41, ipa:'l', name:'L',  sub:'Lateral Approximant', cat:'ap', file:'cons_l',
    keywords:'leg bell table',
    how:'Touch tongue TIP to the alveolar ridge. Let air flow around the SIDES of the tongue (not the middle). "Clear L" before vowels; "dark L" (velarised) at end of syllables.',
    patterns:[{sp:'l',words:['leg','tall','let','lip']},{sp:'ll',words:['bell','fill','well','hill']},{sp:'le',words:['table','bottle','little','people']},{sp:'al',words:['camel','capital','total','final']},{sp:'il',words:['pencil','fossil','council','April']}],
    sents:['The tall lad lay along the long wall like a log.','Tell the little girl to pull the ball slowly.'],
    tip:'Clear /l/ at syllable start (like "leg"). Dark /l/ at the end (like "tall").',
    mistake:'Don\'t substitute /r/ for /l/ or vice versa. "Light" ≠ "right"; "long" ≠ "rong".' },

  { id:'cons_r', num:42, ipa:'r', name:'R',  sub:'Approximant',         cat:'ap', file:'cons_r',
    keywords:'red carry write',
    how:'Curl or bunch the tip of your tongue back, toward (but not touching) the area just behind the alveolar ridge. Round your lips slightly.',
    patterns:[{sp:'r',words:['red','run','rain','rug']},{sp:'rr',words:['carrot','carry','arrow','mirror']},{sp:'wr',words:['write','wrong','wrap','wrist']},{sp:'rh',words:['rhino','rhythm','rhyme','rhubarb']}],
    sents:['The red rabbit ran rapidly across the rocky river.','Rain rarely rushes around the rural roads.'],
    tip:'In RP, /r/ is NON-RHOTIC — only pronounced before vowels. "Car" = /kɑː/ (no R at end).',
    mistake:'British RP does NOT pronounce R at end of words or before consonants. "Bird" = /bɜːd/ not /bɜːrd/.' },

  { id:'cons_w', num:43, ipa:'w', name:'W',  sub:'Approximant',         cat:'ap', file:'cons_w',
    keywords:'wet when queen',
    how:'Round your lips into a tight circle (like /uː/ position). Raise the back of your tongue. Then immediately GLIDE into the following vowel.',
    patterns:[{sp:'w',words:['water','wet','swim','win']},{sp:'wh',words:['when','where','which','wheel']},{sp:'u',words:['queen','quiet','quiz','quick']},{sp:'o',words:['one','once','oneself']}],
    sents:['We will wait by the wide waterway and watch the waves.','Quick! Where is the white whale?'],
    tip:'Start with rounded lips (like blowing a kiss), then quickly open into the vowel.',
    mistake:'Silent W: "write", "wrong", "wrap", "wrist", "wren", "sword" — no W sound.' },

  { id:'cons_y', num:44, ipa:'j', name:'Y',  sub:'Approximant',         cat:'ap', file:'cons_y',
    keywords:'yes use feud',
    how:'Raise the FRONT-MIDDLE of your tongue toward the hard palate. Glide quickly into the following vowel. Start from /ɪ/ position then move.',
    patterns:[{sp:'y',words:['yes','yet','yell','year']},{sp:'u',words:['use','unit','uniform','useful']},{sp:'ew',words:['new','few','dew','skew']},{sp:'eu',words:['feud','Europe','eulogy','euphoria']}],
    sents:['Yes, you can use your yellow yarn in the yard.','A few years ago, the youngsters ruled.'],
    tip:'Say /ɪ/ then immediately say the next vowel. That transition IS the /j/ sound.',
    mistake:'/j/ is the consonant Y. Don\'t confuse with vowel Y (as in "city" /ɪ/ or "my" /aɪ/).' },
];

// ── Category metadata ────────────────────────────────────────────────────────
const CATS = {
  ml: { label:'Long Monophthongs',  color:'#1565c0' },
  ms: { label:'Short Monophthongs', color:'#9b5e00' },
  di: { label:'Diphthongs',         color:'#534ab7' },
  pl: { label:'Plosives',           color:'#e65100' },
  fr: { label:'Fricatives',         color:'#2e7d32' },
  af: { label:'Affricates',         color:'#880e4f' },
  na: { label:'Nasals',             color:'#4527a0' },
  ap: { label:'Approximants & Lateral', color:'#0d47a1' },
};

// ── Navigation sections ──────────────────────────────────────────────────────
const NAV = [
  { type:'divider',   label:'GETTING STARTED' },
  { id:'welcome',     icon:'🏠', label:'Welcome',                count:null },
  { id:'howto',       icon:'📖', label:'How to Use',             count:null },
  { id:'foundations', icon:'🧱', label:'Sound Foundations',      count:null },
  { type:'divider',   label:'VOWEL SOUNDS (20)' },
  { id:'ms',          icon:'🔶', label:'Short Monophthongs',     count:7    },
  { id:'ml',          icon:'🔷', label:'Long Monophthongs',      count:5    },
  { id:'di',          icon:'🔁', label:'Diphthongs',             count:8    },
  { type:'divider',   label:'CONSONANT SOUNDS (24)' },
  { id:'pl',          icon:'💥', label:'Plosives',               count:6    },
  { id:'fr',          icon:'🌬️', label:'Fricatives',             count:9    },
  { id:'af',          icon:'⚡', label:'Affricates',             count:2    },
  { id:'na',          icon:'👃', label:'Nasals',                 count:3    },
  { id:'ap',          icon:'〰️', label:'Approximants & Lateral', count:4    },
  { type:'divider',   label:'REFERENCE' },
  { id:'ipa-chart',   icon:'📊', label:'IPA Chart',              count:null },
  { id:'all',         icon:'🔤', label:'All 44 Phonemes',        count:44   },
  { id:'reference',   icon:'📋', label:'Reference Table',        count:null },
  { type:'divider',   label:'PRACTICE' },
  { id:'games',       icon:'🎮', label:'Games Hub',              count:null },
  { id:'mp',          icon:'👂', label:'Minimal Pairs',          count:null },
  { id:'quiz',        icon:'🧠', label:'Quiz',                   count:null },
];

// ── Audio map: IPA bare symbol → MP3 file path ───────────────────────────────
const AUDIO_MAP = {
  'iː':'audio/vowel_long_ee.mp3',
  'ɪ': 'audio/vowel_short_i.mp3',
  'ʊ': 'audio/vowel_short_oo.mp3',
  'uː':'audio/vowel_long_oo.mp3',
  'e': 'audio/vowel_short_e.mp3',
  'ə': 'audio/vowel_schwa.mp3',
  'ɜː':'audio/vowel_long_er.mp3',
  'ɔː':'audio/vowel_long_aw.mp3',
  'æ': 'audio/vowel_short_a.mp3',
  'ʌ': 'audio/vowel_short_u.mp3',
  'ɑː':'audio/vowel_long_ar.mp3',
  'ɒ': 'audio/vowel_short_o.mp3',
  'ɪə':'audio/vowel_diph_ear.mp3',
  'eɪ':'audio/vowel_diph_ay.mp3',
  'ʊə':'audio/vowel_diph_oor.mp3',
  'ɔɪ':'audio/vowel_diph_oy.mp3',
  'əʊ':'audio/vowel_diph_oh.mp3',
  'eə':'audio/vowel_diph_air.mp3',
  'aɪ':'audio/vowel_diph_eye.mp3',
  'aʊ':'audio/vowel_diph_ow.mp3',
  'p': 'audio/cons_p.mp3',
  'b': 'audio/cons_b.mp3',
  't': 'audio/cons_t.mp3',
  'd': 'audio/cons_d.mp3',
  'tʃ':'audio/cons_ch.mp3',
  'dʒ':'audio/cons_j.mp3',
  'k': 'audio/cons_k.mp3',
  'g': 'audio/cons_g.mp3',
  'f': 'audio/cons_f.mp3',
  'v': 'audio/cons_v.mp3',
  'θ': 'audio/cons_th_soft.mp3',
  'ð': 'audio/cons_th_hard.mp3',
  's': 'audio/cons_s.mp3',
  'z': 'audio/cons_z.mp3',
  'ʃ': 'audio/cons_sh.mp3',
  'ʒ': 'audio/cons_zh.mp3',
  'h': 'audio/cons_h.mp3',
  'm': 'audio/cons_m.mp3',
  'n': 'audio/cons_n.mp3',
  'ŋ': 'audio/cons_ng.mp3',
  'l': 'audio/cons_l.mp3',
  'r': 'audio/cons_r.mp3',
  'w': 'audio/cons_w.mp3',
  'j': 'audio/cons_y.mp3',
};

// ── State ────────────────────────────────────────────────────────────────────
let currentSection = 'welcome';
let currentAudio = null;
const audioCache = {};
let searchQuery = '';
let gameCategory = 'all';
let deferredInstallPrompt = null;

// ── Premium / licence key control ─────────────────────────────────────────────
const FREE_SECTIONS = new Set(['welcome','howto','foundations','ms','ipa-chart']);
let isPremium = false;

// Restore premium state from localStorage and silently re-validate with server
(function initPremium() {
  const key        = localStorage.getItem('sc44_license_key');
  const instanceId = localStorage.getItem('sc44_instance_id');
  if (!key || !instanceId) return;
  isPremium = true; // optimistic — server check below may revoke this
  fetch('/api/validate-license', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ licenseKey: key, instanceId, action: 'validate' }),
  })
    .then(r => r.json())
    .then(data => {
      if (!data.valid) {
        isPremium = false;
        localStorage.removeItem('sc44_license_key');
        localStorage.removeItem('sc44_instance_id');
        buildSidebar();
        updateSidebar();
        renderContent();
        showToast('Your licence is no longer active. Please re-enter your key.');
      }
    })
    .catch(() => {}); // offline — keep optimistic premium state
})();

function isLocked(id) {
  return !isPremium && !FREE_SECTIONS.has(id);
}

async function getPremiumLink() {
  const africanCountries = ['NG','GH','KE','ZA','EG','ET','TZ','UG','CM','CI','SN','ZM','ZW','RW','MZ','AO','MG','BJ','BF','ML','NE','TD','SO','SS','ER','DJ','CF','CG','CD','GA','GQ','ST','CV','KM','MU','SC','LY','TN','DZ','MA','SD','MR','GM','GW','SL','LR','GN','TG','LS','SZ','BW','NA','MW'];
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    if (africanCountries.includes(data.country_code)) {
      showAfricanPlanPicker();
    } else {
      window.open('https://thriveenglish.gumroad.com/l/ynxtkb?wanted=true&offer_code=FOUNDING', '_blank');
    }
  } catch(e) {
    window.open('https://thriveenglish.gumroad.com/l/ynxtkb?wanted=true&offer_code=FOUNDING', '_blank');
  }
}

function showAfricanPlanPicker() {
  const existing = document.getElementById('plan-picker-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'plan-picker-overlay';
  overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(13,43,85,0.88);z-index:99999;display:flex;align-items:center;justify-content:center;padding:16px;';
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) overlay.remove();
  });

  overlay.innerHTML = `
    <div style="background:#fff;border-radius:18px;width:100%;max-width:420px;padding:32px 24px;text-align:center;animation:cardModalSlide 0.22s ease;">
      <div style="font-size:20px;font-weight:700;color:#0D2B55;margin-bottom:6px;">Choose Your Plan</div>
      <div style="font-size:13px;color:#888;margin-bottom:24px;">Africa pricing — secure checkout via Selfany</div>
      <div style="display:flex;gap:14px;margin-bottom:20px;">
        <div style="flex:1;border:2px solid #1A7A6E;border-radius:12px;padding:18px 12px;cursor:pointer;" onclick="window.open('https://selfany.com/SoundCode44','_blank');document.getElementById('plan-picker-overlay').remove();">
          <div style="font-size:12px;font-weight:700;color:#1A7A6E;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;">Annual</div>
          <div style="font-size:28px;font-weight:700;color:#0D2B55;margin-bottom:4px;">$19.99</div>
          <div style="font-size:12px;color:#888;margin-bottom:14px;">per year</div>
          <div style="background:#1A7A6E;color:#fff;border:none;border-radius:8px;padding:10px 16px;font-size:14px;font-weight:600;cursor:pointer;display:block;">Get Annual</div>
        </div>
        <div style="flex:1;border:2px solid #C9973A;border-radius:12px;padding:18px 12px;cursor:pointer;" onclick="window.open('https://selfany.com/SoundCode44Lifetime','_blank');document.getElementById('plan-picker-overlay').remove();">
          <div style="font-size:12px;font-weight:700;color:#C9973A;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;">Lifetime</div>
          <div style="font-size:28px;font-weight:700;color:#0D2B55;margin-bottom:4px;">$49.99</div>
          <div style="font-size:12px;color:#888;margin-bottom:14px;">one-time</div>
          <div style="background:#C9973A;color:#0D2B55;border:none;border-radius:8px;padding:10px 16px;font-size:14px;font-weight:600;cursor:pointer;display:block;">Get Lifetime</div>
        </div>
      </div>
      <div style="font-size:12px;color:#aaa;">&#x2715; <span style="cursor:pointer;" onclick="document.getElementById('plan-picker-overlay').remove();">Close</span></div>
    </div>
  `;
  document.body.appendChild(overlay);
  history.pushState({planPicker:true},'');
}

function showPremiumOverlay() {
  document.getElementById('premium-overlay').classList.add('open');
  history.pushState({premiumOverlay:true},'');
  document.getElementById('prem-code-area').classList.remove('show');
  document.getElementById('prem-code-input').value = '';
  document.getElementById('prem-code-msg').textContent = '';
}

function closePremiumOverlay(e) {
  if (!e || e.target === document.getElementById('premium-overlay')) {
    document.getElementById('premium-overlay').classList.remove('open');
  }
}

function toggleCodeArea() {
  const area = document.getElementById('prem-code-area');
  area.classList.toggle('show');
  if (area.classList.contains('show')) {
    setTimeout(() => document.getElementById('prem-code-input').focus(), 50);
  }
}

async function submitAccessCode() {
  const key = document.getElementById('prem-code-input').value.trim();
  const msg = document.getElementById('prem-code-msg');
  const btn = document.getElementById('prem-code-btn');

  if (!key) {
    msg.textContent = 'Please enter your licence key.';
    msg.style.color = '#e53935';
    return;
  }

  msg.textContent = 'Validating licence key…';
  msg.style.color = '';
  btn.disabled = true;
  btn.textContent = 'Checking…';

  try {
    const res  = await fetch('/api/validate-license', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ licenseKey: key, action: 'activate' }),
    });
    const data = await res.json();

    if (data.valid) {
      isPremium = true;
      localStorage.setItem('sc44_license_key',  key);
      localStorage.setItem('sc44_instance_id',  data.instanceId);
      closePremiumOverlay();
      buildSidebar();
      updateSidebar();
      renderContent();
      const _msg = currentKeyType === 'lifetime' ? '✓ Lifetime access unlocked! You can install the app for offline use.' :
                   currentKeyType === 'review'   ? '✓ Review access granted.' :
                   '✓ Full access unlocked! Enjoy all 44 phonemes.';
      showToast(_msg);
    } else {
      msg.textContent = data.error || 'Invalid licence key — please try again.';
      msg.style.color = '#e53935';
    }
  } catch {
    msg.textContent = 'Connection error — please check your internet and try again.';
    msg.style.color = '#e53935';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Unlock Access';
  }
}

// ── Game category options ─────────────────────────────────────────────────────
const GAME_CAT_OPTS = [
  {id:'all',         label:'All 44 Sounds'},
  {id:'ml',          label:'Long Mono'},
  {id:'ms',          label:'Short Mono'},
  {id:'di',          label:'Diphthongs'},
  {id:'pl',          label:'Plosives'},
  {id:'fr',          label:'Fricatives'},
  {id:'af',          label:'Affricates'},
  {id:'na',          label:'Nasals'},
  {id:'ap',          label:'Approximants'},
  {id:'vowels',      label:'All Vowels'},
  {id:'consonants',  label:'All Consonants'},
];

function setGameCat(cat) {
  gameCategory = cat;
  document.getElementById('content').innerHTML = renderGames();
}

function getFilteredPhonemes() {
  if (gameCategory === 'all') return PHONEMES;
  if (gameCategory === 'vowels')     return PHONEMES.filter(p => ['ml','ms','di'].includes(p.cat));
  if (gameCategory === 'consonants') return PHONEMES.filter(p => !['ml','ms','di'].includes(p.cat));
  return PHONEMES.filter(p => p.cat === gameCategory);
}

function matchesCat(phonemeCat) {
  if (gameCategory === 'all') return true;
  if (gameCategory === 'vowels')     return ['ml','ms','di'].includes(phonemeCat);
  if (gameCategory === 'consonants') return !['ml','ms','di'].includes(phonemeCat);
  return phonemeCat === gameCategory;
}

function gameCatPills() {
  return GAME_CAT_OPTS.map(c =>
    `<button class="cat-pill${gameCategory===c.id?' active':''}" onclick="setGameCat('${c.id}')">${c.label}</button>`
  ).join('');
}

function catBanner() {
  if (gameCategory === 'all') return '';
  const name = GAME_CAT_OPTS.find(c => c.id === gameCategory)?.label || '';
  return `<div style="background:#e8f4fd;border-radius:20px;display:inline-block;padding:3px 12px;font-size:11px;font-weight:600;color:#1565c0;margin-bottom:12px">📌 ${name}</div>`;
}

// ── Utility ──────────────────────────────────────────────────────────────────
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

function escQ(s) { return String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'"); }

function setTitle(t) {
  const el = document.getElementById('topbar-title');
  if (el) el.textContent = t;
}

// ── Audio playback ───────────────────────────────────────────────────────────
function playSound(fileBase) {
  if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
  const a = new Audio('audio/' + fileBase + '.mp3');
  currentAudio = a;
  a.play().catch(() => showToast('Audio file not found'));
}

let _ipaLongPressTimer = null;
let _ipaTouchMoved = false;
function ipaTouchStart(ipa, word, e) {
  _ipaTouchMoved = false;
  ipaLongPressCancel();
  _ipaLongPressTimer = setTimeout(() => {
    _ipaLongPressTimer = null;
    if (!_ipaTouchMoved) playWord(word);
  }, 400);
}
function ipaTouchEnd(ipa) {
  if (_ipaLongPressTimer) {
    clearTimeout(_ipaLongPressTimer);
    _ipaLongPressTimer = null;
    if (!_ipaTouchMoved) speakPhoneme(ipa);
  }
}
function ipaLongPressStart(word, e) {
  if (e && e.cancelable) e.preventDefault();
  ipaLongPressCancel();
  _ipaLongPressTimer = setTimeout(() => {
    _ipaLongPressTimer = null;
    playWord(word);
  }, 400);
}
function ipaLongPressCancel() {
  if (_ipaLongPressTimer) { clearTimeout(_ipaLongPressTimer); _ipaLongPressTimer = null; }
}

function speakPhoneme(ipa) {
  const path = AUDIO_MAP[ipa];
  if (!path) { showToast('No audio for ' + ipa); return; }

  // Stop any currently playing audio
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Use cached Audio object if available, create and cache on first use
  if (audioCache[ipa]) {
    currentAudio = audioCache[ipa];
    currentAudio.currentTime = 0;
    currentAudio.play().catch(() => showToast('Audio not available'));
  } else {
    const audio = new Audio(path);
    audioCache[ipa] = audio;
    currentAudio = audio;
    audio.play().catch(() => showToast('Audio not available'));
  }
  showToast(ipa);
}

function speakWord(w) {
  if (!window.speechSynthesis) { showToast('TTS not supported in this browser'); return; }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(w);
  u.rate = 0.75; u.lang = 'en-GB';
  window.speechSynthesis.speak(u);
  showToast(w);
}

function speakKeywords(w1, w2, w3) {
  function playMP3(path, onend) {
    if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
    const audio = new Audio(path);
    currentAudio = audio;
    audio.onended = onend || null;
    audio.play().catch(() => { if (onend) onend(); });
  }
  function playWord(word, onend) {
    playMP3("audio/word_" + word.toLowerCase().replace(/[^a-z]/g, "") + ".mp3", onend);
  }
  playMP3("audio/intro_listen.mp3", () => {
    playWord(w1, () => {
      playWord(w2, () => {
        playWord(w3, () => {
          playMP3("audio/intro_nowtry.mp3", null);
        });
      });
    });
  });
  showToast(w1 + ' - ' + w2 + ' - ' + w3);
}
function speakSent(s) {
  const SENT_MAP = {
    "The black cat sat on the flat map.": "sent_vowel_short_a_1",
    "Can you hand me that tan bag?": "sent_vowel_short_a_2",
    "The red hen sat on the edge of the bed.": "sent_vowel_short_e_1",
    "When did he get the letter from the head?": "sent_vowel_short_e_2",
    "The fish in the big river swim quickly.": "sent_vowel_short_i_1",
    "Is this the gift in the pink tin?": "sent_vowel_short_i_2",
    "The hot dog fell off the top of the box.": "sent_vowel_short_o_1",
    "Pop the odd sock into the shop pot.": "sent_vowel_short_o_2",
    "The young duck dug up the mud under the bush.": "sent_vowel_short_u_1",
    "Run and touch the rough trunk.": "sent_vowel_short_u_2",
    "She took a good look at the full book.": "sent_vowel_short_oo_1",
    "Put the wool cushion on the wooden hook.": "sent_vowel_short_oo_2",
    "The teacher opened the lesson about the famous painter.": "sent_vowel_schwa_1",
    "A person\'s banana fell into the garden.": "sent_vowel_schwa_2",
    "She can see the green tree by the sea.": "sent_vowel_long_ee_1",
    "We need to keep the streets clean.": "sent_vowel_long_ee_2",
    "The car park is far from the farm.": "sent_vowel_long_ar_1",
    "Ask your father to cast the glass.": "sent_vowel_long_ar_2",
    "She thought a walk by the shore would restore her.": "sent_vowel_long_aw_1",
    "The ball caught the wall and fell to the floor.": "sent_vowel_long_aw_2",
    "The moon shone on the cool blue pool.": "sent_vowel_long_oo_1",
    "Use a spoon to remove the fruit juice.": "sent_vowel_long_oo_2",
    "The bird perched on the first fern by the church.": "sent_vowel_long_er_1",
    "Her words hurt more than the burn.": "sent_vowel_long_er_2",
    "They say the train may arrive late on that grey day.": "sent_vowel_diph_ay_1",
    "Take the cake and place it on the great table.": "sent_vowel_diph_ay_2",
    "Try to find the bright light on the right side.": "sent_vowel_diph_eye_1",
    "The child might fly the bright kite high tonight.": "sent_vowel_diph_eye_2",
    "Go home along the road below the old stone wall.": "sent_vowel_diph_oh_1",
    "Show the boat how to row toward the coast.": "sent_vowel_diph_oh_2",
    "The cloud came down around the whole town.": "sent_vowel_diph_ow_1",
    "A loud shout from the crowd in the south.": "sent_vowel_diph_ow_2",
    "The boy joined the royal voyage to avoid the noise.": "sent_vowel_diph_oy_1",
    "The soil in the foil was moist with oil.": "sent_vowel_diph_oy_2",
    "Where is the rare chair with the fair repair?": "sent_vowel_diph_air_1",
    "I fear that the deer is near the pier here.": "sent_vowel_diph_ear_1",
    "A cheerful engineer appeared.": "sent_vowel_diph_ear_2",
    "The tour to the pure moor was a sure cure.": "sent_vowel_diph_oor_1",
    "I am sure your tour will endure.": "sent_vowel_diph_oor_2",
    "Pick up the purple pen from the top of the page.": "sent_cons_p_1",
    "The puppy put its paw on the purple cap.": "sent_cons_p_2",
    "Bob bought a big blue bag of bread.": "sent_cons_b_1",
    "The rabbit bit the rubber ball by the bed.": "sent_cons_b_2",
    "Take the hot pot from the table at the top.": "sent_cons_t_1",
    "The cat sat on the mat and ate the lot.": "sent_cons_t_2",
    "The dog dug a deep ditch in the dark garden.": "sent_cons_d_1",
    "Did the red bird land on the old dead wood?": "sent_cons_d_2",
    "Take the black clock and put the key on the back of the box.": "sent_cons_k_1",
    "Could a cat catch a quick duck?": "sent_cons_k_2",
    "The big dog got through the green gate in the fog.": "sent_cons_g_1",
    "Grab the big log and get going.": "sent_cons_g_2",
    "Fifty fluffy foxes fled from the forest to find food.": "sent_cons_f_1",
    "The van drove over the vast valley to the village.": "sent_cons_v_1",
    "Five brave divers move above the vivid cave.": "sent_cons_v_2",
    "The thin thread stretched through the thick cloth.": "sent_cons_th_soft_2",
    "They would rather bathe in the smooth weather together.": "sent_cons_th_hard_1",
    "The mother breathes through those other paths.": "sent_cons_th_hard_2",
    "The six swans sat still on the soft surface of the sea.": "sent_cons_s_1",
    "Susan sells the finest sea salt.": "sent_cons_s_2",
    "The bees in the busy zone buzzed near the frozen roses.": "sent_cons_z_1",
    "She shushed the children by the fish and chip shop.": "sent_cons_sh_1",
    "The flashy fashion show featured fresh shrubbery.": "sent_cons_sh_2",
    "The television showed a vision of beige leisure.": "sent_cons_zh_1",
    "It is a pleasure to measure the treasure.": "sent_cons_zh_2",
    "He held his hat over his head in the heavy heat.": "sent_cons_h_1",
    "The happy hamster hid behind the huge hedge.": "sent_cons_h_2",
    "Choose the right chair and watch the champion teach the children.": "sent_cons_ch_1",
    "The rich butcher watched the sketch catch fire.": "sent_cons_ch_2",
    "The judge in the large cage urged John to jump the bridge.": "sent_cons_j_1",
    "The giant giraffe juggled jars of jam.": "sent_cons_j_2",
    "The mum made some warm meatballs for the summer meal.": "sent_cons_m_1",
    "The lamb climbed through the morning mist.": "sent_cons_m_2",
    "Now and then, in the morning sun, ten thin lines narrow into one.": "sent_cons_n_1",
    "The knight knocked and kneeled.": "sent_cons_n_2",
    "The king sang a long song, ringing a gong.": "sent_cons_ng_1",
    "The young gang clung to the strong climbing ring.": "sent_cons_ng_2",
    "The tall lad lay along the long wall like a log.": "sent_cons_l_1",
    "Tell the little girl to pull the ball slowly.": "sent_cons_l_2",
    "The red rabbit ran rapidly across the rocky river.": "sent_cons_r_1",
    "Rain rarely rushes around the rural roads.": "sent_cons_r_2",
    "We will wait by the wide waterway and watch the waves.": "sent_cons_w_1",
    "Quick! Where is the white whale?": "sent_cons_w_2",
    "Yes, you can use your yellow yarn in the yard.": "sent_cons_y_1",
    "A few years ago, the youngsters ruled.": "sent_cons_y_2"
  };
  const fileId = SENT_MAP[s];
  if (fileId) {
    if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
    const audio = new Audio("audio/" + fileId + ".mp3");
    currentAudio = audio;
    audio.play().catch(() => showToast("Audio not available"));
  } else {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(s);
      u.rate = 0.8; u.lang = "en-GB";
      window.speechSynthesis.speak(u);
    }
  }
}

function speakMinimalPair(words) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const mk = (text, rate) => {
    const u = new SpeechSynthesisUtterance(text);
    u.rate = rate; u.lang = 'en-GB';
    return u;
  };
  words.forEach(w => window.speechSynthesis.speak(mk(w, 0.75)));
  showToast(words.join(' · '));
}

function playWord(word) {
  const path = "audio/word_" + word.toLowerCase().replace(/[^a-z]/g, "") + ".mp3";
  if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
  const audio = new Audio(path);
  currentAudio = audio;
  audio.play().catch(() => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(word);
      u.rate = 0.75; u.lang = "en-GB";
      window.speechSynthesis.speak(u);
    }
  });
  showToast(word);
}

// ── IPA cell (for chart) ──────────────────────────────────────────────────────
function ipaCell(ipa, cls, label) {
  if (!ipa) return '<div class="ipa-cell empty"></div>';
  const ph = PHONEMES.find(p => p.ipa === ipa);
  const kw0 = ph ? ph.keywords.split(' ')[0] : ipa;
  const labelHtml = label ? `<span style="font-size:9px;opacity:0.6;font-weight:700;display:block;margin-bottom:2px">${label}</span>` : '';
  return `<div class="ipa-cell ${cls}" title="${ipa} — tap: sound · hold: sample word"
    onclick="speakPhoneme('${escQ(ipa)}')"
    onmousedown="ipaLongPressStart('${escQ(kw0)}')"
    onmouseup="ipaLongPressCancel()"
    onmouseleave="ipaLongPressCancel()"
    ontouchstart="ipaTouchStart('${escQ(ipa)}','${escQ(kw0)}',event)"
    ontouchend="ipaTouchEnd('${escQ(ipa)}')"
    ontouchmove="ipaLongPressCancel()">
    ${labelHtml}
    <span class="ipa-cell-sym">${ipa}</span>
    <span class="ipa-cell-ex">${kw0}</span>
  </div>`;
}

// ── Build phoneme card ────────────────────────────────────────────────────────
function buildCard(ph) {
  const kws = ph.keywords.split(' ');
  const kw1 = kws[0] || '', kw2 = kws[1] || '', kw3 = kws[2] || '';

  const pats = ph.patterns.map(p => {
    const chips = p.words.slice(0, 4).map(w => `<span class="wchip" onclick="playWord('${escQ(w)}')">${w}</span>`).join('');
    return `<div class="pat-row"><span class="sp-tag">${p.sp}</span><div class="word-chips">${chips}</div></div>`;
  }).join('');

  const sentsHtml = ph.sents ? ph.sents.map(s =>
    `<div class="sent-row"><button class="sent-play" onclick="speakSent('${escQ(s)}')">▶ Hear</button>${s}</div>`
  ).join('') : '';

  return `
<div class="ph-card ${ph.cat}${ph.num % 2 === 0 ? ' ph-card-alt' : ''}" id="card-${ph.id}">
  <div class="ph-head">
    <div class="ph-head-left">
      <span class="ph-num">${ph.num}</span>
      <div class="ph-ipa-wrap">
        <span class="ph-ipa">${ph.ipa}</span>
        <button class="phoneme-btn" onclick="speakPhoneme('${escQ(ph.ipa)}')">🔉 Sound</button>
      </div>
    </div>
    <div class="ph-info">
      <div class="ph-name">${ph.name}</div>
      <div class="ph-sub">${ph.sub}</div>
      <div class="ph-kws">${kw1} · ${kw2} · ${kw3}</div>
    </div>
    <div class="ph-head-buttons">
      <button class="listen-btn" onclick="speakKeywords('${escQ(kw1)}','${escQ(kw2)}','${escQ(kw3)}')">🔊 Sample Words</button>
      <button class="fullscreen-btn" onclick="showCardFullscreen('${ph.id}')">&#x26F6; Full View</button>
    </div>
  </div>
  <div class="ph-how">
    <div class="ph-how-label">🖐 How to Make This Sound</div>
    <div class="ph-how-text">${ph.how}</div>
  </div>
  <div class="ph-patterns">
    <div class="ph-pat-label">📖 Spelling Patterns — Click any word</div>
    ${pats}
  </div>
  ${sentsHtml ? `<div class="ph-sents"><div class="ph-sents-label">💬 Hear It in a Sentence</div>${sentsHtml}</div>` : ''}
  ${ph.tip    ? `<div class="ph-tip"><div class="tip-box"><strong>💡 Tip:</strong> ${ph.tip}</div></div>` : ''}
  ${ph.mistake? `<div class="ph-mistake"><div class="mistake-box"><strong>⚠️ Common Mistake:</strong> ${ph.mistake}</div></div>` : ''}
</div>`;
}

// ── Welcome page ──────────────────────────────────────────────────────────────
function qnCard(id, icon, label, sub) {
  const locked = isLocked(id);
  const action = locked ? 'showPremiumOverlay()' : `navigate('${id}')`;
  return `<div class="qn-card${locked?' locked':''}" onclick="${action}">
    <div class="qn-icon">${icon}</div>
    <div class="qn-label">${label}</div>
    <div class="qn-sub">${sub}</div>
  </div>`;
}


// -- Fullscreen card modal --
let _modalHistoryPushed = false;

// ── Carousel fullscreen ────────────────────────────────────────────────────
let _fsCurrentId  = null;
let _fsCatPhonemes = [];
let _fsNavigating  = false;

function showCardFullscreen(id) {
  const ph = PHONEMES.find(p => p.id === id);
  if (!ph) return;
  closeCardFullscreen();

  _fsCurrentId   = id;
  _fsCatPhonemes = (currentSection === 'all' || !currentSection)
    ? PHONEMES
    : PHONEMES.filter(p => p.cat === ph.cat);
  if (!_fsCatPhonemes.length) _fsCatPhonemes = PHONEMES;

  _buildCarousel();
  history.pushState({cardModal: true}, '');
  _modalHistoryPushed = true;
}

function _fsSlotHTML(i) {
  if (i < 0 || i >= _fsCatPhonemes.length) return '<div style="height:100%;"></div>';
  return buildCard(_fsCatPhonemes[i]).replace(/onclick="handleCardClick[^"]*"/g, '');
}

function _fsNavHTML(i, total) {
  return '<div class="fs-nav-bar" id="fs-nav-bar">'
    + '<button class="fs-nav-btn"' + (i > 0 ? '' : ' disabled') + ' onclick="_fsNavigate(-1)">\u2190 Prev</button>'
    + '<span class="fs-nav-counter">' + (i + 1) + ' / ' + total + '</span>'
    + '<button class="fs-nav-btn"' + (i < total - 1 ? '' : ' disabled') + ' onclick="_fsNavigate(1)">Next \u2192</button>'
    + '</div>';
}

function _buildCarousel() {
  const overlay = document.createElement('div');
  overlay.className = 'card-modal-overlay';
  overlay.id        = 'card-modal-overlay';

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeCardFullscreen();
  });

  let tx = 0, ty = 0, active = false;
  overlay.addEventListener('touchstart', function(e) {
    tx = e.touches[0].clientX;
    ty = e.touches[0].clientY;
    active = true;
  }, { passive: true });
  overlay.addEventListener('touchend', function(e) {
    if (!active) return; active = false;
    const dx = e.changedTouches[0].clientX - tx;
    const dy = e.changedTouches[0].clientY - ty;
    const box = overlay.querySelector('.card-modal-box');
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      _fsNavigate(dx < 0 ? 1 : -1);
    } else if (dy > 80 && box && box.scrollTop <= 0) {
      closeCardFullscreen();
    }
  }, { passive: true });

  const ci = _fsCatPhonemes.findIndex(p => p.id === _fsCurrentId);
  const total = _fsCatPhonemes.length;

  overlay.innerHTML =
    '<div class="card-modal-box">' +
      '<div class="card-modal-close-bar"><button class="card-modal-close-btn" onclick="closeCardFullscreen()">\u2715</button></div>' +
      _fsNavHTML(ci, total) +
      '<div class="fs-carousel">' +
        '<div class="fs-track" id="fs-track">' +
          '<div class="fs-slot" id="fs-slot-0">' + _fsSlotHTML(ci - 1) + '</div>' +
          '<div class="fs-slot" id="fs-slot-1">' + _fsSlotHTML(ci)     + '</div>' +
          '<div class="fs-slot" id="fs-slot-2">' + _fsSlotHTML(ci + 1) + '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
}

function _fsNavigate(dir) {
  if (_fsNavigating) return;
  const ci   = _fsCatPhonemes.findIndex(p => p.id === _fsCurrentId);
  const next = ci + dir;
  if (next < 0 || next >= _fsCatPhonemes.length) return;
  _fsNavigating = true;

  const track = document.getElementById('fs-track');
  if (!track) { _fsNavigating = false; return; }

  // Slide the track
  const targetX = dir > 0 ? '-66.666%' : '0%';
  track.style.transition = 'transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94)';
  track.style.transform  = 'translateX(' + targetX + ')';

  track.addEventListener('transitionend', function done() {
    track.removeEventListener('transitionend', done);

    // Snap back silently
    track.style.transition = 'none';
    track.style.transform  = 'translateX(-33.333%)';

    // Update state
    _fsCurrentId = _fsCatPhonemes[next].id;
    const total  = _fsCatPhonemes.length;

    // Refresh all three slots
    document.getElementById('fs-slot-0').innerHTML = _fsSlotHTML(next - 1);
    document.getElementById('fs-slot-1').innerHTML = _fsSlotHTML(next);
    document.getElementById('fs-slot-2').innerHTML = _fsSlotHTML(next + 1);

    // Refresh nav bar
    const nav = document.getElementById('fs-nav-bar');
    if (nav) {
      const tmp = document.createElement('div');
      tmp.innerHTML = _fsNavHTML(next, total);
      nav.replaceWith(tmp.firstChild);
    }

    // Reset scroll
    const box = document.querySelector('.card-modal-box');
    if (box) box.scrollTop = 0;

    _fsNavigating = false;
  }, { once: true });
}

function closeCardFullscreen() {
  const o = document.getElementById('card-modal-overlay');
  if (o) { o.remove(); document.body.style.overflow = ''; }
  if (_modalHistoryPushed) {
    _modalHistoryPushed = false;
    history.back();
  }
}


// -- IPA Section Fullscreen --
function showIPASectionFullscreen(section) {
  closeCardFullscreen();

  const cfg = {
    mono: {
      title: 'Monophthongs',
      count: '12 phonemes',
      hint: 'Tap \u2192 isolated sound \u00b7 Hold \u2192 sample word',
      build: function() {
        const rows = [
          ['i\u02d0','\u026a','\u028a','u\u02d0'],
          ['e','\u0259','\u025c\u02d0','\u0254\u02d0'],
          ['\u00e6','\u028c','\u0251\u02d0','\u0252']
        ];
        return rows.map(r => '<div class="ipa-cell-row">' + r.map(s => ipaCell(s,'mono')).join('') + '</div>').join('');
      }
    },
    diph: {
      title: 'Diphthongs',
      count: '8 phonemes',
      hint: 'Tap \u2192 isolated sound \u00b7 Hold \u2192 sample word',
      build: function() {
        const rows = [
          ['\u026a\u0259','e\u026a',null],
          ['\u028a\u0259','\u0254\u026a','\u0259\u028a'],
          ['e\u0259','a\u026a','a\u028a']
        ];
        return rows.map(r => '<div class="ipa-cell-row">' + r.map(s => ipaCell(s,'diph')).join('') + '</div>').join('');
      }
    },
    cons: {
      title: 'Consonants',
      count: '24 phonemes',
      hint: 'Tap \u2192 isolated sound \u00b7 Hold \u2192 sample word \u00b7 VL\u00a0=\u00a0voiceless \u00b7 VD\u00a0=\u00a0voiced',
      build: function() {
        const c = [
          ['p','b','t','d','t\u0283','d\u0292','k','g'],
          ['f','v','\u03b8','\u00f0','s','z','\u0283','\u0292'],
          ['m','n','\u014b','h','l','r','w','j']
        ];
        const cls = [
          ['con-vl','con-vd','con-vl','con-vd','con-vl','con-vd','con-vl','con-vd'],
          ['con-vl','con-vd','con-vl','con-vd','con-vl','con-vd','con-vl','con-vd'],
          ['con-nas','con-nas','con-nas','con-vl','con-app','con-app','con-app','con-app']
        ];
        const r0 = '<div class="ipa-cell-row">' + c[0].map((s,i) => ipaCell(s,cls[0][i],i%2===0?'VL':'VD')).join('') + '</div>';
        const r1 = '<div class="ipa-cell-row">' + c[1].map((s,i) => ipaCell(s,cls[1][i],i%2===0?'VL':'VD')).join('') + '</div>';
        const note = '<div style="font-size:12px;color:#888;font-weight:700;text-transform:uppercase;letter-spacing:.6px;margin:12px 0 4px">Nasals &amp; Approximants \u2014 all voiced \u00b7 /h/ = voiceless</div>';
        const r2 = '<div class="ipa-cell-row">' + c[2].map((s,i) => ipaCell(s,cls[2][i])).join('') + '</div>';
        return r0 + r1 + note + r2;
      }
    }
  };

  const s = cfg[section];
  if (!s) return;

  const overlay = document.createElement('div');
  overlay.className = 'card-modal-overlay';
  overlay.id = 'card-modal-overlay';
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeCardFullscreen();
  });

  let touchStartY = 0;
  overlay.addEventListener('touchstart', function(e) { touchStartY = e.touches[0].clientY; }, {passive:true});
  overlay.addEventListener('touchmove', function(e) {
    const box = overlay.querySelector('.card-modal-box');
    if (!box) return;
    if (box.scrollTop <= 0 && e.touches[0].clientY - touchStartY > 80) closeCardFullscreen();
  }, {passive:true});

  overlay.innerHTML =
    '<div class="card-modal-box ipa-modal-box">' +
    '<div class="card-modal-close-bar"><button class="card-modal-close-btn" onclick="closeCardFullscreen()">\u2715</button></div>' +
    '<div class="ipa-modal-content">' +
    '<div class="ipa-modal-title">' + s.title + ' <span class="ipa-modal-count">' + s.count + '</span></div>' +
    '<div class="ipa-modal-hint">' + s.hint + '</div>' +
    '<div class="ipa-modal-grid">' + s.build() + '</div>' +
    '</div></div>';

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
  history.pushState({cardModal: true}, '');
  _modalHistoryPushed = true;
}


// ── Email Capture ────────────────────────────────────────────────────────────
let _emailCaptureShown = false;
let _emailCaptureTimer = null;

function startEmailCaptureTimer() {
  if (_emailCaptureShown) return;
  if (isPremium) return;
  if (localStorage.getItem('sc44_email_captured')) return;
  clearTimeout(_emailCaptureTimer);
  _emailCaptureTimer = setTimeout(function() {
    if (!isPremium && !_emailCaptureShown && !localStorage.getItem('sc44_email_captured')) {
      showEmailCaptureBanner();
    }
  }, 90000);
}

function showEmailCaptureBanner() {
  if (_emailCaptureShown) return;
  _emailCaptureShown = true;

  const banner = document.createElement('div');
  banner.id = 'email-capture-banner';
  banner.innerHTML =
    '<div class="ecb-content">' +
    '<button class="ecb-close" onclick="dismissEmailBanner()">&#x2715;</button>' +
    '<div class="ecb-icon">&#127942;</div>' +
    '<div class="ecb-title">Get Your Free Pronunciation Assessment Checklist</div>' +
    '<div class="ecb-sub">Identify your key sound challenges in 5 minutes. Free — no strings attached.</div>' +
    '<div class="ecb-form">' +
    '<input type="text" id="ecb-name-input" class="ecb-input" placeholder="Your first name" />' +
    '<input type="email" id="ecb-email-input" class="ecb-input" placeholder="Your email address" />' +
    '<button class="ecb-btn" onclick="submitEmailCapture()">Send Me the Checklist</button>' +
    '</div>' +
    '<div class="ecb-note">No spam. Unsubscribe anytime.</div>' +
    '</div>';

  document.body.appendChild(banner);
  setTimeout(function() { banner.classList.add('ecb-visible'); }, 50);
}

function dismissEmailBanner() {
  const banner = document.getElementById('email-capture-banner');
  if (banner) {
    banner.classList.remove('ecb-visible');
    setTimeout(function() { banner.remove(); }, 300);
  }
}

async function submitEmailCapture() {
  const input = document.getElementById('ecb-email-input');
  if (!input) return;
  const email = input.value.trim();
  if (!email || !email.includes('@')) {
    input.style.borderColor = '#e65100';
    input.placeholder = 'Please enter a valid email';
    return;
  }

  const btn = document.querySelector('.ecb-btn');
  if (btn) { btn.textContent = 'Sending...'; btn.disabled = true; }

  try {
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      const nameInput = document.getElementById('ecb-name-input');
      const firstName = nameInput ? nameInput.value.trim() : '';
      body: JSON.stringify({ email: email, firstName: firstName })
    });

    if (res.status === 200 || res.status === 201 || res.status === 204) {
      localStorage.setItem('sc44_email_captured', '1');
      const banner = document.getElementById('email-capture-banner');
      if (banner) {
        banner.querySelector('.ecb-content').innerHTML =
          '<div class="ecb-icon">&#10003;</div>' +
          '<div class="ecb-title">Check your inbox!</div>' +
          '<div class="ecb-sub">Your Pronunciation Assessment Checklist is on its way to ' + email + '</div>' +
          '<button class="ecb-btn" style="margin-top:16px;" onclick="dismissEmailBanner()">Got it</button>';
      }
    } else {
      throw new Error('API error');
    }
  } catch(e) {
    if (btn) { btn.textContent = 'Try Again'; btn.disabled = false; }
    showToast('Something went wrong. Please try again.');
  }
}
function renderWelcome() {
  const installBanner = (() => {
  const isInstalled = window.matchMedia('(display-mode: standalone)').matches;
  if (isInstalled) return '';
  if (deferredInstallPrompt) return `<div class="install-banner"><p>📲 <strong>Install SoundCode 44</strong> — add it to your home screen for instant access, anytime.</p><button class="install-btn" onclick="triggerInstall()">Install App</button></div>`;
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isAndroidDevice = /Android/i.test(navigator.userAgent);
  if (isIOS) return `<div class="install-banner"><p>📲 <strong>Install SoundCode 44</strong> — tap the Share button in Safari then select "Add to Home Screen" for instant access.</p></div>`;
  if (isAndroidDevice) return `<div class="install-banner"><p>📲 <strong>Install SoundCode 44</strong> — tap your browser menu and select "Add to Home Screen" for instant access.</p></div>`;
  return '';
})();

  return `
${installBanner}
<div class="welcome-hero">
  <h1>SoundCode 44 - The Complete English Sound System</h1>
  <p>Master British Received Pronunciation with this interactive guide. Every sound has its own card with pronunciation, spelling patterns, example words, and tips.</p>
  <div class="welcome-stats">
    <div class="stat-box"><div class="stat-num">44</div><div class="stat-label">Phonemes</div></div>
    <div class="stat-box"><div class="stat-num">20</div><div class="stat-label">Vowel Sounds</div></div>
    <div class="stat-box"><div class="stat-num">24</div><div class="stat-label">Consonant Sounds</div></div>
    <div class="stat-box"><div class="stat-num">400+</div><div class="stat-label">Example Words</div></div>
  </div>
</div>
<div style="margin-bottom:12px;font-size:14px;font-weight:600;color:#333;">Quick Navigation</div>
<div class="quick-nav">
  ${qnCard('ms','🔶','Short Monophthongs','7 sounds')}
  ${qnCard('ml','🔷','Long Monophthongs','5 sounds')}
  ${qnCard('di','🔁','Diphthongs','8 sounds')}
  ${qnCard('pl','💥','Plosives','6 sounds')}
  ${qnCard('fr','🌬️','Fricatives','9 sounds')}
  ${qnCard('af','⚡','Affricates','2 sounds')}
  ${qnCard('na','👃','Nasals','3 sounds')}
  ${qnCard('ap','〰️','Approximants','4 sounds')}
  ${qnCard('ipa-chart','📊','IPA Chart','All 44 phonemes')}
  ${qnCard('games','🎮','Games Hub','5 practice games')}
  ${qnCard('mp','👂','Minimal Pairs','Hear the difference')}
  ${qnCard('reference','📋','Reference Table','All phonemes at a glance')}
</div>
<a href="#" style="display:block;text-align:center;margin-top:24px;opacity:0.7;text-decoration:none;">
  <img src="img/logo-horizontal.svg" alt="ThriveEnglish" height="32"
       style="display:inline-block;max-width:200px;">
</a>`;
}

// ── IPA Chart ────────────────────────────────────────────────────────────────
function renderIPAChart() {
  // Approved layout — monophthongs 3×4, diphthongs 3×3
  const mono = [
    ['iː','ɪ','ʊ','uː'],
    ['e', 'ə','ɜː','ɔː'],
    ['æ', 'ʌ','ɑː','ɒ']
  ];
  const diph = [
    ['ɪə','eɪ', null],
    ['ʊə','ɔɪ','əʊ'],
    ['eə','aɪ','aʊ']
  ];
  // Consonant rows with VL/VD labels for first two rows
  const cons = [
    ['p','b','t','d','tʃ','dʒ','k','g'],
    ['f','v','θ','ð','s', 'z', 'ʃ','ʒ'],
    ['m','n','ŋ','h','l', 'r', 'w','j']
  ];
  const conCls = [
    ['con-vl','con-vd','con-vl','con-vd','con-vl','con-vd','con-vl','con-vd'],
    ['con-vl','con-vd','con-vl','con-vd','con-vl','con-vd','con-vl','con-vd'],
    ['con-nas','con-nas','con-nas','con-vl','con-app','con-app','con-app','con-app']
  ];

  const monoRows = mono.map(row =>
    `<div class="ipa-cell-row">${row.map(s => ipaCell(s, 'mono')).join('')}</div>`
  ).join('');

  const diphRows = diph.map(row =>
    `<div class="ipa-cell-row">${row.map(s => ipaCell(s, 'diph')).join('')}</div>`
  ).join('');

  const conRow0 = `<div class="ipa-cell-row">${cons[0].map((s,ci) => ipaCell(s, conCls[0][ci], ci%2===0?'VL':'VD')).join('')}</div>`;
  const conRow1 = `<div class="ipa-cell-row">${cons[1].map((s,ci) => ipaCell(s, conCls[1][ci], ci%2===0?'VL':'VD')).join('')}</div>`;
  const conRow2 = `<div class="ipa-cell-row">${cons[2].map((s,ci) => ipaCell(s, conCls[2][ci])).join('')}</div>`;

  return `
<div class="ipa-chart-outer">
  <div class="section-header">
    <div class="section-title">📊 IPA Chart — 44 British English Phonemes</div>
    <div class="section-subtitle">Tap → isolated sound · Hold → sample word</div>
  </div>
  <div class="ipa-section-block">
    <div class="ipa-section-header">VOWELS — 20 phonemes</div>
    <div class="ipa-subsection-row">
      <div class="ipa-subsection">
        <div class="ipa-sublabel-row"><div class="ipa-sublabel">Monophthongs (12)</div><button class="ipa-fullscreen-btn" onclick="showIPASectionFullscreen('mono')">&#x26F6;</button></div>
        ${monoRows}
        <div class="ipa-mobile-hint">Tap &#x26F6; for a larger view</div>
      </div>
      <div class="ipa-sub-divider"></div>
      <div class="ipa-subsection">
        <div class="ipa-sublabel-row"><div class="ipa-sublabel">Diphthongs (8)</div><button class="ipa-fullscreen-btn" onclick="showIPASectionFullscreen('diph')">&#x26F6;</button></div>
        ${diphRows}
        <div class="ipa-mobile-hint">Tap &#x26F6; for a larger view</div>
      </div>
    </div>
  </div>
  <div class="ipa-section-block">
    <div class="ipa-section-header-row"><div class="ipa-section-header">CONSONANTS — 24 phonemes</div><button class="ipa-fullscreen-btn cons-fs-btn" onclick="showIPASectionFullscreen('cons')">&#x26F6;</button></div>
    <div class="ipa-con-grid">
      ${conRow0}
      ${conRow1}
      <div style="display:flex;gap:12px;font-size:10px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:.6px;margin:8px 0 2px">
        <span style="flex:1">Nasals &amp; Approximants — all voiced · /h/ = voiceless</span>
      </div>
      ${conRow2}
    </div>
  </div>
  <div class="ipa-mobile-hint" style="text-align:center;margin-bottom:4px;">Tap &#x26F6; for a larger view of consonants</div>
  <div class="ipa-rotate-hint">&#x21BB; Rotate your phone for a better view</div>
  <div class="ipa-chart-hint">vl = voiceless · vd = voiced · Tap = isolated sound · Hold = sample word</div>
</div>`;
}

// ── Phoneme list ──────────────────────────────────────────────────────────────
function renderPhonemeList(catFilter) {
  startEmailCaptureTimer();
  const list  = catFilter === 'all' ? PHONEMES : PHONEMES.filter(p => p.cat === catFilter);
  const cat   = CATS[catFilter];
  const title = catFilter === 'all' ? 'All 44 Phonemes' : (cat ? cat.label : catFilter);
  const sub   = catFilter === 'all' ? 'The complete English sound system' : `${list.length} sounds`;

  const intros = {
    ml: '<strong>Long monophthongs</strong> are pure vowel sounds held at a single tongue position. The tongue does not move during the vowel — there is no glide. They are held for a relatively long duration.',
    ms: '<strong>Short monophthongs</strong> are brief and clipped. They occupy a single tongue position but are held for less time. The schwa /ə/ is included here — the most common sound in English.',
    di: 'A <strong>diphthong</strong> is a vowel that moves from one position to another. The tongue glides smoothly between two target positions within a single syllable. British English has 8 diphthongs.',
    pl: '<strong>Plosives</strong> are made by completely blocking the airflow, building up air pressure, then releasing it with a burst. English has 3 pairs: /p b/ (lips), /t d/ (tongue tip), /k g/ (back of tongue).',
    fr: '<strong>Fricatives</strong> are produced by forcing air through a narrow gap, creating turbulent friction. English has 4 pairs plus /h/: /f v/, /θ ð/, /s z/, /ʃ ʒ/.',
    af: '<strong>Affricates</strong> begin with a complete closure like a plosive, then release into a fricative. English has one pair: /tʃ/ (voiceless) and /dʒ/ (voiced).',
    na: '<strong>Nasals</strong> are produced by blocking the oral cavity and letting air flow through the nose. All English nasals are voiced: /m/ (lips), /n/ (tongue tip), /ŋ/ (back of tongue).',
    ap: '<strong>Approximants</strong> are consonants where the articulators approach each other but do not create friction. /w/ and /j/ are semivowels; /r/ is post-alveolar; /l/ is a lateral approximant.',
  };

  const introHtml = intros[catFilter] ? `<div class="section-intro">${intros[catFilter]}</div>` : '';

  return `
<div class="section-header">
  <div class="section-title">${title}</div>
  <div class="section-subtitle">${sub}</div>
</div>
${introHtml}
<div class="cards-grid">${list.map(buildCard).join('')}</div>`;
}

// ── Games Hub ────────────────────────────────────────────────────────────────
function renderGames() {
  const catName = GAME_CAT_OPTS.find(c => c.id === gameCategory)?.label || 'All 44 Sounds';
  const phCount = getFilteredPhonemes().length;
  return `
<div class="section-header"><div class="section-title">🎮 Games Hub</div><div class="section-subtitle">Practise your phoneme recognition</div></div>
<div class="game-card" style="padding:16px 20px;margin-bottom:16px">
  <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#888;margin-bottom:10px">Focus on:</div>
  <div style="display:flex;flex-wrap:wrap;gap:6px">${gameCatPills()}</div>
  <div style="font-size:12px;color:#888;margin-top:10px">Currently practising: <strong style="color:#1a1a2e">${catName}</strong> · ${phCount} phoneme${phCount!==1?'s':''}</div>
</div>
<div class="quick-nav">
  <div class="qn-card" onclick="navigate('quiz')"><div class="qn-icon">🧠</div><div class="qn-label">Quiz</div><div class="qn-sub">Multiple choice</div></div>
  <div class="qn-card" onclick="startDecode()"><div class="qn-icon">🔍</div><div class="qn-label">Decode It</div><div class="qn-sub">IPA → word</div></div>
  <div class="qn-card" onclick="startBuild()"><div class="qn-icon">🔨</div><div class="qn-label">Build a Word</div><div class="qn-sub">Arrange phonemes</div></div>
  <div class="qn-card" onclick="startSpeed()"><div class="qn-icon">⚡</div><div class="qn-label">Speed Round</div><div class="qn-sub">Name it fast</div></div>
  <div class="qn-card" onclick="navigate('mp')"><div class="qn-icon">👂</div><div class="qn-label">Minimal Pairs</div><div class="qn-sub">Hear the difference</div></div>
</div>`;
}

// ── Quiz (multiple choice phoneme questions) ──────────────────────────────────
const QZ = [
  {q:'Which phoneme is in "ship" but NOT in "sip"?',        a:'/ʃ/', opts:['/s/','/ʃ/','/tʃ/','/z/'],   cat:'fr'},
  {q:'What is the voiced counterpart of /θ/?',              a:'/ð/', opts:['/d/','/ð/','/v/','/z/'],     cat:'fr'},
  {q:'Which vowel is in "bird" and "turn"?',                a:'/ɜː/',opts:['/ɑː/','/ɜː/','/ɔː/','/ɪə/'],cat:'ml'},
  {q:'What sound does the "oi" spelling represent?',        a:'/ɔɪ/',opts:['/aɪ/','/ɔɪ/','/əʊ/','/eɪ/'],cat:'di'},
  {q:'Which phoneme is the "ow" in "cloud"?',               a:'/aʊ/',opts:['/aʊ/','/əʊ/','/ɔɪ/','/eɪ/'],cat:'di'},
  {q:'"CH" in "church" represents which phoneme?',          a:'/tʃ/',opts:['/ʃ/','/tʃ/','/dʒ/','/k/'],  cat:'af'},
  {q:'What is the voiced counterpart of /tʃ/?',             a:'/dʒ/',opts:['/ʒ/','/dʒ/','/g/','/z/'],   cat:'af'},
  {q:'Which phoneme appears in "ring", "king", "long"?',    a:'/ŋ/', opts:['/n/','/ŋ/','/m/','/ŋg/'],   cat:'na'},
  {q:'What sound does "v" represent?',                      a:'/v/', opts:['/f/','/b/','/v/','/w/'],     cat:'fr'},
  {q:'Which vowel is in "cat" and "map"?',                  a:'/æ/', opts:['/æ/','/ɑː/','/e/','/ɪ/'],   cat:'ms'},
  {q:'Which vowel is in "book" and "put"?',                 a:'/ʊ/', opts:['/uː/','/ʊ/','/ɒ/','/ʌ/'],  cat:'ms'},
  {q:'What phoneme is in "moon" and "food"?',               a:'/uː/',opts:['/uː/','/ʊ/','/ɒ/','/ɔː/'],  cat:'ml'},
  {q:'What sound does "ay" represent (as in "day")?',       a:'/eɪ/',opts:['/eɪ/','/e/','/æ/','/ɛː/'],  cat:'di'},
  {q:'What is the most common sound in English?',           a:'/ə/', opts:['/ə/','/e/','/ɪ/','/ɑː/'],   cat:'ms'},
  {q:'The "-sion" in "vision" is which sound?',             a:'/ʒ/', opts:['/ʃ/','/ʒ/','/z/','/dʒ/'],   cat:'fr'},
  {q:'Which phoneme starts the word "ear"?',                a:'/ɪə/',opts:['/ɪə/','/eə/','/ɪ/','/e/'],  cat:'di'},
  {q:'What vowel is in "saw", "walk", "thought"?',          a:'/ɔː/',opts:['/ɑː/','/ɔː/','/ɒ/','/uː/'],  cat:'ml'},
  {q:'Which sound ends "ring" and "singing"?',              a:'/ŋ/', opts:['/n/','/ŋ/','/ng/','/ŋg/'],   cat:'na'},
  {q:'The "ph" in "phone" represents which sound?',         a:'/f/', opts:['/p/','/f/','/ph/','/v/'],     cat:'fr'},
  {q:'Which diphthong is in "boy" and "coin"?',             a:'/ɔɪ/',opts:['/aɪ/','/ɔɪ/','/əʊ/','/aʊ/'],cat:'di'},
];

let qzState = {idx:0, score:0, answered:false, results:[], pool:QZ};

function renderQuiz() {
  const filtered = QZ.filter(q => matchesCat(q.cat));
  const pool = filtered.length >= 3 ? filtered : QZ;
  qzState = {idx:0, score:0, answered:false, results:[], pool};
  setTitle('Quiz');
  renderQuizQ();
}

function renderQuizQ() {
  const c = document.getElementById('content');
  const pool = qzState.pool;
  if (qzState.idx >= pool.length) {
    const pct = Math.round(qzState.score / pool.length * 100);
    c.innerHTML = `<div class="game-wrap"><div class="game-card">
      <div class="score-display">
        <div class="score-big">${qzState.score}/${pool.length}</div>
        <div class="score-label">${pct}% — ${pct>=80?'Excellent! 🎉':pct>=60?'Good work! 👍':'Keep practising! 💪'}</div>
      </div>
      <div style="text-align:center;margin-top:16px;display:flex;gap:10px;justify-content:center">
        <button class="btn-primary" onclick="renderQuiz()">Try Again</button>
        <button class="btn-secondary" onclick="navigate('games')">Back to Games</button>
      </div>
    </div></div>`;
    return;
  }
  const q = pool[qzState.idx];
  const prog = pool.map((_,i) =>
    `<div class="prog-dot ${i<qzState.idx?(qzState.results[i]?'done-ok':'done-bad'):(i===qzState.idx?'current':'')}"></div>`
  ).join('');
  const opts = q.opts.map(o =>
    `<button class="game-option" id="qopt-${escQ(o)}" onclick="checkQuiz('${escQ(o)}')">${o}</button>`
  ).join('');
  c.innerHTML = `<div class="game-wrap"><div class="game-card">
    ${catBanner()}
    <div class="game-progress">${prog}</div>
    <div style="font-size:12px;color:#888;margin-bottom:8px">Question ${qzState.idx+1} of ${pool.length}</div>
    <div class="game-question">${q.q}</div>
    <div class="game-options">${opts}</div>
    <div id="quiz-feedback"></div>
  </div></div>`;
}

function checkQuiz(ans) {
  if (qzState.answered) return;
  qzState.answered = true;
  const q = qzState.pool[qzState.idx];
  const ok = ans === q.a;
  if (ok) qzState.score++;
  qzState.results.push(ok);
  document.querySelectorAll('.game-option').forEach(el => el.disabled = true);
  const ansEl  = document.getElementById('qopt-' + ans);
  const corrEl = document.getElementById('qopt-' + q.a);
  if (ansEl) ansEl.classList.add(ok ? 'correct' : 'wrong');
  if (!ok && corrEl) corrEl.classList.add('correct');
  document.getElementById('quiz-feedback').innerHTML =
    `<div class="game-feedback ${ok?'ok':'bad'}">${ok ? '✓ Correct!' : '✗ The answer is ' + q.a}</div>`;
  setTimeout(() => { qzState.idx++; qzState.answered = false; renderQuizQ(); }, 1400);
}

// ── Decode It (IPA → English word) ───────────────────────────────────────────
const DEC_QS = [
  {ipa:'/kæt/',   opts:['cat','cut','cot','kit'],               a:'cat',      cat:'ms'},
  {ipa:'/ʃɪp/',   opts:['ship','shop','chip','sip'],            a:'ship',     cat:'fr'},
  {ipa:'/θɪŋk/',  opts:['think','thing','sink','drink'],        a:'think',    cat:'fr'},
  {ipa:'/brɪdʒ/', opts:['bridge','brick','pledge','breach'],    a:'bridge',   cat:'af'},
  {ipa:'/tʃeə/',  opts:['chair','share','dare','cheer'],        a:'chair',    cat:'af'},
  {ipa:'/haʊs/',  opts:['house','horse','hose','hops'],         a:'house',    cat:'di'},
  {ipa:'/bɜːd/',  opts:['bird','bud','beard','burp'],           a:'bird',     cat:'ml'},
  {ipa:'/θɔːt/',  opts:['thought','throat','thatch','tough'],   a:'thought',  cat:'fr'},
  {ipa:'/meʒə/',  opts:['measure','major','leisure','treasure'],a:'measure',  cat:'fr'},
  {ipa:'/bæŋk/',  opts:['bank','bang','rank','bunk'],           a:'bank',     cat:'na'},
  {ipa:'/naɪt/',  opts:['night','knit','note','neat'],          a:'night',    cat:'di'},
  {ipa:'/wɪtʃ/',  opts:['witch','watch','wish','which'],        a:'witch',    cat:'af'},
  {ipa:'/strɒŋ/', opts:['strong','string','strung','strap'],    a:'strong',   cat:'na'},
  {ipa:'/dʒentl/',opts:['gentle','jingle','jungle','dental'],   a:'gentle',   cat:'af'},
  {ipa:'/pleʒə/', opts:['pleasure','measure','plaza','player'], a:'pleasure', cat:'fr'},
];

let decState = {idx:0, score:0, answered:false, results:[], pool:DEC_QS};

function startDecode() {
  const filtered = DEC_QS.filter(q => matchesCat(q.cat));
  const pool = filtered.length >= 2 ? filtered : DEC_QS;
  decState = {idx:0, score:0, answered:false, results:[], pool};
  setTitle('Decode It');
  renderDecodeQ();
}

function renderDecodeQ() {
  const c = document.getElementById('content');
  const pool = decState.pool;
  if (decState.idx >= pool.length) {
    const pct = Math.round(decState.score / pool.length * 100);
    c.innerHTML = `<div class="game-wrap"><div class="game-card">
      <div class="score-display">
        <div class="score-big">${decState.score}/${pool.length}</div>
        <div class="score-label">${pct}% — ${pct>=80?'Excellent! 🎉':pct>=60?'Good work! 👍':'Keep practising! 💪'}</div>
      </div>
      <div style="text-align:center;margin-top:16px;display:flex;gap:10px;justify-content:center">
        <button class="btn-primary" onclick="startDecode()">Try Again</button>
        <button class="btn-secondary" onclick="navigate('games')">Back to Games</button>
      </div>
    </div></div>`;
    return;
  }
  const q = pool[decState.idx];
  const prog = pool.map((_,i) =>
    `<div class="prog-dot ${i<decState.idx?(decState.results[i]?'done-ok':'done-bad'):(i===decState.idx?'current':'')}"></div>`
  ).join('');
  const opts = q.opts.map(o =>
    `<button class="game-option" id="dopt-${escQ(o)}" onclick="checkDecode('${escQ(o)}')">${o}</button>`
  ).join('');
  c.innerHTML = `<div class="game-wrap"><div class="game-card">
    ${catBanner()}
    <div class="game-progress">${prog}</div>
    <div style="font-size:12px;color:#888;margin-bottom:8px">Word ${decState.idx+1} of ${pool.length}</div>
    <div class="game-question">What English word does this IPA represent?</div>
    <div class="game-ipa-display">${q.ipa}</div>
    <div class="game-options">${opts}</div>
    <div id="dec-feedback"></div>
  </div></div>`;
}

function checkDecode(ans) {
  if (decState.answered) return;
  decState.answered = true;
  const q = decState.pool[decState.idx];
  const ok = ans === q.a;
  if (ok) decState.score++;
  decState.results.push(ok);
  document.querySelectorAll('.game-option').forEach(el => el.disabled = true);
  const ansEl  = document.getElementById('dopt-' + ans);
  const corrEl = document.getElementById('dopt-' + q.a);
  if (ansEl) ansEl.classList.add(ok ? 'correct' : 'wrong');
  if (!ok && corrEl) corrEl.classList.add('correct');
  document.getElementById('dec-feedback').innerHTML =
    `<div class="game-feedback ${ok?'ok':'bad'}">${ok ? '✓ Correct!' : '✗ The answer is "' + q.a + '"'}</div>`;
  setTimeout(() => { decState.idx++; decState.answered = false; renderDecodeQ(); }, 1400);
}

// ── Build a Word (arrange IPA phonemes) ───────────────────────────────────────
const BLD_QS = [
  {word:'cat',   ans:['/k/','/æ/','/t/'],          distractors:['/s/','/e/','/d/','/p/'],      cat:'ms'},
  {word:'ship',  ans:['/ʃ/','/ɪ/','/p/'],          distractors:['/s/','/e/','/b/','/tʃ/'],     cat:'fr'},
  {word:'dog',   ans:['/d/','/ɒ/','/g/'],          distractors:['/t/','/ɔː/','/k/','/ə/'],     cat:'ms'},
  {word:'jump',  ans:['/dʒ/','/ʌ/','/m/','/p/'],   distractors:['/tʃ/','/æ/','/n/','/b/'],     cat:'af'},
  {word:'fish',  ans:['/f/','/ɪ/','/ʃ/'],          distractors:['/v/','/e/','/s/','/tʃ/'],     cat:'fr'},
  {word:'night', ans:['/n/','/aɪ/','/t/'],         distractors:['/m/','/eɪ/','/d/','/k/'],     cat:'di'},
  {word:'think', ans:['/θ/','/ɪ/','/ŋ/','/k/'],    distractors:['/ð/','/e/','/n/','/g/'],      cat:'fr'},
  {word:'house', ans:['/h/','/aʊ/','/s/'],         distractors:['/w/','/əʊ/','/z/','/tʃ/'],   cat:'di'},
  {word:'moon',  ans:['/m/','/uː/','/n/'],         distractors:['/n/','/ʊ/','/l/','/ŋ/'],      cat:'ml'},
  {word:'coin',  ans:['/k/','/ɔɪ/','/n/'],         distractors:['/g/','/aɪ/','/m/','/ŋ/'],    cat:'di'},
];

let bldState = {idx:0, score:0, placed:[], pool:[], results:[], questions:BLD_QS};

function startBuild() {
  const filtered = BLD_QS.filter(q => matchesCat(q.cat));
  const questions = filtered.length >= 2 ? filtered : BLD_QS;
  bldState = {idx:0, score:0, placed:[], pool:[], results:[], questions};
  setTitle('Build a Word');
  renderBuildQ();
}

function renderBuildQ() {
  const questions = bldState.questions;
  const c = document.getElementById('content');
  if (bldState.idx >= questions.length) {
    const pct = Math.round(bldState.score / questions.length * 100);
    c.innerHTML = `<div class="game-wrap"><div class="game-card">
      <div class="score-display">
        <div class="score-big">${bldState.score}/${questions.length}</div>
        <div class="score-label">${pct}% — ${pct>=80?'Excellent! 🎉':pct>=60?'Good work! 👍':'Keep practising! 💪'}</div>
      </div>
      <div style="text-align:center;margin-top:16px;display:flex;gap:10px;justify-content:center">
        <button class="btn-primary" onclick="startBuild()">Try Again</button>
        <button class="btn-secondary" onclick="navigate('games')">Back to Games</button>
      </div>
    </div></div>`;
    return;
  }
  const q = questions[bldState.idx];
  const allTiles = [...q.ans, ...q.distractors].sort(() => Math.random() - 0.5);
  bldState.placed = [];
  bldState.pool = [...allTiles];
  const prog = questions.map((_,i) =>
    `<div class="prog-dot ${i<bldState.idx?(bldState.results[i]?'done-ok':'done-bad'):(i===bldState.idx?'current':'')}"></div>`
  ).join('');
  c.innerHTML = `<div class="game-wrap"><div class="game-card">
    ${catBanner()}
    <div class="game-progress">${prog}</div>
    <div style="font-size:12px;color:#888;margin-bottom:8px">Word ${bldState.idx+1} of ${questions.length}</div>
    <div class="game-question">Build the word: <strong>"${q.word}"</strong></div>
    <div style="font-size:12px;color:#888;margin-bottom:8px">${q.ans.length} phoneme(s) needed</div>
    <div class="build-tiles" id="build-placed"></div>
    <div style="font-size:11px;color:#888;margin-bottom:6px;text-transform:uppercase;letter-spacing:.6px">Available phonemes:</div>
    <div class="build-bank" id="build-bank">${allTiles.map(t =>
      `<div class="build-tile" id="bt-${escQ(t)}" onclick="buildPlace('${escQ(t)}')">${t}</div>`
    ).join('')}</div>
    <div style="display:flex;gap:8px;margin-top:10px">
      <button class="btn-primary" onclick="checkBuild()">Check</button>
      <button class="btn-secondary" onclick="buildClear()">Clear</button>
    </div>
    <div id="build-feedback" style="margin-top:8px"></div>
  </div></div>`;
}

function buildPlace(t) {
  const el = document.getElementById('bt-' + t);
  if (!el || el.classList.contains('placed')) return;
  el.classList.add('placed');
  bldState.placed.push(t);
  const pl = document.getElementById('build-placed');
  const chip = document.createElement('span');
  chip.className = 'build-tile placed';
  chip.textContent = t;
  chip.onclick = () => {
    const i = bldState.placed.indexOf(t);
    if (i > -1) { bldState.placed.splice(i, 1); chip.remove(); el.classList.remove('placed'); }
  };
  pl.appendChild(chip);
}

function buildClear() {
  bldState.placed = [];
  document.getElementById('build-placed').innerHTML = '';
  document.querySelectorAll('.build-tile').forEach(el => el.classList.remove('placed'));
}

function checkBuild() {
  const q = bldState.questions[bldState.idx];
  const ok = JSON.stringify(bldState.placed) === JSON.stringify(q.ans);
  if (ok) bldState.score++;
  bldState.results.push(ok);
  document.getElementById('build-feedback').innerHTML =
    `<div class="game-feedback ${ok?'ok':'bad'}">${ok ? '✓ Correct!' : '✗ Answer: ' + q.ans.join(' ')}</div>`;
  setTimeout(() => { bldState.idx++; renderBuildQ(); }, 1600);
}

// ── Speed Round (identify IPA symbol) ────────────────────────────────────────
let spdState = {qs:[], idx:0, score:0, total:10, start:0, answered:false};

function startSpeed() {
  const phPool = getFilteredPhonemes();
  const pool = phPool.length >= 2 ? phPool : PHONEMES;
  const qs = pool.map(p => ({ipa:p.ipa, name:p.name}));
  const count = Math.min(10, qs.length);
  const shuffled = [...qs].sort(() => Math.random() - 0.5).slice(0, count);
  spdState = {qs:shuffled, idx:0, score:0, total:count, start:Date.now(), answered:false};
  setTitle('Speed Round');
  renderSpeedQ();
}

function renderSpeedQ() {
  const c = document.getElementById('content');
  if (spdState.idx >= spdState.total) {
    const elapsed = ((Date.now() - spdState.start) / 1000).toFixed(1);
    c.innerHTML = `<div class="game-wrap"><div class="game-card">
      <div class="score-display">
        <div class="score-big">${spdState.score}/${spdState.total}</div>
        <div class="score-label">Completed in ${elapsed}s</div>
      </div>
      <div style="text-align:center;margin-top:16px;display:flex;gap:10px;justify-content:center">
        <button class="btn-primary" onclick="startSpeed()">Try Again</button>
        <button class="btn-secondary" onclick="navigate('games')">Back to Games</button>
      </div>
    </div></div>`;
    return;
  }
  const q = spdState.qs[spdState.idx];
  const distractors = PHONEMES.filter(p => p.ipa !== q.ipa).sort(() => Math.random() - 0.5).slice(0, 3);
  const all4 = [{...q}, ...distractors.map(p => ({ipa:p.ipa, name:p.name}))].sort(() => Math.random() - 0.5);
  const opts = all4.map(p =>
    `<button class="game-option" id="sopt-${escQ(p.ipa)}" onclick="checkSpeed('${escQ(p.ipa)}')">${p.name}</button>`
  ).join('');
  c.innerHTML = `<div class="game-wrap"><div class="game-card">
    ${catBanner()}
    <div style="font-size:12px;color:#888;margin-bottom:8px">${spdState.idx+1} / ${spdState.total} · Score: ${spdState.score}</div>
    <div class="game-question">What is this phoneme?</div>
    <div class="spd-display">
      <div class="spd-ipa">${q.ipa}</div>
      <div style="margin-top:8px"><button class="btn-secondary" onclick="speakPhoneme('${escQ(q.ipa)}')">🔊 Hear it</button></div>
    </div>
    <div class="game-options">${opts}</div>
    <div id="spd-feedback"></div>
  </div></div>`;
}

function checkSpeed(ans) {
  if (spdState.answered) return;
  spdState.answered = true;
  const q = spdState.qs[spdState.idx];
  const ok = ans === q.ipa;
  if (ok) spdState.score++;
  document.querySelectorAll('.game-option').forEach(el => el.disabled = true);
  const ansEl  = document.getElementById('sopt-' + ans);
  const corrEl = document.getElementById('sopt-' + q.ipa);
  if (ansEl) ansEl.classList.add(ok ? 'correct' : 'wrong');
  if (!ok && corrEl) corrEl.classList.add('correct');
  document.getElementById('spd-feedback').innerHTML =
    `<div class="game-feedback ${ok?'ok':'bad'}">${ok ? '✓ Correct!' : '✗ Answer: ' + q.name}</div>`;
  setTimeout(() => { spdState.idx++; spdState.answered = false; renderSpeedQ(); }, 1200);
}

// ── Minimal Pairs ─────────────────────────────────────────────────────────────
const MP_PAIRS = [
  {a:{ipa:'ɪ', name:'Short I', ex:['ship','sit','bit','fill']},  b:{ipa:'iː',name:'Long EE',  ex:['sheep','seat','beat','feel']},  label:'/ɪ/ vs /iː/ — Short I vs Long EE'},
  {a:{ipa:'æ', name:'Short A', ex:['cat','cap','bad','tan']},    b:{ipa:'ɑː',name:'Long AH',  ex:['cart','carp','bard','tar']},    label:'/æ/ vs /ɑː/ — Short A vs Dark A'},
  {a:{ipa:'ʌ', name:'Short U', ex:['cut','fun','bun','luck']},   b:{ipa:'æ', name:'Short A',  ex:['cat','fan','ban','lack']},      label:'/ʌ/ vs /æ/ — Short U vs Short A'},
  {a:{ipa:'p', name:'P Sound', ex:['pan','pat','cup','rip']},    b:{ipa:'b', name:'B Sound',  ex:['ban','bat','cub','rib']},       label:'/p/ vs /b/ — Voiceless vs Voiced'},
  {a:{ipa:'θ', name:'Voiceless TH',ex:['thin','three','bath','think']}, b:{ipa:'ð',name:'Voiced TH',ex:['then','breathe','bathe','this']}, label:'/θ/ vs /ð/ — Voiceless TH vs Voiced TH'},
  {a:{ipa:'ʃ', name:'SH Sound',ex:['ship','share','dish','cash']},b:{ipa:'tʃ',name:'CH Sound',ex:['chip','chair','ditch','catch']}, label:'/ʃ/ vs /tʃ/ — SH vs CH'},
  {a:{ipa:'n', name:'N Sound', ex:['win','ran','sun','bin']},    b:{ipa:'ŋ', name:'NG Sound', ex:['wing','rang','sung','bing']},   label:'/n/ vs /ŋ/ — N vs NG'},
  {a:{ipa:'eɪ',name:'AY Diphthong',ex:['late','sail','game','wait']}, b:{ipa:'e',name:'Short E',ex:['let','sell','gem','wet']},    label:'/eɪ/ vs /e/ — Long A vs Short E'},
  {a:{ipa:'əʊ',name:'OH Diphthong',ex:['coat','bone','show','sole']}, b:{ipa:'ɒ',name:'Short O',ex:['cot','bond','shod','sol']},  label:'/əʊ/ vs /ɒ/ — Long O vs Short O'},
  {a:{ipa:'dʒ',name:'J Sound', ex:['jar','jest','June','badge']}, b:{ipa:'tʃ',name:'CH Sound',ex:['char','chest','choose','batch']}, label:'/dʒ/ vs /tʃ/ — J vs CH'}
];

let mpState = {idx:0};

function renderMP() {
  mpState = {idx:0};
  setTitle('Minimal Pairs');
  renderMPPair();
}

function renderMPPair() {
  const c = document.getElementById('content');
  if (mpState.idx >= MP_PAIRS.length) mpState.idx = 0;
  const p = MP_PAIRS[mpState.idx];
  const makeMP = side => `<div class="mp-side">
    <div class="mp-ipa">/${side.ipa}/</div>
    <div style="font-size:12px;font-weight:600;color:#555;margin-top:4px">${side.name}</div>
    <div class="mp-words">${side.ex.join(' · ')}</div>
    <button class="btn-secondary" style="margin-top:8px;font-size:12px" onclick="speakMinimalPair(['${side.ex.map(escQ).join("','")}'])">🔊 Hear</button>
    <button class="btn-secondary" style="margin-top:4px;font-size:12px" onclick="speakPhoneme('${escQ(side.ipa)}')">🔉 Isolated</button>
  </div>`;
  const navHtml = `<div style="display:flex;gap:8px;justify-content:center;margin-top:14px">
    <button class="btn-secondary" onclick="mpState.idx=Math.max(0,mpState.idx-1);renderMPPair()">← Prev</button>
    <span style="padding:10px 12px;font-size:12px;color:#888">${mpState.idx+1} / ${MP_PAIRS.length}</span>
    <button class="btn-primary" onclick="mpState.idx=Math.min(${MP_PAIRS.length-1},mpState.idx+1);renderMPPair()">Next →</button>
  </div>`;
  c.innerHTML = `
<div class="section-header"><div class="section-title">👂 Minimal Pairs</div><div class="section-subtitle">Train your ear to hear subtle differences</div></div>
<div class="game-wrap">
  <div class="game-card">
    <div style="font-size:13px;font-weight:600;color:#555;margin-bottom:12px;text-align:center">${p.label}</div>
    <div class="mp-pair">${makeMP(p.a)}${makeMP(p.b)}</div>
    <div style="background:#f5f7fa;border-radius:8px;padding:10px 14px;font-size:12.5px;color:#555">
      <strong>Tip:</strong> Listen carefully to the difference. Click each side multiple times.
      Then try to say the pairs out loud and feel how your mouth moves differently.
    </div>
    ${navHtml}
  </div>
</div>`;
}

// ── How to Use ────────────────────────────────────────────────────────────────
function renderHowto() {
  return `
<div class="section-header">
  <div class="section-title">📖 How to Use This Guide</div>
  <div class="section-subtitle">Get the most out of every phoneme card</div>
</div>
<div class="how-steps">
  <div class="step-card"><div class="step-num">1</div><div class="step-title">Listen to the Sound</div><div class="step-text">Click 🔉 Sound under the IPA symbol to hear an isolated pronunciation of the phoneme from a real audio recording.</div></div>
  <div class="step-card"><div class="step-num">2</div><div class="step-title">Hear Sample Words</div><div class="step-text">Click 🔊 Hear the Sound to hear three example words spoken at a clear, slow pace with the instruction "Now you try".</div></div>
  <div class="step-card"><div class="step-num">3</div><div class="step-title">Read the Instructions</div><div class="step-text">Study the "How to Make This Sound" section. Follow the physical placement instructions — tongue position, lip shape, voicing.</div></div>
  <div class="step-card"><div class="step-num">4</div><div class="step-title">Explore Spellings</div><div class="step-text">Click any word chip in the Spelling Patterns section to hear it pronounced. Notice how different spellings map to the same sound.</div></div>
  <div class="step-card"><div class="step-num">5</div><div class="step-title">Hear It in Context</div><div class="step-text">Use the ▶ Hear buttons in the sentence section to hear each phoneme used naturally in a full sentence.</div></div>
  <div class="step-card"><div class="step-num">6</div><div class="step-title">Note the Tips</div><div class="step-text">Each card has a 💡 Tip and ⚠️ Common Mistake. These highlight the key insights for mastery of that sound.</div></div>
</div>
<div class="section-intro"><strong>Recommended learning path:</strong> Start with the IPA Chart to get an overview, then work through each vowel group (Long Monophthongs → Short Monophthongs → Diphthongs), then consonants. Use the Minimal Pairs section to train your ear for similar sounds, and the Games Hub to test yourself.</div>`;
}

// ── Sound Foundations ─────────────────────────────────────────────────────────
function renderFoundations() {
  const rows = [
    ['Long Monophthongs','5',  '/iː/  /ɜː/  /ɑː/  /ɔː/  /uː/','Pure vowels — one position, held long'],
    ['Short Monophthongs','7', '/ɪ/  /e/  /æ/  /ʌ/  /ʊ/  /ɒ/  /ə/','Pure vowels — one position, short duration'],
    ['Diphthongs','8',         '/ɪə/  /eə/  /ʊə/  /eɪ/  /ɔɪ/  /aɪ/  /əʊ/  /aʊ/','Vowels that glide between two positions'],
    ['Plosives','6',           '/p/  /b/  /t/  /d/  /k/  /g/','Complete airflow closure then burst release'],
    ['Fricatives','9',         '/f/  /v/  /θ/  /ð/  /s/  /z/  /ʃ/  /ʒ/  /h/','Turbulent airflow through narrow gap'],
    ['Affricates','2',         '/tʃ/  /dʒ/','Plosive + fricative combination'],
    ['Nasals','3',             '/m/  /n/  /ŋ/','Airflow through nasal cavity'],
    ['Approximants & Lateral','4','/w/  /j/  /r/  /l/','Partial constriction, vowel-like quality'],
  ];
  const tableRows = rows.map(([grp,n,ex,desc]) =>
    `<tr><td><strong>${grp}</strong></td><td style="text-align:center">${n}</td><td style="font-size:14px;font-weight:700;letter-spacing:2px;color:#333">${ex}</td><td style="color:#555">${desc}</td></tr>`
  ).join('');
  return `
<div class="section-header">
  <div class="section-title">🧱 Sound Foundations</div>
  <div class="section-subtitle">Understanding the 44 British English phonemes</div>
</div>
<div class="foundations-grid">
  <div class="found-card"><div class="found-title">What is a Phoneme?</div><div class="found-text">A phoneme is the smallest unit of sound that distinguishes meaning. "Cat" and "bat" differ by one phoneme: /k/ vs /b/. English has 44 phonemes mapped to 26 letters — that's why spelling is complex.</div></div>
  <div class="found-card"><div class="found-title">What is IPA?</div><div class="found-text">The International Phonetic Alphabet is a writing system where each symbol represents exactly one sound. /ʃ/ is always "sh", wherever you see it. It removes spelling ambiguity entirely.</div></div>
  <div class="found-card"><div class="found-title">Vowels vs Consonants</div><div class="found-text">Vowels are produced with an open vocal tract — air flows freely. Consonants involve some constriction or closure. English has 20 vowel sounds and 24 consonant sounds.</div></div>
  <div class="found-card"><div class="found-title">Voiced vs Voiceless</div><div class="found-text">Place your fingers on your throat. Say "sss" — no vibration. Now say "zzz" — feel the buzz. Many consonants come in voiced/voiceless pairs: /s z/, /p b/, /t d/, /k g/, /f v/, /θ ð/, /ʃ ʒ/, /tʃ dʒ/.</div></div>
  <div class="found-card"><div class="found-title">British RP Accent</div><div class="found-text">This guide uses Received Pronunciation (RP) — the accent associated with educated Southern British English. Key features: non-rhotic (R not pronounced at end of words), TRAP-BATH split (/æ/ vs /ɑː/).</div></div>
  <div class="found-card"><div class="found-title">Monophthongs vs Diphthongs</div><div class="found-text">Monophthongs are pure vowels — one tongue position held steady. Diphthongs glide between two positions. Feel the difference: /ɑː/ in "car" (steady) vs /aɪ/ in "my" (tongue rises from open to high).</div></div>
</div>
<div style="margin-top:20px;overflow-x:auto;">
  <table class="ov-table">
    <tr><th>Sound Group</th><th>Count</th><th>IPA Sounds</th><th>Description</th></tr>
    ${tableRows}
  </table>
</div>`;
}

// ── Reference table ───────────────────────────────────────────────────────────
function renderReference() {
  const rows = PHONEMES.map(ph => {
    const pats = ph.patterns.map(p =>
      `<span class="ref-pat" style="background:${CATS[ph.cat].color}22;color:${CATS[ph.cat].color}">${p.sp}</span>`
    ).join('');
    const kw3 = ph.keywords.split(' ').slice(0,3).join(', ');
    return `<tr>
      <td style="text-align:center"><strong>${ph.num}</strong></td>
      <td class="ref-ipa-cell" style="color:${CATS[ph.cat].color}">${ph.ipa}</td>
      <td>${ph.name}</td>
      <td>${ph.sub}</td>
      <td><div class="ref-pats">${pats}</div></td>
      <td><em style="font-size:11px">${kw3}</em></td>
      <td><button class="phoneme-btn" onclick="speakPhoneme('${escQ(ph.ipa)}')">▶</button></td>
    </tr>`;
  }).join('');

  return `
<div class="section-header"><div class="section-title">📋 Quick Reference</div><div class="section-subtitle">All 44 phonemes at a glance</div></div>
<div style="overflow-x:auto">
<table class="ref-table">
  <thead><tr><th>#</th><th>IPA</th><th>Name</th><th>Type</th><th>Spellings</th><th>Examples</th><th></th></tr></thead>
  <tbody>${rows}</tbody>
</table>
</div>`;
}

// ── Search ────────────────────────────────────────────────────────────────────
function renderSearch(q) {
  const ql = q.toLowerCase();
  const results = PHONEMES.filter(ph =>
    ph.ipa.includes(q) ||
    ph.name.toLowerCase().includes(ql) ||
    ph.sub.toLowerCase().includes(ql) ||
    ph.keywords.toLowerCase().includes(ql) ||
    ph.patterns.some(p => p.sp.includes(ql) || p.words.some(w => w.includes(ql)))
  );
  if (!results.length) return `<div class="section-intro">No phonemes matched "<strong>${q}</strong>".</div>`;
  return `
<div class="section-header"><div class="section-title">Search: "${q}"</div><div class="section-subtitle">${results.length} result(s)</div></div>
<div class="cards-grid">${results.map(buildCard).join('')}</div>`;
}

// ── Navigation ────────────────────────────────────────────────────────────────
function navigate(id) {
  if (isLocked(id)) { showPremiumOverlay(); return; }
  currentSection = id;
  searchQuery = '';
  document.getElementById('search-box').value = '';
  updateSidebar();
  renderContent();
}

function updateSidebar() {
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.id === currentSection);
  });
  const nav = NAV.find(n => n.id === currentSection);
  if (nav) setTitle(nav.label);
}

function renderContent() {
  const el = document.getElementById('content');
  if (searchQuery) { el.innerHTML = renderSearch(searchQuery); return; }
  switch (currentSection) {
    case 'welcome':     el.innerHTML = renderWelcome();      break;
    case 'howto':       el.innerHTML = renderHowto();        break;
    case 'foundations': el.innerHTML = renderFoundations();  break;
    case 'ipa-chart':   el.innerHTML = renderIPAChart();     break;
    case 'games':       el.innerHTML = renderGames();        break;
    case 'quiz':        renderQuiz();                        break;
    case 'mp':          renderMP();                          break;
    case 'reference':   el.innerHTML = renderReference();    break;
    default:            el.innerHTML = renderPhonemeList(currentSection); break;
  }
}

// ── Sidebar toggle ────────────────────────────────────────────────────────────
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const isMobile = window.innerWidth <= 640;
  if (isMobile) {
    sidebar.classList.toggle('open');
    let overlay = document.getElementById('sidebar-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'sidebar-overlay';
      document.body.appendChild(overlay);
      overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
      });
    }
    overlay.classList.toggle('show', sidebar.classList.contains('open'));
  } else {
    sidebar.classList.toggle('collapsed');
  }
}

// ── Build sidebar ─────────────────────────────────────────────────────────────
function buildSidebar() {
  const sb = document.getElementById('sidebar-nav');
  let html = '';

  if (isPremium) {
    html += `<div style="padding:8px 14px 2px"><span class="prem-badge">Premium ✓</span></div>`;
  } else {
    html += `<div style="padding:8px 14px 4px;font-size:11px;letter-spacing:.02em;color:#8a96a8;">7 of 44 sounds free</div>`;
  }

  let inSection = false;
  NAV.forEach(item => {
    if (item.type === 'divider') {
      if (inSection) html += '</div>';
      html += `<div class="sidebar-section"><div class="sidebar-section-title">${item.label}</div>`;
      inSection = true;
    } else {
      const locked = isLocked(item.id);
      const isFreeBadge = !isPremium && item.id === 'ms';
      html += `<div class="nav-item" data-id="${item.id}" onclick="navigate('${item.id}')">
        <span class="nav-icon">${item.icon}</span>
        <span>${item.label}${locked ? ' 🔒' : ''}</span>
        ${isFreeBadge ? `<span style="display:inline-block;font-size:10px;padding:1px 6px;margin-left:6px;border-radius:8px;background:rgba(201,162,39,0.18);color:#9c7a1e;font-weight:600;">Free</span>` : ''}
        ${item.count ? `<span class="nav-count">${item.count}</span>` : ''}
      </div>`;
    }
  });
  if (inSection) html += '</div>';
  sb.innerHTML = html;
}

// ── PWA install prompt ────────────────────────────────────────────────────────
function triggerInstall() {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  deferredInstallPrompt.userChoice.then(choice => {
    if (choice.outcome === 'accepted') {
      deferredInstallPrompt = null;
      if (currentSection === 'welcome') renderContent();
    }
  });
}

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildSidebar();
  updateSidebar();
  renderContent();

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeCardFullscreen();
  });
  // Handle browser back button/gesture to close modal
  window.addEventListener('popstate', function(e) {
    _modalHistoryPushed = false;
    const o = document.getElementById('card-modal-overlay');
    if (o) { o.remove(); document.body.style.overflow = ''; }
    const p = document.getElementById('plan-picker-overlay');
    if (p) p.remove();
    const prem = document.getElementById('premium-overlay');
    if (prem) prem.classList.remove('open');
  });
  document.getElementById('search-box').addEventListener('input', e => {
    searchQuery = e.target.value.trim();
    renderContent();
  });

  // sidebar-header click removed to prevent conflict with phoneme audio button

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredInstallPrompt = e;
    if (currentSection === 'welcome') renderContent();
  });

  window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    if (currentSection === 'welcome') renderContent();
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => reg.update())  // Check for updated SW on every page load
      .catch(() => {});
  }
});


