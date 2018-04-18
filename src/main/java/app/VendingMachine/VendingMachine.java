package app.VendingMachine;

import gherkin.deps.com.google.gson.Gson;
import spark.Request;
import spark.Response;
import spark.Route;

import java.util.HashMap;
import java.util.Map;


public class VendingMachine {

    public static Route getItems = (Request request, Response response) -> {
        System.out.println("get request made");

        Gson gson = new Gson();
        return gson.toJson(VendingMachineModel.getAllItems());
    };


    public static Route postItems = (Request request, Response response ) -> {
        Map<String, Object> model = new HashMap<>();
        System.out.println("post request made");
        return VendingMachineModel.test();
    };



}
