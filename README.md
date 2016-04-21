# strictduck-control-inverted
` npm install --save strictduck strictduck-control-inverted `

A set of tools for building control-inverted [strictducks](https://github.com/strictduck/strictduck).
exports:
 * `depends` for creating strictducks that require dependency injection,
 * `provides` for creating strictducks that implement a `provide` method
 * `Composit as default` for composing the above strictducks leveraging [bottle](https://github.com/young-steveo/bottlejs/tree/master/src/Bottle).

Used by [bufflehead](https://github.com/strictduck/domain-driven-fullstack) to create the control-inverted high-level components types implemented by [bufflehead](https://github.com/strictduck/bufflehead).
