import { useEffect } from "react";
import { HeroSection } from "../../Components/HeroSection";
import { useSchoolNameContext } from "../../hooks/useSchoolNameContext";
import { SchoolContainer } from "./styles";

interface SchoolsHomeProps {
  schoolNameUrl: string;
}

export function SchoolsHome({ schoolNameUrl }: SchoolsHomeProps) {
  const { setSchoolName } = useSchoolNameContext();

  useEffect(() => {
    setSchoolName(schoolNameUrl);
  }, [schoolNameUrl]);

  return (
    <SchoolContainer>
      <HeroSection />
    </SchoolContainer>
  );
}
