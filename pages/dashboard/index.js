import { UserProvider, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Header from "../../components/layout/Header";

const Dashboard = () => {
  return <div></div>;
};

export default Dashboard;

Dashboard.getLayout = function PageLayout(page) {
  return (
    <>
      <UserProvider>
        <Header />
        {page}
      </UserProvider>
    </>
  );
};

export const getServerSideProps = withPageAuthRequired();
