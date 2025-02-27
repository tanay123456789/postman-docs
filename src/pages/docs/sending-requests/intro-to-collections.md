---
title: "Grouping requests in collections"
order: 23.1
page_id: "intro_to_collections"
updated: 2022-02-03
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Ping Identity"
    url: "https://www.postman.com/case-studies/pingidentity/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman & Postman Collections"
    url: "https://www.youtube.com/watch?v=ptvV_Fc3hd8"
  - type: dynamic_blog
    name: "Related Blog Posts"
    blog_tag: "collections"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Using the Collection Runner"
    url: "/docs/running-collections/intro-to-collection-runs/"

warning: false
---

You can group your Postman requests and examples into collections to keep your workspace organized, to collaborate with teammates, to generate API documentation and test suites, and to automate request runs.

Select **Collections** in the left sidebar of Postman to see the list of collections in a workspace.

<img alt="" src="https://assets.postman.com/postman-docs/collections-overview.jpg" width="300px"/>

## Contents

* [Creating collections](#creating-collections)
* [Adding requests to a collection](#adding-requests-to-a-collection)
    * [Moving an existing request to a different collection](#moving-an-existing-request-to-a-different-collection)
    * [Adding a new request to a collection](#adding-a-new-request-to-a-collection)
    * [Creating a new request inside a collection](#creating-a-new-request-inside-a-collection)
    * [Adding a request to an empty collection](#adding-a-request-to-an-empty-collection)
    * [Adding a request from your history to a collection](#adding-a-request-from-your-history-to-a-collection)
* [Managing collections](#managing-collections)
    * [Basic actions](#basic-actions)
    * [Adding folders to a collection](#adding-folders-to-a-collection)
    * [Deleting a collection](#deleting-a-collection)
    * [Recovering a deleted collection](#recovering-a-deleted-collection)
    * [Sharing a collection](#sharing-a-collection)
    * [Forking a collection](#forking-a-collection)
    * [Adding comments to a collection](#adding-comments-to-a-collection)
    * [Reverting collection changes](#reverting-collection-changes)
    * [Viewing pull requests, forks, and collection details](#viewing-pull-requests-forks-and-collection-details)
* [Using collections in development workflows](#using-collections-in-development-workflows)

## Creating collections

There are several ways to create a new collection:

* Select **Collections** in the left sidebar, then select **+**.

    <img alt="Create new collection" src="https://assets.postman.com/postman-docs/new-collection.jpg" width="300px"/>

* Select the **New** button, then select **Collection**.
* Select **Home** in the Postman header. Select **Create New**, then select **Collection**.

Once you have created a new collection, you can customize and configure it:

1. Select the pencil icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> to give your new collection a name.
1. You can optionally specify a [description](/docs/publishing-your-api/authoring-your-documentation/) for your collection. Select the documentation icon <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg" width="16px" style="vertical-align:middle;margin-bottom:5px">, then select the pencil icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> to write your description. This description will appear in its documentation and in the workspace when anyone opens it.
1. Select **Authorization** to configure authorization details for the collection.
1. Select **Pre-request Script** to define a [pre-request script](/docs/writing-scripts/pre-request-scripts/) for your collection, which will run before requests are sent to the server.
1. Select **Tests** to define a [test script](/docs/writing-scripts/test-scripts/) for your collection, which will run after a response is received.
1. Select **Variables** to define values for [collection variables](/docs/sending-requests/variables/) to share across all requests in the collection.

[![Edit collection details](https://assets.postman.com/postman-docs/collection-details.jpg)](https://assets.postman.com/postman-docs/collection-details.jpg)

## Adding requests to a collection

There are several ways to add existing and new requests to a collection.

### Moving an existing request to a different collection

To move an existing request to a different collection:

1. Select the request you want to move.
1. Drag and drop the request into into the desired collection.

> Alternatively, open the request and select **Save As**, then choose the collection you want to move it to.

### Adding a new request to a collection

To add a new request to a collection:

1. From a new request, select **Save**.
1. Choose the collection you want to move it to, and then select **Save**.
1. To create a new collection to save the request to, select **New Collection**.

### Creating a new request inside a collection

To create a new request inside a collection:

1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the collection name.
1. Select **Add Request** from the actions menu.

    <img alt="Add request to folder" src="https://assets.postman.com/postman-docs/collection-menu-v9.jpg" width="350px"/>

> Alternatively, select **New**, and then select **Request**.

### Adding a request to an empty collection

To add a request to an empty collection:

1. Select the collection, then select **Add a request**.

    <img alt="Add a request to an empty collection" src="https://assets.postman.com/postman-docs/empty-collection-add-request.jpg" width="290px"/>

### Adding a request from your history to a collection

To save a request from your history:

1. Select **History** in the left sidebar.
1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the request you want to save.
1. Select **Save Request**.

    <img alt="Save request from history" src="https://assets.postman.com/postman-docs/save-history-v9.jpg" width="350px"/>

1. Choose the collection to add the request to, then select **Save**.

> Alternatively, select the **+** button next to the request.

## Managing collections

### Basic actions

From the list of collections in your workspace, you can:

* Select a collection to open its overview in a tab.
* Open and close collection content by selecting the arrow to the left of the collection name.
* Hover over a collection name and select the star icon &#9733; to move that collection to the top of the list.
* Use the collection search bar to filter through your collections.
* Reorder the requests, folders, and examples inside a collection by dragging and dropping them.

### Adding folders to a collection

To add a folder to your collection:

1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> to the right of the collection name.
1. Select **Add folder**.

You can also add sub-folders to create extra levels of nesting for the collection's requests and examples.

### Deleting a collection

To delete a collection:

1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> to the right of the collection name.
1. Select **Delete**.

> If a deleted collection is larger than 30 MB, you will not be able to [recover it](#recovering-a-deleted-collection). To avoid this, you can split the collection into smaller pieces before deleting it, or back up the collection first.

### Recovering a deleted collection

To recover a deleted collection:

1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the collection search bar.
1. Select **Open Trash**.

    > Alternatively, select the trash can icon <img alt="External link icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg" width="12px" style="vertical-align:middle;margin-bottom:5px"> from the status bar in the bottom right corner in Postman.

1. In the Trash page, select the restore icon <img alt="External link icon" src="https://assets.postman.com/postman-docs/icon-restore-v9.jpg" width="12px" style="vertical-align:middle;margin-bottom:5px"> next to the collection you want to recover.

> Deleted collections that are larger than 30 MB cannot be recovered.

Recovery options depend on your Postman plan:

* Free account: Recover collections up to one day old.
* Postman Basic: Recover collections for up to 30 days.
* Postman Professional and Enterprise: Recover collections for up to 90 days.

> If you do not see a collection that you expected to see in the Trash page, it may have been removed from a workspace rather than deleted. If the collection appears in another workspace, you can move it by selecting **Share**.

### Sharing a collection

To share your collections with other users, you can:

* Publish a [Run in Postman](/docs/publishing-your-api/run-in-postman/creating-run-button/) button.
* Invite others to collaborate by selecting the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the collection name, then selecting **Share**. Learn more about [sharing elements in Postman](/docs/collaborating-in-postman/sharing/#sharing-postman-entities).
* Move the collection to a shared workspace by selecting the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the collection name, then selecting **Move**. Learn more about [moving Postman elements](/docs/collaborating-in-postman/sharing/#moving-postman-entities-to-collaborative-workspaces).

### Forking a collection

You can fork collections in your own workspace to [develop collection versions](/docs/collaborating-in-postman/version-control-for-collections/). To fork a collection:

1. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> to the right of the collection name
1. Select **Fork**.

> Alternatively, select the fork icon <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg" width="14px" style="vertical-align:middle;margin-bottom:5px"> from the collection overview.

### Adding comments to a collection

To add a comment at the collection level:

1. Select the comment icon <img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> from the right of the collection overview.
1. Write your comment, then select **Add Comment**.

### Reverting collection changes

To revert your collection to a previous state:

1. Select the changelog icon <img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-changelog-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> from the right of the collection overview.
1. Select **Restore** for the state to which you want to revert the collection.

    <img alt="Revert collection to a previous state with the changelog" src="https://assets.postman.com/postman-docs/collection-changelog.jpg" width="300px"/>

### Viewing pull requests, forks, and collection details

From the context bar to the right of the collection overview:

* To view pull requests for a collection, select the pull request icon <img alt="Pull request icon" src="https://assets.postman.com/postman-docs/icon-pull-request.jpg" width="16px" style="vertical-align:middle;margin-bottom:5px">
* To view forks created from a collection, select the fork icon <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg" width="16px" style="vertical-align:middle;margin-bottom:5px">
* To view additional information about the collection, including mock servers, monitors, and integrations, select the info icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg" width="16px" style="vertical-align:middle;margin-bottom:5px">

## Using collections in development workflows

Collections can power various parts of your API development, testing, and publishing workflows.

* Select **Run** to access the [Collection Runner](/docs/running-collections/intro-to-collection-runs/), which allows you to run all requests in a collection and build testing workflows into your runs.
* Select the documentation icon <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg" width="16px" style="vertical-align:middle;margin-bottom:5px"> to generate [API documentation](/docs/publishing-your-api/documenting-your-api/) from a collection.
* Attaching a [monitor](/docs/monitoring-your-api/intro-monitors/) to a collection lets you schedule collection runs. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the collection name, and then select **Monistor collection**.
* You can use [mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) to return sample data during testing and development. Select the three dots <img alt="Three dots icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg" width="18px" style="vertical-align:middle;margin-bottom:5px"> next to the collection name, and then select **Mock collection**.
* Generate collections from API specifications using the [Postman API Builder](/docs/designing-and-developing-your-api/the-api-workflow/).
