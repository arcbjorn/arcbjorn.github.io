type translationForTerminalText = {
  file: string;
  greeting: string;
  position: string;
  previously: string;
  extra: string;
};

const defaultTranslation = {
  file: "about_me",
  greeting: "Hi, I'm Oleg Luganskiy",
  position: "Full Stack engineer",
  previously: "previously",
  extra: "fascinated by Web & AI development",
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
    ${t.position} @<b>${company}</b><br />
    ${t.previously} @<b>${previousCompany}</b><br /><br />
    ${t.extra}</span>`;

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
