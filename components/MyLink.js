import Link from "next/Link";

const MyLink = ({ href, name, ...rest }) => {
  return (
    <Link href={href} passHref >
      <a {...rest} className="text-lg">{name.toUpperCase()}</a>
    </Link>
  );
};

export default MyLink;
