
export function generateInputDictionary(): object {

    // First, get the form element from the HTML document.
    const form: HTMLFormElement = document.querySelector(".create-gym-form") as HTMLFormElement;

    // Then, retrieve all the input elements.     
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".form-item-input") as NodeListOf<HTMLInputElement>;

    // Create a dictionary from each input element containing: (name, value)
    let inputDict = {};
    // console.log(form?.children)
    inputs.forEach((input) => {
        inputDict[input.name] = input.value;
    });

    return inputDict;
}