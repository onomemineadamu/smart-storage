/* eslint-disable no-unused-vars */
interface ISmartStorageMemory {
  smartStorageMemory: {
    [x: string]: any;
  };
  setItem: Function;
  getItem: Function;
  removeItem: Function;
  clearItems: Function;
}

const SmartStorageMemory: InstanceType<any> = function (this: ISmartStorageMemory) {
  if (!new.target) {
    return new SmartStorageMemory();
  }

  if (typeof SmartStorageMemory.instance === "object") {
    return SmartStorageMemory.instance;
  }

  SmartStorageMemory.instance = this;
  this.smartStorageMemory = {};

  this.setItem = function (key: string, value: any) {
    this.smartStorageMemory[key] = value;
  };

  this.getItem = function (key: string) {
    if (!this.smartStorageMemory[key]) {
      console.group("📦 SmartStorage🚨");
      console.error(`Unrecognized data ${key} to get`);
      console.groupEnd();
      return;
    }

    return this.smartStorageMemory[key];
  };

  this.removeItem = function (key: string) {
    if (!this.smartStorageMemory[key]) {
      console.group("📦 SmartStorage🚨");
      console.error(`Unrecognized data ${key} to remove`);
      console.groupEnd();
      return;
    }

    delete this.smartStorageMemory[key];
  };

  this.clearItems = function () {
    this.smartStorageMemory = {};
  };
} as any as { new (): ISmartStorageMemory };

const smartStorageMemory = new SmartStorageMemory();

// positive check
smartStorageMemory.setItem("name", "Jeremiah Joseph");
console.log("smartStorageMemory", smartStorageMemory);

// positive check
console.log("smartStorageMemory", smartStorageMemory.getItem("name"));

// negative check
console.log("smartStorageMemory", smartStorageMemory.getItem("n"));

// negative check
console.log("smartStorageMemory", smartStorageMemory.removeItem("n"));

const sigletonTest = new SmartStorageMemory();
console.log("Sigleton Test", sigletonTest);

// psitive check
smartStorageMemory.clearItems();
