const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-4 border-primary-200 border-t-primary-600 animate-spin" />
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
