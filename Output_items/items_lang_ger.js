var gerItems = {
    "1": "Meisterball",
    "2": "Hyperball",
    "3": "Superball",
    "4": "Pok\u00e9ball",
    "5": "Safariball",
    "6": "Netzball",
    "7": "Tauchball",
    "8": "Nestball",
    "9": "Wiederball",
    "10": "Timerball",
    "11": "Luxusball",
    "12": "Premierball",
    "13": "Finsterball",
    "14": "Heilball",
    "15": "Flottball",
    "16": "Jubelball",
    "17": "Trank",
    "18": "Gegengift",
    "19": "Feuerheiler",
    "20": "Eisheiler",
    "21": "Aufwecker",
    "22": "Para-Heiler",
    "23": "Top-Genesung",
    "24": "Top-Trank",
    "25": "Hypertrank",
    "26": "Supertrank",
    "27": "Hyperheiler",
    "28": "Beleber",
    "29": "Top-Beleber",
    "30": "Tafelwasser",
    "31": "Sprudel",
    "32": "Limonade",
    "33": "Kuhmuh-Milch",
    "34": "Energiestaub",
    "35": "Kraftwurzel",
    "36": "Heilpuder",
    "37": "Vitalkraut",
    "38": "\u00c4ther",
    "39": "\u00c4therpillen",
    "40": "Elixier",
    "41": "Elixierpillen",
    "45": "KP-Plus",
    "46": "Protein",
    "47": "Eisen",
    "48": "Carbon",
    "49": "Kalzium",
    "50": "Sonderbonbon",
    "51": "AP-Plus",
    "52": "Zink",
    "53": "AP-Top",
    "55": "Megablock",
    "56": "Treffervitamine",
    "57": "X-Angriff",
    "58": "X-Verteidigung",
    "59": "X-Initiative",
    "60": "X-Genauigkeit",
    "61": "X-Sp.-Ang.",
    "62": "X-Sp.-Vert.",
    "63": "Pok\u00e9puppe",
    "76": "Superschutz",
    "77": "Top-Schutz",
    "78": "Fluchtseil",
    "79": "Schutz",
    "80": "Sonnenstein",
    "81": "Mondstein",
    "82": "Feuerstein",
    "83": "Donnerstein",
    "84": "Wasserstein",
    "85": "Blattstein",
    "86": "Minipilz",
    "87": "Riesenpilz",
    "88": "Perle",
    "89": "Riesenperle",
    "90": "Sternenstaub",
    "91": "Sternenst\u00fcck",
    "92": "Nugget",
    "94": "Honig",
    "106": "Steinknochen",
    "107": "Leuchtstein",
    "108": "Finsterstein",
    "109": "Funkelstein",
    "110": "Ovaler Stein",
    "111": "Spiritkern",
    "112": "Platinum-Orb",
    "135": "Adamant-Orb",
    "136": "Wei\u00df-Orb",
    "149": "Amrenabeere",
    "150": "Maronbeere",
    "151": "Pirsifbeere",
    "152": "Fragiabeere",
    "153": "Wilbirbeere",
    "154": "Jonagobeere",
    "155": "Sinelbeere",
    "156": "Persimbeere",
    "157": "Prunusbeere",
    "158": "Tsitrubeere",
    "159": "Giefebeere",
    "160": "Wikibeere",
    "161": "Magobeere",
    "162": "Gauvebeere",
    "163": "Yapabeere",
    "164": "Himmihbeere",
    "165": "Morbbeere",
    "166": "Nanabbeere",
    "167": "Nirbebeere",
    "168": "Sananabeere",
    "169": "Granabeere",
    "170": "Setangbeere",
    "171": "Qualotbeere",
    "172": "Honmelbeere",
    "173": "Labrusbeere",
    "174": "Tamotbeere",
    "175": "Saimbeere",
    "176": "Magostbeere",
    "177": "Rabutabeere",
    "178": "Tronzibeere",
    "179": "Kiwanbeere",
    "180": "Pallmbeere",
    "181": "Wasmelbeere",
    "182": "Durinbeere",
    "183": "Myrtilbeere",
    "184": "Koakobeere",
    "185": "Foepasbeere",
    "186": "Kerzalbeere",
    "187": "Grindobeere",
    "188": "Kiroyabeere",
    "189": "Rospelbeere",
    "190": "Grarzbeere",
    "191": "Schukebeere",
    "192": "Kobabeere",
    "193": "Pyapabeere",
    "194": "Tanigabeere",
    "195": "Chiaribeere",
    "196": "Zitarzbeere",
    "197": "Terirobeere",
    "198": "Burleobeere",
    "199": "Babiribeere",
    "200": "Latchibeere",
    "201": "Lydzibeere",
    "202": "Linganbeere",
    "203": "Salkabeere",
    "204": "Tahaybeere",
    "205": "Apikobeere",
    "206": "Lansatbeere",
    "207": "Krambobeere",
    "208": "Enigmabeere",
    "209": "Wunfrubeere",
    "210": "Eipfelbeere",
    "211": "Jabocabeere",
    "212": "Roselbeere",
    "213": "Blendpuder",
    "214": "Schlohkraut",
    "216": "EP-Teiler",
    "217": "Flinkklaue",
    "218": "Sanftglocke",
    "219": "Mentalkraut",
    "220": "Wahlband",
    "221": "King-Stein",
    "222": "Silberstaub",
    "223": "M\u00fcnzamulett",
    "224": "Schutzsticker",
    "228": "Rauchball",
    "229": "Ewigstein",
    "230": "Fokusband",
    "231": "Gl\u00fccks-Ei",
    "232": "Scope-Linse",
    "233": "Metallmantel",
    "234": "\u00dcberreste",
    "236": "Kugelblitz",
    "237": "Pudersand",
    "238": "Granitstein",
    "239": "Wundersaat",
    "240": "Schattenbrille",
    "241": "Schwarzgurt",
    "242": "Magnet",
    "243": "Zauberwasser",
    "244": "Spitzer Schnabel",
    "245": "Giftstich",
    "246": "Ewiges Eis",
    "247": "Bannsticker",
    "248": "Krumml\u00f6ffel",
    "249": "Holzkohle",
    "250": "Drachenzahn",
    "251": "Seidenschal",
    "253": "Muschelglocke",
    "254": "Seerauch",
    "255": "Laxrauch",
    "265": "Gro\u00dflinse",
    "266": "Muskelband",
    "267": "Schlaubrille",
    "268": "Expertengurt",
    "269": "Lichtlehm",
    "270": "Leben-Orb",
    "271": "Energiekraut",
    "272": "Toxik-Orb",
    "273": "Hei\u00df-Orb",
    "275": "Fokusgurt",
    "276": "Zoomlinse",
    "277": "Metronom",
    "278": "Eisenkugel",
    "279": "Schwerschweif",
    "280": "Fatumknoten",
    "281": "Giftschleim",
    "282": "Eisbrocken",
    "283": "Glattbrocken",
    "284": "Hei\u00dfbrocken",
    "285": "Nassbrocken",
    "286": "Griffklaue",
    "287": "Wahlschal",
    "288": "Klettdorn",
    "289": "Machtreif",
    "290": "Machtgurt",
    "291": "Machtlinse",
    "292": "Machtband",
    "293": "Machtkette",
    "294": "Machtgewicht",
    "295": "Wechselh\u00fclle",
    "296": "Gro\u00dfwurzel",
    "297": "Wahlbrille",
    "298": "Feuertafel",
    "299": "Wassertafel",
    "300": "Blitztafel",
    "301": "Wiesentafel",
    "302": "Frosttafel",
    "303": "Fausttafel",
    "304": "Gifttafel",
    "305": "Erdtafel",
    "306": "Wolkentafel",
    "307": "Hirntafel",
    "308": "K\u00e4fertafel",
    "309": "Steintafel",
    "310": "Spuktafel",
    "311": "Dracotafel",
    "312": "Furchttafel",
    "313": "Eisentafel",
    "314": "Schr\u00e4grauch",
    "315": "Steinrauch",
    "316": "Lahmrauch",
    "317": "Wellenrauch",
    "318": "Rosenrauch",
    "319": "Gl\u00fccksrauch",
    "320": "Scheuchrauch",
    "326": "Scharfklaue",
    "328": "TM001",
    "329": "TM002",
    "330": "TM003",
    "331": "TM004",
    "332": "TM005",
    "333": "TM006",
    "334": "TM007",
    "335": "TM008",
    "336": "TM009",
    "337": "TM010",
    "338": "TM011",
    "339": "TM012",
    "340": "TM013",
    "341": "TM014",
    "342": "TM015",
    "343": "TM016",
    "344": "TM017",
    "345": "TM018",
    "346": "TM019",
    "347": "TM020",
    "348": "TM021",
    "349": "TM022",
    "350": "TM023",
    "351": "TM024",
    "352": "TM025",
    "353": "TM026",
    "354": "TM027",
    "355": "TM028",
    "356": "TM029",
    "357": "TM030",
    "358": "TM031",
    "359": "TM032",
    "360": "TM033",
    "361": "TM034",
    "362": "TM035",
    "363": "TM036",
    "364": "TM037",
    "365": "TM038",
    "366": "TM039",
    "367": "TM040",
    "368": "TM041",
    "369": "TM042",
    "370": "TM043",
    "371": "TM044",
    "372": "TM045",
    "373": "TM046",
    "374": "TM047",
    "375": "TM048",
    "376": "TM049",
    "377": "TM050",
    "378": "TM051",
    "379": "TM052",
    "380": "TM053",
    "381": "TM054",
    "382": "TM055",
    "383": "TM056",
    "384": "TM057",
    "385": "TM058",
    "386": "TM059",
    "387": "TM060",
    "388": "TM061",
    "389": "TM062",
    "390": "TM063",
    "391": "TM064",
    "392": "TM065",
    "393": "TM066",
    "394": "TM067",
    "395": "TM068",
    "396": "TM069",
    "397": "TM070",
    "398": "TM071",
    "399": "TM072",
    "400": "TM073",
    "401": "TM074",
    "402": "TM075",
    "403": "TM076",
    "404": "TM077",
    "405": "TM078",
    "406": "TM079",
    "407": "TM080",
    "408": "TM081",
    "409": "TM082",
    "410": "TM083",
    "411": "TM084",
    "412": "TM085",
    "413": "TM086",
    "414": "TM087",
    "415": "TM088",
    "416": "TM089",
    "417": "TM090",
    "418": "TM091",
    "419": "TM092",
    "421": "VM02",
    "466": "Gracidea",
    "485": "Aprikoko Rot",
    "486": "Aprikoko Blau",
    "487": "Aprikoko Gelb",
    "488": "Aprikoko Gr\u00fcn",
    "489": "Aprikoko Pink",
    "490": "Aprikoko Wei\u00df",
    "491": "Aprikoko Schwarz",
    "492": "Turboball",
    "493": "Levelball",
    "494": "K\u00f6derball",
    "495": "Schwerball",
    "496": "Sympaball",
    "497": "Freundesball",
    "498": "Mondball",
    "499": "Turnierball",
    "500": "Parkball",
    "538": "Evolith",
    "539": "Leichtstein",
    "540": "Beulenhelm",
    "541": "Luftballon",
    "542": "Rote Karte",
    "543": "Zielscheibe",
    "544": "Klammerband",
    "545": "Knolle",
    "546": "Akku",
    "547": "Fluchtknopf",
    "564": "Normaljuwel",
    "565": "Heilfeder",
    "566": "Kraftfeder",
    "567": "Abwehrfeder",
    "568": "Geniefeder",
    "569": "Espritfeder",
    "570": "Flinkfeder",
    "571": "Prachtfeder",
    "576": "Traumball",
    "580": "Duftpilz",
    "581": "Riesennugget",
    "582": "Triperle",
    "583": "Kometst\u00fcck",
    "618": "TM093",
    "619": "TM094",
    "620": "TM095",
    "631": "Ovalpin",
    "632": "Schillerpin",
    "638": "Wahrspiegel",
    "639": "Schw\u00e4chenschutz",
    "640": "Offensivweste",
    "644": "Feentafel",
    "645": "F\u00e4higkeiten-Kapsel",
    "648": "Leuchtmoos",
    "649": "Schneeball",
    "650": "Schutzbrille",
    "686": "Hibisbeere",
    "687": "Akibeere",
    "688": "Tarabeere",
    "690": "TM096",
    "691": "TM097",
    "692": "TM098",
    "693": "TM099",
    "703": "Abenteuerfibel",
    "708": "Illumina-Galette",
    "709": "Yantara-Sabl\u00e9",
    "765": "Banngef\u00e4\u00df",
    "795": "Silberkronkorken",
    "796": "Goldkronkorken",
    "846": "Zitter-Orb",
    "849": "Eisstein",
    "851": "Ultraball",
    "853": "Roter Nektar",
    "854": "Gelber Nektar",
    "855": "Rosa Nektar",
    "856": "Purpurner Nektar",
    "879": "Feldbeschichtung",
    "880": "Schutzpolster",
    "881": "Elektro-Samen",
    "882": "Psycho-Samen",
    "883": "Nebel-Samen",
    "884": "Gras-Samen",
    "1103": "Rostiges Schwert",
    "1104": "Rostiger Schild",
    "1116": "S\u00fc\u00dfer Apfel",
    "1117": "Saurer Apfel",
    "1118": "Halsspray",
    "1119": "Fluchttasche",
    "1120": "Plateauschuhe",
    "1121": "Fehlschlagschutz",
    "1122": "Bizarroservice",
    "1123": "Allzweckschirm",
    "1124": "EP-Bonbon XS",
    "1125": "EP-Bonbon S",
    "1126": "EP-Bonbon M",
    "1127": "EP-Bonbon L",
    "1128": "EP-Bonbon XL",
    "1231": "Solo-Minze",
    "1232": "Hart-Minze",
    "1233": "Frech-Minze",
    "1234": "Mutig-Minze",
    "1235": "K\u00fchn-Minze",
    "1236": "Pfiffig-Minze",
    "1237": "Lasch-Minze",
    "1238": "Locker-Minze",
    "1239": "M\u00e4\u00dfig-Minze",
    "1240": "Mild-Minze",
    "1241": "Hitzig-Minze",
    "1242": "Ruhig-Minze",
    "1243": "Still-Minze",
    "1244": "Zart-Minze",
    "1245": "Sacht-Minze",
    "1246": "Forsch-Minze",
    "1247": "Scheu-Minze",
    "1248": "Hastig-Minze",
    "1249": "Froh-Minze",
    "1250": "Naiv-Minze",
    "1251": "Ernst-Minze",
    "1253": "Rissige Kanne",
    "1254": "L\u00f6chrige Kanne",
    "1267": "Superfangpin",
    "1278": "Rotom-Katalog",
    "1582": "Galarnuss-Reif",
    "1587": "EP-Pin",
    "1589": "Zeichenpin",
    "1590": "Z\u00fcgel des Bundes",
    "1591": "Z\u00fcgel des Bundes",
    "1592": "Galarnuss-Kranz",
    "1606": "F\u00e4higkeiten-Pflaster",
    "1691": "Schwarzaugit",
    "1692": "Torfblock",
    "1777": "Adamantkristall",
    "1778": "Wei\u00dfkristall",
    "1779": "Platinumkristall",
    "1780": "Neutraltafel",
    "1785": "R\u00e4tselball",
    "1828": "Legendentafel",
    "1829": "Smart-Rotom",
    "1830": "Sandwich",
    "1831": "Koraidons Pok\u00e9ball",
    "1832": "Miraidons Pok\u00e9ball",
    "1833": "Terakristall-Orb",
    "1834": "Karmesinbuch",
    "1835": "Purpurbuch",
    "1836": "Kombus Geldb\u00f6rse",
    "1842": "Minibambusspross",
    "1843": "Riesenbambusspross",
    "1857": "Unlicht-Schriftrolle",
    "1858": "Wasser-Schriftrolle",
    "1861": "Fluchr\u00fcstung",
    "1862": "Tera-St\u00fcck (Normal)",
    "1863": "Tera-St\u00fcck (Feuer)",
    "1864": "Tera-St\u00fcck (Wasser)",
    "1865": "Tera-St\u00fcck (Elektro)",
    "1866": "Tera-St\u00fcck (Pflanze)",
    "1867": "Tera-St\u00fcck (Eis)",
    "1868": "Tera-St\u00fcck (Kampf)",
    "1869": "Tera-St\u00fcck (Gift)",
    "1870": "Tera-St\u00fcck (Boden)",
    "1871": "Tera-St\u00fcck (Flug)",
    "1872": "Tera-St\u00fcck (Psycho)",
    "1873": "Tera-St\u00fcck (K\u00e4fer)",
    "1874": "Tera-St\u00fcck (Gestein)",
    "1875": "Tera-St\u00fcck (Geist)",
    "1876": "Tera-St\u00fcck (Drache)",
    "1877": "Tera-St\u00fcck (Unlicht)",
    "1878": "Tera-St\u00fcck (Stahl)",
    "1879": "Tera-St\u00fcck (Fee)",
    "1880": "Energiekapsel",
    "1881": "F\u00e4higkeitenschild",
    "1882": "Neutralschmuck",
    "1883": "Kopierkraut",
    "1884": "Boxhandschuh",
    "1885": "Tarnumhang",
    "1886": "Gezinkter W\u00fcrfel",
    "1888": "Baguette",
    "1889": "Mayonnaise",
    "1890": "Ketchup",
    "1891": "Senf",
    "1892": "Butter",
    "1893": "Erdnussbutter",
    "1894": "Chiliso\u00dfe",
    "1895": "Salz",
    "1896": "Pfeffer",
    "1897": "Joghurt",
    "1898": "Schlagsahne",
    "1899": "Frischk\u00e4se",
    "1900": "Beerenkonfit\u00fcre",
    "1901": "Marmelade",
    "1902": "Oliven\u00f6l",
    "1903": "Essig",
    "1904": "S\u00fc\u00dfes Geheimgew\u00fcrz",
    "1905": "Salziges Geheimgew\u00fcrz",
    "1906": "Saures Geheimgew\u00fcrz",
    "1907": "Bitteres Geheimgew\u00fcrz",
    "1908": "Scharfes Geheimgew\u00fcrz",
    "1909": "Salat",
    "1910": "Tomate",
    "1911": "Mini-Tomate",
    "1912": "Gurke",
    "1913": "Gew\u00fcrzgurke",
    "1914": "Zwiebel",
    "1915": "Rote Zwiebel",
    "1916": "Gr\u00fcne Paprika",
    "1917": "Rote Paprika",
    "1918": "Gelbe Paprika",
    "1919": "Avocado",
    "1920": "Gebratener Speck",
    "1921": "Kochschinken",
    "1922": "Roher Schinken",
    "1923": "Chorizo",
    "1924": "Kr\u00e4uterwurst",
    "1925": "Frikadelle",
    "1926": "Klibbe-Stick",
    "1927": "R\u00e4ucherfilet",
    "1928": "Frittierfilet",
    "1929": "Ei",
    "1930": "Tortilla",
    "1931": "Tofu",
    "1932": "Reis",
    "1933": "Nudeln",
    "1934": "Kartoffelsalat",
    "1935": "Scheibenk\u00e4se",
    "1936": "Banane",
    "1937": "Erdbeere",
    "1938": "Apfel",
    "1939": "Kiwi",
    "1940": "Ananas",
    "1941": "Jalape\u00f1o",
    "1942": "Meerrettich",
    "1943": "Currypulver",
    "1944": "Wasabi",
    "1945": "Kresse",
    "1946": "Basilikum",
    "1956": "Bluzuk-Zahn",
    "1957": "Digda-Erde",
    "1958": "Mauzi-Haar",
    "1959": "Enton-Daune",
    "1960": "Menki-Haar",
    "1961": "Fukano-Haar",
    "1962": "Flegmon-Kralle",
    "1963": "Magnetilo-Schraube",
    "1964": "Sleima-Toxin",
    "1965": "Muschas-Perle",
    "1966": "Nebulak-Gas",
    "1967": "Traumato-Haar",
    "1968": "Voltobal-Strom",
    "1969": "Sichlor-Kralle",
    "1970": "Tauros-Haar",
    "1971": "Karpador-Schuppe",
    "1972": "Ditto-Glibber",
    "1973": "Evoli-Haar",
    "1974": "Dratini-Schuppe",
    "1975": "Pichu-Haar",
    "1976": "Fluffeluff-Haar",
    "1977": "Voltilamm-Wolle",
    "1978": "Hoppspross-Blatt",
    "1979": "Sonnkern-Blatt",
    "1980": "Kramurx-Schatz",
    "1981": "Traunfugil-Tr\u00e4ne",
    "1982": "Girafarig-Haar",
    "1983": "Tannza-Schale",
    "1984": "Dummisel-Schuppe",
    "1985": "Baldorfish-Stachel",
    "1986": "Skaraborn-Kralle",
    "1987": "Sniebel-Kralle",
    "1988": "Teddiursa-Kralle",
    "1989": "Botogel-P\u00e4ckchen",
    "1990": "Hunduster-Zahn",
    "1991": "Phanpy-Kralle",
    "1992": "Damhirplex-Haar",
    "1993": "Larvitar-Kralle",
    "1994": "Wingull-Feder",
    "1995": "Trasla-Material",
    "1996": "Gehweiher-Nektar",
    "1997": "Knilz-Spore",
    "1998": "Bummelz-Haar",
    "1999": "Makuhita-Schwei\u00df",
    "2000": "Azurill-Haar",
    "2001": "Zobiris-Edelstein",
    "2002": "Meditie-Schwei\u00df",
    "2003": "Schluppuck-Schleim",
    "2004": "Camaub-Lava",
    "2005": "Qurtel-Kohle",
    "2006": "Spoink-Perle",
    "2007": "Tuska-Stachel",
    "2008": "Wablu-Feder",
    "2009": "Sengo-Kralle",
    "2010": "Vipitis-Zahn",
    "2011": "Schmerbe-Schleim",
    "2012": "Shuppet-Fetzen",
    "2013": "Tropius-Blatt",
    "2014": "Schneppke-Haar",
    "2015": "Liebiskus-Schuppe",
    "2016": "Kindwurm-Schuppe",
    "2017": "Staralili-Feder",
    "2018": "Zirpurze-H\u00e4utungsrest",
    "2019": "Sheinux-Zahn",
    "2020": "Wadribie-Honig",
    "2021": "Pachirisu-Haar",
    "2022": "Bamelin-Haar",
    "2023": "Schalellos-Schleim",
    "2024": "Driftlon-Gas",
    "2025": "Skunkapuh-Haar",
    "2026": "Bronzel-Splitter",
    "2027": "Mobai-Tr\u00e4ne",
    "2028": "Wonneira-Material",
    "2029": "Kryppuk-Splitter",
    "2030": "Kaumalat-Schuppe",
    "2031": "Riolu-Haar",
    "2032": "Hippopotas-Sand",
    "2033": "Glibunkel-Toxin",
    "2034": "Finneon-Schuppe",
    "2035": "Shnebedeck-Beere",
    "2036": "Rotom-Strom",
    "2037": "Lilminip-Blatt",
    "2038": "Barschuft-Zahn",
    "2039": "Ganovil-Kralle",
    "2040": "Zorua-Haar",
    "2041": "Mollimorba-Wimper",
    "2042": "Sesokitz-Haar",
    "2043": "Tarnpignon-Spore",
    "2044": "Mamolida-Schleim",
    "2045": "Zapplardin-Schleim",
    "2046": "Milza-Schuppe",
    "2047": "Petznief-Haar",
    "2048": "Frigometri-Eis",
    "2049": "Gladiantri-Klinge",
    "2050": "Geronimatz-Feder",
    "2051": "Kapuno-Schuppe",
    "2052": "Ignivor-Haar",
    "2053": "Dartiri-Feder",
    "2054": "Purmel-Puder",
    "2055": "Leufeo-M\u00e4hnenhaar",
    "2056": "Flab\u00e9b\u00e9-Pollen",
    "2057": "M\u00e4hikel-Blatt",
    "2058": "Algitt-Alge",
    "2059": "Scampisto-Schere",
    "2060": "Resladero-Daune",
    "2061": "Dedenne-Haar",
    "2062": "Viscora-Schleim",
    "2063": "Clavion-Schl\u00fcssel",
    "2064": "Arktip-Eis",
    "2065": "eF-eM-Haar",
    "2066": "Mangunior-Haar",
    "2067": "Krabbox-Schale",
    "2068": "Choreogel-Feder",
    "2069": "Wuffels-Stein",
    "2070": "Garstella-Stachel",
    "2071": "Pampuli-Schlamm",
    "2072": "Imantis-Blatt",
    "2073": "Molunk-Gas",
    "2074": "Frubberl-Schwei\u00df",
    "2075": "Kommandutan-Haar",
    "2076": "Quartermak-Haar",
    "2077": "Sankabuh-Sand",
    "2078": "Koalelu-Kralle",
    "2079": "Mimigma-Fetzen",
    "2080": "Knirfish-Zahn",
    "2081": "Kamehaps-Kralle",
    "2082": "Raffel-Haar",
    "2083": "Pikuda-Schuppe",
    "2084": "Meikro-Feder",
    "2085": "Toxel-Strom",
    "2086": "Legios-Schwei\u00df",
    "2087": "Kupfanti-Patina",
    "2088": "Klonkett-Kohle",
    "2089": "Salanga-Sand",
    "2090": "Servol-Haar",
    "2091": "Britzigel-Stachel",
    "2092": "Snomnom-Faden",
    "2093": "B\u00e4hmon-Haar",
    "2094": "Knapfel-Fruchtsaft",
    "2095": "Fatalitee-Splitter",
    "2096": "Brimova-Material",
    "2097": "Humanolith-Stein",
    "2098": "Kubuin-Daune",
    "2099": "Grolldra-Puder",
    "2103": "Ferkuli-Haar",
    "2104": "Tarundel-Faden",
    "2105": "Micrick-Kralle",
    "2106": "Relluk-Schlamm",
    "2107": "Gruff-Wachs",
    "2108": "Flattutu-Daune",
    "2109": "Schligda-Sand",
    "2110": "Heerashai-Bartel",
    "2111": "Agiluza-Filet",
    "2112": "Normifin-Schleim",
    "2113": "Olini-\u00d6l",
    "2114": "Chilingel-Samen",
    "2115": "Blipp-Schleim",
    "2116": "Knattox-Gas",
    "2117": "Schlurm-Patina",
    "2118": "Zwieps-Haar",
    "2119": "Flaniwal-Fett",
    "2120": "Frospino-Schuppe",
    "2121": "Nigiragi-Schuppe",
    "2122": "Mopex-Schuppe",
    "2123": "Pamo-Haar",
    "2126": "Voltrel-Feder",
    "2127": "Adebom-Feder",
    "2128": "Krawalloro-Feder",
    "2129": "Flaminkno-Daune",
    "2130": "Klibbe-Schere",
    "2131": "Geosali-Salz",
    "2132": "Lumispross-Kristall",
    "2133": "Sproxi-Tinte",
    "2134": "Hefel-Haar",
    "2135": "Mobtiff-Zahn",
    "2136": "Weherba-Zweig",
    "2137": "Gierspenst-M\u00fcnze",
    "2156": "Forgita-Haar",
    "2157": "Knarbon-Ru\u00df",
    "2158": "Tentagra-Lamelle",
    "2159": "Felino-Schleim",
    "2160": "TM100",
    "2161": "TM101",
    "2162": "TM102",
    "2163": "TM103",
    "2164": "TM104",
    "2165": "TM105",
    "2166": "TM106",
    "2167": "TM107",
    "2168": "TM108",
    "2169": "TM109",
    "2170": "TM110",
    "2171": "TM111",
    "2172": "TM112",
    "2173": "TM113",
    "2174": "TM114",
    "2175": "TM115",
    "2176": "TM116",
    "2177": "TM117",
    "2178": "TM118",
    "2179": "TM119",
    "2180": "TM120",
    "2181": "TM121",
    "2182": "TM122",
    "2183": "TM123",
    "2184": "TM124",
    "2185": "TM125",
    "2186": "TM126",
    "2187": "TM127",
    "2188": "TM128",
    "2189": "TM129",
    "2190": "TM130",
    "2191": "TM131",
    "2192": "TM132",
    "2193": "TM133",
    "2194": "TM134",
    "2195": "TM135",
    "2196": "TM136",
    "2197": "TM137",
    "2198": "TM138",
    "2199": "TM139",
    "2200": "TM140",
    "2201": "TM141",
    "2202": "TM142",
    "2203": "TM143",
    "2204": "TM144",
    "2205": "TM145",
    "2206": "TM146",
    "2207": "TM147",
    "2208": "TM148",
    "2209": "TM149",
    "2210": "TM150",
    "2211": "TM151",
    "2212": "TM152",
    "2213": "TM153",
    "2214": "TM154",
    "2215": "TM155",
    "2216": "TM156",
    "2217": "TM157",
    "2218": "TM158",
    "2219": "TM159",
    "2220": "TM160",
    "2221": "TM161",
    "2222": "TM162",
    "2223": "TM163",
    "2224": "TM164",
    "2225": "TM165",
    "2226": "TM166",
    "2227": "TM167",
    "2228": "TM168",
    "2229": "TM169",
    "2230": "TM170",
    "2231": "TM171",
    "2311": "Picknick-Set",
    "2313": "Akademie-Flasche",
    "2314": "Akademie-Flasche",
    "2315": "Punkte-Flasche",
    "2316": "Streifen-Flasche",
    "2317": "Rauten-Flasche",
    "2318": "Akademie-Tasse",
    "2319": "Akademie-Tasse",
    "2320": "L\u00e4ngsstreifen-Tasse",
    "2321": "Punkte-Tasse",
    "2322": "Bl\u00fcmchen-Tasse",
    "2323": "Akademie-Tischtuch",
    "2324": "Akademie-Tischtuch",
    "2325": "Zauber-Tischtuch",
    "2326": "Natur-Tischtuch",
    "2327": "Groll-Tischtuch",
    "2329": "Akademie-Ball",
    "2330": "Akademie-Ball",
    "2331": "Marill-Ball",
    "2332": "Woll-Ball",
    "2333": "Cyber-Ball",
    "2334": "Gold-Pikser",
    "2335": "Silber-Pikser",
    "2336": "Rotfahnen-Pikser",
    "2337": "Blaufahnen-Pikser",
    "2338": "Pikapika-Pikser",
    "2339": "Zwinker-Pika-Pikser",
    "2340": "Volivoli-Pikser",
    "2341": "Kicher-Voli-Pikser",
    "2342": "Blauball-Pikser",
    "2344": "Glorienr\u00fcstung",
    "2345": "Anf\u00fchrersymbol",
    "2348": "Pinke Flasche",
    "2349": "Blaue Flasche",
    "2350": "Gelbe Flasche",
    "2351": "Edelstahlflasche (R)",
    "2352": "Edelstahlflasche (G)",
    "2353": "Edelstahlflasche (B)",
    "2354": "Silber-Titanflasche",
    "2355": "Querstreifen-Tasse",
    "2356": "Rauten-Tasse",
    "2357": "Flammen-Tasse",
    "2358": "Pinke Tasse",
    "2359": "Blaue Tasse",
    "2360": "Gelbe Tasse",
    "2361": "Pikachu-Tasse",
    "2362": "Evoli-Tasse",
    "2363": "Flegmon-Tasse",
    "2364": "Silber-Titantasse",
    "2365": "Gymnastik-Ball",
    "2366": "Gelbkaro-Tischtuch",
    "2367": "Blaukaro-Tischtuch",
    "2368": "Rotkaro-Tischtuch",
    "2369": "Retro-Gras-Tischtuch",
    "2370": "Action-Tischtuch",
    "2371": "Ungeheuer-Tischtuch",
    "2372": "Streifen-Tischtuch",
    "2373": "Rauten-Tischtuch",
    "2374": "Punkte-Tischtuch",
    "2375": "Violettes Tischtuch",
    "2376": "T\u00fcrkises Tischtuch",
    "2377": "Beiges Tischtuch",
    "2378": "Gelbes Tischtuch",
    "2379": "Blaues Tischtuch",
    "2380": "Pinkes Tischtuch",
    "2381": "Gold-Titanflasche",
    "2382": "Bronze-Titanflasche",
    "2383": "Gold-Titantasse",
    "2384": "Bronze-Titantasse",
    "2385": "Gr\u00fcnball-Pikser",
    "2386": "Rotball-Pikser",
    "2387": "Wunderkerzen-Pikser",
    "2388": "Heldenschwert-Pikser",
    "2389": "Zauberstern-Pikser",
    "2390": "Zauberherz-Pikser",
    "2391": "Schirmchen-Pikser",
    "2392": "Mittagsblumen-Pikser",
    "2393": "Abendblumen-Pikser",
    "2394": "Morgenblumen-Pikser",
    "2395": "Blauer Teller",
    "2396": "Gr\u00fcner Teller",
    "2397": "Oranger Teller",
    "2398": "Roter Teller",
    "2399": "Wei\u00dfer Teller",
    "2400": "Gelber Teller"
}