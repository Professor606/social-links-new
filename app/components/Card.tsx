import Link from 'next/link';
import Image from 'next/image';

const Card = () => { 
    return (
        <div id="card" className="flex justify-evenly flex-col items-center content-center bg-card rounded-lg mx-0 mt-14 w-[75%] p-4 max-w-[400px] backdrop-blur-md shadow-[0px_3px_25px_rgba(0,136,169,0.6)]">

          <Image className="w-[30%] max-w-24 rounded-full hover:scale-110"
          width="0"
          height="0"
          src="/favicon.ico"
          alt="Profile Image"
          priority />

          <div className="text-3xl my-3">Ahmad Essam</div>

          <div className="text-greena text-xl mb-3 hover:scale-110">Amman&#44; Jordan</div>

          <div className="text-xl my-4 text-center">&#39;Front-end Developer &amp; Cyber Security Expert.&#39;</div>

          <div id="incard" className="bg-incard py-[0.75rem] w-[17rem] sm:w-[19rem] hover:w-[15rem] justify-center flex items-center rounded-lg mt-[0.5rem]">
            <Link href="https://github.com/Professor606" target="_blank" className="font-medium text-xl hover:scale-110 hover:cursor-pointer hover:text-greena">GitHub</Link>
          </div>

          <div className="bg-incard py-[0.75rem] w-[17rem] sm:w-[19rem] justify-center flex items-center hover:w-[15rem] rounded-lg mt-[0.5rem]">
            <Link href="https://linkedin.com/in/ahmad-essam-61a50832b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="font-medium text-xl hover:text-[#0A5CB0] hover:cursor-pointer hover:scale-110">LinkedIn</Link>
          </div>

          <div className="bg-incard py-[0.75rem] w-[17rem] sm:w-[19rem] justify-center flex items-center hover:w-[15rem] rounded-lg mt-[0.5rem]">
            <Link href="https://t.me/professor606" target="_blank" className="font-medium text-xl hover:text-[#2890C3] hover:cursor-pointer hover:scale-110">Telegram</Link>
          </div>

          <div className="bg-incard py-[0.75rem] w-[17rem] sm:w-[19rem] justify-center hover:w-[15rem] flex items-center rounded-lg mt-[0.5rem]">
            <Link href="https://instagram.com/xahmad606?igsh=ODJua2c2MDNycGZi" target="_blank" className="font-medium text-xl hover:text-[#E1306C] hover:cursor-pointer hover:scale-110">Instagram</Link>
          </div>
          
          <div className="bg-incard py-[0.75rem] w-[17rem] sm:w-[19rem] justify-center hover:w-[15rem] flex items-center rounded-lg mt-[0.5rem]">
            <Link href="https://open.spotify.com/playlist/61MhjIE59Qk5RjcBLSZTJV?si=WnCwx6vxToSEMSX1qMc84g&pi=4uhQo44nThKq3" target="_blank" className="font-medium text-xl hover:text-[#1BC258] hover:cursor-pointer hover:scale-110">Spotify</Link>
          </div>
        </div>
    );
}
export default Card;