import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  AppointmentTooltip,
  Appointments,
  DateNavigator,
  DayView,
  Scheduler,
  TodayButton,
  Toolbar,
  ViewSwitcher,
  WeekView,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Button, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSchoolNameContext } from "../../hooks/useSchoolNameContext";
import { api } from "../../lib/api";

interface TeamsDataProps {
  startDate: string;
  endDate: string;
  title: string;
  rRule: string;
}

export function ScheduleComponent() {
  const [teamsData, setTeamsData] = useState<TeamsDataProps[] | undefined>(
    undefined
  );
  const [userName, setUserName] = useState();
  const date = new Date();
  const [dateState, setDateState] = useState(date);
  const [currentViewState, setCurrentViewState] = useState("work-week");
  const navigate = useNavigate();
  const { schoolName } = useSchoolNameContext();

  const handleViewChange = (newViewState: string) => {
    setCurrentViewState(newViewState);
  };

  const currentDateChange = (currentDate: any) => {
    setDateState(currentDate);
  };

  const Content = ({ children, appointmentData, ...restProps }: any) => (
    <AppointmentTooltip.Content
      {...restProps}
      appointmentData={appointmentData}
    >
      <Button
        onClick={() =>
          enterTrail({
            name: appointmentData.click,
            team: appointmentData.title,
          })
        }
        variant="contained"
        sx={{ mt: "1rem", ml: "1rem" }}
      >
        Ver Material
      </Button>
    </AppointmentTooltip.Content>
  );

  function enterTrail({ name, team }: any) {
    navigate(`/${schoolName}/trail/${name}?team=${team}`);
  }

  const get_teams = async () => {
    try {
      const response = await api.get("/team");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const filter_teams = async () => {
    const response = await get_teams();

    if (userName == "Luana Cavalcanti") {
      const filteredTeams = response.filter(
        (data: any) => "Tauana Rosa" == data.instructor
      );
      const data = filteredTeams.map((item: any) => ({
        startDate: item.startHour,
        endDate: item.endHour,
        title: item.name,
        rRule: "FREQ=DAILY;INTERVAL=7",
        click: item.trail,
      }));
      setTeamsData(data);
    } else {
      const filteredTeams = response.filter(
        (data: any) => userName == data.instructor
      );
      const data = filteredTeams.map((item: any) => ({
        startDate: item.startHour,
        endDate: item.endHour,
        title: item.name,
        rRule: "FREQ=DAILY;INTERVAL=7",
        click: item.trail,
      }));
      setTeamsData(data);
    }
  };

  useEffect(() => {
    filter_teams();
  }, [teamsData]);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      const userObject = JSON.parse(user);
      setUserName(userObject.user.name);
    }
  }, []);

  return (
    <Paper
      sx={[
        {
          height: "70%",
          width: "90%",
          position: "relative",
          padding: "0.2rem",
          borderRadius: "8px",
        },
        {
          "&::before": {
            content: "''",
            position: "absolute",
            inset: "0",
            borderRadius: "8px",
            padding: "2px",
            background: "linear-gradient(#1B88EF, #24C07D)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          },
        },
      ]}
    >
      <Scheduler data={teamsData} locale={"pt-BR"}>
        <ViewState
          onCurrentDateChange={currentDateChange}
          currentDate={dateState}
          currentViewName={currentViewState}
          onCurrentViewNameChange={handleViewChange}
        />
        <DayView displayName="Dia" startDayHour={7} endDayHour={18} />
        <WeekView
          name="work-week"
          displayName="Semana"
          excludedDays={[0, 6]}
          startDayHour={7}
          endDayHour={18}
        />
        <Appointments />
        <AppointmentTooltip contentComponent={Content} />
        <Toolbar />
        <ViewSwitcher />
        <DateNavigator />
        <TodayButton messages={{ today: "Hoje" }} />
      </Scheduler>
    </Paper>
  );
}
