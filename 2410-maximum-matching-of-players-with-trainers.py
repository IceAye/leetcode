# ❓ DESCRIPTION:
# You are given a 0-indexed integer array players, where players[i] represents the ability of the ith player. You are also given a 0-indexed integer array trainers, where trainers[j] represents the training capacity of the jth trainer.
# The ith player can match with the jth trainer if the player's ability is less than or equal to the trainer's training capacity. Additionally, the ith player can be matched with at most one trainer, and the jth trainer can be matched with at most one player.
# Return the maximum number of matchings between players and trainers that satisfy these conditions.
# 📅 (daily question 2025 July, 13)

# ✅ SOLUTION:
class Solution(object):
    def matchPlayersAndTrainers(self, players, trainers):
        players.sort()
        trainers.sort()

        result = 0
        i = 0
        j = 0

        while i < len(players) and j < len(trainers):
            if players[i] <= trainers[j]:
                result += 1
                i += 1
                j += 1
            else:
                j += 1

        return result
        
# 📌 TESTCASE:
s = Solution()
print(s.matchPlayersAndTrainers([4,7,9], [8,2,5,8])) # 2