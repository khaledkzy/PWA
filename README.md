# PWA

## Steps to recreate the whole project from SCRATCH

> cd to wherever you want.
> type: npm init - this will create the package JSON file for you you can create it manually if you which.
> btw you can bunle your npm package as long as you have a package.json
<https://docs.npmjs.com/getting-started/publishing-npm-packages>
>Then add the manifest json link the html page as well as view port

```html
  <meta name="viewport" content="width=device-width, user-scalable=no" />
  <link rel="manifest" href="manifest.json" />
```

>Now (ctrl+shift+i) and open manifest nothing is there !? Yes because you should be running from a server.
>to check if your service worker is working properly chrome://serviceworker-internals/
> There is no service worker registerd ??? offcourse you forget to add site.js to your html
