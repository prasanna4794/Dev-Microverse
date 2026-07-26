export default function runProgram(addLog) {

    addLog("Creating state object...");

    const state = {
        name: "Prasanna",
        age: 25
    };

    addLog("Creating Proxy...");

    const proxyState = new Proxy(state, {

        get(target, property) {

            addLog(`GET -> ${property}`);

            return target[property];
        },

        set(target, property, value) {

            addLog(`SET -> ${property} = ${value}`);

            target[property] = value;

            return true;
        }

    });

    addLog("Reading name property...");

    const name = proxyState.name;

    addLog(`Name : ${name}`);

    addLog("Updating age...");

    proxyState.age = 26;

    addLog(`Updated Age : ${proxyState.age}`);

    addLog("Program completed.");
}