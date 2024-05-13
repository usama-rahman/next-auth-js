import { doSignIn } from "../actions";

const Signin = () => {
  return (
    <form action={doSignIn}>
      <button className="bg-orange-400 p-2" type="submit">
        Sign in with Google
      </button>
    </form>
  );
};
export default Signin;
