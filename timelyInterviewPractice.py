# left join 

def left_join_by_key(list1, list2, shared_key, additional_key):
    hash_map = {}

    # Build a dictionary for list1
    for row in list1:
        hash_map[row[shared_key]] = row

    # Perform left join
    results = []
    for row in list2:
        if row[shared_key] in hash_map:
            entry = hash_map[row[shared_key]].copy()
            entry[additional_key] = row[additional_key]
            results.append(entry)

    return results


courses = [
	{
		"course_id": 100,
		"name": "English 1",
		"codes": "EN1",
		"dept_id": 12
	},
	{
		"course_id": 101,
		"name": "English 2",
		"codes": "EN2",
		"dept_id": 12
	},
	{
			"course_id": 102,
			"name": "Algebra 2",
			"codes": "ALG2",
			"dept_id": 14
	},
	{
			"course_id": 103,
			"name": "Computer Science",
			"codes": "CS1",
			"dept_id": 15
		},
]

departments = [
	{
		"dept_id": 12,
		"department_name": "English Language Arts"
	},
	{
		"dept_id": 14,
		"department_name": "Math"
	},
	{
		"dept_id": 15,
		"department_name": "Technology"
	},
]

print(left_join_by_key(courses, departments, 'dept_id', 'department_name'))