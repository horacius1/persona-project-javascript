class Gradebook {
	constructor(level, groupId) {
		this.records = new Map();
		this.level = level;
		this.groupId = groupId;
		this.id = Symbol();
	}

	addRecord(record) {
		const uniqueId = Symbol("id");
		this.records.set(uniqueId, record);
		return uniqueId;
	}

	readRecordsOfPupil(pupilId) {
		return Array.from(this.records.values()).filter((record) => record.pupilId === pupilId);
	}
}

export default Gradebook;
