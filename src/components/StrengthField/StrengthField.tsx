export const StrengthField = () => {
  return (
    <div className="bg-grey-850 flex items-center justify-between px-4 py-3.5">
      <p className="text-grey-600 preset-4">STRENGTH</p>

      <div className="flex gap-2">
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} className="border-grey-200 h-7 w-2.5 border-2" />
        ))}
      </div>
    </div>
  );
};
