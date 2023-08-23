export class Category {
  constructor(
    public staticImg: string,
    public gifImg: string,
    public title: string,
    public href?: string,
  ){}

  public hover(): string {
    return this.gifImg
  }

  public over(): string {
    return this.staticImg
  }
}
