import Subject from "./classes/Subject.js";
import LMS from "./classes/LMS.js";
import Teachers from "./classes/Teachers.js";
import Pupils from "./classes/Pupils.js";
import Groups from "./classes/Groups.js";
import Gradebooks from "./classes/Gradebooks.js";

const history = new Subject({
	title: "History",
	lessons: 24,
});

// will return subjectID
// history.id

const lms = new LMS();
lms.remove(history);
lms.add(history);

// "will return true or false. Answer will be true if we added this subject to lms"
lms.verify(history);

// will return array of registered subjects
lms.readAll();

// Create new Teacher from Teacher's data
const teacherData = {
	name: {
		first: "string",
		last: "string",
	},
	image: "string",
	dateOfBirth: "12/10/2000", // format date
	emails: [
		{
			email: "string",
			primary: true,
		},
	],
	phones: [
		{
			phone: "string",
			primary: true,
		},
	],
	sex: "male", // male or female
	subjects: [
		{
			subject: "string",
		},
	],
	description: "string",
};
const teachers = new Teachers();

// Create a new teacher
var teacherId = teachers.add(teacherData);

// will return Teachers data including teacher's id
teachers.read(teacherId);

// will update Teacher. This method should use the same validation as a constructor method
const updatedTeacherProfile = {
	name: {
		first: "updated",
		last: "string",
	},
	image: "string",
	dateOfBirth: "12/10/2000", // format date
	emails: [
		{
			email: "string",
			primary: true,
		},
	],
	phones: [
		{
			phone: "string",
			primary: true,
		},
	],
	sex: "male", // male or female
	subjects: [
		{
			subject: "string",
		},
	],
	description: "string",
};
var teacherId = teachers.update(teacherId, updatedTeacherProfile);

// will remove teacher
// teachers.remove(teacherId);

const pupilData = {
	name: {
		first: "string",
		last: "string",
	},
	image: "string",
	dateOfBirth: "12/10/2000", // format date
	phones: [
		{
			phone: "string",
			primary: true,
		},
	],
	sex: "male", // male OR female
	description: "string",
};
// all fields are required, except description

// Create new Pupil from Pupil's data
const pupils = new Pupils();

// Create a new pupil
var pupil = pupils.add(pupilData);

// will return Pupils data including pupil's id
pupils.read(pupil.id);

const updatedPupilProfile = {
	name: {
		first: "Oliver",
		last: "string",
	},
	image: "test",
	dateOfBirth: "12/10/2000", // format date
	phones: [
		{
			phone: "string",
			primary: true,
		},
	],
	sex: "male", // male OR female
	description: "string",
};

// will update Pupil. This method should use the same validation as a constructor method
pupils.update(pupil.id, updatedPupilProfile);

// will remove pupil
pupils.remove(pupil.id);

const room = 236;
const groups = new Groups();

// Create a new group
const groupId = groups.add(room);

// Remove this pupil from this group
// groups.removePupil(groupId, pupil.id);

// Add this pupil to this group
pupil = groups.addPupil(groupId, pupil);

// Update room for this group
groups.update(groupId, {
	room: 237,
});

// Read information about group
groups.read(groupId);
{
	id: "JEF5H43H";
	room: 237;
}

// It will return array of groups
const group = groups.readAll()[0];

const pupilId = pupil.id;
const gradebooks = new Gradebooks(groups, teachers, lms);

// Create a new gradebook
const level = 1;
const gradebookId = gradebooks.add(level, group.id);

// Destroy all data inside this gradebook
// gradebooks.clear();

const record = {
	pupilId: pupilId,
	teacherId: teacherId,
	subjectId: history.id,
	lesson: 1,
	mark: 9,
};

gradebooks.addRecord(gradebookId, record);

// Read information about oliver results
const oliver = gradebooks.read(gradebookId, pupilId);
// console.log(oliver);
// {
//   name: 'Oliver Black',
//   records: [
//     {
//       teacher: 'Elizabeth Holms',
//       subject: 'History',
//       lesson: 1,
//       mark: 9
//     }
//   ]
// }

// Read information about all students in this gradebook
const students = gradebooks.readAll(gradebookId); // It will return the array of objects

console.log(students);
