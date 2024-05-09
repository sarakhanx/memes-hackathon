interface Meme {
    id:number
    meme: string;
  }
  interface Props {
    meme: Meme | null;
}
interface FacebookShareButtonProps {
  url: string | undefined;
  quote: string;
}