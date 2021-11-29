import Link from "next/Link";

const MyLink = ({ href, name }) => {
  return (
    <Link href={href} passHref>
      <a className="text-lg">{name.toUpperCase()}</a>
    </Link>
  );
};

export default MyLink;
