import UsersMap from "./UsersMap.js";
import Pupil from "./Pupil.js";

class Pupils extends UsersMap {
	constructor() {
		super();
	}

	add(data) {
		const pupil = new Pupil(data);
		super.add(pupil);
		return pupil;
	}
}

export default Pupils;
