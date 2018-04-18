package app.Util;

public class Path {

    public static class Web {
        public static final String ITEMS = "/items/";
        public static final String HOME = "/home/";
        public static String UPDATE = "/items/add/"; //uses put http method; data is contained in req body

    }

    public static class Template {
        public final static String INDEX = "hello.hbs";
    }
}
