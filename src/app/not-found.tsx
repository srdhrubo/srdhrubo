import { ButtonWithLink } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BinocularsIcon, HomeIcon } from "lucide-react";

const words = `Looks like you've stumbled upon a 404, means a dead 🔚!
It often happens when you're researching 🔍
and the way out is to get some refreshment 🍔🍦🍹.
Now, this place looks exotic 🌌`;

export default async function NotFound() {
  return (
    <div className="h-[40rem] w-full flex flex-col gap-2 justify-center items-center">
      <h2 className="text-4xl font-bold flex gap-4 items-center">
        OOPS!!!{" "}
        <div className="text-xl flex flex-col items-center">
          <BinocularsIcon />
          404
        </div>
      </h2>
      <div className="w-[45rem] text-center my-4">
        <TextGenerateEffect words={words} filter={true} />
      </div>
      <ButtonWithLink href="/">
        Let's return to home <HomeIcon className="w-6 ml-2" />
      </ButtonWithLink>
    </div>
  );
}
