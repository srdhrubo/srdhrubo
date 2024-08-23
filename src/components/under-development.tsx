import { Cover } from "./ui/cover";

export default function UnderDevelopment() {
  return (
    <div className="w-full flex justify-center items-center text-3xl font-semibold h-[40rem]">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2 items-end mb-4">
          HI!
          <span className="flex flex-col-reverse items-center">
            <span>THIS PAGE IS</span>
            <span>UNDER DEVELOPMENT</span>
          </span>
        </div>
        <div>WE'RE WORKING VERY HARD💪</div>
        <div>
          TO MAKE THIS PAGE LIVE<span className="animate-bounce">❤️</span>
        </div>
        <div>
          <Cover>AS FAST AS POSSIBLE</Cover>
        </div>
      </div>
    </div>
  );
}
