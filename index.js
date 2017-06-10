import Counter from './counter'
import Fibonacci from './fibo'

window.wasmCounter = () => {
    const counter = new Counter({
      'env': {
        'memoryBase': 0,
        'tableBase': 0,
        'memory': new WebAssembly.Memory({initial: 256}),
        'table': new WebAssembly.Table({initial: 0, element: 'anyfunc'})
      }
    })
    return counter.exports._count();
}

window.wasmFibo = (n) => {  
    const fibo = new Fibonacci({
      'env': {
        'memoryBase': 0,
        'tableBase': 0,
        'memory': new WebAssembly.Memory({initial: 256}),
        'table': new WebAssembly.Table({initial: 0, element: 'anyfunc'})
      }
    })
 	return fibo.exports._Fibonacci(n);
}