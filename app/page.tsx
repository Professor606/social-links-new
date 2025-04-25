import Image from 'next/image';
import Card from './components/Card';
export default function Home() {
  return (
    <main className="flex flex-col items-center max-h-screen p-0">
      <Card />
      <footer className="mt-[5rem] mb-[1rem] hover:scale-125">
        <Image className="invert w-[5rem]"
          width="0"
          height="0"
          src="/next.svg"
          alt="Nextjs Logo"/>
      </footer>
    </main>
  );
}