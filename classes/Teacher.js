import User from "./User.js";

const rules = {
	name: {
		type: "object",
		required: true,
		children: {
			first: {
				type: "string",
				required: true,
			},
			last: {
				type: "string",
				required: true,
			},
		},
	},
	image: {
		type: "string",
		required: true,
	},
	dateOfBirth: {
		type: "string",
		required: true,
		customValidator: (val) => {
			const regex = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
			return {
				passed: regex.test(val),
				error: "dateOfBirth must be date format",
			};
		},
	}, // format date
	emails: {
		type: "array",
		required: true,
		children: {
			email: {
				type: "string",
				required: true,
			},
			primary: {
				type: "boolean",
				required: true,
			},
		},
	},
	phones: {
		type: "array",
		required: true,
		children: {
			phone: {
				type: "string",
				required: true,
			},
			primary: {
				type: "boolean",
				required: true,
			},
		},
	},
	sex: {
		type: "string",
		required: true,
		customValidator: (val) => {
			return {
				passed: val === "male" || val === "female",
				error: "sex must be either male or female",
			};
		},
	}, // male or female
	subjects: {
		type: "array",
		required: true,
		children: {
			subject: {
				type: "string",
				required: true,
			},
		},
	},
	description: {
		type: "string",
	},
};

class Teacher extends User {
	constructor(data) {
		super(rules, data);
	}
}

export default Teacher;
