export default function ReviewSkeleton() {
    return (
      <div
        className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
          w-full rounded-3xl
          animate-pulse
          flex flex-col gap-4
          p-12
          "
      >
        <div className="h-2 bg-slate-400 rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-400 rounded col-span-2"></div>
            <div className="h-2 bg-slate-400 rounded col-span-1"></div>
          </div>
          <br />
          <div className="flex flex-col gap-4">
            <div className="h-2 bg-slate-400 rounded"></div>
            <div className="h-2 bg-slate-400 rounded"></div>
            <div className="h-2 bg-slate-400 rounded"></div>
            <div className="h-2 bg-slate-400 rounded"></div>
            <div className="h-2 bg-slate-400 rounded"></div>
            <div className="h-2 bg-slate-400 rounded"></div>
            <div className="h-2 bg-slate-400 rounded"></div>
            <div className="h-2 bg-slate-400 rounded"></div>
            <div className="h-2 bg-slate-400 rounded"></div>
          </div>
        </div>
      </div>
    );
  }
  