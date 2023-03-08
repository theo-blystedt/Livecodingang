export class Courses{
  constructor(private _cCode: string, private _cName: string, private _cCredits: number) {

  }



  get cName(): string {
    return this._cName;
  }

  set cName(value: string) {
    this._cName = value;
  }

  get cCredits(): number {
    return this._cCredits;
  }

  set cCredits(value: number) {
    this._cCredits = value;
  }

  get cCode(): string {
    return this._cCode;
  }

  set cCode(value: string) {
    this._cCode = value;
  }
}
