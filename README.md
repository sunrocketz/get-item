# get-item

> Get item value of an array at postive or negative index

## Install

```
$ npm install get-item
```

## Usage

```js
import getItem from 'get-item'
// const getItem = require('get-item')

const array = ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

getItem(array, 1)
// 'e'

getItem(array, -1)
// 'd'

getItem(array, -5)
// 'w'
```
