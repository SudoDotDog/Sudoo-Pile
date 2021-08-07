# Sudoo-Pile

[![Build Status](https://travis-ci.com/SudoDotDog/Sudoo-Pile.svg?branch=master)](https://travis-ci.com/SudoDotDog/Sudoo-Pile)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Pile/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Pile)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fpile.svg)](https://badge.fury.io/js/%40sudoo%2Fpile)
[![downloads](https://img.shields.io/npm/dm/@sudoo/pile.svg)](https://www.npmjs.com/package/@sudoo/pile)

A Pile of Things

## Install

```sh
npm install @sudoo/pile --save
# Or
yarn add @sudoo/pile
```

## Usage

```ts
import { Pile } from "@sudoo/pile";

const pile: Pile<string> = Pile.create();
pile.add(key, value);
pile.get(key); // value
pile.conclude((key, value) => {key, value}); // [{key, value}, {key2, value2}]
```
