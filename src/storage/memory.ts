export const checkMemory = () => { }

function Memory(this: any) {
    if (!new.target) {
        return arguments.callee()
    }

    this.smartStorageMemory = {}


    this.setItem = function (key: string, value: any) {
        if (this.smartStorageMemory[key] !== value) {
            this.smartStorageMemory[key] = value
        }
        return;
    }

    this.getItem = function (key: string) {
        return this.smartStorageMemory[key]
    }

    this.removeItem = function (key: string) {
        delete this.smartStorageMemory[key]
    }

    this.clear = function () {
        delete this.smartStorageMemory;

    }
}

export const memory = Memory();
