package controllers;

import io.ebean.Ebean;
import models.Category;
import models.Product;
import play.api.Mode;
import play.data.FormFactory;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import javax.inject.Inject;
import java.util.List;

public class ProductController extends Controller {
    private final FormFactory formFactory;
    @Inject
    public ProductController(final FormFactory formFactory){
        this.formFactory = formFactory;
    }

    public Result getProducts(){
        // todo- possible filters with category
        List<Product> products = Product.find.all();
        return ok(Json.toJson(products));
    }

    public Result getProduct(Long id){
        Product product = Product.find.query("id= " + id).findOne();
        return ok(Json.toJson(product));
    }

}
