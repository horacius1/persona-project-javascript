function verifyProps(rules, data) {
	for (let entry of Object.entries(rules)) {
		if (entry[1].required && !data[entry[0]]) {
			throw new Error(`${entry[0]} is required`);
		} else if (!data[entry[0]]) {
			continue;
		} else if (entry[1].type === "array" ? data[entry[0]].constructor !== Array : typeof data[entry[0]] !== entry[1].type) {
			throw new Error(`${entry[0]} must be type of ${entry[1].type}`);
		} else if (entry[1].customValidator) {
			const result = entry[1].customValidator(data[entry[0]]);
			if (!result.passed) {
				throw new Error(result.error);
			}
		}

		if (entry[1].type === "object") {
			verifyProps(entry[1].children, data[entry[0]]);
		} else if (data[entry[0]].constructor === Array) {
			for (let item of data[entry[0]]) {
				verifyProps(entry[1].children, item);
			}
		}
	}
}

export default verifyProps;
