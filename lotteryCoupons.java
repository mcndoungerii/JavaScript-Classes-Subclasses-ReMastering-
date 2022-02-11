/**
 * Lottery Coupons
 */

import java.util.HashMap;
import java.util.Map;

public class lotteryCoupons {

    private static int solve2(int n) {
        int[] dp = new int[n+1];
        Map<Integer, Integer> map = new HashMap<>();
        for(int i=1;i<=n;i++) {
            if(i < 10) {
                dp[i] = i;
            }else {
                dp[i] = dp[i/10] + i%10;
            }
            map.put(dp[i], map.getOrDefault(dp[i], 0) + 1);
        }
        int res = 0;
        for(Map.Entry<Integer, Integer> entry : map.entrySet()) {
            res += entry.getValue()/2;
        }
        return res;
    }
    
}




