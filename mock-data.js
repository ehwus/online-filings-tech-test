const fs = require("fs");
const tests = JSON.parse(fs.readFileSync("./tests.json"));
const results = {
    test1: "goTo",
    test2: {
        results: [
            {
                "action": "goTo",
                "lastParamValue": "https://www.onlinefilings.co.uk/"
            },
            {
                "action": "exists",
                "lastParamValue": ".footer"
            },
            {
                "action": "type",
                "lastParamValue": ".input-group input"
            },
            {
                "action": "click",
                "lastParamValue": ".input-group button"
            },
            {
                "action": "exists",
                "lastParamValue": "[data-href=\"https://www.onlinefilings.co.uk/checkout/\"]"
            },
            {
                "action": "click",
                "lastParamValue": ".close-modal"
            },
            {
                "action": "click",
                "lastParamValue": ".package-choice-btn"
            },
            {
                "action": "equal",
                "lastParamValue": ".sub-total-value"
            }
        ],
        excluded: [
            {
                "action": "click",
                "lastParamValue": "[data-href=\"https://www.onlinefilings.co.uk/checkout/\"]"
            },
            {
                "action": "exists",
                "lastParamValue": ".footer"
            }
        ]
    },
    test3: "https://www.onlinefilings.co.uk/",
    test4: [{"result": true, "selector": ".input-group input"}, {
        "result": true,
        "selector": ".input-group button"
    }, {"result": true, "selector": ".footer"}],
    test5: tests[2].params[0].value,
    test6: true,
    test7: [{"result": true, "selector": ".footer"}, {
        "result": true,
        "selector": "[data-href=\"https://www.onlinefilings.co.uk/checkout/\"]"
    }],
    test8: true,
    test9: [{"result": true, "selector": ".package-choice-btn"}, {"result": true, "selector": ".footer"}],
    test10: true,
    test11: true,
    test12: true
};

module.exports = results;