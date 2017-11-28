package controllers;

import models.Category;
import play.data.FormFactory;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import javax.inject.Inject;
import java.util.List;

public class CathegoryController extends Controller {
    private final FormFactory formFactory;
    @Inject
    public CathegoryController(final FormFactory formFactory){
        this.formFactory = formFactory;
    }

    public Result getCathegories(Long id){
//        return ok(Json.toJson(id));
        // todo- possible filters with category
        Category category = Category.find.byId(id);
        return ok(Json.toJson(category));
    }

    public Result getAllCathegories(){
        List<Category> categories = Category.find.all();
        return ok(Json.toJson(categories));
    }

}
