'use strict';

// ── Phoneme data ─────────────────────────────────────────────────────────────
const PHONEMES = [
  // SHORT VOWELS
  { id:'vowel_short_a',  num:1,  ipa:'æ',  name:'Short A',      sub:'Short Vowel',   cat:'ms', file:'vowel_short_a',
    keywords:'cat bat hat mat sat',
    how:'Open mouth wide, tongue low and forward. Lips spread slightly. The lowest front vowel.',
    patterns:[{sp:'a',words:['cat','bat','hat','map','clap','can','fan','gap','jam','sad']}],
    sents:['The black cat sat on the flat map.','Can you hand me that tan bag?'],
    tip:'Exaggerate the jaw drop. Think of a sheep going "baa" — same open, flat sound.',
    mistake:'In RP, TRAP and BATH vowels differ: "cat" /æ/ but "path" /ɑː/. Don\'t mix them.' },

  { id:'vowel_short_e',  num:2,  ipa:'e',  name:'Short E',      sub:'Short Vowel',   cat:'ms', file:'vowel_short_e',
    keywords:'bed red ten men yes',
    how:'Open your mouth halfway. Tongue mid-level — not high, not low. Lips slightly spread. Keep it short and crisp.',
    patterns:[{sp:'e',words:['bed','red','ten','men','pet']},{sp:'ea',words:['head','dead','bread','thread']}],
    sents:['The red hen sat on the edge of the bed.','When did he get the letter from the head?'],
    tip:'Say "eh?" as in British surprise. Short, clear, mid-front vowel.',
    mistake:'Keep it short — "bed" has /e/ not the long vowel /eɪ/.' },

  { id:'vowel_short_i',  num:3,  ipa:'ɪ',  name:'Short I',      sub:'Short Vowel',   cat:'ms', file:'vowel_short_i',
    keywords:'sit bit tip pin him',
    how:'Similar to /iː/ but more relaxed. The tongue is high but not as high. Lips slightly spread but not tense. Shorter and laxer.',
    patterns:[{sp:'i',words:['sit','bit','tip','pin','him','lid','dig','big','pig']},{sp:'y',words:['gym','myth','crystal']}],
    sents:['The fish in the big river swim quickly.','Is this the gift in the pink tin?'],
    tip:'Relax your tongue and lips — /ɪ/ is the lazy version of /iː/. Short and lax.',
    mistake:'Don\'t mix up "ship" /ʃɪp/ and "sheep" /ʃiːp/. Short /ɪ/ vs long /iː/.' },

  { id:'vowel_short_o',  num:4,  ipa:'ɒ',  name:'Short O',      sub:'Short Vowel',   cat:'ms', file:'vowel_short_o',
    keywords:'hot dog lot pod fox',
    how:'Open your mouth wide. Tongue low and back. Lips slightly rounded but not as much as /ɔː/. A low, back, rounded vowel.',
    patterns:[{sp:'o',words:['hot','dog','lot','pod','fox','box','cot','dot','hop','jog']},{sp:'a',words:['want','wash','what','was']}],
    sents:['The hot dog fell off the top of the box.','Pop the odd sock into the shop pot.'],
    tip:'Say "oh" but cut it very short and don\'t round your lips as much.',
    mistake:'In RP, the "o" in "hot" is /ɒ/ NOT /ɑː/. The lips are slightly rounded.' },

  { id:'vowel_short_u',  num:5,  ipa:'ʌ',  name:'Short U',      sub:'Short Vowel',   cat:'ms', file:'vowel_short_u',
    keywords:'cup bus run mud fun',
    how:'Open your mouth slightly. Tongue central and low-mid. Lips neutral — not spread, not rounded. Very open and relaxed.',
    patterns:[{sp:'u',words:['cup','bus','run','mud','fun','bun','gun','cut','gut','hut']},{sp:'o',words:['son','come','love','dove','above']}],
    sents:['The young duck dug up the mud under the bush.','Run and touch the rough trunk.'],
    tip:'Say it like you\'ve been hit in the stomach — "uh!". Brief and central.',
    mistake:'Don\'t confuse "cut" /kʌt/ with "caught" /kɔːt/ or "cot" /kɒt/. Three different vowels.' },

  { id:'vowel_short_oo', num:6,  ipa:'ʊ',  name:'Short OO',     sub:'Short Vowel',   cat:'ms', file:'vowel_short_oo',
    keywords:'book look foot good pull',
    how:'Lightly round your lips — less rounded than /uː/. Tongue high-back but relaxed. The short, lax version of /uː/.',
    patterns:[{sp:'oo',words:['book','look','foot','hood','good','wood','stood','took']},{sp:'u',words:['put','push','pull','full','bull','bush']}],
    sents:['She took a good look at the full book.','Put the wool cushion on the wooden hook.'],
    tip:'Like /uː/ but cut it short and relax the lips. "Look" is much shorter than "Luke".',
    mistake:'Don\'t make "book" rhyme with "Luke". /ʊ/ is short and lax; /uː/ is long and tense.' },

  { id:'vowel_schwa',    num:7,  ipa:'ə',  name:'Schwa',         sub:'Unstressed Vowel',cat:'ms', file:'vowel_schwa',
    keywords:'about the sofa banana comma',
    how:'The most RELAXED sound in English. Your mouth is slightly open, tongue is central. Only appears in UNSTRESSED syllables.',
    patterns:[{sp:'a',words:['about','ago','again','above','afraid']},{sp:'e',words:['open','given','happen','broken','listen']},{sp:'o',words:['bacon','lesson','button','reason','person']}],
    sents:['The teacher opened the lesson about the famous painter.','A person\'s banana fell into the garden.'],
    tip:'Schwa is the MOST COMMON sound in English. Every unstressed syllable can become /ə/.',
    mistake:'"banana" is not /bæ.næ.næ/. It should be /bə.nɑː.nə/. Unstressed = schwa.' },

  // LONG VOWELS
  { id:'vowel_long_ee',  num:8,  ipa:'iː', name:'Long EE',      sub:'Long Vowel',    cat:'ml', file:'vowel_long_ee',
    keywords:'see tree feet meet green',
    how:'Spread your lips wide as if smiling. Raise the front of your tongue high toward the roof of your mouth. Hold the position — no glide.',
    patterns:[{sp:'ee',words:['see','tree','feet','bee','free','knee','sheep','speed']},{sp:'ea',words:['meat','read','beach','clean','dream']},{sp:'e',words:['he','she','me','we','be']},{sp:'e-e',words:['these','theme','here','scene']}],
    sents:['She can see the green tree by the sea.','We need to keep the streets clean.'],
    tip:'Think of the sound when you say "Cheese!" for a photo. Lips spread wide.',
    mistake:'Don\'t add a glide at the end. Keep it pure and steady — not "ee-yuh".' },

  { id:'vowel_long_ar',  num:9,  ipa:'ɑː', name:'Long AR',      sub:'Long Vowel',    cat:'ml', file:'vowel_long_ar',
    keywords:'car far star park dark',
    how:'Open your mouth wide — as if a doctor is checking your throat. Drop your jaw. Tongue lies flat and low at the back.',
    patterns:[{sp:'ar',words:['car','far','star','park','dark','farm','hard','sharp']},{sp:'a',words:['bath','path','grass','fast','last','past']}],
    sents:['The car park is far from the farm.','Ask your father to cast the glass.'],
    tip:'Practise saying "Ahhh" as if relaxing in a hot bath. Open and back.',
    mistake:'In British RP, "bath" words use /ɑː/ not /æ/. "path" = /pɑːθ/, not /pæθ/.' },

  { id:'vowel_long_aw',  num:10, ipa:'ɔː', name:'Long AW',      sub:'Long Vowel',    cat:'ml', file:'vowel_long_aw',
    keywords:'saw law call born more',
    how:'Round your lips into a small oval shape. Raise the back of your tongue toward your soft palate. Hold it steady.',
    patterns:[{sp:'aw',words:['saw','law','draw','straw','lawn','dawn','yawn']},{sp:'or',words:['born','more','for','floor','sport','short']},{sp:'al',words:['call','walk','talk','chalk','hall','wall','ball']}],
    sents:['She thought a walk by the shore would restore her.','The ball caught the wall and fell to the floor.'],
    tip:'Say "or" in "more" and keep that rounded lip shape.',
    mistake:'Don\'t confuse with /ɒ/ (short o). /ɔː/ is LONGER and more rounded.' },

  { id:'vowel_long_oo',  num:11, ipa:'uː', name:'Long OO',      sub:'Long Vowel',    cat:'ml', file:'vowel_long_oo',
    keywords:'moon food blue true you',
    how:'Round your lips tightly into a small circle — like blowing out a candle. Push your lips forward. Raise the back of your tongue high.',
    patterns:[{sp:'oo',words:['moon','food','zoo','boot','cool','fool','pool','roof']},{sp:'ue',words:['blue','clue','glue','true','due']},{sp:'ew',words:['new','few','dew','flew','grew','chew']},{sp:'u-e',words:['rule','tune','cube','rude','flute']}],
    sents:['The moon shone on the cool blue pool.','Use a spoon to remove the fruit juice.'],
    tip:'Say "oo" as if surprised by something beautiful. Lips form a tight circle.',
    mistake:'Keep lips tightly rounded. Don\'t relax into /ʊ/ — "food" ≠ "foot".' },

  { id:'vowel_long_er',  num:12, ipa:'ɜː', name:'Long ER',      sub:'Long Vowel',    cat:'ml', file:'vowel_long_er',
    keywords:'bird her word turn girl',
    how:'Relax your lips — don\'t round them. Place your tongue in the middle of your mouth, neither high nor low. Hold it steady.',
    patterns:[{sp:'er',words:['her','fern','verb','nerve','stern','term','herd']},{sp:'ir',words:['bird','girl','sir','stir','first','shirt','skirt']},{sp:'ur',words:['turn','burn','fur','hurt','curve','nurse','purse']}],
    sents:['The bird perched on the first fern by the church.','Her words hurt more than the burn.'],
    tip:'Imagine you\'re unsure and say "errr...". That\'s it! No lip rounding.',
    mistake:'British /ɜː/ has NO R colouring. Don\'t pull your tongue back like American English.' },

  // DIPHTHONGS
  { id:'vowel_diph_ay',  num:13, ipa:'eɪ', name:'Long A / AY',  sub:'Diphthong',     cat:'di', file:'vowel_diph_ay',
    keywords:'day play say rain eight',
    how:'Start with /e/ (mid-front position), then GLIDE UP toward /ɪ/. Your tongue rises and lips slightly spread more.',
    patterns:[{sp:'ay',words:['day','play','say','stay','way','may','pay','ray']},{sp:'ai',words:['rain','wait','train','brain','mail','sail','tail']},{sp:'a-e',words:['cake','name','late','game','same','gave']}],
    sents:['They say the train may arrive late on that grey day.','Take the cake and place it on the great table.'],
    tip:'The classic "long A" sound. Feel your tongue rise from /e/ to /ɪ/ as you say it.',
    mistake:'Don\'t cut it short. The glide is essential — "day" must end with a slight /ɪ/ quality.' },

  { id:'vowel_diph_eye', num:14, ipa:'aɪ', name:'Long I / EYE',  sub:'Diphthong',     cat:'di', file:'vowel_diph_eye',
    keywords:'my sky high five time',
    how:'Start with an open /a/ position (low, central tongue, wide jaw), then GLIDE UP to /ɪ/. The jaw closes and tongue rises.',
    patterns:[{sp:'i-e',words:['time','like','bike','fine','mine','line','wine','drive']},{sp:'igh',words:['high','night','light','right','might','bright','flight']},{sp:'y',words:['my','sky','fly','by','try','cry','dry']}],
    sents:['Try to find the bright light on the right side.','The child might fly the bright kite high tonight.'],
    tip:'Say "ahh" then close to "ee" — "aaaee". That\'s the glide in "my".',
    mistake:'Don\'t flatten it to /aː/. The /ɪ/ glide at the end is essential.' },

  { id:'vowel_diph_oh',  num:15, ipa:'əʊ', name:'Long O / OH',  sub:'Diphthong',     cat:'di', file:'vowel_diph_oh',
    keywords:'go home note boat low',
    how:'Start with /ə/ (central, relaxed), then GLIDE toward /ʊ/ (rounded). Your lips round and tongue moves back.',
    patterns:[{sp:'o-e',words:['home','bone','stone','note','vote','hope','rope']},{sp:'oa',words:['boat','road','coat','load','foam','groan']},{sp:'ow',words:['low','slow','grow','flow','blow','know','show']}],
    sents:['Go home along the road below the old stone wall.','Show the boat how to row toward the coast.'],
    tip:'This is the classic British "long O". Start neutral then round your lips.',
    mistake:'American "go" starts more back; British /əʊ/ starts central. Keep the schwa start.' },

  { id:'vowel_diph_ow',  num:16, ipa:'aʊ', name:'OW / OW',      sub:'Diphthong',     cat:'di', file:'vowel_diph_ow',
    keywords:'now cow house out loud',
    how:'Start with an open /a/ (wide jaw, low tongue), then GLIDE toward /ʊ/ (rounded). Lips round and jaw closes as you move.',
    patterns:[{sp:'ow',words:['now','cow','down','town','crown','brown','drown']},{sp:'ou',words:['house','out','loud','cloud','ground','found','round','mouth']}],
    sents:['The cloud came down around the whole town.','A loud shout from the crowd in the south.'],
    tip:'Say "ah" then close your lips to "oo" — "ahoo". That\'s how a cow says it!',
    mistake:'Don\'t make it too rounded at the start. The journey from open /a/ is key.' },

  { id:'vowel_diph_oy',  num:17, ipa:'ɔɪ', name:'OY / OI',      sub:'Diphthong',     cat:'di', file:'vowel_diph_oy',
    keywords:'boy toy coin voice joy',
    how:'Start with /ɔː/ (rounded lips, back tongue), then GLIDE toward /ɪ/. Tongue moves from back to front. Lips unround as you move.',
    patterns:[{sp:'oy',words:['boy','toy','joy','enjoy','royal','loyal','annoy']},{sp:'oi',words:['coin','oil','soil','foil','coil','boil','join','voice']}],
    sents:['The boy joined the royal voyage to avoid the noise.','The soil in the foil was moist with oil.'],
    tip:'Say "oi!" as a British expression of surprise. That\'s your /ɔɪ/!',
    mistake:'Don\'t rhyme "oil" with "ole". It must end with the /ɪ/ glide.' },

  { id:'vowel_diph_air', num:18, ipa:'eə', name:'AIR',           sub:'Diphthong',     cat:'di', file:'vowel_diph_air',
    keywords:'air hair care where bear',
    how:'Start /e/ then relax to schwa /ə/. Your jaw opens slightly as you move.',
    patterns:[{sp:'air',words:['air','hair','fair','pair','chair','stair','flair','repair']},{sp:'are',words:['care','dare','fare','hare','rare','share','spare','stare']},{sp:'ear',words:['bear','pear','wear','swear']}],
    sents:['Where is the rare chair with the fair repair?','Beware — a bear may be there near the pear tree.'],
    tip:'Think of the British "there" — glide from /e/ toward schwa.',
    mistake:'In RP, "there" = /ðeə/ not /ðɛːr/. No R colouring!' },

  { id:'vowel_diph_ear', num:19, ipa:'ɪə', name:'EAR',           sub:'Diphthong',     cat:'di', file:'vowel_diph_ear',
    keywords:'ear here near beer deer',
    how:'Start /ɪ/ (short i position), then GLIDE toward /ə/ (schwa). Your jaw slightly opens as you move. The first element is stronger.',
    patterns:[{sp:'ear',words:['ear','near','year','clear','fear','hear','dear','gear']},{sp:'eer',words:['beer','deer','peer','steer','cheer','sheer']},{sp:'ere',words:['here','mere','severe','sincere']}],
    sents:['I fear that the deer is near the pier here.','A cheerful engineer appeared.'],
    tip:'Start at /ɪ/ and smoothly glide to schwa. Feel the tongue move down.',
    mistake:'Don\'t split it into two syllables. "Year" is one syllable, not "ye-ah".' },

  { id:'vowel_diph_oor', num:20, ipa:'ʊə', name:'OOR / CURE',   sub:'Diphthong',     cat:'di', file:'vowel_diph_oor',
    keywords:'pure cure tour sure your',
    how:'Start with /ʊ/ (lightly rounded lips), then GLIDE toward /ə/ (schwa). Lips gradually unround as you move.',
    patterns:[{sp:'ure',words:['cure','pure','sure','lure','mature','secure','endure']},{sp:'our',words:['tour','your','moor','poor']}],
    sents:['The tour to the pure moor was a sure cure.','I am sure your tour will endure.'],
    tip:'This diphthong is merging with /ɔː/ in modern RP. "Sure" can be /ʃɔː/ or /ʃʊə/.',
    mistake:'Many speakers now say /ɔː/ instead: "poor" = /pɔː/. Both are acceptable in RP.' },

  // CONSONANTS — PLOSIVES
  { id:'cons_p', num:21, ipa:'p', name:'P',  sub:'Voiceless Plosive', cat:'pl', file:'cons_p',
    keywords:'pan pet top cap map',
    how:'Press your LIPS together firmly. Build up air pressure. Then release suddenly — a burst of air. No voice.',
    patterns:[{sp:'p',words:['pan','pet','top','cap','map','cup','lip','dip','hip','tip']},{sp:'pp',words:['happy','pepper','copper','supper','happen']}],
    sents:['Pick up the purple pen from the top of the page.','The puppy put its paw on the purple cap.'],
    tip:'Put your hand in front of your mouth — feel a puff of air. No throat vibration.',
    mistake:'At the start of stressed syllables, /p/ is aspirated (with a puff). "pan" = /pʰæn/.' },

  { id:'cons_b', num:22, ipa:'b', name:'B',  sub:'Voiced Plosive',    cat:'pl', file:'cons_b',
    keywords:'bat bus cab rib ball',
    how:'Same lip position as /p/ — press lips together. But ADD VOICE (feel your throat vibrate). Release suddenly. No puff of air like /p/.',
    patterns:[{sp:'b',words:['bat','bus','cab','bin','big','bun','bag','bit']},{sp:'bb',words:['rabbit','bubble','rubber','lobby','ribbon']}],
    sents:['Bob bought a big blue bag of bread.','The rabbit bit the rubber ball by the bed.'],
    tip:'Touch your throat — you should feel vibration when saying /b/.',
    mistake:'At word endings, /b/ is often devoiced. "rob" ends with less vibration.' },

  { id:'cons_t', num:23, ipa:'t', name:'T',  sub:'Voiceless Plosive', cat:'pl', file:'cons_t',
    keywords:'top ten cat sit better',
    how:'Touch the tip of your tongue to the ridge just BEHIND your upper teeth (alveolar ridge). Build up air. Release suddenly with a burst. No voice.',
    patterns:[{sp:'t',words:['tap','ten','sit','cut','bit','tip','tan','hot']},{sp:'tt',words:['butter','better','letter','matter','little','bottle']},{sp:'ed',words:['walked','jumped','stopped','missed']}],
    sents:['Take the hot pot from the table at the top.','The cat sat on the mat and ate the lot.'],
    tip:'Feel the tongue tip on the ridge — NOT touching the teeth (that\'s /θ/).',
    mistake:'In informal British speech, /t/ mid-word becomes a glottal stop. "butter" = /bʌʔə/.' },

  { id:'cons_d', num:24, ipa:'d', name:'D',  sub:'Voiced Plosive',    cat:'pl', file:'cons_d',
    keywords:'dog day bed hard model',
    how:'Same tongue position as /t/ — tip on alveolar ridge. But ADD VOICE. Feel your throat vibrate. Release suddenly.',
    patterns:[{sp:'d',words:['dog','day','bed','mad','did','dug','bad','nod','red']},{sp:'dd',words:['muddy','saddle','middle','fiddle','puddle']},{sp:'ed',words:['played','moved','called','pulled','lived']}],
    sents:['The dog dug a deep ditch in the dark garden.','Did the red bird land on the old dead wood?'],
    tip:'Same as /t/ but voiced. Touch your throat — vibration = /d/, no vibration = /t/.',
    mistake:'/d/ at word endings is often devoiced. Be careful "bad" doesn\'t sound like "bat".' },

  { id:'cons_k', num:25, ipa:'k', name:'K',  sub:'Voiceless Plosive', cat:'pl', file:'cons_k',
    keywords:'cat key back sick school',
    how:'Raise the BACK of your tongue to touch the soft palate (velum). Build up air pressure. Release suddenly. No voice.',
    patterns:[{sp:'k',words:['key','king','kind','kit','keep','kiss']},{sp:'c',words:['cat','cup','cut','coat','cool','car','come']},{sp:'ck',words:['back','lock','duck','neck','rack','tick','kick']}],
    sents:['Take the black clock and put the key on the back of the box.','Could a cat catch a quick duck?'],
    tip:'Feel the back of your tongue press up. /k/ and /g/ are at the BACK of the mouth.',
    mistake:'Silent K: "knee", "knife", "know", "knock" — the K is not pronounced.' },

  { id:'cons_g', num:26, ipa:'g', name:'G',  sub:'Voiced Plosive',    cat:'pl', file:'cons_g',
    keywords:'get go bag dog bigger',
    how:'Same back-tongue position as /k/. But ADD VOICE — feel your throat vibrate. Release suddenly.',
    patterns:[{sp:'g',words:['get','go','dog','big','fog','leg','bag','dig','jug','log']},{sp:'gg',words:['egg','giggle','wiggle','jogger','buggy','bigger']}],
    sents:['The big dog got through the green gate in the fog.','Grab the big log and get going.'],
    tip:'Same as /k/ but add voice. "Go" starts with vibration; "co" does not.',
    mistake:'Silent G: "gnat", "gnome", "gnaw", "sign", "design" — the G is silent.' },

  // CONSONANTS — FRICATIVES
  { id:'cons_f', num:27, ipa:'f', name:'F',  sub:'Voiceless Fricative', cat:'fr', file:'cons_f',
    keywords:'fan fish off leaf coffee',
    how:'Place your UPPER FRONT TEETH on your lower lip. Push air through the narrow gap. No voice — no throat vibration.',
    patterns:[{sp:'f',words:['fan','fat','fit','fog','fun','fad','fin','fix']},{sp:'ff',words:['off','cliff','staff','stuff','stiff','sniff','gruff']},{sp:'ph',words:['photo','phone','phrase','dolphin','elephant']}],
    sents:['Fifty fluffy foxes fled from the forest to find food.','Life is often brief — offer fresh fruit.'],
    tip:'Feel the slight tickle of your teeth on your lip. That\'s the right position.',
    mistake:'Don\'t confuse "ph" words: "phone" = /fəʊn/ not /pəʊn/.' },

  { id:'cons_v', num:28, ipa:'v', name:'V',  sub:'Voiced Fricative',   cat:'fr', file:'cons_v',
    keywords:'van vine love have very',
    how:'Same teeth-on-lip position as /f/. But ADD VOICE — feel your throat vibrate strongly.',
    patterns:[{sp:'v',words:['van','vine','love','vat','vet','vow','vast','vest','gave','live']}],
    sents:['The van drove over the vast valley to the village.','Five brave divers move above the vivid cave.'],
    tip:'Hold /v/ for a moment — you should feel and hear a buzz. "Van" buzzes; "fan" does not.',
    mistake:'Don\'t substitute "w" for "v" — "van" ≠ "wan". Common mistake for some learners.' },

  { id:'cons_th_soft', num:29, ipa:'θ', name:'TH (soft)',  sub:'Voiceless Fricative', cat:'fr', file:'cons_th_soft',
    keywords:'think thank bath path teeth',
    how:'Place the TIP of your tongue BETWEEN your teeth — or just behind your upper teeth. Push air through. No voice.',
    patterns:[{sp:'th',words:['think','thank','bath','path','teeth','thin','thick','three','thread','through']}],
    sents:['Think through the method — three paths are worth a thought.','The thin thread stretched through the thick cloth.'],
    tip:'Stick your tongue out slightly between your teeth. A mirror helps to check.',
    mistake:'Don\'t replace with /s/ or /f/ — "think" ≠ "sink", "three" ≠ "free".' },

  { id:'cons_th_hard', num:30, ipa:'ð', name:'TH (hard)',  sub:'Voiced Fricative',   cat:'fr', file:'cons_th_hard',
    keywords:'the this that them with',
    how:'Same tongue position as /θ/. But ADD VOICE — feel a buzzy vibration. This sound feels "thicker" than /θ/.',
    patterns:[{sp:'th',words:['the','this','that','them','with','they','then','there','thus','mother']}],
    sents:['They would rather bathe in the smooth weather together.','The mother breathes through those other paths.'],
    tip:'/ð/ appears in common function words: the, this, that, they, them, there, than, though.',
    mistake:'Don\'t replace with /d/ or /z/ — "this" ≠ "dis". Feel the tongue between the teeth.' },

  { id:'cons_s', num:31, ipa:'s', name:'S',  sub:'Voiceless Fricative', cat:'fr', file:'cons_s',
    keywords:'sun see bus miss city',
    how:'Bring tongue tip CLOSE (not touching) to the alveolar ridge. Channel air down the middle of your tongue. A thin, sharp hiss. No voice.',
    patterns:[{sp:'s',words:['sun','bus','yes','sad','set','sit','gas']},{sp:'ss',words:['miss','class','dress','cross','press','grass']},{sp:'c',words:['city','cell','rice','face','place','space','nice']}],
    sents:['The six swans sat still on the soft surface of the sea.','Susan sells the finest sea salt.'],
    tip:'Tongue near the ridge but NOT touching. Controlled airflow over a central groove.',
    mistake:'Don\'t over-hiss. Also: "s" after voiced sounds = /z/ (dogs /dɒgz/).' },

  { id:'cons_z', num:32, ipa:'z', name:'Z',  sub:'Voiced Fricative',   cat:'fr', file:'cons_z',
    keywords:'zoo zero buzz is his',
    how:'Same as /s/ but ADD VOICE. The "buzz" of the voice adds a low vibration to the hiss.',
    patterns:[{sp:'z',words:['zip','zoo','buzz','zero','zone','zinc','zoom','maze']},{sp:'s',words:['dogs','runs','beds','rose','nose','those','easy','busy']}],
    sents:['The bees in the busy zone buzzed near the frozen roses.','Zoe\'s clothes were frozen in the blizzard.'],
    tip:'/s/ at the end of voiced words becomes /z/: "dogs" = /dɒgz/, "beds" = /bedz/.',
    mistake:'Don\'t confuse -s plural rules: /s/ after voiceless, /z/ after voiced sounds.' },

  { id:'cons_sh', num:33, ipa:'ʃ', name:'SH', sub:'Voiceless Fricative', cat:'fr', file:'cons_sh',
    keywords:'ship shoe fish push nation',
    how:'Bring your tongue to a broad, flat position slightly further back than /s/. Lips slightly rounded and protruded. "Shhhh" — like quieting someone.',
    patterns:[{sp:'sh',words:['ship','shoe','fish','push','wish','cash','rush','flash','brush']},{sp:'ti',words:['nation','station','action','section','mention']},{sp:'ci',words:['special','social','official','ancient']}],
    sents:['She shushed the children by the fish and chip shop.','The flashy fashion show featured fresh shrubbery.'],
    tip:'Imagine hushing a baby — "shhh!" Your lips push forward slightly.',
    mistake:'Don\'t use /s/ instead of /ʃ/. "Ship" and "sip" are different sounds!' },

  { id:'cons_zh', num:34, ipa:'ʒ', name:'ZH', sub:'Voiced Fricative',   cat:'fr', file:'cons_zh',
    keywords:'measure vision beige genre',
    how:'Same position as /ʃ/ but ADD VOICE. The voiced version of "sh". Mainly in borrowed French words and "-sion"/"-sure" endings.',
    patterns:[{sp:'si',words:['vision','decision','television','division','revision']},{sp:'su',words:['measure','treasure','pleasure','leisure','closure']},{sp:'ge',words:['beige','mirage','garage','massage','camouflage']}],
    sents:['The television showed a vision of beige leisure.','It is a pleasure to measure the treasure.'],
    tip:'/ʒ/ is rare in native English. Master it in "measure", "vision", "beige".',
    mistake:'Don\'t substitute /dʒ/ for /ʒ/. "Measure" = /meʒə/ not /medʒə/.' },

  { id:'cons_h', num:35, ipa:'h', name:'H',  sub:'Voiceless Fricative', cat:'fr', file:'cons_h',
    keywords:'hat hot home behind who',
    how:'Simply breathe out through your open mouth and throat. No specific tongue or lip position — just an airy rush of breath.',
    patterns:[{sp:'h',words:['hat','hot','hit','hop','hub','had','him','has','hug','hen']},{sp:'wh',words:['who','whole','whose']}],
    sents:['He held his hat over his head in the heavy heat.','The happy hamster hid behind the huge hedge.'],
    tip:'Breathe on your glasses to clean them — that airy sound is /h/.',
    mistake:'Silent H: "hour", "honest", "heir", "honour", "vehicle", "herb" (British) — no H sound.' },

  // CONSONANTS — AFFRICATES
  { id:'cons_ch', num:36, ipa:'tʃ', name:'CH', sub:'Voiceless Affricate', cat:'af', file:'cons_ch',
    keywords:'chip church match watch teach',
    how:'Start with /t/ (tongue on ridge), then immediately release into /ʃ/ (sh sound). A TWO-PART sound that feels like one smooth movement.',
    patterns:[{sp:'ch',words:['chair','chip','teach','chat','chin','check','church','child']},{sp:'tch',words:['catch','match','watch','fetch','hatch','patch','ditch','witch']},{sp:'t',words:['nature','future','picture','creature','feature']}],
    sents:['Choose the right chair and watch the champion teach the children.','The rich butcher watched the sketch catch fire.'],
    tip:'Say /t/ then /ʃ/ fast: "t-sh" → "ch". The stop then the release.',
    mistake:'Don\'t make it just /ʃ/ (sh). "Chair" needs the /t/ burst before the /ʃ/ flow.' },

  { id:'cons_j', num:37, ipa:'dʒ', name:'J',  sub:'Voiced Affricate',   cat:'af', file:'cons_j',
    keywords:'jet job age bridge major',
    how:'Same movement as /tʃ/ but VOICED. Start with /d/ then release into /ʒ/. Feel your throat vibrate throughout.',
    patterns:[{sp:'j',words:['jump','jar','joy','jam','job','jet','jot','jug','just']},{sp:'g',words:['giant','gem','gentle','gym','giraffe','ginger','page','age']},{sp:'dge',words:['bridge','hedge','ledge','fudge','judge','lodge','edge','ridge']}],
    sents:['The judge in the large cage urged John to jump the bridge.','The giant giraffe juggled jars of jam.'],
    tip:'Say /d/ then /ʒ/ fast: "d-zh" → "j". Same as /tʃ/ but with voice.',
    mistake:'In British English, "g" before "e/i" = /dʒ/. "Gentle" = /dʒentl/.' },

  // CONSONANTS — NASALS
  { id:'cons_m', num:38, ipa:'m', name:'M',  sub:'Nasal',              cat:'na', file:'cons_m',
    keywords:'man make come swim him',
    how:'Close your LIPS. Let air flow through your NOSE. Voice resonates in nasal cavity. A humming sound. Feel your nose vibrate.',
    patterns:[{sp:'m',words:['mat','me','ham','mid','mob','mud','mad','mop','met','map']},{sp:'mm',words:['hammer','summer','swimmer','shimmer','comment']},{sp:'mb',words:['lamb','comb','thumb','climb','bomb','dumb','limb']}],
    sents:['The mum made some warm meatballs for the summer meal.','The lamb climbed through the morning mist.'],
    tip:'Hum with closed lips — "mmm". That\'s /m/. Feel the nasal resonance.',
    mistake:'Silent M before N: "mnemonic" = /nɪˈmɒnɪk/.' },

  { id:'cons_n', num:39, ipa:'n', name:'N',  sub:'Nasal',              cat:'na', file:'cons_n',
    keywords:'no name ten can funny',
    how:'Touch the tip of your tongue to the alveolar ridge (same as /t/ and /d/). Let air flow through your NOSE.',
    patterns:[{sp:'n',words:['net','no','ten','nun','nap','nil','nod','nag','not']},{sp:'nn',words:['running','dinner','winner','inner','connect']},{sp:'kn',words:['know','knee','knife','knock','knot','kneel','knight']}],
    sents:['Now and then, in the morning sun, ten thin lines narrow into one.','The knight knocked and kneeled.'],
    tip:'Like /m/ but tongue touches the ridge instead of lips closing.',
    mistake:'Silent KN: "know" = /nəʊ/. The K is completely silent in kn- words.' },

  { id:'cons_ng', num:40, ipa:'ŋ', name:'NG', sub:'Nasal',              cat:'na', file:'cons_ng',
    keywords:'sing ring long thing young',
    how:'Raise the BACK of your tongue to touch the soft palate (same as /k/ and /g/). Let air flow through your NOSE. Tongue tip is DOWN.',
    patterns:[{sp:'ng',words:['king','ring','long','song','sing','hang','lung','bang','wrong']},{sp:'n',words:['think','bank','tank','sink','link','drink','chunk','rank']}],
    sents:['The king sang a long song, ringing a gong.','The young gang clung to the strong climbing ring.'],
    tip:'This sound NEVER starts a word in English. It\'s always in the middle or end.',
    mistake:'Many learners add a /g/ after /ŋ/: "singing" = /sɪŋɪŋ/ NOT /sɪŋgɪŋ/.' },

  // CONSONANTS — APPROXIMANTS
  { id:'cons_l', num:41, ipa:'l', name:'L',  sub:'Lateral Approximant', cat:'ap', file:'cons_l',
    keywords:'leg like ball feel milk',
    how:'Touch tongue TIP to the alveolar ridge. Let air flow around the SIDES of the tongue (not the middle). "Clear L" before vowels; "dark L" (velarised) at end of syllables.',
    patterns:[{sp:'l',words:['leg','fly','tall','let','lip','log','lad','lid','lag','lot']},{sp:'ll',words:['tall','bell','fill','dull','bull','well','hill','pull','ball','cell']},{sp:'le',words:['table','bottle','little','people','needle','middle']}],
    sents:['The tall lad lay along the long wall like a log.','Tell the little girl to pull the ball slowly.'],
    tip:'Clear /l/ at syllable start (like "leg"). Dark /l/ at the end (like "tall").',
    mistake:'Don\'t substitute /r/ for /l/ or vice versa. "Light" ≠ "right"; "long" ≠ "rong".' },

  { id:'cons_r', num:42, ipa:'r', name:'R',  sub:'Approximant',         cat:'ap', file:'cons_r',
    keywords:'run red car very three',
    how:'Curl or bunch the tip of your tongue back, toward (but not touching) the area just behind the alveolar ridge. Round your lips slightly.',
    patterns:[{sp:'r',words:['red','run','rain','rug','rod','rim','raw','rap','rid','rub']},{sp:'rr',words:['carrot','carry','arrow','error','mirror','sorry','hurry']},{sp:'wr',words:['write','wrong','wrap','wrist','wreck','wrestle']}],
    sents:['The red rabbit ran rapidly across the rocky river.','Rain rarely rushes around the rural roads.'],
    tip:'In RP, /r/ is NON-RHOTIC — only pronounced before vowels. "Car" = /kɑː/ (no R at end).',
    mistake:'British RP does NOT pronounce R at end of words or before consonants. "Bird" = /bɜːd/ not /bɜːrd/.' },

  { id:'cons_w', num:43, ipa:'w', name:'W',  sub:'Approximant',         cat:'ap', file:'cons_w',
    keywords:'wet win we swim always',
    how:'Round your lips into a tight circle (like /uː/ position). Raise the back of your tongue. Then immediately GLIDE into the following vowel.',
    patterns:[{sp:'w',words:['water','wet','swim','win','way','was','we','will','with','wait']},{sp:'wh',words:['when','where','which','while','why','wheat','wheel','white']}],
    sents:['We will wait by the wide waterway and watch the waves.','Quick! Where is the white whale?'],
    tip:'Start with rounded lips (like blowing a kiss), then quickly open into the vowel.',
    mistake:'Silent W: "write", "wrong", "wrap", "wrist", "wren", "sword" — no W sound.' },

  { id:'cons_y', num:44, ipa:'j', name:'Y',  sub:'Approximant',         cat:'ap', file:'cons_y',
    keywords:'yes you year yell beyond',
    how:'Raise the FRONT-MIDDLE of your tongue toward the hard palate. Glide quickly into the following vowel. Start from /ɪ/ position then move.',
    patterns:[{sp:'y',words:['yes','yet','yell','you','your','year','yard','yarn','yam','yawn']},{sp:'u',words:['use','unit','uniform','union','unique','universe','useful']},{sp:'ew',words:['new','view','fewer','skew']}],
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

// ── Premium / access control ──────────────────────────────────────────────────
const FREE_SECTIONS = new Set(['welcome','howto','foundations','ms']);
const ACCESS_CODE   = 'SC44PRO';
let isPremium = localStorage.getItem('sc44_premium') === '1';

function isLocked(id) {
  return !isPremium && !FREE_SECTIONS.has(id);
}

function showPremiumOverlay() {
  document.getElementById('premium-overlay').classList.add('open');
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

function submitAccessCode() {
  const val = document.getElementById('prem-code-input').value.trim().toUpperCase();
  const msg = document.getElementById('prem-code-msg');
  if (val === ACCESS_CODE) {
    isPremium = true;
    localStorage.setItem('sc44_premium', '1');
    closePremiumOverlay();
    buildSidebar();
    updateSidebar();
    renderContent();
    showToast('✓ Full access unlocked! Enjoy all 44 phonemes.');
  } else {
    msg.textContent = 'Incorrect code — please try again.';
    msg.style.color = '#e53935';
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
  if (!window.speechSynthesis) { alert('Speech synthesis not supported. Use Chrome or Edge.'); return; }
  window.speechSynthesis.cancel();
  const mk = (text, rate) => {
    const u = new SpeechSynthesisUtterance(text);
    u.rate = rate; u.lang = 'en-GB';
    return u;
  };
  window.speechSynthesis.speak(mk('Listen carefully to the sample words.', 0.85));
  window.speechSynthesis.speak(mk(w1, 0.75));
  window.speechSynthesis.speak(mk(w2, 0.75));
  window.speechSynthesis.speak(mk(w3, 0.75));
  window.speechSynthesis.speak(mk('Now you try.', 0.85));
  showToast(w1 + ' · ' + w2 + ' · ' + w3);
}

function speakSent(s) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(s);
  u.rate = 0.8; u.lang = 'en-GB';
  window.speechSynthesis.speak(u);
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
  speakWord(word);
}

// ── IPA cell (for chart) ──────────────────────────────────────────────────────
function ipaCell(ipa, cls, label) {
  if (!ipa) return '<div class="ipa-cell empty"></div>';
  const ph = PHONEMES.find(p => p.ipa === ipa);
  const kw0 = ph ? ph.keywords.split(' ')[0] : ipa;
  const labelHtml = label ? `<span style="font-size:9px;opacity:0.6;font-weight:700;display:block;margin-bottom:2px">${label}</span>` : '';
  return `<div class="ipa-cell ${cls}" title="${ipa} — click: sound · dblclick: sample word"
    onclick="speakPhoneme('${escQ(ipa)}')"
    ondblclick="speakWord('${escQ(kw0)}')">
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
<div class="ph-card ${ph.cat}" id="card-${ph.id}">
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
    <button class="listen-btn" onclick="speakKeywords('${escQ(kw1)}','${escQ(kw2)}','${escQ(kw3)}')">🔊 Hear the Sound</button>
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

function renderWelcome() {
  const installBanner = deferredInstallPrompt ? `
<div class="install-banner">
  <p>📲 <strong>Install SoundCode 44</strong> — add it to your home screen for instant access, anytime.</p>
  <button class="install-btn" onclick="triggerInstall()">Install App</button>
</div>` : '';

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
    <div class="section-subtitle">Single click → isolated sound · Double click → sample word</div>
  </div>
  <div class="ipa-section-block">
    <div class="ipa-section-header">VOWELS — 20 phonemes</div>
    <div class="ipa-subsection-row">
      <div class="ipa-subsection">
        <div class="ipa-sublabel">Monophthongs (12)</div>
        ${monoRows}
      </div>
      <div class="ipa-sub-divider"></div>
      <div class="ipa-subsection">
        <div class="ipa-sublabel">Diphthongs (8)</div>
        ${diphRows}
      </div>
    </div>
  </div>
  <div class="ipa-section-block">
    <div class="ipa-section-header">CONSONANTS — 24 phonemes</div>
    <div class="ipa-con-grid">
      ${conRow0}
      ${conRow1}
      <div style="display:flex;gap:12px;font-size:10px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:.6px;margin:8px 0 2px">
        <span style="flex:1">Nasals &amp; Approximants — all voiced · /h/ = voiceless</span>
      </div>
      ${conRow2}
    </div>
  </div>
  <div class="ipa-chart-hint">vl = voiceless · vd = voiced · Single click plays isolated sound · Double click plays sample word</div>
</div>`;
}

// ── Phoneme list ──────────────────────────────────────────────────────────────
function renderPhonemeList(catFilter) {
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
  document.getElementById('sidebar').classList.toggle('collapsed');
}

// ── Build sidebar ─────────────────────────────────────────────────────────────
function buildSidebar() {
  const sb = document.getElementById('sidebar-nav');
  let html = '';

  if (isPremium) {
    html += `<div style="padding:8px 14px 2px"><span class="prem-badge">Premium ✓</span></div>`;
  }

  let inSection = false;
  NAV.forEach(item => {
    if (item.type === 'divider') {
      if (inSection) html += '</div>';
      html += `<div class="sidebar-section"><div class="sidebar-section-title">${item.label}</div>`;
      inSection = true;
    } else {
      const locked = isLocked(item.id);
      html += `<div class="nav-item" data-id="${item.id}" onclick="navigate('${item.id}')">
        <span class="nav-icon">${item.icon}</span>
        <span>${item.label}${locked ? ' 🔒' : ''}</span>
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

  document.getElementById('search-box').addEventListener('input', e => {
    searchQuery = e.target.value.trim();
    renderContent();
  });

  document.getElementById('sidebar-header').addEventListener('click', toggleSidebar);

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
