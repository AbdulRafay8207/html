class User {

}

 const contents = await fsPromises.readFile('../database.json', { encoding: 'utf8' });
 const data = JSON.parse(contents)