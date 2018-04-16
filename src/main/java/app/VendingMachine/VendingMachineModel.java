package app.VendingMachine;

import app.Item.Item;
import com.google.common.collect.ImmutableList;

import java.util.List;

public class VendingMachineModel {

    private static final List<Item> items = ImmutableList.of(
            new Item("Chocolate", 0.65, 12),
            new Item ("Crisps", 1.00, 8),
            new Item ("Juice",  1.50, 5 )
    );

    public static Iterable<Item> getAllItems(){
        return items;
    }
}
