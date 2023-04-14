import { HomeTitle } from "../Components/Home/Home.styled";

const Home = () => {
  return (
    <main>
      <div>
        <HomeTitle>
          {" "}
          Follow your favorite tweets{" "}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </HomeTitle>
      </div>
    </main>
  );
};
export default Home;
