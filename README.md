# Pastebin.js
## How to start
First of all you have to download the package with `npm install @jeremyx9/hastebin.js`<br>
<br>
#### include the hastebin.js module
```js
const Hastebin = require("@jeremyx9/hastebin");
```
#### create a paste variable to configure options and create a paste
```js
const paste = new Hastebin();
```
#### create a paste and get the associated key for the paste
```js
async function createPaste() {
    const url = await paste.newPaste("$world = new World();");
    console.log(url); // egasiwulog -> you can set the url before (https://www.toptal.com/developers/hastebin/egasiwulog)
}
```
#### get paste with key
```js
async function getPaste() {
    const data = await paste.getPaste("egasiwulog");
    console.log(data); // $world = new World();
}
```
### Thats it!
