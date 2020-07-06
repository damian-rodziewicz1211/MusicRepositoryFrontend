export class Album {
  albumId: number;
  title: string;
  artist: string;
  tracks = new Map<string,string>();
  genre: string;
  cover: string;
  deezerId: number;
}
