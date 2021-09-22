---
title: "Introduction to Postman Flows"
order: 200
page_id: "postman_flows_intro"
warning: false
---

_Postman Flows_ is a no-code solution you can use to visually connect and chain together your APIs defined across all of your collections to build workflows.

integrate

Postman's collection runner is a way to run API requests in a collection serially. This is great when you have a single collection you want to run each request top-to-bottom (or write some code to specify a different order). But what if you want to run requests from different collections, and add logic to determine what's run and when? That's where Postman Flows comes in.

You can take requests from different collections, and connect them together with logic to build a workflow. You can evaluate at the results of a request and execute different branches of the workflow depending on values in the return. There are also powerful tools to do things like combine results from multiple API requests and send them to another request, convert response data to another format, or iterate with a response, creating multiple requests.

From UX:
Flows help you test real-world processes by logically connecting a series of requests.

From blog:

Postman Flows let you visually connect and chain together your APIs defined across all of your collections to build workflows. There are a lot of amazing things you could do with flows,
