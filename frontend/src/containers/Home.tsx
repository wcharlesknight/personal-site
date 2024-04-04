import Card from '../components/Card';

function Home() {
  return (
    <div className="flex flex-row w-full h-full min-h-screen bg-gray-900">
      <div className="flex flex-col w-full p-10">
        <Card text="One" />
        <Card text="Two" />
      </div>
      <div className="flex flex-col w-full p-10">
        <Card text="thre" />
        <Card text="Four" />
      </div>
    </div>
  );
}

export default Home;
