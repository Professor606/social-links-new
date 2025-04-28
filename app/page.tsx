import Image from 'next/image';
import Card from '@/components/Card';

export default function Home() {
  return (
    <main className="flex flex-col items-center max-h-screen p-0">
      <Card />
      <footer className="hover:scale-110">
        <Image className="invert w-20"
          width="0"
          height="0"
          src="/next.svg"
          alt="Nextjs Logo"/>
      </footer>
    </main>
  );
}