import * as gcp from 'gcp-metadata';
// uncomment the line below during development
//import * as gcp from '../../../../build/src/index';

const header = gcp.HEADER_NAME;
const headers = gcp.HEADERS;

async function main() {
  const v = await gcp.instance('/somepath');
}

gcp.project('something').then(x => console.log);

main().catch(console.error);