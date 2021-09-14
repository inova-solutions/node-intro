import {promises as fs, constants} from 'fs';

const STORAGE_LOCATION = 'data.json';

export const canAccessStorage = function() {
  return fs.access(STORAGE_LOCATION, constants.W_OK).then(_ => true).catch(_ => false);
}

export const readData = async function() {
  return await canAccessStorage()
    ? fs.readFile(STORAGE_LOCATION, 'utf-8').then(data => data !== '' ? JSON.parse(data) : null)
    : null;
}

export const writeData = function(data) {
  return fs.writeFile(STORAGE_LOCATION, JSON.stringify(data));
}