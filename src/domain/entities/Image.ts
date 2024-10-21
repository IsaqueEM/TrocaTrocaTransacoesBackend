export class Image {
  private _imageId: number;
  private _image64: string;

  constructor(imageId: number, image64: string) {
    this._imageId = imageId;
    this._image64 = image64;
  }

  get imageId(): number {
    return this._imageId;
  }

  get image64(): string {
    return this._image64;
  }
}
