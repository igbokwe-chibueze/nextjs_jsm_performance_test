import { getResourceBySlug } from '@/sanity/actions';
import Image from 'next/image';

interface PageProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: PageProps) => {
  // Await `params` in case it's treated as a promise
  const { id } = await params;

  // Fetch the resource based on the slug from URL
  const resource = await getResourceBySlug(id);

  // Handle the case where the resource is not found
  if (!resource) {
    return <p>Resource not found</p>;
  }

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding hero-height flex w-full flex-col items-center justify-center gap-10 lg:flex-row">
        <div className="flex flex-1 flex-col items-start justify-center">
          <p className="text-gradient_blue body-regular mb-2.5 text-center uppercase">
            JavaScript Mastery Pro Free Guide
          </p>
          <h1 className="sm:heading2 heading3">{resource.title}</h1>
          <div className="mt-6 space-y-4 text-[20px] text-white-800">
            <p>{resource.description}</p>
            <div>
              <a
                target="_blank"
                className="gradient_purple flex-center body-semibold mt-10 size-fit gap-1 rounded-md px-6 py-4"
                href={resource.downloadLink}
              >
                Download the Guide
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center lg:justify-end lg:pr-12">
            <Image 
              src={resource.image}
              className="h-full rounded-md object-cover lg:rotate-12"
              width={384}
              height={440}
              loading='lazy'
              alt={`Cover image for ${resource.title}`}
            />
        </div>
      </section>
    </main>
  );
};

export default page;
