export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the .each() method?");
    addLog("");

    addLog("Answer:");
    addLog(".each() is used to loop through multiple selected HTML elements.");
    addLog("");

    addLog("Example:");

    addLog(`<ul>

<li>HTML</li>

<li>CSS</li>

<li>JavaScript</li>

</ul>

<script>

$("li").each(function(){

    console.log($(this).text());

});

</script>`);

    addLog("");

    addLog("Explanation:");
    addLog("The each() method runs a function for every selected element.");
    addLog("Here, it loops through all li elements.");
    addLog("");

    addLog("Program completed.");

}