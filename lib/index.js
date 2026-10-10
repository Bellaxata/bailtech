import makeWASocket from './Socket/index.js';
import chalk from "chalk";

console.log("\n");

console.log(chalk.hex("#8b5cf6")(`
    FAMILY XTRX
 BAILEYS SOCKET CUSTOM
PAIRING SUPPORT CUSTOM
SUPPORT RICHMESSAGE 
RELEASE : 10 OCTOBER 2026
`));
console.log(chalk.yellow("\nCREATE.(Xatanicvxii) \n"));
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map
export * as MessageBuilder from './Socket/MessageBuilder.js';
export { default as MB } from './Socket/MessageBuilder.js';
