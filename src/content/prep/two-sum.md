---
title: Two Sum
description: Find two numbers in an array that add up to a target. A classic warm-up that tests whether you reach for a hash map.
category: coding
difficulty: easy
tags: [arrays, hash map]
date: 2026-10-22
---

## The question

Given an array of integers `nums` and an integer `target`, return the indices of the two
numbers that add up to `target`. You can assume there is exactly one answer, and you can't
use the same element twice.

```text
Input:  nums = [2, 7, 11, 15], target = 9
Output: [0, 1]   // nums[0] + nums[1] == 9
```

## Clarify first

Good questions to ask before you write any code:

- Can the array contain negative numbers or duplicates?
- Is there always exactly one answer? What should I return if there isn't one?
- Should I return indices or values? Does the order matter?

## Brute force: O(n²)

Try every pair. It's fine to say this out loud first, because it shows you have a working
answer before you optimise.

## Optimal: one pass with a hash map, O(n)

As you walk the array, remember each value's index. For each number, check whether its
*complement* (`target - num`) has already been seen.

<details>
<summary>Show solution (Java)</summary>

```java
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> seen = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        Integer j = seen.get(target - nums[i]);
        if (j != null) {
            return new int[] { j, i };
        }
        seen.put(nums[i], i);
    }
    throw new IllegalArgumentException("No two numbers add up to target");
}
```

</details>

<details>
<summary>Show solution (Python)</summary>

```python
def two_sum(nums: list[int], target: int) -> list[int]:
    seen: dict[int, int] = {}
    for i, num in enumerate(nums):
        if (j := seen.get(target - num)) is not None:
            return [j, i]
        seen[num] = i
    raise ValueError("No two numbers add up to target")
```

</details>

## Complexity

| Approach    | Time  | Space |
| ----------- | ----- | ----- |
| Brute force | O(n²) | O(1)  |
| Hash map    | O(n)  | O(n)  |

## What interviewers look for

> Spotting the time and memory trade-off and explaining it clearly matters more than
> typing the code fast.

- You check the map *before* inserting, which handles `[3, 3]` with target `6` correctly.
- You can talk about the follow-up: if the array is **sorted**, two pointers give O(n) time
  with O(1) extra space.
