type translationForTerminalText = {
  file: string;
  greeting: string;
  position: string;
  previously: string;
  interests: string;
};

const defaultTranslation = {
  file: "about_me",
  greeting: "Hi, I'm Oleg Luganskiy",
  position: "Full Stack engineer",
  previously: "previously",
  interests: "fascinated by Web & AI development",
};

const getTerminalText = (
  t: translationForTerminalText = defaultTranslation
): string => {
  const previousCompanyLink = "https://muffins.io/";
  const previousCompanyName = "Muffins";
  const previousCompany = `<a href=${previousCompanyLink} target="_blank" class="link">${previousCompanyName}</a>`;

  const companyLink = "https://www.fundraiseup.com/";
  const companyName = "FundraiseUp";
  const company = `<a href=${companyLink} target="_blank" class="link">${companyName}</a>`;

  const introtext = `<span>${t.greeting}<br /><br />
    ${t.position} @<company>${company}</company><br />
    ${t.previously} @<company>${previousCompany}</company><br /><br />
    ${t.interests}</span>`;

  const info = {
    userandhost: "<userandhost>arcbjorn@archlinux: </userandhost>",
    infolocation: "<infolocation>~/</infolocation>",
    profilecommand: `<profilecommand>$ cat ${t.file}.txt</profilecommand><br /><br />`,
    introtext: `<introtext>${introtext}</introtext>`,
  };

  const completeInfo = Object.values(info).reduce((preVal, currVal) => {
    return preVal + currVal;
  }, "");

  return completeInfo;
};

export default getTerminalText;
