/**
 * Compliance Crawler Directory Reset
 */

 class Solution {
     public int minOperations(String[] logs){
         int ans = 0;
         for (int i = 0; i < logs.length; i++) {
             if(logs[i].equals("./")) continue;
             else if(logs[i].equals("../")) ans--;
             else ans++;
             if(ans < 0) ans = 0;
         }
         if(ans < 0) return 0;
         return ans;
     }
 }