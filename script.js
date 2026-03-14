const bosses = {

dreglord:{

name:"Dreglord",

weaknesses:[
"Holy Damage",
"Lightning",
"Heavy stagger weapons"
],

weapons:[
"Blasphemous Blade",
"Sacred Relic Sword",
"Godslayer Greatsword"
]

},

balancers:{

name:"The Balancers",

weaknesses:[
"Bleed",
"Frost",
"Fast dex builds"
],

weapons:[
"Rivers of Blood",
"Moonveil",
"Dark Moon Greatsword"
]

}

};

function openBoss(boss){

document.getElementById("boss-guide").classList.remove("hidden");

document.getElementById("boss-name").innerText = bosses[boss].name;

const weakList = document.getElementById("weaknesses");
const weaponList = document.getElementById("weapons");

weakList.innerHTML="";
weaponList.innerHTML="";

bosses[boss].weaknesses.forEach(w=>{

let li=document.createElement("li");
li.innerText=w;
weakList.appendChild(li);

});

bosses[boss].weapons.forEach(w=>{

let li=document.createElement("li");
li.innerText=w;
weaponList.appendChild(li);

});

}

function showNormal(){

document.getElementById("normal").classList.remove("hidden");
document.getElementById("everdark").classList.add("hidden");

}

function showEverdark(){

document.getElementById("normal").classList.add("hidden");
document.getElementById("everdark").classList.remove("hidden");

}
