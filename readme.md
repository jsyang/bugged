# bugged

Replacement for paid simple hit-tracking services. Seeks to be a better reporter and visitor tracker.
Should show pageviews by country with flag.

Deployable to any cloud host that has a free-tier, e.g. Heroku.

## Linking from frontend

```
<body onload="document.getElementById('bugged').src=
'https://obscure-bastion-50206.herokuapp.com/'+btoa(JSON.stringify({
    screenPixelsWidth: screen.width,
    screenPixelsHeight: screen.height,
    referrer: document.referrer,
    time: (new Date()).valueOf()    
}, null, 4)">
    <img id="bugged" style="opacity: 0.1; height: 1px; width: 10px" src="https://obscure-bastion-50206.herokuapp.com/b?eyJzY3JlZW5QaXhlbHNXaWR0aCI6MTkyMCwic2NyZWVuUGl4ZWxzSGVpZ2h0IjoxMDgwLCJyZWZlcnJlciI6IiIsInRpbWUiOjE1MTE0MzYxMTA4MjV9">
</body>
```

Test: 

```js
fetch('https://XXXXXX.herokuapp.com/?'+btoa(JSON.stringify({
    screenPixelsWidth: screen.width,
    screenPixelsHeight: screen.height,
    referrer: document.referrer,
    language: navigator.language
})))

```

Test URL

https://XXXXXX.herokuapp.com/b?eyJzY3JlZW5QaXhlbHNXaWR0aCI6MTkyMCwic2NyZWVuUGl4ZWxzSGVpZ2h0IjoxMDgwLCJyZWZlcnJlciI6IiIsInRpbWUiOjE1MTE0MzYxMTA4MjV9

## License

Bugged is copyright 2018 Jim Yang <jsyang.ca@gmail.com> and licensed under the MIT license.