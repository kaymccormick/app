export default class KeyManager {
    public keys: { [namespace: string]: number } = { }; 
    public getKey(namespace: string): string {
        if(this.keys[namespace] === undefined) {
            this.keys[namespace] = 1;
            return `${namespace}:1`;
        } else {
            this.keys[namespace] += 1;
            return `${namespace}:${this.keys[namespace]}`;
        }
    }
}
  
  