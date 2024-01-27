public class main {
    public static void main(String[] args) {
        String input = "javascript is awesome";
        StringBuilder output = new StringBuilder();

        int x = input.length();

        for (int z = 0; z < x; z++) {
            if (input.charAt(z) == 'a')
                output.append(4);
            else if (input.charAt(z) == 'e')
                output.append(3);
            else if (input.charAt(z) == 'i')
                output.append(1);
            else if (input.charAt(z) == 'o')
                output.append(0);
            else
                output.append(input.charAt(z));
        }

        System.out.println(output);
    }
}
