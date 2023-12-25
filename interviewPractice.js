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

// function leftJoinByKey(list1, list2, sharedKey, keyToAdd) {
//     let hashTable = {}
//     let results = []

//     for (let row of list2) {
//         hashTable[row[sharedKey]] = row
//     }

//     for(let row of list1){
//         if(row[sharedKey] in hashTable){
//             results.push({...row, [keyToAdd]:hashTable[row[sharedKey]] })
//         }
//     }


//     // console.log('results:', results);
//     return results;
// }

// function leftJoinByKey(list1, list2, sharedKey, keyToAdd) {
//     let hashTable = {};
//     let results = [];

//     // Populate hashTable with arrays for each key from list1
//     for (let row of list1) {
//         if (!hashTable[row[sharedKey]]) {
//             hashTable[row[sharedKey]] = [];
//         }
//         hashTable[row[sharedKey]].push(row);
//     }

//     // Iterate over list2 and perform the left join
//     for (let row of list2) {
//         if (row[sharedKey] in hashTable) {
//             results.push(...hashTable[row[sharedKey]].map(entry => ({ ...entry, [keyToAdd]: row[keyToAdd] })));
//         }
//     }

//     // console.log('results:', results);
//     return results;
// }


function joinWithHash(list1,list2,sharedKey, additionalKey){
    let hashMap = {}    
    let results = []
    
    for(let row of list1){
        if( !hashMap[row[sharedKey]] ){
            hashMap[row[sharedKey]] = []
        }
        hashMap[row[sharedKey]].push(row);
    }
    
    
    for(let row of list2){
        if(row[sharedKey] in hashMap){
            results.push(...hashMap[row[sharedKey]].map((entry) => ({...entry, [additionalKey]: row[additionalKey] })))
        }
    }
    
    
    return results
    
}
console.log(joinWithHash(courses, departments, 'dept_id', 'department_name'));