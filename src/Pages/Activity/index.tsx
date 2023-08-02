import { useEffect, useState } from "react";
import {
  IoMdArrowRoundBack,
  IoMdArrowRoundDown,
  IoMdArrowRoundUp,
} from "react-icons/io";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { PdfToHtml } from "../../Components/PdfToHtml";
import { api } from "../../lib/api";
import { Container } from "./styles";

interface ActivityProps {
  id: string;
  link: string;
  name: string;
  status: string;
}

export function Activity() {
  const [activity, setActivity] = useState<ActivityProps>();
  const [toggleHeader, setToggleHeader] = useState(false);
  const activityNameByUrl = window.location.pathname.replace("/atividade/", "");
  const activityId = activityNameByUrl
    .replaceAll("%20", " ")
    .replaceAll("%C2%BA", "º")
    .replace("/maplebear", "")
    .replace("/divinomestre", "")
    .replace("/israelita", "");

  function goBack() {
    history.back();
  }

  function actualActivityFilter(data: any) {
    return activityId === data.id;
  }

  const list_activity = async () => {
    try {
      const response = await api.get("/activity");
      const actualActivity = response.data.filter(actualActivityFilter);

      setActivity(actualActivity[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    list_activity();
  }, []);

  console.log(activity);
  return (
    <Container>
      {!toggleHeader ? (
        <div className="activityHeader">
          <button onClick={goBack}>
            <IoMdArrowRoundBack />
          </button>
          <p>{activity?.name}</p>
        </div>
      ) : null}

      <button
        onClick={() => setToggleHeader(!toggleHeader)}
        className={!toggleHeader ? "showHeader" : "hideHeader"}
      >
        {!toggleHeader ? <IoMdArrowRoundUp /> : <IoMdArrowRoundDown />}
      </button>

      {activity?.link ? (
        <PdfToHtml activityLink={activity?.link} />
      ) : (
        // <PdfView src="https://scribehow.com/embed/Montando_a_tela_de_Jogo_Copy__Z52GiGOHRf6FRi4mrUyyNQ?as=scrollable" />
        <Skeleton height="40rem" width="80rem" baseColor="#e4e4e4" />
      )}
    </Container>
  );
}
