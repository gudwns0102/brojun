const path = require("path");
const fs = require("fs");

const indexFilename = "index.ts";

const isDirectory = filepath => fs.statSync(filepath).isDirectory();
const isFile = filepath => fs.statSync(filepath).isFile();
const cleanFilename = filename => filename.replace(/\.(tsx|ts)/, "");
const createOneImportLine = filename =>
  `export * from "./${cleanFilename(filename)}";`;
const getAllEntiresInFilepath = filepath =>
  fs.readdirSync(filepath).filter(entry => entry !== indexFilename);

const traverseFilepathRecursively = filepath => {
  if (isFile(filepath)) {
    throw new Error("You cannot create index for file!");
  }

  const allEntries = getAllEntiresInFilepath(filepath);
  const allDirectories = allEntries.filter(dirname =>
    isDirectory(path.resolve(filepath, dirname))
  );
  const allFiles = allEntries.filter(filename =>
    isFile(path.resolve(filepath, filename))
  );

  createIndexFileForGivenPath(filepath);

  for (const directory of allDirectories) {
    traverseFilepathRecursively(path.resolve(filepath, directory));
  }
};

const createIndexFileForGivenPath = filepath => {
  const content = getAllEntiresInFilepath(filepath)
    .map(filename => createOneImportLine(filename))
    .join("\n");

  fs.writeFileSync(path.resolve(filepath, "index.ts"), content);
};

traverseFilepathRecursively("./src/sections");
