/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  myExcuse();
};

const myExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let element = who[Math.floor(Math.random() * who.length)] + " ";
  element += action[Math.floor(Math.random() * action.length)] + " ";
  element += what[Math.floor(Math.random() * what.length)] + " ";
  element += when[Math.floor(Math.random() * when.length)] + " ";
  document.getElementById("excuse").innerHTML = element;
};
