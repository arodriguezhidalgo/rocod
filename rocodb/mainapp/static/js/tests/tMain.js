"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @jest-environment jsdom
 */
const main_1 = require("../ts/main");
beforeAll(() => { createMockForm(); });
test("Function returns input dictionary and contains some values", () => {
    const inputDictionary = (0, main_1.generateInputDictionary)();
    expect(inputDictionary["name"]).toBe("Paco");
    expect(inputDictionary["address-line-1"]).toBe("fake123");
});
test("Validation successful when name contains string", () => {
    const inputDictionaryMock = { name: "Paco" };
    expect((0, main_1.validateFormInputs)(inputDictionaryMock)).toBeTruthy();
});
test("Validation fails when name is empty", () => {
    const inputDictionaryMock = { name: "" };
    expect((0, main_1.validateFormInputs)(inputDictionaryMock)).toBeFalsy();
});
test("Create button is disabled when requested", () => {
    // First, we check that the id of the button is "create-gym-form" before validation. 
    let button = document.querySelector("#create-gym-button");
    expect(button).not.toBeNull();
    expect(button === null || button === void 0 ? void 0 : button.getAttribute("onclick")).toBe("createButtonFcn()");
    // Run the validation. This should disable the button, because we are setting it to do so.
    (0, main_1.enableCreateButton)(false);
    // Verify that the onclick function is an empty string "".
    expect(button === null || button === void 0 ? void 0 : button.getAttribute("onclick")).toBe("");
    // Verify that the class of the button changed to disabled.
    expect(button === null || button === void 0 ? void 0 : button.getAttribute("class")).not.toBe("send-form-button");
    expect(button === null || button === void 0 ? void 0 : button.getAttribute("class")).toBe("send-form-button_disabled");
    // Then, we call the function again and request it to be enabled.
    (0, main_1.enableCreateButton)(true);
    // Verify that the class stopped being button_disabled, and got the new value.
    expect(button === null || button === void 0 ? void 0 : button.getAttribute("class")).toBe("send-form-button");
    expect(button === null || button === void 0 ? void 0 : button.getAttribute("class")).not.toBe("send-form-button_disabled");
    // Verify that once again we have an onclick function.
    expect(button === null || button === void 0 ? void 0 : button.getAttribute("onclick")).toBe("createButtonFcn()");
});
function createMockForm() {
    const form = document.createElement("form");
    form.setAttribute("class", "create-gym-form");
    // Create two items inside the mock form.
    const item = document.createElement("input");
    item.setAttribute("class", "form-item-input");
    item.setAttribute("name", "name");
    item.setAttribute("value", "Paco");
    form.appendChild(item);
    const item2 = document.createElement("input");
    item2.setAttribute("class", "form-item-input");
    item2.setAttribute("name", "address-line-1");
    item2.setAttribute("value", "fake123");
    form.appendChild(item2);
    // Create the "Create" button to submit the form.
    const createButton = document.createElement("div");
    createButton.setAttribute("id", "create-gym-button");
    createButton.setAttribute("onclick", "createButtonFcn()");
    form.appendChild(createButton);
    document.body.appendChild(form);
}
