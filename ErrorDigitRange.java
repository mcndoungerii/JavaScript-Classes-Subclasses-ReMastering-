import java.util.Stack;

/**
 * A system reconstruct an integer that is input into it but possibly
 */

public class ErrorDigitRange {
    public static int solve5(int n) {
		int min = Integer.MAX_VALUE;
		int max = Integer.MIN_VALUE;
		for (int i = 0; i <= 9; i++) {
			for (int j = 0; j <= 9; j++) {
				String s = temp(n, i, j);
				if (s.charAt(0) == '0')
					continue;
				if (Integer.parseInt(s) > max)
					max = Integer.parseInt(s);
				if (Integer.parseInt(s) < min)
					min = Integer.parseInt(s);

			}
		}
		return max - min;
	}

	private static String temp(int n, int i, int j) {
		String s = Integer.toString(n);
		char ii = (char) (i + '0');
		char jj = (char) (j + '0');
		s = s.replace(ii, jj);
		return s;
	}
}

abstract class OtherErrorDigitRange {
    private static int solve5(int n) {
        Stack<Integer> stack = new Stack<>();
        int original = n;
        while(n > 0) {
            stack.push(n%10);
            n/=10;
        }
        int res = 0, replace = -1;
        while(!stack.isEmpty()) {
            int cur = stack.pop();
            if(replace == -1) {
                if(cur < 9) {
                    replace = cur;
                    cur = 9;
                }
            }
            else {
                if(cur == replace) {
                    cur = 9;
                }
            }
            res *=10;
            res += cur;
        }
        return res - original;
    }
}

