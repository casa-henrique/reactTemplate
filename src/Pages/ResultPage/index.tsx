import { useEffect, useState } from "react";
import {
  IoMdArrowRoundBack,
  IoMdArrowRoundDown,
  IoMdArrowRoundUp,
} from "react-icons/io";
import { PdfToHtml } from "../../Components/PdfToHtml";
import { useSchoolNameContext } from "../../hooks/useSchoolNameContext";
import { api } from "../../lib/api";
import { Container } from "./styles";

interface ResultProps {
  name: string;
  team: string;
  documentLink: string;
  type: string;
}

export function ResultPage() {
  const [toggleHeader, setToggleHeader] = useState(false);
  const { schoolName } = useSchoolNameContext();
  const [resultList, setResultList] = useState<ResultProps | undefined>();

  function goBack() {
    history.back();
  }

  const resultIdByUrl = window.location.pathname
    .replace("/result/", "")
    .replace("/maplebear", "")
    .replace("/israelita", "")
    .replace("/divinomestre", "")
    .replaceAll("%20", " ")
    .replaceAll("%C2%BA", "º")
    .replaceAll("%C3%AD", "í");

  function resultFilter(data: any) {
    return resultIdByUrl == data.id;
  }

  const list_results = async () => {
    try {
      const response = await api.get("/result");

      const filteredData = response.data.filter(resultFilter);
      const data = filteredData[0];

      setResultList(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    list_results();
  }, [resultIdByUrl]);

  console.log(resultList);

  return (
    <Container>
      {!toggleHeader ? (
        <div className="activityHeader">
          <button onClick={goBack}>
            <IoMdArrowRoundBack />
          </button>
          <p>{resultList?.name}</p>
        </div>
      ) : null}

      <button
        onClick={() => setToggleHeader(!toggleHeader)}
        className={!toggleHeader ? "showHeader" : "hideHeader"}
      >
        {!toggleHeader ? <IoMdArrowRoundUp /> : <IoMdArrowRoundDown />}
      </button>

      <div className="iframeTest">
        {resultList ? (
          <PdfToHtml activityLink={resultList.documentLink} />
        ) : null}
      </div>
    </Container>
  );
}
