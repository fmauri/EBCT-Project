package controllers;

import play.mvc.Controller;
import play.mvc.Result;
import services.MailerService;

import javax.inject.Inject;

public class EmailController extends Controller {
    @Inject MailerService mailerService;

    public Result index() {
//        MailerService

        String emailTo = "wojtek.rauk@gmail.com";
        int[] imageIds = {1,2,3};
        mailerService.sendEmail(emailTo, imageIds);
        return ok(views.html.index.render());
    }

}
