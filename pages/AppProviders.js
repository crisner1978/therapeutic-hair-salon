import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import Layout from "../components/layout";

const AppProviders = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: process.env.NODE_ENV === "production",
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Toaster position="top-center" containerClassName="toasty" toastOptions={{ duration: 2000 }} />
      <RecoilRoot>
        <Layout>{children}</Layout>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default AppProviders;
