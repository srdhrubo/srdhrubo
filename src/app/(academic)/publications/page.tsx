import {
  PageDescription,
  PageTitle,
} from "@/components/ui/page-header-description";
import PublicationSection from "./publications";

export default function PublicationPage() {
  return (
    <div className="p-global-padding py-12">
      <header>
        <PageTitle>Publications</PageTitle>
        <PageDescription>
          Explore key research publications, including journal articles,
          conference papers, and collaborative works.
        </PageDescription>
      </header>
      <PublicationSection />
    </div>
  );
}
