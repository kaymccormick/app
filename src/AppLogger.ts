export class AppLogger {
debug(message: string, meta?: any) {
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
console.log(myMsg);
}
}
