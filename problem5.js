/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }
    if (students.some(student => !('name' in student) || !('score' in student) || typeof student.score !== 'number')) {
        return 'Invalid';
    }
    const qualifieds = students.filter(student => student.score >= 70);

    const names = qualifieds.map(qualified => qualified.name.toUpperCase());

    return names
}