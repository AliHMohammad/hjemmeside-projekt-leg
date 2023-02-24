"use strict";

window.addEventListener("load", start);

let resultat;

let c;
let tilbage;

let ni;
let otte;
let syv;
let seks;
let fem;
let fire;
let tre;
let to;
let et;
let nul;

let divider;
let gange;
let minus;
let plus;
let ligmed;


let sum;
let operator;
let sum2;






function start() {

    resultat = document.querySelector("#resultat");

    c = document.querySelector("#slet")
    tilbage = document.querySelector("#tilbage")

    ni = document.querySelector("#ni");
    otte = document.querySelector("#otte")
    syv = document.querySelector("#syv")
    seks = document.querySelector("#seks")
    fem = document.querySelector("#fem")
    fire = document.querySelector("#fire")
    tre = document.querySelector("#tre")
    to = document.querySelector("#to")
    et = document.querySelector("#et")
    nul = document.querySelector("#nul");

    divider = document.querySelector("#divider")
    gange = document.querySelector("#gange")
    minus = document.querySelector("#minus")
    plus = document.querySelector("#plus")
    ligmed = document.querySelector("#ligmed")


    sum = "";
    operator = false;
    sum2 = "";


// --------------------------------------------------

    c.addEventListener("click", deleteAll)
    // tilbage.addEventListener("click", )


    ni.addEventListener("click", () => inputTal("9"));
    otte.addEventListener("click", () => inputTal("8"));
    syv.addEventListener("click", () => inputTal("7"));
    seks.addEventListener("click", () => inputTal("6"));
    fem.addEventListener("click", () => inputTal("5"));
    fire.addEventListener("click", () => inputTal("4"));
    tre.addEventListener("click", () => inputTal("3"));
    to.addEventListener("click", () => inputTal("2"));
    et.addEventListener("click", () => inputTal("1"));
    nul.addEventListener("click", () => inputTal("0"));

    divider.addEventListener("click", () => operatorSaver("/"))
    gange.addEventListener("click", () => operatorSaver("*"))
    minus.addEventListener("click", () => operatorSaver("-"))
    plus.addEventListener("click", () => operatorSaver("+"))

    ligmed.addEventListener("click", beregner);


}

function inputTal(tal) {

    if (!operator) {
        inputTal1(tal);
    } else if (operator) {
        inputTal2(tal)
    }

}

function operatorSaver(op) {

    switch (op) {
        case "/":
            operator = "/";
            break;
        case "*":
            operator = "*";
            break;
        case "-":
            operator = "-";
            break;
        case "+":
            operator = "+";
            break;
    }

    resultat.textContent = operator;
    console.log(operator);
}


function inputTal1(tal) {
    cleanOperatorInResult();

    console.log(`Input af ${tal}`);
    resultat.textContent += tal;

    sum += tal;
    console.log(sum);

}

function inputTal2(tal) {
    cleanOperatorInResult();

    console.log(`Input2 af ${tal}`);
    resultat.textContent += tal;

    sum2 += tal;
    console.log(sum2);
}



function cleanOperatorInResult() {

    switch (resultat.textContent) {
        case "+":
            resultat.textContent = "";
            break;
        case "-":
            resultat.textContent = "";
            break;
        case "*":
            resultat.textContent = "";
            break;
        case "/":
            resultat.textContent = "";
            break;
    }
}


function beregner() {
    
    if (operator == "+") {
        resultat.textContent = parseInt(sum) + parseInt(sum2);
    } else if (operator == "-") {
        resultat.textContent = parseInt(sum) - parseInt(sum2);
    } else if (operator == "*") {
        resultat.textContent = parseInt(sum) * parseInt(sum2);
    } else if (operator == "/") {
        resultat.textContent = parseInt(sum) / parseInt(sum2);
    }

}


function deleteAll() {
    resultat.textContent = "";
    sum = "";
    sum2 = "";
    operator = false;
}






















