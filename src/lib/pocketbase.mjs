import PocketBase from 'pocketbase';
export const PB_URL = 'https://sae203.noemiecaritey.fr:443';
const pb = new PocketBase(PB_URL);

export default pb;