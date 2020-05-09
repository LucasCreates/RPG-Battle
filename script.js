const Player = {
    health: 100,
    mana: 100,
    inventory: [],
    gold: 50,
    power: 50,
    exp: 0,
    maxExp: 200

}

// select DOM
let menu = document.querySelector(".item-magic-special-menu-container");
let playerAttack = document.querySelector(".attack-btn");
let itemBtn = document.querySelector(".item-btn");

itemBtn.addEventListener("click", menuFn)


// let playerPower = Player.power;
console.log("Player's Power: " + Player.power)
console.log(Player.inventory);

let power = Player.power; 
let isMenuShow = false;
function menuFn(){
    
    if(isMenuShow === true){
        menu.style.display = "none";
        isMenuShow = false;
    }
    else{
        menu.style.display = "flex"
        isMenuShow = true;
    }
   


}   


function enemyHealth(){
    const enemyHealthArray = [100, 150];
    for(let i = 0; i < enemyHealthArray.length; i++ ){
       var setEnemyHealth = enemyHealthArray[Math.floor(Math.random() * enemyHealthArray.length)]   
    }
    displayEnemyHealth = document.getElementById("enemy-health");
    displayEnemyHealth.textContent = setEnemyHealth;
    return displayEnemyHealth;
}



function playerAttackFn(){
   var isBattleOver = false;
  
   console.log("Players new power" + power)
   let enemyHealthDisplay = document.getElementById("enemy-health");
   
   if(!isBattleOver){
    
        enemyHealthDisplay.textContent -= power;
        if( enemyHealthDisplay.textContent <= 0){
            enemyHealthDisplay.textContent = 0;
            console.log("You have defeated the enemy")
            Player.power += 10;
            console.log("Players incremented power " + Player.power)
            endBattleDisplay("winner");
            isBattleOver = true;
            console.log(isBattleOver, enemyHealthDisplay.textContent)
        }
        
         
   }
   
}

function endBattleDisplay(message){
    // if battle is won
    //display winner window
    // show loot and add loot to an inventory array 
    document.querySelector(".battle-win-display").style.display = "flex";
    switch (message){
        case "winner":
            lootReward();
            break;
        case "lose":
            console.log("You lose");    
    }

    //if lose
    //display text
    //return home and ( start a new battle )
}


function lootReward(getLoot){
    let lootSet = document.querySelectorAll(".loot-set");
    let weapons = ["Iron Sword", "Steel Sword", "Bound Iron Sword", "Elven Sword", "Fire Sword", "Thunder Sword"];
    let setWeapon = weapons[Math.floor(Math.random() * weapons.length)];
    let potions = ["Potion", "Super Potion", "Mana Potion", "Elixir"];
    let setPotion = potions[Math.floor(Math.random() * potions.length)];
    let loot = ["Iron Ingot", "Wolf Skin", "Rusty Coin", "Magic Talisman", "Charm Pendent", "Quartz", "Topez", "Basic Ring","Silver Ring", "Silver Ingot", "Bone Fragment","Ogre Tooth", "Ruby", "Archeum Seal"];
    let setLoot = loot[Math.floor(Math.random() * loot.length)];
   

    let mainLootArray = [setWeapon, setPotion, setLoot, setLoot, setPotion];
    let randomizeLoot = mainLootArray[Math.floor(Math.random() * mainLootArray.length)];
    let randomizeLoot2 = mainLootArray[Math.floor(Math.random() * mainLootArray.length)];
    let randomizeLoot3 = mainLootArray[Math.floor(Math.random() * mainLootArray.length)];
    console.log("Random all loot " + randomizeLoot);
    // lootSet[0].textContent = randomizeLoot;
    // lootSet[1].textContent = randomizeLoot2;
    // lootSet[2].textContent = randomizeLoot3;



    const giveLootRandomCounter = Math.floor(Math.random() * 20) + 1;
    console.log(giveLootRandomCounter)
    if(giveLootRandomCounter <= 10){
        lootSet[2].textContent = setLoot;
        Player.inventory.push(setLoot);
        console.log("Current " + Player.inventory)
    }
    else if(giveLootRandomCounter > 10 && giveLootRandomCounter <= 17){
        lootSet[2].textContent = setLoot;
        lootSet[1].textContent = setPotion;
        Player.inventory.push(setLoot, setPotion);
        console.log("Current " + Player.inventory)
    }
    else {
        lootSet[2].textContent = setLoot;
        lootSet[1].textContent = setPotion;
        lootSet[0].textContent = setWeapon;
        Player.inventory.push(setLoot, setPotion, setWeapon);
        console.log("Current " + Player.inventory)

    }
   
    
    
    
    // Player.inventory.push(randomizeLoot, randomizeLoot2, randomizeLoot3) 
    // console.log("Show Player's Inventory: "  + Player.inventory)
  
   
    // document.querySelector(".battle-win-display").textContent = loot;
    
};



lootReward();
console.log("Player's Power: " + power)
console.log("Player's Inventory: " + Player.inventory)




enemyHealth();


    








function startGame(){
    let startBtn = document.querySelector(".start-btn")
    startBtn.addEventListener("click", startMenu);

    function startMenu(){
        document.querySelector(".start-menu-container").style.display = "none";
   
    }


};


playerAttack.addEventListener("click", playerAttackFn);
// startGame()