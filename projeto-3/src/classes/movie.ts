
export class Movie {

    constructor (
        private id: number,
        private adult: boolean,
        private backdrop_path: string,
        private original_language: string,
        private original_title: string,
        private overview: string,
        private popularity: number,
        private poster_path: string,
        private release_date: Date,
        private title: string,
        private video: boolean,
        private vote_average: number,
        private vote_count: number,
    ) {}

    get getId(): number {
        return this.id;
    }

    get getAdult(): boolean {
        return this.adult;
    }

    get getBackdropPath(): string {
        return this.backdrop_path;
    }

    set setBackdropPath(newPath: string) {
        this.backdrop_path = newPath;
    }

    get getOriginalLanguage(): string {
        return this.original_language;
    }

    set setOriginalLanguage(value: string) {
        this.original_language = value;
    }

    get getOriginalTitle(): string {
        return this.original_title;
    }

    set setOriginalTitle(value: string) {
        this.original_title = value;
    }

    get getOverview(): string {
        return this.overview;
    }
    
    set setOverview(value: string) {
        this.overview = value;
    }

    get getPopularity(): number {
        return this.popularity;
    }

    set setPopularity(value: number) {
        this.popularity = value;
    }

    get getPosterPath(): string {
        return this.poster_path;
    }

    set setPosterPath(value: string) {
        this.poster_path = value;
    }

    get getReleaseDate(): Date {
        return this.release_date;
    }

    set setReleaseDate(value: string) {
        this.release_date = new Date(value);
    }

    get getTitle(): string {
        return this.title;
    }
    
    set setTitle(value: string) {
        this.title = value;
    }

    get getVideo(): boolean {
        return this.video;
    }

    set setVideo(value: boolean) {
        this.video = value;
    }

    get getVoteAverage(): number {
        return this.vote_average;
    }

    set setVoteAverage(value: number) {
        this.vote_average = value;
    }

    get getVote_count(): number {
        return this.vote_count;
    }

    set setVote_count(value: number) {
        this.vote_count = value;
    }

}