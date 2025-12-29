

// type BillingType = "monthly" | "quarterly" | "annual";

// interface ToggleProps {
//   billing: BillingType;
//   setBilling: (value: BillingType) => void;
// }

// export default function Toggle({ billing, setBilling }: ToggleProps) {
//   return (
//     <div className="flex bg-white rounded-full p-2 shadow-md">
//       <button
//         onClick={() => setBilling("annual")}
//         className={`px-12 py-3 rounded-full text-sm font-medium ${
//           billing === "annual"
//             ? "bg-indigo-600 text-white"
//             : "text-gray-600"
//         }`}
//       >
//         Annual
//         <span className="ml-2 text-xs bg-indigo-500 px-2 py-1 rounded-full">
//           Save 75%
//         </span>

        

//       </button>

//       <button
//         onClick={() => setBilling("quarterly")}
//         className={`px-6 py-2 rounded-full text-sm font-medium ${
//           billing === "quarterly"
//             ? "bg-indigo-600 text-white"
//             : "text-gray-600"
//         }`}
//       >
//         Quarterly
//         <span className="ml-2 text-xs bg-gray-200 px-2 py-1 rounded-full">
//           Save 40%
//         </span>
//       </button>

//       <button
//         onClick={() => setBilling("monthly")}
//         className={`px-6 py-2 rounded-full text-sm font-medium ${
//           billing === "monthly"
//             ? "bg-indigo-600 text-white"
//             : "text-gray-600"
//         }`}
//       >
//         Monthly
//       </button>
//     </div>
//   );
// }

type BillingType = "monthly" | "quarterly" | "annual";

interface ToggleProps {
  billing: BillingType;
  setBilling: (value: BillingType) => void;
}

export default function Toggle({ billing, setBilling }: ToggleProps) {
  return (
    <div className="flex bg-white rounded-full p-2 shadow-md">
      {/* Annual */}
      <button
        onClick={() => setBilling("annual")}
        className={`flex items-center px-12 py-2 rounded-full text-sm font-medium transition-colors ${
          billing === "annual"
            ? "bg-indigo-600 text-white"
            : "text-gray-600"
        }`}
      >
        Annual
        <span
          className={`ml-2 text-[10px] px-1 py-0.3 rounded-full transition-colors ${
            billing === "annual"
              ? "bg-indigo-500 text-white"
              : "bg-gray-100 text-blue-600"
          }`}
        >
          Save 75%
        </span>
      </button>

      {/* Quarterly */}
      <button
        onClick={() => setBilling("quarterly")}
        className={`flex items-center px-6 py-2 rounded-full text-sm font-medium transition-colors ${
          billing === "quarterly"
            ? "bg-indigo-600 text-white"
            : "text-gray-600"
        }`}
      >
        Quarterly
        <span
          className={`ml-2 text-[10px] px-1 py-0.3 rounded-full transition-colors ${
            billing === "quarterly"
              ? "bg-indigo-500 text-white"
              : "bg-gray-100 text-blue-600"
          }`}
        >
          Save 40%
        </span>
      </button>

      {/* Monthly */}
      <button
        onClick={() => setBilling("monthly")}
        className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
          billing === "monthly"
            ? "bg-indigo-600 text-white"
            : "text-gray-600"
        }`}
      >
        Monthly
      </button>
    </div>
  );
}
