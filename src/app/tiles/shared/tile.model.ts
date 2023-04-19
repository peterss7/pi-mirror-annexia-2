export class Tile {
    constructor(
        public id: number,
        public  name: string,
        public quote: string,
        public photoUrl: string,
        public isActive: boolean,
        public editing: boolean
    ) {}
}
