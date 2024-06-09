import CategoryFilter from "@/components/CategoryFilter";
import Collection from "@/components/Collection";
import Search from "@/components/Search";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";

export default async function AllProjects({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  return (
    <section id="events" className="bg-dotted-pattern w-full my-20 ">
      <div className="wrapper flex flex-col gap-8 md:gap-12 ">
        <h2 className="h2-bold">
          {" "}
          <br />
          <br />
          Mes projets
        </h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection
          data={events?.data}
          emptyTitle="Aucunes vidéos trouvées"
          emptyStateSubtext="Revenez plus tard"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </div>
    </section>
  );
}
