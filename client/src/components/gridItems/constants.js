const WIDGET_TYPES = [
  'Text',
  'Clock',
  'Photo',
  'Weather',
  'ApplicationShortCut',
  'Slide',
  'SlideStepper',
  'AgendaItem',
  'Agenda',
];

const WIDGET_LABELS = [
  'Text',
  'Clock',
  'Photo',
  'Weather',
  'Application shortcut',
  'Slide',
  'Slide Show',
  'Agenda Item',
  'Agenda',
];

const WIDGET_TYPES_AS_VALUES_WITH_LABELS = WIDGET_TYPES.map((widgetType, index) => ({
  value: widgetType,
  label: WIDGET_LABELS[index],
}));

const AGENDA_TYPES = {
  APPOINTMENT: 'event',
  BIRTHDAY: 'birthday',
  SOFTWARE_RELEASE: 'softwareRelease',
  TEAM_BUILDING: 'teamBuilding',
};

const AGENDA_TYPE_COLORS = {
  [AGENDA_TYPES.APPOINTMENT]: 'white',
  [AGENDA_TYPES.BIRTHDAY]: 'rgba(255, 134, 94, 0.1)',
  [AGENDA_TYPES.SOFTWARE_RELEASE]: 'rgba(140, 198, 62, 0.1)',
  [AGENDA_TYPES.TEAM_BUILDING]: 'rgba(46, 85, 165, 0.1)',
};

export {
  WIDGET_LABELS,
  WIDGET_TYPES,
  WIDGET_TYPES_AS_VALUES_WITH_LABELS,
  AGENDA_TYPES,
  AGENDA_TYPE_COLORS,
};
