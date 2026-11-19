export const StrengthField = () => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-grey-600 preset-4">STRENGTH</p>

      <div className="flex gap-2">
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} className="border-grey-200 h-7 w-2.5 border-2" />
        ))}
      </div>
    </div>
  );
};
