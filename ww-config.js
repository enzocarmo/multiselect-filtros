export default {
  editor: {
    label: {
      en: "MultiSelect Filtros",
    },
  },
  properties: {
    data: {
      label: {
        en: "Data",
      },
      type: "Array",
      defaultValue: [],
      bindable: true,
      section: "Settings"
    },
    placeholder: {
      label: {
        en: "Placeholder"
      },
      type: "Text",
      section: "Settings"
    },
    labelsingle: {
      label: {
        en: "Label Single"
      },
      type: "Text",
      section: "Settings"
    },
    labelmultiple: {
      label: {
        en: "Label Multiple"
      },
      type: "Text",
      section: "Settings"
    },
  },
  triggerEvents: [
    { name: 'Search', label: { en: 'Search' }, event: { value: '' } },
  ],
};
