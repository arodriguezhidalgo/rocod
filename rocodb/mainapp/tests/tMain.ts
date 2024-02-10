/**
 * @jest-environment jsdom
 */
import { generateInputDictionary, validateFormInputs, enableCreateButton, enableButtonWhenNameFieldIsNotEmpty } from "../ts/main"

beforeAll(() => { createMockForm("Paco") });

test("Function returns input dictionary and contains some values", () => {


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
    // let button = document.querySelector("#create-gym-button");
    let button = iGetCreateButtonHandle();
    expect(button).not.toBeNull();
    expect(button?.getAttribute("onclick")).toBe("createButtonFcn()");

    // Run the validation. This should disable the button, because we are setting it to do so.
    enableCreateButton(false);

    // Verify that the onclick function is an empty string "".
    expect(button?.getAttribute("onclick")).toBe("");

    // Verify that the class of the button changed to disabled.
    expect(button?.getAttribute("class")).not.toBe("send-form-button");
    expect(button?.getAttribute("class")).toBe("send-form-button_disabled");

    // Then, we call the function again and request it to be enabled.
    enableCreateButton(true);

    // Verify that the class stopped being button_disabled, and got the new value.
    expect(button?.getAttribute("class")).toBe("send-form-button");
    expect(button?.getAttribute("class")).not.toBe("send-form-button_disabled");

    // Verify that once again we have an onclick function.
    expect(button?.getAttribute("onclick")).toBe("createButtonFcn()");
});

test("Create button in the form is disabled whenever the Name field is empty.", () => {
    // Create a form with an empty name field.
    const button1 = iGetCreateButtonHandle() as HTMLDivElement;

    console.log(button1.getAttribute("class"));


    const form = document.querySelector("form") as Node;
    document.body.removeChild(form);
    
    createMockForm('');
    console.log(iGetCreateButtonHandle());

    enableButtonWhenNameFieldIsNotEmpty();
    const button = iGetCreateButtonHandle() as HTMLDivElement;

    console.log(button.getAttribute("class"));

});

test("Create button in the form is enabled whenever the Name field contains some text.", () => {

});

function iGetCreateButtonHandle(): HTMLDivElement | null {
    // This function can return either an htmlElement or a null.
    return document.querySelector("#create-gym-button");
}


function createMockForm(nameFieldValue: string) {
    const form = document.createElement("form");
    form.setAttribute("class", "create-gym-form");

    // Create two items inside the mock form.
    const item = document.createElement("input");
    item.setAttribute("class", "form-item-input");
    item.setAttribute("name", "name");
    // Set the name field if requested
    if (nameFieldValue !== '') {
        item.setAttribute("value", nameFieldValue);        
    }
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