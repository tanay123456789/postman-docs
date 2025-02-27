---
title: "Navigating Postman"
order: 3
page_id: "navigating_postman"
updated: 2021-12-22
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://www.postman.com/downloads/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Bootcamp | Postman Level Up"
    url: "https://youtu.be/cCruwkHi9o4"
  - type: link
    name: "History | Postman Level Up"
    url: "https://www.youtube.com/watch?v=9VBTKwUCsGw&list=PLM-7VG-sgbtC5tNXxd28cmePSa9BYwqeU&index=4"
  - type: link
    name: "Universal Search | Postman Level Up"
    url: "https://www.youtube.com/watch?v=1K6Pl6o_tj8"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Postman Now Recommends Related Collections in Requests"
    url: "https://blog.postman.com/postman-now-recommends-collections-in-requests/"
  - type: link
    name: "How Postman Designers Built the New Universal Search Feature"
    url: "https://blog.postman.com/how-postman-designers-built-the-new-universal-search-feature/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Sending your first request"
    url: "/docs/getting-started/sending-the-first-request/"

warning: false

---

Postman provides a variety of views and controls for managing your API projects.

[![Postman app](https://assets.postman.com/postman-docs/app-overview-v9.5.jpg)](https://assets.postman.com/postman-docs/app-overview-v9.5.jpg)

The Postman UI is made up of the following components:

* The left sidebar provides access to your [collections](/docs/getting-started/creating-the-first-collection/), [APIs](/docs/designing-and-developing-your-api/creating-an-api/), [environments](/docs/sending-requests/managing-environments/#creating-environments), [mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/), [monitors](/docs/running-collections/scheduling-collection-runs/) and request [history](#history).
* The header allows you to create workspaces, access reports, explore the public API network, [search](#universal-search) within Postman, view sync status and notifications, move and invite collaborators to workspaces, capture requests and cookies, access your settings, account, and [Postman plan](/docs/administration/buying/).
* The center area is where you build and work with requests.
* The status bar along the bottom allows you to show/hide the sidebar, [find and replace](#find-and-replace), and open the [console](/docs/sending-requests/troubleshooting-api-requests/) on the left. On the right you can launch the __Bootcamp__, collection runner, trash, two pane view, and access help resources.

On the right panel, you will see icons to view the documentation, comments, code and request info.

<img alt="Right panel icons" src="https://assets.postman.com/postman-docs/right-panel-view-v8.jpg" width="300px"/>

To open the documentation tab, select the request under your collection and select the Documentation icon <img alt="Mini docs icon" src="https://assets.postman.com/postman-docs/mini-docs-icon-v8.jpg" width="25px"/> on the right panel.

<img alt="Documentation icon" src="https://assets.postman.com/postman-docs/overview-documentations-v8.jpg"/>

Select __View complete collection documentation__ to open the documentation in a new tab.

<img alt="Overview Documentation" src="https://assets.postman.com/postman-docs/documentation-pane-v8.jpg" width="400px"/>

To publish a documentation for a collection, see [Publishing your documentation](/docs/publishing-your-api/publishing-your-docs/).

To open the comments tab, select the request under your collection and select the Comments icon <img alt="Mini comments icon" src="https://assets.postman.com/postman-docs/mini-comments-icon-v8.jpg" width="30px"/> on the right panel. You can switch to comment mode to leave comments on a specific part of the request, including parameters, headers, body and tests.

[![Overview Comments](https://assets.postman.com/postman-docs/overview-comments-v8.jpg)](https://assets.postman.com/postman-docs/overview-comments-v8.jpg)

To learn more about comments, see [Commenting on collections](/docs/collaborating-in-postman/commenting-on-collections/).

To open the code snippets tab, select the request under your collection and select the Code icon on the right panel. See more on [Generating code snippets](/docs/sending-requests/generate-code-snippets/).

<img alt="Code snippets Pane" src="https://assets.postman.com/postman-docs/code-snippet-pane-v8.jpg" width="350px"/>

## Resizing and collapsing panes

You can also drag to resize the panes in the Postman UI.

[![Resizing panes](https://assets.postman.com/postman-docs/panes-resized-v8.gif)](https://assets.postman.com/postman-docs/panes-resized-v8.gif)

You can declutter your workspace by collapsing panes. Use the buttons at the bottom-left to hide the sidebar and at the bottom-right to toggle between single and two pane view.

[![general layout](https://assets.postman.com/postman-docs/split-pane-view-v8.jpg)](https://assets.postman.com/postman-docs/split-pane-view-v8.jpg)

## Related Collections

When a request is selected in Postman, you'll see a Related Collections (light bulb) icon <img alt="Related Collections icon" src="https://assets.postman.com/postman-docs/collection-rec-lightbulb-icon2.jpg" width="25px"/> on the right panel.

You can select the icon to view public collections from the [API Network](https://www.postman.com/explore/) that share the same base URL as your request and include API documentation to help you get started.

<img alt="Related Collections suggestions" src="https://assets.postman.com/postman-docs/collection-rec-v8.8.0.jpg"/>

You can select any recommended collection to view its contents and documentation. You can also directly fork a recommended collection and utilize it to quick-start your development.

## Universal search

You can access universal search by selecting __Search Postman__ at the top of Postman, or by using the keyboard shortcut `Command + K`.

Enter your search string and change the scope of search to narrow down your search results to all of Postman, your personal or team space, or the Public API Network. You can also change the scope of your search to **Workspaces**, **Collections**, **APIs** or **Teams**.

![Changing scope for universal search](https://assets.postman.com/postman-docs/change-scope-for-universal-search-v9.5.jpg)

> For signed in users, the default search scope on workspaces is Team and on [explore](https://www.postman.com/explore) is Public API Network. For signed out users, all results will contain only public resources since they will not have any private data.

If you do not find what you are looking for in the list of results, select __Search all workspaces, collections, APIs and teams__ and you will find all the results in one page.

<img alt="Search all" src ="https://assets.postman.com/postman-docs/search-all-workspaces-collections-and-teams-v9.5.jpg"/>

The left navigation on the search results page lists the scope and entity type. You can change these options to further filter your results.

<img alt="Universal search results page" src ="https://assets.postman.com/postman-docs/universal-search-results-page-v8.jpg"/>

You can sort the results using **Sort by** on the right, ordered by _Most relevant_ (default), _Most views_, or _Most recent_.

<img alt="Search results sort" src ="https://assets.postman.com/postman-docs/search-result-sort-by-v8.jpg"/>

Depending on the entity type, the search results will contain different information:

* For workspaces, the search result contains the workspace type, summary, who published it, and when was it published.
* For collections, the search result contains the workspace type, whether the collection is a fork or not, who published it, and when was it published.
* For APIs, the search result contains the name and summary of the API, the API's owner (either an individual user or a team), and the type of workspace.
* For teams, the search result contains the name and summary of the team. Select the team name and you will be redirected to the team profile.

## Find and replace

In the Postman app, you can search the current workspace by selecting __Find and Replace__ in the status bar at the bottom left of Postman, or by selecting **⌘+Shift+F** or **Ctrl+Shift+F**.

Enter your search string and optionally choose which entities to return, entering replacement text if necessary.

![Find and replace](https://assets.postman.com/postman-docs/find-and-replace-tab-v8.jpg)

Postman will search tabs, collections, and variables. You can select an item directly in the search results to open an entity.

> Find and Replace is not available in Postman for Web.

## History

You can access a history of the requests you've made in Postman in the __History__ tab on the left of Postman. If you're signed into a Postman account, your history will sync across devices.

<img alt="History Request" src="https://assets.postman.com/postman-docs/history-request-v8.jpg" width="400px"/>

Select a request to open it again. Select __+__ to save the request to a collection. Toggle __Save Responses__ to save request responses so that you can view what was returned by a request when you open it from your history.

The history also includes the collection runs executed. These remain as the summarized version of the run and aren't logged as single requests. The **Save Responses** option can't be used with requests from collection runner.

The __View more actions__ menu allows you to save, monitor, document, or mock a request. Use the delete (trash icon) or __Clear all__ options to remove requests from your history. You can multi-select requests by pressing `Command` or `Control` and selecting the requests.

## Tabs

You can send requests in Postman by opening a new tab. Select __+__ in the center of the screen, or press `Command/Control + T`.

![Tabs](https://assets.postman.com/postman-docs/open-unsaved-tab-options-v8.jpg)

> If you open a request and do not edit or send it, then open another, the first tab will be replaced by the second. While the tab is in _Preview_ mode it will display in italics.

You can have multiple tabs open at the same time as you work, and can drag tabs to rearrange them. Select <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> to manage tabs and access recent tabs.

> Duplicating a tab does not mean creating a second request to the same endpoint—when you duplicate a tab any edits you make will affect the original request.

Postman will display a dot on any tabs with unsaved changes.

A tab may indicate a conflict if you or a collaborator changes it in another tab or workspace. Postman will prompt you to resolve any conflicts that occur.

> You can toggle whether Postman opens requests in new tabs or not in the __Settings__, as well as configuring whether Postman prompts you when closing tabs with unsaved changes.

## Next steps

The best way to get to know Postman is by firing up the __Bootcamp__ on the bottom-right and working through the lessons.

![Bootcamp](https://assets.postman.com/postman-docs/bootcamp-lesson-v8.gif)

You can also access Bootcamp together with other resources for getting started and staying up to date by opening **Home** in the upper-left corner.

![Bootcamp Home](https://assets.postman.com/postman-docs/bootcamp-home-v8.jpg)

__Next try [sending your first request](/docs/getting-started/sending-the-first-request/)!__
