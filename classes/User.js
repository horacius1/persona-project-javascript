import verifyProps from "../utils/verifyProps.js";

class User {
	constructor(rules, data) {
		this.rules = rules;
		this.verifyAndSetData(data);
		this.id = Symbol("id");
	}

	verifyAndSetData(data) {
		verifyProps(this.rules, data);
		for (let rule of Object.entries(this.rules)) {
			if (!!data[rule[0]]) {
				this[rule[0]] = data[rule[0]];
			}
		}
	}

	update(updatedValues) {
		this.verifyAndSetData(updatedValues);
	}
}

export default User;
