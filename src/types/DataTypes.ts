export type Timeframes = {
  daily: DailyOrWeeklyOrMonthly
  weekly: DailyOrWeeklyOrMonthly
  monthly: DailyOrWeeklyOrMonthly
}

export type DailyOrWeeklyOrMonthly = {
  current: number
  previous: number
}
