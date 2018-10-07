import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import * as path from 'path';

const typesArray = fileLoader(path.join(__dirname, './types'), {
  extensions: ['.graphql'],
  recursive: true,
});

export default mergeTypes(typesArray, { all: true });
