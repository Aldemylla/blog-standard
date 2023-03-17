import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function NewPost() {
  return <>New post</>;
}

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
