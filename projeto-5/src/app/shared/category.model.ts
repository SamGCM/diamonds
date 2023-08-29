export class Category {
  constructor(
    public staticImg: string,
    public gifImg: string,
    public title: string,
    public category?: string,
  ){}

  public hover(): string {
    return this.gifImg
  }

  public over(): string {
    return this.staticImg
  }
}
