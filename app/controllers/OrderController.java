package controllers;

import play.data.FormFactory;
import play.mvc.Controller;
import play.mvc.Result;

import javax.inject.Inject;

public class OrderController extends Controller {
    private final FormFactory formFactory;
    @Inject
    public OrderController(final FormFactory formFactory){
        this.formFactory = formFactory;
    }

    public Result getUserOrders(Long userId){
        return ok("not implemented");
    }

    public Result addOrder(){
        return ok("not implemented");
    }
}

