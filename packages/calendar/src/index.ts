import ical from 'node-ical';

const icsAbsoluteFilePath = process.argv[2];
const events = ical.sync.parseFile(icsAbsoluteFilePath);

export function main() {
  for (const [, event] of Object.entries(events)) {
    if (event.type === 'VEVENT') {
      console.log(
        'Summary: ' +
          event.summary +
          '\nDescription: ' +
          event.description +
          '\nStart Date: ' +
          event.start.toISOString() +
          '\n'
      );
    }
  }
}

main();
