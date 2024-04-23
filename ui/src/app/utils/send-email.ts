import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_API_SECRET,
});

type SendEmailProps = {
  ToEmail: string;
  ToName?: string;
  Subject: string;
  TextPart: string;
  HtmlPart: string;
};

export const sendEmail = async (props: SendEmailProps) => {
  const response = await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "john.c.calhoun@examplepetstore.com",
          Name: "John",
        },
        To: [
          {
            Email: props.ToEmail,
          },
        ],
        Name: props.ToEmail,
        Subject: props.Subject,
        TextPart: props.TextPart,
        HtmlPart: props.HtmlPart,
      },
    ],
  });
};
