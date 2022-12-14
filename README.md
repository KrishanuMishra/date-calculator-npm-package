# Date Calculator npm Package
 
 # Prerequisite
 This project requires NodeJS (version 8 or later) and NPM. Node and NPM are really easy to install. To make sure you have them available on your machine, try running the following command.
 
 ```
 $ npm -v && node -v
6.4.1
v8.16.0
 ```

# Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

To install and set up the library, run:
```
$ npm i is-date-calculator
```

Or if you prefer using Yarn:

```
$ yarn add is-date-calculator
```

# Usage

##

## To add days to a date:

```
const d = require("is-date-calculator");

const b = new d();
const date = new Date();// 8/8/2022
const c = b.addDays(date,10);

console.log(c.toLocaleDateString());
```
### Output
```
18/8/2022
```
## To subtract days from a date:

```
const d = require("is-date-calculator");

const b = new d();
const date = new Date();// 8/8/2022
const c = b.subDays(date,10);

console.log(c.toLocaleDateString());
```
### Output
```
29/7/2022
```

## To find difference between two dates:
```
const d = require("is-date-calculator");

const b = new d();
const date1 = new Date('1/1/1');
const date2 = new Date('2/2/2');
const day = b.diffDays(date1,date2);
const month = b.diffMonth(date1,date2);
const year = b.diffYear(date1,date2);


console.log(day);
console.log(month);
console.log(year);
```

### Output
```
397
14
1
```
