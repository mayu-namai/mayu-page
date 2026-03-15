import { profile } from "@/lib/data";
import { MountainDivider } from "@/components/Decorations";

export default function Footer() {
  return (
    <div>
      <MountainDivider fill="rgb(14 11 46)" />
      <footer className="bg-[rgb(14,11,46)] text-purple-400/60 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} {profile.nameEn}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
