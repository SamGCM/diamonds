"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPokemon = void 0;
class CPokemon {
    constructor(id, name, base_experience, height, weight, legendary, firstAppearance, abilities, stats) {
        this.id = id;
        this.name = name;
        this.base_experience = base_experience;
        this.height = height;
        this.weight = weight;
        this.legendary = legendary;
        this.firstAppearance = firstAppearance;
        this.abilities = abilities;
        this.stats = stats;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get getBaseExp() {
        return this.base_experience;
    }
    set setBaseExp(exp) {
        this.base_experience = exp;
    }
    get getHeight() {
        return this.height;
    }
    set setHeight(height) {
        this.height = height;
    }
    get getWeight() {
        return this.weight;
    }
    set setWeight(weight) {
        this.weight = weight;
    }
    get getLegendary() {
        return this.legendary;
    }
    get getFirstAppearance() {
        return this.firstAppearance.toLocaleString("pt-br");
    }
    get getAbilities() {
        return this.abilities;
    }
    set setAbilities(abilities) {
        this.abilities = abilities;
    }
    get getStats() {
        return this.stats;
    }
    addStat(newStat) {
        let stats = this.stats;
        stats.push(newStat);
        this.stats = stats;
        return this.stats;
    }
    removeStat(statName) {
        let stats = this.stats;
        let newStats = stats.filter((stat) => {
            if (stat.stat !== statName) {
                return stat;
            }
        });
        this.stats = newStats;
        return this.stats;
    }
}
exports.CPokemon = CPokemon;
