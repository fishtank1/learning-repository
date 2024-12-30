# CSS Features

## Custom Properties

We can create variables storing data and use them as a value for our properties. Using them helps us to better maitain our code as we can declare these variables at one place and assign them where ever required. When a change is needed to be made we can make change into the variable and it will reflect around all the places they were assigned. Look into the syntax below.
These custom properties are defined within a scope, use `:root` for the root scope.
Scope are selectroes.

```
scope {
    --variable-name: variablevalue;
}

selector {
    property: var(--variable-name);
}
```
