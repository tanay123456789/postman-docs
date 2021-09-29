---
title: "Postman Flows Tutorials"
order: 220
page_id: "postman_flows_tutorials"
warning: false
---

To get started with Postman Flows, make sure you have some API requests in your workspace, so you can use them in your flows. See [Grouping requests in collections]("/docs/sending-requests/intro-to-collections/") for more details.

Flows are located in the left sidebar. Click **Flows** to see the flows in a workspace.

<img alt="Flow sidebar" src="https://assets.postman.com/postman-docs/flows/flows-left-sidebar.jpg" width="300px"/>

## Creating a flow

You can create a new flow from the left sidebar in Postman. Select __New__, then select **Flows**.

<img alt="Create new flow sidebar" src="https://assets.postman.com/postman-docs/flows/create-new-flow-sidebar.jpg" width="500px"/>

This opens a new canvas, containing a Start block and a block list. You can then select the next block in your flow from the list.

<img alt="Flow block list" src="https://assets.postman.com/postman-docs/flows/flow-block-list.jpg" width="350px"/>

## Adding and connecting blocks

To add a new block, select **Add Block** at the bottom of the canvas. This opens the block list, and you can select a block type. Then select the canvas to drop the block.

Each block has input and output ports. You can see them when you hover over a block. This also shows a tooltip in the lower right corner explaining what the block does.

<img alt="Flow block and ports" src="https://assets.postman.com/postman-docs/flows/flow-block-ports.jpg" width="350px"/>

You can connect individual blocks by dragging an output port from one block to the input port of another block. For example, connect the **Response** port of a Send Request block to the **Data** port of a Validate block, and your response flows from the first block to the second.

You can quickly create new blocks that are automatically connected to another blocks by selecting the **+** on a block's output port. This opens the block list, just like when you click **Add Block**, but the new block will be automatically connected to the previous one.

Also notice that some blocks will have more than one input port (like the Combine block) or more than one output (like the Validate block). You can also add multiple connectors to a port. For example, you can create parallel flows from the Start block, and run multiple chains of blocks at the same time. Or connect a request's response to multiple blocks, if you want to use the same response in more than one chain.

It's easy to duplicate a block, too. Select it and press Cmd-D.

To disconnect blocks, select the connector between them and press Delete. Likewise, to delete a block, select it and press Delete.

<!--TODO gif? -->

## Configuring blocks

Each block contains configuration settings which define how the block works in your flow. For example, in a Request block, you can select the HTTP request from a collection, and that request will be made when the block is run.

Some blocks will have an **Advanced** button you can select to see additional configuration options. Select **Basic** to go back to the original settings.

Click <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> in each block for a menu of other options. Select **View Information** to see a complete view of the block's input received, output generated, configuration, and more information on the block.

## Running a flow

The first block of your flow is the Start block. All of your connected blocks will flow from the output port of the Start block. After you've added and connected blocks, select the start block to run the flow. You can also select the start button at the bottom of the canvas.

When you run a flow, you'll notice a few things. First, connectors between blocks will pulse blue as the data and execution flows from block to block. And each block has an indicator next to the name that will show the run state of that block. Also, if your block encounters an error when you run the flow, the block and its connectors will be red, and an error message will appear above the block.

## Sending a request

You can jump from the request block to the saved request in your workspace with the arrow button.

<!-- TODO: explain -->

## Using the terminal

In the upper right corner of the canvas is the _terminal_, which is a The terminal displays log messages and output from any terminal

<!-- TODO:

explain

In the upper right

-->

## Annotating blocks

Make sure to document your flows as needed. Since you'll be sharing flows with other teammates in your workspace, you may want to explain what blocks do or how they're connected.

You can annotate your flows by adding an Annotation block from the block list. Annotation blocks aren't connected to other blocks; you can place them anywhere on the canvas you want to add text.

## Renaming and deleting flows

Rename your flow by clicking the name in the top row of the tab and entering a new name.

You can delete flows by selecting <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> and then **Delete**.

<!--TODO: these may all be v1.1
## Passing data between requests

## Conditions

## Parallel requests

## For-each loops
-->

## Troubleshooting

<!-- TODO: lede
- console
- test your requests separately outside the flow
- check postman agent
-->
