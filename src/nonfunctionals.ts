export function logger(callbackFunc: any){
    return (...args: any[]) => {
        console.log('arguments: ', ...args)
        const result = callbackFunc(...args)
        console.log('result: ', result)
    }        
}

export function profiler(callbackFunc: any){
    const funcName = callbackFunc.name;
    return (...args: any[]) => {
        console.time(funcName);
        const results = callbackFunc(...args);
        console.timeEnd(funcName);
        return results;
    };
}