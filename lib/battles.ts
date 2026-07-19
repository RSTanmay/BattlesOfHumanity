import { Battle } from "./types";

export const battles: Battle[] = [

{
  id: 1,
  name: "Battle of Megiddo",
  year: -1457,
  displayYear: "1457 BC",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Thutmose_III_at_Karnak.jpg/960px-Thutmose_III_at_Karnak.jpg",
  armies: {
    sideA: "Egyptian Empire (Pharaoh Thutmose III) (~20,000 men)",
    sideB: "Canaanite Coalition (King of Kadesh) (~20,000 men)"
  },
  winner: "Egyptian Empire",
  deaths: "~3,000–5,000",
  history: "The earliest battle recorded in detailed historical sources. Thutmose III marched through the narrow Aruna Pass, surprising the Canaanite coalition and securing Egyptian control over Canaan for generations."
},

{
  id: 2,
  name: "Battle of Kadesh",
  year: -1274,
  displayYear: "1274 BC",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/The_great_Sesostris_%28Rameses_II%29_in_the_Battle_of_Khadesh.jpg/500px-The_great_Sesostris_%28Rameses_II%29_in_the_Battle_of_Khadesh.jpg",
  armies: {
    sideA: "Egyptian Empire (Ramesses II) (~20,000 men)",
    sideB: "Hittite Empire (Muwatalli II) (~40,000 men)"
  },
  winner: "Tactical Draw",
  deaths: "~20,000–30,000",
  history: "The largest chariot battle in history. Although neither side achieved a decisive victory, the conflict eventually produced the world's oldest surviving peace treaty between Egypt and the Hittites."
},

{
  id: 3,
  name: "Battle of the Delta",
  year: -1175,
  displayYear: "1175 BC",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Medinet_Habu_Ramses_III._Tempel_Nordostwand_Abzeichnung_01.jpg/960px-Medinet_Habu_Ramses_III._Tempel_Nordostwand_Abzeichnung_01.jpg",
  armies: {
    sideA: "Egyptian Empire (Ramesses III) (~25,000 men)",
    sideB: "Sea Peoples (~30,000 men)"
  },
  winner: "Egyptian Empire",
  deaths: "~10,000",
  history: "Ramesses III defeated the invading Sea Peoples during the Bronze Age Collapse, preserving Egypt while many neighboring civilizations disappeared."
},

{
  id: 4,
  name: "Battle of Qarqar",
  year: -853,
  displayYear: "853 BC",
  image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Karkar.jpg",
  armies: {
    sideA: "Neo-Assyrian Empire (Shalmaneser III) (~60,000 men)",
    sideB: "Levantine Coalition (~50,000 men)"
  },
  winner: "Inconclusive",
  deaths: "~20,000+",
  history: "One of the largest battles of the Iron Age. A coalition of kingdoms temporarily halted Assyrian expansion into the Levant."
},

{
  id: 5,
  name: "Battle of Thymbra",
  year: -547,
  displayYear: "547 BC",
  image: "",
  armies: {
    sideA: "Achaemenid Persian Empire (Cyrus the Great) (~70,000 men)",
    sideB: "Kingdom of Lydia (Croesus) (~120,000 men)"
  },
  winner: "Persian Empire",
  deaths: "~20,000",
  history: "Cyrus the Great defeated the wealthy Kingdom of Lydia using innovative tactics, leading to Persian control of Asia Minor."
},

{
  id: 6,
  name: "Battle of Marathon",
  year: -490,
  displayYear: "490 BC",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Defeat_of_Croesus_546_BCE.jpg/960px-Defeat_of_Croesus_546_BCE.jpg",
  armies: {
    sideA: "Greek City-States (Athens & Plataea) (~11,000 men)",
    sideB: "Achaemenid Persian Empire (~25,000 men)"
  },
  winner: "Greek City-States",
  deaths: "~6,500",
  history: "Despite being heavily outnumbered, the Greeks defeated the Persians and prevented the first Persian invasion of mainland Greece. The battle inspired the modern marathon race."
},

{
  id: 7,
  name: "Battle of Thermopylae",
  year: -480,
  displayYear: "480 BC",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Scene_of_the_Battle_of_Marathon.jpg/960px-Scene_of_the_Battle_of_Marathon.jpg",
  armies: {
    sideA: "Greek Alliance (King Leonidas I) (~7,000 men)",
    sideB: "Achaemenid Persian Empire (Xerxes I) (~100,000–200,000 men)"
  },
  winner: "Persian Empire",
  deaths: "~20,000+",
  history: "Although defeated, the stand of Leonidas and his allies became one of history's greatest symbols of courage and sacrifice, delaying the Persian advance."
},

{
  id: 8,
  name: "Battle of Salamis",
  year: -480,
  displayYear: "480 BC",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/L%C3%A9onidas_aux_Thermopyles_-_Jacques-Louis_David_-_Mus%C3%A9e_du_Louvre_Peintures_INV_3690_%3B_L_3711.jpg/960px-L%C3%A9onidas_aux_Thermopyles_-_Jacques-Louis_David_-_Mus%C3%A9e_du_Louvre_Peintures_INV_3690_%3B_L_3711.jpg",
  armies: {
    sideA: "Greek Alliance (~370 warships)",
    sideB: "Achaemenid Persian Empire (~600–800 warships)"
  },
  winner: "Greek Alliance",
  deaths: "~40,000",
  history: "The Greeks lured the larger Persian fleet into narrow waters and destroyed its naval superiority, changing the course of the Greco-Persian Wars."
},

{
  id: 9,
  name: "Battle of Plataea",
  year: -479,
  displayYear: "479 BC",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ship_dashed_against_ship%2C_till_the_Persian_Army_dead_strewed_the_deep_like_flowers.jpg/960px-Ship_dashed_against_ship%2C_till_the_Persian_Army_dead_strewed_the_deep_like_flowers.jpg",
  armies: {
    sideA: "Greek Alliance (~100,000 men)",
    sideB: "Achaemenid Persian Empire (~120,000 men)"
  },
  winner: "Greek Alliance",
  deaths: "~50,000+",
  history: "The decisive land battle that ended the Persian invasion of Greece. It secured Greek independence and opened the way for the Classical Greek Golden Age."
},

{
  id: 10,
  name: "Battle of Mycale",
  year: -479,
  displayYear: "479 BC",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Scene_of_the_Battle_of_Plataea.jpg/960px-Scene_of_the_Battle_of_Plataea.jpg",
  armies: {
    sideA: "Greek Alliance (Leotychidas & Xanthippus) (~40,000 men)",
    sideB: "Achaemenid Persian Empire (~60,000 men)"
  },
  winner: "Greek Alliance",
  deaths: "~20,000",
  history: "Fought shortly after Plataea, the Greeks destroyed the remaining Persian forces in Asia Minor. The victory ended Persian naval dominance in the Aegean and marked the beginning of the Greek offensive against Persia."
},

{
  id: 11,
  name: "Battle of Eurymedon",
  year: -466,
  displayYear: "466 BC",
  image: "https://cdn.thecollector.com/wp-content/uploads/2023/06/battle-of-mycale.jpg?width=943&height=530&quality=100&dpr=2",
  armies: {
    sideA: "Delian League (Cimon) (~25,000 men)",
    sideB: "Achaemenid Persian Empire (~35,000 men)"
  },
  winner: "Delian League",
  deaths: "~15,000",
  history: "Cimon defeated the Persians on both land and sea during the same campaign. The victory secured Greek dominance in the eastern Mediterranean for decades."
},

{
  id: 12,
  name: "Battle of Leuctra",
  year: -371,
  displayYear: "371 BC",
  image: "https://castingthroughancientgreece.com/wp-content/uploads/2022/06/title-image.jpg",
  armies: {
    sideA: "Thebes (Epaminondas) (~11,000 men)",
    sideB: "Sparta (King Cleombrotus I) (~20,000 men)"
  },
  winner: "Thebes",
  deaths: "~2,500",
  history: "Epaminondas shattered the myth of Spartan invincibility using innovative battlefield tactics. The battle ended centuries of Spartan military dominance in Greece."
},

{
  id: 13,
  name: "Battle of Chaeronea",
  year: -338,
  displayYear: "338 BC",
  image: "https://www.greece-is.com/wp-content/uploads/2021/07/Battle-of-Leuctra_5.jpg",
  armies: {
    sideA: "Kingdom of Macedon (Philip II & Alexander) (~35,000 men)",
    sideB: "Greek Alliance (Athens & Thebes) (~35,000 men)"
  },
  winner: "Kingdom of Macedon",
  deaths: "~3,000",
  history: "Philip II united Greece under Macedonian leadership. It also marked the first major battlefield appearance of the young Alexander, who would soon conquer the Persian Empire."
},

{
  id: 14,
  name: "Battle of the Granicus",
  year: -334,
  displayYear: "334 BC",
  image: "http://tanguay.info/learntracker/customImages/itemTypes/learnItem_philipsarmy.jpg",
  armies: {
    sideA: "Kingdom of Macedon (Alexander the Great) (~40,000 men)",
    sideB: "Achaemenid Persian Empire (~40,000 men)"
  },
  winner: "Kingdom of Macedon",
  deaths: "~22,000",
  history: "Alexander's first major victory against Persia opened Asia Minor to Macedonian conquest and demonstrated his aggressive leadership."
},

{
  id: 15,
  name: "Battle of Issus",
  year: -333,
  displayYear: "333 BC",
  image: "https://i.pinimg.com/736x/3d/fc/c1/3dfcc1f5191e37d5152c92505aa5723b.jpg",
  armies: {
    sideA: "Kingdom of Macedon (Alexander the Great) (~40,000 men)",
    sideB: "Achaemenid Persian Empire (Darius III) (~80,000–100,000 men)"
  },
  winner: "Kingdom of Macedon",
  deaths: "~30,000",
  history: "Alexander decisively defeated King Darius III despite being heavily outnumbered. The Persian king fled, leaving his family behind, and Alexander gained control of Syria."
},

{
  id: 16,
  name: "Siege of Tyre",
  year: -332,
  displayYear: "332 BC",
  image: "https://www.warhistoryonline.com/wp-content/uploads/sites/64/2017/01/untitled-design-66-640x335.jpg",
  armies: {
    sideA: "Kingdom of Macedon (Alexander the Great) (~40,000 men)",
    sideB: "City of Tyre (~30,000 defenders)"
  },
  winner: "Kingdom of Macedon",
  deaths: "~20,000",
  history: "Alexander built a massive causeway across the sea to reach the island city of Tyre. After a seven-month siege, he captured one of the strongest fortresses of the ancient world."
},

{
  id: 17,
  name: "Battle of Gaugamela",
  year: -331,
  displayYear: "331 BC",
  image: "https://c7.alamy.com/comp/K8DC85/the-siege-of-tyre-by-alexander-the-great-in-332-bc-tyre-was-a-strategic-K8DC85.jpg",
  armies: {
    sideA: "Kingdom of Macedon (Alexander the Great) (~47,000 men)",
    sideB: "Achaemenid Persian Empire (Darius III) (~100,000–250,000 men)"
  },
  winner: "Kingdom of Macedon",
  deaths: "~50,000",
  history: "Alexander's masterpiece. His victory destroyed the Achaemenid Empire and made him ruler of the largest empire the world had seen up to that time."
},

{
  id: 18,
  name: "Battle of the Persian Gate",
  year: -330,
  displayYear: "330 BC",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pietro_da_Cortona_-_Battle_of_Alexander_versus_Darius_-_Google_Art_Project.jpg/960px-Pietro_da_Cortona_-_Battle_of_Alexander_versus_Darius_-_Google_Art_Project.jpg",
  armies: {
    sideA: "Kingdom of Macedon (Alexander the Great) (~17,000 men)",
    sideB: "Persian Empire (Ariobarzanes) (~25,000 men)"
  },
  winner: "Kingdom of Macedon",
  deaths: "~20,000",
  history: "Known as the 'Persian Thermopylae,' Persian defenders blocked Alexander's advance through a mountain pass before being outflanked and defeated."
},

{
  id: 19,
  name: "Battle of the Hydaspes",
  year: -326,
  displayYear: "326 BC",
  image: "https://www.warhistoryonline.com/wp-content/uploads/sites/64/2016/05/Persian-Commander-Ariobarzan-seizes-Alexander-Troops-at-Persian-Gate.jpg",
  armies: {
    sideA: "Kingdom of Macedon (Alexander the Great) (~41,000 men)",
    sideB: "Kingdom of Paurava (King Porus) (~50,000 men)"
  },
  winner: "Kingdom of Macedon",
  deaths: "~25,000",
  history: "Alexander crossed the flooded Hydaspes River in secret and defeated King Porus despite facing hundreds of war elephants. It was Alexander's final great victory before his army refused to march farther east."
},

{
  id: 20,
  name: "Battle of Ipsus",
  year: -301,
  displayYear: "301 BC",
  image: "https://i0.wp.com/i.imgur.com/fbGtZ9C.jpg",
  armies: {
    sideA: "Seleucid–Lysimachid Coalition (~80,000 men)",
    sideB: "Antigonid Kingdom (~70,000 men)"
  },
  winner: "Seleucid Coalition",
  deaths: "~20,000",
  history: "The successors of Alexander fought for control of his empire. The defeat and death of Antigonus permanently divided Alexander's empire into several Hellenistic kingdoms."
},

{
  id: 21,
  name: "Battle of Heraclea",
  year: -280,
  displayYear: "280 BC",
  image: "https://static.wikia.nocookie.net/totalwar-ar/images/1/1c/Battle_of_Heraclea.jpg/revision/latest?cb=20200401204438",
  armies: {
    sideA: "Kingdom of Epirus (Pyrrhus) (~25,000 men)",
    sideB: "Roman Republic (~35,000 men)"
  },
  winner: "Kingdom of Epirus",
  deaths: "~15,000",
  history: "Pyrrhus introduced war elephants to Italy and defeated the Romans. However, his heavy losses foreshadowed the costly victories that gave rise to the phrase 'Pyrrhic Victory.'"
},

{
  id: 22,
  name: "Battle of Asculum",
  year: -279,
  displayYear: "279 BC",
  image: "https://kmhistories.wordpress.com/wp-content/uploads/2018/08/ac9d0dbe01b6293389e2c771ccb4ff7d.jpg?w=1024",
  armies: {
    sideA: "Kingdom of Epirus (Pyrrhus) (~40,000 men)",
    sideB: "Roman Republic (~40,000 men)"
  },
  winner: "Kingdom of Epirus",
  deaths: "~15,000",
  history: "Although Pyrrhus won again, his army suffered irreplaceable losses. The victory weakened him so severely that he could no longer continue his campaign effectively."
},

{
  id: 23,
  name: "Battle of Cannae",
  year: -216,
  displayYear: "216 BC",
  image: "https://www.historytoday.com/sites/default/files/2021-07/Canae.jpg",
  armies: {
    sideA: "Carthaginian Republic (Hannibal Barca) (~50,000 men)",
    sideB: "Roman Republic (Varro & Paullus) (~86,000 men)"
  },
  winner: "Carthaginian Republic",
  deaths: "~50,000–70,000",
  history: "Hannibal executed the most famous double-envelopment in military history, completely surrounding the Roman army. The battle remains one of the greatest tactical victories ever achieved."
},

{
  id: 24,
  name: "Battle of Metaurus",
  year: -207,
  displayYear: "207 BC",
  image: "https://www.warhistoryonline.com/wp-content/uploads/sites/64/2016/04/carthagi-1-682x357.jpg",
  armies: {
    sideA: "Roman Republic (~40,000 men)",
    sideB: "Carthaginian Republic (Hasdrubal Barca) (~30,000 men)"
  },
  winner: "Roman Republic",
  deaths: "~20,000",
  history: "Rome defeated Hannibal's brother Hasdrubal before he could reinforce Hannibal in Italy. The victory marked a major turning point in the Second Punic War."
},

{
  id: 25,
  name: "Battle of Zama",
  year: -202,
  displayYear: "202 BC",
  image: "https://cdn.britannica.com/14/198814-050-E5CAD36D/Battle-of-Zama-canvas-artist-Giulio-Romano.jpg?w=300",
  armies: {
    sideA: "Roman Republic (Scipio Africanus) (~35,000 men)",
    sideB: "Carthaginian Republic (Hannibal Barca) (~45,000 men)"
  },
  winner: "Roman Republic",
  deaths: "~25,000",
  history: "Scipio Africanus defeated Hannibal in his only major battlefield loss. The battle ended the Second Punic War and established Rome as the dominant power in the western Mediterranean."
},


{
  id: 26,
  name: "Battle of Carrhae",
  year: -53,
  displayYear: "53 BC",
  image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*coCkxUmoWD-GPgpxuuXceQ.jpeg",
  armies: {
    sideA: "Roman Republic (Marcus Licinius Crassus) (~42,000 men)",
    sideB: "Parthian Empire (Surena) (~10,000–12,000 men)"
  },
  winner: "Parthian Empire",
  deaths: "~20,000 Romans",
  history: "One of Rome's greatest military disasters. Parthian horse archers and heavily armored cataphracts destroyed Crassus' army, proving that mobility and ranged warfare could defeat even Rome's disciplined legions."
},

{
  id: 27,
  name: "Battle of Alesia",
  year: -52,
  displayYear: "52 BC",
  image: "https://www.thoughtco.com/thmb/rUGyZdBELBFCuKG3FqHLuPcS9vE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/vercingetorix-throws-down-his-arms-at-the-feet-of-julius-caesar-959930078-5c3a583246e0fb00010d74d9.jpg",
  armies: {
    sideA: "Roman Republic (Julius Caesar) (~60,000 men)",
    sideB: "Gallic Coalition (Vercingetorix) (~80,000–150,000 men)"
  },
  winner: "Roman Republic",
  deaths: "~30,000+",
  history: "Caesar trapped Vercingetorix inside Alesia while simultaneously defending against a massive relief army. His double ring of fortifications became one of history's greatest engineering achievements and completed the Roman conquest of Gaul."
},

{
  id: 28,
  name: "Battle of Pharsalus",
  year: -48,
  displayYear: "48 BC",
  image: "https://storage.ghost.io/c/aa/80/aa80281a-abce-4f35-865f-05153c8cc335/content/images/2026/05/The-battle-of-Pharsalus-1.jpg",
  armies: {
    sideA: "Roman Republic (Julius Caesar) (~22,000 men)",
    sideB: "Roman Republic (Pompey the Great) (~45,000 men)"
  },
  winner: "Julius Caesar",
  deaths: "~20,000",
  history: "Despite being heavily outnumbered, Caesar decisively defeated Pompey during the Roman Civil War. The victory secured Caesar's supremacy and ultimately transformed Rome from a republic into an empire."
},

{
  id: 29,
  name: "Battle of Actium",
  year: -31,
  displayYear: "31 BC",
  image: "https://vads.ac.uk/digital/api/singleitem/image/NIRP/33289/default.jpg",
  armies: {
    sideA: "Octavian & Marcus Agrippa (~400 warships)",
    sideB: "Mark Antony & Cleopatra (~500 warships)"
  },
  winner: "Octavian",
  deaths: "~5,000–10,000",
  history: "The decisive naval battle that ended the Roman Republic. Octavian's victory led to the defeat of Antony and Cleopatra and the establishment of the Roman Empire under Emperor Augustus."
},

{
  id: 30,
  name: "Battle of the Teutoburg Forest",
  year: 9,
  displayYear: "9 AD",
  image: "https://warfarehistorynetwork.com/wp-content/uploads/2019/01/AKG2485527.jpg",
  armies: {
    sideA: "Roman Empire (Publius Quinctilius Varus) (~20,000 men)",
    sideB: "Germanic Tribes (Arminius) (~20,000–30,000 warriors)"
  },
  winner: "Germanic Tribes",
  deaths: "~18,000–20,000 Romans",
  history: "Three Roman legions were ambushed and annihilated in dense forests. The defeat permanently ended Roman expansion east of the Rhine River."
},

{
  id: 31,
  name: "Battle of Red Cliffs",
  year: 208,
  displayYear: "208 AD",
  image: "https://www.warhistoryonline.com/wp-content/uploads/sites/64/2016/05/REDCLIFF.png",
  armies: {
    sideA: "Sun Quan–Liu Bei Alliance (~50,000 men)",
    sideB: "Cao Cao (~220,000 men)"
  },
  winner: "Sun Quan–Liu Bei Alliance",
  deaths: "~40,000+",
  history: "One of China's most famous battles. A devastating fire attack destroyed Cao Cao's fleet and prevented him from unifying China, leading to the Three Kingdoms period."
},

{
  id: 32,
  name: "Battle of Milvian Bridge",
  year: 312,
  displayYear: "312 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Battle_of_the_Milvian_Bridge_by_Giulio_Romano%2C_1520-24.jpg/960px-Battle_of_the_Milvian_Bridge_by_Giulio_Romano%2C_1520-24.jpg",
  armies: {
    sideA: "Constantine I (~40,000 men)",
    sideB: "Maxentius (~75,000 men)"
  },
  winner: "Constantine I",
  deaths: "~20,000",
  history: "Constantine defeated his rival after reportedly seeing a Christian symbol before battle. His victory eventually led to Christianity becoming the dominant religion of the Roman Empire."
},

{
  id: 33,
  name: "Battle of Strasbourg",
  year: 357,
  displayYear: "357 AD",
  image: "https://i.pinimg.com/736x/43/b0/5b/43b05b00540c54199357fe8d48556851.jpg",
  armies: {
    sideA: "Roman Empire (Julian) (~13,000 men)",
    sideB: "Alamanni Confederation (~35,000 men)"
  },
  winner: "Roman Empire",
  deaths: "~8,000",
  history: "Julian, later known as Julian the Apostate, won a remarkable victory against a much larger Germanic force, restoring Roman authority along the Rhine frontier."
},

{
  id: 34,
  name: "Battle of Adrianople",
  year: 378,
  displayYear: "378 AD",
  image: "https://shadowsofconstantinople.com/wp-content/uploads/2024/05/gnjnpkfxwaekven.jpeg?w=768",
  armies: {
    sideA: "Roman Empire (Emperor Valens) (~25,000 men)",
    sideB: "Goths (Fritigern) (~20,000–25,000 men)"
  },
  winner: "Goths",
  deaths: "~15,000–20,000 Romans",
  history: "The Roman army was crushed and Emperor Valens was killed. The battle exposed Rome's growing military weakness and is widely regarded as a turning point in the decline of the Western Roman Empire."
},

{
  id: 35,
  name: "Battle of the Frigidus",
  year: 394,
  displayYear: "394 AD",
  image: "https://warhistory.org/media/2024/12/d-kfjiw4aeh3re_width_584.jpg",
  armies: {
    sideA: "Roman Empire (Theodosius I) (~40,000 men)",
    sideB: "Western Roman Forces (Eugenius & Arbogast) (~50,000 men)"
  },
  winner: "Theodosius I",
  deaths: "~20,000",
  history: "Theodosius reunified the Roman Empire for the last time. After his death the following year, the empire split permanently into Eastern and Western halves."
},

{
  id: 36,
  name: "Battle of the Catalaunian Plains",
  year: 451,
  displayYear: "451 AD",
  image: "https://www.historiascripta.org/wp-content/uploads/2024/04/attila-and-aetius-clash-in-the-catalaunian-plains-chronicles-of-the-ancient-armies-1.png",
  armies: {
    sideA: "Roman–Visigoth Alliance (Aetius & Theodoric I) (~80,000 men)",
    sideB: "Hunnic Empire (Attila the Hun) (~70,000 men)"
  },
  winner: "Roman–Visigoth Alliance",
  deaths: "~30,000–50,000",
  history: "One of the largest battles of late antiquity. Attila's advance into Western Europe was halted, preventing the Huns from extending their dominance across Gaul."
},

{
  id: 37,
  name: "Battle of Vouillé",
  year: 507,
  displayYear: "507 AD",
  image: "https://gertitashkomd.com/wp-content/uploads/2025/06/Tashko-Battle-of-Vouille-507-1024x576.jpg",
  armies: {
    sideA: "Frankish Kingdom (Clovis I) (~40,000 men)",
    sideB: "Visigothic Kingdom (Alaric II) (~25,000 men)"
  },
  winner: "Frankish Kingdom",
  deaths: "~10,000",
  history: "Clovis defeated the Visigoths and secured Frankish dominance over much of Gaul. The victory laid the foundations for the future Kingdom of France."
},


{
  id: 38,
  name: "Battle of Yarmouk",
  year: 636,
  displayYear: "636 AD",
  image: "https://preview.redd.it/on-this-date-the-battle-of-yarmouk-ends-in-a-victory-for-v0-yzpjvgjifsi91.png?width=680&format=png&auto=webp&s=4c7699f2bbf58eba910c7138bced2c7e3cccca9a",
  armies: {
    sideA: "Rashidun Caliphate (Khalid ibn al-Walid) (~40,000 men)",
    sideB: "Byzantine Empire (Vahan) (~80,000–100,000 men)"
  },
  winner: "Rashidun Caliphate",
  deaths: "~50,000",
  history: "One of history's most decisive battles. Khalid ibn al-Walid destroyed the Byzantine army, ending Byzantine control over Syria and opening the Levant to Islamic expansion."
},

{
  id: 39,
  name: "Battle of al-Qadisiyyah",
  year: 636,
  displayYear: "636 AD",
  image: "https://media.sciencephoto.com/image/c0555182/800wm/C0555182-Battle_of_al-Qadisiyyah,_636.jpg",
  armies: {
    sideA: "Rashidun Caliphate (Sa'd ibn Abi Waqqas) (~30,000 men)",
    sideB: "Sasanian Empire (Rostam Farrokhzad) (~60,000 men)"
  },
  winner: "Rashidun Caliphate",
  deaths: "~30,000",
  history: "The Muslim army defeated the Sasanian Empire after several days of fierce fighting. The battle opened Persia to conquest and marked the beginning of the end of one of history's oldest empires."
},

{
  id: 40,
  name: "Battle of Nahavand",
  year: 642,
  displayYear: "642 AD",
  image: "https://bookofworldhistory.com/_next/image?url=https%3A%2F%2Fresource.bookofworldhistory.com%2Fimages%2FHistorical%2520illustration%2520of%2520the%2520Battle%2520of%2520Nahavand%2520between%2520Rashidun%2520Arab%2520forces%2520and%2520the%2520Sasanian%2520Persian%2520army%2520in%2520642%2520CE.webp_1778335764068&w=1080&q=75",
  armies: {
    sideA: "Rashidun Caliphate (~30,000 men)",
    sideB: "Sasanian Empire (~60,000–100,000 men)"
  },
  winner: "Rashidun Caliphate",
  deaths: "~35,000",
  history: "Known as the 'Victory of Victories,' Nahavand effectively destroyed the remaining military strength of the Sasanian Empire, allowing Persia to be incorporated into the Islamic Caliphate."
},

{
  id: 41,
  name: "Battle of Tours",
  year: 732,
  displayYear: "732 AD",
  image: "https://www.deutschlandmuseum.de/wp-content/uploads/2025/10/25100732_Schlacht_bei_Poitiers_und_Tours-1000x560.jpg",
  armies: {
    sideA: "Frankish Kingdom (Charles Martel) (~25,000 men)",
    sideB: "Umayyad Caliphate (Abdul Rahman Al Ghafiqi) (~30,000–50,000 men)"
  },
  winner: "Frankish Kingdom",
  deaths: "~15,000",
  history: "Charles Martel halted the Umayyad advance into Western Europe. The battle strengthened the Frankish Kingdom and contributed to the rise of the Carolingian Empire."
},

{
  id: 42,
  name: "Battle of Talas",
  year: 751,
  displayYear: "751 AD",
  image: "https://media.sciencephoto.com/image/c0555193/800wm/C0555193-Battle_of_Talas,_751,_illustration.jpg",
  armies: {
    sideA: "Abbasid Caliphate (~30,000 men)",
    sideB: "Tang Dynasty (~30,000 men)"
  },
  winner: "Abbasid Caliphate",
  deaths: "~15,000",
  history: "This battle ended Chinese influence in Central Asia. It is also traditionally associated with the spread of papermaking technology from China to the Islamic world."
},

{
  id: 43,
  name: "Battle of Lechfeld",
  year: 955,
  displayYear: "955 AD",
  image: "https://www.hungarianconservative.com/wp-content/uploads/2022/10/Kepernyofoto-2022-10-27-17.19.05-1-1024x552.png",
  armies: {
    sideA: "Holy Roman Empire (Otto I) (~25,000 men)",
    sideB: "Magyar Confederation (~30,000 men)"
  },
  winner: "Holy Roman Empire",
  deaths: "~20,000",
  history: "Otto I decisively defeated the Magyars, ending decades of raids into Western Europe. The victory secured Central Europe and established Otto as one of medieval Europe's greatest rulers."
},

{
  id: 44,
  name: "Battle of Hastings",
  year: 1066,
  displayYear: "1066 AD",
  image: "https://warfarehistorynetwork.com/wp-content/uploads/2022/05/M-Spr21-Hastings-1.jpg",
  armies: {
    sideA: "Normandy (William the Conqueror) (~15,000 men)",
    sideB: "Kingdom of England (Harold II) (~20,000 men)"
  },
  winner: "Normandy",
  deaths: "~10,000–15,000",
  history: "William defeated Harold II and became King of England. The Norman Conquest transformed England's language, government, architecture, and aristocracy, leaving a lasting influence on British history."
},

{
  id: 45,
  name: "Battle of Manzikert",
  year: 1071,
  displayYear: "1071 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Battle_of_Manzikert_%281071%29.webp",
  armies: {
    sideA: "Seljuk Empire (Alp Arslan) (~40,000 men)",
    sideB: "Byzantine Empire (Romanos IV) (~70,000 men)"
  },
  winner: "Seljuk Empire",
  deaths: "~20,000",
  history: "The Byzantine army was decisively defeated and Emperor Romanos IV was captured. The loss opened Anatolia to Turkish settlement and eventually contributed to the launch of the Crusades."
},

{
  id: 46,
  name: "Battle of Dorylaeum",
  year: 1097,
  displayYear: "1097 AD",
  image: "https://i.pinimg.com/1200x/c3/af/3e/c3af3e8561851ea8f394f8b3ebf0af75.jpg",
  armies: {
    sideA: "First Crusade (~35,000 men)",
    sideB: "Seljuk Empire (~30,000 men)"
  },
  winner: "First Crusade",
  deaths: "~10,000",
  history: "The Crusaders defeated repeated Turkish attacks and secured their advance through Anatolia. The victory allowed the First Crusade to continue toward Jerusalem."
},

{
  id: 47,
  name: "Battle of Hattin",
  year: 1187,
  displayYear: "1187 AD",
  image: "https://warfarehistorynetwork.com/wp-content/uploads/2015/08/Horns-of-Hattin-1-1024x576.jpg",
  armies: {
    sideA: "Ayyubid Sultanate (Saladin) (~30,000 men)",
    sideB: "Kingdom of Jerusalem (~20,000 men)"
  },
  winner: "Ayyubid Sultanate",
  deaths: "~17,000",
  history: "Saladin surrounded and destroyed the Crusader army near the Horns of Hattin. The victory led directly to the recapture of Jerusalem and triggered the Third Crusade."
},

{
  id: 48,
  name: "Battle of Arsuf",
  year: 1191,
  displayYear: "1191 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Schlacht_von_Arsuf.jpg",
  armies: {
    sideA: "Third Crusade (Richard the Lionheart) (~20,000 men)",
    sideB: "Ayyubid Sultanate (Saladin) (~30,000 men)"
  },
  winner: "Third Crusade",
  deaths: "~7,000",
  history: "Richard the Lionheart defeated Saladin in one of the Crusades' most famous battles. Although Jerusalem was not retaken, the victory restored Crusader morale and secured the coast."
},

{
  id: 49,
  name: "Battle of Bouvines",
  year: 1214,
  displayYear: "1214 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Bataille_de_Bouvines_gagnee_par_Philippe_Auguste.jpg/960px-Bataille_de_Bouvines_gagnee_par_Philippe_Auguste.jpg",
  armies: {
    sideA: "Kingdom of France (Philip II) (~25,000 men)",
    sideB: "Holy Roman Empire Coalition (~25,000 men)"
  },
  winner: "Kingdom of France",
  deaths: "~10,000",
  history: "Philip II crushed the coalition opposing him, making France the dominant power in Western Europe. The defeat weakened King John's position in England and contributed to the signing of the Magna Carta the following year."
},

{
  id: 50,
  name: "Siege of Constantinople",
  year: 1204,
  displayYear: "1204 AD",
  image: "https://gertitashkomd.com/wp-content/uploads/2025/05/Tashko-Fall-of-Constantinople-1453-1024x576.jpg",
  armies: {
    sideA: "Fourth Crusade (~20,000 men)",
    sideB: "Byzantine Empire (~30,000 defenders)"
  },
  winner: "Fourth Crusade",
  deaths: "~10,000+",
  history: "Instead of reaching the Holy Land, the Crusaders captured and looted Constantinople, the capital of the Byzantine Empire. The sack permanently weakened Byzantium and remains one of the most controversial events of the Crusades."
},

{
  id: 51,
  name: "Battle of Ain Jalut",
  year: 1260,
  displayYear: "1260 AD",
  image: "https://tshistorical.com/wp-content/uploads/2022/01/Mangu-Khan-death-TS-HISTORICAL.jpg",
  armies: {
    sideA: "Mamluk Sultanate (Qutuz & Baibars) (~24,000 men)",
    sideB: "Mongol Empire (Kitbuqa) (~20,000 men)"
  },
  winner: "Mamluk Sultanate",
  deaths: "~15,000",
  history: "The Mamluks handed the Mongols one of their first major defeats. The victory stopped the Mongol advance into Egypt and North Africa, preserving the Islamic heartlands."
},

{
  id: 52,
  name: "Battle of Bannockburn",
  year: 1314,
  displayYear: "1314 AD",
  image: "https://substackcdn.com/image/fetch/$s_!ky93!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F09066dc3-c08d-4590-8772-c2acffd3bcbf_994x536.png",
  armies: {
    sideA: "Kingdom of Scotland (Robert the Bruce) (~7,000 men)",
    sideB: "Kingdom of England (Edward II) (~20,000 men)"
  },
  winner: "Kingdom of Scotland",
  deaths: "~10,000",
  history: "Robert the Bruce won one of Scotland's greatest victories, securing Scottish independence and becoming a national hero."
},

{
  id: 53,
  name: "Battle of Crécy",
  year: 1346,
  displayYear: "1346 AD",
  image: "https://www.historyhit.com/app/uploads/2020/07/edward-blackprince-crecy-painting-benjamin-1.jpg?x64072",
  armies: {
    sideA: "Kingdom of England (Edward III) (~15,000 men)",
    sideB: "Kingdom of France (Philip VI) (~35,000 men)"
  },
  winner: "Kingdom of England",
  deaths: "~12,000",
  history: "English longbowmen devastated the French army. Crécy demonstrated the decline of heavily armored knights and transformed medieval warfare."
},

{
  id: 54,
  name: "Battle of Poitiers",
  year: 1356,
  displayYear: "1356 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Battle_poitiers.jpg/960px-Battle_poitiers.jpg",
  armies: {
    sideA: "Kingdom of England (Edward, the Black Prince) (~8,000 men)",
    sideB: "Kingdom of France (King John II) (~35,000 men)"
  },
  winner: "Kingdom of England",
  deaths: "~8,000",
  history: "The English captured the French king himself, creating a political crisis in France and strengthening England during the Hundred Years' War."
},

{
  id: 55,
  name: "Battle of Kulikovo",
  year: 1380,
  displayYear: "1380 AD",
  image: "https://warhistory.org/media/2024/01/BATTLE-OF-KULIKOVO-FIELD.jpg",
  armies: {
    sideA: "Grand Duchy of Moscow (Dmitry Donskoy) (~40,000 men)",
    sideB: "Golden Horde (Mamai) (~60,000 men)"
  },
  winner: "Grand Duchy of Moscow",
  deaths: "~20,000",
  history: "One of Russia's defining victories. Although Mongol rule continued for a time, the battle marked the beginning of Moscow's rise as the dominant Russian state."
},

{
  id: 56,
  name: "Battle of Nicopolis",
  year: 1396,
  displayYear: "1396 AD",
  image: "https://warhistory.org/media/2024/01/BATTLE-OF-KULIKOVO-FIELD.jpg",
  armies: {
    sideA: "Crusader Coalition (~25,000 men)",
    sideB: "Ottoman Empire (Bayezid I) (~30,000 men)"
  },
  winner: "Ottoman Empire",
  deaths: "~15,000",
  history: "The last major medieval crusade ended in disaster. The Ottoman victory strengthened their control of the Balkans and accelerated their expansion into Europe."
},

{
  id: 57,
  name: "Battle of Grunwald (Tannenberg)",
  year: 1410,
  displayYear: "1410 AD",
  image: "https://i.pinimg.com/1200x/d8/02/92/d8029226081274293eae75f88126165d.jpg",
  armies: {
    sideA: "Poland–Lithuania (Władysław II Jagiełło) (~39,000 men)",
    sideB: "Teutonic Order (Ulrich von Jungingen) (~27,000 men)"
  },
  winner: "Poland–Lithuania",
  deaths: "~15,000",
  history: "One of medieval Europe's largest battles. The defeat permanently weakened the Teutonic Order and shifted the balance of power in Eastern Europe."
},

{
  id: 58,
  name: "Battle of Agincourt",
  year: 1415,
  displayYear: "1415 AD",
  image: "https://www.thoughtco.com/thmb/BlD58KPw56Kig4K4FqVrt6zqagQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/battle-of-grunwald-large-56a61c1f5f9b58b7d0dff668.jpg",
  armies: {
    sideA: "Kingdom of England (Henry V) (~9,000 men)",
    sideB: "Kingdom of France (~25,000 men)"
  },
  winner: "Kingdom of England",
  deaths: "~8,000",
  history: "Henry V's outnumbered army achieved one of history's most famous victories. English longbowmen devastated the French nobility, making Agincourt a legendary battle."
},

{
  id: 59,
  name: "Siege of Constantinople",
  year: 1453,
  displayYear: "1453 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Schlacht_von_Azincourt.jpg/960px-Schlacht_von_Azincourt.jpg",
  armies: {
    sideA: "Ottoman Empire (Mehmed II) (~80,000 men)",
    sideB: "Byzantine Empire (Constantine XI) (~7,000 defenders)"
  },
  winner: "Ottoman Empire",
  deaths: "~10,000",
  history: "After a 53-day siege, Mehmed II captured Constantinople using massive cannons. The Byzantine Empire came to an end, and the city became the capital of the Ottoman Empire."
},

{
  id: 60,
  name: "Battle of Bosworth Field",
  year: 1485,
  displayYear: "1485 AD",
  image: "https://hforhistory.co.uk/wp-content/uploads/2017/08/Constantinople-1.jpg?w=725",
  armies: {
    sideA: "House of Tudor (Henry Tudor) (~5,000 men)",
    sideB: "House of York (Richard III) (~12,000 men)"
  },
  winner: "House of Tudor",
  deaths: "~2,000",
  history: "Richard III was killed in battle, ending the Wars of the Roses. Henry VII founded the Tudor dynasty, beginning a new era in English history."
},

{
  id: 61,
  name: "Battle of Chaldiran",
  year: 1514,
  displayYear: "1514 AD",
  image: "https://angelusnews.com/wp-content/uploads/2019/09/1r7q3q1ubk_James_Doyles_Battle_of_Bosworth_690x450.jpg",
  armies: {
    sideA: "Ottoman Empire (Selim I) (~60,000 men)",
    sideB: "Safavid Empire (Shah Ismail I) (~40,000 men)"
  },
  winner: "Ottoman Empire",
  deaths: "~10,000",
  history: "Ottoman artillery and firearms overwhelmed the Safavid cavalry. The battle demonstrated the growing importance of gunpowder weapons and secured Ottoman dominance in eastern Anatolia."
},


{
  id: 62,
  name: "Battle of Pavia",
  year: 1525,
  displayYear: "1525 AD",
  image: "https://kureansiklopedi.com/_next/image?url=https%3A%2F%2Fcdn.t3pedia.org%2Fmedia%2Fuploads%2F2025%2F04%2F20%2FRRTicRBUxezzL8Pm5qVdhZvNNNKGcyIg.jpg&w=1280&q=75",
  armies: {
    sideA: "Holy Roman Empire & Spain (Charles V) (~24,000 men)",
    sideB: "Kingdom of France (Francis I) (~28,000 men)"
  },
  winner: "Holy Roman Empire & Spain",
  deaths: "~10,000",
  history: "Imperial arquebusiers and artillery overwhelmed the French army. King Francis I was captured, marking the decline of heavily armored knights and the rise of firearm-based warfare."
},

{
  id: 63,
  name: "First Siege of Vienna",
  year: 1529,
  displayYear: "1529 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Battle_of_Pavia.jpg/500px-Battle_of_Pavia.jpg",
  armies: {
    sideA: "Ottoman Empire (Suleiman the Magnificent) (~120,000 men)",
    sideB: "Holy Roman Empire (Niklas von Salm) (~22,000 defenders)"
  },
  winner: "Holy Roman Empire",
  deaths: "~25,000",
  history: "The Ottomans failed to capture Vienna after weeks of fighting. The siege marked the limit of Ottoman expansion into Central Europe for the time being."
},

{
  id: 64,
  name: "Battle of Lepanto",
  year: 1571,
  displayYear: "1571 AD",
  image: "https://cdn.britannica.com/71/255871-050-519AFF67/The-Siege-of-Vienna-by-Turkish-army.jpg?w=300",
  armies: {
    sideA: "Holy League (Don John of Austria) (~84,000 men)",
    sideB: "Ottoman Empire (~88,000 men)"
  },
  winner: "Holy League",
  deaths: "~38,000",
  history: "The largest galley naval battle in history. The Holy League destroyed much of the Ottoman fleet, ending Ottoman naval dominance in the western Mediterranean."
},

{
  id: 65,
  name: "Spanish Armada",
  year: 1588,
  displayYear: "1588 AD",
  image: "https://cdn.britannica.com/68/122068-050-FACF29D2/Battle-of-Lepanto-fleets-galleys-Turks-Venice-October-7-1571.jpg?w=300",
  armies: {
    sideA: "Kingdom of England (~200 ships)",
    sideB: "Spanish Empire (~130 ships)"
  },
  winner: "Kingdom of England",
  deaths: "~20,000",
  history: "England defeated the Spanish Armada through superior naval tactics and severe storms. The failure of the invasion preserved English independence and strengthened England's future naval power."
},

{
  id: 66,
  name: "Battle of White Mountain",
  year: 1620,
  displayYear: "1620 AD",
  image: "https://cdn.britannica.com/58/244258-050-20B614E1/defeat-of-Spanish-Armada.jpg?w=300",
  armies: {
    sideA: "Catholic League & Holy Roman Empire (~27,000 men)",
    sideB: "Bohemian Confederation (~21,000 men)"
  },
  winner: "Catholic League",
  deaths: "~5,000",
  history: "A decisive early battle of the Thirty Years' War. The victory crushed the Bohemian Revolt and strengthened Habsburg authority in Central Europe."
},

{
  id: 67,
  name: "Battle of Breitenfeld",
  year: 1631,
  displayYear: "1631 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/The_Battle_of_White_Mountain_%28by_Peter_Snayers%29.jpg/960px-The_Battle_of_White_Mountain_%28by_Peter_Snayers%29.jpg",
  armies: {
    sideA: "Swedish Empire (Gustavus Adolphus) (~42,000 men)",
    sideB: "Holy Roman Empire (Tilly) (~35,000 men)"
  },
  winner: "Swedish Empire",
  deaths: "~12,000",
  history: "Gustavus Adolphus introduced innovative mobile artillery and flexible infantry tactics. The victory transformed European warfare and established Sweden as a major military power."
},

{
  id: 68,
  name: "Battle of Lützen",
  year: 1632,
  displayYear: "1632 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/29a_Gustave_Adolphe_%C3%A0_la_bataille_de_Breitenfeld%2C_1632.jpg/960px-29a_Gustave_Adolphe_%C3%A0_la_bataille_de_Breitenfeld%2C_1632.jpg",
  armies: {
    sideA: "Swedish Empire (Gustavus Adolphus) (~19,000 men)",
    sideB: "Holy Roman Empire (Wallenstein) (~18,000 men)"
  },
  winner: "Swedish Empire",
  deaths: "~10,000",
  history: "Sweden won the battle but King Gustavus Adolphus was killed. His death changed the course of the Thirty Years' War despite the battlefield victory."
},

{
  id: 69,
  name: "Battle of Rocroi",
  year: 1643,
  displayYear: "1643 AD",
  image: "https://i0.wp.com/the-past.com/wp-content/uploads/2023/11/2aa58k6.jpg?resize=1024%2C678&ssl=1",
  armies: {
    sideA: "Kingdom of France (Louis II de Bourbon) (~23,000 men)",
    sideB: "Spanish Empire (~27,000 men)"
  },
  winner: "Kingdom of France",
  deaths: "~10,000",
  history: "France shattered Spain's famous Tercios, ending over a century of Spanish battlefield dominance and marking France's rise as Europe's leading military power."
},

{
  id: 70,
  name: "Second Siege of Vienna",
  year: 1683,
  displayYear: "1683 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/La_Bataille_de_Rocroi.jpg",
  armies: {
    sideA: "Holy League (John III Sobieski) (~70,000 men)",
    sideB: "Ottoman Empire (~150,000 men)"
  },
  winner: "Holy League",
  deaths: "~35,000",
  history: "The largest cavalry charge in history, led by the Polish Winged Hussars, broke the Ottoman siege. The victory marked the beginning of the Ottoman Empire's long decline in Europe."
},

{
  id: 71,
  name: "Battle of Zenta",
  year: 1697,
  displayYear: "1697 AD",
  image: "https://warfarehistorynetwork.com/wp-content/uploads/2024/04/M210002-crop2-2000x1198.jpg",
  armies: {
    sideA: "Holy Roman Empire (Prince Eugene of Savoy) (~50,000 men)",
    sideB: "Ottoman Empire (~80,000 men)"
  },
  winner: "Holy Roman Empire",
  deaths: "~30,000",
  history: "Prince Eugene launched a surprise attack while the Ottoman army was crossing the Tisza River. The crushing victory forced the Ottomans to seek peace and ended their ambitions in Central Europe."
},

{
  id: 72,
  name: "Battle of Blenheim",
  year: 1704,
  displayYear: "1704 AD",
  image: "https://preview.redd.it/11-september-1697-battle-of-zenta-a-major-engagement-v0-7t6vw1yr4tm71.jpg?width=1080&crop=smart&auto=webp&s=c47629450e7863721f42eb691ad9a6895a41e2ea",
  armies: {
    sideA: "Grand Alliance (Duke of Marlborough & Prince Eugene) (~52,000 men)",
    sideB: "France & Bavaria (~56,000 men)"
  },
  winner: "Grand Alliance",
  deaths: "~30,000",
  history: "One of the greatest victories of the War of the Spanish Succession. The defeat prevented French domination of Europe and made the Duke of Marlborough one of Britain's greatest commanders."
},
{
  id: 73,
  name: "Battle of Poltava",
  year: 1709,
  displayYear: "1709 AD",
  image: "https://images.immediate.co.uk/production/volatile/sites/7/2017/09/35a.GettyImages-164080953-ff1ed35.jpg?quality=90&webp=true&resize=750,500",
  armies: {
    sideA: "Russian Empire (Peter the Great) (~45,000 men)",
    sideB: "Swedish Empire (Charles XII) (~20,000 men)"
  },
  winner: "Russian Empire",
  deaths: "~16,000",
  history: "Peter the Great decisively defeated Charles XII during the Great Northern War. The victory ended Sweden's status as Europe's dominant military power and marked the rise of Russia as a major empire."
},

{
  id: 74,
  name: "Battle of Culloden",
  year: 1746,
  displayYear: "1746 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/The_Battle_of_Culloden.jpg/960px-The_Battle_of_Culloden.jpg",
  armies: {
    sideA: "Kingdom of Great Britain (Duke of Cumberland) (~9,000 men)",
    sideB: "Jacobite Army (Charles Edward Stuart) (~6,000 men)"
  },
  winner: "Kingdom of Great Britain",
  deaths: "~2,000",
  history: "The final battle of the Jacobite Rising. The defeat ended serious attempts to restore the Stuart dynasty and permanently changed the Highland way of life in Scotland."
},

{
  id: 75,
  name: "Battle of Rossbach",
  year: 1757,
  displayYear: "1757 AD",
  image: "https://cdn.britannica.com/69/211669-050-8EFA2393/Frederick-II-troops-Prussian-Battle-of-Zorndorf-August-25-1758.jpg?w=400&h=225&c=crop",
  armies: {
    sideA: "Kingdom of Prussia (Frederick the Great) (~22,000 men)",
    sideB: "French–Imperial Coalition (~42,000 men)"
  },
  winner: "Kingdom of Prussia",
  deaths: "~10,000",
  history: "Frederick the Great defeated an army nearly twice the size of his own through rapid maneuver and disciplined firepower. The battle cemented his reputation as one of history's greatest military commanders."
},

{
  id: 76,
  name: "Battle of Leuthen",
  year: 1757,
  displayYear: "1757 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Battle_of_Leuthen_2.jpg/960px-Battle_of_Leuthen_2.jpg",
  armies: {
    sideA: "Kingdom of Prussia (Frederick the Great) (~36,000 men)",
    sideB: "Austrian Empire (~65,000 men)"
  },
  winner: "Kingdom of Prussia",
  deaths: "~16,000",
  history: "Frederick used his famous oblique order tactic to overwhelm a much larger Austrian army. Leuthen remains one of the finest examples of battlefield maneuver."
},

{
  id: 77,
  name: "Battle of Saratoga",
  year: 1777,
  displayYear: "1777 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Surrender_of_General_Burgoyne.jpg/960px-Surrender_of_General_Burgoyne.jpg",
  armies: {
    sideA: "United States (Horatio Gates) (~18,000 men)",
    sideB: "Kingdom of Great Britain (John Burgoyne) (~8,000 men)"
  },
  winner: "United States",
  deaths: "~2,000",
  history: "Often regarded as the turning point of the American Revolutionary War. The American victory convinced France to enter the war as an ally."
},

{
  id: 78,
  name: "Siege of Yorktown",
  year: 1781,
  displayYear: "1781 AD",
  image: "https://cdn.britannica.com/47/173047-050-1EB4E707/Painting-assault-Redoubt-10-Siege-of-Yorktown-October-14-1781.jpg?w=300",
  armies: {
    sideA: "United States & France (George Washington & Comte de Rochambeau) (~20,000 men)",
    sideB: "Kingdom of Great Britain (Lord Cornwallis) (~9,000 men)"
  },
  winner: "United States & France",
  deaths: "~1,000",
  history: "The surrender of Cornwallis effectively ended major fighting in the American Revolutionary War and secured American independence."
},

{
  id: 79,
  name: "Battle of the Nile",
  year: 1798,
  displayYear: "1798 AD",
  image: "https://www.worldhistory.org/img/r/p/1000x1200/17481.jpg.webp?v=1685541802-1685608341",
  armies: {
    sideA: "Royal Navy (Horatio Nelson) (~14 ships of the line)",
    sideB: "French Republic (~13 ships of the line)"
  },
  winner: "Royal Navy",
  deaths: "~5,000",
  history: "Nelson destroyed the French fleet anchored in Aboukir Bay, isolating Napoleon's army in Egypt and establishing British naval supremacy in the Mediterranean."
},

{
  id: 80,
  name: "Battle of Marengo",
  year: 1800,
  displayYear: "1800 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Lejeune_-_Bataille_de_Marengo.jpg/960px-Lejeune_-_Bataille_de_Marengo.jpg",
  armies: {
    sideA: "French Republic (Napoleon Bonaparte) (~28,000 men)",
    sideB: "Austrian Empire (~31,000 men)"
  },
  winner: "French Republic",
  deaths: "~15,000",
  history: "Napoleon reversed an apparent defeat with a dramatic afternoon counterattack. The victory restored French control over northern Italy and strengthened Napoleon's political position."
},

{
  id: 81,
  name: "Battle of Trafalgar",
  year: 1805,
  displayYear: "1805 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Battle_of_Trafalgar%2C_21_October_1805_RMG_BHC0550.tiff/lossy-page1-500px-The_Battle_of_Trafalgar%2C_21_October_1805_RMG_BHC0550.tiff.jpg",
  armies: {
    sideA: "Royal Navy (Horatio Nelson) (~27 ships of the line)",
    sideB: "France & Spain (~33 ships of the line)"
  },
  winner: "Royal Navy",
  deaths: "~7,000",
  history: "Nelson's decisive victory ended Napoleon's hopes of invading Britain. British naval supremacy remained largely unchallenged for the next century."
},

{
  id: 82,
  name: "Battle of Austerlitz",
  year: 1805,
  displayYear: "1805 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/La_bataille_d%27Austerlitz._2_decembre_1805_%28Fran%C3%A7ois_G%C3%A9rard%29.jpg/960px-La_bataille_d%27Austerlitz._2_decembre_1805_%28Fran%C3%A7ois_G%C3%A9rard%29.jpg",
  armies: {
    sideA: "French Empire (Napoleon Bonaparte) (~73,000 men)",
    sideB: "Russia & Austria (~85,000 men)"
  },
  winner: "French Empire",
  deaths: "~36,000",
  history: "Widely regarded as Napoleon's greatest victory. By luring the Allies into attacking his weakened flank, Napoleon shattered the Third Coalition and reshaped Europe."
},

{
  id: 83,
  name: "Battle of Jena–Auerstedt",
  year: 1806,
  displayYear: "1806 AD",
  image: "https://www.worldhistory.org/img/r/p/1000x1200/17643.jpg.webp?v=1717069877-1689242480",
  armies: {
    sideA: "French Empire (Napoleon Bonaparte) (~96,000 men)",
    sideB: "Kingdom of Prussia (~110,000 men)"
  },
  winner: "French Empire",
  deaths: "~25,000",
  history: "Napoleon crushed the Prussian Army in twin battles fought on the same day. The victory led to the rapid collapse of Prussia and confirmed French military dominance."
},

{
  id: 84,
  name: "Battle of Wagram",
  year: 1809,
  displayYear: "1809 AD",
  image: "https://www.worldhistory.org/img/r/p/1500x1500/17730.jpg.webp?v=1747946588-1691738999",
  armies: {
    sideA: "French Empire (Napoleon Bonaparte) (~155,000 men)",
    sideB: "Austrian Empire (~140,000 men)"
  },
  winner: "French Empire",
  deaths: "~74,000",
  history: "One of the largest battles of the Napoleonic Wars. Napoleon defeated Austria after two days of intense fighting, forcing another Austrian surrender."
},

{
  id: 85,
  name: "Battle of Borodino",
  year: 1812,
  displayYear: "1812 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Battle_of_Borodino.jpg/960px-Battle_of_Borodino.jpg",
  armies: {
    sideA: "French Empire (Napoleon Bonaparte) (~130,000 men)",
    sideB: "Russian Empire (Mikhail Kutuzov) (~120,000 men)"
  },
  winner: "French Empire",
  deaths: "~70,000",
  history: "The bloodiest single-day battle of the Napoleonic Wars. Although Napoleon captured the field, the Russian Army survived, setting the stage for the disastrous French retreat from Russia."
},

{
  id: 86,
  name: "Battle of Leipzig",
  year: 1813,
  displayYear: "1813 AD",
  image: "https://cdn.britannica.com/79/182979-050-D8B97826/Painting-Santa-Anna-surrender-Mexican-Sam-Houston.jpg?w=300",
  armies: {
    sideA: "French Empire (Napoleon Bonaparte) (~190,000 men)",
    sideB: "Sixth Coalition (~360,000 men)"
  },
  winner: "Sixth Coalition",
  deaths: "~90,000",
  history: "Known as the Battle of Nations, it was the largest battle in Europe before World War I. Napoleon suffered a crushing defeat, forcing him to retreat into France."
},

{
  id: 87,
  name: "Battle of Waterloo",
  year: 1815,
  displayYear: "1815 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Schlacht-bei-koeniggraetz-von-georg-bleibtreu.jpg/960px-Schlacht-bei-koeniggraetz-von-georg-bleibtreu.jpg",
  armies: {
    sideA: "French Empire (Napoleon Bonaparte) (~72,000 men)",
    sideB: "Seventh Coalition (Wellington & Blücher) (~118,000 men)"
  },
  winner: "Seventh Coalition",
  deaths: "~47,000",
  history: "Napoleon's final defeat ended the Napoleonic Wars and reshaped Europe's political order. The Congress of Vienna established a new balance of power that influenced European politics for decades."
},
{
  id: 88,
  name: "Battle of Navarino",
  year: 1827,
  displayYear: "1827 AD",
  image: "https://cdn.britannica.com/79/182979-050-D8B97826/Painting-Santa-Anna-surrender-Mexican-Sam-Houston.jpg?w=300",
  armies: {
    sideA: "Britain, France & Russia (~27 warships)",
    sideB: "Ottoman–Egyptian Fleet (~78 warships)"
  },
  winner: "Allied Fleet",
  deaths: "~6,000",
  history: "The Allied fleet destroyed the Ottoman–Egyptian navy in one of history's last major battles fought entirely by sailing ships. The victory helped secure Greek independence."
},

{
  id: 89,
  name: "Battle of San Jacinto",
  year: 1836,
  displayYear: "1836 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Schlacht-bei-koeniggraetz-von-georg-bleibtreu.jpg/960px-Schlacht-bei-koeniggraetz-von-georg-bleibtreu.jpg",
  armies: {
    sideA: "Republic of Texas (Sam Houston) (~900 men)",
    sideB: "Mexico (Antonio López de Santa Anna) (~1,300 men)"
  },
  winner: "Republic of Texas",
  deaths: "~700",
  history: "A surprise attack lasting less than twenty minutes secured Texas' independence from Mexico and led to the capture of Santa Anna."
},

{
  id: 90,
  name: "Battle of Sadowa (Königgrätz)",
  year: 1866,
  displayYear: "1866 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/AlphonseNeuvilleFriedhofSaint-PrivatL1100806_%282%29.jpg/960px-AlphonseNeuvilleFriedhofSaint-PrivatL1100806_%282%29.jpg",
  armies: {
    sideA: "Kingdom of Prussia (Helmuth von Moltke) (~221,000 men)",
    sideB: "Austrian Empire (~215,000 men)"
  },
  winner: "Kingdom of Prussia",
  deaths: "~44,000",
  history: "The decisive battle of the Austro-Prussian War. Superior Prussian organization and breech-loading rifles secured victory and paved the way for German unification."
},

{
  id: 91,
  name: "Battle of Gravelotte",
  year: 1870,
  displayYear: "1870 AD",
  image: "https://www.warhistoryonline.com/wp-content/uploads/sites/64/2016/07/battle-of-sedan-640x462.jpg",
  armies: {
    sideA: "North German Confederation (~188,000 men)",
    sideB: "French Empire (~112,000 men)"
  },
  winner: "North German Confederation",
  deaths: "~34,000",
  history: "The largest battle of the Franco-Prussian War. The German victory trapped the French Army in Metz and accelerated the unification of Germany."
},

{
  id: 92,
  name: "Battle of Sedan",
  year: 1870,
  displayYear: "1870 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Isandhlwana.jpg/960px-Isandhlwana.jpg",
  armies: {
    sideA: "North German Confederation (~200,000 men)",
    sideB: "French Empire (~120,000 men)"
  },
  winner: "North German Confederation",
  deaths: "~20,000",
  history: "Napoleon III surrendered along with his army after being surrounded. The battle ended the Second French Empire and led to the proclamation of the German Empire."
},

{
  id: 93,
  name: "Battle of Isandlwana",
  year: 1879,
  displayYear: "1879 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/21lancers.JPG/960px-21lancers.JPG",
  armies: {
    sideA: "Zulu Kingdom (~20,000 warriors)",
    sideB: "British Empire (~1,800 men)"
  },
  winner: "Zulu Kingdom",
  deaths: "~1,500",
  history: "The Zulu Army inflicted one of the greatest defeats ever suffered by a modern European army against an indigenous force in colonial Africa."
},

{
  id: 94,
  name: "Battle of Omdurman",
  year: 1898,
  displayYear: "1898 AD",
  image: "https://warfarehistorynetwork.com/wp-content/uploads/2017/01/M-Spion-Kop-Lead-4C%EF%80%A2Oct05-2000x1542.jpg",
  armies: {
    sideA: "Britain & Egypt (Horatio Kitchener) (~26,000 men)",
    sideB: "Mahdist Sudan (~52,000 men)"
  },
  winner: "Britain & Egypt",
  deaths: "~12,000",
  history: "Modern rifles, artillery, and machine guns devastated the Mahdist army, demonstrating the overwhelming impact of industrial-age weapons."
},

{
  id: 95,
  name: "Battle of Spion Kop",
  year: 1900,
  displayYear: "1900 AD",
  image: "https://warfarehistorynetwork.com/wp-content/uploads/M-Mukden-2-4C-LW12.jpg",
  armies: {
    sideA: "British Empire (~24,000 men)",
    sideB: "Boer Republics (~8,000 men)"
  },
  winner: "Boer Republics",
  deaths: "~2,000",
  history: "Poor planning and command mistakes caused a costly British defeat during the Second Boer War. The battle exposed weaknesses in British military leadership."
},

{
  id: 96,
  name: "Battle of Mukden",
  year: 1905,
  displayYear: "1905 AD",
  image: "https://warfarehistorynetwork.com/wp-content/uploads/2018/12/resolver-2.jpeg-1150x876.jpg",
  armies: {
    sideA: "Empire of Japan (~270,000 men)",
    sideB: "Russian Empire (~330,000 men)"
  },
  winner: "Empire of Japan",
  deaths: "~90,000",
  history: "One of the largest battles fought before World War I. Japan's victory confirmed its emergence as a major world power and shocked the European empires."
},

{
  id: 97,
  name: "Siege of Port Arthur",
  year: 1904,
  displayYear: "1904 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Russian_prisoners_tannenberg.jpgs",
  armies: {
    sideA: "Empire of Japan (~150,000 men)",
    sideB: "Russian Empire (~50,000 men)"
  },
  winner: "Empire of Japan",
  deaths: "~31,000",
  history: "The Japanese captured Russia's most important naval base in the Far East after a prolonged siege. The victory demonstrated Japan's growing military strength and foreshadowed Russia's defeat in the Russo-Japanese War."
},

{
  id: 98,
  name: "Battle of Tannenberg",
  year: 1914,
  displayYear: "1914 AD",
  image: "https://warfarehistorynetwork.com/wp-content/uploads/2023/12/M-Win24-Marne-1-e1703628187530-2000x1126.jpg",
  armies: {
    sideA: "German Empire (Paul von Hindenburg & Erich Ludendorff) (~150,000 men)",
    sideB: "Russian Empire (~230,000 men)"
  },
  winner: "German Empire",
  deaths: "~50,000",
  history: "Germany surrounded and destroyed the Russian Second Army in one of the greatest encirclement victories of modern warfare. The battle secured Germany's eastern frontier during the opening weeks of World War I."
},

{
  id: 99,
  name: "First Battle of the Marne",
  year: 1914,
  displayYear: "1914 AD",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/2nd_Ox_%26_Bucks%2C_Nonne_Bosschen%2C_defeating_the_Prussian_Guard_1914_by_W.B._Wollen.jpeg/500px-2nd_Ox_%26_Bucks%2C_Nonne_Bosschen%2C_defeating_the_Prussian_Guard_1914_by_W.B._Wollen.jpeg",
  armies: {
    sideA: "France & Britain (~1,080,000 men)",
    sideB: "German Empire (~1,480,000 men)"
  },
  winner: "France & Britain",
  deaths: "~500,000",
  history: "The Allied counterattack halted Germany's advance toward Paris, ending the Schlieffen Plan and beginning the long trench warfare that would dominate the Western Front."
},

{
  id: 100,
  name: "First Battle of Ypres",
  year: 1914,
  displayYear: "1914 AD",
  image: "https://nzhistory.govt.nz/sites/default/files/hero_landing-at-anzac.jpg",
  armies: {
    sideA: "Allied Powers (~900,000 men)",
    sideB: "German Empire (~1,000,000 men)"
  },
  winner: "Inconclusive",
  deaths: "~250,000",
  history: "Fought in Belgium, this battle prevented Germany from reaching the English Channel. It marked the final phase of the 'Race to the Sea' and solidified trench warfare."
},

{
  id: 101,
  name: "Gallipoli Campaign",
  year: 1915,
  displayYear: "1915 AD",
  image: "https://www.warmuseum.ca/firstworldwar/wp-content/mcme-uploads/2014/07/19710261-01611.jpg",
  armies: {
    sideA: "Allied Powers (~490,000 men)",
    sideB: "Ottoman Empire (~315,000 men)"
  },
  winner: "Ottoman Empire",
  deaths: "~131,000",
  history: "The Allies attempted to seize the Dardanelles but were repelled after months of brutal fighting. The campaign became a defining moment in the histories of Turkey, Australia, and New Zealand."
},

{
  id: 102,
  name: "Second Battle of Ypres",
  year: 1915,
  displayYear: "1915 AD",
  image: "https://cdn.britannica.com/10/180210-138-BDB83DF1/Overview-Battle-of-Verdun-1916.jpg?w=800&h=450&c=crop",
  armies: {
    sideA: "Allied Powers (~300,000 men)",
    sideB: "German Empire (~220,000 men)"
  },
  winner: "German Empire",
  deaths: "~105,000",
  history: "Germany launched the first large-scale chlorine gas attack in history. Although the Germans gained ground, the battle introduced chemical warfare to the modern battlefield."
},

{
  id: 103,
  name: "Battle of Verdun",
  year: 1916,
  displayYear: "1916 AD",
  image: "https://www.britishbattles.com/wp-content/uploads/2018/03/1-German-Battleships-turn-away-on-coming-under-fire-1-1024x681.jpg",
  armies: {
    sideA: "France (~1,140,000 men)",
    sideB: "German Empire (~1,250,000 men)"
  },
  winner: "France",
  deaths: "~305,000",
  history: "The longest battle of World War I lasted ten months. Verdun became a symbol of French determination and one of the most devastating battles in military history."
},

{
  id: 104,
  name: "Battle of the Somme",
  year: 1916,
  displayYear: "1916 AD",
  image: "https://www.britishbattles.com/wp-content/uploads/2018/03/1-German-Battleships-turn-away-on-coming-under-fire-1-1024x681.jpg",
  armies: {
    sideA: "Britain & France (~1,500,000 men)",
    sideB: "German Empire (~1,400,000 men)"
  },
  winner: "Allied Powers",
  deaths: "~430,000",
  history: "One of the bloodiest battles ever fought. The first day remains the deadliest in British military history, while the battle also saw the first use of tanks in combat."
},

{
  id: 105,
  name: "Battle of Jutland",
  year: 1916,
  displayYear: "1916 AD",
  image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*bYfrPLrcBn-PzkGvVGX2ww.png",
  armies: {
    sideA: "Royal Navy (~151 warships)",
    sideB: "German High Seas Fleet (~99 warships)"
  },
  winner: "Strategic Victory for Britain",
  deaths: "~9,800",
  history: "The largest naval battle of World War I. Although Germany inflicted heavier losses, Britain maintained control of the North Sea and continued its blockade."
},

{
  id: 106,
  name: "Brusilov Offensive",
  year: 1916,
  displayYear: "1916 AD",
  image: "https://cdn.britannica.com/53/135153-050-D8DDC147/battles-troops-site-town-British-West-Flanders-September-29-1918.jpg?w=300",
  armies: {
    sideA: "Russian Empire (~600,000 men)",
    sideB: "Austria-Hungary & Germany (~500,000 men)"
  },
  winner: "Russian Empire",
  deaths: "~500,000",
  history: "General Brusilov launched one of the most successful offensives of the war, nearly destroying the Austro-Hungarian Army and forcing Germany to divert troops from the Western Front."
},

{
  id: 107,
  name: "Battle of Passchendaele",
  year: 1917,
  displayYear: "1917 AD",
  image: "https://cdn.britannica.com/01/200901-050-BE42F690/Mark-IV-British-tank-trench-German-Battle-November-20-1917.jpg?w=300",
  armies: {
    sideA: "British Empire & Allies (~1,000,000 men)",
    sideB: "German Empire (~750,000 men)"
  },
  winner: "Allied Powers",
  deaths: "~275,000",
  history: "Officially known as the Third Battle of Ypres, it became infamous for endless mud, artillery bombardments, and horrific casualties despite limited territorial gains."
},

{
  id: 108,
  name: "Battle of Cambrai",
  year: 1917,
  displayYear: "1917 AD",
  image: "https://www.worldbook.com/images/pc377415.jpg",
  armies: {
    sideA: "British Empire (~190,000 men)",
    sideB: "German Empire (~170,000 men)"
  },
  winner: "Inconclusive",
  deaths: "~90,000",
  history: "Cambrai marked the first large-scale, coordinated use of tanks, artillery, and infantry. The battle demonstrated the future direction of mechanized warfare."
},

{
  id: 109,
  name: "German Spring Offensive",
  year: 1918,
  displayYear: "1918 AD",
  image: "https://www.thoughtco.com/thmb/7CERzaa9r8LMO56NI4-tuOQ0aeA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/second-battle-of-the-marne-56a61bfd3df78cf7728b62ac.jpg",
  armies: {
    sideA: "German Empire (~1,800,000 men)",
    sideB: "Allied Powers (~1,700,000 men)"
  },
  winner: "Allied Powers",
  deaths: "~700,000",
  history: "Germany launched its final attempt to win the war before American forces arrived in large numbers. Initial successes faded, exhausting Germany's remaining strength."
},

{
  id: 110,
  name: "Second Battle of the Marne",
  year: 1918,
  displayYear: "1918 AD",
  image: "http://www.eastsussexww1.org.uk/wp-content/uploads/2018/07/Amiens-Q9193-300x237.jpg",
  armies: {
    sideA: "Allied Powers (~1,850,000 men)",
    sideB: "German Empire (~1,300,000 men)"
  },
  winner: "Allied Powers",
  deaths: "~270,000",
  history: "Germany's last major offensive on the Western Front failed. The Allied counterattack marked the beginning of the Hundred Days Offensive that would end World War I."
},

{
  id: 111,
  name: "Hundred Days Offensive",
  year: 1918,
  displayYear: "1918 AD",
  image: "https://www.warhistoryonline.com/wp-content/uploads/sites/64/2024/04/battle-of-france-featured-image-56183-741x475.png",
  armies: {
    sideA: "Allied Powers (~2,000,000 men)",
    sideB: "German Empire (~1,800,000 men)"
  },
  winner: "Allied Powers",
  deaths: "~785,000",
  history: "A series of coordinated Allied offensives broke through German defenses across the Western Front. The campaign forced Germany to seek an armistice, bringing World War I to an end."
},
{
  id: 112,
  name: "Battle of France",
  year: 1940,
  displayYear: "1940 AD",
  image: "https://cdn.britannica.com/79/142179-050-CB131A12/Smoke-air-raid-London-Docklands-capital-British-Sept-7-1940.jpg?w=300",
  armies: {
    sideA: "Germany (~3,350,000 men)",
    sideB: "France, Britain, Belgium & Netherlands (~3,300,000 men)"
  },
  winner: "Germany",
  deaths: "~360,000",
  history: "Germany used Blitzkrieg tactics to rapidly defeat France and the Low Countries in just six weeks. The campaign completely changed modern warfare and left Britain standing alone against Nazi Germany."
},

{
  id: 113,
  name: "Battle of Britain",
  year: 1940,
  displayYear: "1940 AD",
  image: "https://gdb.rferl.org/5a87820c-061c-43be-9145-2b905273c41f_w1071_s_d3.jpg",
  armies: {
    sideA: "United Kingdom (Royal Air Force) (~2,900 aircraft)",
    sideB: "Germany (Luftwaffe) (~3,600 aircraft)"
  },
  winner: "United Kingdom",
  deaths: "~45,000",
  history: "The first major military campaign fought entirely in the air. Britain's victory prevented a German invasion and marked Hitler's first major defeat of the war."
},

{
  id: 114,
  name: "Operation Barbarossa",
  year: 1941,
  displayYear: "1941 AD",
  image: "https://i.guim.co.uk/img/media/0c7f97c1fde0e252b16bcc2f93928ad65d4c2db1/0_0_3000_2176/master/3000.jpg?width=620&dpr=2&s=none&crop=none",
  armies: {
    sideA: "Axis Powers (~3,800,000 men)",
    sideB: "Soviet Union (~2,900,000 men)"
  },
  winner: "Soviet Union",
  deaths: "~1,800,000",
  history: "Germany launched the largest invasion in history by attacking the Soviet Union. Initial successes eventually failed, beginning Germany's long defeat on the Eastern Front."
},

{
  id: 115,
  name: "Siege of Leningrad",
  year: 1941,
  displayYear: "1941 AD",
  image: "https://static.themoscowtimes.com/image/article_1360/60/b1ff28db3b02492c92316a51a1d57a76.jpg",
  armies: {
    sideA: "Germany & Finland (~725,000 men)",
    sideB: "Soviet Union (~930,000 men)"
  },
  winner: "Soviet Union",
  deaths: "~1,200,000",
  history: "The longest siege of World War II lasted 872 days. Hunger, bombardment, and disease killed over a million people, yet the city never surrendered."
},

{
  id: 116,
  name: "Battle of Moscow",
  year: 1941,
  displayYear: "1941 AD",
  image: "https://cdn.britannica.com/84/205484-050-B75FC63E/Japanese-heavy-cruiser-Mikuma-Battle-Midway-1942-World-War-II.jpg?w=300",
  armies: {
    sideA: "Germany (~1,900,000 men)",
    sideB: "Soviet Union (~1,250,000 men)"
  },
  winner: "Soviet Union",
  deaths: "~1,000,000",
  history: "The Soviet winter counteroffensive halted Germany just outside Moscow. It was Germany's first major land defeat and proved the Soviet Union would not collapse quickly."
},

{
  id: 117,
  name: "Battle of Midway",
  year: 1942,
  displayYear: "1942 AD",
  image: "https://www.nam.ac.uk/sites/default/files/2017-09/_83469_half.jpg",
  armies: {
    sideA: "United States (~3 aircraft carriers, supporting fleet)",
    sideB: "Japan (~4 aircraft carriers, supporting fleet)"
  },
  winner: "United States",
  deaths: "~3,500",
  history: "American codebreakers enabled the U.S. Navy to ambush the Japanese fleet. Four Japanese aircraft carriers were sunk, permanently shifting naval superiority in the Pacific."
},

{
  id: 118,
  name: "Second Battle of El Alamein",
  year: 1942,
  displayYear: "1942 AD",
  image: "https://cdn.britannica.com/54/199954-050-51845DAC/soldiers-Soviet-offensive-troops-German-Battle-of-February-1943.jpg?w=300",
  armies: {
    sideA: "Allied Powers (~195,000 men)",
    sideB: "Axis Powers (~116,000 men)"
  },
  winner: "Allied Powers",
  deaths: "~31,000",
  history: "Montgomery's victory forced Axis forces to retreat across North Africa. Winston Churchill later remarked, 'Before Alamein we never had a victory; after Alamein we never had a defeat.'"
},

{
  id: 119,
  name: "Battle of Stalingrad",
  year: 1942,
  displayYear: "1942 AD",
  image: "https://www.forcesnews.com/sites/default/files/Battle%20of%20Kursk%20picture.jpg",
  armies: {
    sideA: "Soviet Union (~1,140,000 men)",
    sideB: "Germany & Axis Allies (~1,000,000 men)"
  },
  winner: "Soviet Union",
  deaths: "~2,000,000",
  history: "Often considered the bloodiest battle in history. The destruction of Germany's Sixth Army marked the turning point of the Eastern Front and permanently shifted the momentum of the war."
},

{
  id: 120,
  name: "Battle of Kursk",
  year: 1943,
  displayYear: "1943 AD",
  image: "https://media.defense.gov/2024/Jun/05/2003479428/1920/1080/0/240605-A-WU705-5593.JPG",
  armies: {
    sideA: "Soviet Union (~1,900,000 men)",
    sideB: "Germany (~900,000 men)"
  },
  winner: "Soviet Union",
  deaths: "~250,000",
  history: "The largest tank battle in history. Germany's final major offensive in the East failed, leaving the Soviet Union on the offensive for the remainder of the war."
},

{
  id: 121,
  name: "Normandy Landings (D-Day)",
  year: 1944,
  displayYear: "1944 AD",
  image: "https://www.thoughtco.com/thmb/-zudFsL6t4AA2t1EAmiDtcrH5Jo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-615312828-1c05265abb994a3c89cc63da0199a964.jpg",
  armies: {
    sideA: "Allied Powers (~156,000 men on D-Day)",
    sideB: "Germany (~50,000 defenders)"
  },
  winner: "Allied Powers",
  deaths: "~10,000",
  history: "The largest amphibious invasion in history began the liberation of Western Europe. Allied forces established a foothold in France that eventually led to Germany's defeat."
},

{
  id: 122,
  name: "Battle of the Bulge",
  year: 1944,
  displayYear: "1944 AD",
  image: "https://warfarehistorynetwork.com/wp-content/uploads/2003/05/W-Aug23-Berlin-1-e1684344607112-2000x1122.jpg",
  armies: {
    sideA: "United States & Allies (~610,000 men)",
    sideB: "Germany (~450,000 men)"
  },
  winner: "Allied Powers",
  deaths: "~100,000",
  history: "Germany's final major offensive in Western Europe initially achieved surprise but ultimately failed. The defeat exhausted Germany's remaining offensive capability."
},

{
  id: 123,
  name: "Battle of Berlin",
  year: 1945,
  displayYear: "1945 AD",
  image: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_1080,h_540,g_auto/dpr_auto/f_auto/q_auto:eco/v1/gettyimages-3318907?_a=BAVMn6DY0",
  armies: {
    sideA: "Soviet Union (~2,500,000 men)",
    sideB: "Germany (~760,000 men)"
  },
  winner: "Soviet Union",
  deaths: "~170,000",
  history: "The Red Army captured Berlin after weeks of intense urban combat. Adolf Hitler committed suicide during the battle, and Germany surrendered days later, ending the war in Europe."
},

{
  id: 124,
  name: "Battle of Okinawa",
  year: 1945,
  displayYear: "1945 AD",
  image: "https://c7.alamy.com/comp/HRP082/korean-war-battle-of-inchon-1950-HRP082.jpg",
  armies: {
    sideA: "United States (~183,000 men)",
    sideB: "Japan (~120,000 men)"
  },
  winner: "United States",
  deaths: "~110,000",
  history: "The largest amphibious assault in the Pacific became one of the war's bloodiest battles. The enormous losses influenced the decision to use atomic bombs rather than invade mainland Japan."
}
,
{
  id: 125,
  name: "Battle of Inchon",
  year: 1950,
  displayYear: "1950 AD",
  image: "https://whyy.org/wp-content/uploads/2018/10/Chosin-epi.jpg",
  armies: {
    sideA: "United Nations Command (~75,000 men)",
    sideB: "North Korea (~30,000 men)"
  },
  winner: "United Nations Command",
  deaths: "~7,000",
  history: "General Douglas MacArthur launched a daring amphibious landing behind North Korean lines. The operation liberated Seoul and completely changed the course of the Korean War."
},

{
  id: 126,
  name: "Battle of Chosin Reservoir",
  year: 1950,
  displayYear: "1950 AD",
  image: "https://special.vietnamplus.vn/wp-content/uploads/2024/04/Hinh-anh-la-co-Viet-Nam-tung-bay-tren-noc-ham-De-Castries-ket-thuc-thang-loi-Chien-dich-Dien-Bien-Phu-1000x625.jpg",
  armies: {
    sideA: "United Nations Command (~30,000 men)",
    sideB: "China (~120,000 men)"
  },
  winner: "China",
  deaths: "~48,000",
  history: "UN forces fought their way out after being surrounded by overwhelming Chinese forces in freezing conditions. The battle became one of history's most famous fighting withdrawals."
},

{
  id: 127,
  name: "Battle of Dien Bien Phu",
  year: 1954,
  displayYear: "1954 AD",
  image: "https://cdn.britannica.com/20/99920-050-441604E2/Israeli-troop-unit-Gaza-Six-Day-War-June-6-1967.jpg?w=300",
  armies: {
    sideA: "France (~16,000 men)",
    sideB: "Viet Minh (~50,000 men)"
  },
  winner: "Viet Minh",
  deaths: "~8,000",
  history: "The decisive battle of the First Indochina War. France's defeat ended French colonial rule in Indochina and paved the way for the Vietnam War."
},

{
  id: 128,
  name: "Six-Day War",
  year: 1967,
  displayYear: "1967 AD",
  image: "https://www.historytoday.com/sites/default/files/features/Tet_background.jpg",
  armies: {
    sideA: "Israel (~264,000 men)",
    sideB: "Egypt, Syria & Jordan (~547,000 men)"
  },
  winner: "Israel",
  deaths: "~21,000",
  history: "In only six days, Israel defeated neighboring Arab states and captured the Sinai Peninsula, Gaza Strip, West Bank, East Jerusalem, and Golan Heights, dramatically changing the Middle East."
},

{
  id: 129,
  name: "Tet Offensive",
  year: 1968,
  displayYear: "1968 AD",
  image: "https://dpaa-mil.sites.crmforce.mil/resource/1529555118000/dpaaFamWebIncidents/images/khe-sanh-fire.JPG",
  armies: {
    sideA: "North Vietnam & Viet Cong (~320,000 men)",
    sideB: "South Vietnam, United States & Allies (~1,000,000 men)"
  },
  winner: "Military Victory: South Vietnam & United States",
  deaths: "~80,000",
  history: "Although the offensive failed militarily, it shocked the American public and became a major political turning point in the Vietnam War."
},

{
  id: 130,
  name: "Battle of Khe Sanh",
  year: 1968,
  displayYear: "1968 AD",
  image: "https://static.time.com/v3/assets/bltea6093859af6183b/blt0690e78efba7d4d0/698a412e09208f4ad941acf4/yom-kippur-war-1973.jpg?branch=production&width=2400&quality=75&auto=webp&crop=16:9",
  armies: {
    sideA: "United States & South Vietnam (~45,000 men)",
    sideB: "North Vietnam (~40,000 men)"
  },
  winner: "United States & South Vietnam",
  deaths: "~15,000",
  history: "One of the longest and most heavily bombarded battles of the Vietnam War. The U.S. successfully defended the base before later abandoning it."
},

{
  id: 131,
  name: "Yom Kippur War",
  year: 1973,
  displayYear: "1973 AD",
  image: "https://blog.togetherweserved.com/app/uploads/2026/02/Tank_16.jpg",
  armies: {
    sideA: "Israel (~415,000 men)",
    sideB: "Egypt & Syria (~850,000 men)"
  },
  winner: "Israel",
  deaths: "~18,000",
  history: "Egypt and Syria launched a surprise attack on Israel during Yom Kippur. Israel eventually regained the initiative, but the war reshaped Middle Eastern politics and led to future peace negotiations."
},

{
  id: 132,
  name: "Battle of 73 Easting",
  year: 1991,
  displayYear: "1991 AD",
  image: "https://static01.nyt.com/images/2017/10/15/world/15mogadishu5/15mogadishu5-jumbo.jpg?quality=75&auto=webp",
  armies: {
    sideA: "United States (~20,000 men)",
    sideB: "Iraq (~18,000 men)"
  },
  winner: "United States",
  deaths: "~2,000",
  history: "One of the most one-sided armored battles in history. Superior American technology, training, and coordination overwhelmed Iraqi forces during the Gulf War."
},

{
  id: 133,
  name: "Battle of Mogadishu",
  year: 1993,
  displayYear: "1993 AD",
  image: "https://www.marinecorpstimes.com/resizer/v2/4Y5XPRCUQVGTRGLGC2NEZDZ544.jpg?auth=e9805d50922e7f74e85422d710d317e18eed67d37c65adb948d5f09e72d89f6b&width=1440&height=952",
  armies: {
    sideA: "United States & United Nations (~1,600 men)",
    sideB: "Somali National Alliance (~4,000–6,000 fighters)"
  },
  winner: "Somali National Alliance",
  deaths: "~1,000",
  history: "Known worldwide as 'Black Hawk Down,' the battle highlighted the dangers of urban warfare and influenced future American military interventions."
},

{
  id: 134,
  name: "Second Battle of Fallujah",
  year: 2004,
  displayYear: "2004 AD",
  image: "",
  armies: {
    sideA: "United States, Iraq & Coalition (~15,000 men)",
    sideB: "Insurgents (~4,000 fighters)"
  },
  winner: "Coalition Forces",
  deaths: "~3,000",
  history: "One of the toughest urban battles fought by U.S. forces since Vietnam. Coalition troops captured Fallujah after weeks of intense house-to-house combat."
},

{
  id: 135,
  name: "Battle of Debaltseve",
  year: 2015,
  displayYear: "2015 AD",
  image: "https://www.jstribune.com/wp-content/uploads/2024/01/idf3_n.jpeg",
  armies: {
    sideA: "Ukraine (~13,000 men)",
    sideB: "Russian-backed Separatists (~19,000 men)"
  },
  winner: "Russian-backed Separatists",
  deaths: "~1,500",
  history: "A decisive battle during the War in Donbas. Ukrainian forces withdrew after being surrounded, foreshadowing the larger conflict that would erupt in 2022."
},

{
  id: 136,
  name: "Battle of Mosul",
  year: 2016,
  displayYear: "2016–2017",
  image: "https://static.themoscowtimes.com/image/article_1360/a8/000_33BZ2F7.jpg",
  armies: {
    sideA: "Iraqi Security Forces & Coalition (~108,000 men)",
    sideB: "Islamic State (~12,000 fighters)"
  },
  winner: "Iraqi Security Forces & Coalition",
  deaths: "~25,000",
  history: "The largest urban battle of the 21st century. After nine months of intense fighting, Iraqi forces recaptured Mosul, ending ISIS's control of its largest city."
},







]