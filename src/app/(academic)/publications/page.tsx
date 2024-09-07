import PublicationSection from "./publications";

export default function PublicationPage() {
  return (
    <div className="p-global-padding">
      <header className="max-w-7xl text-center py-10 mx-auto">
        <h1 className="text-4xl font-bold">Publications</h1>
        <p className="text-gray-600 mt-2 px-10">
          Explore key research publications, including journal articles,
          conference papers, and collaborative works.
        </p>
      </header>
      <PublicationSection />
    </div>
  );
}
