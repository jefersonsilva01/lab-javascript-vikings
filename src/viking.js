// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  };

  receiveDamage(damage) {
    this.health -= damage;
  };
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  };

  receiveDamage(damage) {
    this.health -= damage;

    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`
  };

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;

    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : `A Saxon has died in combat`
  };
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    let status = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].strength);

    if (this.saxonArmy[saxonIndex].health <= 0) this.saxonArmy.splice(saxonIndex, 1);

    return status;
  };

  saxonAttack() {
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    let status = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].strength);

    if (this.vikingArmy[vikingIndex].health <= 0) this.vikingArmy.splice(vikingIndex, 1);

    return status;
  };

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    };
  };
};
