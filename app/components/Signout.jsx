import { doSignout } from "../actions";

const Signout = () => {
  return (
    <form action={doSignout}>
      <button type="submit"> Sign Out </button>
    </form>
  );
};
export default Signout;
