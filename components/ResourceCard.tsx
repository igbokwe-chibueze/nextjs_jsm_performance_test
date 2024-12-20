import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Props {
  id: string;
  title: string;
  image: string;
  slug: string;
  downloadNumber: number;
  downloadLink: string;
}

const ResourceCard = ({ id, title, image, slug, downloadNumber, downloadLink }: Props) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <Link href={`/resource/${slug}`} target="_blank">
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
          <div className="h-fit w-full">
            <Image 
              src={image}
              className="h-full rounded-md object-cover"
              width={384}
              height={440}
              alt={`Cover image for ${title}`}
            />
          </div>
          <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">{title}</CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex-between mt-4 p-0">
        <div className="flex-center body-medium gap-1.5 text-white">
          <Image 
            src="/downloads.svg" width={20} height={20} alt="" //By setting alt="" for purely decorative icons, you help screen readers skip over them
          />
          {downloadNumber}
        </div>
        <Link href={downloadLink} target="_blank" className="flex-center text-gradient_purple-blue body-semibold gap-1.5">
          Download Now
          <Image src="/arrow-blue.svg" width={13} height={10} alt="" />
        </Link>
      </CardContent>
    </Card>
  )
}

export default ResourceCard