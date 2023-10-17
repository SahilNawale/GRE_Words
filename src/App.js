import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function App() {
  const [levelData, setLevelData] = useState({
    0: [
      { word: "folly ", meaning: "foolish" },

      { word: "scelortic", meaning: "rigid,unresponsive,unable to adapt" },

      { word: "invigorated", meaning: "strengthened,energized" },

      { word: "compromise ", meaning: "weaken" },

      { word: "indispensable", meaning: "absolute necessary" },

      { word: "archetype", meaning: "typical example of something" },

      {
        word: "skirt",
        meaning: "live or move along the edge or the border,ignore,avoid",
      },

      { word: "stoke", meaning: "to supply fuel to fire" },

      { word: "disavow", meaning: "deny any responsibility or support for" },

      { word: "repeal", meaning: "revoke" },

      { word: "grandiose", meaning: "impressive" },

      {
        word: "curtail",
        meaning:
          "reduce in extent,put a restriction,deprive someone of something",
      },

      { word: "inquisitive", meaning: "curious" },

      {
        word: "acquitted",
        meaning: "exonerate,free of guilty or criminal charges ",
      },

      { word: "interred ", meaning: "burried" },

      {
        word: "shunned",
        meaning: "persistently avoided, ignored, or rejected.",
      },

      { word: "Fiasco", meaning: "Disaster, something terrible,debacle" },

      { word: "enigma ", meaning: "mystery" },

      { word: "adulterate", meaning: "weaken by adding inferior elements" },

      {
        word: "pervasive",
        meaning: "widespread in an area or a group of people",
      },

      {
        word: "prime",
        meaning:
          "prepare for a situation,make something or someone ready for use or action",
      },

      { word: "skeptical", meaning: "not easily convinced, having doubts" },

      {
        word: "anoint",
        meaning: "rub something with other (generally rub oil) ",
      },

      { word: "victor", meaning: "a person who defeats enemy" },

      {
        word: "forgery",
        meaning:
          "the action of forging a copy or imitation of a document, signature, banknote, or work of art,a forged document, signature, banknote, or work of art.",
      },

      { word: "craft", meaning: "trick,deceive" },

      {
        word: "vexation",
        meaning: "state of being annoyed or frustrated or worried",
      },

      {
        word: "ubiquitous",
        meaning: "omnipresent,present everywhere,universal",
      },

      {
        word: "doctrinarine",
        meaning:
          "dogmatic,seeking to impose doctrine(belief or set of beliefs) in all circumstances without regard of consequences.",
      },

      { word: "judicious", meaning: "having good judgement and acute insight	" },

      { word: "startling", meaning: "surprising,astonishing,remarkable" },

      { word: "distill", meaning: "extract the most important aspects of " },

      {
        word: "caricurate",
        meaning:
          "a picture,description,or immitation in which certain characteristics are exaggerated",
      },

      { word: "collusion", meaning: "colluding to deceive others" },

      { word: "intelligible", meaning: "easily understood, comprehensible" },

      { word: "picturesque", meaning: "visually attractive" },

      {
        word: "anachronistic",
        meaning:
          "belonging to some different period , irrelevant ,inappropriate",
      },

      { word: "ahistorical", meaning: "lacking context or perspective" },

      { word: "remediate", meaning: "act as a remedy,make right, redresss" },

      {
        word: "partisanship",
        meaning: "prejudice in favour of a particular cause, bias",
      },

      { word: "omniscience  ", meaning: "the state of knowing everything" },

      {
        word: "posturing",
        meaning: "behaviour that is intended to impress or mislead",
      },

      { word: "forgo", meaning: "go without,do without, give up,refrain from" },

      {
        word: "comporting",
        meaning: "conducting or behaving,accord or agree with",
      },

      { word: "snare", meaning: "a trap, usually for catching animals" },

      { word: "behold", meaning: "see or observer" },

      { word: "indebted", meaning: "owning gratitude for service or favour" },

      { word: "shrewdness", meaning: "having power to make good judgements" },

      { word: "inept", meaning: "having or showing no skill, clumsy" },

      { word: "litigation", meaning: "the process of taking a legal action" },

      { word: "deftness", meaning: "the quality of being quick and skillfull" },

      { word: "detachment", meaning: "not engaged,impartial,objective" },

      {
        word: "eloquence",
        meaning: "fluent or persuasive in speaking or writing",
      },

      { word: "beguile", meaning: "deceptive" },

      { word: "murky", meaning: "dark and gloomy espically because fo mist " },

      { word: "discern", meaning: "recognize or find out" },

      {
        word: "undercut",
        meaning:
          "undermine,offering something at lowerprice to attract customers",
      },

      { word: "impolitic", meaning: "unwise,imprudent" },

      { word: "brandish", meaning: "shake or wave something in meanacing way,to exhibit in an ostentatious or aggressive manner" },

      {
        word: "plummet",
        meaning: "punge(jump or dive quickly),fall straight down",
      },

      { word: "strut", meaning: "a structural support, brace" },

      { word: "substantiate", meaning: "support with arguments or proof" },

      { word: "gestation", meaning: "pregnancy" },

      { word: "partisan", meaning: "devoted to a group,supporter of a cause " },

      { word: "fanatical", meaning: "excessively devoted, enthisiatic" },

      { word: "inconsequential", meaning: "insignificant,unimportant" },

      {
        word: "ford",
        meaning:
          "Place where a river or similar body of water is shallow enough to walk or ride a vehicle across (noun); to cross at such a place",
      },

      {
        word: "wan",
        meaning: "Unnaturally Pale,showing signs of sickness,unhappiness",
      },

      {
        word: "Levy",
        meaning: "Collect tax,wage ; Enlist compulsorily",
      },

      {
        word: "Bygone",
        meaning: "Former",
      },

      {
        word: "Detterent",
        meaning: "Something that restrains or discourages",
      },

      {
        word: "Hearken",
        meaning: "Listen or pay attention to",
      },

      {
        word: "pulchritude",
        meaning: "Physical Beauty",
      },

      {
        word: "abate",
        meaning: "reduce,diminish",
      },

      {
        word: "Wary",
        meaning: "aware,cautious,guard against danger",
      },

      {
        word: "Dissent",
        meaning: "Oppose",
      },

      {
        word: "Mores",
        meaning: "moral and values of a particular group",
      },

      {
        word: "Declivity",
        meaning: "Downward slope,declination",
      },

      {
        word: "Deference",
        meaning: "defferential,showing respect",
      },

      {
        word: "transgression",
        meaning: "Violation of law,sin",
      },

      {
        word: "Rue",
        meaning: "Regret, remorse",
      },

      {
        word: "Analgesia",
        meaning: "Inability to feel pain,Pain relief",
      },

      {
        word: "Sqaulid",
        meaning: "Disgusting,filthy",
      },

      {
        word: "Foreshadow",
        meaning: "Presage,indicate beforehand  ",
      },

      {
        word: "Livid",
        meaning: "Angry,Furious",
      },

      {
        word: "Standing",
        meaning: "Rank,reputation,not movable",
      },

      {
        word: "Countenance",
        meaning: "Facial Expression,approve or tolerate",
      },

      {
        word: "Parley",
        meaning: "Discussioon,Negotiation",
      },

      {
        word: "Encomium",
        meaning: "Formal expression of praise",
      },

      {
        word: "Objective",
        meaning:
          "Factual,related to objects,not influenced by emotions,unbiased",
      },

      {
        word: "Prattle",
        meaning: "Talk in ideal, simple or foolish way",
      },

      {
        word: "alienated",
        meaning: "Cause to become unfriendly,hostile",
      },

      {
        word: "Habituate",
        meaning: "Become accustomed by frequent repitition",
      },

      {
        word: "guise",
        meaning: "Outward token or appearance,semblance",
      },

      {
        word: "Daunting",
        meaning: "Causing Fear,overwhelming",
      },

      {
        word: "Kindle",
        meaning: "Set to Fire,ignite",
      },

      {
        word: "Lackluster",
        meaning: "Lacking vitality,dull and uninteresting",
      },

      {
        word: "Oafish",
        meaning: "Ill mannered in appearance or behaviour ",
      },

      {
        word: "Callous",
        meaning: "Made hard, insensitive",
      },

      {
        word: "Gargantuan",
        meaning: "Great and huge mass,huge and bulky",
      },

      {
        word: "Incendiary",
        meaning: "Inflammatory",
      },

      {
        word: "Sacrosanct",
        meaning: "Inviolabe,extremely sacred",
      },

      {
        word: "Keen",
        meaning: "Abillity to draw fine distinctions",
      },

      {
        word: "Jab",
        meaning: "Poke",
      },

      {
        word: "Layperson/Clergyman",
        meaning: "Someone who is not a professional",
      },

      {
        word: "Babble",
        meaning: "Imprefect,inarticulate",
      },

      {
        word: "Ebb",
        meaning: "Decline,decay,fade away",
      },

      {
        word: "Fabricate",
        meaning: "Create,construct,invent",
      },

      {
        word: "Hallowed",
        meaning: "Sanctified,consecrated",
      },

      {
        word: "jest",
        meaning: "Speak in humorous facetious tone,joke",
      },

      {
        word: "Fume",
        meaning: "get angry, mad or enraged  ",
      },

      {
        word: "imminent",
        meaning: "impending",
      },

      {
        word: "ennui",
        meaning:
          "the feeling of dissatisfaction or weakness as a result of lack of interest, boredom",
      },

      {
        word: "quagmire",
        meaning:
          "difficult or precarious situation,a predicament(difficult or embrassing situation),swamp",
      },

      {
        word: "knead",
        meaning: "knead the dough,mix and work to create uniform mass",
      },

      {
        word: "Fathom",
        meaning: "Understand after much thinking",
      },

      {
        word: "gaiety",
        meaning:
          "state of joyful exuberance(the quality of being full of energy, excitement, and cheerfulness; ebullience.)",
      },

      {
        word: "proliferation",
        meaning:
          "rapid increase in number or amount of something, a large number of something",
      },

      {
        word: "periphery",
        meaning: "the outer limits or edge of an area or objects",
      },

      {
        word: "afflicted",
        meaning: "cause pain or trouble to, affect adversly",
      },

      { word: "Notorious", meaning: "Well known for something bad" },
      { word: "Noxious", meaning: "harmful,poisonous,unpleasant" },
  
      { word: "dampen", meaning: "make less strong or less intense " },

      { word: "impinge", meaning: "have a negative effect on " },

      {
        word: "pep talk",
        meaning:
          "talk intended to make someone feel more courageous and enthusiastic",
      },

      {
        word: "disconsolate",
        meaning: "very unhappy and unable to be comforted with",
      },

      { word: "chirpy", meaning: "cheerful and lively" },

      { word: "fatuous", meaning: "foolish" },

      { word: "scotched", meaning: "ended" },

      { word: "gallantry", meaning: "courageous,bravery" },

      { word: "coddled", meaning: "treat with excessive indulgence,pampered" },

      { word: "revel", meaning: "to take delight in" },

      { word: "hedonistic", meaning: "devoted to pursuit of pleasure" },

      { word: "nefarious", meaning: "wicked,villianous" },

      { word: "nugatory", meaning: "trifling,ineffective" },

      { word: "facsimile", meaning: "an exact copy,replica" },

      {
        word: "apprentice",
        meaning:
          "a person who is learning a trade from a skilled employer, having agreed to work for a fixed period {at low wages",
      },

      { word: "appeallation", meaning: "name or a title" },

      {
        word: "contemporaneous",
        meaning: "existing or occuring at same period of time",
      },

      { word: "nebulous", meaning: "cloudy,haze,unclear,vague,ill-defined" },

      { word: "squalid", meaning: "extremely dirty and unpleasant" },

      { word: "foil", meaning: "prevent {the success of " },

      { word: "deemed", meaning: "interpreted" },

      { word: "blasphemeous", meaning: "irreverent,{not showing respect" },

      { word: "runic", meaning: "mysterious" },

      { word: "profane", meaning: "vulgar" },

      {
        word: "disposition",
        meaning:
          "placement,arrangement,a persons qualities of mind and character",
      },

      {
        word: "inception",
        meaning: "act of beginnning, instance at the beginning",
      },

      { word: "endeavour", meaning: "try hard to achieve something" },

      { word: "equanimity", meaning: "calmness and composure,inner peace" },

      {
        word: "introspection",
        meaning:
          "the examination or observation of one's own mental and emotional processes",
      },

      {
        word: "portent",
        meaning:
          "a sign or warning that a calamitous event is likely to happen, an exceptional or wonderful person or thing",
      },

      { word: "extempore ", meaning: "on the {fly, without preparation" },

      { word: "eulogistically", meaning: "in a laudatory way" },

      { word: "obfuscating", meaning: "making unclear" },

      { word: "inveighing", meaning: "writing with hostility" },

      { word: "garner", meaning: "gather or collect" },

      { word: "benevolent", meaning: "kind, opposite of malevolentds" },

      { word: "dubious", meaning: "hesitating or doubting, suspicious" },

      { word: "obstrusive", meaning: "blatant,conspicious" },

      {
        word: "perverse",
        meaning:
          "showing deliberate and obstinate behaviour, irrational, contrary to accepted or expected standard or practice",
      },

      { word: "wayward", meaning: "difficult to control or predict" },

      { word: "bonhomie", meaning: "cheerful friendliness,geniality" },

      { word: "constancy", meaning: "faithful and dependable" },

      { word: "fealty", meaning: "faithfullness and loyalty" },

      { word: "decadance", meaning: "moral {or cultural decline" },

      { word: "Acquiesce", meaning: "agree to" },

      { word: "icon", meaning: "well known" },

      {
        word: "nascent",
        meaning: "just coming into existence,showing signs of future potential",
      },

      { word: "revelatory", meaning: "revealing something unkown" },

      { word: "bravado", meaning: "show of boldness" },

      { word: "rave", meaning: "talk incoherently" },

      { word: "revel", meaning: "enjoy" },

      { word: "fidgety", meaning: "restless and uneasy" },

      { word: "gruntled", meaning: "pleased,satisfied" },

      { word: "import", meaning: "importance" },

      {
        word: "understatement",
        meaning: "presentation that is less than actual",
      },

      { word: "accord", meaning: "give or grant,harmonious" },

      { word: "confer", meaning: "grant,give,discuss" },

      { word: "bestowed", meaning: "confer or present" },

      { word: "abate", meaning: "decrease or reduce" },
      { word: "abdicate", meaning: "to giveup a position right or power" },
      {
        word: "abject",
        meaning:
          "experienced or present to the maximum degree,completely without pride or dignity; self-abasing",
      },
      {
        word: "abcission",
        meaning:
          "act of cutting,natural separation of leaf or other part from plant",
      },
      { word: "abstemious", meaning: "moderate in appetite" },
      { word: "abstinence", meaning: "giving up of certain pleasures" },
      { word: "accretion", meaning: "grow in size or amount" },
      { word: "accrue", meaning: "accumulate,grow by addittions" },
      { word: "adjunct", meaning: "something added,attached or joined,supplement" },
      { word: "aggrandize", meaning: "to make larger or greater" },
      { word: "allay", meaning: "to lessen,ease,soothe" },
      { word: "allure", meaning: "power to entice by charm" },
      { word: "amalgamate", meaning: "to combine into unified whole" },
      { word: "ambrosia", meaning: "delicious food,food of the gods" },
      { word: "amulet", meaning: "ornament to protect from evil spirits" },
      { word: "analgesic", meaning: "medication that relives pain" },
      {
        word: "anarchy",
        meaning: "absence of government,lacking order or control",
      },
      {
        word: "anomie",
        meaning: "social condition marked by breakdown of social norms",
      },
      { word: "approbation", meaning: "express praise,approval" },
      { word: "apropos", meaning: "relevant" },
      { word: "arabesque", meaning: "ornate,a ballet position" },
      { word: "ardor", meaning: "great emotion or passion" },
      { word: "argot", meaning: "specialized vocabulary used by a group" },
      { word: "aspersion", meaning: "slander,false rumor" },
      { word: "astringent", meaning: "harsh,severe,acidic" },
      { word: "avocation", meaning: "secondary occupation" },
      { word: "avuncular", meaning: "like an uncle,benevolent and tolerant" },
      { word: "axiomatic", meaning: "taken for granted" },
      { word: "bacchanalian", meaning: "pertaining to drunken revelry" },
      { word: "banter", meaning: "playful conversation" },
      { word: "bard", meaning: "poet" },
      { word: "beatify", meaning: "sancitify" },
      { word: "sanctify", meaning: "consecrate" },
      { word: "bedizen", meaning: "to dress in a showy vulgar manner" },
      { word: "behemoth", meaning: "huge,large and powerful creature" },
      { word: "beneficent", meaning: "kindly,doing good" },
      {
        word: "bionics",
        meaning: "application of biological principles to engineering",
      },
      {
        word: "blandishment",
        meaning: "coax(gain favour,get something done) with flattery",
      },
      {
        word: "blase",
        meaning: "bored because of frequent indulgemnet,unconcerned",
      },
      { word: "bovine", meaning: "cowlike" },
      { word: "broach", meaning: "mention for the first time" },
      { word: "cadge", meaning: "to beg,sponge" },
      { word: "cant", meaning: "insincere talk,language of a group" },
      { word: "cantankerous", meaning: "irritable" },
      {
        word: "captious",
        meaning: "faultfinding,inclination to change ones mind forcefully",
      },
      {
        word: "carnal",
        meaning: "relating to physical, especially sexual, needs and activities.",
      },
      { word: "cartography", meaning: "science of making maps" },
      {
        word: "catclysm",
        meaning: "a large-scale and violent event in the natural world",
      },
      {
        word: "upheaval",
        meaning: "a violent or sudden change or disruption to something",
      },
      { word: "categorical", meaning: "absolute, withoout exception" },
      { word: "caucus", meaning: "smaller group within an organization" },
      { word: "causal", meaning: "involving a cause" },
      { word: "chicanery", meaning: "trickery,fraud" },
      { word: "circuitous", meaning: "roundabout" },
      { word: "clairvoyant", meaning: "one who can predict the future,psyhic" },
      { word: "clamor", meaning: "noisy outcry" },
      { word: "coda", meaning: "something that summarizes or concludes" },
      { word: "codify", meaning: "systematize" },
      { word: "cognizant", meaning: "aware" },
      { word: "complaisant", meaning: "polite,willing to do favours" },
      { word: "compliant", meaning: "yeilding" },
      { word: "compunction", meaning: "uneasiness caused by guilt" },
      { word: "concoct", meaning: "invent" },
      {
        word: "congenial",
        meaning: "similar in tastes and habits, friendly,suited",
      },
      { word: "conjugal", meaning: "pertaining to marriage agreement" },
      { word: "connoisseur", meaning: "a person possessing some expertise" },
      { word: "contend", meaning: "assert" },
      {
        word: "continence",
        meaning: "self control,abstention from sexual activity",
      },
      { word: "contumacious", meaning: "rebillious,disobidient" },
      { word: "coquette", meaning: "woman who flirts" },
      { word: "covert", meaning: "hidden, secret" },
      { word: "covetous", meaning: "desiring something owned by others" },
      { word: "cozen", meaning: "mislead,decieve" },
      { word: "credo/creed", meaning: "statement of belief" },
      { word: "daunt", meaning: "discourage,intimidate,dishearten" },
      { word: "default", meaning: "fail to act" },
      { word: "defunct", meaning: "no longer existing" },
      { word: "demotic", meaning: "pertaining to people" },
      { word: "denizen", meaning: "regular visitor,inhabitant" },
      { word: "desuetude", meaning: "state of disuse(not being used)" },
      { word: "desultory", meaning: "random,disconnected" },
      { word: "detraction", meaning: "act of taking away,derogatory" },
      { word: "deviant", meaning: "not within accepted standards of society" },
      { word: "diaphanous", meaning: "transparent,fine textured,vague" },
      { word: "dichotomy", meaning: "division into two contradictory parts" },
      { word: "digresssion", meaning: "tending to deviate from main point" },
      { word: "disabuse", meaning: "free from misconeption" },
      {
        word: "discerning",
        meaning: "having good judgement and acute insight",
      },
      { word: "discredit", meaning: "dishonour,cause to be doubted" },
      { word: "discrepancy", meaning: "difference between" },
      { word: "discretion", meaning: "showing self restraint" },
      { word: "disjointed", meaning: "lacking order or coherence,dislocated" },
      {
        word: "dissemble",
        meaning: "hide ones true motives usually through deceit",
      },
      { word: "dissident", meaning: "person who disagrees about a belief" },
      { word: "distend", meaning: "expand,swell out" },
      { word: "distrait", meaning: "inattentive,preoccupied" },
      { word: "divulge", meaning: "to make something known that is secret" },
      { word: "doggerel", meaning: "poor verse" },
      {
        word: "verse",
        meaning:
          "a line of writing in which words are arranged in a rythymic pattern",
      },
      { word: "effete", meaning: "deprived of vitality,overrefined" },
      { word: "elegy", meaning: "poem or song expressing lament(sorrow)" },
      { word: "elixir", meaning: "substance that can cure ills" },
      { word: "elysian", meaning: "relating to or characteristic of heaven or paradise,heavenly,celestial" },
      { word: "emaciated", meaning: "thin and wasted , gaunted" },
      {
        word: "emollient",
        meaning: "something that soothes or makes more acceptable",
      },
      { word: "encomium", meaning: "formal expression of praise" },
      { word: "entomology ", meaning: "study of insects" },
      { word: "enuciate", meaning: "pronounce clearly" },
      { word: "equable", meaning: "steady,serene" },
      { word: "essay", meaning: "attempt,subject to a test" },
      {
        word: "ethnocentric",
        meaning: "attitude in which one group is superior",
      },
      { word: "etiology", meaning: "cause or origins" },
      { word: "etymology", meaning: "origin and history of a word" },
      {
        word: "eugenics",
        meaning:
          "study of factors that influence hereditary qualities of human race and way to improve these qualities",
      },
      {
        word: "eulogy",
        meaning: "high priase,espically of a person who recently died",
      },
      { word: "euphemism", meaning: "use of agreeable inoffensive language" },
      { word: "euthanaisa", meaning: "mercy killing" },
      { word: "evince", meaning: "to show plainly,be and indication of" },
      {
        word: "evocative",
        meaning: "tending to call to mind or produce a reaction",
      },
      { word: "exotiate", meaning: "to speak or write at a length" },
      { word: "explicate", meaning: "explain,clarify" },
      { word: "expository", meaning: "explanatory" },
      { word: "extemporaneous", meaning: "not reheresed" },
      { word: "extirpate", meaning: "to root up,destroy" },
      { word: "extrinsic", meaning: "not inherent or essential" },
      { word: "factotum", meaning: "a person who doess all kinds of work" },
      { word: "fallow", meaning: "uncultivated" },
      { word: "fatuous", meaning: "self satisfied" },
      { word: "feral ", meaning: "existing in a wild or untamed state" },
      {
        word: "fervent",
        meaning: "having or displaying passionate intensity,extreme emotions",
      },
      { word: "fetid ", meaning: "having bad smell" },
      { word: "fetter", meaning: "bind,confine,something that restricts" },
      { word: "fiat", meaning: "arbitrary order,authorization" },
      { word: "fidelty", meaning: "loyalty" },
      {
        word: "filibuster",
        meaning: "obstruction in legislation to block a law",
      },
      {
        word: "finesse",
        meaning: "refinement in performance,tackle deceptive strategy",
      },
      { word: "fissure", meaning: "crevice" },
      {
        word: "florid",
        meaning: "unnecessary complex rheotic formations,flowery",
      },
      { word: "fomet", meaning: "stir public opininon,arouse" },
      { word: "flout", meaning: "openly disregard,disobey,defy,go against" },
      { word: "forebearance", meaning: "patience" },
      { word: "formidable", meaning: "menacing,threatening" },
      { word: "forswear", meaning: "renounce,repudiate,do without" },
      { word: "fresco", meaning: "painting done on plaster" },
      { word: "froward", meaning: "stuboornly obstinate and contrary" },
      { word: "fulminate", meaning: "attack loudly" },
      { word: "fulsome", meaning: "complimentary or flattering to an excessive degree,of large size or quantity; generous or abundant." },
      { word: "gambol", meaning: "leap playfully" },
      { word: "gauche", meaning: "clumsy" },
      { word: "guise", meaning: "misleading outward token or appearance" },
      { word: "gullible", meaning: "easily deceived" },
      { word: "gustatory", meaning: "affecting sense of taste" },
      { word: "hallowed", meaning: "holy,sacred" },
      { word: "harrowing", meaning: "extremely distressing, terryfying" },
      {
        word: "hieroglyphics",
        meaning: "style of writing in which symbols are used",
      },
      { word: "hirsute", meaning: "covered with hair" },
      {
        word: "Homeostasis ",
        meaning: "Automatic maintenance buy an organism of its temperature ",
      },
      { word: "homily", meaning: "tedious moralizing lecture" },
      {
        word: "idolatory",
        meaning: "idol worship; blind or excessive devotion",
      },
      { word: "igneous", meaning: "produced by fire; volcanic" },
      { word: "impassive", meaning: "showing no emotion	" },
      { word: "imprecation	", meaning: "curse" },
      { word: "incarnate	", meaning: "having bodily form" },
      { word: "incursion	", meaning: "sudden invasion" },
      { word: "insensible	", meaning: "unconscious; unresponsive" },
      { word: "insinuate	", meaning: "to suggest; say indirectly;imply" },
      { word: "insularity	", meaning: "narrow-mindedness;isolation" },
      { word: "insuperable	", meaning: "insurmountable;unconquerable" },
      {
        word: "interdict",
        meaning:
          "to forbid; prohibit; to confront and halt the activities, advance, or entry of",
      },
      {
        word: "intransigence    ",
        meaning: "stubbornness; refusal tocompromise",
      },
      { word: "jibe	", meaning: "to be in agreement" },
      { word: "labile	", meaning: "likely to changse" },
      {
        word: "levee	",
        meaning: "an embankment that prevents a river from overflowing",
      },
      {
        word: "liberal	",
        meaning:
          "tolerant; broad-minded; generous; lavish,willing to respect or accept behaviour or opinions different from one's own; open to new ideas.",
      },
      { word: "libertine	", meaning: "one without moral restraint" },
      { word: "libido	", meaning: "sexual desire" },
      { word: "limn	", meaning: "to draw; describe" },
      { word: "literati	", meaning: "scholarly or learned persons" },
      { word: "lucre	", meaning: "money or profits" },
      { word: "machiavellian	", meaning: "crafty; double-dealing" },
      { word: "machinations	", meaning: "plots or schemes" },
      {
        word: "megalomania	",
        meaning: "delusions(obsession) of power or importance",
      },
      { word: "menagerie	", meaning: "a variety of animals kept together" },
      { word: "meretricious	", meaning: "gaudy; plausible but false;specious" },
      { word: "metamorphosis	", meaning: "change; transformation" },
      {
        word: "metaphysics	",
        meaning:
          "a branch of philosophy that investigates the ultimate nature of reality microcosm	a small system having analogies to a larger system; small world",
      },
      { word: "militate	", meaning: "to work against" },
      { word: "minatory	", meaning: "threatening; menacing" },
      { word: "minuscule	", meaning: "very small" },
      { word: "minutia	", meaning: "petty details" },
      {
        word: "miscellany	",
        meaning: "mixture of writings on various subjects",
      },
      {
        word: "mnemonic	",
        meaning:
          "adj. related to memory; assisting memory, n. a system that develops and improves the memory",
      },
      { word: "motley	", meaning: "many colored; made up of many parts" },
      { word: "multifarious    ", meaning: "diverse" },
      { word: "necromancy	", meaning: "black magic" },
      { word: "neologism	", meaning: "new word or expression" },
      { word: "nostalgia	", meaning: "sentimental longing for a past time" },
      {
        word: "obsequy	",
        meaning: "funeral ceremony (often used in the plural, obsequies)",
      },
      {
        word: "obviate	",
        meaning: "to make unnecessary; to  anticipate and prevent ",
      },
      {
        word: "occult	",
        meaning: "relating to practices connected with supernatural phenomena",
      },
      { word: "odyssey	", meaning: "a long adventurous voyage; a quest" },
      {
        word: "oligarchy	",
        meaning:
          "form of government in which power belongs to only a few leaders",
      },
      { word: "onerous	", meaning: "burdensome" },
      { word: "opprobrium	", meaning: "disgrace; contempt" },
      {
        word: "paleontology	",
        meaning: "study of past geological eras through fossil remains",
      },
      { word: "pathological	", meaning: "departing from normal condition" },
      {
        word: "pathos	",
        meaning: "a quality that causes a feeling of pity or sorrow",
      },
      {
        word: "patois	",
        meaning: "a regional dialect; nonstandard speech; jargon",
      },
      { word: "pedantic	", meaning: "showing off learning" },
      { word: "peregrination	", meaning: "a wandering from place to place" },
      { word: "physiognomy	", meaning: "facial features" },
      {
        word: "piety",
        meaning: "devoutness(quality of being religious or reverent)",
      },
      { word: "plaintive	", meaning: "melancholy; mournful" },
      {
        word: "plasticity	",
        meaning: "condition of being able to be shaped or formed; pliability",
      },
      {
        word: "platonic	",
        meaning: "spiritual, without sensual desire, or theoretical",
      },
      { word: "plumb	", meaning: "to determine the depth; to examine deeply" },
      {
        word:"forerunner",
        meaning:"person or thing that precedes development of something else, a sign of warning or something to come"
      },
      {
        word: "plume	",
        meaning: "to congratulate oneself in a self-satisfied way",
      },
      { word: "plutocracy	", meaning: "society ruled by the wealthy" },
      {
        word: "poseur	",
        meaning: "person who affects an attitude or identity to impress others",
      },
      { word: "prattle	", meaning: "meaningless, foolish talk " },
      { word: "preamble	", meaning: "preliminary statement" },
      { word: "precursor	", meaning: "forerunner; predecessor" },
      { word: "prehensile	", meaning: "capable of grasping" },
      { word: "premonition	", meaning: "forewarning; presentiment" },
      { word: "propensity	", meaning: "inclination; tendency" },
      { word: "propriety	", meaning: "correct conduct; fitness" },
      {
        word: "purport	",
        meaning:
          "v. to profess; suppose; claim, n. meaning intended or implied",
      },
      { word: "pusillanimous	", meaning: "cowardly" },
      { word: "quagmire	", meaning: "marsh; difficult situation" },
      { word: "raiment	", meaning: "clothing" },
      { word: "ramification	", meaning: "implication; outgrowth;consequence" },
      {
        word: "rebus	",
        meaning: "puzzle in which pictures or symbols represent words",
      },
      {
        word: "recluse ",
        meaning:
          "a person who lives a solitary life and tends to avoid other people.",
      },
      {
        word: "reductionistic    ",
        meaning: "attempting to explain complex phenomena by simple principles",
      },
      { word: "refulgent,effulgent", meaning: "brightly shining; resplendent" },
      { word: "regale	", meaning: "entertain" },
      { word: "reparation	", meaning: "amends; compensation" },
      { word: "repine	", meaning: "fret; complain" },
      { word: "rue ", meaning: "to regret" },
      { word: "ruse	", meaning: "trick; crafty stratagem; subterfuge" },
      { word: "sage	", meaning: "wise" },
      { word: "salacious	", meaning: "lascivious; lustful" },
      { word: "salubrious	", meaning: "healthful" },
      {
        word: "satyr	",
        meaning:
          "a creature that is half-man, half-beast with the horns and legs of a goat; it is a follower of dionysos; a leche",
      },
      {
        word: "savor	",
        meaning: "to enjoy; have a distinctive flavor or smell",
      },
      { word: "sentient	", meaning: "aware; conscious; able to perceive" },
      {
        word: "sextant	",
        meaning: "navigation tool that determines latitude and longitude",
      },
      { word: "sidereal	", meaning: "relating to the stars" },
      { word: "simian	", meaning: "apelike; relating to apes" },
      { word: "sinuous	", meaning: "winding; intricate; complex" },
      { word: "sobriety	", meaning: "seriousness,sober,a persons nickname" },
      { word: "sodden	", meaning: "thoroughly soaked; saturated" },
      {
        word: "somatic	",
        meaning: "relating to or affecting the body; corporeal",
      },
      { word: "squalor	", meaning: "filthy, wretched condition" },
      { word: "staccato", meaning: "marked by abrupt, clear-cut sounds" },
      { word: "stentorian	", meaning: "extremely loud" },
      {
        word: "stint",
        meaning:
          "v. to be sparing (very little), n. a period of time spent doing something",
      },
      {
        word: "stricture",
        meaning: "something that restrains; negative criticism",
      },
      { word: "stupefy	", meaning: "to dull the senses of; stun; astonish" },
      { word: "subside	", meaning: "to settle down; grow quiet" },
      {
        word: "substantive	",
        meaning: "essential; pertaining to the substance",
      },
      { word: "succor	", meaning: "relief; help in time of distres or want" },
      { word: "suffrage	", meaning: "the right to vote" },
      { word: "sundry", meaning: "right to vote" },
      {
        word: "suppliant	",
        meaning:
          "beseeching, a person making a humble or earnest plea to someone in power or authority.",
      },
      { word: "sylvan	", meaning: "related to the woods or forest" },
      { word: "tacit	", meaning: "silently understood; implied" },
      { word: "tenet	", meaning: "belief; doctrine" },
      { word: "tenuous	", meaning: "weak; insubstantia" },
      { word: "thespian	", meaning: "an actor or actress" },
      {
        word: "theocracy	",
        meaning: "government by priests representing a god",
      },
      { word: "toady	", meaning: "flatterer; hanger-on; yes- man,obsequious" },
      { word: "tome	", meaning: "large book" },
      {
        word: "transgression	",
        meaning: "act of trespassing or violating a law or rule",
      },
      {
        word: "treatise",
        meaning: "article treating a subject systematically and thoroughly",
      },
      { word: "tremulous	", meaning: "trembling; quivering; frugal; timid" },
      { word: "trepidation	", meaning: "fear and anxiety" },
      {
        word: "tryst	",
        meaning:
          "agreement between lovers to meet; rendezvous(meeting at an agreed place at agreed time)",
      },
      { word: "tumid	", meaning: "swollen; distended" },
      {
        word: "turbid	",
        meaning: "muddy; opaque; in a state of great confusion",
      },
      { word: "tutelary	", meaning: "serving as a guardian or protector" },
      { word: "undulating	", meaning: "moving in waves" },
      { word: "unfeigned	", meaning: "not false; not made up; genuine" },
      { word: "valedictory	", meaning: "pertaining to a farewell" },
      { word: "variegated	", meaning: "varied; marked with different colors" },
      {
        word: "vendetta	",
        meaning:
          "prolonged feud(quarrel or dispute) marked by bitter hostility",
      },
      { word: "venegeance", meaning: "punishment for wrong" },
      { word: "vertigo	", meaning: "dizziness" },
      {
        word: "virtuoso	",
        meaning: "someone with masterly skills; expert musician",
      },
      { word: "visage	", meaning: "countenance; appearance; aspect" },
      {
        word: "vivisection	",
        meaning:
          "dissection; surgery; or painful experiments performed on a living animal for the purpose of scientific research",
      },
      { word: "vogue	", meaning: "prevailing fashion or practice" },
      { word: "wary	", meaning: "careful; cautious" },
      { word: "whimsy	", meaning: "playful or fanciful idea" },
      { word: "wistful	", meaning: "vaguely longing; sadly thoughtful" },
      { word: "zealot	", meaning: "one who is fanatically devoted to a cause" },
      { word: "zealotry	", meaning: "fanaticism" },
      {
        word: "Luminary",
        meaning: "a person or something that inspires or influences others",
      },
      {
        word: "pathetic",
        meaning:
          "arousing pity through vulnerability or sadness, inadequate, of very low standard",
      },
      { word: "Woo", meaning: "Seek the favour or support or custom of" },
      {
        word: "Morbid",
        meaning:
          "Characterised by unusual interest in disturbing and unpleasant subjects like death and disease",
      },
      {
        word: "Liberated",
        meaning:
          "free from social conventions or traditional ideas, especially with regard to sexual roles",
      },
      {
        word: "obligate",
        meaning:
          "require or compel (someone) to undertake a legal or moral duty.",
      },
      {
        word: "hidebound",
        meaning:
          "unwilling or unable to change because of tradition or convention.",
      },
      {
        word: "redemption",
        meaning:
          "the action of saving or being saved from sin, error, or evil,redeem",
      },
      {
        word: "Obsolete",
        meaning: "no longer produced or used; out of date.",
      },
      {
        word: "illegible",
        meaning: "not clear enough to be read",
      },
      {
        word: "rendition",
        meaning: "performance or interpretation of something",
      },
      {
        word: "tepid",
        meaning: "showing little enthusiasm, slightly warm",
      },
      {
        word: "kismet",
        meaning: "destiny, fate",
      },
      {
        word: "bemuse",
        meaning: "puzzle,confuse or bewilder",
      },
      {
        word: "flamboyant",
        meaning:
          "tending to attract attention becuase of style or confidence, french style of architecture",
      },
      {
        word: "insolence",
        meaning: "rude and disrespectful behaviour",
      },
      {
        word: "poignant",
        meaning:
          "sharp taste or smell,evoking sadness, causing strong feelings",
      },
      {
        word: "regurgitation",
        meaning:
          "the action of bringing swallowed food up again to the mouth, the repetition of information without analysis or comprehension",
      },
      {
        word: "sedation",
        meaning:
          "A state of calmness, relaxation, or sleepiness caused by certain drugs",
      },
      {
        word: "cursory",
        meaning: "hasty and hence not detaileds",
      },
      {
        word: "ramble",
        meaning:
          "talk or write in confused or inconsequential way or lengthy, walk for pleasure in countryside",
      },
      {
        word: "blowback",
        meaning: "unintended adverse effects of some action",
      },
      {
        word: "impetus",
        meaning:
          "the force or energy with which a body moves,momentum,something that makes a process or activity happen or happen more quickly",
      },
      {
        word: "bewail",
        meaning: "express sadness,regret or disappointment about something",
      },
      {
        word: "aptitude",
        meaning: "a natural ability to do something, suitability or fitness",
      },
      {
        word: "vocation",
        meaning:
          "a strong feeling of suitability for a particular career or occupation.",
      },
      {
        word: "subjugation",
        meaning:
          "the action of bringing someone or something under domination or control.",
      },
      {
        word: "vernacular",
        meaning:
          "language of a group,dialect,architecture concerned with domestic and functional rather than public or monumental buildings",
      },
      {
        word: "delible",
        meaning: "capable of being deleted,not permanent",
      },
      {
        word: "addled",
        meaning: "unable to think properly, confused, rotten",
      },
      {
        word: "onslaught",
        meaning: "fierce or destructive attack",
      },
      {
        word: "inquituous",
        meaning: "unfair and morally wrong",
      },
      {
        word: "personable",
        meaning: "having pleasant appearance and manner",
      },
      {
        word: "clandestine",
        meaning: "kept or done secretly, espically because illicit",
      },
      {
        word: "sophomore",
        meaning: "second year or high school student",
      },
      {
        word: "solipsistic",
        meaning: "self centered or selfish",
      },
      {
        word: "hoi polloi",
        meaning: "the masses; the common people.",
      },
      {
        word: "dulcet",
        meaning: "sweet and soothing.",
      },
      {
        word: "cabal",
        meaning:
          "a secret political clique or faction(small group dissenting within a larger group).",
      },
      {
        word: "eccentric",
        meaning: "unconventional and strange",
      },
      {
        word: "foible",
        meaning: "minor weakness in someones characters",
      },
      {
        word: "peccadillo",
        meaning: "a relatively minor fault or sin",
      },
      {
        word: "faculty",
        meaning: "inherent mental or physical power",
      },
      {
        word: "poultice",
        meaning: "something that makes less offensive and inflammatory",
      },
      {
        word: "hortatory",
        meaning: "tending to exhort",
      },
      {
        word: "untapped",
        meaning: "not yet used or exploited",
      },
      {
        word: "fleeting",
        meaning: "lasting for very short time",
      },
      {
        word: "marginalized",
        meaning: "treated as unsignificant or peripheral",
      },
      {
        word: "blemish",
        meaning: "small mark that spoils the appearance of something",
      },
      {
        word: "pretension",
        meaning: "claim or assertion,trying to impress others",
      },
      {
        word: "voluntary",
        meaning: "done with ones own free will and no force or payment",
      },
      {
        word: "kindred",
        meaning: "family or relations,similar in kind ",
      },
      {
        word: "imperative",
        meaning: "important,crucial,give authorative command,peremptory",
      },
      {
        word: "incense",
        meaning: "angry,furious",
      },
      {
        word: "mortify",
        meaning: "cause or feel ashamed or embarrassed",
      },
      {
        word: "acute ",
        meaning: "severe,having good insight",
      },
      {
        word: "outmoded",
        meaning: "old fashioned",
      },
      {
        word: "canny",
        meaning: "shrewdness,pleasant or nice",
      },
      {
        word: "avail",
        meaning: "help or benifit",
      },
      {
        word: "demonize",
        meaning: "potray as wicked and threatening",
      },
      {
        word: "deified",
        meaning: "worship or regard as god",
      },
      {
        word: "contortion",
        meaning: "a twist or bent condition",
      },
      {
        word: "deluge",
        meaning: "a severe flood,overwhelm",
      },
      {
        word: "embody",
        meaning: "include or contain as a constituent part, incorporate",
      },
      {
        word: "cite",
        meaning:
          "evidence or justification for something, praise a courageous act",
      },
      {
        word: "preposterous",
        meaning: "contrary to common sense, foolish , absurd ",
      },
      {
        word: "enduring",
        meaning: "long lasting, durable",
      },
      {
        word: "lackey",
        meaning: "a servant",
      },
      {
        word: "demarcate",
        meaning: "set the boundary or the limits of",
      },
      {
        word: "dumbfounded",
        meaning: "astonished or amazed",
      },
      {
        word: "cajole",
        meaning: "persuade someone to do something by coaxing or flattery",
      },
      {
        word: "berate",
        meaning: "scold or criticize",
      },
      {
        word: "rampage",
        meaning: "violent and uncontrolled state",
      },
      {
        word: "agglomeration",
        meaning: "mass or collection of things",
      },
      {
        word: "simpatico",
        meaning: "likeable and easy to get on with",
      },
      {
        word: "stanza",
        meaning: "verse",
      },
      {
        word: "depredate",
        meaning: "steal from,typically using force,plunder",
      },
      {
        word: "recidivist",
        meaning: "a convicted criminal who repeatedly reoffends",
      },
      {
        word: "autodidact",
        meaning: "self taught person",
      },
      {
        word: "moralist",
        meaning:
          "person who teaches moralty(difference between right and wrong)",
      },
      {
        word: "utilitarian",
        meaning:
          "designed to be useful rather than attractive,adhereing to utilitarianism",
      },
      {
        word: "myrmidon",
        meaning: "a follower or subordinate of powerful person",
      },
      {
        word: "unbeknownst",
        meaning: "unkown by",
      },
      {
        word: "fecund",
        meaning:
          "producing or capable of producing an abundance of offspring or new growth; highly fertile",
      },
      {
        word: "sentry",
        meaning: "a soldier, a guard",
      },
      {
        word: "wit",
        meaning: "shrewdness,funniness,humour",
      },
      {
        word: "obloquy",
        meaning: "strong public condemnation.",
      },
      {
        word: "temperament",
        meaning: "a persons or animals nature or character",
      },
      {
        word: "quiescent",
        meaning: "period of inactivity or dormancy",
      },
      {
        word: "antediluvian",
        meaning: "very old",
      },
      {
        word: "profligate",
        meaning: "rashfully extravagant",
      },
      {
        word: "conjuring",
        meaning: "magical",
      },
      {
        word: "time-honoured",
        meaning: "respected or valued because it has existed for a long time.",
      },
      {
        word: "hysterical",
        meaning: "wildly uncontrolled emotion",
      },
      {
        word: "Deification",
        meaning: "Exhaltation to divine status",
      },
      {
        word: "careen",
        meaning: "move in swift and uncontrolled way",
      },
      {
        word: "jalopy",
        meaning: "an old car in a dilapidated condition.",
      },
      {
        word: "trundle",
        meaning: "move or cause to move slowly and heavily.",
      },
      {
        word: "tarry",
        meaning: "stay longer than intended; delay leaving a place.",
      },
      {
        word: "postulate",
        meaning: "assume as fact",
      },
      {
        word: "bleat",
        meaning: "make a characteristic weak,cry",
      },
      {
        word: "stopgap",
        meaning:
          "a temporary way of dealing with a problem or satisfying a need.",
      },
      {
        word: "irate",
        meaning: "feeling or characterised by great anger  ",
      },
      {
        word: "appose",
        meaning: "lying close to,place side by side",
      },
      {
        word: "apposite",
        meaning: "appropriate",
      },
      {
        word: "arcadian",
        meaning: "ideal rural paradise",
      },
      {
        word: "hinterland",
        meaning:
          "the remote areas of a country away from the coast or the banks of major rivers.",
      },
      {
        word: "apollonian",
        meaning:
          "relating to the rational, ordered, and self-disciplined aspects of human nature.",
      },
      {
        word: "tony",
        meaning: "fashionable among wealthy or stylish people.",
      },
      {
        word: "loggerheads",
        meaning: "in or into a state of quarrelsome disagreement",
      },
      {
        word: "cahoot",
        meaning: "colluding",
      },
      {
        word: "abet",
        meaning:
          "encourage or assist (someone) to do something wrong, in particular to commit a crime.",
      },
      {
        word: "aghast",
        meaning: "filled with horror or shock.",
      },
      { 
        word: "intrigued",
        meaning:
          "arouse the curiosity or interest of; fascinate.make secret plans to do something illicit or detrimental to someone",
      },
      {
        word: "marginalized",
        meaning: "treated as insignificant",
      },
      {
        word: "redouble",
        meaning: "make larger greater intense",
      },
      {
        word: "temparte",
        meaning: "showing moderation or self restrain",
      },
      {
        word: "fixate",
        meaning:
          "cause (someone) to develop an obsessive attachment to someone or something,obsessed with",
      },
      {
        word: "herald",
        meaning:
          "an official to oversee an event, a thing or person see as a sign of something about to happen",
      },
      {
        word: "omnipotent",
        meaning: "having unlimimted power",
      },
      {
        word: "vermin",
        meaning: "wild animals harmful to crops",
      },
      {
        word: "odious",
        meaning: "unpleasant,repulsive",
      },
      {
        word: "potable",
        meaning: "safe to drink",
      },
      {
        word: "risible",
        meaning: "provoking laughter",
      },
      {
        word: "ginger",
        meaning: "make someone or something more lively",
      },
      {
        word: "amicable",
        meaning: "characterised by friendliness and absence of discord",
      },
      {
        word: "dulect",
        meaning: "sweet and soothing",
      },
      {
        word: "candour",
        meaning: "honest and frank",
      },
      {
        word: "overture",
        meaning: "introduction to something more substantial,preliminary",
      },
      {
        word: "patrimony",
        meaning: "property inherited from ancestors",
      },
      {
        word: "temperate",
        meaning: "showing moderation or self restrain",
      },
      {
        word: "berserk",
        meaning: "out of control with anger or excitement,frenzied",
      },
      {
        word: "pacific",
        meaning: "peaceful",
      },
      {
        word: "parlous",
        meaning: "precarious",
      },
      {
        word: "semiotic",
        meaning: "relating to signs or symbols",
      },
      {
        word: "buoyant",
        meaning: "able to float,cheerful and optimistic",
      },
      {
        word: "sinister",
        meaning:
          "giving the impression that something harmful or evil is happening or will happen.",
      },
      {
        word: "Cloying",
        meaning:
          "excessively sweet, rich, or sentimental, especially to a disgusting or sickening degree.",
      },
      {
        word: "bland",
        meaning: "dull and uninteresting",
      },
      {
        word: "queasiness",
        meaning: "wanting to vomit, nausea",
      },

      {
        word: "scruple",
        meaning: "feeling of doubt or hesitation, qualm",
      },

      {
        word: "exuberance",
        meaning: "ebullient",
      },

      {
        word: "flimsy",
        meaning: "fragile",
      },
      {
        word: "dwindling ",
        meaning: "gradually diminishing in size amount or   ",
      },
      {
        word: "buoyed",
        meaning: "kept afloat(out of poverty or trouble)",
      },
      {
        word: "brash",
        meaning: "rude, aggressive",
      },
      {
        word: "mediocre",
        meaning: "of average quality , not very good",
      },
      {
        word: "trumpet",
        meaning: "broadcast widely or loudly",
      },
      {
        word: "constrict",
        meaning: "make something narrower by applying force",
      },
      {
        word: "constringent",
        meaning: "causing constriction",
      },
      {
        word: "seisimic",
        meaning: "enormous",
      },
      {
        word: "weary",
        meaning: "tired of, reluctant",
      },
      {
        word: "plenitude",
        meaning: "abundance",
      },
      {
        word: "cede",
        meaning: "give up",
      },
      {
        word: "paradigm",
        meaning: "a typical example or a pattern",
      },
      {
        word: "tally",
        meaning: "calculate the total number of,agree or correspond",
      },
      {
        word: "virtue",
        meaning: "morally good",
      },
      {
        word: "preponderance",
        meaning: "great in number or quality ",
      },
      {
        word: "perpetual",
        meaning: "recurring , never ending or changing",
      },
      {
        word: "doomed",
        meaning: "likely to have an unfortunate and inescapable outcome; ill-fated.",
      },
      {
        word: "indiscreet",
        meaning: "imprudent,impolitic",
      },
      {
        word: "indiscretion",
        meaning: "speech that is indiscreet or lack judgement",
      },
      {
        word: "waver",
        meaning: "move in a quivering way; flicker, become weaker; falter.",
      },
      {
        word: "unwavering ",
        meaning: "steady,",
      },
      {
        word: "incoherent",
        meaning: " expressed in an incomprehensible or confusing way; unclear, not stable",
      },
      {
        word: "imprudent",
        meaning: "not showing care for the consequences of an action; rash.",
      },
      {
        word:"oblivious",
        meaning:"not aware of or concerned about what is happening around one."
      },
      {
        word:"culpable",
        meaning:"deserving blame,responsibility for fault or wrong"
      },
      {
        word:"emulate",
        meaning:"match or surpass, usually by imitation"
      },
      {
        word:"preternatural",
        meaning:"beyond natural"
      },
      {
        word:"middling",
        meaning:"moderate or average in size, amount, or rank."
      },
      {
        word:"inequitable ",
        meaning:"unfair,unjust"
      },
      {
        word:"disconcerting",
        meaning:"perturbing"
      },
      {
        word:"vandalism",
        meaning:"deliberate destruction or damage to property"
      },
      {
        word:"denunciation",
        meaning:"public condemnation"
      },
      {
        word:"rebuff",
        meaning:"reject in abrupt manner"
      },
      {
        word:"pensive",
        meaning:"engaged in, involving, or reflecting deep or serious thought."
      },
      {
        word:"dawdle",
        meaning:"waste time; be slow."
      },
      {
        word:"amble",
        meaning:"walk or move at a slow, relaxed pace."
      },
      {
        word:"encumber",
        meaning:"restrict or impede"
      },
      {
        word:"unimpeachable",
        meaning:"not to be doubted or criticized, trustworthy"
      },
      {
        word:"dejected",
        meaning:"sad or depressed"
      },
      {
        word:"succinct",
        meaning:" briefly and clearly expressed,concise"
      },
      {
        word:"compendious",
        meaning:"containing or presenting the essential facts of something in a comprehensive but concise way."
      },
      {
        word:"weep",
        meaning:"shed tears, exude(discharge) a liquid"
      },
      {
        word:"grimace",
        meaning:" to make an ugly expression with your face to show pain, dislike"
      },
      {
        word:"scuffle",
        meaning:"a short, confused fight or struggle at close quarters.an act or sound of moving in a hurried, confused, or shuffling manner."
      },
      {
        word:"commiserate",
        meaning:"express or feel sympathy or pity; sympathize."
      },
      {
        word:"effusive",
        meaning:"showing or expressing gratitude, pleasure, or approval, poured out when molten but later solidified"
      },
      {
        word:"unctuous",
        meaning:"excessive flattering"
      },
      {
        word:"elated",
        meaning:"happy"
      },
      {
        word:"oppressed",
        meaning:"subject to harsh and authoritarian treatment."
      },
      {
        word:"cavalier",
        meaning:"lack of concern"
      },
      {
        word:"scourage",
        meaning:"an instrument of punishment or criticism"
      },
      {
        word:"disregard",
        meaning:"pay no attention to"
      },
      {
        word:"entourage",
        meaning:"a group of people attending or surrounding an important person."
      },
      {
        word:"slipshod",
        meaning:"characterized by a lack of care, thought, or organization."
      },
      {
        word:"frequent",
        meaning:"visit a place often"
      },
      {
        word:"indemnify",
        meaning:"compensate for harm or loss"
      },
      {
        word:"competent",
        meaning:"having the necessary skill or abitlity"
      },
      {
        word:"theorized",
        meaning:"form a theroy a about something"
      },
      {
        word:"liquidate",
        meaning:"kill,using violent means"
      },
      {
        word:"protracted",
        meaning:"lasting for a time longer than usual"
      },
      {
        word:"gull",
        meaning:"delude"
      },
      {
        word:"facade",
        meaning:"deceptive token or appearance"
      },
      {
        word:"apprehend",
        meaning:"understand or perceive,arrest someone for a crime"
      },
      {
        word:"spate",
        meaning:"large number of similar things in no order,a sudden flood"
      },
      {
        word:"endear",
        meaning:"cause to be loved or liked"
      },
      {
        word:"cynicism",
        meaning:"an inclination to believe that people are motivated purely by self-interest; scepticism."
      },
      {
        word:"contrived",
        meaning:"hard to believe,not natural or realistic"
      },
      {
        word:"disbelief",
        meaning:"refusal to accept something that is true"
      },
      {
        word:"retort",
        meaning:"repay,reply"
      },
      {
        word:"grumbling",
        meaning:"complaining in bad tempered way"
      },
      {
        word:"scuttle",
        meaning:"run hurriedly and furtively"
      },
      {
        word:"heckler",
        meaning:"a person who interrupts others in a derisive tone"
      },
      {
        word:"spinlessness",
        meaning:"weak and purposeless"
      },
      {
        word:"warring",
        meaning:"conflicting each other"
      },
      {
        word:"sham",
        meaning:"a thing that is not what it is supposed to be"
      },
      {
        word:"agonize",
        meaning:"cause great mental or physical pain"
      },
      {
        word:"bogus",
        meaning:"not genuine or true"
      },
      {
        word:"scathing",
        meaning:"devastating,scornful,critical"
      },
      {
        word:"stinginess",
        meaning:"lack of generosity"
      },
      {
        word:"egalitarian",
        meaning:"believing that all people are equal,a person who fights for equality"
      },
      {
        word:"inordinate",
        meaning:"excessive"
      },
      {
        word:"vigilant",
        meaning:"keeping careful watch for possible danger or difficulties."
      },
      {
        word:"disquiet",
        meaning:"a feeling of worry or uneasy"
      },
      {
        word:"tranquil",
        meaning:"free from disturbance; calm."
      },
      {
        word:"retrospective",
        meaning:"looking back on or dealing with past events or situations."
      },
      {
        word:"annuls",
        meaning:"declare invalid  "
      },
      {
        word:"austere",
        meaning:"severity of manner or attitude."
      },
      {
        word:"imperious",
        meaning:"arrogant and domineering"
      },
      {
        word:"exotic",
        meaning:"foreign,imported"
      },
      {
        word:"stigma",
        meaning:"a mark of disgrace or dissapproval associated with someone"
      },
      {
        word:"transcend",
        meaning:"surpass,go beyond"
      },
      {
        word:"foreground",
        meaning:"draw attention to,the part of a view that is nearest to the observer,"
      },
      {
        word:"schism",
        meaning:"a split or division between strongly opposed sections or parties"
      },
      {
        word:"gawkiness",
        meaning:"movement that is awkward, clumsy or inelegant"
      },
      {
        word:"sanct",
        meaning:"very little"
      },
      {
        word:"woes",
        meaning:"great sorrow or distress"
      },
      {
        word:"abridged",
        meaning:"shortened"
      },
      {
        word:"allegory",
        meaning:"story, poem, picture "
      },
      {
        word:"acquisitive",
        meaning:"excessively interested in acquiring money or material things."
      },
      {
        word:"antithetical",
        meaning:"directly opposing"
      },
      {
        word:"innate",
        meaning:"inborn, natural"
      },
      {
        word:"intrinsic",
        meaning:"belonging naturally; essential; inherent"
      },
      {
        word:"misnomer",
        meaning:"inappropritate or unsuitable term"
      },
      {
        word:"profound",
        meaning:"very great or intense"
      },
      {
        word:"temperance",
        meaning:"the quality of moderation or self-restraint."
      },
      {
        word:"profundity",
        meaning:"great judgement and insight"
      },
      {
        word:"retrospect",
        meaning:"a survey or review of a past course of events or period of time."
      },
      {
        word:"conspicuous",
        meaning:"clearly visible"
      },
      {
        word:"lure",
        meaning:"tempt"
      },
      {
        word:"heed",
        meaning:"pay attention to; take notice of."
      },
      {
        word:"incipient",
        meaning:"beginning to happen or develop"
      },
      {
        word:"concede",
        meaning:"admit or agree that something is true after first denying or resisting it,give up"
      },
      {
        word:"manacle",
        meaning:"fetter"
      },
      {
        word:"inhibit",
        meaning:"hinder, restrain, or prevent"
      },
      {
        word:"estranged",
        meaning:"no longer affectionate,alienated"
      },
      {
        word:"venal",
        meaning:"corrupt"
      },
      {
        word:"latitude",
        meaning:"freedom for action or thought"
      },
      {
        word:"meld",
        meaning:"blend or combine"
      },
      {
        word:"radical",
        meaning:"thorough,complete,revolutionary"
      },
      {
        word:"secular",
        meaning:"not connected with religion or spiritual matters"
      },
      {
        word:"forsake",
        meaning:"abandon or leave"
      },
      {
        word:"astounding",
        meaning:"surprising,astonishing"
      },
      {
        word:"robust",
        meaning:"strong and healthy; vigorous"
      },
      {
        word:"skein",
        meaning:"large thread that is knotted"
      },
      {
        word:"peg",
        meaning:"a short pin or bolt, typically tapered at one end, that is used for securing something in place, hanging things on, or marking a position."
      },
      {
        word:"garbled",
        meaning:"confused,unclear"
      },
      {
        word:"dread",
        meaning:"anticipate with great fear or apprehension"
      },
      {
        word:"dissolution",
        meaning:"conclusion,formaly ending something, living life full of debauchery"
      },
      {
        word:"propinquity",
        meaning:"the state of being close to someone or something; proximity."
      },
      {
        word:"singular",
        meaning:"unusual,exceptional"
      },
      {
        word:"nothwithstanding",
        meaning:"despite,inspite of"
      },
      {
        word:"unrepantant",
        meaning:"showing no regret for wrongdoings"
      },
      {
        word:"ludicrous",
        meaning:"foolish,odd,absurd,unreasonable"
      },
      {
        word:"botch",
        meaning:"carry out a task carelessly,mess, fiasco"
      },
      {
        word:"flubbed ",
        meaning:"botch"
      },
      {
        word:"rapture",
        meaning:"feeling of intense pleasure or joy"
      },
      {
        word:"inceritude",
        meaning:"state of uncertainity or hesitation"
      },
      {
        word:"repute",
        meaning:"reputed,well known,esteemed"
      },
      {
        word:"titular",
        meaning:"formal,eponymous"
      },
      {
        word:"anything but",
        meaning:"not at all"
      },
      {
        word:"antagonistic",
        meaning:"hostile,opposing"
      },
      {
        word:"polarize",
        meaning:"causing different people or opinions to be divided into completely different groups"
      },
      {
        word:"ecstatic",
        meaning:"overwhelming joy or happiness"
      },
      {
        word:"blather",
        meaning:"prattle"
      },
      {
        word:"genial",
        meaning:"friendly and cheerful"
      },
      {
        word:"infraction",
        meaning:"violation"
      },
      {
        word:"animated",
        meaning:"lively,full of excitement"
      },
      {
        word:"superannuated",
        meaning:"obsolete"
      },
      {
        word:"farcical",
        meaning:"ludicrous,absurd,ridiculous"
      },
      {
        word:"disarray",
        meaning:"unorganized,untidy"
      },
      {
        word:"purgation",
        meaning:"purification or cleansing"
      },
      {
        word:"quintessence",
        meaning:"the most perfect or typical example of a quality or class."
      },
      {
        word:"exhilaration",
        meaning:"excited,happy"
      },
      {
        word:"abulation",
        meaning:"an act of washing oneself."
      },
      {
        word:"caveat",
        meaning:"warning,caution,admonition"
      },
      {
        word:"rouse",
        meaning:"make angry or excited"
      },
      {
        word:"incite",
        meaning:"provoke,urge on,encourage"
      },
      {
        word:"marshal",
        meaning:"gather,collect,arrange,assemble"
      },
      {
        word:"bland",
        meaning:"dull,uninteresting"
      },
      {
        word:"toothsome",
        meaning:"agreeable,attractive "
      },
      {
        word:"pivotal",
        meaning:"of great importance"
      },
      {
        word:"detritus",
        meaning:"debris,waste"
      },
      {
        word:"uproar",
        meaning:"noise or disturbance"
      },
      {
        word:"bedlam",
        meaning:"flux"
      },
      {
        word:"waggish",
        meaning:"playful,facetious"
      },
      {
        word:"vicious",
        meaning:"cruel,violent,immoral"
      },
      {
        word:"manifest",
        meaning:"clear,obvious"
      },
      {
        word:"resilience",
        meaning:"the ability to withstand adversity and bounce back from difficult life events"
      },
      {
        word:"incineration",
        meaning:"destruction of something"
      },
      {
        word:"humane",
        meaning:"kind"
      },
      {
        word:"perilous",
        meaning:"full of danger or risk"
      },
      {
        word:"compassionate",
        meaning:"sympathetic, concerned for others"
      },
      {
        word:"embrace",
        meaning:"hug,accept,welcome"
      },
      {
        word:"augur",
        meaning:"be sign or indication of"
      },
      {
        word:"rectitude",
        meaning:"morally correct "
      },
      {
        word:"integrity",
        meaning:"honest,strong moral principles"
      },
      {
        word:"disservice",
        meaning:"a harmful action"
      },
      {
        word:"despondency",
        meaning:"dejection"
      },
      {
        word:"squabble",
        meaning:"frequent complaining"
      },
      {
        word:"debilitated",
        meaning:"make someone weak"
      },
      {
        word:"distraught",
        meaning:"very worried and upset"
      },
      {
        word:"volley",
        meaning:"bombardment"
      },
      {
        word:"impotence",
        meaning:"helplessness"
      },
      {
        word:"hyperbole",
        meaning:"exaggeration"
      },
      {
        word:"hoax",
        meaning:"humurous deception"
      },
      {
        word:"ailment",
        meaning:"minor illness"
      },
      {
        word:"dextrous",
        meaning:"skillfull,espically with hands"
      },
      {
        word:"lumbering",
        meaning:"slow,clumsy,awkward"
      },
      {
        word:"endure",
        meaning:"suffer,undergo,lasting long time"
      },
      {
        word:"precarious",
        meaning:"not securely held or in position; dangerously likely to fall or collapse."
      },
      {
        word:"rife",
        meaning:"widespread,common"
      },
      {
        word:"abiding",
        meaning:"enduring,long lasting"
      },
      {
        word:"discomfiting",
        meaning:"make uneasy or embarrassed"
      },
      {
        word:"avant-garde",
        meaning:"new,innovative,experimental "
      },
      {
        word:"persipicacious",
        meaning:"good judgement and insight"
      },
      {
        word:"perspicuous",
        meaning:"lucid"
      },
      {
        word:"quaint",
        meaning:"attractive but unusual or old fashioned"
      },
      {
        word:"rancorous",
        meaning:"characterised by bitterment or resentment"
      },
      {
        word:"gentrified",
        meaning:"polite,respectable"
      },
      {
        word:"imposing",
        meaning:"impressive"
      },
      {
        word:"decidedly",
        meaning:"undoubtedly"
      },
      {
        word:"consternation",
        meaning:"anxiety,perturbation"
      },
      {
        word:"condescension",
        meaning:"haughty,arrogantly superior"
      },
      {
        word:"reckless",
        meaning:"rash"
      },
      {
        word:"subvert",
        meaning:"undermine something established"
      },
      {
        word:"putrefaction",
        meaning:"the process of decay or rotting in a body or other organic matter."
      },
      {
        word:"hypocritical",
        meaning:"sanctimonious"
      },  
      {
        word:"ideologue",
        meaning:"greatly adhering to and ideology"
      },
      {
        word:"simpleton",
        meaning:"foolish"
      },
      {
        word:"phoney",
        meaning:"fraud person,imposter"
      },
      {
        word:"stem",
        meaning:"arise from"
      },
      {
        word:"youthfullness",
        meaning:"being young"
      },
      {
        word:"pessimistic",
        meaning:"negative thinker"
      },
      {
        word:"conjecture,speculation",
        meaning:"form a theory or assume without evidence"
      },
      {
        word:"charisma",
        meaning:"attractiveness,charm"
      },
      {
        word:"mystified",
        meaning:"confused,not able to understand"
      },
      {
        word:"retrenchment",
        meaning:"the reduction of costs or spending in response to economic difficulty."
      },
      {
        word:"facade",
        meaning:"a deceptive outward appearance,the front side of a building"
      },
      {
        word:"critique",
        meaning:"detailed analysis of something "
      },
      {
        word:"valiant",
        meaning:"with courage and determination"
      },
      {
        word:"accentuate",
        meaning:"make more prominent and noticeable"
      },
      {
        word:"guarded",
        meaning:"cautious"
      },
      {
        word:"contemplation",
        meaning:"thoughful examination of something for a long time"
      },
      {
        word:"disenchantment",
        meaning:"disappointment"
      },
      {
        word:"felicity",
        meaning:"intense happiness,eloquence"
      },
      {
        word:"technocracy",
        meaning:"control of something by technical experts"
      },
      {
        word:"spurred",
        meaning:"encourage,stimulate,cause something to happen"
      },
      {
        word:"stifle",
        meaning:"suffocate,choak,restrain,suppress"
      },
      {
        word:"pronouncement",
        meaning:"declaration,announcement"
      },
      {
        word:"repentant",
        meaning:"showing remorse or regret"
      },
      {
        word:"adulation",
        meaning:"excess admiration or praise"
      },
      {
        word:"unabashedly",
        meaning:"without embarrasment or shame"
      },
      {
        word:"rebutt",
        meaning:"deny,disprove,refute,counter"
      },
      {
        word:"intractable",
        meaning:"hard to control or deal with"
      },
      {
        word:"belittle",
        meaning:"dimiss as unimportant,derogartory"
      },
      {
        word:"obtrude",
        meaning:"force or impose in unpleasant way"
      },
      {
        word:"snob",
        meaning:"someone who wants to be powerful so that he can become haughty"
      },
      {
        word:"stray",
        meaning:"wander aimlessly"
      },
      {
        word:"paltry",
        meaning:"very small,meager,trivial"
      },
      {
        word:"ensue",
        meaning:"happen or occur later as a result"
      },
      {
        word:"allude",
        meaning:"hint at something ,suggest indirectly"
      },
      {
        word:"gloat",
        meaning:"delight in ones own success or others misfortune"
      },
      {
        word:"derision",
        meaning:"contempt,ridicule or mockery"
      },
      {
        word:"synthesis",
        meaning:"the combination of components or elements to form a connected whole."
      },
      {
        word:"fervour",
        meaning:"intense and passionate feeling "
      },
      {
        word:"recaptitulate",
        meaning:"summarize"
      },
      {
        word:"apparent",
        meaning:"clear,obvious,ostensible"
      },
      {
        word:"ostensible",
        meaning:"something that seems true but not necessarily is"
      },
      {
        word:"triumph",
        meaning:"a great victory or success"
      },
      {
        word:"disgorge",
        meaning:"pour out"
      },
      {
        word:"unsightly",
        meaning:"unpleasant"
      },
      {
        word:"forefeited",
        meaning:"lose or be deprived of (property or a right or privilege) as a penalty for wrongdoing,surrender,giveup"
      },
      {
        word:"luddite",
        meaning:"a person opposed to new technology and new ways of workings"
      },
      {
        word:"inventory",
        meaning:"list,catalogue,record"
      },
      {
        word:"indolence",
        meaning:"unable or aviodance of activity,weak,indolence"
      },
      {
        word:"Denigrate",
        meaning:"criticize unfairly,disparage"
      },
      {
        word:"scrupulous",
        meaning:"dont with greate care and effort,having sense of right or wrong"
      },
      {
        word:"poignant",
        meaning:"emotionally touching"
      },
      {
        word:"disseminate",
        meaning:"cause to become widely known"
      },
      {
        word:"demure",
        meaning:"modest and shy"
      },
      {
        word:"vicarious",
        meaning:"experienced in the imagination through the feelings or actions of another person."
      },
      {
        word:"errant",
        meaning:"wandering,not sticking to circumscribed path"
      },
      {
        word:"extenuate",
        meaning:"make less guilty and more foregiveable"
      },
      {
        word:"inclement",
        meaning:"used of persons or behaviour"
      },
      {
        word:"moot",
        meaning:"open to argument or debate,irrelevant"
      },
      {
        word:"deter",
        meaning:"prevent,oppose"
      },
      {
        word:"genteel",
        meaning:"refinement in manners or taste"
      },
      {
        word:"placid",
        meaning:"not easily irritated or disturbed"
      },
      {
        word:"squander",
        meaning:"waste money time opportunity "
      },
      {
        word:"connive",
        meaning:"take part in immoral and unethical plots"
      },
      {
        word:"tact",
        meaning:"skillfull in dealing with others"
      },
      {
        word:"besiege",
        meaning:"harass with questions or requests,cause to feel worried or distressed"
      },
      {
        word:"vanquish",
        meaning:"defeat someone"
      },
      {
        word:"factitious",
        meaning:"artificial,not natural"
      },
      {
        word:"venial",
        meaning:"excusable,pardonable"
      },
      
      {
        word:"derelict",
        meaning:"not doing ones duties"
      },
      
      {
        word:"solecism",
        meaning:"socially awkward tactless act"
      },
      
      {
        word:"dispensation",
        meaning:"exemption from a rule or obligation"
      },
      
      {
        word:"invidious",
        meaning:"likely to cause resentment"
      },
      
      {
        word:"temptestuous",
        meaning:"highly energetic, wildly fluctuating"
      },
      
      {
        word:"decry",
        meaning:"express disapproval"
      },
      
      {
        word:"imperious",
        meaning:"arrogant,haughty"
      },
      
      {
        word:"untrammeled",
        meaning:"not confined or limited"
      },
      
      {
        word:"ineffable",
        meaning:"inexpressable,too sacred to say something"
      },
      
      {
        word:"artifice",
        meaning:"cunning tricks used to decieve others"
      },
      
      {
        word:"doughty",
        meaning:"brave,bold"
      },
      
      {
        word:"blithe",
        meaning:"indifferent"
      },
      
      {
        word:"gaffe",
        meaning:"something that causes embarrassment"
      },
      
      {
        word:"recalcitrant",
        meaning:"stubborn,uncooperative,intractable"
      },
      
      {
        word:"untoward",
        meaning:"unexpected and inappropriate"
      },
      
      {
        word:"draconian",
        meaning:"harsh or severe"
      },
      
      {
        word:"conflate",
        meaning:"combine into one"
      },
      
      {
        word:"undistinguished",
        meaning:"unexceptional"
      },
      
      {
        word:"acquaint",
        meaning:"make someone aware of or familiar with"
      },
      
      {
        word:"tangent",
        meaning:"a completely different line of though or action"
      },
      
      {
        word:"relentless",
        meaning:"intense,persistent"
      },
      
      {
        word:"expedite",
        meaning:"speed up,hurry"
      },
      
      {
        word:"impersonality",
        meaning:"absence of human traits"
      },
      
      {
        word:"astute",
        meaning:"having or showing an ability to accurately assess situations or people and turn this to one's advantage."
      },
      
      {
        word:"intercept",
        meaning:"obstruct"
      },
      {
        word:"contentment",
        meaning:"happiness or satisfaction"
      },
      {
        word:"parallel",
        meaning:"similar,analogous,resemblance"
      },
      {
        word:"unfounded",
        meaning:"having no foundation,baseless,groundless"
      },
      {
        word:"disjunction",
        meaning:"a lack of correspondence or consistency."
      },
      {
        word:"sophisticated",
        meaning:"having great experience and knowledge of fashion and culture,developed to a high degree of complexity(advance,complex)"
      },
      {
        word:"tentative",
        meaning:"not certain or fixed,provisional"
      },
      {
        word:"mellow",
        meaning:"dulcet"
      },
      {
        word:"inertia",
        meaning:"a tendency to do nothing or to remain unchanged"
      },
      {
        word:"multitudinous",
        meaning:"large in number"
      },
      {
        word:"dignitary",
        meaning:"a person considered to be important because of high rank or office."
      },
      {
        word:"revile",
        meaning:"criticize"
      },
      {
        word:"haitus",
        meaning:"a pause or break in continuity in a sequence or activity."
      },
      {
        word:"disoriented",
        meaning:"confused,perplexed,bewildered"
      },
      {
        word:"dehumanize",
        meaning:"deprive of positive human qualities."
      },
      {
        word:"despise",
        meaning:"detest,hate"
      },
      {
        word:"dandle",
        meaning:"move (a baby or young child) up and down in a playful or affectionate way."
      },
      {
        word:"abhorred",
        meaning:"regard with disgust and hatred."
      },
      {
        word:"dogma",
        meaning:"set of beliefs"
      },
      {
        word:"understated",
        meaning:"presented in subtle but effective way"
      },
      {
        word:"heretical",
        meaning:"dissenting,unorthodox"
      },
      {
        word:"extraneous",
        meaning:"irrelevant"
      },
      {
        word:"extirpate",
        meaning:"root up cause,destroy"
      },
      {
        word:"overt",
        meaning:"done or shown openly; plainly apparent."
      },
      {
        word:"orthodox",
        meaning:"excessively conforming to believes and rules of a religion"
      },
      {
        word:"lunatic",
        meaning:"mentally ill person,madman"
      },
      {
        word:"bourgeois",
        meaning:"characteristic of middle class person"
      },
      {
        word:"rapaciuos",
        meaning:"greedy"
      },
      {
        word:"scurrilous",
        meaning:"abusive,harming someones reputation"
      },
      {
        word:"skinflint",
        meaning:"a person who spends as little money as possible; a miser."
      },
      {
        word:"caparison",
        meaning:"decorated"
      },
      {
        word:"ablate",
        meaning:"gradually remove,erode"
      },
      {
        word:"pejuries",
        meaning:"deliberately making false statement"
      },
      {
        word:"temporal",
        meaning:"secular,relating to time"
      },
      {
        word:"worldly",
        meaning:"experienced and sophisticated"
      },
      {
        word:"subjective",
        meaning:"the quality of being based on or influenced by personal feelings, tastes, or opinions,biased"
      },
      {
        word:"objective",
        meaning:"not influenced by personal feelings or opinions in considering and representing facts"
      },
      {
        word:"overwrought",
        meaning:"anxiety,nervous but excited,too elaborate in design"
      },
      {
        word:"derelict",
        meaning:"very poor condition and neglected,not doing ones duties"
      },
      {
        word:"endorse",
        meaning:"declare ones public approval or support of, sign "
      },
      {
        word:"chronicle",
        meaning:"a record of something , to write down or document "
      },
      {
        word:"chronic",
        meaning:"long lasting and recurring, of very poor quality"
      },
      {
        word:"surrogate",
        meaning:"substitute"
      },
      {
        word:"paranoid",
        meaning:"overly suspicious or anxious"
      },
      {
        word:"monomia",
        meaning:"fixate"
      },
      {
        word:"milestone",
        meaning:"a significant stage or event in the development of something."
      },
      {
        word:"bereft",
        meaning:"deprived or lacking, sad and longing"
      },
      {
        word:"epitome",
        meaning:"perfect example of something ,summary of written material"
      },
      {
        word:"expediency",
        meaning:"convinient but improper or immoral"
      },
      {
        word:"rationalize",
        meaning:"justify,defend"
      },
      {
        word:"senesence",
        meaning:"detoriation with age"
      },
      {
        word:"sensuous",
        meaning:"aesthetically pleasing"
      },
      {
        word:"insincere",
        meaning:"not genuine,fake"
      },
      {
        word:"dismay",
        meaning:"concern and distress caused by something unexpected."
      },
      {
        word:"stave off",
        meaning:"avert or delay something bad or dangerous"
      },
      {
        word:"dweller",
        meaning:"a person or animal that lives in or at a specified place."
      },
      {
        word:"edifice",
        meaning:"a large buildling , a complex set of beliefs"
      },
      {
        word:"august",
        meaning:"respected and impressive."
      },
      {
        word:"motif",
        meaning:"design,theme"
      },
      {
        word:"maladaptive",
        meaning:"unable to adapt"
      },
      {
        word:"dire",
        meaning:"serious,urgent,very poor quality"
      },
      {
        word:"thewy",
        meaning:"sinewy"
      },
         
      {
        word:"entreaty",
        meaning:"an earnest or humble request."
      },
      {
        word:"pnematic",
        meaning:"something that uses high pressured gas"
      },
      {
        word:"flocculent",
        meaning:"resembling clumps of wool"
      },
      {
        word:"atrophied",
        meaning:"lost effectiveness due to neglect,wasted,rudimentary"
      },
      {
        word:"recreant",
        meaning:"cowardly,unfaithful"
      },
      {
        word:"assent",
        meaning:"expression of approval or agreement , opposite of dissent"
      },
      {
        word:"prognosis",
        meaning:"forecast, prediction"
      },
      {
        word:"impulsive",
        meaning:"impetuously,spontaneous"
      },
      {
        word:"jaded",
        meaning:"bored or lacking enthusiasm, typically after having had too much of something."
      },
      {
        word:"peurile",
        meaning:"childish"
      },
      {
        word:"impoverished",
        meaning:"made poor"
      },
      {
        word:"inimical,baleful",
        meaning:"harmful,hostile,unfriendly"
      },
      {
        word:"decadent",
        meaning:"moral or cultural decline"
      },
      {
        word:"paroxsym",
        meaning:"sudden attack"
      },
      {
        word:"spectre",
        meaning:"ghost,phantom"
      },
      {
        word:"conviction",
        meaning:"convict,a belief or opinion"
      },
      {
        word:"ascertain",
        meaning:"find out"
      },
      {
        word:"interpolate",
        meaning:"insert,introduce"
      },
      {
        word:"fortuitous",
        meaning:"happening by chance,unexpected and unintentional"
      },
      {
        word:"opportunism",
        meaning:"the taking of opportunities as and when they arise"
      },
      {
        word:"precedence",
        meaning:"the condition of being considered more important than someone or something else; priority in importance, order, or rank."
      },
      {
        word:"conscience",
        meaning:"moral sense of right and wrong"
      },
      {
        word:"bungling",
        meaning:"incompetent,clumsy"
      },
      {
        word:"beholden",
        meaning:"indebted"
      },
      {
        word:"surmount",
        meaning:"overcome,conquer,be on top of"
      },
      {
        word:"nonetheless",
        meaning:"insipte of that"
      },
      {
        word:"impudence",
        meaning:"impertinence,insolence"
      },
      {
        word:"brazen",
        meaning:"bold without shame"
      },
      {
        word:"antiquity",
        meaning:"ancient times ,age "
      },
      {
        word:"circumstantial",
        meaning:"indirectly pointing towards something , detailed description"
      },
      {
        word:"impediment",
        meaning:"impedence"
      },
      {
        word:"befriend",
        meaning:"become friend"
      },
      {
        word:"quirkness",
        meaning:"eccentric and unconventional"
      },
      {
        word:"passable",
        meaning:"just good enough to be acceptable"
      },
      {
        word:"uncharacteristical",
        meaning:"exceptional"
      },
      {
        word:"imploring",
        meaning:"making an earnest or desperate appeal"
      },
      {
        word:"whines",
        meaning:"cry,moan"
      },
      {
        word:"brevity",
        meaning:"concise"
      },
      
      {
        word:"ponder",
        meaning:"think about carefully"
      },
      {
        word:"wheedling",
        meaning:"using flattery or coaxing in order to persuade someone to do something or give one something."
      },
     
      {
        word:"verbose",
        meaning:"concise"
      },
     
      {
        word:"rightist",
        meaning:"a person who supports the political views or policies of the right."
      },
      {
        word:"averse",
        meaning:"opposed to,against"
      },
      {
        word:"conservative",
        meaning:"averse to change or innovation and holding traditional values,traditional,orthodox"
      },
      {
        word:"improbable",
        meaning:"unlikely to happen"
      },
      {
        word:"naivety",
        meaning:"lack of experience or judgement"
      },
      {
        word:"insular",
        meaning:"narrow-minded"
      },
      {
        word:"unpretentous",
        meaning:"not attempting to impress others,modest,unaffected"
      },
      {
        word:"defiance",
        meaning:"resistance,opposition"
      },
      {
        word:"coeval",
        meaning:"having the same age or origin"
      },
      {
        word:"slighted",
        meaning:"insult by not giving attention"
      },
      {
        word:"narcissism",
        meaning:"self-admiration"
      },
      {
        word:"levied",
        meaning:"levy"
      },
      {
        word:"lament",
        meaning:"express sorrow,mourning,regret"
      },
      {
        word:"abrasive",
        meaning:"capable of polishing,showing little concern,harsh"
      },
      {
        word:"blight",
        meaning:"have detrimental effect on, infect"
      },
      {
        word:"reckoning",
        meaning:"calculating or estimating something,venegance"
      },
      {
        word:"fitfully",
        meaning:"intermittently"
      },
      {
        word:"settled",
        meaning:"resolve or reach an agreement"
      },
      {
        word:"slander",
        meaning:"defamematory,caluminious"
      },
      {
        word:"dispense",
        meaning:"distribute,provide,do without,get rid of"
      },
      {
        word:"contravene",
        meaning:"break,breach,violate"
      },
      {
        word:"pilfer",
        meaning:"steal"
      },
      {
        word:"circuitous",
        meaning:"longer than the most direct way."
      },
      {
        word:"underhand",
        meaning:"dishonest"
      },
      {
        word:"devious",
        meaning:"deceit,dishonestly achieve goals,circuitous"
      },
      {
        word:"prerogative",
        meaning:"a right or privilege exclusive to a particular individual or class."
      },
      {
        word:"premature",
        meaning:"too early"
      },
      {
        word:"burlesque",
        meaning:"travesty"
      },
      {
        word:"prodigy",
        meaning:"a young person with exceptional qualities or abilities."
      },
      {
        word:"assimilate",
        meaning:"understand,equate something to other"
      },
      {
        word:"juvenile",
        meaning:"young,immature"
      },
      {
        word:"rift",
        meaning:"a break in friendly relations"
      },
      {
        word:"billow",
        meaning:"swell out"
      },
      {
        word:"ratify",
        meaning:"approve something"
      },
      {
        word:"brood",
        meaning:"young,progeny,worry or complain"
      },
      {
        word:"defer",
        meaning:"postpone"
      },
      {
        word:"sententious",
        meaning:"moralizing"
      },
      {
        word:"moralize",
        meaning:"comment on issue of right and wrong"
      },
      {
        word:"jaundiced",
        meaning:"pale due to sickness(sallow),bitterness,hostility,envy,resentful"
      },
      {
        word:"pander",
        meaning:"indulge(do something for pleasure)"
      },
      {
        word:"repose",
        meaning:"relaxed,tranquility"
      },
      {
        word:"emendation",
        meaning:"correction,rectification "
      },
      {
        word:"incriminate",
        meaning:"blame,accuse"
      },
      {
        word:"lest",
        meaning:"for fear that,used to say that you do not want something to happen"
      },
      {
        word:"appropriate",
        meaning:"give or take something forcefully,devote,allocate,assign"
      },
      {
        word:"emetic",
        meaning:"causing vomitting"
      },
      {
        word:"obscene",
        meaning:"pornographic"
      },
      {
        word:"latent",
        meaning:"present but not yet developed"
      },
      {
        word:"meek",
        meaning:"quite,gentle,submissive  "
      },
      {
        word:"commodious",
        meaning:"roomy and comfortable."
      },
      {
        word:"churl",
        meaning:"rude and self centered,peasant"
      },
      {
        word:"ditinguished",
        meaning:"emminent,famous,renowned"
      },
      {
        word:"tedious",
        meaning:"dull,uninteresting,monotonous"
      },
      {
        word:"effected",
        meaning:"cause to happen"
      },
      {
        word:"discount",
        meaning:"pay no attention to"
      },
      {
        word:"scrutinize",
        meaning:"examine carefully"
      },
      {
        word:"discourse",
        meaning:"discussion,conversation,speak or write authoritatively about a topic"
      },
      {
        word:"authoritatively",
        meaning:"in a way that is trusted as being accurate or true; with authority"
      },
      {
        word:"emipircial",
        meaning:"based on observation"
      },
      {
        word:"allegiance",
        meaning:"loyalty"
      },
      {
        word:"curb",
        meaning:"keep a check or restrain"
      },
      {
        word:"vivid",
        meaning:"producing strong feelings,clear images in the mind"
      },
      {
        word:"thrive",
        meaning:"flourish,prosper"
      },
      {
        word:"niche",
        meaning:"ideal position"
      },
      {
        word:"formidable",
        meaning:"intimidating,redoubtable,threatening"
      },
      {
        word:"pedagological",
        meaning:"relating to teaching"
      },
      {
        word:"hitherto",
        meaning:"previously"
      },
      {
        word:"encroachment",
        meaning:"intrusion on a person's territory, rights, tresspassing,invasion"
      },
      {
        word:"abound",
        meaning:"exist in large numbers"
      },
      {
        word:"vacilliation",
        meaning:"decessiveness"
      },
      {
        word:"commensurable",
        meaning:"measurable by some standard"
      },
      {
        word:"undue",
        meaning:"excessive,extreme"
      },
      {
        word:"abbreviate",
        meaning:"shortened,cut"
      },
      {
        word:"forebear",
        meaning:"abstain,refrain"
      },
      {
        word:"nothing if not",
        meaning:"very,above all"
      },
      {
        word:"authorative",
        meaning:"realiable,dependable,unwarranteed power"
      },
      {
        word:"relish",
        meaning:"take pleasure,enjoy"
      },
      {
        word:"spirited",
        meaning:"full of energy,enthusiasm and determination"
      },
      {
        word:"empirical",
        meaning:"based on observation"
      },
      {
        word:"upkeep",
        meaning:"maintainance,repair"
      },
      {
        word:"clihce",
        meaning:"platitude"
      },
      {
        word:"eclipse",
        meaning:"block,obscure,hide"
      },
      {
        word:"fungible",
        meaning:"replacable by another item"
      },
      {
        word:"specious",
        meaning:"plausible but false"
      },
      {
        word:"offset",
        meaning:"couterbalance"
      },
      {
        word:"mirthful",
        meaning:"amusing,high spirited"
      },
      {
        word:"reminiscent",
        meaning:"reminding of something, resemeblance"
      },
      {
        word:"stern",
        meaning:"serious,strict,severe"
      },
      {
        word:"affirm",
        meaning:"declare"
      },
      {
        word:"dispel",
        meaning:"eliminate,dismiss"
      },
      {
        word:"captivate",
        meaning:"attract and hold the attention of"
      },
      {
        word:"parody",
        meaning:"satire"
      },
      {
        word:"surreptitiuos",
        meaning:"secret,stealthy"
      },
      {
        word:"envy",
        meaning:"jealousy"
      },
      {
        word:"churlish",
        meaning:"rude,ill mannered"
      },
      {
        word:"cagey",
        meaning:"guarded,reticent"
      },
      {
        word:"importuante",
        meaning:"beg persistently"
      },
      {
        word:"commence",
        meaning:"begin"
      },
      {
        word:"dampen",
        meaning:"make less intense"
      },
      {
        word:"surge",
        meaning:"sudden increase"
      },
      {
        word:"slackened",
        meaning:"reduce in speed or intensity"
      },
      {
        word:"divisive",
        meaning:"causing disagreement and hostility between people"
      },
      {
        word:"perceptible",
        meaning:"noticable,perceiveable,detectable"
      },
      {
        word:"megalomanic",
        meaning:"obsessed with power"
      },
      {
        word:"histrionic",
        meaning:"dramatic"
      },
      {
        word:"authoritarian",
        meaning:"didactic,despotic"
      },
      {
        word:"futile",
        meaning:"pointless or useless"
      },
      {
        word:"extraneous",
        meaning:"irrelevant,external"
      },
      {
        word:"animate",
        meaning:"bring to life"
      },
      {
        word:"presume",
        meaning:"assume,arrogant,impertinenet"
      },
      {
        word:"foster",
        meaning:"encourage the development of"
      },
      {
        word:"catalogue",
        meaning:"systematize"
      },
      {
        word:"scrutinize",
        meaning:"inspect"
      },
      {
        word:"discretion",
        meaning:"caution,freedom of choice"
      },
      {
        word:"potency",
        meaning:"power,strength"
      },
      {
        word:"exhilarating",
        meaning:"elating"
      },
      {
        word:"subordinate",
        meaning:"lower rank or position,follower"
      },
      {
        word:"obeisance",
        meaning:"respect"
      },
      {
        word:"abnegation",
        meaning:"rejection,refusal,self-denial"
      },
      {
        word:"lull",
        meaning:"soothe,quiet,calm"
      },
      {
        word:"gratify",
        meaning:"please"
      },
      {
        word:"entice",
        meaning:"tempt by charm"
      },
      {
        word:"exhaustive",
        meaning:"comprehensive"
      },
      {
        word:"overbearing",
        meaning:"domineering"
      },
      {
        word:"collegiality",
        meaning:"cooperation"
      },
      {
        word:"snyopsis",
        meaning:"summary"
      },
      {
        word:"awry",
        meaning:"wrong,unsual"
      },
      {
        word:"customary",
        meaning:"usual,conventional"
      },
      {
        word:"remuneration",
        meaning:"payment"
      },
      {
        word:"ingenious",
        meaning:"inventive,creative"
      },
      {
        word:"unassuming",
        meaning:"not pretentuous,modest"
      },
      {
        word:"unwieldy",
        meaning:"difficult to move because of its size, shape, or weight."
      },
      {
        word:"snag",
        meaning:"obstacle,difficulty"
      },
      {
        word:"prospect",
        meaning:"hope,likelihood"
      },
      {
        word:"upshot",
        meaning:"result,consequence"
      },
      {
        word:"seldom",
        meaning:"rare"
      },
      {
        word:"sluggish",
        meaning:"slow moving or inactive"
      },
      {
        word:"fanciful",
        meaning:"overly imaginative,unrealistic,elaborate in design"
      },
      {
        word:"bar",
        meaning:"prohibit,preclude"
      },
      {
        word:"somnolent",
        meaning:"sleepy"
      },
      {
        word:"slumbered",
        meaning:"sleepy"
      },
      {
        word:"diplomacy",
        meaning:"tact"
      },
      {
        word:"proselytize",
        meaning:"convert or attempt to convert (someone) from one religion, belief, or opinion to another."
      },
      {
        word:"profane",
        meaning:"irreverent,secular"
      },
      {
        word:"shackle",
        meaning:"fetter"
      },
      {
        word:"counterpart",
        meaning:"equivalent,parallel,complement"
      },
      {
        word:"perversion",
        meaning:"distortion,misinterpretation,misrepresentation,sexual behaviour that is considered abnormal and unacceptable."
      },
      {
        word:"dormat",
        meaning:"sleepy"
      },
      {
        word:"inert",
        meaning:"inactivity"
      },
      {
        word:"invariable",
        meaning:"always"
      },
      {
        word:"aver",
        meaning:"state or assert to be the case"
      },
      {
        word:"avow",
        meaning:"assert,declare"
      },
      {
        word:"elusive",
        meaning:"difficult to find catch or achieve"
      },
      {
        word:"parity",
        meaning:"equality"
      },
      {
        word:"rheotric",
        meaning:"oratory,eloquence,bombastic"
      },
      {
        word:"spurn",
        meaning:"refuse,decline,reject"
      },
      {
        word:"disdain",
        meaning:"feeling that someone is unworthy of consideration or respect"
      },
      {
        word:"devour",
        meaning:"eat hungrily or quickly"
      },
      {
        word:"measured",
        meaning:"regular,steady,guarded,restrained"
      },
      {
        word:"sketchy",
        meaning:"not thorough or detailed"
      },
      {
        word:"promulgate",
        meaning:"cause to become widely known"
      },
      {
        word:"ethos",
        meaning:"spirit,character,atmosphere"
      },
      {
        word:"prudence",
        meaning:"good judgement,cautious"
      },
      {
        word:"diverting",
        meaning:"entertaining,amusing"
      },
      {
        word:"erudite",
        meaning:"having or showing great knowledge or learning"
      },
      {
        word:"defy",
        meaning:"disobey,go against,challange"
      },
      {
        word:"roil",
        meaning:"turbid and muddy"
      },
      {
        word:"outlandish",
        meaning:"bizzare,alien,foreign"
      },
      {
        word:"intangible",
        meaning:"unable to felt by touch,untouchable,not having physical existence,impalpable"
      },
      {
        word:"mitigate",
        meaning:"alleviate"
      },
      {
        word:"haphazard",
        meaning:"random,lacking organization"
      },
      {
        word:"homogenous,heterogenous",
        meaning:"same in kind , different in kind"
      },
      {
        word:"disclaim",
        meaning:"deny"
      },
      
    ],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  });

  useEffect(() => {
    if (localStorage.getItem("levelData")) {
      setLevelData(JSON.parse(localStorage.getItem("levelData")));
    }
  }, []);

  const [level, setLevel] = useState(0);

  const reduceLevel = (level, idx) => {
    let item = levelData[level][idx];
    let temp = { ...levelData };
    temp[level].splice(idx, 1);
    temp[level - 1].push(item);
    setLevelData(temp);
    localStorage.setItem("levelData", JSON.stringify(temp));
  };

  const increaseLevel = (level, idx) => {
    let item = levelData[level][idx];
    let temp = { ...levelData };
    temp[level].splice(idx, 1);
    temp[level + 1].push(item);
    setLevelData(temp);
    localStorage.setItem("levelData", JSON.stringify(temp));
  };

  const [disabled, setDisabled] = useState(true);

  const handleReset = () => {
    if (!disabled) {
      localStorage.removeItem("levelData");
    } else setDisabled(false);
  };

  return (
    <div className="App">
      <ButtonGroup variant="contained">
        <Button onClick={() => setLevel(level - 1)``}>-</Button>
        <Button>{level}</Button>
        <Button onClick={() => setLevel(level + 1)}>+</Button>
        <Button onClick={handleReset} disabled={disabled}>
          Reset
        </Button>
        <Button onClick={handleReset}>Enable iReset</Button>
      </ButtonGroup>
      {levelData[level].map((i, idx) => (
        <Accordion sx={{ color: "white", background: "black" }}>
          <AccordionSummary>
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {i.word}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{i.meaning}</Typography>
            <hr />
            <ButtonGroup variant="contained">
              <Button onClick={() => reduceLevel(level, idx)}>-</Button>
              <Button>{level}</Button>
              <Button onClick={() => increaseLevel(level, idx)}>+</Button>
            </ButtonGroup>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
    
  );  
}

export default App;
