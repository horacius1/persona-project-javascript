import User from "./User.js";

const rules = {
	title: {
		type: "string",
	},
	lessons: {
		type: "number",
	},
	description: {
		type: "string",
	},
};

class Subject extends User {
	constructor(data) {
		super(rules, data);
	}
}

export default Subject;
