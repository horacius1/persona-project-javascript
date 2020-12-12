import Pupils from "./Pupils.js";

class Group {
	constructor(room) {
		this.pupils = new Pupils();
		this.room = room;
		this.id = Symbol("id");
	}

	addPupil(pupil) {
		return this.pupils.add(pupil);
	}

	removePupil(id) {
		this.pupils.remove(id);
	}

	readPupil(id) {
		return this.pupils.read(id);
	}

	update({ room }) {
		this.room = room;
	}

	readAllPupils() {
		return this.pupils.readAll();
	}
}

export default Group;
