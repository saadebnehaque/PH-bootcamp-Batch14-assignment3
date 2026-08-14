# Javascript Problem Solving Assignment (ES6)

## Assignment 3



## Important Instructions

- The function name must not be changed. You must use the exact function name provided in each problem - no other names or renaming are permitted.
- The function must return a value using the `return` statement. Using only `console.log()` is not sufficient; if the required value is not returned, the solution will not be considered correct, even if the logic is valid.
- All logic and variables must be written inside the function. No variables may be declared outside the function (globally).
- Carefully read each problem, understand the logic, and then write your code accordingly.
- Return exactly what is specified in the problem statement. Do not return any additional data - returning incorrect values, even with correct logic, will result in no marks.
- This document is the final authority. In case of any confusion, follow this document.
- No assistance from ChatGPT, other AI tools, or friends is allowed. If our AI extension detects your function as AI-generated, you will receive a zero on the assignment.

---

## Hidden Test Case

Your solution will be tested not only against the sample test cases shown here but also against additional hidden test cases.

---

# Problem 1 — Student Introduction Generator

### Function Name Must Be: `studentIntroduction`

An online learning platform wants to generate an introduction message after a new student registration.

### Input

The function will receive an **object** as input.

**Example:**

```javascript
{
  name: "Rafi",
  age: 18,
  course: "JavaScript"
}
````

### Output

It must return a message using **template literals**.

**Example:**

```text
My name is Rafi. I am 18 years old. I am learning JavaScript.
```

### Challenge

Return `"Invalid"` if:

* The input is not an object, or
* The object does not contain the `name`, `age`, or `course` properties.

### Starter Code

```javascript
function studentIntroduction(student) {
  // Write your code here
}
```

### Sample Test Cases

| Input                                      | Output                                                          |
| ------------------------------------------ | --------------------------------------------------------------- |
| `{name:"Rafi",age:18,course:"JavaScript"}` | `My name is Rafi. I am 18 years old. I am learning JavaScript.` |
| `{}`                                       | `Invalid`                                                       |
| `"student"`                                | `Invalid`                                                       |

---

# Problem 2 — Active User Filter

### Function Name Must Be: `filterActiveUsers`

A social media platform needs to check the status of its users.

The user list is provided as an array of objects.

The function must return an array containing only the users whose `isActive` property is `true`.

### Input

An array of objects, where each object contains `name` and `isActive` properties.

**Example:**

```javascript
[
  { name: "A", isActive: true },
  { name: "B", isActive: false }
]
```

### Output

Return an array containing only the users with `isActive: true`.

**Example:**

```javascript
[
  { name: "A", isActive: true }
]
```

### Challenge

Return `"Invalid"` if:

* The input is not an array.
* The array is empty.
* An object does not have the `isActive` property.

### Tips

Try using the `filter()` method.

### Starter Code

```javascript
function filterActiveUsers(users) {
  // Write your code here
}
```

### Sample Test Cases

| Input                                                  | Output                       |
| ------------------------------------------------------ | ---------------------------- |
| `[{name:"A",isActive:true},{name:"B",isActive:false}]` | `[{name:"A",isActive:true}]` |
| `[]`                                                   | `Invalid`                    |
| `[{name:"A"}]`                                         | `Invalid`                    |
| `"users"`                                              | `Invalid`                    |

---

# Problem 3 — Trending Hashtag Counter

### Function Name Must Be: `countHashtags`

Clipzy is a short-video app popular among Gen Z. It wants to determine how "trend-friendly" a caption is by counting the hashtags in it and finding the longest hashtag.

Each hashtag is a word that starts with the `#` symbol.

Your task is to write a function that scans a caption string and returns the total number of hashtags and the longest hashtag (without the `#` symbol).

### Input

A string, `caption`, for example:

```text
Loving this weather today #sunny #vibes #weekend
```

### Output

An Object with the shape:

```javascript
{
  hashtagCount: Number,
  longestTag: String
}
```

* `hashtagCount` → Total number of words that start with `#`.
* `longestTag` → The text of the longest hashtag, without the `#` symbol.
* If multiple hashtags have the same length, return the one that appears first.
* If there are no hashtags, `longestTag` should be an empty string (`""`).

### Challenge

Return `"Invalid"` if the input is not a string.

### Tips

Use `split(" ")` to divide the caption into words, then check each word using `startsWith("#")`.

### Starter Code

```javascript
function countHashtags(caption) {
  // Write your code here
}
```

### Test Cases

