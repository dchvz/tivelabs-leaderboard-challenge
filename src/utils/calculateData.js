import {users} from '../utils/usersData.js'

export function getUpdatedScoreboard() {
  updateUsersStats()
  sortGlobalRank()
  const scoreboard = []
  for (const user of users) {
    const userRank = calculateCache(user.userId)
    scoreboard.push(userRank)
  }
  return scoreboard
}

function updateUsersStats() {
  for (const user of users) {
    const levelUpInfo = {
      level: parseInt(user.level),
      time: parseInt(user.time)
    }
    const userLevelInfo = levelUpIfNeeded(levelUpInfo)
    user.time = userLevelInfo.time
    user.level = userLevelInfo.level
    const scoreCalculationInfo = {
      time: user.time,
      coin: parseInt(user.coins),
      level: user.level
    }
    const userScoreInfo = calculateScore(scoreCalculationInfo)
    user.score = userScoreInfo['score']
  }
}

function levelUpIfNeeded(userLevelInformation) {
  const {level, time} = userLevelInformation
  const secondsToLevelUp = 28800
  const userPlayTimeIsEnoughToLevelUp = time >= secondsToLevelUp
  if (userPlayTimeIsEnoughToLevelUp) {
    const raisedLevels = Math.floor(time / secondsToLevelUp)
    const remainingPlayTime = time - (raisedLevels * secondsToLevelUp)
    const updatedUserLevel = level + raisedLevels
    return { level: updatedUserLevel, time: remainingPlayTime}
  } else {
    return userLevelInformation
  }
}

function calculateScore(scoreCalculationInfo) {
  const {time, coin, level} = scoreCalculationInfo
  return {score: level * coin + time}
}

function sortGlobalRank() {
  users.sort((a,b) => b.score - a.score)
}

function calculateCache(userId) {
  const user = getUserById(userId)
  const {level, time, score, country, name} = user
  return {
    userId,
    global: calculateGlobalRank(userId)['position'],
    national: calculateNationalRank(userId)['position'],
    friends: calculateFriendsPosition(userId)['position'],
    score,
    level,
    time,
    country,
    name
  }
}

function calculateGlobalRank(userId) {
  const userGlobalRank = calculateCacheFromScoreboard(users, userId)
  return {position: userGlobalRank}
}

function calculateNationalRank(userId) {
  const user = getUserById(userId)
  const regionalPlayers = users.filter(rankedUser => rankedUser.country === user.country)
  const userNationalRank = calculateCacheFromScoreboard(regionalPlayers, userId)
  return {position: userNationalRank}
}

function calculateFriendsPosition(userId) {
  const user = getUserById(userId)
  const userHasFriends = user.friends.length > 0
  if (userHasFriends) {
    const userFriendNetwork = users.filter(rankedUser => user.friends.includes(rankedUser.userId) || rankedUser.userId === userId)
    const userFriendRank = calculateCacheFromScoreboard(userFriendNetwork, userId)
    return {position: userFriendRank}
  } else {
    return {position: 1}
  }
}

function calculateCacheFromScoreboard(scoreboard, userId) {
  const rank = scoreboard.findIndex(user => user.userId === userId) + 1
  return rank

}

function getUserById(userId){
  const user = users.find(user => user.userId === userId)
  return user
}



