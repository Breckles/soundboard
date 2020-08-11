export class SoundItem {
  constructor(
    private _source: string,
    private _speaker: string,
    private _audioPath: string,
    private _imagePath: string
  ) {}

  public get imagePath(): string {
    return this._imagePath;
  }
  public get audioPath(): string {
    return this._audioPath;
  }
  public get speaker(): string {
    return this._speaker;
  }
  public get source(): string {
    return this._source;
  }
}
