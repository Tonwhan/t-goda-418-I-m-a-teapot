import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <SignUp
      appearance={{
        elements: {
          rootBox: "w-full",
          card: "shadow-none border-none p-0 bg-transparent w-full",
          headerTitle: "hidden",
          headerSubtitle: "hidden",
          formButtonPrimary: "bg-[#005CBD] hover:bg-[#004a99] text-sm font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg",
          socialButtonsBlockButton: "border-gray-200 hover:bg-gray-50 text-gray-600 rounded-xl py-2.5 transition-colors",
          dividerLine: "bg-gray-100",
          dividerText: "text-gray-400 text-[11px] uppercase tracking-wider font-bold",
          formFieldLabel: "text-gray-700 font-bold text-[13px] mb-1.5",
          formFieldInput: "border-gray-200 focus:ring-4 focus:ring-[#005CBD]/10 focus:border-[#005CBD] rounded-xl py-3 text-[15px] transition-all",
          footerActionLink: "text-[#2563EB] hover:text-[#005CBD] font-bold",
        },
        layout: {
          shimmer: true,
        }
      }}
    />
  );
}