# What's For Lunch

A single page Angular application which allows users to find options for lunch.  A user enters their chosen lunch and the page will show the name, vendor, image and cost of the lunch.

## Getting Started

```
git clone https://github.com/katylouise/whats_for_lunch.git
cd whats_for_lunch
npm install
bower install
open index.html
```

## Testing

For karma tests:
```
npm test
``

For protractor tests:
```
webdriver-manager start && http-server
protractor test/e2e/conf.js
```


