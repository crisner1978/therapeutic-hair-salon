import Link from "next/Link";
import { useRouter } from "next/router";

const MyLink = ({ href, name, active, ...rest }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href} passHref>
      <a
        {...rest}
        className={` ${
          asPath === href
            ? "ml-[5px]"
            : "hover:translate-x-[5px] transform ease-linear duration-150"
        }`}
      >
        {name.toUpperCase()}
      </a>
    </Link>
  );
};

export default MyLink;
