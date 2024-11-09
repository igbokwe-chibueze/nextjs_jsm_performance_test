import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
  return (
    <div className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
        <div className="nav-padding hero-height flex w-full flex-col items-center justify-center gap-10 lg:flex-row">
            <div className="flex flex-1 flex-col items-start justify-center">

                <Skeleton className="h-[20px] w-[320px] mb-2.5 bg-red-200/40" />

                <Skeleton className="h-[150px] w-[400px] bg-red-200/40" />

                <div className="mt-6 space-y-4">
                    <Skeleton className="h-[200px] w-[400px] bg-red-200/40" />

                    <Skeleton className="mt-10 h-20 w-[200px] bg-red-200/40" />
                </div>
            </div>

            <div className="flex flex-1 justify-center lg:justify-end lg:pr-12">
                <Skeleton className="h-[500px] w-96 rounded-md lg:rotate-12 bg-red-200/40" />
            </div>
        </div>
    </div>
  )
}

export default loading