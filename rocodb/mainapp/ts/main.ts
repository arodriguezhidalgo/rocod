
export function generateInputDictionary(): { [key: string]: string } {
    /**
     * This function returns a dictionary with the content of each field of the form used to create gyms:
     * name, address line 1, address line 2, city, post-code and country.
     */

    // Then, retrieve all the input elements.     
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".form-item-input") as NodeListOf<HTMLInputElement>;

    // Create a dictionary from each input element containing: (name, value)
    let inputDict: { [key: string]: string } = {};

    inputs.forEach((input) => {
        inputDict[input.name.toString()] = input.value;
    });

    return inputDict;
}

export function validateFormInputs(inputDict: { [key: string]: string }): boolean {
    // The most relevant value we have to check is the name, which should be non-empty.
    return inputDict["name"] !== "";
}

export function enableCreateButton(buttonReady: boolean) {
    // This function enables the Create button of the gym creation form.
    const buttonId = "#create-gym-button";
    const button = document.querySelector(buttonId) as HTMLElement;

    if (buttonReady === false) {
        button.setAttribute("class", "send-form-button_disabled");
        button.setAttribute("onclick", "");
    }
    else {
        button.setAttribute("class", "send-form-button");
        button.setAttribute("onclick", "createButtonFcn()");
    }
}

export function createButtonWorkflowFcn() {
    const inputDictionary = generateInputDictionary();
    const enableButton = validateFormInputs(inputDictionary);
    enableCreateButton(enableButton);
    enableButtonWhenNameFieldIsNotEmpty();
}

export function enableButtonWhenNameFieldIsNotEmpty() {
    const nameInputElement = document.querySelector('.form-item-input[name="name"]') as HTMLInputElement;    
    // input - event
    nameInputElement.addEventListener("input", () => {
        if (nameInputElement.value === '') {
            enableCreateButton(false);
        } else {
            enableCreateButton(true);
        }
    })
}
