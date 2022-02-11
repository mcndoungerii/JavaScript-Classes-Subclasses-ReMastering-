/**
 * JEssica has an array, numbers , consisting of n integers
 */

import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Queue;

public class ArrayGame {
    public int solve4(List<Integer> nums) {
		int min = Integer.MAX_VALUE;
		for (int i : nums)
			min = Math.min(min, i);
		int answer = 0;
		for (int i : nums)
			answer += i - min;
		return answer;
	}
    
}

abstract class otherArrayGameSoln {
    private static int solve4(Integer[] nums) {
        Queue<Integer> maxHeap = new PriorityQueue<>((a, b)->b-a);
        int min = Integer.MAX_VALUE;
        for(int n : nums) {
            maxHeap.offer(n);
            min = Math.min(min, n);
        }
        int res = 0;
        while(min != maxHeap.peek()) {
            int first = maxHeap.poll();
            min = first;
            List<Integer> lst = new ArrayList<>();
            while(!maxHeap.isEmpty()) {
                int next = maxHeap.poll() + 1;
                lst.add(next);
                min = Math.min(min, next);
            }
            maxHeap.offer(first);
            maxHeap.addAll(lst);
            res++;
        }
        return res;
    }
}
