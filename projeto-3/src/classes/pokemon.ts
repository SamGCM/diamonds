export class Pokemon {

    constructor (
        private id: number,
        private name: string,
        private base_experience: number,
        private height: number,
        private weight: number,
        private legendary: boolean,
        private firstAppearance: Date,
        private abilities: string[],
        private stats: TStat[]
    ) {}

    get getId(): number {
        return this.id;
    }

    get getName(): string {
        return this.name
    }

    set setName(name: string) {
        this.name = name
    }

    get getBaseExp(): number {
        return this.base_experience
    }

    set setBaseExp(exp: number) {
        this.base_experience = exp
    }

    get getHeight(): number {
        return this.height
    }

    set setHeight(height: number) {
        this.height = height
    }

    get getWeight(): number {
        return this.weight
    }

    set setWeight(weight: number) {
        this.weight = weight
    }

    get getLegendary(): boolean {
        return this.legendary
    }

    get getFirstAppearance(): string {
        return this.firstAppearance.toLocaleString("pt-br")
    }

    get getAbilities(): string[] {
        return this.abilities
    }

    set setAbilities(abilities: string[]) {
        this.abilities = abilities
    }

    get getStats(): TStat[] {
        return this.stats
    }

    addStat(newStat: TStat) {
        let stats = this.stats
        stats.push(newStat)

        this.stats = stats

        return this.stats;
    }

    removeStat(statName: string): TStat[] {
        let stats = this.stats
        let newStats = stats.filter((stat) => {
            if(stat.stat !== statName) {
                return stat
            }
        })

        this.stats = newStats

        return this.stats;
    }

}

type TStat = {
    base_stat: number,
    stat: string
}

type TPokemon = {
    id: number,
    name: string,
    base_experience: number,
    height: number,
    weight: number,
    legendary: boolean,
    firstAppearance: Date,
    abilities: string[],
    stats: TStat[]
}