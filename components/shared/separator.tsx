export const Separator = () => {
  return (
    <div className="relative h-5 w-full border-b border-gray-200">
      {/*  Diagonal Cross Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      `,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
};
