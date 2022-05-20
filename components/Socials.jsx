import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ListItem, UnorderedList } from "./styles/Socials.styled";
import Link from "next/link";

const Socials = () => {
  return (
    <UnorderedList>
      <ListItem>
        <Link href="https://www.github.com/omarlc" passHref={true}>
          <a target="_blank">
            <FaGithub className="icon github" />
          </a>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://www.linkedin.com/in/omarlcasio" passHref={true}>
          <a target="_blank">
            <FaLinkedin className="icon linkedin" />
          </a>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="mailto:colcasio1@gmail.com" passHref={true}>
          <a>
            <FaEnvelope className="icon envelope" />
          </a>
        </Link>
      </ListItem>
    </UnorderedList>
  );
};

export default Socials;
