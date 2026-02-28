import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-400 py-8 mt-16">
      <div className="max-w-5xl mx-auto px-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} {profile.nameEn}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
