function studentIntroduction(student) {
    if (typeof student !== 'object' ||
        student === null ||
        !('name' in student) ||
        !('age' in student) ||
        !('course' in student)
    ) {
        return "Invalid";
    }

    const { name, age, course } = student;
    return `My name is ${name}. I am ${age} years old. I am learning ${course}.`

}