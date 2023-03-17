import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Post() {
  return <>It is a post.</>;
}

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
