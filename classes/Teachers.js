import UsersMap from "./UsersMap.js";
import Teacher from "./Teacher.js";

class Teachers extends UsersMap {
	constructor() {
		super();
	}

	add(data) {
		const teacher = new Teacher(data);
		return super.add(teacher);
	}
}

export default Teachers;
