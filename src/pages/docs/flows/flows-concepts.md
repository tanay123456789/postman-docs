---
title: "Postman Flows concepts"
order: 210
page_id: "postman_flows_concepts"
warning: false
---

<!--TODO: intro -->

<!-- TODO: not in any order yet. Also, table, list, or subheads? -->

* Flow - A collection of connected blocks and groups of blocks that are run to achieve an outcome
* Canvas - The area where you can place blocks and build flows
* Block - A blackbox that can receive inputs and provides an output.
* Block list - A filterable list of all available blocks.
* Port - Inlets/outlets from where data can flow in and out of blocks.
There are two types of ports: Input ports and output ports
* Link - The line that connects two blocks in the GUI

* Toolbar - List of actions that pop on top of a block when hovering on a block
* Window - The sidebar where you can view properties/logs/documentations
* Data-binding - Using data from a previous request in the current request
* Data-picker / data-picking - A way to choose what data a user wants to point towards INTERNAL
* Output - the last output produced by the block
* Docs - Documentation/information about the block
* Duplicate - create a copy of the block on the canvas
* Delete - delete the block from the canvas.
* Input received Input - The data that the block has received from the block before.
* Properties - editable configurations of a block
* Automatic ports - input or output ports used to respectively delay a process until termination of another process
* Reset run - Rerun the first block, and in the process trigger the whole flow as well.

## Available blocks

* Request - Run a request
* Terminal
* Assign Variables
* String to JSON - Takes in a string of data and converts that to JSON
* Delay
* Validate - Compare 2 pieces of data using logical operations
* Combine
* Annotation
* For Each - Takes a “List” of “things” and runs the next block for each “thing”.
    For example, you have 2 requests:
    1. To GET all designers
    1. to send “Hi” on slack to 1 user
    To send a “Hi” to each designer you’d put the list you got from request and put that through the “For Each” block. Then connect the for each block to the request 2
    This would send 1 “Hi” for each designer in the list
