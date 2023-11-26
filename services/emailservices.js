const nodemailer=require('nodemailer');
async function Sendmail({from,to,subject,text,html}){
let transporter=nodemailer.transporter({
    host: process.env.SMTP_HOST,
    port:process.env.SMTP_PORT,
    secure:false,
    auth:{
        user:process.env.MAIL_USER,

        pass: process.env.MAIL_PASS
    }
});
let info=await transporter.Sendmail({
    from:from,
    to:to,
    subject:subject,
    text:text,
    html: html
});
console.log(info);
}
module.exports=Sendmail;