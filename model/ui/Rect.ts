export default class Rect {
public get right(): number {
return this.x + this.width;
}
public get bottom(): number {
return this.y + this.height;
}

public constructor(public x: number, public y: number, public width: number, public height: number) {
}
public toString(): string {
return `Rect<(${this.x}, ${this.x}>-(${this.right}, ${this.bottom})>`;
}

static fromDOMRect(domrect: { [propName: string]: any }): Rect {
return new Rect(domrect.x, domrect.y, domrect.width, domrect.height);
}

}
