import Home from "../components/home/Home";
const HomePage = () => {
  return <Home />;
};

export default HomePage;

export const loader = async () => {
  const response = await fetch(
    "https://react-training-http-e5994-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
  );
  const data = await response.json();

  return data;
};
