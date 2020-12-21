public class AbbreviateTwoWords {

    public static String abbrevName(String name) {
        String[] fullName = name.split(" ");
        String firstname = fullName[0];
        String lastname = fullName[1];
        return (firstname.charAt(0) + "." + lastname.charAt(0)).toUpperCase();
    }
}