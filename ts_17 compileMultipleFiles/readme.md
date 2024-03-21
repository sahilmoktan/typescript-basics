tsc fileName.ts
only compiles one at atime

tsc -init //initialization typescript and creates tsconfig.json

tsc -w //watches whole files and continue compiles

in tsconfig.json

//exclude don't compile these files
"exclude": [
    "adminUser.ts"  //particular files
    "src/app.ts"  //particular file in particular folder
    "*/file.ts"  // all files naming files.ts
  ]

  vice versa :Include changes= only compile these named files



  target configuration

  "target": "es2016" allows us to change version of Javascript 
  
  "outDir": "./build", makes all output compilation in /build dir

  "rootDir": "./src", compiles in build dir but without folder
  
  "removeComments": true,    compiles but don't copy comments in js file