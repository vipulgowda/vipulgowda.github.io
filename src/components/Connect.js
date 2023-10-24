import Insta from "../assets/insta.jpeg";
import Reddit from "../assets/reddit.svg";
import LinkedIn from "../assets/linkedIn.png";
import Github from "../assets/github.png";

export default function Connect() {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 grid grid-cols-5 place-items-center">
        <p className="text-gray-600 lg:text-base text-xs">Connect on</p>
        <a
          href="https://www.instagram.com/vipulgowda/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={Insta}
            className="lg:h-12 lg:w-12 h-9 w-9 rounded-full"
            alt="Instagram link"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/vipul-gowda/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={LinkedIn}
            className="lg:h-12 lg:w-12 h-9 w-9 rounded-full"
            alt="LinkedIn link"
          />
        </a>
        <a
          href="https://github.com/vipulgowda"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={Github}
            className="lg:h-12 lg:w-12 h-9 w-9 rounded-full"
            alt="Github link"
          />
        </a>
        <a
          href="https://www.reddit.com/user/HornetMaster8736"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={Reddit}
            className="lg:h-12 lg:w-12 h-9 w-9 rounded-full"
            alt="Reddit link"
          />
        </a>
      </div>
    </div>
  );
}
