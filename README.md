simple-javascript-templates
===========================

Simple Javascript Temples


###How to Use

```html
<div id="info" class="template">
    <div>
       <ul>
           <li>{{name}}</li>
           <li>{{phone}}</li>
       </ul>
    </div>
</div>
```

```javascript
var infoTemplate = document.querySelector("#info.template");

define(infoTemplate, {"name": "Chase", "phone": "555-5555"}, "body");
```
