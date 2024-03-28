import SectionAboutUsHome from "@/components/Sections/SectionAboutUsHome";
import SectionContactHome from "@/components/Sections/SectionContactHome";
import SectionEnterprisesHome from "@/components/Sections/SectionEnterprisesHome";
import SectionHeroHome from "@/components/Sections/SectionHeroHome";

export default async function Home() {

  return (
    <main>
      <SectionHeroHome />
      <SectionEnterprisesHome />
      <SectionAboutUsHome />
      <SectionContactHome />
    </main>
  );
}
