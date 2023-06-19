import * as dotenv from "dotenv";
dotenv.config();
import Mailjet from "node-mailjet";
import _ from "lodash";
import map from "map-stream";
import vfs from "vinyl-fs";

const sendTo = [
    {
        Email: "michael.barrett@thesis.agency",
        Name: "Michael Barrett",
    },
    {
        Email: "Phuc.Phan@thesis.agency",
        Name: "Phuc Phan",
    },
    {
        Email: "suny.stanfield@thesis.agency",
        Name: "Suny Stanfield",
    },
    {
        Email: "sarah.sarwar@thesis.agency",
        Name: "Sarah Sarwar",
    },
    {
        Email: "evan.corpuz@thesis.agency",
        Name: "Evan Corpuz",
    },
    {
        Email: "nickey.loescher@thesis.agency",
        Name: "Nicole Loescher",
    },
    {
        Email: "Adrienne.peake@thesis.agency",
        Name: "Adrienne Peake",
    },
    {
        Email: "john.gaskin@thesis.agency",
        Name: "John Gaskin",
    },
];

const testSend = [
    {
        Email: "michael.barrett@thesis.agency",
        Name: "Michael Barrett",
    },
];

let mj;

function getMailJetConnection() {
    if (!mj) {
        mj = new Mailjet({
            apiKey: process.env.MAILJET_KEY,
            apiSecret: process.env.MAILJET_SECRET,
        });
    }
    return mj;
}

async function sendEmail(text, html, subject, customID) {
    const mj = getMailJetConnection();

    try {
        const result = await mj.post("send", { version: "v3.1" }).request({
            Messages: [
                {
                    From: {
                        Email: "it@thesis.agency",
                        Name: "IT @ Thesis",
                    },
                    To: sendTo,
                    Subject: subject,
                    TextPart: text,
                    HTMLPart: html,
                    CustomID: customID,
                },
            ],
        });
        console.log(result.body);
    } catch (err) {
        console.log(err);
    }
}

const mails = [];

const prepareMail = (file, cb) => {
    const { contents, dirname, stem } = file;
    const category = dirname.split("/recipes/").pop().replace(/\-/gi, " ");
    const customId = _.kebabCase(
        `recipes ${category} ${stem} ${new Date().toISOString()}`,
    );
    const subject = ["TEST", "Recipes", category, stem]
        .map(txt => _.upperFirst(txt))
        .join(" : ");
    const html = contents.toString("utf8");

    mails.push({
        text: subject,
        subject,
        customId,
        html,
    });
    cb(null, file);
};

async function main() {
    vfs.src("../recipes/**/*.html")
        .pipe(map(prepareMail))
        .on("end", async () => {
            // console.log(JSON.stringify(mails, null, "\t"));
            await Promise.all(
                mails.map(async mail => {
                    const { subject, text, html, customID } = mail;
                    await sendEmail(text, html, subject, customID);
                }),
            );
        });
}

main().catch(err => console.log(err));
