function PropertyDescriptor(id, name, prop) {
  //! this.name = name
  Object.defineProperty(this, "name", {
    value: name,
    writable: true,
    enumerable: true,
    configurable: true,
  });

  //   Object.defineProperty(this, "prop", {
  //     value: prop,
  //     configurable: true,
  //     writable: true,
  //   });

  this.prop = prop;
}

var pd = new PropertyDescriptor(1, "name 1", { HEIGHT: 33 });
// Object.defineProperty(pd, "name", {
//   value: "name 2",
//   writable: false,
//   configurable: false,
// });
// pd.name = "name 3";

// Object.freeze(pd); //! Cannot add/remove/update new property --> IMMUTABLE

Object.freeze(pd.prop); //! Cannot add/remove property but update the existing property
pd.name = "updated name";
pd.age = 2;
pd.prop.HEIGHT = 1;
console.log(pd);

// Object.defineProperty(pd, pd.__proto__, {
//   enumerable: true,
//   configurable: true,
// });

// console.log(pd.__proto__);
