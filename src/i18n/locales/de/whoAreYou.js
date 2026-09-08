export const whoAreYou = {
  tabs: {
    publisher: 'Publisher',
    marketplace: 'Marketplace',
    designer: 'Designer',
  },
  nodes: {
    'p-badge': { label: 'Ich bin Publisher' },
    'p-q1': { label: 'Bekommst du Pitches?' },
    'p-yes': { label: 'Oh ja' },
    'p-no': { label: 'Noch nicht' },
    'p-portal': {
      label: 'Nutze unser Portal für eingehende Pitches!',
      lines: ['Nutze unser Portal', 'für eingehende', 'Pitches!'],
    },
    'p-sys': { label: 'Ich hab schon ein System' },
    'p-try': { label: 'Testen ist gratis — warum Pubblo nicht eine Chance geben?' },
    'p-cta': {
      line1: 'Mehr erfahren über',
      line2: 'das Portal',
      href: '/portal',
    },
    'm-q': {
      label: 'Willst du Partner in neuen Märkten für Lokalisierung finden?',
    },
    'm-all': { label: 'Immer' },
    'm-cta': {
      line1: 'Entdecke die Möglichkeiten',
      line2: 'mit unserem Marketplace',
      line2Strong: 'Marketplace',
      href: '/marketplace',
    },
    'd-badge': { label: 'Ich bin Designer' },
    'd-q1': { label: 'Hast du dein Spiel schon bei Publishern gepitcht?' },
    'd-yes': { label: 'Oh ja' },
    'd-wish': { label: 'Wünschte ich' },
    'd-q2': {
      label: 'Willst du einen Pitch machen und trotzdem viele Publisher erreichen?',
      labelBefore: 'Willst du',
      labelStrong: 'einen',
      labelAfter: 'Pitch machen und trotzdem viele Publisher erreichen?',
    },
    'd-course': { label: 'Na klar!' },
    'd-cta': {
      line1: 'Nutze unser Pitch-Tool',
      line1Strong: 'Pitch-Tool',
      line2: 'und leg los!',
      href: '/pitch',
    },
  },
};
