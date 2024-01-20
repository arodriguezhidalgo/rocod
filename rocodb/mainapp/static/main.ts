
export function generateInputDictionary(): object {
    /**
     * This function returns a dictionary with the content of each field of the form used to create gyms:
     * name, address line 1, address line 2, city, post-code and country.
     */

    // Then, retrieve all the input elements.     
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".form-item-input") as NodeListOf<HTMLInputElement>;

    // Create a dictionary from each input element containing: (name, value)
    let inputDict = {};

    inputs.forEach((input) => {
        inputDict[input.name] = input.value;
    });

    return inputDict;
}

export function validateFormInputs(inputDict): boolean {
    // The most relevant value we have to check is the name, which should be non-empty.
    return inputDict["name"] !== "";
}

export function enableCreateButton(buttonReady) {
    // This function enables the Create button of the gym creation form.
    const buttonId = "#create-gym-button";
    const button = document.querySelector(buttonId) as HTMLElement;

    if (buttonReady === true) {
        button.setAttribute("id", "create-gym-button_disabled");
        button.setAttribute("onclick", "");
    }
    else {
        button.setAttribute("id", "create-gym-button");
        button.setAttribute("onclick", "createButtonFcn()");                
    }
}
function createButtonFcn(){

}