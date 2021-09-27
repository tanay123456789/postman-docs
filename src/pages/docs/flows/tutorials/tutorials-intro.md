---
title: "Postman Flows Tutorials"
order: 220
page_id: "postman_flows_tutorials"
warning: false
---

To get started with Postman Flows, make sure you have some API requests in your workspace, so you can use them in your flows. See [Grouping requests in collections]("/docs/sending-requests/intro-to-collections/") for more info.

Flows are located in the left sidebar. Click **Flows** to see your flows.

## Creating a flow

You can create a new flow from the left sidebar in Postman. Select __New__, then select **Flows**.

<img alt="Create new request sidebar" src="https://assets.postman.com/postman-docs/create-new-request-sidebar-v8.jpg" width="500px"/>

This opens a new canvas, containing a Start block and a block list. You can then select a next block in your flow.

<!--TODO: screenshot -->

Rename your flow by clicking the name in the top row of the tab. You can delete flows by selecting <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> and then **Delete**.

## Adding and connecting blocks

To add a new block, select **Add Block** at the bottom of the canvas. This opens the block list, and you can select a block type. Then select the canvas to drop the block.

Each block has an input and output ports:

<!--TODO: screenshot -->

You can connect individual blocks by dragging an output port from one block to the input port of another block. You can quickly create blocks that are connected to other blocks by selecting the **+** in a block's output port.

## Configuring blocks

All the important configurations a block needs to work successfully can be done within the block. Choose a block and configure based on what you want to achieve.

## Running a flow

The first block of your flow is a start block. After you've added and connected blocks, select the start block to run the flow. You can also select the start button at the bottom of the canvas. Annotation blocks aren't connected to other blocks; you can place them anywhere on the canvas you want to add text.

## Sending a request

You can jump from the request block to the saved request in your workspace with the arrow button.

## Using the terminal

## Annotating blocks

You can create flows in a team workspace to share with others. When you do it, we recommend you annotate your flows to help others understand easily. You can annotate by selecting the annotation block from the block list.

## Passing data between requests

## Conditions

## Parallel requests

## For-each loops

## Troubleshooting
- console
- test your requests separately outside the flow
- postman agent
