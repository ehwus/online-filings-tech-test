/*
 * ********** Instructions, please read first **********
 *
 * IMPORTANT: the code must be functional when submitted
 *
 * The goal of this exercise is to show your understanding of:
 * - basic coding principles
 * - json data structures
 * - javascript/nodeJS syntax
 * - using new API (puppeteer)
 * - working within a test driven development environment
 * - reading technical documentation and find solution on your own
 *
 * You are allowed (and encouraged) to search for documentation, tutorials, howtos, etc
 * BUT you have to do the exercise by yourself
 * You will be asked to explain your code during the following interview
 *
 * TODO:
 * The file tests.json in this folder defines a list of actions to execute
 * Each action in the JSON maps to a function in this module, with its respective arguments
 * Your job is to fill in the blanks in this module to parse and execute the
 * actions defined in the file tests.json
 * */
const fs = require('fs');
const puppeteer = require('puppeteer');

const main = {
  browser: null,
  currentPage: null,
  filePath: 'tests.json',
  testData: null,

  start: async function () {
    this.browser = await puppeteer.launch({ headless: false });
  },

  /*
   * read the file defined in the property filePath, and set the testData property with the json object
   * */
  loadFileToJson: function () {
    const data = fs.readFileSync(this.filePath);
    this.testData = JSON.parse(data);
  },

  /*
   * for every test object in the tests.json array
   * add the action and the last param's value in an object
   * if the last param value to be added already exists in results, add it to the excluded array
   * example:
   * - { action: "goTo", lastParamValue: "http://example.com" } gets added to results
   * - { action: "type", lastParamValue: "footer" } gets added to results
   * - { action: "exists", lastParamValue: "http://example.com" } gets added to excluded
   * */
  getLastTestParamValue: function () {
    const results = [];
    const excluded = [];
    const resultsSeen = {};

    this.testData.forEach((data) => {
      const action = data.action;
      const lastParam = data.params[data.params.length - 1];
      const lastParamValue = Object.values(lastParam)[0];

      if (!resultsSeen[lastParamValue]) {
        results.push({ action, lastParamValue });
        resultsSeen[lastParamValue] = true;
      } else {
        excluded.push({ action, lastParamValue });
      }
    });

    return { results, excluded };
  },

  /*
   * tell the browser to go to params[0].url
   * save the page returned by browser into this.currentPage
   * return empty string if exception caught, the page's url otherwise
   * */
  goTo: async function (params) {
    // TODO: implement
    throw 'goTo not implemented';
  },

  /*
   * check if every params[i].selector exists in the DOM
   * return results array with objects as follows:
   * [{ result: true/false, selector: selector-from-params }, {...}]
   * */
  exists: async function (params) {
    // TODO: implement
    throw 'exists not implemented';
  },

  /*
   * enters text defined by params[0].value into DOM element defined by params[0].selector
   * return empty string if exception caught, string entered into the selected element otherwise
   * */
  type: async function (params) {
    // TODO: implement
    throw 'type not implemented';
  },

  /*
   * click on element defined by params[0].selector
   * return false if exception caught, true otherwise
   * */
  click: async function (params) {
    // TODO: implement
    throw 'click not implemented';
  },

  /*
   * check for equality between params[0].selector and params[0].value by params[0].type
   * return false if exception caught, true otherwise
   * */
  equal: async function (params) {
    // TODO: implement
    throw 'equal not implemented';
  },
};

module.exports = main;
