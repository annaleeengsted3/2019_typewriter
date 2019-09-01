"use strict";
let orderN = 0;
const text = document.querySelector("#typewriter").textContent;
const txtLength = text.length;
const space = " ";
let splitArray;

let random;

document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  //hide/remove content of h1:
  document.querySelector("#typewriter").textContent = "";
  alert("Click anywhere on the screen to activate typewriter!");
  document.querySelector("body").addEventListener("click", splitString);
}

function splitString() {
  console.log("splitString");
  //clean up eventlisteners:
  document.querySelector("body").removeEventListener("click", splitString);

  //create array of substrings
  splitArray = text.split("");
  showLetter();
}

function showLetter() {
  //show content of h1 up to index number of orderN+1:
  document.querySelector("#typewriter").textContent = text.substring(
    0,
    orderN + 1
  );

  //random number between 1 and 2, to generate typekey1 or typekey 2 sound:
  random = "";
  random = Math.floor(Math.random() * (+3 - +1)) + 1;

  //for each letter play sound:

  if (orderN == txtLength) {
    document.querySelector("#typelast").currentTime = 0;
    document.querySelector("#typelast").play();
    document.querySelector("h1").innerHTML += `<br>!`;
  } else if (splitArray[orderN] == space) {
    document.querySelector("#typespace").currentTime = 0;
    document.querySelector("#typespace").play();
    delayFc();
  } else if (random == 1) {
    console.log("random = 1");
    document.querySelector("#typekey2").currentTime = 0;
    document.querySelector("#typekey2").play();
    delayFc();
  } else {
    console.log("random = 2");
    document.querySelector("#typekey1").currentTime = 0;
    document.querySelector("#typekey1").play();
    delayFc();
  }
}

function delayFc() {
  //set delay from one letter to the next
  setTimeout(addN, Math.random() * (450 - 250) + 250);
}

function addN() {
  //if there are letters left, keep going:
  if (orderN < txtLength) {
    orderN++;
    showLetter();
  }
}
