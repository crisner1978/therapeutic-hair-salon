import Link from "next/Link";
import { useRouter } from "next/router";

const MyLink = ({ href, name, active, ...rest }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href} passHref>
      <a
        {...rest}
        className={` ${
          asPath === href || active ? "ml-[5px] text-blue-600 font-semibold" : "hover:translate-x-[5px] transition-all transform ease-out duration-300"
        }`}
      >
        {name.toUpperCase()}
      </a>
    </Link>
  );
};

export default MyLink;
