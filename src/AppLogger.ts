import { BasicLogger } from './types';

function _getCallerFile() {
    const originalFunc = Error.prepareStackTrace;

    let callerfile;
    let callerlineno;
    try {
        const err = new Error();

        Error.prepareStackTrace = (myErr, stack) => stack;

// @ts-ignore
const x = err.stack.shift();
        const currentfile = x.getFileName();
//        const currentlineno = x.getLineNumber();
        //      process.stderr.write(`${currentfile} ${currentlineno}\n`);

// @ts-ignore
while (err.stack.length) {
// @ts-ignore
const x2 = err.stack.shift();
            callerfile = x2.getFileName();
            callerlineno = x2.getLineNumber();

            if (currentfile !== callerfile) break;
        }
    } catch (e) {
        console.log(e);
    }

    Error.prepareStackTrace = originalFunc;

    return [callerfile, callerlineno];
}

interface Args {
logger?: BasicLogger;
}
export class AppLogger implements BasicLogger {
private logger?: BasicLogger;
public constructor(args?: Args) {
if(args && args.logger) {
this.logger = args.logger;
}
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    public debug(message: string, meta?: any): void {
        let meta2;
        if(meta !== undefined) {
            meta2 = Object.assign({}, meta);
            delete meta2.msg;
        } else {
            meta2 = {};
        }
        let myMsg = message;
        if(meta && meta.msg) {
            myMsg += meta.msg;
        }
	const [ file, line ] = _getCallerFile();
        console.log(`${file}:${line}: ${myMsg}`);
    }
    public error(message: string, meta?: any): void {
        let meta2;
        if(meta !== undefined) {
            meta2 = Object.assign({}, meta);
            delete meta2.msg;
        } else {
            meta2 = {};
        }
        let myMsg = message;
        if(meta && meta.msg) {
            myMsg += meta.msg;
        }
	const [ file, line ] = _getCallerFile();
	              console.log(`${file}:${line}: ERROR ${myMsg}`);
    }

}
