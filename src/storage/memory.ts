export const checkMemory => () => {}


function Memory(){
    if(!new.target){
        return arguments.callee()
    }

    setItem(key:string,value:any){
        //storyewith memo consideration. Note every storage goes to smartStorageMemory ref key
    }

    getItem(key:string){
        //get operation
    }

    removeItem(key:string){
        //remove operation
    }

    clear(){
        //delete smartStorageMemory that holds all other data as a key
    }
}

export memory = Memory();
