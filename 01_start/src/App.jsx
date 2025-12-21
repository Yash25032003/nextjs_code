import "./App.css";
import Card from "./component/Card";
import HeroComponent from "./component/Header";

function App() {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold ">
        Learn to integrate tailwind css in your project
      </h1> */}
      <HeroComponent />
      <div className="flex gap-4 pt-5">
        <Card
          title="Cold Coffee"
          description="A great cold coffee menu description should highlight its creamy texture, refreshing chill, and rich flavor"
          buttonText="Shop Now"
          imagelink="https://images.pexels.com/photos/1684880/pexels-photo-1684880.jpeg"
        />
        <Card
          title="Hot Tea"
          description="A great hot tea menu description should highlight its creamy texture, refreshing chill, and rich flavor"
          imagelink="https://images.pexels.com/photos/905485/pexels-photo-905485.jpeg"
        />
        <Card
          title="Hot Coffee"
          description="A great hot coffee menu description should highlight its creamy texture, refreshing chill, and rich flavor"
        />
      </div>
    </div>
  );
}

export default App;
