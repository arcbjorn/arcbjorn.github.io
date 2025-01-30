type translationForTerminalText = {
  name: string;
  file: string;
  greeting: string;
  position: string;
  formerly: string;
  interests: string;
};

const defaultTranslation = {
  name: "arcbjorn",
  file: "about_me",
  greeting: "Hi, I'm Oleg Luganskiy",
  position: "Software engineer",
  formerly: "formerly",
  interests: "fascinated by Web & AI development",
};

interface ICompany {
  name: string;
  link: string;
}

const getTerminalText = (
  t: translationForTerminalText = defaultTranslation
): string => {
  const previousCompanies: ICompany[] = [
    { name: "FundraiseUp", link: "https://www.fundraiseup.com/" },
    { name: "Muffins", link: "https://muffins.io/" },
  ];

  function formatCompanies(companies: ICompany[]): string {
    let companiesString = "";
    companies.forEach(({ name, link }, index) => {
      companiesString += `@<company><a href=${link} target="_blank" class="link">${name}</a></company>`;

      if (companies.length > 1 && index % 2 == 0) {
        companiesString += ", ";
      }
    });
    return companiesString;
  }

  const formattedPreviousCompanies = formatCompanies(previousCompanies);

  const companyLink = "https://www.sardine.ai/";
  const companyName = "Sardine";
  const company = `<a href=${companyLink} target="_blank" class="link">${companyName}</a>`;

  const introtext = `<span>${t.greeting}<br /><br />
    ${t.position} @<company>${company}</company><br />
    ${t.formerly} ${formattedPreviousCompanies}<br /><br />
    ${t.interests}</span>`;

  const info = {
    userandhost: `<userandhost>${t.name}@archlinux: </userandhost>`,
    infolocation: `<infolocation>~/</infolocation>`,
    profilecommand: `<profilecommand>$ cat ${t.file}.txt</profilecommand><br /><br />`,
    introtext: `<introtext>${introtext}</introtext>`,
  };

  const completeInfo = Object.values(info).reduce((preVal, currVal) => {
    return preVal + currVal;
  }, "");

  return completeInfo;
};

export default getTerminalText;
