import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';
import * as path from 'path';

const resolversArray = fileLoader(path.join(__dirname, './types'), {
  extensions: ['.ts'],
  recursive: true,
});

export default mergeResolvers(resolversArray);
