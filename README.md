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

```https://github.com/nicholas-george/Indian-Currency-Converter/blob/master/lib/inr_word.exhttps://github.com/nicholas-george/Indian-Currency-Converter/blob/master/lib/inr_word.ex

You can also use it as an ES6 module, in your projects as it is.

## Installation

The package can be installed by adding `inr_word` to your list of dependencies in `mix.exs`:

```elixir
def deps do
  [
    {:inr_word, "~> 0.1.0"}
  ]
end
```

The docs can be found at <https://hexdocs.pm/inr_word>.

## Why another currency converter?

Most international currency handlers split numbers in three digit parts. The larger ones turn into million, billion, trillion etc. But the Indian currency is split into 3 digit -> hundred, 2 digit -> thousand and 2 digit - lacs. Beyond this it is in crores. And there is no eqivalent of billion, trillion etc. 

  For example, 
  a number like '9999999999999999' becomes "₹ 9,99,99,999,99,99,999"
  And in words, "₹ Nine crore ninety-nine lac ninety-nine thousand nine hundred ninety-nine crore ninety-nine lac ninety-nine thousand nine hundred ninety-nine"

Did not find anything in the open source and in Elixir. Also since the code is not large (109 lines) this may be useful for a Elixir beginner to learn things that I learnt doing this project -- recursion, pattern matching, Enum, Map, String....

## Hey, there is an Elixir version!

If you are looking for an Elixir version, you can look at [Indian_Currency_Coverter](https://github.com/nicholas-george/Indian-Currency-Converter).

## Copyright and License

Copyright (c) 2022 Nicholas George

This work is free. You can redistribute it and/or modify it under the terms of the MIT License. See the [LICENSE.md](https://github.com/nicholas-george/Indian-Currency-Converter/blob/master/LICENSE) file for more details.