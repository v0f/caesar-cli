# Caesar cipher CLI tool

This CLI tool will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)

## Prerequisites: install NPM modules

``` bash
$ npm install
```

## Running application

```bash
$ node caesar <options>
```

### CLI options

1.  **-s, --shift**: shift
2.  **-a, --action**: action encode/decode
3.  **-i, --input**: input file
4.  **-o, --output**: output file

### Usage example


```bash
$ node caesar -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
$ node caesar --action encode --shift 7 --input plain.txt --output encoded.txt
```

```bash
$ node caesar --action decode --shift 7 --input decoded.txt --output plain.txt
```
