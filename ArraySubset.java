import java.util.Arrays;

public class ArraySubset {
    public static int[] solve1(int[] arr) {
		Arrays.sort(arr);
		int n = arr.length;
		int[] temp = new int[n];
		temp[0] = arr[0];
		for (int i = 1; i < n; i++) {
			temp[i] = temp[i - 1] + arr[i];
		}
		int point = n - 2;
		while (point >= 0) {
			if (temp[n - 1] - temp[point] > temp[point]) {
				return createArr(arr, point + 1, n);
			}
			point--;
		}
		return createArr(arr, 0, n);
	}

	public static int[] createArr(int[] arr, int i, int n) {
		int[] ans = new int[n - i];
		int j = 0;
		while (i < n) {
			ans[j] = arr[i];
			j++;
			i++;
		}
		return ans;
	}
}

/**?
 * OR other soln
 */

 abstract class OtherSubset {
    private static int solve1(Integer[] nums) {
        int sum = 0;
        for(int n : nums) {
            sum += n;
        }
        Arrays.sort(nums, (a, b)->b-a);
        int cur = 0;
        for(int i=0;i<nums.length;i++) {
            cur+=nums[i];
            if(2 * cur > sum)
                return cur;
        }
        return -1;
    }
 }

