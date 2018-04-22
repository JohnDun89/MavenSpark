package app.VendingMachine;

import gherkin.deps.com.google.gson.Gson;
import spark.Request;
import spark.Response;
import spark.Route;


public class VendingMachine {

    public static Route getItems = (Request request, Response response) -> {
        System.out.println("get request made");

        Gson gson = new Gson();
        return gson.toJson(VendingMachineModel.getAllItems());
    };
//
////
//    public static void putItems = (Request request, Response response ) -> {
//        String raw = request.queryMap().get("juice").get("body").value();
//        return raw;
//    };



}
