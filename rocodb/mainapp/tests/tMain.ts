/**
 * @jest-environment jsdom
 */
import { generateInputDictionary} from "../static/main"

test("Function returns input dictionary and contains some values", () => {
    createMockForm();    

    const inputDictionary = generateInputDictionary();

    expect(inputDictionary["name"]).toBe("Paco");
    expect(inputDictionary["address-line-1"]).toBe("fake123");   
});

function createMockForm() {
    const form = document.createElement("form");
    form.setAttribute("class", "create-gym-form");

    // Create two items inside the mock form.
    const item = document.createElement("input");
    item.setAttribute("class", "form-item-input");
    item.setAttribute("name", "name");
    item.setAttribute("value", "Paco");

    const item2 = document.createElement("input");
    item2.setAttribute("class", "form-item-input");
    item2.setAttribute("name", "address-line-1");
    item2.setAttribute("value", "fake123");

    // Add the two input items to the form.
    form.appendChild(item);
    form.appendChild(item2);

    document.body.appendChild(form);
}