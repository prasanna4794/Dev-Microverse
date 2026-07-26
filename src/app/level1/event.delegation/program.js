export default function runProgram(addLog) {


    addLog("Creating input event delegation demo...");


    const form = document.createElement("form");


    const input =
        document.createElement("input");


    input.placeholder =
        "Type something";


    form.appendChild(input);


    document.body.appendChild(form);



    form.addEventListener(
        "input",
        (event)=>{


            addLog(
                `Typed Value : ${event.target.value}`
            );


        }
    );


    addLog(
        "Event listener attached to parent form."
    );


    addLog(
        "Now type inside input box."
    );


}