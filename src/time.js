// Shop hours are evaluated in Detroit time so the status is right for visitors anywhere.
function detroitParts() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Detroit',
    weekday: 'long',
    hour: 'numeric',
    hour12: false,
  }).formatToParts(new Date());
  const day = parts.find((p) => p.type === 'weekday').value;
  let hour = parseInt(parts.find((p) => p.type === 'hour').value, 10);
  if (hour === 24) hour = 0;
  return { day, hour };
}

export function todayName() {
  return detroitParts().day;
}

export function getStatus() {
  const { day, hour } = detroitParts();
  if (day !== 'Sunday' && hour >= 12 && hour < 20) {
    return { open: true, label: 'Open now · until 8 pm' };
  }
  let next = 'Opens tomorrow at 12 pm';
  if (day === 'Sunday' || (day === 'Saturday' && hour >= 20)) next = 'Opens Monday at 12 pm';
  else if (hour < 12) next = 'Opens today at 12 pm';
  return { open: false, label: `Closed · ${next}` };
}
