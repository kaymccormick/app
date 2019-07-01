export default class KeyManager {
    public keys: { [namespace: string]: number | undefined } = { }; 
    public getKey(namespace: string): number {
        if(this.keys[namespace] === undefined) {
            this.keys[namespace] = 1;
            return `${namespace}:1`;
        } else {
            this.keys[namespace] += 1;
            return `${namespace}:this.keys[namespace]`;
        }
    }
}
  
  