class Collection {
	constructor(name) {
		this._name = name;
		this._units = [];
		this._indices = Object.create(null);
		this._indicesList = [];
	}
    
	name() {
		return this._name;
	}
    
	indices() {
		return this._indices.slice();
	}
    
	toJSON() {
		return [this._name, this._indicesList.slice()];
	}
    
	createIndex(field) {
		return this.createIndex([field]);
	}
    
	createIndices(fieldList) {
		this._indicesList = this._indicesList.concat(fieldList);
		let indices = this._indices;
		let units = this._units;

		for(let i = 0, len = fieldList.length; i < len; i++ ) {
			let index = fieldList[i];
			let lookup = (indices[index] = Object.create(null));
			for (let u = 0, len = units.length; u < len; u++) {
				let unit = units[u];
				let id = unit.get(index);
				id && (lookup[id] = unit);
			}
		}
		return this;
	}
}

export default Collection;