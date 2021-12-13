---
title: "How to convert markdown files to react component"

warning: false

---

## Summary 

This feature will allow HTML strings to be parsed and return as one or more React JSX Elements with styling.

### Resources and Files
<ul>
<li><a href='https://github.com/remarkablemark/html-react-parser'>HTML-React-Parser</a></li>
<li><code>./doc.jsx</code></li>
<li><code>.src/html-react-parser/ folder</code></li>
</ul>

### Example (Doc.jsx)
#### At Top of File

<code>import parse from 'html-react-parser';</code>

<code>import ConvertMDToReactComponent from  '../html-react-parser/ConvertMDToReact'</code>

#### Return Statement

<code>{parse(post.html,  ConvertMDToReactComponent)}
</code>

--- 

## Options
This is a list of conditionals declared in the "ConvertMDToReact " file to convert the targeted element into a component.

--- 

- Remove hardcoded a tag and add modal when user clicks on image

