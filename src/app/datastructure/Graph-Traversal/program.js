export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is Graph Traversal?");
    addLog("");

    addLog("Answer:");
    addLog(
        "Graph Traversal is a method used to visit and process the nodes of a graph."
    );

    addLog("");

    addLog("Simple Explanation:");
    addLog(
        "Graph Traversal na graph-la irukkura nodes-ah one by one visit panna use pannura method."
    );

    addLog("");

    addLog("Types of Graph Traversal:");
    addLog("1. BFS - Breadth First Search");
    addLog("2. DFS - Depth First Search");

    addLog("");

    addLog("BFS:");
    addLog(
        "BFS visits the nodes level by level."
    );

    addLog("");

    addLog("Example:");

    addLog("        A");
    addLog("       / \\");
    addLog("      B   C");
    addLog("     / \\");
    addLog("    D   E");

    addLog("");

    addLog("BFS Order:");
    addLog("A → B → C → D → E");

    addLog("");

    addLog("DFS:");
    addLog(
        "DFS goes as deep as possible before moving to another path."
    );

    addLog("");

    addLog("DFS Order:");
    addLog("A → B → D → E → C");

    addLog("");

    addLog("BFS Uses:");
    addLog("Shortest path in an unweighted graph");
    addLog("Level-order processing");
    addLog("Finding nearby nodes");

    addLog("");

    addLog("DFS Uses:");
    addLog("Path finding");
    addLog("Cycle detection");
    addLog("Connected components");

    addLog("");

    addLog("Real World Example:");
    addLog(
        "Social networks can use graph traversal to find friends, connections, or people within a certain number of connections."
    );

    addLog("");

    addLog("Important Point:");
    addLog(
        "BFS usually uses a Queue, while DFS usually uses a Stack or Recursion."
    );

    addLog("");

    addLog("Interview Answer:");
    addLog(
        "Graph Traversal is a technique used to visit all nodes in a graph. The two common traversal methods are BFS and DFS."
    );

    addLog("");

    addLog("Program completed.");

}