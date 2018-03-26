class Unit {
  constructor(entity, properties = {}, uniqueID) {
    this.entity = `${entity} `;
    this._uniqueID = uniqueID;
    this.load(properties);
  }
  load(properties) {
    let p = Object.create(null);

    Object.keys(properties).forEach(value => {
      p[value] = properties[value];
    });
    this.properties = p;
    return this;
  }

  set(property, value) {
    Reflect.set(this.properties[property] = value);
  }

  unset(property) {
    Reflect.deleteProperty(this.properties[property]);
  }

  has(property) {
    // TODO: method to check if a property exists on the object
  }

  get(property) {
    // TODO: method to get a specific property from the object.
  }

  toString() {
    // TODO: stringify JSON
  }

  valueOf() {
    // TODO: get value of toString() method
  }

  toJSON() {
    // TODO: convert properties of class to json object.
  }
}

export default Unit;
