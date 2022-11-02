import { getDiceRollArray, getDicePlaceholderHtml, getPercentage, getPercentage2 } from './utils.js'

function Character(data) {
    Object.assign(this, data)
    this.maxHealth = this.health
    
    this.maxMana = this.mana
    
    this.spell = this.spell
    
    this.diceHtml = getDicePlaceholderHtml(this.diceCount)
    
    this.setDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceHtml = this.currentDiceScore.map((num) =>
            `<div class="dice">${num}</div>`).join("")
    }

    this.takeDamage = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }  
    }
     this.takeDamage2 = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore + 10
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
        
     }
     
      this.takeDamage3 = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore - 6
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
        
     }
     
     this.takeDamage4 = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore + 10
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
        
     }
     
     this.takeDamage5 = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore - 8
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
        
     }
     
     this.takeDamage6 = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore - 12
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
        
     }
     

  this.manaUsage = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.mana -= totalAttackScore
        if (this.mana <= 0) {
            this.manaOut = true
            this.mana = 0
        }
        
     }
     
      this.manaGain = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.mana -= totalAttackScore - 18
        if (this.mana <= 0) {
            this.manaOut = true
            this.mana = 0
        }
        
     }
    
    this.getHealthBarHtml = function () {
        const percent = getPercentage(this.health, this.maxHealth)
        return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                            style="width:${percent}%;">
                    </div>
                </div>`  
    }
    
    this.getManaBarHtml = function () {
        const percents = getPercentage2(this.mana, this.maxMana)
        return `<div class="mana-bar-outer">
                    <div class="mana-bar-inner ${percents < 26 ? "danger" : ""}" 
                            style="width:${percents}%;">
                    </div>
                </div>`  
    }
    

    this.getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount, diceHtml, mana } = this
        const healthBar = this.getHealthBarHtml()
        const manaBar = this.getManaBarHtml()
        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                ${healthBar}
                <div class="health">mana: <b> ${mana} </b></div>
                ${manaBar}
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>`
    }
}

export default Character