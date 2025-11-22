export default function Copyright() {
  return (
    <div className="flex w-full">
      <div className="hidden flex-1 md:flex" />
      <div className="bg-panda-dark flex w-full max-w-5xl items-center justify-center py-4 text-center">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
      <div className="hidden flex-1 md:flex" />
    </div>
  );
}
