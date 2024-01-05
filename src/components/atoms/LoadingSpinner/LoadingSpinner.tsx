export const LoadingSpinner = () => {
  return (
    <div className="flex min-h-[calc(100vh-8.6rem)] flex-col items-center justify-center">
      <div className="flex space-x-10">
        <div className="h-[2.5rem] w-[2.5rem] animate-bounce rounded-full bg-callToAction"></div>
        <div className="h-[2.5rem] w-[2.5rem] animate-bounce2 rounded-full bg-callToAction"></div>
        <div className="h-[2.5rem] w-[2.5rem] animate-bounce rounded-full bg-callToAction"></div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-[2.5rem] font-semibold text-white">Loading</p>
        <p className="text-[2rem] text-white">Your data is on its way!</p>
      </div>
    </div>
  );
};
