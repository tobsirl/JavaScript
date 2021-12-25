var deepJS = {
  currentEnrollment: [],
  studentRecords: [],

  addStudent(id, name, paid) {
    studentRecords.push({ id, name, paid });
  },

  enrollStudent(id) {
    if (!currentEnrollment.includes(id)) {
      currentEnrollment.push(id);
    }
  },

  printCurrentEnrollment() {
    printRecords(currentEnrollment);
  },

  enrollPaidStudents() {
    currentEnrollment = paidStudentsToEnroll();
    printCurrentEnrollment();
  },

  remindUnpaidStudents() {
    remindUnpaid(currentEnrollment);
  },

  getStudentFromId(studentId) {
    return studentRecords.find(matchId);

    // *************************

    function matchId(record) {
      return record.id == studentId;
    }
  },

  printRecords(recordIds) {
    var records = recordIds.map(getStudentFromId);

    records.sort(sortByNameAsc);

    records.forEach(printRecord);
  },

  sortByNameAsc(record1, record2) {
    if (record1.name < record2.name) return -1;
    else if (record1.name > record2.name) return 1;
    else return 0;
  },

  printRecord(record) {
    console.log(
      `${record.name} (${record.id}): ${record.paid ? 'Paid' : 'Not Paid'}`
    );
  },

  paidStudentsToEnroll() {
    var recordsToEnroll = studentRecords.filter(needToEnroll);

    var idsToEnroll = recordsToEnroll.map(getStudentId);

    return [...currentEnrollment, ...idsToEnroll];
  },

  needToEnroll(record) {
    return record.paid && !currentEnrollment.includes(record.id);
  },

  getStudentId(record) {
    return record.id;
  },

  remindUnpaid(recordIds) {
    var unpaidIds = recordIds.filter(notYetPaid);

    printRecords(unpaidIds);
  },

  notYetPaid(studentId) {
    var record = getStudentFromId(studentId);
    return !record.paid;
  },
};

deepJS.addStudent(311, 'Frank', /*paid=*/ true);
deepJS.addStudent(410, 'Suzy', /*paid=*/ true);
deepJS.addStudent(709, 'Brian', /*paid=*/ false);
deepJS.addStudent(105, 'Henry', /*paid=*/ false);
deepJS.addStudent(502, 'Mary', /*paid=*/ true);
deepJS.addStudent(664, 'Bob', /*paid=*/ false);
deepJS.addStudent(250, 'Peter', /*paid=*/ true);
deepJS.addStudent(375, 'Sarah', /*paid=*/ true);
deepJS.addStudent(867, 'Greg', /*paid=*/ false);

deepJS.enrollStudent(410);
deepJS.enrollStudent(105);
deepJS.enrollStudent(664);
deepJS.enrollStudent(375);

deepJS.printCurrentEnrollment();
console.log('----');
deepJS.enrollPaidStudents();
console.log('----');
deepJS.remindUnpaidStudents();

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/

// ********************************

function defineWorkshop() {
  var publicAPI = {
    addStudent,
    enrollStudent,
    printCurrentEnrollment,
    enrollPaidStudents,
    remindUnpaidStudents,
  };
  return publicAPI;

  // ********************************
}
