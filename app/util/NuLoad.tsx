import { Loader2 } from 'lucide-react';
import Image from 'next/image';

const NuLoad = () => {
  return (
    <div className="w-screen h-[80vh] flex justify-center items-center relative">
        <Loader2 strokeWidth={0.5} className="animate-spin" size={200} />
        <div className="absolute">
            <Image
                src="/nu.png"
                width={50}
                height={10}
                alt="Float UI logo"
            />
        </div>
    </div>

  )
}

export default NuLoad;