| Input                                                | Output                                       |
| ---------------------------------------------------- | -------------------------------------------- |
| `"Loving this weather today #sunny #vibes #weekend"` | `{ hashtagCount: 3, longestTag: "weekend" }` |
| `"No hashtags here"`                                 | `{ hashtagCount: 0, longestTag: "" }`        |
| `"#ai #ml data science"`                             | `{ hashtagCount: 2, longestTag: "ai" }`      |
| `123`                                                | `Invalid`                                    |
| `["#fun"]`                                           | `Invalid`                                    |

---

# Problem 4 — Bonus Score Calculator

### Function Name Must Be: `bonusScore`

In a programming contest, each participant's score is provided as an **array of numbers**.

After the contest ends, **10 bonus marks** will be added to each participant's score.

The function must then **return the total sum of all updated scores**.

### Input

An array of numbers, for example:

```javascript
[80, 65, 90, 75]
```

### Output

```text
350
```

### Explanation

Updated Scores:

```javascript
[90, 75, 100, 85]
```

Total:

```text
90 + 75 + 100 + 85 = 350
```

### Challenge

Return `"Invalid"` if:

* The input is not an array.
* The array is empty.
* The array contains any data type other than numbers.

### Tips

You can use `map()` and `reduce()` to solve this problem.

### Starter Code

```javascript
function bonusScore(scores) {
  // Write your code here
}
```

### Sample Test Cases

| Input              | Output    |
| ------------------ | --------- |
| `[80, 65, 90, 75]` | `350`     |
| `[100]`            | `110`     |
| `[0, 10]`          | `30`      |
| `[]`               | `Invalid` |
| `"scores"`         | `Invalid` |
| `[80, "90", 70]`   | `Invalid` |

---

# Problem 5 — Debugging Challenge: AI Leaderboard Generator

### Function Name Must Be: `generateLeaderboard`

Programming Hero's new AI Coding Arena has thousands of students solving problems every day.

At the end of the day, an AI Leaderboard Engine generates a list of top performers.

### Rules

The rules are very simple:

* Only students with a **score of 70 or above** will be on the leaderboard.
* Each qualified student's name must be converted to **UPPERCASE**.
* Only the **top 3 students** will be displayed on the leaderboard.

However, there is a problem.

A junior developer rushed and wrote the entire function but made many mistakes while trying to use ES6 features.

Your task is to find and fix all the bugs.

### Input

An array of objects, for example:

```javascript
[
  { name: "Rafi", score: 90 },
  { name: "Sadia", score: 65 },
  { name: "Karim", score: 85 },
  { name: "Nafis", score: 75 }
]
```

### Output

An array, for example:

```javascript
["RAFI", "KARIM", "NAFIS"]
```

### Challenge

After fixing the bugs, the function must also handle the following:

* Return `"Invalid"` if the input is not an array.
* Return `"Invalid"` if the array is empty.
* Return `"Invalid"` if any object is missing the `name` or `score` property.
* Return `"Invalid"` if the score is not a number.

### Buggy Code

```javascript
/* Find and fix every bug. Do not change the function name. */

function generateLeaderboard(students) {
  if (!Array.isArray = students) {
    return "Invalid";
  }

  if (students.length == []) {
    return "Invalid";
  }

  const qualified = students.filter(student => {
    student.score > 70;
  });

  const names = qualified.map(({ name }) => {
    name.toUpperCase();
  });

  return names.slice(0, 2);
}
```

### Tips

This function has **more than 8 bugs**.

Carefully check:

* Is `Array.isArray()` used correctly?
* Is the empty array check correct?
* Does the `filter()` callback return anything?
* Are scores being filtered correctly according to the condition?
* Does the `map()` callback return anything?
* Is the result of `toUpperCase()` being returned?
* How many elements is `slice()` taking?
* Is validation complete?

### Important Note

The final array does **not** need to be sorted.

### Sample Test Cases

| Input                                                                                              | Output                     |
| -------------------------------------------------------------------------------------------------- | -------------------------- |
| `[{name:"Rafi",score:90},{name:"Sadia",score:65},{name:"Karim",score:85},{name:"Nafis",score:75}]` | `["RAFI","KARIM","NAFIS"]` |
| `[{name:"A",score:70},{name:"B",score:71}]`                                                        | `["A","B"]`                |
| `[]`                                                                                               | `Invalid`                  |
| `"students"`                                                                                       | `Invalid`                  |
| `[{name:"Rafi"}]`                                                                                  | `Invalid`                  |
| `[{name:"Rafi",score:"90"}]`                                                                       | `Invalid`                  |


