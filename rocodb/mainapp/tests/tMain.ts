/**
 * @jest-environment jsdom
 */
import { generateInputDictionary, validateFormInputs, enableCreateButton } from "../static/main"

test("Function returns input dictionary and contains some values", () => {
    createMockForm();

    const inputDictionary = generateInputDictionary();

    expect(inputDictionary["name"]).toBe("Paco");
    expect(inputDictionary["address-line-1"]).toBe("fake123");
});

test("Validation successful when name contains string", () => {
    const inputDictionaryMock = { name: "Paco" };
    expect(validateFormInputs(inputDictionaryMock)).toBeTruthy();
});

test("Validation fails when name is empty", () => {
    const inputDictionaryMock = { name: "" };
    expect(validateFormInputs(inputDictionaryMock)).toBeFalsy();
});

test("Create button is disabled when requested", () => {
    // First, we check that the id of the button is "create-gym-form" before validation. 
    let button = document.querySelector("#create-gym-button");
    expect(button).not.toBeNull();
    expect(button?.getAttribute("onclick")).toBe("dummyFcn()");

    // Run the validation. This should disable the button, because we are setting it to do so.
    enableCreateButton(false);

    // Retrieve the button handle again. We have to do this because I chose not to use getElementById().    
    button = document.querySelector("#create-gym-button");

    // Verify that after the function call, the button stopped existing. This is because we changed its id.
    expect(button).toBeNull();

    // Get the new handle of the button and verify that it doesn't contain any onclick function (or I should say, it is "").
    button = document.querySelector("#create-gym-button_disabled");
    expect(button?.getAttribute("onclick")).toBe("");

    // Then, we call the function again and request it to be enabled.
    enableCreateButton(true);

    // Verify that the id is the initial one, and the onclick function is correct.
    expect(button).not.toBeNull();



    // Retrieve 
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
    createButton.setAttribute("onclick", "dummyFcn()");
    form.appendChild(createButton);

    document.body.appendChild(form);
}