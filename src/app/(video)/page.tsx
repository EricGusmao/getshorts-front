import Slogan from "app/(video)/components/slogan";
import LinkBox from "app/(video)/components/link-box";
import HowToUse from "app/(video)/components/how-to-use";

export default function Page() {
  return (
    <>
      <main className="container mx-auto flex-1 p-5">
        <div className="flex-col justify-center justify-items-center">
          <div className="">
            <Slogan />
          </div>
          <div className="mt-5">
            <LinkBox />
          </div>
          <div className="mt-5">
            <HowToUse />
          </div>
        </div>
      </main>
    </>
  );
}
