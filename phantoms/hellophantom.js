var page = require('webpage').create(),
    url = "http://council.squiz";
 
page.open(url, function (status) {
    var title = page.evaluate(function () {
        return document.title;
    });
    console.log('Hello, World! The Page title on '+ url +' is ' + title);
    phantom.exit();
});
