export class Country {

    constructor(
        private name: TName,
        private independent: boolean,
        private unMember: boolean,
        private capital: string,
        private region: string,
        private subregion: string,
        private languages: string[],
        private latlng: number[],
        private borders: string[],
        private area: number,
        private population: number,
        private timezones: string[],
        private flags: TFlags
    ) {}
    
    get getName(): TName {
        return this.name
    }

    set setName(value: TName) {
        this.name = value
    }

    get getIndependent(): boolean {
        return this.independent
    }
    
    set setIndependent(value: boolean) {
        this.independent = value
    }

    get getUnMember(): boolean {
        return this.unMember
    }

    set setUnMember(value: boolean) {
        this.unMember = value
    }

    get getCapital(): string {
        return this.capital
    }

    set setCapital(value: string) {
        this.capital = value
    }

    get getRegion(): string {
        return this.region
    }

    set setRegion(value: string) {
        this.region = value
    }

    get getSubregion(): string {
        return this.subregion
    }

    set setSubregion(value: string) {
        this.subregion = value
    }
    
    get getLanguages(): string[] {
        return this.languages
    }

    set setLanguages(value: string[]) {
        this.languages = value
    }

    get getLatlng(): number[] {
        return this.latlng
    }

    set setLatlng(value: number[]) {
        this.latlng = value
    }

    get getBorders(): string[] {
        return this.borders
    }

    set setBorders(value: string[]) {
        this.borders = value
    }

    get getArea(): number {
        return this.area
    }

    set setArea(value: number) {
        this.area = value
    }

    get getPopulation(): number {
        return this.population
    }

    set setPopulation(value: number) {
        this.population = value
    }

    get getTimezones(): string[] {
        return this.timezones
    }

    set setTimezones(value: string[]) {
        this.timezones = value
    }

    get getFlags(): TFlags {
        return this.flags
    }

    set setFlags(value: TFlags) {
        this.flags = value
    }
}

type TName = {
    common: string,
    official: string,
}

type TFlags = {
    png: string,
    svg: string
}