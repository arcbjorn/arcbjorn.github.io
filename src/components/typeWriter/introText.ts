const previousCompanyLink = "https://muffins.io/";
const previousCompanyName = "Muffins";
const previousCompany = `<a href=${previousCompanyLink} target="_blank" class="link">${previousCompanyName}</a>`;

const companyLink = "https://www.fundraiseup.com/";
const companyName = "FundraiseUp";
const company = `<a href=${companyLink} target="_blank" class="link">${companyName}</a>`;

const introtext = `<span>Hi, I'm Oleg Luganskiy<br /><br />
    Full Stack Engineer at <b>${company}</b><br />
    previously at <b>${previousCompany}</b><br /><br />
    fascinated by Web & AI development</span>`;

const info = {
  userandhost: "<userandhost>arc@archlinux: </userandhost>",
  infolocation: "<infolocation>~/</infolocation>",
  profilecommand:
    "<profilecommand>$ cat about_me.txt</profilecommand><br /><br />",
  introtext: `<introtext>${introtext}</introtext>`,
};

const completeInfo = Object.values(info).reduce((preVal, currVal) => {
  return preVal + currVal;
}, "");

export default completeInfo;
