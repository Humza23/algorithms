let courses = [
	{
		course_id: 100,
		name: "English 1",
		codes: "EN1",
		dept_id: 12
	},
	{
		course_id: 101,
		name: "English 2",
		codes: "EN2",
		dept_id: 12
	},
	{
			course_id: 102,
			name: "Algebra 2",
			codes: "ALG2",
			dept_id: 14
	},
	{
			course_id: 103,
			name: "Computer Science",
			codes: "CS1",
			dept_id: 15
		},
]

let departments = [
	{
		dept_id: 12,
		department_name: "English Language Arts"
	},
	{
		dept_id: 14,
		department_name: "Math"
	},
	{
		dept_id: 15,
		department_name: "Technology"
	},
]

// # left join courses x departments on dept_id

courses_departments = [
	{
		course_id: 100,
		name: "English 1",
		codes: "EN1",
		dept_id: 12,
		department_name: "English Language Arts"
	},
	{
		course_id: 101,
		name: "English 2",
		codes: "EN2",
		dept_id: 12,
		department_name: "English Language Arts"
	},
	{
			course_id: 102,
			name: "Algebra 2",
			codes: "ALG2",
			dept_id: 14,
			department_name: "Math"
	},
	{
			course_id: 103,
			name: "Computer Science",
			codes: "CS1",
			dept_id: 15,
			department_name: "Technology"
		},
]

function leftJoinByKeyLoop(list1, list2, sharedKey, additionalKey) {
    let result = []
for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
        if (list2[j][sharedKey] === list1[i][sharedKey]) {
            result.push({ ...list1[i], [additionalKey]: list2[j][additionalKey] });
            break;
        }
    }
}
    return result
}

function leftJoinByKeyHash(list1, list2, sharedKey, additionalKey) {
    let result = [];

    let hashTable = {};
    for (let i = 0; i < list2.length; i++) {
        const key = list2[i][sharedKey];
        hashTable[key] = list2[i][additionalKey];
    }

    for (let i = 0; i < list1.length; i++) {
        const key = list1[i][sharedKey];
        const additionalInfo = hashTable[key] || ''; 
        result.push({ ...list1[i], [additionalKey]: additionalInfo });
    }

    return result;
}

function joinWithFirst(arg1,arg2,sharedKey){
    let coursesWithDepartments = arg1.map((course) => ({
        ...course,
        keyToAdd: (arg2.find(item => item[sharedKey] == course[sharedKey] || {}).department_name
        
    )}))
    return coursesWithDepartments;
}
// console.log(joinWithFirst(courses, departments, 'dept_id'))

console.log(leftJoinByKeyHash(courses, departments, 'dept_id', 'department_name'))
// console.log(leftJoinByKeyLoop(courses, departments, 'dept_id', 'department_name'))