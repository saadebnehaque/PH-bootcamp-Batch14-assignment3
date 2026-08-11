//Problem-01: Student Introduction Generator

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

//Problem-02: Active User Filter

function filterActiveUsers(users) {

if (!Array.isArray(users) || users.length === 0) {

return 'Invalid'

}

if (users.some(user => !('name' in user) || !('isActive' in user))) {

return 'Invalid';

}

return users.filter(user => user.isActive)

}

//Problem-03: Trending Hashtag Counter

function countHashtags(caption) {

if (typeof caption !== 'string') {

return 'Invalid';

}

const words = caption.split(' ');

let hashtagCount = 0;

let longestTag = '';

for (const word of words) {

if (word.startsWith("#")) {

hashtagCount++;

const tag = word.slice(1)

if (tag.length > longestTag.length) {

longestTag = tag;

}

}

}

return { hashtagCount, longestTag }

}

//Problem-04: Bonus Score Calculator

function bonusScore(scores) {

if (!Array.isArray(scores) || scores.length === 0) {

return "Invalid";

}

if (scores.some(score => typeof score !== 'number')) {

return 'Invalid';

}

const updatedScore = scores.map(score => score + 10);

return updatedScore.reduce((total, score) => total + score, 0);

}

//Problem-05: Debugging Challenge - AI Leaderboard Generator

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