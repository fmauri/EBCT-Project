package controllers;

import play.mvc.Controller;
import play.mvc.Result;
import services.MailerService;

import javax.inject.Inject;

public class EmailController extends Controller {
    @Inject MailerService mailerService;

    public Result index() {
//        MailerService
        mailerService.sendEmail();
        return ok(views.html.index.render());
    }

}
