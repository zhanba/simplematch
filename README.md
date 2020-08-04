# simplematch

simple pattern match for typescript

## Install

```
npm i simplematch
```

## example

```typesript
type DemoType = 'cat' | 'dog' | 'bird';

const result = match<DemoType, string>({
  cat: () => 'return a string',
  dog: () => 'return another string',
  bird: () => 'oh',
});

const result2 = match<DemoType, boolean>({
  cat: () => true,
  dog: () => false,
  bird: () => true,
});
```
