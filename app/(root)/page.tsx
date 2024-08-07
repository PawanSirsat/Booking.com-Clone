import CategoryFilter from '@/components/shared/CategoryFilter';
import Collection from '@/components/shared/Collection';
import Search from '@/components/shared/Search';
import { Button } from '@/components/ui/button';
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  });

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Plan, Host, Enjoy: The Perfect Platform for Your Events!</h1>
            <p className="p-regular-20 md:p-regular-24">Where Events Shine: Your Global Hub for Planning, Hosting, and Celebrating Unforgettable Moments</p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>

          <Image 
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section> 

      <section className="wrapper my-8 flex flex-col gap-8">
  <h2 className="h2-bold text-3xl font-bold">Event Types</h2>

  {/* First Row */}
  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
    <Link 
      href="/events/sports-fitness" 
      className="event-type bg-blue-500 p-4 flex items-center justify-between rounded-md md:col-span-2 md:w-7/10 hover:bg-blue-600 transition-all"
    >
      <span className="text-white text-2xl font-bold font-custom">Sports & Fitness</span>
      <Image 
        src="/assets/category/sports2.png" 
        alt="Sports & Fitness" 
        width={100} 
        height={100} 
        className="object-contain ml-4" 
      />
    </Link>
    <Link 
      href="/events/music" 
      className="event-type bg-red-500 p-4 flex items-center justify-between rounded-md md:col-span-1 md:w-3/10 hover:bg-red-600 transition-all"
    >
      <span className="text-white text-2xl font-bold">Music</span>
      <Image 
        src="/assets/category/musical-note.png" 
        alt="Music" 
        width={100} 
        height={100} 
        className="object-contain ml-4" 
      />
    </Link>
  </div>

  {/* Second Row */}
  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
    <Link 
      href="/events/business" 
      className="event-type bg-green-500 p-4 flex items-center justify-between rounded-md hover:bg-green-600 transition-all"
    >
      <span className="text-white text-2xl font-bold">Business</span>
      <Image 
        src="/assets/category/business.png" 
        alt="Business" 
        width={100} 
        height={100} 
        className="object-contain ml-4" 
      />
    </Link>
    <Link 
      href="/events/education" 
      className="event-type bg-yellow-500 p-4 flex items-center justify-between rounded-md hover:bg-yellow-600 transition-all"
    >
      <span className="text-white text-2xl font-bold">Education</span>
      <Image 
        src="/assets/category/scholarship.png" 
        alt="Education" 
        width={100} 
        height={100} 
        className="object-contain ml-4" 
      />
    </Link>
    <Link 
      href="/events/technology" 
      className="event-type bg-purple-500 p-4 flex items-center justify-between rounded-md hover:bg-purple-600 transition-all"
    >
      <span className="text-white text-2xl font-bold">Technology</span>
      <Image 
        src="/assets/category/tech.png" 
        alt="Technology" 
        width={100} 
        height={100} 
        className="object-contain ml-4" 
      />
    </Link>
  </div>

  {/* Third Row */}
  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
    <Link 
      href="/events/art-culture" 
      className="event-type bg-orange-500 p-4 flex items-center justify-between rounded-md md:col-span-1 md:w-3/10 hover:bg-orange-600 transition-all"
    >
      <span className="text-white text-2xl font-bold">Art & Culture</span>
      <Image 
        src="/assets/category/art.png" 
        alt="Art & Culture" 
        width={100} 
        height={100} 
        className="object-contain ml-4" 
      />
    </Link>
    <Link 
      href="/events/other" 
      className="event-type bg-indigo-500 p-4 flex items-center justify-between rounded-md md:col-span-2 md:w-7/10 hover:bg-indigo-600 transition-all"
    >
      <span className="text-white text-2xl font-bold">Others</span>
      <Image 
        src="/assets/category/others.png" 
        alt="Other" 
        width={100} 
        height={100} 
        className="object-contain ml-4" 
      />
    </Link>
  </div>
</section>



      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Trusted by <br /> Thousands of Events</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection 
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
