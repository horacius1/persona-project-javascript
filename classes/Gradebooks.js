import UsersMap from "./UsersMap.js";
import Gradebook from "./Gradebook.js";

class Groups extends UsersMap {
	constructor(groups, teachers, lms) {
		super();
		this.groups = groups;
		this.teachers = teachers;
		this.lms = lms;
	}

	add(level, groupId) {
		const gradebook = new Gradebook(level, groupId);
		return super.add(gradebook);
	}

	addRecord(gradebookId, record) {
		const gradebook = this.database.get(gradebookId);
		gradebook.addRecord(record);
		this.database.set(gradebookId, gradebook);
	}

	removePupil(groupId, pupil) {
		const group = this.database.get(groupId);
		group.removePupil(pupil);
		this.database.set(groupId, group);
	}

	read(gradebookId, pupilId) {
		const gradebook = super.read(gradebookId);
		const group = this.groups.read(gradebook.groupId);
		const pupil = group.readPupil(pupilId);
		var allRecordsOfPupil = gradebook.readRecordsOfPupil(pupilId);
		allRecordsOfPupil = allRecordsOfPupil.map((record) => {
			let teacher = this.teachers.read(record.teacherId);
			return {
				teacher: `${teacher.name.first} ${teacher.name.last}`,
				subject: this.lms.read(record.subjectId).title,
				lesson: record.lesson,
				mark: record.mark,
			};
		});
		const result = {
			name: `${pupil.name.first} ${pupil.name.last}`,
			records: allRecordsOfPupil,
		};
		return result;
	}

	readAll(gradebookId) {
		const gradebook = super.read(gradebookId);
		const group = this.groups.read(gradebook.groupId);
		const pupils = group.readAllPupils();
		const results = [];
		for (let pupil of pupils) {
			var allRecordsOfPupil = gradebook.readRecordsOfPupil(pupil.id);
			allRecordsOfPupil = allRecordsOfPupil.map((record) => {
				let teacher = this.teachers.read(record.teacherId);
				return {
					teacher: `${teacher.name.first} ${teacher.name.last}`,
					subject: this.lms.read(record.subjectId).title,
					lesson: record.lesson,
					mark: record.mark,
				};
			});
			results.push({
				name: `${pupil.name.first} ${pupil.name.last}`,
				records: allRecordsOfPupil,
			});
		}
		return results;
	}
}

export default Groups;
