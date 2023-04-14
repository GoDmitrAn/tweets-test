import { UserCard } from "Components/UserCard/UserCard";

const Tweets = () => {
  return (
    <main>
      <div>
        {" "}
        Follow your favorite tweets{" "}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
        <UserCard />
      </div>
    </main>
  );
};
export default Tweets;
