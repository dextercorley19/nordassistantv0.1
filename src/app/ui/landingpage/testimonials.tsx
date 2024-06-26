import person1 from "../assets/person1.svg";
import person2 from "../assets/person 2.svg";
import person3 from "../assets/person3.svg";
import Image from "next/image";

export function Testimonials() {
  return (
    <div>
      <div className="mx-auto mt-12 flex max-w-5xl"></div>
      <div className="mx-auto max-w-5xl flex-wrap items-center justify-evenly gap-6">
        <div className="h-50 mb-4  inline-flex w-80 flex-col items-start justify-start gap-12 rounded-xl border border-neutral-100 bg-white p-8 shadow">
          <div className="self-stretch font-['Inter'] text-xl font-medium leading-loose text-black">
            “The easiest it’s ever been to coordinate with my mechanic.”
          </div>
          <div className="inline-flex items-center justify-start gap-4">
            <Image
              className="h-11 w-11 rounded-full"
              src={person3}
              alt="person1"
            />
            <div className="inline-flex flex-col items-start justify-start gap-0.5">
              <div className="font-['Inter'] text-base font-medium leading-normal text-black">
                Shelly
              </div>
              <div className="font-['Inter'] text-base font-medium leading-normal text-zinc-500">
                Nordhavn 40 Owner
              </div>
            </div>
          </div>
        </div>
        <div className="h-50 mx-4 mb-4 inline-flex w-80 flex-col items-start justify-start gap-12 rounded-xl border border-neutral-100 bg-white p-8 shadow">
          <div className="self-stretch font-['Inter'] text-xl font-medium leading-loose text-black">
            “Makes troubleshooting issues a breeze.”
          </div>
          <div className="inline-flex items-center justify-start gap-4">
            <Image
              className="h-11 w-11 rounded-full"
              src={person2}
              alt="person1"
            />
            <div className="inline-flex flex-col items-start justify-start gap-0.5">
              <div className="font-['Inter'] text-base font-medium leading-normal text-black">
                Buford
              </div>
              <div className="font-['Inter'] text-base font-medium leading-normal text-zinc-500">
                Nordhavn 60 Owner
              </div>
            </div>
          </div>
        </div>
        <div className="h-50 mb-4  inline-flex w-80 flex-col items-start justify-start gap-12 rounded-xl border border-neutral-100 bg-white p-8 shadow">
          <div className="self-stretch font-['Inter'] text-xl font-medium leading-loose text-black">
            “Simplified our charter business.”
          </div>
          <div className="inline-flex items-center justify-start gap-4">
            <Image
              className="h-11 w-11 rounded-full"
              src={person1}
              alt="person1"
            />
            <div className="inline-flex flex-col items-start justify-start gap-0.5">
              <div className="font-['Inter'] text-base font-medium leading-normal text-black">
                Martha
              </div>
              <div className="font-['Inter'] text-base font-medium leading-normal text-zinc-500">
                Charter Captain
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
