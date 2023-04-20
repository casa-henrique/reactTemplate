import { AppointmentModel, ViewState } from "@devexpress/dx-react-scheduler";
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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ScheduleComponent() {
  const date = new Date();
  const [dateState, setDateState] = useState(date);
  const [currentViewState, setCurrentViewState] = useState("work-week");
  const navigate = useNavigate();

  const handleViewChange = (newViewState: string) => {
    setCurrentViewState(newViewState);
  };

  const currentDateChange = (currentDate: any) => {
    setDateState(currentDate);
  };

  const schedulerData: AppointmentModel[] = [
    {
      startDate: "2023-04-18T09:45",
      endDate: "2023-04-18T11:00",
      title: "Turma 1",
    },
  ];

  const Content = ({ children, appointmentData, ...restProps }: any) => (
    <AppointmentTooltip.Content
      {...restProps}
      appointmentData={appointmentData}
    >
      <Button
        onClick={() => enterTrail("6º ano E.F")}
        variant="contained"
        sx={{ mt: "1rem", ml: "1rem" }}
      >
        Ver Material
      </Button>
    </AppointmentTooltip.Content>
  );

  function enterTrail(name: string) {
    navigate(`/maplebear/trail/${name}`);
  }

  return (
    <Paper sx={{ height: "80%", width: "80%" }}>
      <Scheduler data={schedulerData} locale={"pt-BR"}>
        <ViewState
          onCurrentDateChange={currentDateChange}
          currentDate={dateState}
          currentViewName={currentViewState}
          onCurrentViewNameChange={handleViewChange}
        />
        <DayView displayName="Dia" startDayHour={9} endDayHour={18} />
        <WeekView
          name="work-week"
          displayName="Semana"
          excludedDays={[0, 6]}
          startDayHour={9}
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
