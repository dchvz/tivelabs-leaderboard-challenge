import React from 'react'
import { Avatar } from "./Avatar"

export function Leaderboard(props) {
  const {ranks, userId} = props
  return (
    <div>
      <p className="ml-12 font-black text-2xl pb-">🏆 Player Rank</p>
      <div className="shadow-lg m-10">
        <table className="table-auto w-full">
          <thead className="text-xs font-semibold uppercase text-gray-600 bg-gray-50">
            <tr>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Name</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Score</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Country</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Global</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">National</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Friends</div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-100">
            {
              ranks.map((rankedUser) => (
                <tr className={`${userRowColor(rankedUser, userId)} hover:bg-gray-200`} key={rankedUser.userId}>
                  <td className="text-left p-2">
                    <div className="flex items-center">
                      <Avatar />
                      <p className="font-medium text-gray-800 pl-2">{rankedUser.name}</p>
                    </div>
                  </td>
                  <td className="font-light text-center text-gray-600">
                    {rankedUser.score}
                  </td>
                  <td className="text-2xl text-center">
                    {getCountryFlag(rankedUser.country)}
                  </td>
                  <td className="font-light text-center text-gray-600">
                    {rankedUser.global}
                  </td>
                  <td className="font-light text-center text-gray-600">
                    {rankedUser.national}
                  </td>
                  <td className="font-light text-center text-gray-600">
                    {rankedUser.friends}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

function getCountryFlag(country){
  const flags = {
    BO: '🇧🇴',
    CA: '🇨🇦',
    AR: '🇦🇷',
    US: '🇺🇸',
    MX: '🇲🇽',
    CO: '🇨🇴'
  }
  return flags[country]
}

function userRowColor(currentUserRow, userId){
  const userRowMatches = userId === currentUserRow.userId
  let rowStyle = ''
  if (userRowMatches) {
    rowStyle = 'bg-blue-100'
  }
  return rowStyle
}