"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableButtonWhenNameFieldIsNotEmpty = exports.createButtonWorkflowFcn = exports.enableCreateButton = exports.validateFormInputs = exports.generateInputDictionary = void 0;
function generateInputDictionary() {
    /**
     * This function returns a dictionary with the content of each field of the form used to create gyms:
     * name, address line 1, address line 2, city, post-code and country.
     */
    // Then, retrieve all the input elements.     
    const inputs = document.querySelectorAll(".form-item-input");
    // Create a dictionary from each input element containing: (name, value)
    let inputDict = {};
    inputs.forEach((input) => {
        inputDict[input.name.toString()] = input.value;
    });
    return inputDict;
}
exports.generateInputDictionary = generateInputDictionary;
function validateFormInputs(inputDict) {
    // The most relevant value we have to check is the name, which should be non-empty.
    return inputDict["name"] !== "";
}
exports.validateFormInputs = validateFormInputs;
function enableCreateButton(buttonReady) {
    // This function enables the Create button of the gym creation form.
    const buttonId = "#create-gym-button";
    const button = document.querySelector(buttonId);
    if (buttonReady === false) {
        button.setAttribute("class", "send-form-button_disabled");
        button.setAttribute("onclick", "");
    }
    else {
        button.setAttribute("class", "send-form-button");
        button.setAttribute("onclick", "createButtonFcn()");
    }
}
exports.enableCreateButton = enableCreateButton;
function createButtonWorkflowFcn() {
    const inputDictionary = generateInputDictionary();
    const enableButton = validateFormInputs(inputDictionary);
    enableCreateButton(enableButton);
    enableButtonWhenNameFieldIsNotEmpty();
}
exports.createButtonWorkflowFcn = createButtonWorkflowFcn;
function enableButtonWhenNameFieldIsNotEmpty() {
    const nameInputElement = document.querySelector('.form-item-input[name="name"]');
    console.log(nameInputElement.value);
    // input - event
    nameInputElement.addEventListener("input", () => {
        if (nameInputElement.value === '') {
            enableCreateButton(false);
        }
        else {
            enableCreateButton(true);
        }
    });
}
exports.enableButtonWhenNameFieldIsNotEmpty = enableButtonWhenNameFieldIsNotEmpty;
