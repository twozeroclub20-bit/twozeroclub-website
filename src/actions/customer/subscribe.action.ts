"use server";

const subscribe = async ({ email }: { email: string }) => {
  try {
    const KLAVIYO_LIST_ID = process.env.KLAVIYO_LIST_ID;
    const KLAVIYO_PRIVATE_KEY = process.env.KLAVIYO_PRIVATE_KEY;
    const body = {
      data: {
        type: "profile-subscription-bulk-create-job",
        attributes: {
          profiles: {
            data: [
              {
                type: "profile",
                attributes: {
                  email,
                  subscriptions: {
                    email: {
                      marketing: { consent: "SUBSCRIBED" },
                    },
                  },
                },
              },
            ],
          },
          historical_import: false,
        },
        relationships: {
          list: {
            data: {
              type: "list",
              id: KLAVIYO_LIST_ID,
            },
          },
        },
      },
    };
    const res = await fetch(
      "https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs",

      {
        method: "POST",
        headers: {
          accept: "application/vnd.api+json",
          revision: "2025-07-15",
          "content-type": "application/vnd.api+json",
          Authorization: `Klaviyo-API-Key ${KLAVIYO_PRIVATE_KEY}`,
        },
        body: JSON.stringify(body),
      }
    );
    if (!res.ok) {
      const error = await res.json();
      console.error("Klaviyo subscribe failed:", error);
      return {
        success: false,
        message:
          "Sorry, we couldn’t add your email to our newsletter. Please try again later.",
      };
    }

    return {
      success: true,
      message:
        "Thanks for subscribing! You’ll start receiving our latest updates soon.",
    };
  } catch (err) {
    console.error("Subscribe error:", err);
    return {
      success: false,
      message:
        "Something went wrong on our end. Please try again in a few minutes.",
    };
  }
};

export { subscribe };
