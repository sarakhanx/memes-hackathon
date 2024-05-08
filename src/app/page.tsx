import InputDate from "@/components/InputDate";
import MaxWidth from "@/components/MaxWidth";

export default function Home() {
  return (
    <MaxWidth>
      <div className="flex flex-col justify-between gap-4">
        <div className="header-text text-center">
          <h1 className="ibm-plex-sans-bold">Programmer memes</h1>
        </div>
        <div className="ring-2 ring-pink-700 rounded-md shadow-md p-5">
        <InputDate />
        </div>
      </div>
    </MaxWidth>
  );
}
