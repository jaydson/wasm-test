# wasm-test
Hacking with wasm

# Hacking yourself
First you'll need to install the tools to start hacking with WebAssembly.  
Grabe the file here: https://s3.amazonaws.com/mozilla-games/emscripten/releases/emsdk-portable.tar.gz  
Extract them and:  
```
./emsdk update
./emsdk install latest
```
This process will take a while.  
Next step:  
```
./emsdk activate latest
source ./emsdk_env.sh
```

Compile the C programs:  
```
emcc counter.c -O1 -o counter.wasm -s WASM=1 -s SIDE_MODULE=1
emcc fibo.c -O1 -o counter.wasm -s WASM=1 -s SIDE_MODULE=1
```
PS: The wasm files for the programs are already versioned here, so you don't need to compile it, but keep in mind if you make some changes or include another C program, you should compile again.  

```
npm istall
npm run build
```

There's an HTML file here, so you just need to serve the whole folder.  

