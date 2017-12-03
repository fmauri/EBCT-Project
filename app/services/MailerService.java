package services;

import play.Play;
import play.api.Environment;
import play.libs.mailer.Email;
import play.libs.mailer.MailerClient;
import javax.inject.Inject;
import java.io.File;
import org.apache.commons.mail.EmailAttachment;

public class MailerService {
    @Inject MailerClient mailerClient;

//    public void sendEmail() {
//        String cid = "1234";
//        Email email = new Email()
//                .setSubject("Simple email")
//                .setFrom("Mister FROM <from@email.com>")
//                .addTo("Miss TO <wojtek.rauk@gmail.com>")
//                // adds attachment
////                .addAttachment("attachment.pdf", new File("/some/path/attachment.pdf"))
//                // adds inline attachment from byte array
////                .addAttachment("data.txt", "data".getBytes(), "text/plain", "Simple data", EmailAttachment.INLINE)
//                // adds cid attachment
//                .addAttachment("image.jpg", new File("images/test1.jpg"), cid)
//                // sends text, HTML or both...
//                .setBodyText("A text message")
//                .setBodyHtml("<html><body><p>An <b>html</b> message with cid <img src=\"cid:" + cid + "\"></p></body></html>");
//        mailerClient.send(email);
//    }
    @Inject
    private Environment environment;
    public void sendEmail(String emailTo, int[] imageIds){

        String message = "Thank you for purchasing images from our store! Please come more often.";
        String htmlBody = "<html>" +
                "<body>" +
                "<p>" + message+ "</p>";

        Email email = new Email()
                .setSubject("ImagineThat photo delivery")
                .setFrom("ImagineThat <imagine.that.app.ebiz@gmail.com>")
                .addTo(emailTo);
        for (int imageId: imageIds ) {
            // todo - prod vs dev
            File imgFile;
            if(environment.mode().toString().equals("Prod")){
                imgFile = environment.getFile("../../../images/full/img" +imageId+ ".JPG");

            } else{
                imgFile = environment.getFile("images/full/img" +imageId+ ".JPG");
            }
            email.addAttachment("image"+imageId+".jpg", imgFile, Integer.toString(imageId));
            htmlBody += "<br><p><img style=\"max-width: 200px\" src=\"cid:" + imageId + "\"></p>";
        }
        htmlBody += "</body></html>";
        email.setBodyHtml(htmlBody);

        mailerClient.send(email);
    }
}