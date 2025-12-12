import AllCountries from "@/components/AllCountries";
import Search from "@/components/Search";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Countries App",
  description: "Select a counry",
};

export default function Home() {
  return (
      <main className="max-w-[400px] md:max-w-[1300px] w-full m-auto px-5">
        <Search />
        <Suspense fallback={<Loading/>}>
          <AllCountries />
        </Suspense>
      </main>
  );
}
