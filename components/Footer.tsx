import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-8 bg-[#FDFAFC] border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} {profile.nameEn}. All rights reserved.</p>
      </div>
    </footer>
  );
}
