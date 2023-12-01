import Link from "next/link";
import { InstagramIcon, TwitterIcon, FacebookIcon } from "lucide-react";

function Socials({ containerStyles }) {
  return (
    <ul>
      <li className={`${containerStyles}`}>
        <Link href="/">
          <InstagramIcon></InstagramIcon>
        </Link>
        <Link href="/">
          <TwitterIcon></TwitterIcon>
        </Link>
        <Link href="/">
          <FacebookIcon></FacebookIcon>
        </Link>
      </li>
    </ul>
  );
}

export default Socials;
