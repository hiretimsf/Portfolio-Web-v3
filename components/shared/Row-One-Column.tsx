interface RowOneColumnProps {
  children: React.ReactNode;
}

const RowOneColumn = ({ children }: RowOneColumnProps) => {
  return <div className="max-w-grid-width mx-auto">{children}</div>;
};

export default RowOneColumn;
