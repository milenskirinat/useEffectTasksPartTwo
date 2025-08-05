import PageTitleCounter from "./components/PageTitleCounter";
import AutoTimer from "./components/AutoTimer.tsx";
import OnlineStatus from "./components/OnlineStatus.tsx";
import UsersList from "./components/UsersList.tsx";
import SearchableUsers from "./components/SearchableUsers.tsx";
import WindowSize from "./components/WindowSize.tsx";
import GreetingDelay from "./components/GreetingDelay.tsx";

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
          <OnlineStatus />
          <UsersList />
          <SearchableUsers />
          <WindowSize />
          <GreetingDelay />
        </div>
      </div>
    </>
  );
}

export default App;
