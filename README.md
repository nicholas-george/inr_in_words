# inr_in_words
[![Elixir CI](https://github.com/nicholas-george/Indian-Currency-Converter/actions/workflows/elixir.yml/badge.svg)](https://github.com/nicholas-george/Indian-Currency-Converter/actions/workflows/elixir.yml)

An javascript utility to convert numbers into Indian currency.

## Use

If you want to just play around, copy / paste the whole code from [lib/inr_word.ex](https://github.com/nicholas-george/Indian-Currency-Converter/blob/master/lib/inr_word.ex) into your browser console. Then in call
```javascript
inrWords(100000000000000)
{"no":"₹ 1,00,00,000,00,00,000","words":"₹ one crore crores"}

inrWords(10000000.10)
{"no":"₹ 1,00,00,000.10","words":"₹ one crore and ten paisa"}

inrWords(10000000.10, '', '')
{"no":"1,00,00,000.10","words":"one crore and ten"}

```
A few more variations are possible. For a full list, pl. look at [index.test.js](https://github.com/nicholas-george/inr_in_words/blob/master/index.test.js).

## In your projects..

You can  use it as an ES6 module, in your projects as it is.

To use as a node commonjs module change the last line to 'module.exports = inrWords;'

With a minor tweek, this code can be use in Google appscripts and use in Google sheets. 
  (line 75 'return leftPart;' has to be changed into 
           'return leftPart.no;')  if u want  only the number
           'return leftPart.words;')  if u want  only the words.)

## Indian currency converter?

Most international currency handlers split numbers in three digit parts. The larger ones turn into million, billion, trillion etc. But the Indian currency is split into 3 digit -> hundred, 2 digit -> thousand and 2 digit - lacs. Beyond this it is in crores. And there is no eqivalent of billion, trillion etc. 

  For example, 
  a number like '9999999999999999' becomes "₹ 9,99,99,999,99,99,999"
  And in words, "₹ Nine crore ninety-nine lac ninety-nine thousand nine hundred ninety-nine crore ninety-nine lac ninety-nine thousand nine hundred ninety-nine"

## Hey, there is an Elixir version!

If you are looking for an Elixir version to convert numbers for Indian currency, you can look at [Indian_Currency_Coverter](https://github.com/nicholas-george/Indian-Currency-Converter).

## Copyright and License

Copyright (c) 2022 Nicholas George

This work is free. You can redistribute it and/or modify it under the terms of the MIT License. See the [LICENSE.md](https://github.com/nicholas-george/Indian-Currency-Converter/blob/master/LICENSE) file for more details.