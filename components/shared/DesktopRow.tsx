interface DesktopRowProps {
  children: React.ReactNode;
}

const DesktopRow = ({ children }: DesktopRowProps) => {
  return (
    <div className="hidden grid-cols-2 items-start gap-x-8 gap-y-5 p-8 lg:grid">
      {children}
    </div>
  );
};

export default DesktopRow;
