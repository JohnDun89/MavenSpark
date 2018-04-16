package app.VendingMachine;

import gherkin.deps.com.google.gson.Gson;
import spark.Request;
import spark.Response;
import spark.Route;


public class VendingMachine {



    public static Route getItems = (Request request, Response response) -> {
         Gson gson = new Gson();
        return gson.toJson(VendingMachineModel.getAllItems());
    };







}
