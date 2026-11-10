/**
 * Command Center – Calendar Feed (Google Apps Script)
 * Returns today's + tomorrow's events from your default Google Calendar as JSON
 * for the Notion header. Deploy: Deploy → New deployment → Web app,
 * Execute as: Me, Who has access: Anyone. Use the /exec URL as ?cal=
 */
function doGet() {
  const tz = 'America/Halifax';
  const today = Utilities.formatDate(new Date(), tz, 'yyyy-MM-dd');
  const start = new Date(Utilities.formatDate(new Date(), tz, "yyyy-MM-dd'T'00:00:00XXX"));
  const end = new Date(start.getTime() + 2 * 24 * 60 * 60 * 1000);

  const events = CalendarApp.getDefaultCalendar().getEvents(start, end)
    .filter(e => {
      try { return e.getMyStatus() !== CalendarApp.GuestStatus.NO; } catch (_) { return true; }
    })
    .map(e => {
      const allDay = e.isAllDayEvent();
      const fmt = d => allDay ? Utilities.formatDate(d, tz, 'yyyy-MM-dd') : d.toISOString();
      const loc = (e.getLocation() || '').split(',')[0];
      return {
        title: e.getTitle() || '(No title)',
        start: fmt(allDay ? e.getAllDayStartDate() : e.getStartTime()),
        end: fmt(allDay ? e.getAllDayEndDate() : e.getEndTime()),
        allDay: allDay,
        location: loc,
        link: 'https://calendar.google.com/calendar/r/day'
      };
    });

  return ContentService.createTextOutput(JSON.stringify(events))
    .setMimeType(ContentService.MimeType.JSON);
}
