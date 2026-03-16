import { profile } from "@/lib/data";
import { MountainDivider } from "@/components/Decorations";

export default function Footer() {
  return (
    <div>
      <MountainDivider fill="#223F59" />
      <footer className="py-8" style={{ background: "#223F59" }}>
        <div className="max-w-5xl mx-auto px-6 text-center text-sm" style={{ color: "rgba(160,177,221,0.6)" }}>
          <p>
            &copy; {new Date().getFullYear()} {profile.nameEn}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
