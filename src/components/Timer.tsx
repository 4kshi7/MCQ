function Timer({ timeLeft }: { timeLeft: number }) {
    // ✅ Convert seconds into MM:SS format
    const formatTime = (seconds: number): string => {
      if (seconds < 60) {
        return `${seconds} sec`; // ✅ Show "30 sec" when only seconds exist
      }
  
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`; // ✅ Show "1:30" for 1 min 30 sec
    };
  
    return <p className="mt-4 text-lg font-semibold">⏳ {formatTime(timeLeft)}</p>;
  }
  
  export default Timer;
  