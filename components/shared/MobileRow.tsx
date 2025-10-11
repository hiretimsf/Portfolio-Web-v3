interface MobileRowProps {
  children: React.ReactNode;
}

const MobileRow = ({ children }: MobileRowProps) => {
  return (
    <div className="mx-auto flex flex-col gap-y-5 pb-8 lg:hidden">
      {children}
    </div>
  );
};

export default MobileRow;
