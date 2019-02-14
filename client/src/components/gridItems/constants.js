const WIDGET_TYPES = [
  'Text',
  'Clock',
  'Photo',
  'Weather',
  'ApplicationShortCut',
  'Slide'
];

const WIDGET_LABELS = [
  'Text',
  'Clock',
  'Photo',
  'Weather',
  'Application shortcut',
  'Slide'
];

const WIDGET_TYPES_AS_VALUES_WITH_LABELS = WIDGET_TYPES.map((widgetType, index) =>
  ({
    value: widgetType,
    label: WIDGET_LABELS[index]
  })
);

export {
  WIDGET_LABELS,
  WIDGET_TYPES,
  WIDGET_TYPES_AS_VALUES_WITH_LABELS,
};