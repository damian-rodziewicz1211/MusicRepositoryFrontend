export class Album {
  id: number;
  title: string;
  artist: string;
  tracks = new Map();
  genre: string;
}
