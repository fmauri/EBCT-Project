package controllers;

import models.User;
import play.data.Form;
import play.data.FormFactory;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import javax.inject.Inject;
import java.util.List;

public class UserController extends Controller {
    private final FormFactory formFactory;
    @Inject
    public UserController(final FormFactory formFactory){
        this.formFactory = formFactory;
    }

    public Result addUser(){
        Form<User> userForm = formFactory.form(User.class);
        User user = userForm.bindFromRequest().get();
        user.save();

        return redirect(routes.HomeController.index());
    }

    public Result getUsers(){
        List<User> users = User.find.all();
        return ok(Json.toJson(users));
    }
}
