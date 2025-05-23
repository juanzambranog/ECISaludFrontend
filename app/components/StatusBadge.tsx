interface StatusBadgeProps {
  status: 'Confirmed' | 'Rejected';
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const baseClasses = "px-3 py-1 rounded-full text-sm font-medium";
  const statusClasses = {
    Confirmed: "bg-green-100 text-green-800",
    Rejected: "bg-red-100 text-red-800"
  };

  return (
    <span className={`${baseClasses} ${statusClasses[status]}`}>
      {status}
    </span>
  );
}
