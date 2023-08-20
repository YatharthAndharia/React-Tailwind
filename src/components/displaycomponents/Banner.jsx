import { CgMail } from 'react-icons/cg';
import { BsTwitter, BsDiscord, BsLinkedin, BsGithub } from 'react-icons/bs';
import ReactTyped from 'react-typed';
import cursor from 'react-typed/dist/animatedCursor.css';

export default function Banner({ menuToggle }) {
  return menuToggle ? (
    <div className="w-full bg-[#111111] py-[100px]">
      <div className="mx-auto max-w-[#1240px] text-[#666666] text-center font-bold">
        <div className="text-[20px] md:text-[25px]">Connect With Me</div>
        <div className="text-4xl md:text-6xl">
          <ReactTyped
            className="hover:text-white"
            strings={[
              '',
              'E',
              'Ex',
              'Exp',
              'Expl',
              'Explo',
              'Explor',
              'Explore',
              'Explore ',
              'Explore W',
              'Explore We',
              'Explore Web',
              'Explore Web3',
            ]}
            loop={true}
            typeSpeed={0.0001}
          ></ReactTyped>
        </div>
        <div className="text-[25px] md:text-[30px] flex justify-center items-center my-4">
          <div className="px-4 hover:text-white">
            <a href="https://github.com/YatharthAndharia?tab=repositories">
              <BsGithub></BsGithub>
            </a>
          </div>
          <div className="px-4 hover:text-white">
            <a href="https://discordapp.com/users/1086909077566783508">
              <BsDiscord></BsDiscord>
            </a>
          </div>
          <div className="px-4 hover:text-white">
            <a href="https://twitter.com/_Yatharth__">
              <BsTwitter></BsTwitter>
            </a>
          </div>
          <div className="px-4 hover:text-white">
            <a href="https://www.linkedin.com/in/yatharth-andharia-b73506214/">
              <BsLinkedin></BsLinkedin>
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
