---
title: "Postman Flows Tutorials"
order: 220
page_id: "postman_flows_tutorials"
warning: false
---

To get started with Postman Flows, make sure you have saved API requests in your workspace, so you can use them in your flows. See [Grouping requests in collections]("/docs/sending-requests/intro-to-collections/") for more details.

Flows are located in the left sidebar. Select **Flows** to see the flows in the current workspace.

<img alt="Flow sidebar" src="https://assets.postman.com/postman-docs/flows/flows-left-sidebar.jpg" width="300px"/>

## Creating a flow

You can create a new flow from the left sidebar in Postman. Select __New__, then select **Flows**.

<img alt="Create new flow sidebar" src="https://assets.postman.com/postman-docs/flows/create-new-flow-sidebar.jpg" width="500px"/>

This opens a new canvas, containing a Start block and a block list. You can then select the next block in your flow from the list.

<img alt="Flow block list" src="https://assets.postman.com/postman-docs/flows/flow-block-list.jpg" width="350px"/>

Note that any changes you in flows are auto-saved immediately. There's no need to save the flow periodically like you would when editing a request.

## Adding and connecting blocks

To add a new block, select **Add Block** at the bottom of the canvas. This opens the block list, and you can select a block type. Then select the canvas to drop the block.

Each block has input and output ports. You can see them when you hover over a block. This also shows a tooltip in the lower right corner explaining what the block does.

<img alt="Flow block and ports" src="https://assets.postman.com/postman-docs/flows/flow-block-ports.jpg" width="350px"/>

You can connect individual blocks by dragging an output port from one block to the input port of another block. For example, connect the **Response** port of a Send Request block to the **Data** port of a Validate block, and your response flows from the first block to the second.

You can quickly create new blocks that are automatically connected to a block by selecting **+** on a block's output port. This opens the block list, just like when you select **Add Block**, but the new block will be automatically connected to the previous one.

Also notice that some blocks will have more than one input port (like the Combine block) or more than one output (like the Validate block). It's also possible to add multiple connectors to one output port. For example, you can create parallel flows from the Start block, and run multiple chains of blocks at the same time. Or connect a request's response to multiple blocks, if you want to use the same response in more than one chain.

It's easy to duplicate a block, too. Select it and press Cmd-D.

To disconnect blocks, select the connector between them and press Delete. Likewise, to delete a block, select it and press Delete.

## Sending a request

The most essential building block of any flow is making a request. To make requests, add a Send Request block. In the block configuration, select a HTTP request from a collection, and that request will be made when the block is run. When the block runs, the request will be made and the response will flow to the next connected block.

<img alt="Flow block and ports" src="https://assets.postman.com/postman-docs/flows/flow-add-send-request.jpg" width="350px"/>

Did your request fail? If you need to edit or troubleshoot your request, select the <img alt="External link icon" src="https://assets.postman.com/postman-docs/icon-external-link.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> in the request block to open it in a new tab.

## Configuring blocks

Each block contains configuration settings which define how the block works in your flow. For example, in the previous Send Request block, the configuration was the request you selected. Or in a Delay block, there's a setting to specify how many milliseconds the block will wait before the next block is called.

Some blocks will have an **Advanced** button you can select to see additional configuration options. Select **Basic** to go back to the original settings.

Select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> in each block for a menu of other options. Select **View Information** to see a complete view of the block's input received, output generated, configuration, and more information on the block.

## Running a flow

The first block of your flow is the Start block. All of your connected blocks will flow from the output port of the Start block. After you've added and connected blocks, select the Start block to run the flow. You can also select the start button at the bottom of the canvas.

When you run a flow, you'll notice a few things happening. First, connectors between blocks will pulse blue as the data and execution flows from block to block. And each block has an indicator next to the name that will show the run state of that block. And if your block encounters an error when you run the flow, the block and its connectors will be red, and an error message will appear above the block.

## Using the terminal

In the upper right corner of the canvas is the _terminal_. This is a console that can be used to display logs from blocks. This is a great way to monitor how blocks are operating, or to get debugging information for further testing. To use the terminal, add a Terminal block connected to the output of another block. The output data will then be shown in the terminal.

For example, add a Terminal block after a Send Request block. When the request runs, its response will be sent to the terminal.

There's a dropdown list in the terminal where you can select different groups. This is useful if you have multiple Terminal blocks sending information to the terminal. In each Terminal block, you can enter a different group name, and then select the group in the terminal to see only that output.

## Annotating blocks

You can label or document your flows as needed. Since you'll be sharing flows with other teammates in your workspace, you may want to explain what blocks do or how they're connected.

Annotate your flows by adding an Annotation block from the block list. Annotation blocks aren't connected to other blocks; you can place them anywhere on the canvas you want to add text.

## Renaming and deleting flows

Rename your flow by selecting the name in the top row of the tab and entering a new name.

You can delete flows by selecting <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> and then **Delete**.

## For more information

For more information on using Postman Flows, check out the following:

* The [Showcasing Flows](https://postman.postman.co/workspace/Showcasing-Flows~80b5a4ff-f242-45cc-8f4b-8bda2472a9d0/overview) Public Workspace
* The [User Feedback](https://go.pstmn.io/flows-feedback) post in the Postman Community
