class UsersMap {
	constructor() {
		this.database = new Map();
	}

	add(data) {
		this.database.set(data.id, data);
		return data.id;
	}

	read(id) {
		if (this.database.has(id)) {
			return this.database.get(id);
		} else {
			return null;
		}
	}

	update(id, updatedValues) {
		if (this.database.has(id)) {
			const user = this.database.get(id);
			user.update(updatedValues);
			this.database.set(id, user);
			return id;
		}
	}

	remove(id) {
		const hasBeenDeleted = this.database.delete(id);
		if (hasBeenDeleted) {
			return true;
		} else {
			return false;
		}
	}

	readAll() {
		return Array.from(this.database.values());
	}
}

export default UsersMap;
