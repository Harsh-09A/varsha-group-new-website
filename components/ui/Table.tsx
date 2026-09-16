import { ReactNode } from "react";

export function Table({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto border border-neutral-200 rounded-lg">
      <table className="w-full text-sm text-left">{children}</table>
    </div>
  );
}

export function Th({ children }: { children: ReactNode }) {
  return <th className="px-4 py-3 bg-neutral-50 font-medium text-neutral-600">{children}</th>;
}

export function Td({ children }: { children: ReactNode }) {
  return <td className="px-4 py-3 border-t border-neutral-100">{children}</td>;
}