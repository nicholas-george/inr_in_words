# inr_in_words

A javascript utility to convert numbers into Indian currency.

## Use

If you want to just play around, copy / paste the whole code from [index.js](https://github.com/nicholas-george/inr_in_words/blob/master/index.js) into your browser console. Then in try the following.
```javascript
inrWords(100000000000000)
{"no":"₹ 1,00,00,000,00,00,000", "words":"₹ One crore crores"}

inrWords(10000000.10)
{"no":"₹ 1,00,00,000.10","words": "₹ One crore and ten paisa"}

inrWords(10000000.10, '', '')
{"no":"1,00,00,000.10","words": "One crore and ten"}

```
A few more variations are possible. For a full list, pl. look at [index.test.js](https://github.com/nicholas-george/inr_in_words/blob/master/index.test.js).

## Use in your projects..


### In browser 
    You can  use it as an ES6 module, in your projects as it is.

### With Node
To use as a node commonjs module change the last line from 'export default inrWords;' to 'module.exports = inrWords;'

### With Google Sheets
With a minor tweek, this code can be used in Google appscripts and used in Google sheets. There is a [Google Sheets AppScript version](https://github.com/nicholas-george/inr_in_words/blob/master/googleAppScript.js). You can just copy paste the whole code from here into your google sheet appscript. Then in your sheet, there are four functions: (Assuming cell A2 has your number '250,000.00'), type in cell B2

  ```Appscript
    =inr_Words(A2) 
    ₹ Two lacs fifty  thousand

    =inr_Nos(A2)
    ₹ 2,50,000

    =inr_Words_Plain(A2)
    Two lacs fifty  thousand
    
    =inr_Nos_Plain(A2)
    2,50,000
  ```


## Indian currency converter?

Most international currency handlers split numbers in three digit parts. The larger ones turn into million, billion, trillion etc. But the Indian currency is split into 3 digit -> hundred, 2 digit -> thousand and 2 digit - lacs. Beyond this it is in crores. And there is no eqivalent of billion, trillion etc. 

  For example, 
  a number like '9999999999999999' becomes "₹ 9,99,99,999,99,99,999"
  And in words, "₹ Nine crore ninety-nine lac ninety-nine thousand nine hundred ninety-nine crore ninety-nine lac ninety-nine thousand nine hundred ninety-nine"

## Hey, there is an Elixir version!

If you are looking for an Elixir version to convert numbers for Indian currency, you can look at [Indian_Currency_Coverter](https://github.com/nicholas-george/Indian-Currency-Converter).

## Copyright and License

Copyright (c) 2022 Nicholas George

This work is free. You can redistribute it and/or modify it under the terms of the MIT License. See the [LICENSE.md](https://github.com/nicholas-george/inr_in_words/blob/master/LICENSE) file for more details.
