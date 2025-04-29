import Link from 'next/link';
import Image from 'next/image';

const Card = () => {
  return (
    <main className="flex-center bg-card rounded-lg my-12 w-[75%] p-4 max-w-96 my-shadow">

      <Image className="w-[30%] max-w-24 rounded-full hover:scale-110"
      width="0"
      height="0"
      src="/favicon.ico"
      alt="Profile Image"
      priority />

      <div className="text-3xl my-3">Ahmad Essam</div>

      <div className="text-greena text-xl mb-3 hover:scale-110">Amman&#44; Jordan</div>

      <div className="text-xl my-4 text-center">&#39;Front-end Developer &amp; Cyber Security Expert.&#39;</div>

      <div className="incard">
        <Link className="link hover:text-github" target="_blank" href="https://github.com/Professor606">Github</Link>
      </div>

      <div className="incard">
        <Link className="link hover:text-linkedin" target="_blank" href="https://linkedin.com/in/ahmad-essam-61a50832b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin</Link>
      </div>

      <div className="incard">
        <Link className="link hover:text-telegram" target="_blank" href="https://t.me/professor606">Telegram</Link>
      </div>

      <div className="incard">
        <Link className="link hover:text-instagram" target="_blank" href="https://instagram.com/xahmad606?igsh=ODJua2c2MDNycGZi">Instagram</Link>
      </div>
      
      <div className="incard">
        <Link className="link hover:text-spotify" target="_blank" href="https://open.spotify.com/playlist/61MhjIE59Qk5RjcBLSZTJV?si=WnCwx6vxToSEMSX1qMc84g&pi=4uhQo44nThKq3">Spotify</Link>
      </div>
    </main>
    );
}
export default Card;