/* eslint-disable class-methods-use-this */
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (typeof this.evacuationWarningMessage !== 'function'
      && this.constructor !== Building) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }

  get sqft() {
    return (this._sqft);
  }
}
