// ==UserScript==
// @name         SimpleButtonJS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       TesterTV
// @match        https://www.gnu.org/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


//------------------------<create button>--------------//
let btn = document.createElement("button");
btn.innerHTML = "Save";

//------------------------<button size>--------------//
var button_width = 70;
var button_height = 30;

//------------------------<button position>--------------//
var buttonX = document.documentElement.clientWidth - button_width;
var buttonY = document.documentElement.clientHeight - document.documentElement.clientHeight;

//------------------------<button style>--------------//
//btn.style = "position:fixed; top:" + buttonY + "px; left:" + buttonX + "px; background-color: white; border: none; color: #8e8e8e; padding: 0px 0px; text-align: center; text-decoration: none; font-family: ; display: inline-block; font-size: 20px; margin: 0px 0px; cursor: pointer; width: 30px; height: 30px";

btn.style = "position:fixed; top:" + buttonY + "px; left:" + buttonX + "px; background-color: #00ccff; font-size: 20px; cursor: pointer; width:" + button_width + "px; height:" + button_height + "px";

//------------------------<button function>--------------//
btn.onclick = function () {

  alert("Button is clicked");

};
document.body.appendChild(btn);





