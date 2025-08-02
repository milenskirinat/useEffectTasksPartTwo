import PageTitleCounter from "./components/PageTitleCounter";
import AutoTimer from "./components/AutoTimer.tsx";

function App() {
  return (
    <>
      <div className="flex justify-center items-start min-h-screen gap-8 m-50">
        <div className="flex flex-col gap-4 items-center max-w-md mx-auto">
          <h2 className="self-start sticky top-0 text-2xl">
            Second part of useEffect tasks
          </h2>
          <PageTitleCounter />
          <AutoTimer />
        </div>
      </div>
    </>
  );
}

export default App;
