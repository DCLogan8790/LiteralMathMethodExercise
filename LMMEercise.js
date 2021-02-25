// 1a. 
let warmHugs = "Hi, I'm Olaf and I like warm hugs";
// 1b. 
console.log(warmHugs.toUpperCase());
// 1c
warmHugs.replace("like","love");
console.log(warmHugs.replace("like","love"));
// 1cc
warmHugs = warmHugs.replace("like","love");
console.log(warmHugs);

// 2a
beenImpaled = "Oh, look at that. I've been impaled";

// 2b. 
beenImpaled.slice(18,35)
console.log(beenImpaled.slice(18,35));

// 3a. 
let dotDOtDot = " ...";
 
// 3b 
let skullBones = `I don't have a skull${dotDOtDot} or bones`;
console.log(skullBones);

// 4.
Math.PI
console.log(Math.PI);

// 5. 
let randomNumber = Math.random();
randomNumber *=3;
randomNumber = Math.floor(randomNumber);
randomNumber++;
console.log(randomNumber);

// 6a
console.log(" Let It Go!");
