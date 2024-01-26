const obj = {
  applink_treatment: "web_only",
  object_story_spec: {
    page_id: "555312457900756",
    template_data: {
      child_attachments: [
        {
          call_to_action: {
            type: "SHOP_NOW",
          },
          description: null,
          link: "http://kargo.com",
          name: null,
          picture:
            "https://scontent-dub4-1.xx.fbcdn.net/v/t45.1600-4/340477852_6348165345165_2886533306709389027_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=2aac32&_nc_ohc=UrXtlGo9U2IAX9xmn8u&_nc_ht=scontent-dub4-1.xx&edm=AJcBmwoEAAAA&oh=00_AfDxEdhPINaZlvx9unpASzo5TY4e0NfriICRJfIrRTdxQQ&oe=64A8E6A4",
          static_card: true,
        },
        {
          call_to_action: {
            type: "NO_BUTTON",
          },
          description: null,
          name: null,
        },
      ],
      link: "http://kargo.com",
      message: null,
      multi_share_end_card: false,
    },
    instagram_actor_id: "628945253874889",
  },
  product_set_id: "1536770156809848",
  destination_set_id: null,
};

const obj2 = {
  page_id: "555312457900756",
  template_data: {
    call_to_action: {
      type: "NO_BUTTON",
    },
    description: null,
    force_single_link: false,
    link: "http://",
    message: null,
    multi_share_end_card: false,
    name: null,
  },
  instagram_actor_id: "628945253874889",
};

// merge objects into one
const merged = { ...obj, ...obj2 };
console.log(merged);

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

const { cleanCall } = cleanAdSetup(state, creative);
