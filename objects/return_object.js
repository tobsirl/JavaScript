// create state object
const state = {
  campaign: {
    digital_circular_format: true,
  },
};

// create creative object
const creative = {
  object_story_spec: {
    template_data: {
      child_attachments: [
        {
          call_to_action: {
            type: "SHOP_NOW",
          },
        },
        {
          call_to_action: {
            type: "NO_BUTTON",
          },
        },
      ],
    },
  },
};

// create cleanDigitalCircular function
function cleanDigitalCircular(creative) {
  const { object_story_spec } = creative;
  const { template_data } = object_story_spec;
  const { child_attachments } = template_data;
  const cleanCall = child_attachments.filter(
    (child) => child.call_to_action.type !== "NO_BUTTON"
  );
  return cleanCall;
}

// create badDigitalCircular function
function badDigitalCircular(creative) {
  const { object_story_spec } = creative;
  const { template_data } = object_story_spec;
  const { child_attachments } = template_data;
  const badCall = child_attachments.filter(
    (child) => child.call_to_action.type === "NO_BUTTON"
  );
  return badCall;
}

function cleanAdSetup(state, creative) {
  let cleanCall;
  let badCall;
  if (state.campaign.digital_circular_format) {
    cleanCall = cleanDigitalCircular(creative);
    badCall = badDigitalCircular(creative);
  }

  return {
    cleanCall,
    badCall,
  };
}

const { cleanCall, badCall } = cleanAdSetup(state, creative);
console.log("🚀 ~ badCall:", badCall);
console.log("🚀 ~ cleanCall:", cleanCall);
