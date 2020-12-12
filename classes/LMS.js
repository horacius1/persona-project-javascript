import UsersMap from "./UsersMap.js";

class LMS extends UsersMap {
	constructor() {
		super();
	}

	readAll() {
		const database = Array.from(this.database.entries()).map((keyVal) => {
			return {
				...keyVal[1],
				id: keyVal[0],
			};
		});
		return database;
	}

	verify({ id }) {
		return this.database.has(id);
	}

	remove(subject) {
		return super.remove(subject.id);
	}
}

export default LMS;
