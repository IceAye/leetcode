# ❓ DESCRIPTION:
# You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.
# Return the maximum score you can get by erasing exactly one subarray.
# An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).
# 📅 (daily question 2025 July, 22nd)

# ✅ SOLUTION (80.64% runtime, 52.26% memory):
class Solution(object):
    def maximumUniqueSubarray(self, nums):
        seen = set()
        left = 0
        sum = 0
        max_sum = 0

        for right in range(len(nums)):
            while nums[right] in seen:
                seen.remove(nums[left])
                sum -= nums[left]
                left += 1
            seen.add(nums[right])
            sum += nums[right]
            max_sum = max(sum, max_sum)

        return max_sum
    
# 📌 TESTCASE:
s = Solution()
print(s.maximumUniqueSubarray([4,2,4,5,6])) # 17
print(s.maximumUniqueSubarray([5,2,1,2,5,2,1,2,5])) # 8