export class Task {
  public id!: number;
  public title: string;
  public description: string;
  public creationDate: Date;

  constructor(title: string, description: string, creationDate: Date) {
    this.id = Math.round(Math.random() * 1000);
    this.title = title;
    this.description = description;
    this.creationDate = creationDate;
  }
}
