import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import './Home.css';

function renderEventContent(eventInfo) {
  console.log(eventInfo)
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
const Home = (props) => {
  return (
    <div>
      <h1>Academic Tracking</h1>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        eventContent={renderEventContent}
        eventColor='red'
        events={[
          {
            id: 1,
            title: 'Physics',
            start: '2021-11-14T10:00:00',
            end: '2021-11-14T12:00:00',
          },
          {
            id: 2,
            title: 'Calculus',
            start: '2021-11-16',
            end: '2021-11-16',
          },
          {
            id: 3,
            title: 'Software Engineering',
            start: '2021-11-17T13:00:00',
            end: '2021-11-17T13:30:00',
          },
          {
            id: 4,
            title: 'Data Structures and Algorithms',
            start: '2021-11-17T13:30:00',
            end: '2021-11-17T14:00:00',
          },
          {
            id: 5,
            title: 'Meeting',
            start: '2021-11-05T14:30:00',
            extendedProps: {
              status: 'done',
            },
          },
          {
            id: 6,
            title: 'Appointment',
            start: '2021-11-29T07:00:00',
            backgroundColor: 'green',
            borderColor: 'green',
          },
        ]}
        customButtons={{
          new: {
            text: 'new',
            click: () => {
              props.history.push('/create');
            },
          },
        }}
        headerToolbar={{
          start: 'title',
          center: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek new',
          end: 'today prev,next',
        }}
        initialView='dayGridMonth'
        dateClick={(e) => console.log('date click: ', e.dateStr)}
        eventClick={(e) => console.log('event click: ', e.event.id)}
        nowIndicator
      />
    </div>
  );
};

export default Home;
