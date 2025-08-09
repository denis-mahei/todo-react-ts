const Text = ({ children }: { children: string }) => {
  return (
    <div className="p-5">
      <h2 className="text-center font-bold text-4xl">{children}</h2>
    </div>
  );
};
export default Text;
