import InputDate from "@/components/InputDate";
import MaxWidth from "@/components/MaxWidth";


export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
    <MaxWidth>
      <div className="flex flex-col justify-between gap-4">
        <div className="header-text text-center space-y-4">
          <h1 className="ibm-plex-sans-bold text-5xl">Programmer<br/>QUOTE</h1>
          <p className="text-sm text-gray-900/40 underline underline-offset-2">โควทนี้แหละ เหมาะมากกับวันเกิดของคุณ</p>
        </div>
        <div className="ring-2 ring-pink-700 rounded-md shadow-md p-5">
        <div className="header-text text-center space-y-2 p-2">
          <div className="ibm-plex-sans-bold text-xl">คำคม โปรแกรมเมอร์ <h1 className="text-5xl">👨🏿‍💻</h1></div>
          <p className="text-sm text-gray-400 underline underline-offset-2">สุ่มคำจากวันเกิด โดยใส่ วัน เดือน ปีเกิดลงไป และก็จะได้มุกตามวันเกิดกลับมา 🥳
          </p>
        </div>
        <InputDate />
        </div>
      </div>
    </MaxWidth>
</div>
  );
}
