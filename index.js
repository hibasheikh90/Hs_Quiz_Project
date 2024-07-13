import inquirer from "inquirer";
console.log(`Welcome To Hiba Sheikh Quiz Project`);
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q.1 what is typescript?",
        choices: ["String", "Software", "A superset of JavaScript", "Array"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q.2 which keyword is used to declare a variable in Typescript?",
        choices: ["ForEach", "If_Else", "Let", "None of the above"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q.3 what file extention is used for Typescript file?",
        choices: ["Js", "Ts", "txt", "html"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q.4 which brackets are used to create an Array in Typescript?",
        choices: ["{}-curly brackets", "[]-square-brackets", "()-round brackets"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q.5 what value can a Boolean type variable return in Typrscript?",
        choices: ["true and false", "yes Or no", "0 and 1"]
    },
]);
let score = 0;
switch (quiz.question_1) {
    case "A superset of JavaScript":
        console.log("1.Correct!");
        ++score;
        break;
    default:
        console.log("1.Incorrect");
}
switch (quiz.question_2) {
    case "Let":
        console.log("2.Correct!");
        ++score;
        break;
    default:
        console.log("2.Incorrect");
}
switch (quiz.question_3) {
    case "Ts":
        console.log("3.Correct!");
        ++score;
        break;
    default:
        console.log("3.Incorrect");
}
switch (quiz.question_4) {
    case "[]-square-brackets":
        console.log("4.Correct!");
        ++score;
        break;
    default:
        console.log("4.Incorrect");
}
switch (quiz.question_5) {
    case "true and false":
        console.log("5.Correct!");
        ++score;
        break;
    default:
        console.log("5.Incorrect");
}
console.log(`Your Score ${score}`);
