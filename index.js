import characterData from './data.js'
import Character from './Character.js'

let monstersArray = ["orc", "demon", "goblin", "ogre", "werewolf", "hobgoblin"]
let isWaiting = false

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

// Wizard section
function spell() {
    if(!isWaiting){
        hero.setDiceHtml()
        monster.setDiceHtml()
        hero.takeDamage5(monster.currentDiceScore)
        monster.takeDamage2(hero.currentDiceScore)
        hero.manaUsage(hero.currentDiceScore)
        render()
        if (hero.mana <= 3) {
          document.getElementById("info-section").innerHTML = "Out of mana!"  
        }
        if(hero.dead){
            endGame()
        }
        else if(monster.dead){
            isWaiting = true
            if(monstersArray.length > 0){
                setTimeout(()=>{
                    monster = getNewMonster()
                    render()
                    isWaiting = false
                },1500)
            }
            else{
                endGame()
            }
            }
    }
} 

function attack() {
    if(!isWaiting){
        hero.setDiceHtml()
        monster.setDiceHtml()
        if (hero.health >= 30) {
          hero.takeDamage(monster.currentDiceScore)  
        } else {
          hero.takeDamage5(monster.currentDiceScore)
          document.getElementById("info-section").innerHTML = "Mana Shield active! Damage reduced by 10"  
          hero.manaUsage(monster.currentDiceScore)
        } if (hero.health <= 18) {
          hero.takeDamage6(monster.currentDiceScore)
        } if (hero.mana <= 9) {
           hero.takeDamage(monster.currentDiceScore) 
        } if (hero.mana <= 40) {
            hero.manaGain(hero.currentDiceScore)
        }
        
        monster.takeDamage(hero.currentDiceScore)
        render()
        if(hero.dead){
            endGame()
        }
        else if(monster.dead){
            isWaiting = true
            if(monstersArray.length > 0){
                setTimeout(()=>{
                    monster = getNewMonster()
                    render()
                    isWaiting = false
                },1500)
            }
            else{
                endGame()
            }
        }    
    }
}

function endGame() {
    isWaiting = true
    const endMessage = hero.health === 0 && monster.health === 0 ?
        "Darkness envelopes the land..." :
        hero.health > 0 ? "The Hero Wins! All through the land peace has been restored." :
            "The monsters are Victorious. Darkness envelopes the land..."

    const endEmoji = hero.health > 0 ? "🔮" : "☠️"
        setTimeout(()=>{
            document.body.innerHTML = `
                <div class="end-game">
                    <h2>Go again?</h2> 
                    <h3>${endMessage}</h3>
                    <p class="end-emoji">${endEmoji}</p>
                </div>
                `
        }, 1500)
}


// Knight section
function attack2() {
    if(!isWaiting){
        hero2.setDiceHtml()
        monster.setDiceHtml()
        if (hero2.health >= 60) {
          hero2.takeDamage(monster.currentDiceScore)  
        } else {
          hero2.takeDamage3(monster.currentDiceScore)
        }
        if (hero2.health <= 60) {
  document.getElementById("info-section").innerHTML = 
  "Ardent Defender! Damage reduced by 6!"  
        }
        if (hero2.health >= 45) {
          monster.takeDamage(hero2.currentDiceScore)  
        } else {
          monster.takeDamage4(hero2.currentDiceScore)
          document.getElementById("info-section").innerHTML = "Heroic Strike! Damage increased by 10"  
        }
        
        render2()
        
        if(hero2.dead){
            endGame2()
        }
        else if(monster.dead){
            isWaiting = true
            if(monstersArray.length > 0){
                setTimeout(()=>{
                    monster = getNewMonster()
                    render2()
                    isWaiting = false
                },1500)
            }
            else{
                endGame2()
            }
        }    
    }
}

function endGame2() {
    isWaiting = true
    const endMessage = hero2.health === 0 && monster.health === 0 ?
        "Darkness envelopes the land..." :
        hero2.health > 0 ? "The Hero Wins! All through the land peace has been restored." :
            "The monsters are Victorious. Darkness envelopes the land..."

    const endEmoji = hero2.health > 0 ? "🔮" : "☠️"
        setTimeout(()=>{
            document.body.innerHTML = `
                <div class="end-game">
                    <h2>Go again?</h2> 
                    <h3>${endMessage}</h3>
                    <p class="end-emoji">${endEmoji}</p>
                </div>
                `
        }, 1500)
}
// why won't these buttons be removed if I delete this code? I am trying to have the start 
// screen without these attack buttons but cannot figure it out.
document.getElementById("attack-button").addEventListener('click', attack)
document.getElementById("attack-button2").addEventListener('click', attack2)
document.getElementById("spell-button").addEventListener('click', function(){
    if (hero.mana >= 3){
        return spell()
    } 
})

let hero = new Character(characterData.hero)
let hero2 = new Character(characterData.hero2)
let monster = getNewMonster()

function render() {
    document.getElementById('hero').innerHTML = hero.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}
   
function render2() {
    document.getElementById('hero2').innerHTML = hero2.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}   


const wizardHero = document.getElementById('wizard').addEventListener('click', function(){  
    document.getElementById('hero').innerHTML = hero.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
    const audioObj = new Audio("/audio/songOfWolves.mp3");
        audioObj.play();
    document.getElementById("wizard").remove()
    document.getElementById("knight").remove()
    document.getElementById("attack-button2").remove()
    document.getElementById("info-section").innerHTML = ''
})

const knightHero = document.getElementById('knight').addEventListener('click', function(){
    document.getElementById('hero2').innerHTML = hero2.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
    const audioObj = new Audio("/audio/songOfWolves.mp3");
        audioObj.play();
    document.getElementById("wizard").remove()
    document.getElementById("knight").remove()
    document.getElementById("spell-button").remove()
    document.getElementById("attack-button").remove()
    document.getElementById("info-section").innerHTML = ''
})

function beginScreen(){
   document.getElementById("info-section").innerHTML = "Choose your hero:" 
   
} 
beginScreen()




