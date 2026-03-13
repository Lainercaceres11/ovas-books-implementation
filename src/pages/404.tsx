import { PageNotFound } from '@layouts';

const Page404 = ({ page }: { page: string }) => {
  return <PageNotFound page={page} />;
};

export default Page404;
