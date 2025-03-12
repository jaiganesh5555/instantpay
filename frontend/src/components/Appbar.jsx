export const Appbar = ({ value }) => {
    console.log("Appbar value:", value); 
    const displayValue = value || "G"; 
    return (
      <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full text-lg font-bold ml-10">
          Instant Pay
        </div>
        <div className="flex">
          <div className="flex flex-col justify-center h-full mr-4">
            <div>Hello 👋</div>
          </div>
          <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-lg">
              {displayValue} 
            </div>
          </div>
        </div>
      </div>
    );
  };