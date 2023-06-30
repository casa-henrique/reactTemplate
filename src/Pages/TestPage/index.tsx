import { useState } from "react";
import {
  IoMdArrowRoundBack,
  IoMdArrowRoundDown,
  IoMdArrowRoundUp,
} from "react-icons/io";
import { useSchoolNameContext } from "../../hooks/useSchoolNameContext";
import { Container } from "./styles";

export function TestPage() {
  const [toggleHeader, setToggleHeader] = useState(false);
  const { schoolName } = useSchoolNameContext();

  function goBack() {
    history.back();
  }

  function ChangeTest() {
    if (schoolName === "israelita") {
      return (
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeIaFNVCwBy0hzdcTv1VD6xCl7j-yMpCmt7-FS2cdsrpdy8WA/viewform?embedded=true">
          Carregando…
        </iframe>
      );
    }
    if (schoolName === "maplebear") {
      return (
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd11Pr7dsb7azjHi69pt5QL7eKjNNQkeK-K2TWN6WvGtA34xA/viewform?embedded=true">
          Carregando…
        </iframe>
      );
    } else {
      return (
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScADIP0Whqe7_jvknFxVPg1MtRh4P4lqJz8XmezJlftKAQOyQ/viewform?embedded=true">
          Carregando…
        </iframe>
      );
    }
  }

  return (
    <Container>
      {!toggleHeader ? (
        <div className="activityHeader">
          <button onClick={goBack}>
            <IoMdArrowRoundBack />
          </button>
          <p>Avaliação</p>
        </div>
      ) : null}

      <button
        onClick={() => setToggleHeader(!toggleHeader)}
        className={!toggleHeader ? "showHeader" : "hideHeader"}
      >
        {!toggleHeader ? <IoMdArrowRoundUp /> : <IoMdArrowRoundDown />}
      </button>

      <div className="iframeTest">
        <ChangeTest />
      </div>
    </Container>
  );
}
